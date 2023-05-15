import React from 'react'
import { Link } from 'react-router-dom'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import HeroContent from '../components/hero-content'
import Heading from '../components/heading'
import GalleryCard2 from '../components/gallery-card2'
import './kalifa-home.css'

const KalifaHome = (props) => {
  return (
    <div className="kalifa-home-container">
      <Helmet>
        <title>KalifaHome - Togthr template</title>
        <meta property="og:title" content="KalifaHome - Togthr template" />
      </Helmet>
      <section className="kalifa-home-hero">
        <video
          src="https://presentation-website-assets.teleporthq.io/templates/togthr/togthr-video.mp4"
          loop
          muted
          poster="/playground_assets/hero-bg.png"
          preload="auto"
          autoPlay
          playsInline
          className="kalifa-home-video"
        ></video>
        <header data-thq="thq-navbar" className="kalifa-home-navbar Content">
          <img
            alt="image"
            src="/playground_assets/logo.svg"
            className="kalifa-home-branding"
          />
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="kalifa-home-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className="kalifa-home-nav"
            >
              <span>About</span>
              <span className="kalifa-home-text01">Features</span>
              <span className="kalifa-home-text02">Pricing</span>
              <span className="kalifa-home-text03">Team</span>
              <span className="kalifa-home-text04">Blog</span>
              <span className="kalifa-home-text05">Blog</span>
            </nav>
          </div>
          <div data-thq="thq-burger-menu" className="kalifa-home-burger-menu">
            <div className="kalifa-home-hamburger">
              <img
                alt="image"
                src="/playground_assets/hamburger.svg"
                className="kalifa-home-icon"
              />
            </div>
          </div>
          <div data-thq="thq-mobile-menu" className="kalifa-home-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="kalifa-home-nav1"
            >
              <div className="kalifa-home-container01">
                <img
                  alt="image"
                  src="/playground_assets/logo.svg"
                  className="kalifa-home-image"
                />
                <div
                  data-thq="thq-close-menu"
                  className="kalifa-home-menu-close"
                >
                  <svg viewBox="0 0 1024 1024" className="kalifa-home-icon01">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="kalifa-home-nav2"
              >
                <span className="kalifa-home-text06">About</span>
                <span className="kalifa-home-text07">Features</span>
                <span className="kalifa-home-text08">Pricing</span>
                <span className="kalifa-home-text09">Team</span>
                <span className="kalifa-home-text10">Blog</span>
              </nav>
              <div className="kalifa-home-container02">
                <button className="kalifa-home-login button">Login</button>
                <button className="button">Register</button>
              </div>
            </div>
            <div className="kalifa-home-icon-group">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="kalifa-home-icon03"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="kalifa-home-icon05"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="kalifa-home-icon07"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <header
          data-thq="thq-navbar"
          className="kalifa-home-navbar-interactive"
        >
          <img
            alt="image"
            src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
            className="kalifa-home-logo"
          />
          <div data-thq="thq-burger-menu" className="kalifa-home-burger-menu1">
            <svg viewBox="0 0 1024 1024" className="kalifa-home-icon09">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="kalifa-home-mobile-menu1">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="kalifa-home-nav3"
            >
              <div className="kalifa-home-container03">
                <img
                  alt="image"
                  src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                  className="kalifa-home-image1"
                />
                <div
                  data-thq="thq-close-menu"
                  className="kalifa-home-menu-close1"
                >
                  <svg viewBox="0 0 1024 1024" className="kalifa-home-icon11">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="kalifa-home-nav4"
              >
                <span className="kalifa-home-text11">About</span>
                <span className="kalifa-home-text12">Features</span>
                <span className="kalifa-home-text13">Pricing</span>
                <span className="kalifa-home-text14">Team</span>
                <span className="kalifa-home-text15">Blog</span>
                <span className="kalifa-home-text16">Blog</span>
              </nav>
              <div className="kalifa-home-container04">
                <button className="kalifa-home-login1 button">Login</button>
                <button className="button">Register</button>
              </div>
            </div>
            <div className="kalifa-home-icon-group1">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="kalifa-home-icon13"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="kalifa-home-icon15"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="kalifa-home-icon17"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
        <HeroContent></HeroContent>
      </section>
      <section className="kalifa-home-statistics">
        <span>The Road so Far</span>
        <Heading rootClassName="heading-root-class-name"></Heading>
        <div className="kalifa-home-content">
          <div className="kalifa-home-stat">
            <h3 className="kalifa-home-header">500</h3>
            <span className="kalifa-home-caption">
              Installed photovoltaic Panels
            </span>
          </div>
          <div className="kalifa-home-stat1">
            <h3 className="kalifa-home-header01">500</h3>
            <span className="kalifa-home-caption1">Unde omnis iste</span>
          </div>
          <div className="kalifa-home-stat2">
            <h3 className="kalifa-home-header02">500kWh</h3>
            <span className="kalifa-home-caption2">per day provided</span>
          </div>
        </div>
      </section>
      <section className="kalifa-home-get-started">
        <div className="kalifa-home-container05"></div>
        <div className="kalifa-home-container06">
          <h1 className="kalifa-home-text18">
            <span className="kalifa-home-text19">
              Projects completed by our company
            </span>
            <br></br>
          </h1>
          <div className="kalifa-home-container07">
            <div className="kalifa-home-gallery">
              <div className="kalifa-home-container08">
                <div className="kalifa-home-container09">
                  <div className="kalifa-home-container10">
                    <GalleryCard2 rootClassName="rootClassName2"></GalleryCard2>
                  </div>
                  <div className="kalifa-home-container11">
                    <GalleryCard2
                      image_src="https://images.unsplash.com/photo-1476718406336-bb5a9690ee2a?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fGZvb2R8ZW58MHx8fHwxNjI2NDQ5NjUy&amp;ixlib=rb-1.2.1&amp;h=1000"
                      rootClassName="rootClassName3"
                    ></GalleryCard2>
                  </div>
                </div>
                <div className="kalifa-home-container12">
                  <GalleryCard2
                    image_src="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxmb29kfGVufDB8fHx8MTYyNjQ0OTY1Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
                    rootClassName="rootClassName"
                  ></GalleryCard2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="kalifa-home-container13"></div>
        <div className="kalifa-home-gallery-card">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fG1pbmltYWxpc20lMjBjb3VjaHxlbnwwfHx8fDE2MjY0NDg1NTk&amp;ixlib=rb-1.2.1&amp;w=1400"
            className="kalifa-home-image2"
          />
          <div className="kalifa-home-gallery-card1"></div>
        </div>
      </section>
      <h1 className="kalifa-home-text21">Benefiting you and the enviroment</h1>
      <div className="kalifa-home-container14">
        <h1 className="kalifa-home-text22">benefiting enviroment</h1>
        <div className="kalifa-home-container15">
          <div className="kalifa-home-container16">
            <div className="kalifa-home-container17">
              <img
                alt="image"
                src="https://play.teleporthq.io/static/svg/default-img.svg"
                className="kalifa-home-image3"
              />
            </div>
          </div>
          <div className="kalifa-home-container18">
            <div className="kalifa-home-container19">
              <span className="kalifa-home-text23">
                <span>
                  text about how good is solar energy and stuff and how bad is
                  atomic reactor 
                </span>
                <br></br>
                <span>
                  also adress concerns about element production and toxic waste
                </span>
                <br></br>
                <br></br>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="kalifa-home-container20">
        <h1 className="kalifa-home-text29">
          <span>benefiting buisness</span>
          <br></br>
          <br></br>
        </h1>
        <div className="kalifa-home-container21">
          <div className="kalifa-home-container22">
            <div className="kalifa-home-container23">
              <img
                alt="image"
                src="https://play.teleporthq.io/static/svg/default-img.svg"
                className="kalifa-home-image4"
              />
            </div>
            <div className="kalifa-home-container24">
              <span className="kalifa-home-text33">
                <span>
                  text about how good is solar energy and stuff and how bad is
                  atomic reactor 
                </span>
                <br></br>
                <span>
                  also adress concerns about element production and toxic waste
                </span>
                <br></br>
                <br></br>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="kalifa-home-container25">
        <h1 className="kalifa-home-text39">
          <span>Housing Benefits</span>
          <br></br>
          <br></br>
        </h1>
        <div className="kalifa-home-container26">
          <div className="kalifa-home-container27">
            <div className="kalifa-home-container28">
              <img
                alt="image"
                src="https://play.teleporthq.io/static/svg/default-img.svg"
                className="kalifa-home-image5"
              />
            </div>
            <div className="kalifa-home-container29">
              <span className="kalifa-home-text43">
                <span>
                  text about how good is solar energy and stuff and how bad is
                  atomic reactor 
                </span>
                <br></br>
                <span>
                  also adress concerns about element production and toxic waste
                </span>
                <br></br>
                <br></br>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="kalifa-home-container30"></div>
      <section className="kalifa-home-growth">
        <div className="kalifa-home-container31">
          <div className="kalifa-home-content01">
            <div className="kalifa-home-header03">
              <div className="kalifa-home-header04">
                <h2 className="kalifa-home-heading">
                  <span>
                    We offer you prices and services that are personalised under
                    your motxovnebi
                  </span>
                  <br></br>
                </h2>
              </div>
              <p className="kalifa-home-caption3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
              <p className="kalifa-home-caption4">
                Dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="kalifa-home-testimonial">
              <div className="kalifa-home-content02"></div>
            </div>
            <button className="kalifa-home-button button">
              See prices here
            </button>
          </div>
        </div>
        <div className="kalifa-home-images">
          <div className="kalifa-home-square"></div>
          <img
            alt="image"
            src="/playground_assets/growth-1000h.png"
            className="kalifa-home-image6"
          />
        </div>
      </section>
      <div className="kalifa-home-container32">
        <div className="kalifa-home-container33">
          <h1 className="kalifa-home-text51">Start living smart today</h1>
          <span className="kalifa-home-text52">
            you can see pricing for your specific requirements with our
            calculator or leave us your details and we will get back to you as
            soon as possible
          </span>
          <div className="kalifa-home-container34">
            <div className="kalifa-home-container35">
              <div className="kalifa-home-container36">
                <button className="kalifa-home-button1 button">
                  Contact US
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="kalifa-home-container37">
          <button className="kalifa-home-button2 button">Calculator</button>
        </div>
      </div>
      <section className="kalifa-home-faq">
        <div className="kalifa-home-header05">
          <h2 className="kalifa-home-heading1">
            <span>Frequently asked </span>
            <span className="kalifa-home-text54">questions</span>
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </h2>
        </div>
        <div className="kalifa-home-content03">
          <div className="kalifa-home-column">
            <div className="kalifa-home-element">
              <h3 className="kalifa-home-header06">
                Lorem ipsum dolor sit ametetur elit?
              </h3>
              <p className="kalifa-home-content04">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="kalifa-home-element1">
              <h3 className="kalifa-home-header07">
                Excepteur sint occaecat cupidatat non sunt in culpa qui officia
                deserunt mollit anim id est laborum?
              </h3>
              <p className="kalifa-home-content05">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </p>
            </div>
            <div className="kalifa-home-element2">
              <h3 className="kalifa-home-header08">
                Tempor incididunt ut labore et dolore magna aliquat enim ad
                minim?
              </h3>
              <p className="kalifa-home-content06">
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          <div className="kalifa-home-column1">
            <div className="kalifa-home-element3">
              <h3 className="kalifa-home-header09">
                Tempor incididunt ut labore et dolore magna aliquat enim ad
                minim?
              </h3>
              <p className="kalifa-home-content07">
                Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="kalifa-home-element4">
              <h3 className="kalifa-home-header10">
                Lorem ipsum dolor sit ametetur elit?
              </h3>
              <p className="kalifa-home-content08">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </p>
            </div>
            <div className="kalifa-home-element5">
              <h3 className="kalifa-home-header11">
                Incididunt ut labore et dolore?
              </h3>
              <p className="kalifa-home-content09">
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
      <div className="kalifa-home-footer">
        <div className="kalifa-home-content10">
          <div className="kalifa-home-main">
            <div className="kalifa-home-branding1">
              <img
                alt="image"
                src="/playground_assets/logo.svg"
                className="kalifa-home-image7"
              />
              <span className="kalifa-home-text56">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </div>
            <div className="kalifa-home-links">
              <div className="kalifa-home-column2">
                <span className="kalifa-home-header12">Company</span>
                <div className="kalifa-home-list">
                  <Link to="/" className="kalifa-home-navlink">
                    About
                  </Link>
                  <Link to="/" className="kalifa-home-navlink01">
                    Services
                  </Link>
                  <Link to="/" className="kalifa-home-navlink02">
                    How
                  </Link>
                  <Link to="/" className="kalifa-home-navlink03">
                    <span className="kalifa-home-text57">Why</span>
                    <br></br>
                  </Link>
                </div>
              </div>
              <div className="kalifa-home-column3">
                <span className="kalifa-home-header13">Extern</span>
                <div className="kalifa-home-list1">
                  <Link to="/" className="kalifa-home-navlink04">
                    News
                  </Link>
                  <Link to="/" className="kalifa-home-navlink05">
                    Articles
                  </Link>
                  <Link to="/" className="kalifa-home-navlink06">
                    Blog
                  </Link>
                  <Link to="/" className="kalifa-home-navlink07">
                    Privacy
                  </Link>
                  <Link to="/" className="kalifa-home-navlink08">
                    Terms
                  </Link>
                  <Link to="/" className="kalifa-home-navlink09">
                    Legal
                  </Link>
                  <Link to="/" className="kalifa-home-navlink10">
                    Press
                  </Link>
                </div>
              </div>
              <div className="kalifa-home-column4">
                <span className="kalifa-home-header14">Social</span>
                <div className="kalifa-home-list2">
                  <Link to="/" className="kalifa-home-navlink11">
                    LinkedIn
                  </Link>
                  <Link to="/" className="kalifa-home-navlink12">
                    Twitter
                  </Link>
                  <Link to="/" className="kalifa-home-navlink13">
                    Instagram
                  </Link>
                  <Link to="/" className="kalifa-home-navlink14">
                    Facebook
                  </Link>
                  <Link to="/" className="kalifa-home-navlink15">
                    TikTok
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="kalifa-home-bottom">
            <span className="kalifa-home-text59">
              © 2022 togthr - All rights reserved
            </span>
            <button
              data-role="scroll-top"
              className="kalifa-home-button3 button"
            >
              <img
                alt="image"
                src="/playground_assets/arrow.svg"
                className="kalifa-home-image8"
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

export default KalifaHome
