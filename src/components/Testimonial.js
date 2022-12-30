import React from 'react';
import '../css/Testimonial.css';

function Testimonial() {
  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center p-2">What Our customers say about us</h2>
      <div className="row g-2">
        <div className="col-md-4 d-flex justify-content-center">
          <div className="card p-3 text-center px-4">

            <div className="user-image">

              <img src="https://i.imgur.com/PKHvlRS.jpg" className="rounded-circle" alt="avatar" width="80" />

            </div>

            <div className="user-content">

              <h5 className="mb-0">Bruce Hardy</h5>
              <span>Software Developer</span>
              <p>
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
                Ut enim ad minim veniam,
                quis nostrud exercitation
                ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </p>

            </div>

            <div className="ratings">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />

            </div>

          </div>
        </div>

        <div className="col-md-4 d-flex justify-content-center">

          <div className="card p-3 text-center px-4">

            <div className="user-image">

              <img src="https://i.imgur.com/w2CKRB9.jpg" className="rounded-circle" alt="avatar" width="80" />

            </div>

            <div className="user-content">

              <h5 className="mb-0">Mark Smith</h5>
              <span>Web Developer</span>
              <p>
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
                Ut enim ad minim veniam,
                quis nostrud exercitation
                ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </p>

            </div>

            <div className="ratings">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />

            </div>

          </div>

        </div>

        <div className="col-md-4 d-flex justify-content-center">

          <div className="card p-3 text-center px-4">

            <div className="user-image">

              <img src="https://i.imgur.com/ACeArwY.jpg" className="rounded-circle" alt="avatar" width="80" />

            </div>

            <div className="user-content">

              <h5 className="mb-0">Veera  Duncan</h5>
              <span>Software Architect</span>
              <p>
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
                Ut enim ad minim veniam,
                quis nostrud exercitation
                ullamco laboris nisi ut
                aliquip ex ea commodo consequat.
              </p>

            </div>

            <div className="ratings">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Testimonial;
