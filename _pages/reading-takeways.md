---
layout: page
title: Reading Takeaways
permalink: /reading-takeaways/
---

{% comment %} Displays posts {% endcomment %}

<h1><img src='/assets/icons/reading-takeaways.svg' alt='' class="icon"/>&nbsp;Reading Takeaways</h1>

This is my takeaways, not a summary. This means, it's not a one-to-one
comparison to the book. I have rephrased the contents and added some related
concepts/knowledges.

My goal here is to help other learners in understanding the informations
provided in the book. Please read the original source if you'd like to read the
actual passage or terms used by the author.

Feel free to
[send me feedback](mailto:fri%40frirasyidi.com?subject=Feedback%20on%20your%20George%20Leonard%27s%20Mastery%20Takeaways)
on the takeaways.

<table class='mobile-friendly'>
  <tbody>
    {% for post in site.posts %}
      {% if post.categories contains 'reading-takeaways' %}
        <tr>
          <td><strong><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y&nbsp;%b&nbsp;%d" }}</time></strong></td>
          <td><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a><br/>{{ post.description }}</td>
        </tr>
      {% endif %}
    {% endfor %}
  </tbody>
</table>
