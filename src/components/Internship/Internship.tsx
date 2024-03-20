import { Container } from "./styles";
// import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";
import companyIcon from "../../assets/company.svg";

export function Internship() {
  return (
    <Container id="internship">
      <h2>Internships</h2>
      <div className="projects">
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              {/* <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg> */}
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="-5.0 -10.0 110.0 135.0"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="m40.75 13.625h3.8906v-5.1953c0-0.55078 0.44531-0.99609 0.99609-0.99609h13.48v-5.1914c0-0.55078 0.44531-0.99609 0.99609-0.99609h15.098c0.55078 0 0.99609 0.44531 0.99609 0.99609v5.1953h13.48c0.55078 0 0.99609 0.44531 0.99609 0.99609v5.1953h3.8906c1.6758 0 3.0391 1.3633 3.0391 3.0391v81.094c0 0.55078-0.44531 0.99609-0.99609 0.99609h-93.227c-0.55078 0-0.99609-0.44531-0.99609-0.99609l-0.003906-58.77c0-1.6758 1.3633-3.0391 3.0391-3.0391h32.277l0.003907-19.289c0-1.6758 1.3633-3.0391 3.0391-3.0391zm-16.848 64.762c-0.55078 0-0.99609 0.44531-0.99609 0.99609v11.367c0 0.55078 0.44531 0.99609 0.99609 0.99609h5.6133c0.55078 0 0.99609-0.44531 0.99609-0.99609l-0.003907-11.367c0-0.55078-0.44531-0.99609-0.99609-0.99609zm4.6172 1.9922h-3.6211v9.375h3.6211zm-17.406-1.9922c-0.55078 0-0.99609 0.44531-0.99609 0.99609v11.367c0 0.55078 0.44531 0.99609 0.99609 0.99609h5.6133c0.55078 0 0.99609-0.44531 0.99609-0.99609l-0.003906-11.367c0-0.55078-0.44531-0.99609-0.99609-0.99609zm4.6133 1.9922h-3.6211v9.375h3.6211zm8.6406-19.703c-0.55078 0-0.99609 0.44531-0.99609 0.99609v11.367c0 0.55078 0.44531 0.99609 0.99609 0.99609h5.6133c0.55078 0 0.99609-0.44531 0.99609-0.99609l-0.003906-11.371c0-0.55078-0.44531-0.99609-0.99609-0.99609zm4.6133 1.9883h-3.6211v9.375h3.6211zm-17.406-1.9883c-0.55078 0-0.99609 0.44531-0.99609 0.99609v11.367c0 0.55078 0.44531 0.99609 0.99609 0.99609h5.6133c0.55078 0 0.99609-0.44531 0.99609-0.99609v-11.371c0-0.55078-0.44531-0.99609-0.99609-0.99609zm4.6172 1.9883h-3.6211v9.375h3.6211zm8.6367-19.703c-0.55078 0-0.99609 0.44531-0.99609 0.99609v11.367c0 0.55078 0.44531 0.99609 0.99609 0.99609h5.6094c0.55078 0 0.99609-0.44531 0.99609-0.99609v-11.367c0-0.55078-0.44531-0.99609-0.99609-0.99609zm4.6172 1.9883h-3.6211v9.375h3.6211zm-17.406-1.9883c-0.55078 0-0.99609 0.44531-0.99609 0.99609v11.367c0 0.55078 0.44531 0.99609 0.99609 0.99609h5.6094c0.55078 0 0.99609-0.44531 0.99609-0.99609v-11.367c0-0.55078-0.44531-0.99609-0.99609-0.99609zm4.6172 1.9883h-3.6211v9.375h3.6211zm44.449-37.516h13.105v-4.1953h-13.105zm-14.473 6.1914h42.055v-4.1992h-42.055zm22.02 64.871v18.27h10.676v-18.27zm-1.9883 18.266v-18.266h-10.676v18.27zm-11.668-20.258h25.328c0.55078 0 0.99609 0.44531 0.99609 0.99609v19.262h14.301l-0.003906-80.098c0-0.57812-0.47266-1.0508-1.0508-1.0508h-53.816c-0.57812 0-1.0508 0.47266-1.0508 1.0508v80.098h14.301v-19.262c0-0.55078 0.44531-0.99609 0.99609-0.99609zm25.453-19.367c-0.55078 0-0.99609 0.44531-0.99609 0.99609v8.6758c0 0.55078 0.44531 0.99609 0.99609 0.99609h8.6758c0.55078 0 0.99609-0.44531 0.99609-0.99609v-8.6758c0-0.55078-0.44531-0.99609-0.99609-0.99609zm7.6797 1.9922h-6.6836v6.6836h6.6836zm-24.809-1.9922c-0.55078 0-0.99609 0.44531-0.99609 0.99609v8.6758c0 0.55078 0.44531 0.99609 0.99609 0.99609h8.6758c0.55078 0 0.99609-0.44531 0.99609-0.99609v-8.6758c0-0.55078-0.44531-0.99609-0.99609-0.99609zm7.6836 1.9922h-6.6836v6.6836h6.6836zm-24.809-1.9922c-0.55078 0-0.99609 0.44531-0.99609 0.99609v8.6758c0 0.55078 0.44531 0.99609 0.99609 0.99609h8.6758c0.55078 0 0.99609-0.44531 0.99609-0.99609v-8.6758c0-0.55078-0.44531-0.99609-0.99609-0.99609zm7.6797 1.9922h-6.6836v6.6836h6.6836zm26.574-18.402c-0.55078 0-0.99609 0.44531-0.99609 0.99609v8.6758c0 0.55078 0.44531 0.99609 0.99609 0.99609h8.6758c0.55078 0 0.99609-0.44531 0.99609-0.99609v-8.6758c0-0.55078-0.44531-0.99609-0.99609-0.99609zm7.6797 1.9883h-6.6836v6.6836h6.6836zm-24.809-1.9883c-0.55078 0-0.99609 0.44531-0.99609 0.99609v8.6758c0 0.55078 0.44531 0.99609 0.99609 0.99609h8.6758c0.55078 0 0.99609-0.44531 0.99609-0.99609v-8.6758c0-0.55078-0.44531-0.99609-0.99609-0.99609zm7.6836 1.9883h-6.6836v6.6836h6.6836zm-24.809-1.9883c-0.55078 0-0.99609 0.44531-0.99609 0.99609v8.6758c0 0.55078 0.44531 0.99609 0.99609 0.99609h8.6758c0.55078 0 0.99609-0.44531 0.99609-0.99609v-8.6758c0-0.55078-0.44531-0.99609-0.99609-0.99609zm7.6797 1.9883h-6.6836v6.6836h6.6836zm26.574-18.398c-0.55078 0-0.99609 0.44531-0.99609 0.99609v8.6758c0 0.55078 0.44531 0.99609 0.99609 0.99609h8.6758c0.55078 0 0.99609-0.44531 0.99609-0.99609v-8.6758c0-0.55078-0.44531-0.99609-0.99609-0.99609zm7.6797 1.9883h-6.6836v6.6836h6.6836zm-24.809-1.9883c-0.55078 0-0.99609 0.44531-0.99609 0.99609v8.6758c0 0.55078 0.44531 0.99609 0.99609 0.99609h8.6758c0.55078 0 0.99609-0.44531 0.99609-0.99609v-8.6758c0-0.55078-0.44531-0.99609-0.99609-0.99609zm7.6836 1.9883h-6.6836v6.6836h6.6836zm-24.809-1.9883c-0.55078 0-0.99609 0.44531-0.99609 0.99609v8.6758c0 0.55078 0.44531 0.99609 0.99609 0.99609h8.6758c0.55078 0 0.99609-0.44531 0.99609-0.99609v-8.6758c0-0.55078-0.44531-0.99609-0.99609-0.99609zm7.6797 1.9883h-6.6836v6.6836h6.6836zm-16.164 70.457v-58.824l-32.277 0.003906c-0.57812 0-1.0508 0.47266-1.0508 1.0508v57.773z"
                  fill-rule="evenodd"
                />
                <text
                  x="0.0"
                  y="117.5"
                  font-size="5.0"
                  font-weight="bold"
                  font-family="Arbeit Regular, Helvetica, Arial-Unicode, Arial, Sans-serif"
                  fill="#000000"
                ></text>
                <text
                  x="0.0"
                  y="122.5"
                  font-size="5.0"
                  font-weight="bold"
                  font-family="Arbeit Regular, Helvetica, Arial-Unicode, Arial, Sans-serif"
                  fill="#000000"
                ></text>
              </svg>
              {/* <div className="project-links">
                <a
                  href="https://github.com/VatsalKotha/CRM"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit Repository" />
                </a>
              </div> */}
            </header>
            <div className="body">
              <h3>
                ASIANA TIMES - Junior WordPress Developer and On Page SEO Intern
              </h3>
              <p>
                About the Company :- We are a media company with a unique vision
                of truth, committed to bringing you the most common and uncommon
                worldly happenings occurring every day. Our team of experienced
                journalists work tirelessly to convey these happenings to you,
                with enormous resources at our disposal.</p><p> My Role :- Responsible
                for publising the articles on their website and handling the
                SEO. Ranked among top 5 Interns.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>03-2022</li>
                <li>-</li>
                <li>04-2022</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="-5.0 -10.0 110.0 135.0"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="m40.75 13.625h3.8906v-5.1953c0-0.55078 0.44531-0.99609 0.99609-0.99609h13.48v-5.1914c0-0.55078 0.44531-0.99609 0.99609-0.99609h15.098c0.55078 0 0.99609 0.44531 0.99609 0.99609v5.1953h13.48c0.55078 0 0.99609 0.44531 0.99609 0.99609v5.1953h3.8906c1.6758 0 3.0391 1.3633 3.0391 3.0391v81.094c0 0.55078-0.44531 0.99609-0.99609 0.99609h-93.227c-0.55078 0-0.99609-0.44531-0.99609-0.99609l-0.003906-58.77c0-1.6758 1.3633-3.0391 3.0391-3.0391h32.277l0.003907-19.289c0-1.6758 1.3633-3.0391 3.0391-3.0391zm-16.848 64.762c-0.55078 0-0.99609 0.44531-0.99609 0.99609v11.367c0 0.55078 0.44531 0.99609 0.99609 0.99609h5.6133c0.55078 0 0.99609-0.44531 0.99609-0.99609l-0.003907-11.367c0-0.55078-0.44531-0.99609-0.99609-0.99609zm4.6172 1.9922h-3.6211v9.375h3.6211zm-17.406-1.9922c-0.55078 0-0.99609 0.44531-0.99609 0.99609v11.367c0 0.55078 0.44531 0.99609 0.99609 0.99609h5.6133c0.55078 0 0.99609-0.44531 0.99609-0.99609l-0.003906-11.367c0-0.55078-0.44531-0.99609-0.99609-0.99609zm4.6133 1.9922h-3.6211v9.375h3.6211zm8.6406-19.703c-0.55078 0-0.99609 0.44531-0.99609 0.99609v11.367c0 0.55078 0.44531 0.99609 0.99609 0.99609h5.6133c0.55078 0 0.99609-0.44531 0.99609-0.99609l-0.003906-11.371c0-0.55078-0.44531-0.99609-0.99609-0.99609zm4.6133 1.9883h-3.6211v9.375h3.6211zm-17.406-1.9883c-0.55078 0-0.99609 0.44531-0.99609 0.99609v11.367c0 0.55078 0.44531 0.99609 0.99609 0.99609h5.6133c0.55078 0 0.99609-0.44531 0.99609-0.99609v-11.371c0-0.55078-0.44531-0.99609-0.99609-0.99609zm4.6172 1.9883h-3.6211v9.375h3.6211zm8.6367-19.703c-0.55078 0-0.99609 0.44531-0.99609 0.99609v11.367c0 0.55078 0.44531 0.99609 0.99609 0.99609h5.6094c0.55078 0 0.99609-0.44531 0.99609-0.99609v-11.367c0-0.55078-0.44531-0.99609-0.99609-0.99609zm4.6172 1.9883h-3.6211v9.375h3.6211zm-17.406-1.9883c-0.55078 0-0.99609 0.44531-0.99609 0.99609v11.367c0 0.55078 0.44531 0.99609 0.99609 0.99609h5.6094c0.55078 0 0.99609-0.44531 0.99609-0.99609v-11.367c0-0.55078-0.44531-0.99609-0.99609-0.99609zm4.6172 1.9883h-3.6211v9.375h3.6211zm44.449-37.516h13.105v-4.1953h-13.105zm-14.473 6.1914h42.055v-4.1992h-42.055zm22.02 64.871v18.27h10.676v-18.27zm-1.9883 18.266v-18.266h-10.676v18.27zm-11.668-20.258h25.328c0.55078 0 0.99609 0.44531 0.99609 0.99609v19.262h14.301l-0.003906-80.098c0-0.57812-0.47266-1.0508-1.0508-1.0508h-53.816c-0.57812 0-1.0508 0.47266-1.0508 1.0508v80.098h14.301v-19.262c0-0.55078 0.44531-0.99609 0.99609-0.99609zm25.453-19.367c-0.55078 0-0.99609 0.44531-0.99609 0.99609v8.6758c0 0.55078 0.44531 0.99609 0.99609 0.99609h8.6758c0.55078 0 0.99609-0.44531 0.99609-0.99609v-8.6758c0-0.55078-0.44531-0.99609-0.99609-0.99609zm7.6797 1.9922h-6.6836v6.6836h6.6836zm-24.809-1.9922c-0.55078 0-0.99609 0.44531-0.99609 0.99609v8.6758c0 0.55078 0.44531 0.99609 0.99609 0.99609h8.6758c0.55078 0 0.99609-0.44531 0.99609-0.99609v-8.6758c0-0.55078-0.44531-0.99609-0.99609-0.99609zm7.6836 1.9922h-6.6836v6.6836h6.6836zm-24.809-1.9922c-0.55078 0-0.99609 0.44531-0.99609 0.99609v8.6758c0 0.55078 0.44531 0.99609 0.99609 0.99609h8.6758c0.55078 0 0.99609-0.44531 0.99609-0.99609v-8.6758c0-0.55078-0.44531-0.99609-0.99609-0.99609zm7.6797 1.9922h-6.6836v6.6836h6.6836zm26.574-18.402c-0.55078 0-0.99609 0.44531-0.99609 0.99609v8.6758c0 0.55078 0.44531 0.99609 0.99609 0.99609h8.6758c0.55078 0 0.99609-0.44531 0.99609-0.99609v-8.6758c0-0.55078-0.44531-0.99609-0.99609-0.99609zm7.6797 1.9883h-6.6836v6.6836h6.6836zm-24.809-1.9883c-0.55078 0-0.99609 0.44531-0.99609 0.99609v8.6758c0 0.55078 0.44531 0.99609 0.99609 0.99609h8.6758c0.55078 0 0.99609-0.44531 0.99609-0.99609v-8.6758c0-0.55078-0.44531-0.99609-0.99609-0.99609zm7.6836 1.9883h-6.6836v6.6836h6.6836zm-24.809-1.9883c-0.55078 0-0.99609 0.44531-0.99609 0.99609v8.6758c0 0.55078 0.44531 0.99609 0.99609 0.99609h8.6758c0.55078 0 0.99609-0.44531 0.99609-0.99609v-8.6758c0-0.55078-0.44531-0.99609-0.99609-0.99609zm7.6797 1.9883h-6.6836v6.6836h6.6836zm26.574-18.398c-0.55078 0-0.99609 0.44531-0.99609 0.99609v8.6758c0 0.55078 0.44531 0.99609 0.99609 0.99609h8.6758c0.55078 0 0.99609-0.44531 0.99609-0.99609v-8.6758c0-0.55078-0.44531-0.99609-0.99609-0.99609zm7.6797 1.9883h-6.6836v6.6836h6.6836zm-24.809-1.9883c-0.55078 0-0.99609 0.44531-0.99609 0.99609v8.6758c0 0.55078 0.44531 0.99609 0.99609 0.99609h8.6758c0.55078 0 0.99609-0.44531 0.99609-0.99609v-8.6758c0-0.55078-0.44531-0.99609-0.99609-0.99609zm7.6836 1.9883h-6.6836v6.6836h6.6836zm-24.809-1.9883c-0.55078 0-0.99609 0.44531-0.99609 0.99609v8.6758c0 0.55078 0.44531 0.99609 0.99609 0.99609h8.6758c0.55078 0 0.99609-0.44531 0.99609-0.99609v-8.6758c0-0.55078-0.44531-0.99609-0.99609-0.99609zm7.6797 1.9883h-6.6836v6.6836h6.6836zm-16.164 70.457v-58.824l-32.277 0.003906c-0.57812 0-1.0508 0.47266-1.0508 1.0508v57.773z"
                  fill-rule="evenodd"
                />
                <text
                  x="0.0"
                  y="117.5"
                  font-size="5.0"
                  font-weight="bold"
                  font-family="Arbeit Regular, Helvetica, Arial-Unicode, Arial, Sans-serif"
                  fill="#000000"
                ></text>
                <text
                  x="0.0"
                  y="122.5"
                  font-size="5.0"
                  font-weight="bold"
                  font-family="Arbeit Regular, Helvetica, Arial-Unicode, Arial, Sans-serif"
                  fill="#000000"
                ></text>
              </svg>
              {/* <div className="project-links">
                <a
                  href="https://github.com/VatsalKotha/LinkedIn-Recommendation-System-using-Machine-Learning"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div> */}
            </header>
            <div className="body">
              <h3>Thewebheart Digital - WordPress Developer</h3>
              <p>
                About the Company :- We believe that scale comes with a
                responsibility. A responsibility to be responsive and
                innovative. And that's exactly how our digital solutions are.</p><p>
                My Role :- Responsible for Developing different elements in a website using WordPress.
                            Coordinated with the Founder and Co-Founder for development of different websites & its elements.
                            Responsible for maintaining an attractive UI for all the clients.
                            
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>07 - 2022</li>
                <li>-</li>
                <li>08 -2022</li>
                {/* <li>Woocommerce</li> */}
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

       

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://www.smartcornersproperties.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>SmartCorners - Real Estate Properties Site</h3>
              <p>
              This real estate site displays land properties and helps buyers and sellers. Buyers can see lots of pictures, videos, and details about properties before visiting in person. It makes it easier for buyers to find what they want and helps sellers get more attention.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>               
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://drrohitdamor.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Dr.Rohit Damor - Online Appointment Booking Site</h3>
              <p>
                This website allows people to easily book appointments with you
                online. It takes just a minute to schedule a meeting. This kind
                of site is helpful for booking appointments and not missing any
                potential clients. You should try this website to see how
                convenient and efficient it is.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://velocityai.vinayaksingh.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>VeloCityAI</h3>
              <p>
                VelocityAI is a website that allows users to get instant answers
                to any question and generate stunning AI pictures using OpenAI's
                GPT-3 and DALL-E model.With VelocityAI, users can type in
                text-based prompts and receive a corresponding response.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Typescript</li>
                <li>Html</li>
                <li>css</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://mitulindustries.com/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Mitul Industries - Manufacturing Industries Site</h3>
              <p>
              This manufacturing industry website shows off products and helps the business get more customers and information online. Making products is important but making money from them is the goal. This site can help the business make more profit.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}

        {/* <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg
                width="50"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#23ce6b "
                stroke-width="1"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a
                  href="https://mayatmaj.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Mayatmaj - Film Production Site</h3>
              <p>
                This agency website promotes post production, virtual
                production, and video marketing services. It shows previous
                client work and reviews to get more business. If you need help
                with production, this website can give you information and
                connect you with the right people.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Wordpress</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation> */}
      </div>
    </Container>
  );
}
