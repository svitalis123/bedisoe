import React from 'react';
import '../css/Ceo.css';

function Ceo() {
  return (
    <div className="container">
      <h2 className="text-center p-2">Meet Our Heads</h2>
      <div className="row">
        <div className="col-lg-4">
          <div className="card">
            <div className="face front-face">
              <img
                src="https://images.unsplash.com/photo-1557862921-37829c790f19?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
                alt=""
                className="profile"
              />
              <div className="pt-3 text-uppercase name">
                Robert Garrison
              </div>
              <div className="designation">CEO</div>
            </div>
            <div className="face back-face">
              <span className="fas fa-quote-left" />
              <div className="testimonial">
                I made back the purchase price in just 48 hours! Thank you for making it pain less,
                pleasant.
                The service was execellent. I will refer everyone I know.
              </div>
              <span className="fas fa-quote-right" />
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card">
            <div className="face front-face">
              <img
                src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                alt=""
                className="profile"
              />
              <div className="pt-3 text-uppercase name">
                Jeffery Kennan
              </div>
              <div className="designation">vice ceo</div>
            </div>
            <div className="face back-face">
              <span className="fas fa-quote-left" />
              <div className="testimonial">
                Really good, you have saved our business!
                I made bacck the purchase price in just 48 hours!
                man, this thing is getting better and better as I learn more about it.
              </div>
              <span className="fas fa-quote-right" />
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card">
            <div className="face front-face">
              <img
                src="/images/vision.png"
                alt=""
                className="profile"
              />
              <div className="pt-3 text-uppercase name">
                Vision
              </div>
              <div className="designation">Our vision</div>
            </div>
            <div className="face back-face">
              <span className="fas fa-quote-left" />
              <div className="testimonial">
                Really good, you have saved our business!
                I made bacck the purchase price in just 48 hours!
                man, this thing is getting better and better as I learn more about it.
              </div>
              <span className="fas fa-quote-right" />
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="card">
            <div className="face front-face">
              <img
                src="/images/mission.png"
                alt=""
                className="profile"
              />
              <div className="pt-3 text-uppercase name">
                Mission
              </div>
              <div className="designation">Our Mission</div>
            </div>
            <div className="face back-face">
              <span className="fas fa-quote-left" />
              <div className="testimonial">
                Account keeper is the most valuable business
                research we have EVER purchased. Without
                electrician, we would ahave gone bankrupt by now.
              </div>
              <span className="fas fa-quote-right" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ceo;
