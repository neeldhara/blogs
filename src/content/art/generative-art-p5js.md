---
title: "Generative Art with p5.js: Creating Beauty from Mathematics"
description: "Exploring the intersection of code and creativity through generative art experiments."
pubDate: "Feb 18 2024"
image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&auto=format&fit=crop&q=60"
authorImage: "/avatar/avatar1.png"
authorName: "Neeldhara"
---

# Generative Art with p5.js: Creating Beauty from Mathematics

Code becomes canvas when mathematics meets creativity.

## Today's Creation: Perlin Noise Flows

```javascript
for (let particle of particles) {
  let angle = noise(particle.x * 0.01, particle.y * 0.01, frameCount * 0.001) * TWO_PI;
  particle.velocity = p5.Vector.fromAngle(angle);
  particle.update();
  particle.draw();
}
```

## The Magic of Randomness

Controlled randomness creates organic patterns. Perlin noise gives us randomness with continuity - nature's own algorithm.

## Parameters as Paintbrushes

- Noise scale: Changes pattern density
- Particle count: Affects texture
- Color mapping: Sets the mood

## The Joy of Accidents

The best discoveries come from "mistakes" - a typo that creates unexpected beauty, a parameter pushed to extremes.

## Share Your Creations

Art is meant to be shared. Post your generative experiments and let's inspire each other.
