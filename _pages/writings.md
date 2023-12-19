---
layout: page
title: Writings
permalink: /writings/
---

{% comment %} Displays posts {% endcomment %}

  <h1><img src='/assets/icons/writings.svg' alt='' class="icon"/>&nbsp;Writings</h1>
  <p>
    These writings contains learnings, insights, and thoughts that I found interesting---mostly around design and development. I hope you find something interesting here as well!
  </p>
  <table>
    <tbody>
      {% for post in site.posts %}
        {% if post.categories contains 'writings' %}
          <tr>
            <td><time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%Y&nbsp;%b&nbsp;%d" }}</time></td>
            <td><a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></td>
          </tr>
        {% endif %}
      {% endfor %}
    </tbody>
  </table>
