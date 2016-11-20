---
layout: post
title:  Hello, World!
date:   2016-11-20
update: 2016-11-21
categories: blog
---
Last month I’ve been thinking to updating my site.

My old site works just fine for me: it tells people my name, what I do, how to contact me, and showcase some of my works. But I’ve been wanting to improve my writing skills—I suck at it real hard—which means I need to start writing stuffs and post it somewhere for people to read and get feedback from it. So, I decided to add blogging capability to this site.

<abbr title="For Your Information">FYI</abbr>, I’m a huge fan of [static sites][wiki-staticSite]. It has incredible performance ([Smashing Magazine][smashing]: even with a highly optimized dynamic website, the static version () is more than six times as fast on average!), very little needs of maintenance, and immune to exploits. But nothing is perfect—yeah, there’s always a catch—and it’s the exact reason why dynamic sites was born into existence: *it’s hard to manage a static sites with multiple pages*. That’s why it’s not ideal for blogging sites.

But then I remember something…

When my client asked me to create their budget site, what I did was buying a Wordpress theme for the interface design. I’m more of a <abbr title="User Experience">UX</abbr> designer so I care more about the content than the looks; buying Wordpress themes has never been an issue for me as long as it serve the purpose. But I did thought of using my own interface design for sites I built in the future, so I tried to learn how to make Wordpress themes. But it was too complex—I know HTML and CSS and can read Java Script; the learning curve was too steep.

Around a year ago, I looked for another alternative that can be made with pretty much only HTML and CSS which is *static sites*. Yes, I’ve told you that static sites are not ideal for blogging sites due to it’s complexity to manage multiple pages; but that’s the only reason of it. Looking at how excellent static sites performances are, I knew that some geeky guys must have thought of using it as a blogging platform. I mean, if I’ve thought about it, someone must have too, right? And I was right! They’re called “[static sites generator][smashing]”.

After doing research, I stumbled upon [Jekyll][jekyll], a static site generator made by [Tom Preston-Werner][tom]. Jekyll is great because it harnesses the power of markdown and has Sass built in. That makes writing HTML and CSS much easier and more efficient. Not only that, it is also highly compatible with [GitHub pages][github,io]; meaning I can work from my local and simply push it once I’m satisfied; and *it offers free hosting*. Needless to say, I’m 100% bought.

So, here it is. My updated site is hand made using [Jekyll][jekyll] and [GitHub Pages][github.io].

If you’re interested on building your own site the same way I did, [here’s a very good written guide by Tania Rascia][tania] that I used to learn and start with. Also, feel free to ask questions or get in touch with me [here][contact].

### Notes

For those who are wondering, I use [Formingo][formingo]’s service to run my contact form. I’ve tried some other free contact form services like [Formspree][formspree] and [FormKeep][formkeep], but I like Formingo better for it’s ability to redirect, directly reply to, and define the email’s subject.

### Links to more information

* [Why Static Website Generators Are The Next Big Thing][smashing] by [Mathias Biilmann Christensen](http://www.twitter.com/biilmann). If you’re not convinced yet about static sites, go ahead and read this.
* [Github Pages][github.io]. Step by step guide to setup Github Pages.
* [Make a Static Website with Jekyll][tania] by [Tania Rascia](https://www.taniarascia.com/). The best getting started guide I have found.
* [Sites](https://github.com/jekyll/jekyll/wiki/Sites) on Jekyll's GitHub page. This page showcases sites that use Jekyll. You can use this for source of inspirations and learnings. Remember what the famous painter <cite>Pablo Picasso</cite> said: <q>Good artists copy; great artists steal</q>.
* [Jekyll on StackOverflow](https://stackoverflow.com/questions/tagged/jekyll). If you need quick troubleshooting, check it out on StackOverflow for an answer to your question. Not there? Go ahead and ask a new question.
* [Learn SASS](http://sass-lang.com/guide). A good start to learn <dfn>SASS</dfn>, an extension of CSS that helps keep stylesheets well-organized by allowing you to use variables, nested rules, mixins, inline imports, and more. You can also go directly to [SASS documentation](http://sass-lang.com/documentation/file.SASS_REFERENCE.html) for more details.
* [Markdown](https://daringfireball.net/projects/markdown/) by [Daring Fireball](https://daringfireball.net). Learn the basics of Markdown from its original creator.
* [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/). Learn the Markdown syntax that Tania Rascia and I are using for our Jekyll sites. <abbr title="Github Flavored Markdown">GFW</abbr> is one of many Markdown syntax that you can use.
* [The Hello World Collection](http://helloworldcollection.de/). Trivia: here's a collection of “Hello, World!” programs in as many more-or-less well known programming languages and 76 human languages.

[jekyll]:           http://jekyllrb.com
[github.io]:        https://pages.github.com/
[tania]:            https://www.taniarascia.com/make-a-static-website-with-jekyll/
[formingo]:         https://www.formingo.co
[formkeep]:         https://formkeep.com
[formspree]:        http://formspree.io/
[contact]:          /contact
[wiki-staticSite]:  https://en.wikipedia.org/wiki/Static_web_page
[smashing]:         https://www.smashingmagazine.com/2015/11/modern-static-website-generators-next-big-thing/
[tom]:              http://tom.preston-werner.com/
