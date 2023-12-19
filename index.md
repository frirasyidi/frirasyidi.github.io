---
layout: page
title: Home
permalink: /
---

# Hi! my name is <span class='jump-effect'>Fri</span>.

<big>I am a problem solver whose passion is to build product and services to learn and improve people's life.</big>

<big>To make sure the solution is useful, I have worked in various fields---from doing <img src='/assets/icons/research.svg' alt='' class="icon"/>&nbsp;*research*, <img src='/assets/icons/design.svg' alt='' class="icon"/>&nbsp;*design*, <img src='/assets/icons/code.svg' alt='' class="icon"/>&nbsp;*develop*, <img src='/assets/icons/test.svg' alt='' class="icon"/>&nbsp;*test*, to <img src='/assets/icons/track.svg' alt='' class="icon"/>&nbsp;*management*; utilizing an <img src='/assets/icons/iterative.svg' alt='' class="icon"/>&nbsp;*iterative* and <img src='/assets/icons/human-centric.svg' alt='' class="icon"/>&nbsp;*human centric* approach.</big>

<big>If you're interested to chat, feel free to connect with me through my <a href="https://github.com/{{ site.github_username }}"><img src="/assets/social-media/github.svg" alt="Github logo" role="img" class="icon"/>&nbsp;Github</a>, <a href="https://linkedin.com/in/{{ site.linkedin_username }}"><img src="/assets/social-media/linkedin.svg" alt="Linkedin logo" role="img" class="icon"/>&nbsp;Linkedin</a>, or <a href="mailto:{{ site.email }}"><img src="/assets/social-media/email.svg" alt="Email icon" role="img" class="icon"/>&nbsp;email</a>.</big>

## I also <img src='/assets/icons/writings.svg' alt='' class="icon"/>&nbsp;write, mostly around <img src='/assets/icons/software.svg' alt='' class="icon"/>&nbsp;software development

I hope you find something interesting!

<table style="width:100%;" class='with-row-counter'>
  <tbody>
    {% assign writings_posts = site.posts | where: "categories", "writings" %}
    {% for post in writings_posts limit:5 %}
      <tr>
        <td><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y&nbsp;%b&nbsp;%d" }}</time></td>
        <td style="width:100%;"><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></td>
      </tr>
    {% endfor %}
  </tbody>
</table>

[See more <img src='/assets/icons/writings.svg' alt='' class="icon"/>&nbsp;writings →](/writings)