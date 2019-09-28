---
title: 'Days 4 & 5: Rendering basics'
date: 2019-09-28T05:15:15.551Z
description: gettin my render on
---
Forgot to post for day 4, so merging a couple of updates.

Day 4 I spent more time restructuring and porting over code from my previous repo. A bit happier with the layout of things right now, and I have good separation of cocoa stuff vs metal for the most part. Got a window showing, input handling, and a screen cleared by metal to a solid color.

Day 5 I was working more on rendering. Metal is weird, especially with rust, but I have it rendering a triangle. I was also going through various tutorials to get an idea of how different other apis work, and thinking about how exactly I want to structure my renderer so that it will work across several different graphics APIs. When thinking about how I would present this in a future series of tutorials, it really helps me think about how best to structure things now, although in the meantime it is slightly slower progress.

I think by tomorrow I should have a rough idea of my API, and I can start adding methods for basic building blocks needed to lay things out on screen in 2d. Still making slow progress, but it is steady and should lead to a solid foundation.
