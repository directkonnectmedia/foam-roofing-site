import React from 'react'
import Link from 'next/link'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

const Navigation = (props) => {
  return (
    <>
      <div className="navigation-container1">
        <nav className="navigation-wrapper">
          <div className="navigation-container">
            <Link href="/">
              <a>
                <div className="navigation-logo-link">
                  <span className="navigation-brand section-title">
                    <span>
                      {' '}
                      Oscar&apos;s
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="navigation-thq-navigation-accent-text-elm1">
                      Foam Roofing
                    </span>
                  </span>
                </div>
              </a>
            </Link>
            <div className="navigation-desktop-menu">
              <ul className="navigation-links-list">
                <li>
                  <Link href="/">
                    <a>
                      <div className="navigation-link">
                        <span>Home</span>
                      </div>
                    </a>
                  </Link>
                </li>
                <li className="navigation-dropdown-parent">
                  <button className="navigation-link navigation-dropdown-trigger">
                    <span>
                      {' '}
                      Services
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="navigation-thq-navigation-icon-sm-elm1"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m6 9l6 6l6-6"
                      ></path>
                    </svg>
                  </button>
                  <ul className="navigation-dropdown-menu">
                    <li>
                      <Link href="/">
                        <a>
                          <div className="navigation-dropdown-link">
                            <span>Residential Foam Roofing</span>
                          </div>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>
                          <div className="navigation-dropdown-link">
                            <span>Commercial Foam Roofing</span>
                          </div>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>
                          <div className="navigation-dropdown-link">
                            <span>Maintenance &amp; Recoating</span>
                          </div>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/">
                    <a>
                      <div className="navigation-link">
                        <span>Gallery</span>
                      </div>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>
                      <div className="navigation-link">
                        <span>About Us</span>
                      </div>
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>
                      <div className="navigation-link">
                        <span>Contact</span>
                      </div>
                    </a>
                  </Link>
                </li>
              </ul>
              <a href="tel:6028268259">
                <div className="navigation-cta btn btn-primary btn-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="navigation-icon-sm"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                    ></path>
                  </svg>
                  <span>
                    {' '}
                    (602) 826-8259
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </a>
            </div>
            <button
              id="mobile-nav-toggle"
              aria-label="Open menu"
              aria-expanded="false"
              className="navigation-mobile-toggle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="navigation-thq-navigation-icon-md-elm1"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </nav>
        <div id="mobile-nav-overlay" className="navigation-mobile-overlay">
          <div className="navigation-mobile-header">
            <Link href="/">
              <a>
                <div className="navigation-logo-link">
                  <span className="navigation-brand section-title">
                    <span>
                      {' '}
                      Oscar&apos;s
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="navigation-thq-navigation-accent-text-elm2">
                      Foam Roofing
                    </span>
                  </span>
                </div>
              </a>
            </Link>
            <button
              id="mobile-nav-close"
              aria-label="Close menu"
              className="navigation-mobile-close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="navigation-thq-navigation-icon-md-elm2"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M18 6L6 18M6 6l12 12"
                ></path>
              </svg>
            </button>
          </div>
          <div className="navigation-mobile-content">
            <ul className="navigation-mobile-links">
              <li>
                <Link href="/">
                  <a>
                    <div className="navigation-mobile-link">
                      <span>Home</span>
                    </div>
                  </a>
                </Link>
              </li>
              <li>
                <details className="navigation-mobile-details">
                  <summary className="navigation-mobile-link">
                    <span>
                      {' '}
                      Services
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="navigation-icon-sm"
                    >
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m6 9l6 6l6-6"
                      ></path>
                    </svg>
                  </summary>
                  <ul className="navigation-mobile-submenu">
                    <li>
                      <Link href="/">
                        <a>
                          <div className="navigation-mobile-sublink">
                            <span>Residential Foam Roofing</span>
                          </div>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>
                          <div className="navigation-mobile-sublink">
                            <span>Commercial Foam Roofing</span>
                          </div>
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <a>
                          <div className="navigation-mobile-sublink">
                            <span>Maintenance &amp; Recoating</span>
                          </div>
                        </a>
                      </Link>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <Link href="/">
                  <a>
                    <div className="navigation-mobile-link">
                      <span>Gallery</span>
                    </div>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>
                    <div className="navigation-mobile-link">
                      <span>About Us</span>
                    </div>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>
                    <div className="navigation-mobile-link">
                      <span>Contact</span>
                    </div>
                  </a>
                </Link>
              </li>
            </ul>
            <div className="navigation-mobile-footer">
              <a href="tel:6028268259">
                <div className="navigation-mobile-cta btn btn-primary btn-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="navigation-icon-sm"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
                    ></path>
                  </svg>
                  <span>
                    {' '}
                    Call Oscar: (602) 826-8259
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <a href="tel:6028268259">
          <div aria-label="Call Now" className="navigation-sticky-call-mobile">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="navigation-icon-md"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"
              ></path>
            </svg>
          </div>
        </a>
        <div className="navigation-container2">
          <div className="navigation-container3">
            <Script
              html={`<script defer data-name="navigation-logic">
(function(){
  const mobileNavToggle = document.getElementById("mobile-nav-toggle")
  const mobileNavClose = document.getElementById("mobile-nav-close")
  const mobileNavOverlay = document.getElementById("mobile-nav-overlay")
  const bodyElement = document.body

  const openMobileMenu = () => {
    mobileNavOverlay.classList.add("is-open")
    mobileNavToggle.setAttribute("aria-expanded", "true")
    bodyElement.style.overflow = "hidden"
  }

  const closeMobileMenu = () => {
    mobileNavOverlay.classList.remove("is-open")
    mobileNavToggle.setAttribute("aria-expanded", "false")
    bodyElement.style.overflow = ""
  }

  mobileNavToggle.addEventListener("click", openMobileMenu)
  mobileNavClose.addEventListener("click", closeMobileMenu)

  // Close menu on link click (useful for hash links or single page sites)
  const mobileLinks = document.querySelectorAll(".navigation-mobile-link, .navigation-mobile-sublink")
  mobileLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      // Don't close if it's a services summary toggle
      if (e.target.closest("summary")) return
      closeMobileMenu()
    })
  })

  // Close menu if clicking outside content area on overlay
  mobileNavOverlay.addEventListener("click", (e) => {
    if (e.target === mobileNavOverlay) {
      closeMobileMenu()
    }
  })

  // Simple scroll behavior for nav bar appearance
  let lastScroll = 0
  const navWrapper = document.querySelector(".navigation-wrapper")

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset

    if (currentScroll <= 0) {
      navWrapper.style.transform = "translateY(0)"
      return
    }

    if (currentScroll > lastScroll && currentScroll > 200) {
      // Scrolling down - hide nav
      navWrapper.style.transform = "translateY(-100%)"
    } else {
      // Scrolling up - show nav
      navWrapper.style.transform = "translateY(0)"
    }
    lastScroll = currentScroll
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .navigation-container1 {
            display: contents;
          }
          .navigation-thq-navigation-accent-text-elm1 {
            color: var(--color-accent);
          }
          .navigation-thq-navigation-icon-sm-elm1 {
            width: 16px;
            height: 16px;
            flex-shrink: 0;
          }
          .navigation-thq-navigation-icon-md-elm1 {
            width: 24px;
            height: 24px;
            flex-shrink: 0;
          }
          .navigation-thq-navigation-accent-text-elm2 {
            color: var(--color-accent);
          }
          .navigation-thq-navigation-icon-md-elm2 {
            width: 24px;
            height: 24px;
            flex-shrink: 0;
          }
          .navigation-container2 {
            display: none;
          }
          .navigation-container3 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Navigation
