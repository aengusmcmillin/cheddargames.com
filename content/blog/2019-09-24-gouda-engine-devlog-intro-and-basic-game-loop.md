---
title: 'Gouda Engine Devlog: Intro and basic game loop'
path: devlog-intro
date: 2019-09-24T15:14:39.590Z
description: gouda game loop
---
Today I wanted to write down some of my basic plans for the Gouda engine to outline the core architectural ideas that will be in place.

The engine will live in a library to be included in the game binary. The binary will declare the main method, but that should literally only be constructing the engine with a struct implementing a GameLogic trait, and then calling run().

This means that the entirety of the game loop will happen within the engine code, leading to a very simple api for the game developer. 

The final big piece is a platform layer. That will encapsulate all of the osx/windows/d3d/metal levels of code into a set of apis that will be used by the main engine to create windows, capture input, do rendering, etc...

Rough Pseudocode:

```
fn run() {
  setup_engine();
  game_logic.setup();

  let platform = create_platform_layer();

  while running {
    let input = platform.capture_input();
    game_logic.update(input);

    let audio_buf = platform.ready_audio();
    engine_get_audio(audio_buf);
    platform.play_audio(audio_buf);

    platform.renderer.begin_scene();
    engine_render(platform.renderer);
    platform.renderer.end_scene();
  }
}
```

There will be an ECS hooked throughout the engine layer to handle almost all of the game data. 
