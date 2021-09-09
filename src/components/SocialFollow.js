import React from "react";
import "./SocialFollow.css";

function SocialFollow() {
  return (
    <section id="contact" class="contact-section">
      <div class="contact-section-header">
        <h2>Let's work together...</h2>
        <p>How do you take your coffee?</p>
      </div>
      <div class="contact-links">
        <a
          id="fb"
          href="https://www.facebook.com/chandani.gurung.9022/"
          target="_blank"
          class="btn contact-details"
        >
          <i class="fab fa-facebook"></i>
        </a>
        <a
          id="gh"
          href="https://github.com/Chandani-Gurung"
          target="_blank"
          class="btn contact-details"
        >
          <i class="fab fa-github"></i>
        </a>
        <a
        id="ig"
          href="https://www.instagram.com/chandanigurung_/?hl=en"
          target="_blank"
          class="btn contact-details"
        >
          <i class="fab fa-instagram"></i>
        </a>
        <a
        id="em"
          href="mailto:gurungchandani13@gmail.com"
          class="btn contact-details"
        >
          <i class="fas fa-at"></i>
        </a>
        <a id="ph" href="tel:985-222-9712" class="btn contact-details">
          <i class="fas fa-mobile-alt"></i>
        </a>
      </div>
    </section>
  );
}

export default SocialFollow;
