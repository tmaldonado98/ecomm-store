import React from 'react';
import { Canvas } from 'react-canvas-js';

const one = {
    "maxParticles": 50,
    "colors": [
      "ivory",

    ],
    "shapes": [
      "circle"
    ],
    "size": 4,
    "minSpeed": 0.05,
    "maxSpeed": 0.3,
    "alpha": 0.7,
    "backgroundColor": "transparent",
    // "position": "absolute"
  };
  
export default function Particles () {
    return (
      <Canvas options={one} />
    )
  }