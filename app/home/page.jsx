import React from "react";

const index = () => {
  return (
    <>
      <section className="marketer__hero">
        <div className="container">
          <div className="row custom-sm-reverse">
            <div className="col-xxl-5 col-xl-6 col-lg-6 col-md-6">
              <div className="marketer__hero-leftthumb">
                <img
                  className="position-absolute marketer__hero-shapeup"
                  src="https://crowdytheme.com/html/info/info-demo/assets/imgs/hero/hero-4/hand.png"
                  alt="hero image"
                />
                <h1
                  className="marketer__hero-subtitle has_char_anim"
                  data-on-scroll="0"
                >
                  Hi 🖐 I’m Johnson
                </h1>
                <h2
                  className="marketer__hero-title has_fade_anim"
                  data-on-scroll="0"
                  data-delay=".6"
                >
                  Digital <br />
                  <span id="typed_list">
                    <span>Marketer</span>
                    <span>Designer</span>
                    <span>Developer</span>
                  </span>
                  <span id="typed"></span>
                </h2>
                <div className="marketer__hero-pbt">
                  <div
                    className="cf_text marketer__hero-dis has_word_anim"
                    data-on-scroll="0"
                    data-delay=".7"
                  >
                    <p>
                      Unlock your global trafic by best <br />
                      <span>marketing</span> tools
                    </p>
                  </div>
                </div>
                <div
                  className="marketer__hero-btn cf_btn has_fade_anim"
                  data-delay="0.7"
                  data-ease="bounce"
                  data-on-scroll="0"
                  data-fade-from="top"
                >
                  <a
                    href="./contact.html"
                    className="wc-btn-primary btn-rollover-top"
                  >
                    Hire Me Now
                  </a>
                </div>
                <p className="marketer__hero-line">
                  marketing tools <span></span>
                </p>
                <div className="marketer__hero-tools">
                  <div
                    className="cf_image has_fade_anim has_fade_anim"
                    data-fade-from="left"
                    data-on-scroll="0"
                    data-delay=".7"
                  >
                    <img
                      src="https://crowdytheme.com/html/info/info-demo/assets/imgs/hero/hero-4/google.png"
                      alt="image"
                    />
                  </div>
                  <div
                    className="cf_image has_fade_anim has_fade_anim"
                    data-fade-from="left"
                    data-on-scroll="0"
                    data-delay=".8"
                  >
                    <img
                      src="https://crowdytheme.com/html/info/info-demo/assets/imgs/hero/hero-4/hubsport.png"
                      alt="image"
                    />
                  </div>
                  <div
                    className="cf_image has_fade_anim has_fade_anim"
                    data-fade-from="left"
                    data-on-scroll="0"
                    data-delay=".9"
                  >
                    <img
                      src="https://crowdytheme.com/html/info/info-demo/assets/imgs/hero/hero-4/hub2.png"
                      alt="image"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-6 col-lg-6 col-md-6">
              <div className="marketer__hero-img-right">
                <div
                  className="marketer__hero-img cf_image has_fade_anim"
                  data-fade-from="top"
                  data-duration="3"
                  data-ease="bounce"
                  data-delay="1"
                >
                  <img
                    src="https://crowdytheme.com/html/info/info-demo/assets/imgs/hero/hero-4/hero_4.png"
                    alt="Image"
                    data-speed="0.8"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="shape"
          src="https://crowdytheme.com/html/info/info-demo/assets/imgs/hero/hero-4/hand.png"
          alt="Shape"
        />
        <img
          className="shape-2"
          src="https://crowdytheme.com/html/info/info-demo/assets/imgs/hero/hero-4/arrow-h-4.png"
          alt="Shape"
        />
      </section>
    </>
  );
};

export default index;
