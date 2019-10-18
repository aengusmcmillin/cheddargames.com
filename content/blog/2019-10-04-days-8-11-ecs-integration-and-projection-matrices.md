---
title: 'Days 8 - 11: ECS integration and projection matrices'
path: days-8-11
date: 2019-10-04T19:27:14.229Z
identifier: 'days-8-11-ecs-integration'
description: 'Better ECS integration with rendering, and some maths'
---

Haven't posted an update on here in a while, so going to summarize the last couple of discord updates today.

After getting a basic rendering system working on day 7 I have been spending the last couple of days trying out a few things, learning more about how 2d rendering generally works (e.g. with orthographic projection matrices), and making sure that I can use my rendering process with my ECS. So far it is all working well, and I'm pretty happy with the development model.

As of now, my rendering system has the following:
- Vertex, Fragment, and Index Buffers
- Drawing quads of specified size with solid colors
- Shader loading from files
- Integration with my ECS system so that I can configure components and systems to easily create and modify my drawables. This included moving the renderer to a Rc<> type so that it could be referenced throughout the ECS for buffer creation and the like.
- Basic camera system with orthographic projection matrices. I can currently easily move around and zoom in and out on a camera component and pass that in when rendering a quad.

![](/img/ortho_matrix.gif)
