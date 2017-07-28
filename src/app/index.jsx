import React, {Component} from 'react';
import {connect} from 'react-redux';

import './app.scss';
import 'font-awesome/scss/font-awesome.scss';


import NavBar from './navbar';
import Messages from '../messages';

import AppEnlight from 'appenlight-client';

export const Footer = (props) => (
    <footer>
        <hr/>
        <div className="mailListSignup">
          SIGN UP TO OUR EMAIL FOR NEWS & EXCLUSIVES
          <div className="field has-addons">
            <p className="control">
              <input className="input" type="text" placeholder="Add your email here..."/>
            </p>
            <p className="control">
              <a className="button">
                Subscribe
              </a>
            </p>
          </div>
        </div>
        <hr />

        <div className="links columns">
          <div className="column">
            <a href="#">Contact Us</a>
            <a href="#">Press</a>
          </div>
          <div className="column">
            <a href="#">Frequently Asked Questions</a>
            <a href="#">Delivery and Returns</a>
            <a href="#">Terms and Conditions</a>
            <a href="#">Privacy</a>
          </div>
          <div className="column">
            <a href="#">The Persian Fusion Blog</a>
            <div id="social">
              <a href="#0" className="c-link c-link--facebook c-tooltip" aria-label="Facebook">
                  <svg className="c-icon"><use xlinkHref="#icon--facebook"></use></svg>
              </a>

              <a href="#0" className="c-link c-link--twitter c-tooltip" aria-label="Twitter">
                  <svg className="c-icon"><use xlinkHref="#icon--twitter"></use></svg>
              </a>

              <a href="#0" className="c-link c-link--google c-tooltip" aria-label="Google+">
                  <svg className="c-icon"><use xlinkHref="#icon--google"></use></svg>
              </a>

              <a href="#0" className="c-link c-link--pinterest c-tooltip" aria-label="Pinterest">
                  <svg className="c-icon"><use xlinkHref="#icon--pinterest"></use></svg>
              </a>

              <a href="#0" className="c-link c-link--instagram c-tooltip" aria-label="Instagram">
                  <svg className="c-icon"><use xlinkHref="#icon--instagram"></use></svg>
              </a>

              <a href="#0" className="c-link c-link--snapchat c-tooltip" aria-label="Snapchat">
                  <svg className="c-icon"><use xlinkHref="#icon--snapchat"></use></svg>
              </a>

              <svg style={{display: null}} className="hidden">
                  <symbol id="icon--facebook" viewBox="0 0 24 24">
                      <path d="M19,4V7H17A1,1 0 0,0 16,8V10H19V13H16V20H13V13H11V10H13V7.5C13,5.56 14.57,4 16.5,4M20,2H4A2,2 0 0,0 2,4V20A2,2 0 0,0 4,22H20A2,2 0 0,0 22,20V4C22,2.89 21.1,2 20,2Z" />
                  </symbol>
                  <symbol id="icon--twitter" viewBox="0 0 24 24">
                      <path d="M17.71,9.33C17.64,13.95 14.69,17.11 10.28,17.31C8.46,17.39 7.15,16.81 6,16.08C7.34,16.29 9,15.76 9.9,15C8.58,14.86 7.81,14.19 7.44,13.12C7.82,13.18 8.22,13.16 8.58,13.09C7.39,12.69 6.54,11.95 6.5,10.41C6.83,10.57 7.18,10.71 7.64,10.74C6.75,10.23 6.1,8.38 6.85,7.16C8.17,8.61 9.76,9.79 12.37,9.95C11.71,7.15 15.42,5.63 16.97,7.5C17.63,7.38 18.16,7.14 18.68,6.86C18.47,7.5 18.06,7.97 17.56,8.33C18.1,8.26 18.59,8.13 19,7.92C18.75,8.45 18.19,8.93 17.71,9.33M20,2H4A2,2 0 0,0 2,4V20A2,2 0 0,0 4,22H20A2,2 0 0,0 22,20V4C22,2.89 21.1,2 20,2Z" />
                  </symbol>
                  <symbol id="icon--google" viewBox="0 0 24 24">
                      <path d="M23,11H21V9H19V11H17V13H19V15H21V13H23M8,11V13.4H12C11.8,14.4 10.8,16.4 8,16.4C5.6,16.4 3.7,14.4 3.7,12C3.7,9.6 5.6,7.6 8,7.6C9.4,7.6 10.3,8.2 10.8,8.7L12.7,6.9C11.5,5.7 9.9,5 8,5C4.1,5 1,8.1 1,12C1,15.9 4.1,19 8,19C12,19 14.7,16.2 14.7,12.2C14.7,11.7 14.7,11.4 14.6,11H8Z" />
                  </symbol>
                  <symbol id="icon--pinterest" viewBox="0 0 24 24">
                      <path d="M13,16.2C12.2,16.2 11.43,15.86 10.88,15.28L9.93,18.5L9.86,18.69L9.83,18.67C9.64,19 9.29,19.2 8.9,19.2C8.29,19.2 7.8,18.71 7.8,18.1C7.8,18.05 7.81,18 7.81,17.95H7.8L7.85,17.77L9.7,12.21C9.7,12.21 9.5,11.59 9.5,10.73C9.5,9 10.42,8.5 11.16,8.5C11.91,8.5 12.58,8.76 12.58,9.81C12.58,11.15 11.69,11.84 11.69,12.81C11.69,13.55 12.29,14.16 13.03,14.16C15.37,14.16 16.2,12.4 16.2,10.75C16.2,8.57 14.32,6.8 12,6.8C9.68,6.8 7.8,8.57 7.8,10.75C7.8,11.42 8,12.09 8.34,12.68C8.43,12.84 8.5,13 8.5,13.2A1,1 0 0,1 7.5,14.2C7.13,14.2 6.79,14 6.62,13.7C6.08,12.81 5.8,11.79 5.8,10.75C5.8,7.47 8.58,4.8 12,4.8C15.42,4.8 18.2,7.47 18.2,10.75C18.2,13.37 16.57,16.2 13,16.2M20,2H4C2.89,2 2,2.89 2,4V20A2,2 0 0,0 4,22H20A2,2 0 0,0 22,20V4C22,2.89 21.1,2 20,2Z" />
                  </symbol>
                  <symbol id="icon--instagram" viewBox="0 0 24 24">
                      <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                  </symbol>
                  <symbol id="icon--snapchat" viewBox="0 0 24 24">
                      <path d="M12,20.45C10.81,20.45 10.1,19.94 9.47,19.5C9,19.18 8.58,18.87 8.08,18.79C6.93,18.73 6.59,18.79 5.97,18.9C5.86,18.9 5.73,18.87 5.68,18.69C5.5,17.94 5.45,17.73 5.32,17.71C4,17.5 3.19,17.2 3.03,16.83C3,16.6 3.07,16.5 3.18,16.5C4.25,16.31 5.2,15.75 6,14.81C6.63,14.09 6.93,13.39 6.96,13.32C7.12,13 7.15,12.72 7.06,12.5C6.89,12.09 6.31,11.91 5.68,11.7C5.34,11.57 4.79,11.29 4.86,10.9C4.92,10.62 5.29,10.42 5.81,10.46C6.16,10.62 6.46,10.7 6.73,10.7C7.06,10.7 7.21,10.58 7.25,10.54C7.14,8.78 7.05,7.25 7.44,6.38C8.61,3.76 11.08,3.55 12,3.55C12.92,3.55 15.39,3.76 16.56,6.38C16.95,7.25 16.86,8.78 16.75,10.54C16.79,10.58 16.94,10.7 17.27,10.7C17.54,10.7 17.84,10.62 18.19,10.46C18.71,10.42 19.08,10.62 19.14,10.9C19.21,11.29 18.66,11.57 18.32,11.7C17.69,11.91 17.11,12.09 16.94,12.5C16.85,12.72 16.88,13 17.04,13.32C17.07,13.39 17.37,14.09 18,14.81C18.8,15.75 19.75,16.31 20.82,16.5C20.93,16.5 21,16.6 20.97,16.83C20.81,17.2 20,17.5 18.68,17.71C18.55,17.73 18.5,17.94 18.32,18.69C18.27,18.87 18.14,18.9 18.03,18.9C17.41,18.79 17.07,18.73 15.92,18.79C15.42,18.87 15,19.18 14.53,19.5C13.9,19.94 13.19,20.45 12,20.45Z" />
                  </symbol>
              </svg>
        		</div>
          </div>
        </div>

        <hr />
        <center>
          <p>Copyright &copy; Maryam&#39;s Ingredients 2016</p>
          <p>Developed by Luke Southam &lt;luke@devthe.com&gt;</p>
        </center>
    </footer>
);


class App extends Component {
    constructor(props) {
        super(props);
        this.navBar = props.navBar !== undefined ?
                      props.navBar : NavBar;
    }

    componentDidMount() {
        if(APPENLIGHT_API_KEY) {
            AppEnlight.init({
                apiKey: APPENLIGHT_API_KEY,
                windowOnError: 1
            });
        }
        console.log("Application mounted.");
    }

    render() {
        return (
            <div id="main">
                <this.navBar />
                <div id="app">
                    <Messages />
                    {this.props.children}
                </div>
                <br/>
                <Footer />
            </div>
        );
    }
}

export default App;
