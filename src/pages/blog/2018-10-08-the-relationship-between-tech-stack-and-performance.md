---
templateKey: blog-post
title: The relationship between tech stack and performance
date: 2018-10-08T23:36:47.016Z
description: >-
  An abbreviated rant (personal opinion) on the relationship between performance
  and tech stack.

---
One of my favorite things about being a Front End Developer is getting to experiment with new frameworks and tools. In a sea of choices, one thing is clear: modular UI component based architecture is here and it's not going anywhere. 

I recently stumbled upon a tweet from Chris Coyier that made me pause and think 1. about the true meaning of performance and 2. it's relationship with today's tools:

<blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">A framework doesn’t make your site fast. You do that.</p>&mdash; Chris Coyier (@chriscoyier) <a href="https://twitter.com/chriscoyier/status/1048756495826006021?ref_src=twsrc%5Etfw">October 7, 2018</a></blockquote>

<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

This, like many tweets, can be taken out of context and interpreted in a myriad of ways, especially with regards to a hot topic like performance. For the record, I agree with Chris in that ultimately, whichever framework you choose to use, it's up to you (the developer) to make it as performant as possible. 

Having said that, I do feel that there are open source projects and tools out there with so much performance that it makes it very difficult to build laggy websites/apps. Take [Gatsby](https://www.gatsbyjs.org) for example. Gatsby is an opinionated static site generator for React. It's a Progressive Web App right out of the box. And there's NPM packages like [styled-components ](https://www.styled-components.com/)which allows you to write styles on a component level, as opposed to global styles which increase payload times and inevitably attribute to a laggier UX.

My abbreviated answer is: yes, humans control performance, but the performance of your app can be directly attributed to which tech stack you choose for your project.
