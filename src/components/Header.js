import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import { FaBars } from 'react-icons/fa';
import MenuItem from '@mui/material/MenuItem';
import '../css/header.css';

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

function Header() {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="header_container">
      {
        windowSize.innerWidth <= 768 ? (
          <>
            <div className="small_container">
              <Button
                id="basic-button"
                className="small_container_button1"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
              >
                <FaBars className="small_container_button1_bars" />
              </Button>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
              >
                <MenuItem onClick={handleClose}>Home</MenuItem>
                <MenuItem onClick={handleClose}>Products</MenuItem>
                <MenuItem onClick={handleClose}>Contact</MenuItem>
                <MenuItem onClick={handleClose}>About</MenuItem>
              </Menu>
            </div>
          </>
        ) : (
          <>
            <div className="large_container">
              <nav>
                <Link to="/">Home</Link>
                <Link to="/">Products</Link>
                <Link to="/">Contact</Link>
                <Link to="/">About</Link>
              </nav>
            </div>
          </>
        )
      }
    </div>
  );
}

export default Header;
