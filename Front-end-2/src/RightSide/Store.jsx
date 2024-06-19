import React, { useEffect } from 'react';
import './css/Story.css';

function Topbar() {

  return (
    <>
      <div className="story-container">
        <div className="story-inner">         
          <div className="story-bubbles">
            <div className="bubbles">
              <div className="bubble" data-post-id="1" data-post-title="Bag" data-post-reed="0" data-post-order="0">
                <a href="">
                  <div className="thumb">
                    <img src="" alt="" />
                  </div>
                  <div className="text">
                    <span>Bag</span>
                  </div>
                </a>
              </div> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Topbar;
