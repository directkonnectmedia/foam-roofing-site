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
            <video
              autoPlay="true"
              muted="true"
              loop="true"
              playsInline="true"
              src="https://videos.pexels.com/video-files/14134278/14134278-hd_1920_1080_25fps.mp4"
              className="hero-bg-video"
            ></video>
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
              <div className="about-text-content">
                <h2 className="section-title">
                  Built on Decades of Desert Expertise
                </h2>
                <div className="section-content">
                  <p>
                    Oscar built this company on honest work, straight pricing,
                    and roofs that actually hold up to Arizona heat.
                    Family-owned and operated, serving homeowners and businesses
                    across the state since our founding.
                  </p>
                  <p>
                    We emphasize transparency, craftsmanship, and the climate
                    expertise that only comes from decades in the desert. When
                    you choose Oscar&apos;s, you&apos;re choosing a legacy of
                    protection that thrives in 115°F summers and monsoon rains
                    alike.
                  </p>
                </div>
              </div>
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
                    src="https://images.pexels.com/photos/32387194/pexels-photo-32387194.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
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
                  <p className="section-content">
                    Monolithic membrane provides R-6.5 insulation per inch and
                    20–40% cooling cost reduction.
                  </p>
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
                  <p className="section-content">
                    SRP/APS rebate eligible systems with a 30–50+ year lifespan
                    through periodic maintenance.
                  </p>
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
                  <p className="section-content">
                    Extend your roof&apos;s life with reflective white topcoats
                    and professional inspections.
                  </p>
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
              <img
                src="https://images.pexels.com/photos/8312917/pexels-photo-8312917.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                alt="Foam Roof Installation"
              />
            </div>
            <div className="gallery-item">
              <img
                src="https://images.pexels.com/photos/8853526/pexels-photo-8853526.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                alt="Commercial Project"
              />
            </div>
            <div className="gallery-item">
              <img
                src="https://images.pexels.com/photos/8782730/pexels-photo-8782730.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                alt="Residential White Roof"
              />
            </div>
            <div className="gallery-item">
              <img
                src="https://images.pexels.com/photos/32387194/pexels-photo-32387194.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                alt="Desert Home Roofing"
              />
            </div>
            <div className="gallery-item">
              <img
                src="https://images.pexels.com/photos/9800001/pexels-photo-9800001.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                alt="Energy Efficient Roof"
              />
            </div>
            <div className="gallery-item">
              <img
                src="https://images.pexels.com/photos/6961112/pexels-photo-6961112.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                alt="Rooftop Inspection"
              />
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
                <form
                  action="#"
                  method="POST"
                  data-form-id="788f501b-7b3b-4e6f-9b30-a248453c3f87"
                  className="lead-form"
                >
                  <div className="form-grid">
                    <div className="form-group">
                      <input
                        type="text"
                        name="true"
                        placeholder="Full Name"
                        required="true"
                        id="thq_true_W7Jg"
                        data-form-field-id="thq_true_W7Jg"
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        required="true"
                        id="thq_phone_8n8A"
                        data-form-field-id="thq_phone_8n8A"
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        required="true"
                        id="thq_email_yJMN"
                        data-form-field-id="thq_email_yJMN"
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <select
                        name="property_type"
                        required="true"
                        id="thq_property_type_jty_"
                        data-form-field-id="thq_property_type_jty_"
                        className="form-input"
                      >
                        <option value="true" disabled="true" selected="true">
                          Property Type
                        </option>
                        <option value="residential">Residential</option>
                        <option value="commercial">Commercial</option>
                      </select>
                    </div>
                    <div className="form-group full-width">
                      <textarea
                        name="message"
                        placeholder="Tell us about your roof project..."
                        required="true"
                        id="thq_message_BbuY"
                        data-form-field-id="thq_message_BbuY"
                        className="form-input form-textarea"
                      ></textarea>
                    </div>
                  </div>
                  <button
                    type="submit"
                    id="thq_button_gsWT"
                    name="button"
                    data-form-field-id="thq_button_gsWT"
                    className="full-width btn btn-xl btn-accent"
                  >
                    Request Free Estimate
                  </button>
                  <p className="form-disclaimer">
                    Free Inspections • Free Estimates • No Obligation
                  </p>
                </form>
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
