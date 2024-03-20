import { Container } from './styles'
import linkedin from '../../assets/linkedin.svg'
import githubIcon from '../../assets/github.svg'
import instagramIcon from '../../assets/instagram.svg'
import twitter from '../../assets/twitter.svg'

export function Footer() {
  return (
    <Container className="footer">
      {/* <a href="https://vinayaksingh.in" className="logo">
        <span>www.vinayak</span>
        <span>singh.in</span>
      </a> */}
      <div>
        <p>
        Copyright © 2024 Vatsal Kotha. All rights reserved.
          {/* This Website was made with <img src={reactIcon} alt="React" /> */}
          {/* <span>❤️</span> */}
        </p>
      </div>
      <div className="social-media">
        <a
          href="https://www.instagram.com/vatsal.kotha/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={linkedin} alt="Linkedin" />
        </a>
        <a
          href="https://github.com/VatsalKotha/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://twitter.com/KothaVatsal"
          target="_blank"
          rel="noreferrer"
        >
          <img src={twitter} alt="Twitter" />
        </a>
        <a
          href="https://www.instagram.com/vatsal.kotha/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagramIcon} alt="Instagram" />
        </a>
      </div>
    </Container>
  )
}
