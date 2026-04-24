import React from 'react'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const Footer = (props) => {
  return (
    <>
      <div className="footer-container1">
        <footer className="footer-wrapper">
          <div className="footer-container">
            <div className="footer-grid">
              <div className="footer-column footer-brand-column">
                <div className="footer-logo-container">
                  <span className="footer-logo-text">ZAMORA</span>
                  <span className="footer-logo-sub">ROOFING SOLUTIONS LLC</span>
                </div>
                <p className="footer-tagline">
                  Arizona&apos;s energy-efficient roofing experts. Family-owned,
                  desert-tested, and built to outlast the sun.
                </p>
                <div className="footer-brand-action">
                  <a href="tel:6028268259">
                    <div className="btn btn-accent btn-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                      <span>(602) 826-8259</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="footer-column">
                <h3 className="footer-heading">Quick Links</h3>
                <nav className="footer-nav">
                  <a href="#">
                    <div className="footer-link">
                      <span>Home</span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="footer-link">
                      <span>Services</span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="footer-link">
                      <span>Gallery</span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="footer-link">
                      <span>About Us</span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="footer-link">
                      <span>Contact</span>
                    </div>
                  </a>
                </nav>
              </div>
              <div className="footer-column">
                <h3 className="footer-heading">Our Services</h3>
                <nav className="footer-nav">
                  <a href="#">
                    <div className="footer-link">
                      <span>Residential Foam Roofing</span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="footer-link">
                      <span>Commercial Foam Roofing</span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="footer-link">
                      <span>Maintenance &amp; Recoating</span>
                    </div>
                  </a>
                  <a href="#">
                    <div className="footer-link">
                      <span>Energy Efficiency Solutions</span>
                    </div>
                  </a>
                </nav>
              </div>
              <div className="footer-column">
                <h3 className="footer-heading">Contact Us</h3>
                <div className="footer-contact-info">
                  <div className="footer-contact-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span>Arizona (Statewide Service)</span>
                  </div>
                  <div className="footer-contact-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    </svg>
                    <span>oscar@foamroofingaz.com</span>
                  </div>
                  <div className="footer-contact-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 6v6l4 2"></path>
                    </svg>
                    <span>Mon - Sat: 7:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-divider"></div>
            <div className="footer-bottom">
              <div className="footer-copyright">
                <span>
                  &amp;copy; 2026 Zamora Roofing Solutions LLC. Licensed &amp;
                  Insured. Serving Arizona.
                </span>
              </div>
              <div className="footer-socials">
                <a href="#">
                  <div aria-label="Instagram" className="footer-social-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div aria-label="Facebook" className="footer-social-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div aria-label="Google" className="footer-social-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="M12 6v6l4 2"></path>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </footer>
        <div className="footer-container2">
          <div className="footer-container3">
            <Script
              html={`<script defer data-name="footer-interactions">
(function(){
  const footerLinks = document.querySelectorAll(".footer-link")
  footerLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      link.style.color = "var(--color-accent)"
    })
    link.addEventListener("mouseleave", () => {
      link.style.color = ""
    })
  })

  const socialLinks = document.querySelectorAll(".footer-social-link")
  socialLinks.forEach((social) => {
    social.addEventListener("mouseenter", () => {
      const svg = social.querySelector("svg")
      if (svg) svg.style.transform = "scale(1.1)"
    })
    social.addEventListener("mouseleave", () => {
      const svg = social.querySelector("svg")
      if (svg) svg.style.transform = ""
    })
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .footer-container1 {
            display: contents;
          }
          .footer-container2 {
            display: none;
          }
          .footer-container3 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Footer
