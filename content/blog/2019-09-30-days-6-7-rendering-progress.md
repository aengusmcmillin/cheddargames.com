---
title: 'Days 6 & 7: Rendering progress'
path: days_6_7_rendering
date: 2019-09-30T14:08:50.272Z
identifier: 'days-6-7-rendering'
description: In which I finally get renderer momentum back
---
Spent day 6 entirely struggling with the borrow checker and lifetimes. I was trying to figure out a way such that I could have a set of traits that defined the api for my rendering system, and then had a set of concrete structs that implemented all that logic. There were a couple of problems with this. The main one was that in order to hook this all up I was going to need to have a generic params on my main components for every single type in the renderer. The reason for this is that, for example, the metal device needs to know concretely how to use the contents of a shader, which means it needs to know it is a metal shader,  and since downcasting in rust is a pain, there wasn't a good solution without either going with Any and all the constraints that entails, or else specifying the shader type in the generics and letting the MetalRenderer specify that it needs a MetalShader, a MetalVertexBuffer, a MetalIndexBuffer, etc... There might have been some obvious solution I was missing, but I didn't make progress on this on day 6.

On day 7 I finally figured out a path forward. I don't know if this is optimal, but I have decided that the approach I will take is to avoid traits for this api, and instead essentially have a consistent set of method calls and data types that will resolve at compile time. So, for example, I can build with an OpenGL backend and it would provide the Renderer, Shader, VertexBuffer, and other types with a specific set of calls, and if I built with the Metal backend it would provide a different set of structs also called Renderer, Shader, and VertexBuffer, with roughly the same method signatures. There may be something I'm missing here, but for now it appears to work reasonably well. 

After I got this started I began working on a couple of basic 3d things, primarily transformation matrices, as well as messing with a couple of sample tests to check things seem to work properly. Next step is going to be to more rigidly define some of my API boundaries and come up with a model for how I will define renderables in this system such that I can just define a data specification for what is involved and what needs to be set and let the platform layer handle the specifics.

Also, related to the website, I want to get a comment system working on this site. I will probably go with something similar to what Tania Rascia [implemented](https://www.taniarascia.com/add-comments-to-static-site/) for her gatsby site. Hopefully I will have that ready today or tomorrow. 
