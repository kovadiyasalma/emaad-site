"use client";
import React, { useEffect } from "react";
import processImg from "../../assets/images/process.png";
import webImg from "../../assets/images/web-image.png";
import appImg from "../../assets/images/app-image.png";
import Image from "next/image";
import { OurWorkPreviewFC } from "../../../commFun";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const WorkPreviews = () => {
  useEffect(() => {
    OurWorkPreviewFC();
  }, []);
  useEffect(() => {
    const checkbox = document.querySelector(".checkbox");
    const webText = document.querySelector(".web-text");
    const appText = document.querySelector(".app-text");

    const handleCheckboxChange = () => {
      if (checkbox.checked) {
        webText.classList.remove("red");
        appText.classList.add("red");
      } else {
        webText.classList.add("red");
        appText.classList.remove("red");
      }
    };

    // Add the event listener when the component mounts
    checkbox?.addEventListener("change", handleCheckboxChange);

    // Cleanup the event listener when the component unmounts
    return () => {
      checkbox?.removeEventListener("change", handleCheckboxChange);
    };
  }, []);
  return (
    <>
      <div className="brilliant-previews-section">
        <div className="container">
          <div className="brilliant-previews-title">
            <h1>
              Brilliant&nbsp;
              <span className="brilliant-bg-img">
                Previews
                <span className="brilliant-img">
                  <Image src={processImg} alt="img" />
                </span>
              </span>
            </h1>
            <p>
              Have a look at our product in action. See how our Real Estate
              Software Solution revolutionizes property management with robust
              features, seamless integration, and a user-friendly interface.
              Discover its power through real-world applications and success
              stories.
            </p>
          </div>
        </div>

        {/* <!-- web app toggel button section --> */}

        <div className="web-app-section">
          <div className="web-app-toggel text">
            <h3 className="web-text red">Web</h3>
            <input type="checkbox" className="checkbox" id="checkbox" />
            <label htmlFor="checkbox" className="checkbox-label">
              <span className="web-ball"></span>
            </label>
            <h3 className="app-text">App</h3>
          </div>
          {/* <!-- swiper web app iamges --> */}
          <div className="web-app-swiper">
            <div className="web-swiper">
              <Swiper
                navigation={{
                  prevEl: ".swiper-button-prev",
                  nextEl: ".swiper-button-next",
                }}
                modules={[Navigation]}
                className="swiper-wrapper bg-swiper"
              >
                <SwiperSlide>
                  <div className="swiper-slide web-img">
                    <Image
                      src={appImg}
                      width={"100%"}
                      height={"100%"}
                      alt="Web Image 1"
                    />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="swiper-slide web-img">
                    <Image
                      src={webImg}
                      width={"100%"}
                      height={"100%"}
                      alt="Web Image 2"
                    />
                  </div>
                </SwiperSlide>

                {/* Custom Navigation Buttons */}
                <div className="web-app-button fs-5">
                  <div className="swiper-button-next btn-web-swiper">
                    <span className="material-symbols-outlined app-btn-icon">
                      east
                    </span>
                  </div>
                  <div className="swiper-button-prev btn-web-swiper">
                    <span className="material-symbols-outlined app-btn-icon">
                      west
                    </span>
                  </div>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkPreviews;
