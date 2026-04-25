import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>Ill Fated Illegal Antelope</title>
          <meta property="og:title" content="Ill Fated Illegal Antelope" />
          <link
            rel="canonical"
            href="https://ill-fated-illegal-antelope-l97iy5.teleporthq.site/"
          />
          <meta
            property="og:url"
            content="https://ill-fated-illegal-antelope-l97iy5.teleporthq.site/"
          />
        </Head>
        <Navigation></Navigation>
        <section className="hero-section">
          <div className="hero-video-wrapper">
            <img
              src="/external/foam%20roof%20image-1500w.jpg"
              alt="White foam roof installation in Arizona"
              className="hero-bg-video"
            />
            <div className="hero-overlay"></div>
          </div>
          <div className="hero-content">
            <h1 className="home-hero-title hero-title">
              Arizona&apos;s Seamless, Energy-Efficient Foam Roofing.
            </h1>
            <p className="home-hero-subtitle hero-subtitle">
              Family-owned. Desert-tested. Built to outlast the sun.
            </p>
            <div className="hero-actions">
              <button id="openHeroForm" className="btn btn-accent btn-xl">
                Get a Free Estimate
              </button>
              <a href="tel:6028268259">
                <div className="hero-call-btn btn btn-xl btn-accent">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span>Call Oscar: (602) 826-8259</span>
                </div>
              </a>
            </div>
            <div className="hero-trust-bar">
              <div className="trust-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                <span>25+ Years Experience</span>
              </div>
              <div className="trust-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
                <span>Free Inspections</span>
              </div>
              <div className="trust-item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>Statewide Arizona Service</span>
              </div>
            </div>
          </div>
        </section>
        <section className="about-section">
          <div className="about-container">
            <div className="about-grid">
              <div className="about-values">
                <div className="value-prop">
                  <div className="value-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="12" x="2" y="6" rx="2"></rect>
                      <circle cx="12" cy="12" r="2"></circle>
                      <path d="M6 12h.01M18 12h.01"></path>
                    </svg>
                  </div>
                  <h3 className="section-subtitle">100% Transparent Pricing</h3>
                </div>
                <div className="value-prop">
                  <div className="value-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <h3 className="section-subtitle">
                    Family-Owned &amp; Operated
                  </h3>
                </div>
                <div className="value-prop">
                  <div className="value-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      <path d="m9 12 2 2 4-4"></path>
                    </svg>
                  </div>
                  <h3 className="section-subtitle">
                    Arizona-Tested Workmanship
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="services-section">
          <div className="services-container">
            <div className="services-header">
              <h2 className="section-title">Professional Foam Solutions</h2>
              <p className="section-subtitle">
                Advanced SPF roofing for energy efficiency and durability.
              </p>
            </div>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-image-wrapper">
                  <img
                    src="/external/residential-foam-roof.jpg"
                    alt="Residential Foam Roof"
                    className="service-img"
                  />
                </div>
                <div className="service-card-body">
                  <div className="service-card-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                  </div>
                  <h3 className="section-subtitle">Residential Foam Roofing</h3>
                  <a href="#">
                    <div className="btn btn-link">
                      <span>Learn More</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="service-card">
                <div className="service-image-wrapper">
                  <img
                    src="/external/foam%20roof%20image-1500w.jpg"
                    alt="Commercial Foam Roof"
                    className="service-img"
                  />
                  <img
                    alt="pastedImage"
                    src="/external/pastedimage-l8o6-1500w.png"
                  />
                </div>
                <div className="service-card-body">
                  <div className="service-card-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect
                        width="16"
                        height="20"
                        x="4"
                        y="2"
                        rx="2"
                        ry="2"
                      ></rect>
                      <path d="M9 22v-4h6v4"></path>
                      <path d="M8 6h.01"></path>
                      <path d="M16 6h.01"></path>
                      <path d="M12 6h.01"></path>
                      <path d="M12 10h.01"></path>
                      <path d="M12 14h.01"></path>
                      <path d="M16 10h.01"></path>
                      <path d="M16 14h.01"></path>
                      <path d="M8 10h.01"></path>
                      <path d="M8 14h.01"></path>
                    </svg>
                  </div>
                  <h3 className="section-subtitle">Commercial Foam Roofing</h3>
                  <a href="#">
                    <div className="btn btn-link">
                      <span>Learn More</span>
                    </div>
                  </a>
                </div>
              </div>
              <div className="service-card">
                <div className="service-image-wrapper">
                  <img
                    src="https://images.unsplash.com/photo-1674485169641-bcb2bf6f1df9?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDQ1fHxyb29mJTIwbWFpbnRlbmVuY2UlMjB3b3JrZXJ8ZW58MHx8fHwxNzc2OTg2NzUwfDA&amp;ixlib=rb-4.1.0&amp;w=1500"
                    alt="Maintenance and Recoating"
                    className="service-img"
                  />
                </div>
                <div className="service-card-body">
                  <div className="service-card-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"></path>
                      <path d="M21 3v5h-5"></path>
                    </svg>
                  </div>
                  <h3 className="section-subtitle">
                    Maintenance &amp; Recoating
                  </h3>
                  <a href="#">
                    <div className="btn btn-link">
                      <span>Learn More</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="why-foam-section">
          <div className="why-foam-container">
            <div className="why-foam-header">
              <h2 className="section-title">Why Arizona Homes Choose Foam</h2>
              <p className="section-subtitle">
                The ultimate protection for the Valley of the Sun.
              </p>
            </div>
            <div className="benefits-grid">
              <div className="benefit-item">
                <div className="benefit-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div className="benefit-text">
                  <h3 className="section-subtitle">Seamless Waterproofing</h3>
                  <p className="section-content">
                    No seams means no leaks, even during the heaviest monsoon
                    downpours.
                  </p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path>
                  </svg>
                </div>
                <div className="benefit-text">
                  <h3 className="section-subtitle">Lower Energy Bills</h3>
                  <p className="section-content">
                    Reflective topcoat + R-value = cooler home and much smaller
                    AC bills.
                  </p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M14 4l1.25 2.5L18 6"></path>
                    <path d="m17 21l-3-6l1.5-3H22"></path>
                    <path d="m20 10l-1.5 2l1.5 2"></path>
                  </svg>
                </div>
                <div className="benefit-text">
                  <h3 className="section-subtitle">Built for the Desert</h3>
                  <p className="section-content">
                    Thrives in 115°F heat, monsoons, and intense Arizona UV
                    radiation.
                  </p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                </div>
                <div className="benefit-text">
                  <h3 className="section-subtitle">Decades of Protection</h3>
                  <p className="section-content">
                    30–50+ year roof when properly maintained with our recoating
                    services.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="gallery-section">
          <div className="gallery-header-wrapper">
            <h2 className="section-title">Real Arizona Roofs. Real Results.</h2>
            <p className="section-subtitle">
              Every job. Every detail. Done right the first time.
            </p>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item">
              <div className="gallery-item-media">
                <img
                  src="/external/gallery-foam-3.jpg"
                  alt="Arizona desert white foam roof"
                  loading="lazy"
                />
              </div>
              <div className="gallery-item-overlay"></div>
              <div className="gallery-item-caption">
                <span className="gallery-item-tag">Residential</span>
                <p className="gallery-item-label">Desert foam roof, Scottsdale AZ</p>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-item-media">
                <img
                  src="/external/gallery-foam-1.jpg"
                  alt="Spray polyurethane foam application"
                  loading="lazy"
                />
              </div>
              <div className="gallery-item-overlay"></div>
              <div className="gallery-item-caption">
                <span className="gallery-item-tag">Application</span>
                <p className="gallery-item-label">SPF spray application in progress</p>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-item-media">
                <img
                  src="/external/gallery-foam-4.jpg"
                  alt="Completed white foam roof installation"
                  loading="lazy"
                />
              </div>
              <div className="gallery-item-overlay"></div>
              <div className="gallery-item-caption">
                <span className="gallery-item-tag">Residential</span>
                <p className="gallery-item-label">Reflective white topcoat finish</p>
              </div>
            </div>
            <div className="gallery-item">
              <div className="gallery-item-media">
                <img
                  src="/external/gallery-foam-2.jpg"
                  alt="Commercial foam roofing application"
                  loading="lazy"
                />
              </div>
              <div className="gallery-item-overlay"></div>
              <div className="gallery-item-caption">
                <span className="gallery-item-tag">Commercial</span>
                <p className="gallery-item-label">Large-scale SPF roofing project</p>
              </div>
            </div>
          </div>
        </section>
        <section id="estimate-form" className="contact-section">
          <div className="contact-overlay"></div>
          <div className="contact-container">
            <div className="contact-grid">
              <div className="contact-info">
                <span className="contact-eyebrow">Ready for a lifetime roof?</span>
                <h2 className="section-title contact-title">
                  Let&apos;s Get <span className="accent-word">Started</span>
                </h2>
                <p className="section-content contact-lead">
                  Family-owned and serving homeowners and businesses across
                  Arizona. Free inspection, honest pricing, no obligation.
                </p>
                <div className="contact-details">
                  <div className="detail-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <a href="tel:6028268259">
                      <div>
                        <span>(602) 826-8259</span>
                      </div>
                    </a>
                  </div>
                  <div className="detail-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span>Arizona Statewide Service</span>
                  </div>
                  <div className="detail-item">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span>Mon–Sat: 7:00 AM – 6:00 PM</span>
                  </div>
                </div>
              </div>
              <div className="contact-form-wrapper">
                <div id="quoteWizard" className="quote-wizard" data-current-step="1">
                  <div className="quote-wizard__progress">
                    <div data-step="1" className="quote-wizard__step-indicator is-active">
                      <div className="quote-wizard__step-circle">
                        <span className="quote-wizard__step-number">1</span>
                        <svg className="quote-wizard__step-check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5"></path></svg>
                      </div>
                      <span className="quote-wizard__step-label">Service</span>
                    </div>
                    <div className="quote-wizard__connector"></div>
                    <div data-step="2" className="quote-wizard__step-indicator">
                      <div className="quote-wizard__step-circle">
                        <span className="quote-wizard__step-number">2</span>
                        <svg className="quote-wizard__step-check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5"></path></svg>
                      </div>
                      <span className="quote-wizard__step-label">Details</span>
                    </div>
                    <div className="quote-wizard__connector"></div>
                    <div data-step="3" className="quote-wizard__step-indicator">
                      <div className="quote-wizard__step-circle">
                        <span className="quote-wizard__step-number">3</span>
                        <svg className="quote-wizard__step-check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5"></path></svg>
                      </div>
                      <span className="quote-wizard__step-label">Timeline</span>
                    </div>
                    <div className="quote-wizard__connector"></div>
                    <div data-step="4" className="quote-wizard__step-indicator">
                      <div className="quote-wizard__step-circle">
                        <span className="quote-wizard__step-number">4</span>
                        <svg className="quote-wizard__step-check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5"></path></svg>
                      </div>
                      <span className="quote-wizard__step-label">Contact</span>
                    </div>
                    <div className="quote-wizard__connector"></div>
                    <div data-step="5" className="quote-wizard__step-indicator">
                      <div className="quote-wizard__step-circle">
                        <span className="quote-wizard__step-number">5</span>
                        <svg className="quote-wizard__step-check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5"></path></svg>
                      </div>
                      <span className="quote-wizard__step-label">Done</span>
                    </div>
                  </div>
                  <div className="quote-wizard__panels">
                    <div data-panel="1" className="quote-wizard__step is-active">
                      <h3 className="quote-wizard__heading">Which type of project?</h3>
                      <p className="quote-wizard__hint">Pick what fits your roof — we&apos;ll tailor your estimate.</p>
                      <div className="quote-wizard__grid quote-wizard__grid--services">
                        <button type="button" data-field="service" data-value="Residential" className="quote-wizard__choice">
                          <span aria-hidden="true" className="quote-wizard__choice-icon">🏠</span>
                          <span className="quote-wizard__choice-label">Residential</span>
                          <span aria-hidden="true" className="quote-wizard__choice-check">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>
                          </span>
                        </button>
                        <button type="button" data-field="service" data-value="Commercial" className="quote-wizard__choice">
                          <span aria-hidden="true" className="quote-wizard__choice-icon">🏢</span>
                          <span className="quote-wizard__choice-label">Commercial</span>
                          <span aria-hidden="true" className="quote-wizard__choice-check">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>
                          </span>
                        </button>
                        <button type="button" data-field="service" data-value="Custom Work" className="quote-wizard__choice">
                          <span aria-hidden="true" className="quote-wizard__choice-icon">🔨</span>
                          <span className="quote-wizard__choice-label">Custom Work</span>
                          <span aria-hidden="true" className="quote-wizard__choice-check">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>
                          </span>
                        </button>
                      </div>
                      <div className="quote-wizard__actions">
                        <button type="button" data-action="next" disabled="true" className="quote-wizard__btn quote-wizard__btn--primary">Continue</button>
                      </div>
                    </div>
                    <div data-panel="2" className="quote-wizard__step">
                      <h3 className="quote-wizard__heading">Tell us about your roof</h3>
                      <p className="quote-wizard__hint">Square footage helps us estimate. If you&apos;re not sure, just tap &ldquo;I don&apos;t know.&rdquo;</p>
                      <div className="quote-wizard__field-group">
                        <label className="quote-wizard__label">Square footage (optional)</label>
                        <div className="quote-wizard__sqft-row">
                          <input type="number" min="0" placeholder="e.g. 2000" data-field="sqft" id="wizardSqft" className="quote-wizard__input" />
                          <button type="button" data-action="dont-know" id="wizardDontKnow" className="quote-wizard__pill quote-wizard__pill--inline">I don&apos;t know</button>
                        </div>
                      </div>
                      <div className="quote-wizard__field-group">
                        <label className="quote-wizard__label">Project details (optional)</label>
                        <textarea data-field="details" placeholder="Anything you'd like Oscar to know — leaks, age of roof, access notes..." className="quote-wizard__textarea"></textarea>
                      </div>
                      <div className="quote-wizard__actions">
                        <button type="button" data-action="back" className="quote-wizard__btn quote-wizard__btn--back">Back</button>
                        <button type="button" data-action="next" className="quote-wizard__btn quote-wizard__btn--primary">Continue</button>
                      </div>
                    </div>
                    <div data-panel="3" className="quote-wizard__step">
                      <h3 className="quote-wizard__heading">When would you like it done?</h3>
                      <p className="quote-wizard__hint">No pressure — even &ldquo;just exploring&rdquo; gets a real estimate.</p>
                      <div className="quote-wizard__grid quote-wizard__grid--2">
                        <button type="button" data-field="timeline" data-value="ASAP (within 2 weeks)" className="quote-wizard__pill">ASAP (within 2 weeks)</button>
                        <button type="button" data-field="timeline" data-value="Within a month" className="quote-wizard__pill">Within a month</button>
                        <button type="button" data-field="timeline" data-value="1–3 months" className="quote-wizard__pill">1–3 months</button>
                        <button type="button" data-field="timeline" data-value="Just exploring" className="quote-wizard__pill">Just exploring</button>
                      </div>
                      <div className="quote-wizard__actions">
                        <button type="button" data-action="back" className="quote-wizard__btn quote-wizard__btn--back">Back</button>
                        <button type="button" data-action="next" disabled="true" className="quote-wizard__btn quote-wizard__btn--primary">Continue</button>
                      </div>
                    </div>
                    <div data-panel="4" className="quote-wizard__step">
                      <h3 className="quote-wizard__heading">How can Oscar reach you?</h3>
                      <p className="quote-wizard__hint">Name is required. Email or phone (or both) — your call.</p>
                      <div className="quote-wizard__fields">
                        <input type="text" placeholder="Full Name *" data-field="fullName" id="wizardName" required="true" className="quote-wizard__input" />
                        <input type="tel" placeholder="Phone Number" data-field="phone" id="wizardPhone" className="quote-wizard__input" />
                        <input type="email" placeholder="Email Address" data-field="email" id="wizardEmail" className="quote-wizard__input" />
                      </div>
                      <p data-role="contact-error" className="quote-wizard__error" hidden="true">Please add an email or a phone number so we can reach you.</p>
                      <div className="quote-wizard__actions">
                        <button type="button" data-action="back" className="quote-wizard__btn quote-wizard__btn--back">Back</button>
                        <button type="button" data-action="submit" className="quote-wizard__btn quote-wizard__btn--primary">Submit</button>
                      </div>
                    </div>
                    <div data-panel="5" className="quote-wizard__step">
                      <div className="quote-wizard__success">
                        <div className="quote-wizard__success-icon">
                          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5"></path></svg>
                        </div>
                        <h3 className="quote-wizard__success-heading">Thank you!</h3>
                        <p className="quote-wizard__success-body">Oscar will review your project and reach out within 24 hours with a free, no-obligation estimate.</p>
                        <a href="tel:6028268259" className="quote-wizard__success-cta">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"></path></svg>
                          <span>Or call now: (602) 826-8259</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="mobile-sticky-cta">
          <a href="tel:6028268259">
            <div className="full-width btn btn-accent btn-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span>Call Oscar Now</span>
            </div>
          </a>
        </div>
        <dialog id="thankYouModal" className="thank-you-dialog">
          <button id="closeThankYou" aria-label="Close" className="thank-you-dialog__close">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18M6 6l12 12"></path>
            </svg>
          </button>
          <div className="thank-you-dialog__icon">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5"></path></svg>
          </div>
          <h2 className="thank-you-dialog__title">Thank you for choosing us!</h2>
          <p className="thank-you-dialog__body">Thanks for selecting Oscar&apos;s Foam Roofing for your project. We&apos;ll be in touch within 24 hours with your free estimate.</p>
          <a href="tel:6028268259" className="thank-you-dialog__cta">Or call now: (602) 826-8259</a>
        </dialog>
        <dialog id="estimateModal" className="estimate-dialog">
          <div className="dialog-header">
            <h2 className="section-title">Free Roof Estimate</h2>
            <button id="closeModal" className="close-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <form
            action="#"
            method="POST"
            data-form-id="afea4e63-edce-496c-b8f9-f952e11ca385"
            className="lead-form"
          >
            <div className="form-grid">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Full Name"
                  required="true"
                  id="thq_textinput_s1n1"
                  name="textinput"
                  data-form-field-id="thq_textinput_s1n1"
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  required="true"
                  id="thq_textinput_Beaw"
                  name="textinput"
                  data-form-field-id="thq_textinput_Beaw"
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Email"
                  required="true"
                  id="thq_textinput_L8FP"
                  name="textinput"
                  data-form-field-id="thq_textinput_L8FP"
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <select
                  required="true"
                  id="thq_select_GGEh"
                  name="select"
                  data-form-field-id="thq_select_GGEh"
                  className="form-input"
                >
                  <option value="true">Property Type</option>
                  <option>Residential</option>
                  <option>Commercial</option>
                </select>
              </div>
              <div className="form-group full-width">
                <textarea
                  placeholder="Details..."
                  id="thq_textarea_wFMR"
                  name="textarea"
                  data-form-field-id="thq_textarea_wFMR"
                  className="form-input form-textarea"
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              id="thq_button_2w8j"
              name="button"
              data-form-field-id="thq_button_2w8j"
              className="full-width btn btn-accent btn-lg"
            >
              Send Request
            </button>
          </form>
        </dialog>
        <div className="home-container3">
          <div className="home-container4">
            <Script
              html={`<script defer data-name="oscars-foam-logic">
(function(){
  // Modal Functionality
  const modal = document.getElementById("estimateModal")
  const openHeroBtn = document.getElementById("openHeroForm")
  const closeBtn = document.getElementById("closeModal")

  if (modal && openHeroBtn) {
    openHeroBtn.addEventListener("click", () => {
      modal.showModal()
    })
  }

  if (modal && closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.close()
    })
  }

  // Close modal on backdrop click
  if (modal) {
    modal.addEventListener("click", (e) => {
      const dialogDimensions = modal.getBoundingClientRect()
      if (e.clientX < dialogDimensions.left || e.clientX > dialogDimensions.right || e.clientY < dialogDimensions.top || e.clientY > dialogDimensions.bottom) {
        modal.close()
      }
    })
  }

  // Simple Scroll Reveal Effect
  const revealElements = document.querySelectorAll(".service-card, .benefit-item, .value-prop")

  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85

    revealElements.forEach((el) => {
      const elTop = el.getBoundingClientRect().top
      if (elTop < triggerBottom) {
        el.style.opacity = "1"
        el.style.transform = "translateY(0)"
      }
    })
  }

  // Initial styles for reveal
  revealElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "all 0.6s ease-out"
  })

  window.addEventListener("scroll", revealOnScroll)
  revealOnScroll() // Run once on load

  // Form Submission Visual Feedback (Non-functional)
  const forms = document.querySelectorAll(".lead-form")
  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      // Browsers will handle native validation
      // This is just a UX enhancer
      const btn = form.querySelector('button[type="submit"]')
      const originalText = btn.innerText

      btn.innerText = "Sending Request..."
      btn.disabled = true

      // We don't preventDefault as per rules, allowing native submission
      // But we can reset for visual simulation if needed
      setTimeout(() => {
        btn.innerText = "Request Sent!"
        btn.style.backgroundColor = "#2ecc71"
      }, 1000)
    })
  })

  // Quote Wizard Logic
  const wizard = document.getElementById("quoteWizard")
  const thankYouModal = document.getElementById("thankYouModal")
  const closeThankYou = document.getElementById("closeThankYou")

  if (wizard) {
    let currentStep = 1
    const totalSteps = 5
    const state = { service: null, sqft: "", details: "", timeline: null, fullName: "", phone: "", email: "" }

    const indicators = wizard.querySelectorAll(".quote-wizard__step-indicator")
    const connectors = wizard.querySelectorAll(".quote-wizard__connector")
    const panels = wizard.querySelectorAll(".quote-wizard__step[data-panel]")

    const setStep = (n) => {
      currentStep = Math.max(1, Math.min(totalSteps, n))
      wizard.dataset.currentStep = String(currentStep)
      panels.forEach((p) => {
        p.classList.toggle("is-active", Number(p.dataset.panel) === currentStep)
      })
      indicators.forEach((ind) => {
        const s = Number(ind.dataset.step)
        ind.classList.toggle("is-active", s === currentStep)
        ind.classList.toggle("is-complete", s < currentStep)
      })
      connectors.forEach((c, i) => {
        c.classList.toggle("is-complete", i + 1 < currentStep)
      })
    }

    const updateContinueState = () => {
      const step1Btn = wizard.querySelector('[data-panel="1"] [data-action="next"]')
      if (step1Btn) step1Btn.disabled = !state.service
      const step3Btn = wizard.querySelector('[data-panel="3"] [data-action="next"]')
      if (step3Btn) step3Btn.disabled = !state.timeline
    }

    // Service choice (single-select)
    wizard.querySelectorAll('[data-field="service"]').forEach((btn) => {
      btn.addEventListener("click", () => {
        wizard.querySelectorAll('[data-field="service"]').forEach((b) => b.classList.remove("is-selected"))
        btn.classList.add("is-selected")
        state.service = btn.dataset.value
        updateContinueState()
      })
    })

    // Timeline choice (single-select)
    wizard.querySelectorAll('[data-field="timeline"]').forEach((btn) => {
      btn.addEventListener("click", () => {
        wizard.querySelectorAll('[data-field="timeline"]').forEach((b) => b.classList.remove("is-selected"))
        btn.classList.add("is-selected")
        state.timeline = btn.dataset.value
        updateContinueState()
      })
    })

    // Sqft input
    const sqftInput = document.getElementById("wizardSqft")
    if (sqftInput) {
      sqftInput.addEventListener("input", () => {
        state.sqft = sqftInput.value
      })
    }
    const dontKnow = document.getElementById("wizardDontKnow")
    if (dontKnow && sqftInput) {
      dontKnow.addEventListener("click", () => {
        state.sqft = "I don't know"
        sqftInput.value = ""
        sqftInput.placeholder = "I don't know"
        dontKnow.classList.add("is-selected")
      })
      sqftInput.addEventListener("focus", () => {
        dontKnow.classList.remove("is-selected")
        sqftInput.placeholder = "e.g. 2000"
      })
    }
    // Details textarea
    const detailsArea = wizard.querySelector('[data-field="details"]')
    if (detailsArea) {
      detailsArea.addEventListener("input", () => {
        state.details = detailsArea.value
      })
    }

    // Contact field bindings
    ;["fullName", "phone", "email"].forEach((field) => {
      const el = wizard.querySelector('[data-field="' + field + '"]')
      if (el) {
        el.addEventListener("input", () => {
          state[field] = el.value
          el.classList.remove("has-error")
          const errorEl = wizard.querySelector('[data-role="contact-error"]')
          if (errorEl) errorEl.hidden = true
        })
      }
    })

    // Action buttons
    wizard.addEventListener("click", (e) => {
      const target = e.target.closest("[data-action]")
      if (!target) return
      const action = target.dataset.action
      if (action === "next") {
        if (currentStep === 1 && !state.service) return
        if (currentStep === 3 && !state.timeline) return
        setStep(currentStep + 1)
      } else if (action === "back") {
        setStep(currentStep - 1)
      } else if (action === "submit") {
        // Validate contact: name required, email or phone required
        const nameEl = document.getElementById("wizardName")
        const phoneEl = document.getElementById("wizardPhone")
        const emailEl = document.getElementById("wizardEmail")
        const errorEl = wizard.querySelector('[data-role="contact-error"]')
        let valid = true
        if (!state.fullName.trim()) {
          if (nameEl) nameEl.classList.add("has-error")
          valid = false
        }
        if (!state.phone.trim() && !state.email.trim()) {
          if (phoneEl) phoneEl.classList.add("has-error")
          if (emailEl) emailEl.classList.add("has-error")
          if (errorEl) errorEl.hidden = false
          valid = false
        }
        if (!valid) return
        setStep(5)
        if (thankYouModal && typeof thankYouModal.showModal === "function") {
          thankYouModal.showModal()
        }
      }
    })
  }

  if (thankYouModal && closeThankYou) {
    closeThankYou.addEventListener("click", () => thankYouModal.close())
    thankYouModal.addEventListener("click", (e) => {
      const r = thankYouModal.getBoundingClientRect()
      if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) {
        thankYouModal.close()
      }
    })
  }
})()
</script>`}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            min-height: 100vh;
          }
          .home-container3 {
            display: none;
          }
          .home-container4 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Home
