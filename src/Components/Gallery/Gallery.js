import React from 'react';
import "./Gallery.css";
import galleryImg1 from './../../images/Gallery/gallery-one-img-1.jpg';
import galleryImg2 from './../../images/Gallery/gallery-one-img-2.jpg';
import galleryImg3 from './../../images/Gallery/gallery-one-img-3.jpg';
import galleryImg4 from './../../images/Gallery/gallery-one-img-4.jpg';
import galleryImg5 from './../../images/Gallery/gallery-one-img-5.jpg';


const Gallery = () => {
    return (
      <section className="gallery_section">
        <div className="gallery_one_bg"></div>
        <div className="gallery_one_container clearfix">
          <ul className="gallery_one_content clearfix">
            <li className="fadeInUp animated">
              <div className="gallery_one_img_box">
                <img src={galleryImg1} alt="" />
                <div className="gallery_one_icon">
                  <a href='/hello' className="img_popup">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </li>
            <li className="fadeInUp animated">
              <div className="gallery_one_img_box">
                <img src={galleryImg2} alt="" />
                <div className="gallery_one_icon">
                  <a href='/hello' className="img_popup">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </li>
            <li className="fadeInUp animated">
              <div className="gallery_one_img_box">
                <img src={galleryImg3} alt="" />
                <div className="gallery_one_icon">
                  <a href="/hello" className="img_popup">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </li>
            <li className="fadeInUp animated">
              <div className="gallery_one_img_box">
                <img src={galleryImg4} alt="" />
                <div className="gallery_one_icon">
                  <a href="/hello" className="img_popup">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </li>
            <li className="fadeInUp animated">
              <div className="gallery_one_img_box">
                <img src={galleryImg5} alt="" />
                <div className="gallery_one_icon">
                  <a className="img_popup" href='/instagram'>
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    );
};

export default Gallery;