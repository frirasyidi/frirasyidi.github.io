---
layout: page
title:  Dive Logs
permalink: /divelogs/
date:   2017-01-02
exclude: true
---
# Dive Logs

<div class="divelogs">
  {% for post in site.categories.divelogs %}
    {% if post.url %}
      <h2>Dive #{{ post.divenum }}: {{ post.divespot }}</h2>
      <table>
        <tr>
          <td>Location</td>
          <td>{{ post.diveloc }}, {{ post.divecountry }}</td>
        </tr>
        <tr>
          <td>Date</td>
          <td><time>{{ post.date | date: "%b %-d, %Y" }}</time></td>
        </tr>
        <tr>
          <td>Duration</td>
          <td>{{ post.divedur }}min</td>
        </tr>
        <tr>
          <td>Max Depth</td>
          <td>{{ post.divedepth }}m</td>
        </tr>
      </table>
      {{ post.content }}
    {% endif %}
  {% endfor %}
</div>
