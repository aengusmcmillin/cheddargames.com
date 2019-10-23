---
title: 'Days 19 - 25: Gui system and porting to D3D'
path: days-19-25
identifier: days-19-25-gui-d3d
date: 2019-10-23T21:46:42.328Z
description: Gui System and D3D integration
---
Still settling in to Edinburgh and trying to get back into more of a routine, as such I made some progress, but not massive amounts. Basically I have a system inspired by recent ThinMatrix videos for a GUI in the works, as well as the introduction of xplat to my engine with porting over to D3D. It might be a bit silly to be porting it when the game is nowhere near done, but I wanted to make sure it was possible so that I wouldn't end up missing some crucial architectural issue (e.g. something caused by Rust maybe) and have to rebuild a bunch of stuff later. I'm not quite done porting, but so far I think things are in a good place and I have a path forward.

**Day 19**

Just did a little bit of refactoring and a couple of minor tweaks to the font rendering system

**Day 20**

Began porting my engine over to Win32 + DirectX. I have a window displaying and capturing input and some stubs in place for all the other platform layer components to get things building xplat. Also spent some time brainstorming ideas for my game with my brother and getting some more inspiration for how things should work there.

**Day 21**

Render pipeline and screen clearing now working with DirectX 11. Also started on some of the work with buffer creation. Slow and steady. I at least have a cleared window that shows up, even if nothing displays on it.

**Day 22**

Didn't even get started working until like 10:30pm, but I did introduce a couple more of the main gameplay concepts into the sandbox, including monster spawning and pathing to the center square. Just wanted something that feels a little bit more like the eventual game will.

**Day 23**

Spent some time working on the GUI system, implemented a system that allows for rectangular colored elements to be created and positioned on screen. Also added a couple of basic constraints (again, inspired by ThinMatrix), to be able to position based on pixels, percentile based, or being centered, as well as allowing for nesting and properly inheriting parent bounds for calculating constraints.

**Day 24**

Back to D3D migration. I made a bit of progress, and followed a couple of ChiliTomatoNoodle videos to get an idea of how D3D works a bit better, but ended up struggling with porting the concepts to the way that it needs to be done with rust + winapi crate. Eventually figured out the right pattern and I was able to get some things going, although shaders were giving me difficulty.

**Day 25**

Got something rendering at last! I was able to get a triangle drawing to screen. After this I started porting shaders. For now I'm just copying the metal shaders, appending .d3d to the name, and then migrating the contents from metal shader language to hlsl, but that obviously won't be scalable. I think that for the basics of the game I will be fine with basic primitives built out of a handful of simple shaders, but in the future I will need to revisit all of this to develop a better shader library and cross-compilation system. Possibly even my own mini shader language?
