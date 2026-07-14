"use client";

import { PageShell } from "../../components/PageShell";
import { InnerHero } from "../../components/InnerHero";
import { InnerSubNav } from "../../components/InnerSubNav";
import { ArrowIcon } from "../../components/icons";
import { imageUrls, vietnamOffice } from "../../lib/site";

export default function ContactUsPage() {
  return (
    <PageShell>
      <InnerHero
        title="Contact Us"
        image={imageUrls.bannerContact}
        mobileImage={imageUrls.bannerContactMobile}
        breadcrumb={[{ label: "Contact Us" }]}
      />

      <InnerSubNav
        items={[
          { label: "Contact Information", href: "#contact-information" },
          { label: "Contact Form", href: "#contact-form" },
          { label: "Office Locations", href: "#office-locations" },
        ]}
      />

      <section className="contact-info-section" id="contact-information" data-section="contact-info">
        <div className="contact-info-grid" data-reveal>
          <div>
            <h3>{vietnamOffice.label}</h3>
            <p>
              {vietnamOffice.company}
              <br />
              {vietnamOffice.address.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </div>
          <div>
            <img src={imageUrls.bannerGlobal} alt="Thermax Vietnam regional office" />
          </div>
        </div>
        <div className="contact-info-grid contact-customer-support" id="office-locations" data-reveal>
          <h3>For customer support &amp; general inquiries</h3>
          <div>
            <a href={vietnamOffice.phoneHref}>{vietnamOffice.phone}</a>
            {" "}
            <a href={vietnamOffice.emailHref}>{vietnamOffice.email}</a>
          </div>
        </div>
      </section>

      <section className="contact-form-section" id="contact-form" data-section="contact-form">
        <div className="contact-form-grid" data-reveal>
          <div>
            <h3>Get in Touch</h3>
            <p>
              If you have a query regarding our products, solutions, or services, please fill out the form below. Our
              team will review your request and connect with you at the earliest.
            </p>
          </div>
          <form
            className="contact-form"
            onSubmit={async (event) => {
              event.preventDefault();
              const form = new FormData(event.currentTarget);
              const response = await fetch("/api/contact-requests", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  fullName: `${form.get("firstName") || ""} ${form.get("lastName") || ""}`.trim(),
                  email: form.get("email"),
                  phone: form.get("phone"),
                  country: form.get("country"),
                  industry: form.get("industry"),
                  message: form.get("message"),
                  source: "contact-page",
                }),
              });
              alert(response.ok ? "Thanks! We will get in touch shortly." : "Please try again later.");
              if (response.ok) event.currentTarget.reset();
            }}
          >
            <input name="firstName" placeholder="First name*" required />
            <input name="lastName" placeholder="Last name*" required />
            <input name="email" placeholder="Business email*" type="email" required />
            <input name="phone" placeholder="Phone number*" type="tel" required />
            <select name="country" className="full" defaultValue="">
              <option value="" disabled>
                Country*
              </option>
              <option>India</option>
              <option>United States</option>
              <option>Vietnam</option>
              <option>Indonesia</option>
              <option>Thailand</option>
              <option>Other</option>
            </select>
            <select name="industry" className="full" defaultValue="">
              <option value="" disabled>
                Select industry
              </option>
              <option>Power Generation</option>
              <option>Chemicals</option>
              <option>Cement</option>
              <option>Steel</option>
              <option>Pharma</option>
            </select>
            <textarea name="message" placeholder="How can Thermax help?" />
            <button type="submit">
              Submit enquiry <ArrowIcon />
            </button>
          </form>
        </div>
      </section>
    </PageShell>
  );
}
