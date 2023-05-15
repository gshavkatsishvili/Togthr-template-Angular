import React from 'react'

import { Helmet } from 'react-helmet'

import './register-page.css'

const RegisterPage = (props) => {
  return (
    <div className="register-page-container">
      <Helmet>
        <title>RegisterPage - Togthr template</title>
        <meta property="og:title" content="RegisterPage - Togthr template" />
      </Helmet>
      <div className="register-page-register-page"></div>
      <span className="register-page-text">
        <span className="register-page-text01">
          Already have an account?
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </span>
        <span>Login Now</span>
      </span>
      <div className="register-page-registerwith">
        <div className="register-page-google-button">
          <div className="register-page-googleic">
            <div className="register-page-group123">
              <img
                alt="Vector6348"
                src="/playground_assets/vector6348-o84n.svg"
                className="register-page-vector"
              />
              <img
                alt="Vector6348"
                src="/playground_assets/vector6348-37as.svg"
                className="register-page-vector1"
              />
              <img
                alt="Vector6348"
                src="/playground_assets/vector6348-ijqg.svg"
                className="register-page-vector2"
              />
              <img
                alt="Vector6348"
                src="/playground_assets/vector6348-yq48.svg"
                className="register-page-vector3"
              />
            </div>
          </div>
        </div>
        <div className="register-page-facebook-button">
          <img
            alt="facebookic6348"
            src="/playground_assets/facebookic6348-8nk.svg"
            className="register-page-facebookic"
          />
        </div>
        <div className="register-page-apple-button">
          <img
            alt="cibapple6348"
            src="/playground_assets/cibapple6348-pjq7.svg"
            className="register-page-cibapple"
          />
        </div>
        <div className="register-page-registerwith1">
          <span className="register-page-text03">
            <span>Or Register with</span>
          </span>
          <img
            alt="Line16348"
            src="/playground_assets/line16348-t6f.svg"
            className="register-page-line1"
          />
          <img
            alt="Line26348"
            src="/playground_assets/line26348-zyw.svg"
            className="register-page-line2"
          />
        </div>
      </div>
      <div className="register-page-register-button">
        <span className="register-page-text05">
          <span>Register</span>
        </span>
      </div>
      <div className="register-page-confirmpassword-input">
        <span className="register-page-text07">
          <span>Confirm password</span>
        </span>
      </div>
      <div className="register-page-password-input">
        <span className="register-page-text09">
          <span>Password</span>
        </span>
      </div>
      <div className="register-page-email-input">
        <span className="register-page-text11">
          <span>Email</span>
        </span>
      </div>
      <div className="register-page-username-input">
        <span className="register-page-text13">
          <span>Username</span>
        </span>
      </div>
      <div className="register-page-text15">
        <span className="register-page-text16">
          <span>Hello! Register to get started</span>
        </span>
      </div>
      <div className="register-page-back">
        <img
          alt="backarrow6349"
          src="/playground_assets/backarrow6349-kte3.svg"
          className="register-page-backarrow"
        />
      </div>
      <div className="register-page-statusbar">
        <div className="register-page-right-side">
          <div className="register-page-battery">
            <img
              alt="Rectangle6349"
              src="/playground_assets/rectangle6349-18ic.svg"
              className="register-page-rectangle"
            />
            <img
              alt="CombinedShape6349"
              src="/playground_assets/combinedshape6349-1x4i.svg"
              className="register-page-combined-shape"
            />
            <img
              alt="Rectangle6349"
              src="/playground_assets/rectangle6349-214b.svg"
              className="register-page-rectangle1"
            />
          </div>
          <img
            alt="Wifi6349"
            src="/playground_assets/wifi6349-xb5k.svg"
            className="register-page-wifi"
          />
          <img
            alt="MobileSignal6349"
            src="/playground_assets/mobilesignal6349-kw1f.svg"
            className="register-page-mobile-signal"
          />
        </div>
        <div className="register-page-left-side">
          <img
            alt="TimeLightBase6349"
            src="/playground_assets/timelightbase6349-4fye.svg"
            className="register-page-time-light-base"
          />
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
