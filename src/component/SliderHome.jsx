"use client";
import gsap from "gsap";
import Link from "next/link";
// components/SliderComponent.js
import { useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

const SliderHome = () => {
  useEffect(() => {
    var thumbs = new Swiper(".thumbs", {
      centeredSlidesBounds: true,
      slidesPerView: 2,
      direction: "horizontal",
      watchOverflow: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      spaceBetween: 20,
      speed: 1200,
    });
    var slider = new Swiper(".main-slider", {
      spaceBetween: 1000,
      initialSlide: 1,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      effect: "coverflow",
      speed: 2000,
      thumbs: {
        swiper: thumbs,
      },
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
    });
  }, []);

  useEffect(() => {
    gsap.from(".thumbs .swiper-slide", {
      x: 1000,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      delay: 1,
    });
  }, []);

  return (
    <div className="leading-ecommerce main">
      <div className="main">
        <div className="swiper main-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide back_one">
              <div className="overlay"></div>
              <div className="slider-text">
                <h5 className="mb_40">HEALTHCARE</h5>
                <p className="mb-0">
                  By designing highly efficient and cross-platform apps, we
                  ensure that our healthcare clients can manage patient data to
                  the highest standards of efficiency and security. It is our
                  mission to ensure a positive and healthy environment in the
                  community and working with healthcare organizations brings us
                  nearer to our mission at every step we take.
                </p>

                <Link
                  href="/get-in-touch"
                  className="grow-contact-button mt_40"
                >
                  Contact Us{" "}
                  <span className="material-symbols-outlined">east</span>
                </Link>
              </div>
            </div>
            <div className="swiper-slide back_two">
              <div className="overlay"></div>
              <div className="slider-text">
                {/* <!-- <h5 className="mb_40">
              Leading ECommerce Software Development Company
            </h5> --> */}
                {/* <h5 className="sec-title-3 mb_40">
                  <span className="letter">L</span>
                  <span className="letter">e</span>
                  <span className="letter">a</span>
                  <span className="letter">d</span>
                  <span className="letter">i</span>
                  <span className="letter">n</span>
                  <span className="letter">g</span>{" "}
                  <span className="letter">E</span>
                  <span className="letter">C</span>
                  <span className="letter">o</span>
                  <span className="letter">m</span>
                  <span className="letter">m</span>
                  <span className="letter">e</span>
                  <span className="letter">r</span>
                  <span className="letter">c</span>
                  <span className="letter">e</span>
                  <span className="letter">S</span>
                  <span className="letter">o</span>
                  <span className="letter">f</span>
                  <span className="letter">t</span>
                  <span className="letter">w</span>
                  <span className="letter">a</span>
                  <span className="letter">r</span>
                  <span className="letter">e</span>
                  <span className="letter-wrapper"></span>
                  <br />
                  <span className="letter">D</span>
                  <span className="letter">e</span>
                  <span className="letter">v</span>
                  <span className="letter">e</span>
                  <span className="letter">l</span>
                  <span className="letter">o</span>
                  <span className="letter">p</span>
                  <span className="letter">m</span>
                  <span className="letter">e</span>
                  <span className="letter">n</span>
                  <span className="letter">t</span>{" "}
                  <span className="letter">C</span>
                  <span className="letter">o</span>
                  <span className="letter">m</span>
                  <span className="letter">p</span>
                  <span className="letter">a</span>
                  <span className="letter">n</span>
                  <span className="letter">y</span>
                </h5> */}
                <h5 className="mb_40">MANUFACTURING</h5>
                <p className="mb-0 leading">
                  The manufacturing industry faces unique challenges and
                  opportunities that can be achieved by an efficient web
                  presence. We help to position our clients as an enviable
                  manufacturing entity in various industries, including
                  automobiles, machinery, parts and equipment manufacturers.
                  Through our online solutions, we play a vital role in the
                  business growth of our clients.
                </p>

                <Link
                  href="/get-in-touch"
                  className="grow-contact-button mt_40"
                >
                  Contact Us{" "}
                  <span className="material-symbols-outlined">east</span>
                </Link>
              </div>
            </div>
            <div className="swiper-slide back_three">
              <div className="overlay"></div>
              <div className="slider-text">
                <h5 className="mb_40"> CHARITY ORGANISATION </h5>
                <p className="mb-0">
                  By our comprehensive strategies, we help organization to
                  project their voice through their website, apps and social
                  media presence. We believe it is our community responsibility
                  to help charity clients achieve their goals.
                </p>
                <Link
                  href="/get-in-touch"
                  className="grow-contact-button mt_40"
                >
                  Contact Us{" "}
                  <span className="material-symbols-outlined">east</span>
                </Link>
              </div>
            </div>
            <div className="swiper-slide back_four">
              <div className="overlay"></div>
              <div className="slider-text">
                <h5 className="mb_40">FINACIAL & INSURANCE</h5>
                <p className="mb-0">
                  We work with a lending agencies, insurance companies for
                  websites, apps over the years. Our services attract the most
                  relevant segment of the market to derive the maximum value
                  from our clients’ investment.
                </p>

                <Link
                  href="/get-in-touch"
                  className="grow-contact-button mt_40"
                >
                  Contact Us{" "}
                  <span className="material-symbols-outlined">east</span>
                </Link>
              </div>
            </div>
            <div className="swiper-slide back_five">
              <div className="overlay"></div>
              <div className="slider-text">
                <h5 className="mb_40">SPORTS & FITNESS</h5>
                <p className="mb-0">
                  Our service to clients in the sports and fitness industry is
                  second to none. We fully understand the importance of
                  consistently offering something new in order to motivate
                  clients to focus on their health and wellness. Our service
                  packages are designed to meet the needs and challenges of
                  clients including gyms, health clubs, yoga groups, and sports
                  clubs.
                </p>

                <Link
                  href="/get-in-touch"
                  className="grow-contact-button mt_40"
                >
                  Contact Us{" "}
                  <span className="material-symbols-outlined">east</span>
                </Link>
              </div>
            </div>
            <div className="swiper-slide back_six">
              <div className="overlay"></div>
              <div className="slider-text">
                <h5 className="mb_40">EDUCATION </h5>
                <p className="mb-0">
                  Education lies at the heart of any community’s progress. Our
                  website solutions help our clients deliver, most comprehensive
                  learning solutions to their clients while addressing their
                  most pressing needs and concerns.
                </p>

                <Link
                  href="/get-in-touch"
                  className="grow-contact-button mt_40"
                >
                  Contact Us{" "}
                  <span className="material-symbols-outlined">east</span>
                </Link>
              </div>
            </div>
            <div className="swiper-slide back_seven">
              <div className="overlay"></div>
              <div className="slider-text">
                <h5 className="mb_40">TOURISM & HOSPITALITY </h5>
                <p className="mb-0">
                  An attractive site is must for the growth of any sector. We
                  walk with clients in the hotels, food and beverage, resort,
                  and leisure industries to offer friendly services through
                  their site for maximum exposure & delivery.
                </p>

                <Link
                  href="/get-in-touch"
                  className="grow-contact-button mt_40"
                >
                  Contact Us{" "}
                  <span className="material-symbols-outlined">east</span>
                </Link>
              </div>
            </div>
            <div className="swiper-slide back_eight">
              <div className="overlay"></div>
              <div className="slider-text">
                <h5 className="mb_40">REAL ESTATE </h5>
                <p className="mb-0">
                  In the real estate sector, we strive to offer instant and
                  mutually beneficial connections between the buyers and
                  sellers. Our platforms are robust, safe and completely
                  dynamic, allowing millions of transactions securely.
                </p>

                <Link
                  href="/get-in-touch"
                  className="grow-contact-button mt_40"
                >
                  Contact Us{" "}
                  <span className="material-symbols-outlined">east</span>
                </Link>
              </div>
            </div>
            <div className="swiper-slide back_nine">
              <div className="overlay"></div>
              <div className="slider-text">
                <h5 className="mb_40">INFORMATION & TECHNOLOGY </h5>
                <p className="mb-0">
                  No industry in the world can succeed without managing its
                  informational assets efficient. We work with numerous clients
                  in the IT industry to help them deliver optimum IT services to
                  their users.
                </p>

                <Link
                  href="/get-in-touch"
                  className="grow-contact-button mt_40"
                >
                  Contact Us{" "}
                  <span className="material-symbols-outlined">east</span>
                </Link>
              </div>
            </div>
            <div className="swiper-slide back_ten">
              <div className="overlay"></div>
              <div className="slider-text">
                <h5 className="mb_40">FOOD PROCESSING </h5>
                <p className="mb-0">
                  We are witnessing high-speed growth in the food processing
                  sector with rising demand in all areas of the supply chain.
                  Our services are available to all major players in the food
                  processing industry as well.
                </p>

             <Link href="/get-in-touch" className="grow-contact-button mt_40">
              Contact Us <span className="material-symbols-outlined">east</span>
            </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="thumb-bottom">
          <div className="position-relative slider-btn-group">
            <div className="slider-btn">
              <div className="swiper-button-next next-">
                <span className="material-symbols-outlined">
                  keyboard_arrow_left
                </span>
              </div>
              <div className="swiper-button-prev">
                <span className="material-symbols-outlined">
                  keyboard_arrow_right
                </span>
              </div>
            </div>
          </div>

          <div className="swiper thumbs">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="overlay"></div>
                <div className="caption">HEALTHCARE</div>
              </div>
              <div className="swiper-slide">
                <div className="overlay"></div>
                <div className="caption">MANUFACTURING</div>
              </div>
              <div className="swiper-slide">
                <div className="overlay"></div>
                <div className="caption">CHARITY ORGANISATION</div>
              </div>
              <div className="swiper-slide">
                <div className="overlay"></div>
                <div className="caption">FINACIAL & INSURANCE</div>
              </div>
              <div className="swiper-slide">
                <div className="overlay"></div>
                <div className="caption">SPORTS & FITNESS</div>
              </div>

              <div className="swiper-slide">
                <div className="overlay"></div>
                <div className="caption">EDUCATION</div>
              </div>
              <div className="swiper-slide">
                <div className="overlay"></div>
                <div className="caption">TOURISM & HOSPITALITY </div>
              </div>
              <div className="swiper-slide">
                <div className="overlay"></div>
                <div className="caption">REAL ESTATE </div>
              </div>
              <div className="swiper-slide">
                <div className="overlay"></div>
                <div className="caption">INFORMATION & TECHNOLOGY </div>
              </div>
              <div className="swiper-slide">
                <div className="overlay"></div>
                <div className="caption"> FOOD PROCESSING </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderHome;
