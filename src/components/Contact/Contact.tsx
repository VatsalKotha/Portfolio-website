import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import Resume from "../../assets/Resume.pdf";

export function Contact() {
  return (
    <Container id="contact">
      <header>
        <h2>Contact Me</h2>
        {/* <p>Ready to get started on your project? </p>
        <p>Contact me now for a Free consultation.</p> */}
      </header>
      <div className="contacts">
        <div>
          <a href="mailto:vatsalkotha@gmail.com">
            <img src={emailIcon} alt="Email" />
          </a>
          <a href="mailto:vatsalkotha@gmail.com">vatsalkotha@gmail.com</a>
        </div>

        {/* <div>
        <a href="tel:+919630576848"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+919630576848">(+91) 9137401776</a>
        </div>  */}
        <div className="phone">
          <a href={Resume} download >
            Download Resume
          </a>
        </div>
      </div>
      {/* <Form></Form> */}
    </Container>
  );
}
