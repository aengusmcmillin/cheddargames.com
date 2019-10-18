---
title: 'Days 12-18: Font loading and texture rendering'
path: days-12-18
date: 2019-10-14T23:37:18.466Z
description: Texture loading and font rendering
identifier: 'days-12-18-font-rendering'
---
This has been a busy week. I just moved out of my apartment yesterday so in the days leading up I was packing, cleaning, dealing with movers, and generally finalizing a ton of logistics and annoying stuff. Now that that is all out of the way I do want to start to pin down a slightly more consistent schedule with development and blogging, although I fly out to Scotland tomorrow to begin my travels, so I will have to find a balance between that and being productive, which could prove tricky. But I will do my best! As for what I got done in the 100 Days of Game Dev Challenge:

**Day 12**

I spent most of my time this day iterating on my camera projection matrix system and also implemented a way to reverse the process and go from screen coordinates back to x/y world coordinates. This allowed me to start working on mouse input handling, and I tested it with some click handler stuff.

**Day 13**
Expanded on the mouse handling from the previous day, introduced a 2d cursor that shows up on any tiles that the mouse is hovering over. Also did some refactoring.

**Day 14**

Started implementing texture loading. First step was to port over my BMP code from a previous rendition of the engine, I ported that and replaced most of the solid color quads with textured drawables using my terrible programmer art. Aseprite doesn't seem to support Alpha on BMP images, so I decided I would follow up by implementing a PNG renderer.

![](/img/screen-shot-2019-10-08-at-9.16.12-pm.png)

**Day 15**

Started realizing that I had procrastinated too much on moving things until this point, so next couple updates are tiny. This day I just started implementing PNG rendering. Made a bit of progress but was still figuring out details of the format and compression.  <http://www.libpng.org/pub/png/spec/1.2/PNG-Structure.html> is the reference I used for this.

**Day 16**

Basic PNG loading done! Although I'm trying to do most things by hand, I decided to include a small compression library (<https://crates.io/crates/compress>) to handle the zlib decompression of the PNG contents. Took a bit of trial and error and reading up on the spec, but got it working after a little while.

**Day 17**

I watched the ThinMatrix font rendering video (<https://www.youtube.com/watch?v=mnIQEQoHHCU>) to get some ideas on how to approach this, and then hacked together a basic implementation of font rendering with my renderer. Still very basic and has a lot of hardcoded values that I don't like, but it works!

![](/img/screen-shot-2019-10-12-at-9.43.20-pm.png)

**Day 18**

Made some improvements to the font rendering. Now it loads sizing and other details from the fnt file and properly scales things to a passed in font size. It also now supports line wrapping and screen relative positioning. A lot of the types in my engine are still poorly defined, and things are getting messy. I think I need to take some time to do cleanup work and make sure I'm not digging myself in too deep of a hole. I also need to actually start on the xplat nature of this project soon and start implementing a windows platform layer. That will also help me finish stress testing, and I will be able to make sure that I'm implementing this in a sound way.

![](/img/screen-shot-2019-10-13-at-9.54.26-pm.png)
