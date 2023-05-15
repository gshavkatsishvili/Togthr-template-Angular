import React from 'react'

import { Helmet } from 'react-helmet'

import './login-page.css'

const LoginPage = (props) => {
  return (
    <div className="login-page-container">
      <Helmet>
        <title>LoginPage - Togthr template</title>
        <meta property="og:title" content="LoginPage - Togthr template" />
      </Helmet>
      <span className="login-page-text">
        <span className="login-page-text01">
          Don’t have an account?
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span>Register Now</span>
      </span>
      <div className="login-page-loginwith">
        <div className="login-page-google-button">
          <div className="login-page-googleic">
            <div className="login-page-group123">
              <img
                alt="Vector1327"
                src="/playground_assets/vector1327-zfp1s.svg"
                className="login-page-vector"
              />
              <img
                alt="Vector1327"
                src="/playground_assets/vector1327-qwq.svg"
                className="login-page-vector1"
              />
              <img
                alt="Vector1327"
                src="/playground_assets/vector1327-44w.svg"
                className="login-page-vector2"
              />
              <img
                alt="Vector1327"
                src="/playground_assets/vector1327-a8k.svg"
                className="login-page-vector3"
              />
            </div>
          </div>
        </div>
        <div className="login-page-facebook-button">
          <img
            alt="facebookic1327"
            src="/playground_assets/facebookic1327-z5gf.svg"
            className="login-page-facebookic"
          />
        </div>
        <div className="login-page-apple-button">
          <img
            alt="cibapple1327"
            src="/playground_assets/cibapple1327-uj3.svg"
            className="login-page-cibapple"
          />
        </div>
        <div className="login-page-loginwith1">
          <span className="login-page-text03">
            <span>Or Login with</span>
          </span>
          <img
            alt="Line11327"
            src="/playground_assets/line11327-5e36.svg"
            className="login-page-line1"
          />
          <img
            alt="Line21327"
            src="/playground_assets/line21327-cqq.svg"
            className="login-page-line2"
          />
        </div>
      </div>
      <div className="login-page-login-buttonbutton"></div>
      <span className="login-page-text05">
        <span>Forgot Password?</span>
      </span>
      <div className="login-page-enteryourpassword">
        <div className="login-page-fluenteye20filled">
          <div className="login-page-group">
            <img
              alt="Vector1327"
              src="/playground_assets/vector1327-fnf7.svg"
              className="login-page-vector4"
            />
          </div>
        </div>
        <span className="login-page-text07">
          <span>Enter your password</span>
        </span>
      </div>
      <div className="login-page-enteryouremailinput">
        <span className="login-page-text09">
          <span>Enter your email</span>
        </span>
      </div>
      <div className="login-page-text11">
        <span className="login-page-text12">
          <span>Welcome back! Glad to see you, Again!</span>
        </span>
      </div>
      <div className="login-page-back">
        <img
          alt="backarrow1327"
          src="/playground_assets/backarrow1327-21h.svg"
          className="login-page-backarrow"
        />
      </div>
      <div className="login-page-statusbar">
        <div className="login-page-right-side">
          <div className="login-page-battery">
            <img
              alt="Rectangle1327"
              src="/playground_assets/rectangle1327-p9f9.svg"
              className="login-page-rectangle"
            />
            <img
              alt="CombinedShape1327"
              src="/playground_assets/combinedshape1327-mnn.svg"
              className="login-page-combined-shape"
            />
            <img
              alt="Rectangle1327"
              src="/playground_assets/rectangle1327-0jsq.svg"
              className="login-page-rectangle1"
            />
          </div>
          <img
            alt="Wifi1327"
            src="/playground_assets/wifi1327-nx6t.svg"
            className="login-page-wifi"
          />
          <img
            alt="MobileSignal1327"
            src="/playground_assets/mobilesignal1327-9aw.svg"
            className="login-page-mobile-signal"
          />
        </div>
        <div className="login-page-left-side">
          <img
            alt="TimeLightBase1327"
            src="/playground_assets/timelightbase1327-qedi.svg"
            className="login-page-time-light-base"
          />
        </div>
      </div>
      <a href="https://tbcpay.ge" className="login-page-link button">
        <span className="login-page-text14">
          <span>Login</span>
        </span>
      </a>
    </div>
  )
}

export default LoginPage
