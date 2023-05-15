import React from 'react'
import { Link } from 'react-router-dom'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import HeroContent from '../components/hero-content'
import ImgSlider from '../components/img-slider'
import GalleryCard2 from '../components/gallery-card2'
import IconContainer from '../components/icon-container'
import './-home.css'

const LHome = (props) => {
  return (
    <div className="-home-container">
      <Helmet>
        <title>LHome - Togthr template</title>
        <meta property="og:title" content="LHome - Togthr template" />
      </Helmet>
      <section className="-home-hero">
        <video
          src="https://vod-progressive.akamaized.net/exp=1683985083~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F806%2F14%2F354031126%2F1439566201.mp4~hmac=4ed3e3012da04f9f3951e371f320ede35643e52d4b5b86fc006689a54bed93ee/vimeo-prod-skyfire-std-us/01/806/14/354031126/1439566201.mp4"
          loop
          muted
          poster="https://streamable.com/s6ffc8"
          preload="metadata"
          autoPlay
          playsInline
          className="-home-video"
        ></video>
        <header data-thq="thq-navbar" className="-home-navbar Content">
          <img
            alt="image"
            src="/playground_assets/logo.svg"
            className="-home-branding"
          />
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="-home-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className="-home-nav"
            >
              <span>About</span>
              <span className="-home-text01">Features</span>
              <span className="-home-text02">Pricing</span>
              <span className="-home-text03">Team</span>
              <span className="-home-text04">Blog</span>
              <span className="-home-text05">Blog</span>
            </nav>
          </div>
          <div data-thq="thq-burger-menu" className="-home-burger-menu">
            <div className="-home-hamburger">
              <img
                alt="image"
                src="/playground_assets/hamburger.svg"
                className="-home-icon"
              />
            </div>
          </div>
          <div data-thq="thq-mobile-menu" className="-home-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="-home-nav1"
            >
              <div className="-home-container01">
                <img
                  alt="image"
                  src="/playground_assets/logo.svg"
                  className="-home-image"
                />
                <div data-thq="thq-close-menu" className="-home-menu-close">
                  <svg viewBox="0 0 1024 1024" className="-home-icon01">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="-home-nav2"
              >
                <span className="-home-text06">About</span>
                <span className="-home-text07">Features</span>
                <span className="-home-text08">Pricing</span>
                <span className="-home-text09">Team</span>
                <span className="-home-text10">Blog</span>
              </nav>
              <div className="-home-container02">
                <button className="-home-login button">Login</button>
                <button className="button">Register</button>
              </div>
            </div>
            <div className="-home-icon-group">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="-home-icon03"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="-home-icon05"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="-home-icon07"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <header data-thq="thq-navbar" className="-home-navbar-interactive">
          <img
            alt="image"
            src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
            className="-home-logo"
          />
          <div data-thq="thq-burger-menu" className="-home-burger-menu1">
            <svg viewBox="0 0 1024 1024" className="-home-icon09">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="-home-mobile-menu1">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="-home-nav3"
            >
              <div className="-home-container03">
                <img
                  alt="image"
                  src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                  className="-home-image01"
                />
                <div data-thq="thq-close-menu" className="-home-menu-close1">
                  <svg viewBox="0 0 1024 1024" className="-home-icon11">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="-home-nav4"
              >
                <span className="-home-text11">About</span>
                <span className="-home-text12">Features</span>
                <span className="-home-text13">Pricing</span>
                <span className="-home-text14">Team</span>
                <span className="-home-text15">Blog</span>
                <span className="-home-text16">Blog</span>
              </nav>
              <div className="-home-container04">
                <button className="-home-login1 button">Login</button>
                <button className="button">Register</button>
              </div>
            </div>
            <div className="-home-icon-group1">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="-home-icon13"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="-home-icon15"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="-home-icon17"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <HeroContent></HeroContent>
      </section>
      <section className="-home-note">
        <h2 className="-home-caption">
          The most comprehensive lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna.
        </h2>
      </section>
      <section className="-home-statistics">
        <div className="-home-content">
          <div className="-home-stat">
            <h3 className="-home-header">500</h3>
            <span className="-home-caption1">
              Installed photovoltaic Panels
            </span>
          </div>
          <div className="-home-stat1">
            <h3 className="-home-header01">500</h3>
            <span className="-home-caption2">Unde omnis iste</span>
          </div>
          <div className="-home-stat2">
            <h3 className="-home-header02">500K</h3>
            <span className="-home-caption3">per day provided</span>
          </div>
        </div>
      </section>
      <section className="-home-slider">
        <ImgSlider rootClassName="img-slider-root-class-name"></ImgSlider>
      </section>
      <section className="-home-get-started">
        <div className="-home-header-container">
          <div className="-home-header03">
            <h2 className="-home-heading">
              Companies will dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore veniam and more opportunities.
            </h2>
            <p className="-home-caption4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="-home-button">
            <button className="-home-button1 button">
              <span>Get started today</span>
            </button>
          </div>
        </div>
        <img
          alt="image"
          src="/playground_assets/getstarted-800w.png"
          className="-home-image02"
        />
        <div className="-home-gallery">
          <div className="-home-container05">
            <div className="-home-container06">
              <div className="-home-container07">
                <GalleryCard2 rootClassName="rootClassName15"></GalleryCard2>
              </div>
              <div className="-home-container08">
                <GalleryCard2
                  image_src="https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fGZvb2R8ZW58MHx8fHwxNjI2NDQ5NjUy&amp;ixlib=rb-1.2.1&amp;h=1000"
                  rootClassName="rootClassName16"
                ></GalleryCard2>
              </div>
            </div>
            <div className="-home-container09">
              <GalleryCard2
                image_src="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxmb29kfGVufDB8fHx8MTYyNjQ0OTY1Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
                rootClassName="rootClassName14"
              ></GalleryCard2>
            </div>
          </div>
          <div className="-home-container10">
            <GalleryCard2
              image_src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE5fHxmb29kfGVufDB8fHx8MTYyNjQ0OTY1Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
              rootClassName="rootClassName13"
            ></GalleryCard2>
          </div>
        </div>
        <div className="-home-gallery-card">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fG1pbmltYWxpc20lMjBjb3VjaHxlbnwwfHx8fDE2MjY0NDg1NTk&amp;ixlib=rb-1.2.1&amp;h=1000"
            className="-home-image03"
          />
          <div className="-home-container11">
            <h1 className="-home-text18">Project Title</h1>
            <span className="-home-text19">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </span>
          </div>
          <div className="-home-gallery-card1">
            <div className="-home-container12">
              <div className="-home-container13">
                <h2 className="-home-text20">Project Title</h2>
                <span className="-home-text21">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </span>
                <span className="-home-text22">SHOW MORE</span>
              </div>
            </div>
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxmb29kfGVufDB8fHx8MTYyNjQ0OTIzNQ&amp;ixlib=rb-1.2.1&amp;h=1000"
              className="-home-image04"
            />
            <div className="-home-gallery-card2">
              <div className="-home-container14">
                <div className="-home-container15">
                  <h2 className="-home-text23">Project Title</h2>
                  <span className="-home-text24">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </span>
                  <span className="-home-text25">SHOW MORE</span>
                </div>
              </div>
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxmb29kfGVufDB8fHx8MTYyNjQ0OTIzNQ&amp;ixlib=rb-1.2.1&amp;h=1000"
                className="-home-image05"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="-home-objectives">
        <div className="-home-content01">
          <span className="-home-text26">Objectives</span>
          <div className="-home-objectives-list">
            <div className="objective">
              <h3 className="-home-text27">Growth</h3>
              <p className="-home-text28">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="objective -home-objective1">
              <h3 className="-home-text29">Develop</h3>
              <p className="-home-text30">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="objective -home-objective2">
              <h3 className="-home-text31">Optimize</h3>
              <p className="-home-text32">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="-home-growth">
        <div className="-home-content02">
          <div className="-home-header04">
            <div className="-home-header05">
              <h2 className="-home-heading1">
                <span>
                  Multiverse optimized for
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="-home-text34">growth.</span>
                <br></br>
              </h2>
            </div>
            <p className="-home-caption5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
            <p className="-home-caption6">
              Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </p>
          </div>
          <div className="-home-testimonial">
            <div className="-home-content03">
              <span className="-home-text36">Testimonial</span>
              <p className="-home-text37">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.”
              </p>
            </div>
            <div className="-home-information">
              <div className="-home-author">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1552234994-66ba234fd567?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fHBvdHJhaXR8ZW58MHx8fHwxNjcxMDU2MzMz&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="-home-icon19"
                />
                <span className="-home-name">Andrew Gonzales</span>
              </div>
              <img
                alt="image"
                src="/playground_assets/logoipsum.svg"
                className="-home-from"
              />
            </div>
          </div>
        </div>
        <div className="-home-images">
          <div className="-home-square"></div>
          <img
            alt="image"
            src="/playground_assets/growth-1400w.png"
            className="-home-image06"
          />
        </div>
      </section>
      <section className="-home-experience">
        <div className="-home-images1">
          <div className="-home-square1"></div>
          <img
            alt="image"
            src="/playground_assets/experience-1400w.png"
            className="-home-image07"
          />
        </div>
        <div className="-home-content04">
          <div className="-home-header06">
            <div className="-home-header-container1">
              <div className="-home-header07">
                <h2 className="-home-heading2">
                  <span>A worlds class </span>
                  <span className="-home-text39">experience</span>
                </h2>
              </div>
              <p className="-home-caption7">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
                eiusmod.
              </p>
            </div>
            <div className="-home-checkmarks">
              <div className="-home-check">
                <div className="-home-mark">
                  <svg viewBox="0 0 1024 1024" className="-home-icon20">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="-home-text40">
                  Duis aute irure dolor in reprehenderit
                </span>
              </div>
              <div className="-home-check1">
                <div className="-home-mark1">
                  <svg viewBox="0 0 1024 1024" className="-home-icon22">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="-home-text41">Lorem ipsum dolor sit amet</span>
              </div>
              <div className="-home-check2">
                <div className="-home-mark2">
                  <svg viewBox="0 0 1024 1024" className="-home-icon24">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="-home-text42">
                  Voluptate velit esse cillum dolore eu fugiat nulla
                </span>
              </div>
              <div className="-home-check3">
                <div className="-home-mark3">
                  <svg viewBox="0 0 1024 1024" className="-home-icon26">
                    <path d="M823.168 225.835l-439.168 439.168-183.168-183.168c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331l213.333 213.333c16.683 16.683 43.691 16.683 60.331 0l469.333-469.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0z"></path>
                  </svg>
                </div>
                <span className="-home-text43">
                  Excepteur sint occaecat cupidatat non proident sunt in culpa
                </span>
              </div>
            </div>
          </div>
          <div className="-home-testimonial1">
            <div className="-home-content05">
              <span className="-home-text44">Testimonial</span>
              <p className="-home-text45">
                “Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.”
              </p>
            </div>
            <div className="-home-information1">
              <div className="-home-author1">
                <img
                  alt="image"
                  src="https://images.unsplash.com/photo-1618151313441-bc79b11e5090?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxwb3RyYWl0fGVufDB8fHx8MTY3MTA1NjMzMw&amp;ixlib=rb-4.0.3&amp;w=200"
                  className="-home-icon28"
                />
                <span className="-home-name1">Cory Smith</span>
              </div>
              <img
                alt="image"
                src="/playground_assets/logoipsum-2.svg"
                className="-home-from1"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="-home-data">
        <div className="-home-header-container2">
          <div className="-home-header08">
            <div className="-home-row">
              <h2 className="-home-heading3">
                <span>
                  Understand your data to manage all in one
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="-home-text47">platform</span>
                <br></br>
              </h2>
            </div>
          </div>
          <p className="-home-caption8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </p>
        </div>
        <div className="-home-content06">
          <div className="-home-image08">
            <img
              alt="image"
              src="/playground_assets/data-1400w.png"
              className="-home-image09"
            />
          </div>
          <div className="-home-accordion">
            <div data-role="accordion-container" className="accordion">
              <div>
                <h3 className="-home-header09">Management</h3>
                <p data-role="accordion-content" className="accordion-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <IconContainer rootClassName="icon-container-root-class-name20"></IconContainer>
            </div>
            <div data-role="accordion-container" className="accordion">
              <div>
                <h3 className="-home-header10">Integrations</h3>
                <p data-role="accordion-content" className="accordion-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <IconContainer rootClassName="icon-container-root-class-name21"></IconContainer>
            </div>
            <div data-role="accordion-container" className="accordion">
              <div>
                <h3 className="-home-header11">Customer Solutions</h3>
                <p data-role="accordion-content" className="accordion-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <IconContainer rootClassName="icon-container-root-class-name22"></IconContainer>
            </div>
            <div data-role="accordion-container" className="accordion">
              <div>
                <h3 className="-home-header12">Recruiting</h3>
                <p data-role="accordion-content" className="accordion-content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </p>
              </div>
              <IconContainer rootClassName="icon-container-root-class-name23"></IconContainer>
            </div>
            <div>
              <DangerousHTML
                html={`<script>
 /*
  Accordion - Code Embed
  */
  const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
  const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
  const accordionIconsClosed = document.querySelectorAll('[data-role="accordion-icon-closed"]'); // All accordion closed icons
  const accordionIconsOpen = document.querySelectorAll('[data-role="accordion-icon-open"]'); // All accordion open icons

  accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; //Hides all accordion contents
  });

  accordionIconsClosed.forEach((icon) => {
    icon.style.display = "flex"
  })

  accordionIconsOpen.forEach((icon) => {
    icon.style.display = "none"
  })

  accordionContainers.forEach((accordionContainer, index) => {
      accordionContainer.addEventListener("click", () => {
          if (accordionContents[index].style.display === "flex") {
              // If the accordion is already open, close it
              accordionContents[index].style.display = "none";
              accordionIconsClosed[index].style.display = "flex";
              accordionIconsOpen[index].style.display = "none"
          } else {
              // If the accordion is closed, open it
              accordionContents.forEach((accordionContent) => {
                  accordionContent.style.display = "none"; //Hides all accordion contents
              });

              accordionIconsClosed.forEach((accordionIcon) => {
                  accordionIcon.style.display = "flex"; // Resets all icon transforms to 0deg (default)
              });

              accordionIconsOpen.forEach((accordionIcon) => {
                accordionIcon.style.display = "none";
              })
              
              accordionContents[index].style.display = "flex"; // Shows accordion content
              accordionIconsClosed[index].style.display = "none"; // Rotates accordion icon 180deg
              accordionIconsOpen[index].style.display = "flex";
          }
      });
  });
</script>
`}
              ></DangerousHTML>
            </div>
          </div>
        </div>
      </section>
      <section className="-home-faq">
        <div className="-home-header13">
          <h2 className="-home-heading4">
            <span>Frequently asked </span>
            <span className="-home-text50">questions</span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </h2>
        </div>
        <div className="-home-content15">
          <div className="-home-column">
            <div className="-home-element04">
              <h3 className="-home-header14">
                Lorem ipsum dolor sit ametetur elit?
              </h3>
              <p className="-home-content16">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="-home-element05">
              <h3 className="-home-header15">
                Excepteur sint occaecat cupidatat non sunt in culpa qui officia
                deserunt mollit anim id est laborum?
              </h3>
              <p className="-home-content17">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
            </div>
            <div className="-home-element06">
              <h3 className="-home-header16">
                Tempor incididunt ut labore et dolore magna aliquat enim ad
                minim?
              </h3>
              <p className="-home-content18">
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className="-home-column1">
            <div className="-home-element07">
              <h3 className="-home-header17">
                Tempor incididunt ut labore et dolore magna aliquat enim ad
                minim?
              </h3>
              <p className="-home-content19">
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="-home-element08">
              <h3 className="-home-header18">
                Lorem ipsum dolor sit ametetur elit?
              </h3>
              <p className="-home-content20">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="-home-element09">
              <h3 className="-home-header19">
                Incididunt ut labore et dolore?
              </h3>
              <p className="-home-content21">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="-home-footer">
        <div className="-home-content22">
          <div className="-home-main">
            <div className="-home-branding1">
              <img
                alt="image"
                src="/playground_assets/logo.svg"
                className="-home-image10"
              />
              <span className="-home-text52">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
            <div className="-home-links">
              <div className="-home-column2">
                <span className="-home-header20">Company</span>
                <div className="-home-list">
                  <Link to="/" className="-home-navlink">
                    About
                  </Link>
                  <Link to="/" className="-home-navlink01">
                    Services
                  </Link>
                  <Link to="/" className="-home-navlink02">
                    How
                  </Link>
                  <Link to="/" className="-home-navlink03">
                    <span className="-home-text53">Why</span>
                    <br></br>
                  </Link>
                </div>
              </div>
              <div className="-home-column3">
                <span className="-home-header21">Extern</span>
                <div className="-home-list1">
                  <Link to="/" className="-home-navlink04">
                    News
                  </Link>
                  <Link to="/" className="-home-navlink05">
                    Articles
                  </Link>
                  <Link to="/" className="-home-navlink06">
                    Blog
                  </Link>
                  <Link to="/" className="-home-navlink07">
                    Privacy
                  </Link>
                  <Link to="/" className="-home-navlink08">
                    Terms
                  </Link>
                  <Link to="/" className="-home-navlink09">
                    Legal
                  </Link>
                  <Link to="/" className="-home-navlink10">
                    Press
                  </Link>
                </div>
              </div>
              <div className="-home-column4">
                <span className="-home-header22">Social</span>
                <div className="-home-list2">
                  <Link to="/" className="-home-navlink11">
                    LinkedIn
                  </Link>
                  <Link to="/" className="-home-navlink12">
                    Twitter
                  </Link>
                  <Link to="/" className="-home-navlink13">
                    Instagram
                  </Link>
                  <Link to="/" className="-home-navlink14">
                    Facebook
                  </Link>
                  <Link to="/" className="-home-navlink15">
                    TikTok
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="-home-bottom">
            <span className="-home-text55">
              © 2022 togthr - All rights reserved
            </span>
            <button data-role="scroll-top" className="-home-button2 button">
              <img
                alt="image"
                src="/playground_assets/arrow.svg"
                className="-home-image11"
              />
            </button>
          </div>
        </div>
      </div>
      <div>
        <DangerousHTML
          html={`<script>
document.addEventListener("DOMContentLoaded", function() {
  // get the element with the "scroll-top" data-role
  const scrollTopBtn = document.querySelector('[data-role="scroll-top"]');

  // when the element is clicked
  scrollTopBtn.addEventListener("click", function() {
    // smoothly scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
</script>
`}
        ></DangerousHTML>
      </div>
    </div>
  )
}

export default LHome
