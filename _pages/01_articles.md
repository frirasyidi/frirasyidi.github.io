---
layout: page
title: Articles
permalink: /articles/
date:   2016-11-20
update: 2016-11-20
exclude: true
---
# Articles

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
