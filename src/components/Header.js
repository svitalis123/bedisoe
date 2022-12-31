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
                <Link to="/" style={{ textDecoration: 'none', color: '#111' }}><MenuItem onClick={handleClose}>Home</MenuItem></Link>
                <Link to="/products" style={{ textDecoration: 'none', color: '#111' }}><MenuItem onClick={handleClose}>Products</MenuItem></Link>
                <Link to="/contact" style={{ textDecoration: 'none', color: '#111' }}><MenuItem onClick={handleClose}>Contact</MenuItem></Link>
                <Link to="/about" style={{ textDecoration: 'none', color: '#111' }}><MenuItem onClick={handleClose}>About</MenuItem></Link>
              </Menu>
            </div>
          </>
        ) : (
          <>
            <div className="large_container">
              <nav>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/about">About</Link>
              </nav>
            </div>
          </>
        )
      }
    </div>
  );
}

export default Header;
