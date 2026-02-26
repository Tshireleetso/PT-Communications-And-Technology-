<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer" id="contact">
    <div class="container footer-grid">
      <div class="contact-card">
        <h2>Get in Touch</h2>
        <p>Tell us what you need - we'll reply with next steps and a quote.</p>

        <form action="#" method="post" class="form">
          <div class="row">
            <input type="text" name="name" placeholder="Name" />
            <input type="email" name="email" placeholder="Email" />
          </div>
          <input type="text" name="subject" placeholder="Subject" />
          <textarea name="message" rows="5" placeholder="Message"></textarea>
          <div class="row row-actions">
            <button type="submit" class="btn btn-primary">Send Message</button>
            <button type="reset" class="btn btn-ghost">Reset</button>
          </div>
        </form>
      </div>

      <div class="contact-card">
        <div class="footer-brand">
          <span class="brand-mark big">PT</span>
          <div>
            <h3>PT Communications</h3>
            <p>Communications &amp; Technology</p>
          </div>
        </div>

        <h3 class="q">Have Questions?</h3>
        <ul class="meta">
          <li>&#128382; +27 XX XXX XXXX</li>
          <li>&#9993; info@ptcommunications.co.za</li>
          <li>&#128205; South Africa - Remote-friendly</li>
        </ul>

        <div class="footer-social" aria-label="Social links">
          <a href="#" aria-label="Facebook"><img src="/images/icons/facebook.svg" alt="" /></a>
          <a href="#" aria-label="Instagram"><img src="/images/icons/instagram.svg" alt="" /></a>
          <a href="#" aria-label="LinkedIn"><img src="/images/icons/linkedin.svg" alt="" /></a>
        </div>
      </div>
    </div>

    <div class="container copyright">
      &copy; {{ year }} PT Communications &amp; Technology. All rights reserved.
    </div>
  </footer>
</template>

