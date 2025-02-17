---
layout: page
title: Home
permalink: /
---

# Hi! my name is <span class='jump-effect'>Fri</span>.

<big>I am a pragmatic problem solver whose passion is to build products and
services to learn and improve people's lives.</big>

<big>To make sure the solution is useful, I do various things:
<img src='/assets/icons/research.svg' alt='' class="icon"/>&nbsp;_research_,
<img src='/assets/icons/design.svg' alt='' class="icon"/>&nbsp;_design_,
<img src='/assets/icons/code.svg' alt='' class="icon"/>&nbsp;_develop_,
<img src='/assets/icons/test.svg' alt='' class="icon"/>&nbsp;_test_,
<img src='/assets/icons/track.svg' alt='' class="icon"/>&nbsp;_track_, and
<img src='/assets/icons/lead.svg' alt='' class="icon"/>&nbsp;_lead_; utilizing
an <img src='/assets/icons/iterative.svg' alt='' class="icon"/>&nbsp;_iterative_
and <img src='/assets/icons/human-centric.svg' alt='' class="icon"/>&nbsp;_human
centric_ approach.</big>

<big>If you're interested, feel free to connect with me through my
<a href="https://github.com/{{ site.github_username }}"><img src="/assets/social-media/github.svg" alt="Github logo" role="img" class="icon"/>&nbsp;Github</a>,
<a href="https://linkedin.com/in/{{ site.linkedin_username }}"><img src="/assets/social-media/linkedin.svg" alt="Linkedin logo" role="img" class="icon"/>&nbsp;Linkedin</a>,
or
<a href="mailto:{{ site.email }}"><img src="/assets/social-media/email.svg" alt="Email icon" role="img" class="icon"/>&nbsp;email</a>.</big>

## I also <img src='/assets/icons/writings.svg' alt='' class="icon"/>&nbsp;write, mostly around <img src='/assets/icons/software.svg' alt='' class="icon"/>&nbsp;software development

<!-- Writings section -->

### Thoughts and ideas

I hope you find something interesting!

<table style="width:100%;" class='with-row-counter mobile-friendly'>
  <tbody>
    {% assign writings_posts = site.posts | where: "categories", "writings" %}
    {% for post in writings_posts limit:5 %}
      <tr>
        <td><strong><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y&nbsp;%b&nbsp;%d" }}</time></strong></td>
        <td style="width:100%;"><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a><br/>{{ post.description }}</td>
      </tr>
    {% endfor %}
  </tbody>
</table>

{% assign writings_posts = site.posts | where: "categories", "writings" %} {% if
writings_posts.size > 5 %}
[See more <img src='/assets/icons/writings.svg' alt='' class="icon"/>&nbsp;writings →](/writings)
{% endif %}

<!-- Reading Takeaways section -->

### Reading takeaways

Keep in mind that _these are not book summaries_. My goal is to help other
learners to gain what I get from, my understanding of, and my views on the
informations provided in the original source.

<table style="width:100%;" class='with-row-counter mobile-friendly'>
  <tbody>
    {% assign writings_posts = site.posts | where: "categories", "reading-takeaways" %}
    {% for post in writings_posts limit:5 %}
      <tr>
        <td><strong><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y&nbsp;%b&nbsp;%d" }}</time></strong></td>
        <td style="width:100%;"><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a><br/>{{ post.description }}</td>
      </tr>
    {% endfor %}
  </tbody>
</table>

{% assign writings_posts = site.posts | where: "categories", "reading-takeaways"
%} {% if writings_posts.size > 5 %}
[See more <img src='/assets/icons/reading-takeaways.svg' alt='' class="icon"/>&nbsp;reading takeaways →](/reading-takeaways)
{% endif %}
