'use client';
import React from 'react';

export const MeetDannySection = () => {
  return (
    <section id="content-aj" className="section aj-area" style={{ position: 'relative', overflow: 'hidden', background: '#fff' }}>

      {/* Background monogram — absolutely positioned, large, bottom-right */}
      <div className="aj-monogram">
        <img
          src="/reference_images/new avista mono.png"
          alt=""
          className="img-responsive"
        />
      </div>

      <div className="aj-holder">
        <div className="aj-inner">

          {/* Left: title + photo */}
          <div className="aj-left">
            <div className="aj-head">
              <div>
                <div className="global-site-title is-red">
                  <span>
                    Founder &amp; Director
                    <i />
                  </span>
                </div>
                <div className="aj-name">
                  <span>Danny</span>
                  Andrade
                </div>
              </div>
            </div>

            <div className="aj-photo">
              <img
                src="https://gray-caterpillar-130567.hostingersite.com/wp-content/uploads/2026/03/danny-for-HP.png"
                alt="Danny Andrade"
                className="img-responsive"
                width={665}
                height={630}
              />
            </div>
          </div>

          {/* Right: bio + links */}
          <div className="aj-right">
            <div className="aj-content">

              <div className="aj-text">
                <p>
                  As Founder and Director of Avista Real Estate Mazatlán, Danny leads a team dedicated to representing buyers
                  and sellers of prestigious properties in Mazatlán and along the Sinaloa coast. As a life-long Mazatleco he possesses
                  in-depth knowledge of the local market and an extensive network of contacts, making him an indispensable resource in
                  the city&apos;s most exclusive neighborhoods.
                </p>
                <p>
                  With years of experience in major transactions across Cerritos, La Marina, Sábalo, Gaviotas,
                  and beyond, Danny has delivered record-breaking results with a client-centered approach that defines
                  Avista&apos;s reputation.
                </p>
              </div>

              <div className="aj-link">
                <a href="/about" className="global-btn">
                  <span>Meet the Team <i /></span>
                </a>
              </div>

              <div className="aj-link video-link">
                <a
                  href="https://www.youtube.com/embed/MazatlanMarket?rel=0&autoplay=1"
                  target="_blank"
                  className="aios-video-popup"
                  rel="noreferrer"
                >
                  <span>
                    <em className="ai-font-play-button-a" />
                    Watch Danny&apos;s Mazatlán Market Update
                  </span>
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
