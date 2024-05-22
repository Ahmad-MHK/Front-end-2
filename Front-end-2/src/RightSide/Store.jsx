import React, { useEffect } from 'react';
import './Story.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'iconmonstr-iconic-font/css/iconmonstr-iconic-font.min.css';
// import 'swiper/swiper-bundle.min.css';

function Topbar() {

  // useEffect(() => {
  //   const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  //   if (!isMobile) {
  //     const slider = document.querySelector('.story-bubbles');
  //     let isDown = false;
  //     let startX;
  //     let scrollLeft;

  //     const handleMouseDown = (e) => {
  //       isDown = true;
  //       slider.classList.add('active');
  //       startX = e.pageX - slider.offsetLeft;
  //       scrollLeft = slider.scrollLeft;
  //     };

  //     const handleMouseLeave = () => {
  //       isDown = false;
  //       slider.classList.remove('active');
  //     };

  //     const handleMouseUp = () => {
  //       isDown = false;
  //       slider.classList.remove('active');
  //     };

  //     const handleMouseMove = (e) => {
  //       if (!isDown) return;
  //       e.preventDefault();
  //       const x = e.pageX - slider.offsetLeft;
  //       const walk = (x - startX) * 1; // scroll-fast
  //       slider.scrollLeft = scrollLeft - walk;
  //     };

  //     slider.addEventListener('mousedown', handleMouseDown);
  //     slider.addEventListener('mouseleave', handleMouseLeave);
  //     slider.addEventListener('mouseup', handleMouseUp);
  //     slider.addEventListener('mousemove', handleMouseMove);

  //     return () => {
  //       slider.removeEventListener('mousedown', handleMouseDown);
  //       slider.removeEventListener('mouseleave', handleMouseLeave);
  //       slider.removeEventListener('mouseup', handleMouseUp);
  //       slider.removeEventListener('mousemove', handleMouseMove);
  //     };
  //   }
  // }, []);

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
