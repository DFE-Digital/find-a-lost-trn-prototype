---
homepage: true
layout: product
includeInBreadcrumbs: true
description: All you need to prototype anything from simple static pages to complex, data-driven transactions.
image:
  src: /assets/homepage-illustration.svg
  alt: The Eleventy mascot floating above a laptop.
startButton:
  href: /get-started
eleventyComputed:
  title: "{{ pkg.description }}"
---
<div class="govuk-grid-row">
{% for item in collections["homepage"] %}
  <section class="govuk-grid-column-one-third-from-desktop govuk-!-margin-bottom-8">
    <h2 class="govuk-heading-m govuk-!-font-size-27">{{ item.data.title }}</h2>
    <p class="govuk-body">{{ item.data.description | markdown("inline") }}</p>
    <p class="govuk-body"><a class="govuk-link govuk-!-font-weight-bold" href="{{ item.url | url }}">{{ item.data.action }}</a></p>
  </section>
{% endfor %}
  <section class="govuk-grid-column-full">
    <hr class="govuk-section-break govuk-section-break--visible govuk-section-break--xl govuk-!-margin-top-0">
    <h2 class="govuk-heading-m govuk-!-font-size-27">Contribute</h2>
    <p class="govuk-body">The project repository is public and we welcome contributions from anyone.</p>
    <p class="govuk-body"><a class="govuk-link govuk-!-font-weight-bold" href="{{ pkg.repository.url | replace(".git", "") }}">View this project on GitHub</a></p>
  </section>
</div>
