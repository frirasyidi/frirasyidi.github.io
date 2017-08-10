---
layout: page
title: Writings
permalink: /writings/
date:   2016-11-20
update: 2017-07-01
exclude: true
---
# Writings

## Product Design
<ul>
  {% for post in site.categories.design %}
    {% if post.url %}
      <li>
				<a href="{{ post.url }}">{{ post.title }}</a>—&nbsp;<time>{{ post.date | date: "%b %-d, %Y" }}</time>
			</li>
    {% endif %}
  {% endfor %}
</ul>

## Logs
<ul>
  {% for post in site.categories.blog %}
    {% if post.url %}
      <li>
				<a href="{{ post.url }}">{{ post.title }}</a>—&nbsp;<time>{{ post.date | date: "%b %-d, %Y" }}</time>
			</li>
    {% endif %}
  {% endfor %}
</ul>

<!-- Subscribe [via RSS]({{ "/feed.xml" | prepend: site.baseurl }}) -->
