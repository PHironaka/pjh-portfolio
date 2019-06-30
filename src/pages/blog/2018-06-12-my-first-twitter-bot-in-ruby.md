---
templateKey: blog-post
title: My first Twitter Bot in Ruby
date: 2018-06-12T20:42:12.767Z
description: I followed a very simple tutorial by SuperHi to build my first Twitter Bot.

---
SuperHi is a great online resource for learning web development. They've targeted towards the creative industry, mainly designers who are interested in leveling up their coding skills. Classes range from HTML/CSS to React and Ruby on Rails courses. Great stuff.

This week, I came across a tutorial of theirs that walks you through step-by-step of building a Twitter Bot off 30 lines of Ruby.

[Here's all the source code](https://github.com/PHironaka/gd-bot), in case you're interested in checking that out. 

The there are three Ruby Gems you will need to install to your project file: 'Twitter', 'HTTParty', and 'Nokogiri'. I decided to use a Twitter app I created last year for a rails app I had been working on, just for testing purposes ([@scoutmaster_app](https://twitter.com/scoutmaster_app)). 

This code looks for updates on a site's RSS feed every 20 mins and tweets out the 5 most recent articles. It's sorted by Link and Title of each post. Since this is U.S. Open week, I decided to use [GolfDigest.com](https://golfdigest.com). 

`ruby bin/update.rb` will run the code - make sure to test via your terminal first before deploying the command via Heroku CLI.

Simple as that! Took about 20mins to get it all up and running. Building a twitter bot definitely peaked my interest, I think I'll be making more complex ones in the future!
