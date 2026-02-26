<script setup>
const services = [
  {
    title: 'Social Media Management',
    body: 'Boost your online presence and engage your audience with content, campaigns, and reporting.',
    image: '/images/440716388-15555796.jpg',
    tag: 'Expanding Local Influence',
    cta: 'Learn More'
  },
  {
    title: 'Website Solutions',
    body: 'Modern, credible websites and landing pages built to convert visitors into customers.',
    image: '/images/39559.jpg',
    tag: 'Boosting Engagements',
    cta: 'View Case Study'
  },
  {
    title: 'SEO & Google Presence',
    body: 'Improve search visibility with Google Business setup, on-page SEO, and practical optimization.',
    image: '/images/19.jpg',
    tag: 'Google SEO',
    cta: 'View Case Study'
  },
  {
    title: 'Video & Graphic Design',
    body: 'Posters, edits, and branded media assets to keep your online content consistent and polished.',
    image: '/images/7213436.jpg',
    tag: 'Building Online Presence',
    cta: 'View Case Study'
  }
]

const resources = [
  { icon: '&#128240;', title: 'Helpful Articles', body: 'Tips, strategies, and freelance career advice.' },
  { icon: '&#128218;', title: 'Free eBooks & Guides', body: 'Download resources packed with insights to level up your freelance journey.' },
  { icon: '&#128736;', title: 'Reliable Support', body: 'Helpful links, templates, and community recommendations.' },
  { icon: '&#9889;', title: 'Innovate & Evolve', body: 'Modern tools and learning resources to stay competitive.' }
]

const differences = [
  {
    title: 'Expert Team',
    body: 'Communication + tech experience across branding, web, and digital campaigns.'
  },
  {
    title: 'Proven Results',
    body: 'Clear deliverables, measurable growth, and consistent reporting.'
  },
  {
    title: 'Personalized Approach',
    body: 'We tailor every plan to your goals, budget, and audience.'
  },
  {
    title: 'Full-Spectrum',
    body: 'From PR to websites to media design - all in one place.'
  }
]
</script>

<template>
  <section class="hero">
    <div class="container hero-grid">
      <div class="hero-copy">
        <h1>Streamline Your<br />Digital Communications &amp; Empower<br />Your Business</h1>
        <p>
          Professional solutions to elevate your brand, improve your online presence, and reach your audience for impactful growth.
        </p>

        <div class="hero-actions">
          <a class="btn btn-primary" href="#services">Get Started</a>
          <a class="btn btn-ghost" href="#contact"><span class="btn-play">&#9654;</span> Portfolio</a>
        </div>

        <div class="hero-social" aria-label="Social links">
          <a href="#" aria-label="Facebook"><img src="/images/icons/facebook.svg" alt="" /></a>
          <a href="#" aria-label="Instagram"><img src="/images/icons/instagram.svg" alt="" /></a>
          <a href="#" aria-label="LinkedIn"><img src="/images/icons/linkedin.svg" alt="" /></a>
          <a href="#" aria-label="Twitter"><img src="/images/icons/twitter.svg" alt="" /></a>
        </div>
      </div>

      <div class="hero-visual" aria-hidden="true">
        <div class="float-icons">
          <span class="fi fi-fb"></span>
          <span class="fi fi-yt"></span>
          <span class="fi fi-ig"></span>
          <span class="fi fi-tw"></span>
          <span class="fi fi-in"></span>
        </div>
        <img class="hero-person" src="/images/13F81A6E-D43E-4472-845B-8E18C0DD1088_(1).png" alt="" />
      </div>
    </div>
  </section>

  <section class="section" id="services">
    <div class="container">
      <h2 class="section-title" id="WhatWeOffer">Our Comprehensive Services</h2>

      <div class="cards-4">
        <article class="svc-card" v-for="item in services" :key="item.title">
          <h3>{{ item.title }}</h3>
          <p>{{ item.body }}</p>
          <div class="svc-img">
            <img :src="item.image" :alt="item.title" />
          </div>
          <div class="svc-footer">
            <span>{{ item.tag }}</span>
            <a class="mini-btn" href="#contact">{{ item.cta }} &rarr;</a>
          </div>
        </article>
      </div>
    </div>
  </section>

  <section class="section success" id="success">
    <div class="container success-grid">
      <div class="success-copy">
        <h2 id="Empower">Success Stories <span class="sparkle">&#10022;</span></h2>
        <p>
          Empowering freelance careers by sharing valuable resources and guidance to help freelancers succeed and grow in their business ventures.
        </p>

        <div class="tiles">
          <div class="tile" v-for="item in resources" :key="item.title">
            <div class="tile-icon" v-html="item.icon"></div>
            <div>
              <h4>{{ item.title }}</h4>
              <p>{{ item.body }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="success-visual" aria-hidden="true"></div>
    </div>
  </section>

  <section class="section" id="different">
    <div class="container">
      <h2 class="section-title">What Makes Us <span class="accent">Different</span></h2>

      <div class="cards-4 compact">
        <article class="diff-card" v-for="item in differences" :key="item.title">
          <h3>{{ item.title }}</h3>
          <p>{{ item.body }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

