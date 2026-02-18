export const rpgPosts = {
  "04": {
    title: "Putting it into my game",
    date: "Dec 25",
    sections: [
      { h: "Context", p: "Worked on swing timing and readability." },
      { h: "Problem", p: "Player attacked but sword didn’t animate." },
      { img: "/devlog/rpg/04/before.png", cap: "Sword stuck on idle frame." },
      { h: "Fix", p: "Switched to trigger-based attack + corrected animator transitions." },
      { img: "/devlog/rpg/04/after.png", cap: "Weapon animates correctly." },
    ],
  },

  "03": {
    title: "Stamina, stamina, stamina!",
    date: "Dec 20",
    sections: [
      { h: "Intro", p: "Stamina, stamina, and more stamina! My character can move left, right, up, down but in a regular RPG that feels a bit boring and slow. It's time to start adding more movement types!" },
      { h: "Splain", p: "To be frank, I have no idea what I'm doing prior to implementing these systems, so it's a lot of trial and error + research that gets me to a point where I'm satisfied. I wanted my character to be able to move in a couple of different ways, especially keeping in track with the fact that my character is a mouse. They should be able to run away quickly, timid and shy, but also grow to be able to fight enemies as the game progresses. I also wanted the agility and mobility of a mouse to shine, so I tried implementing a dash as well. In the future, I want to implement a sneaking/crouching feature that can recover stamina and allow the character to see further or be more aware of their surroundings. The stamina system is contained within the player movement script, and is very similar to how the player health is scripted, with a max stamina and a current stamina variable. When the user presses the sprint or dash button, a FixedUpdate() function will drain the stamina at a fixed rate stored in a variable, then regenerate stamina slowly as long as the current stamina isn't too low. If it's too low, the character must wait a bit until it's above a threshold. It's a pretty simple system, but it works well for now and lends itself to bigger systems that control the max stamina or regeneration rate." },
    ],
  },

  "02": {
    title: "Aesprite, tilesets, tilemaps",
    date: "Dec 15",
    sections: [
      { h: "Intro", p: "Something important in every game is the visuals. When I was young, every game I played used pixel art, so I wanted to replicate that nostalgic, old-school feeling in my game. I've never designed tilesets or tilemaps or even drawn in pixel art before, so I downloaded Aesprite and got straight to work." },
      { h: "Splain", p: "I started playing around with pixel sizes, of which there were many choices, 64x64, 32x32, 16x16 and even a combination of them. I found 16x16 to be the simplest for me to produce, especilaly because I'm the one designing everything. If I had the choice, I think 32x32 would look better visually and add a level or clarity to the visuals but that's okay. I started off with the grass and dirt tiles, following a couple or tutorials and blogs online. Everything was going well, until I put it all together and realized that my tiles don't tile and when I put them together they look terrible...so I restarted...and restarted...and restarted. Eventually, I think I got the gist of it just by trial and error, placing certain colors in places and seeing if placing the tile next to itself felt natural." },
    ],
  },

  "01": {
    title: "Getting Started",
    date: "Dec 10",
    sections: [
      { h: "Intro", p: "Hi, welcome to my dev log! I'm making this game for fun over my winter break, and it's inspired by a book I read a long time ago when I was kid called Mouseheart. I started off this project just brainstorming a couple of ideas for what I wanted, and I ended up choosing a 2D RPG style game because it's heavily inspired from my childhood and the games I used to play." },
      { h: "Splain", p: "The first thing I worked on was basic character movement and actions, and I was following a Youtube tutorial by Night Run Studio. I got to a point where the player could move around with basic movement inputs and also attacking using Unity's basic input model. I simply read the inputs in as InputActions, initalized them in the Start() function, and whenever they were activated in the Update() function, I told the animator to play the animations. As for the actual movement and damage, I coded separate scripts for those that would control the RigidBody2D velocity, direction and also the hitbox of the attack. This is a relatively simple approach that I will improve upon later to have more advanced attacks and moves, but for getting started I think it suffices." },
    ],
  },
};