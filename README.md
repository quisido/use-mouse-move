# useMouseMove [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=Listen%20to%20mouse%20move%20events%20with%20a%20React%20hook.&url=https://github.com/CharlesStover/use-mouse-move&via=CharlesStover&hashtags=react,reactjs,javascript,typescript,webdev,webdevelopment) [![version](https://img.shields.io/npm/v/use-mouse-move.svg)](https://www.npmjs.com/package/use-mouse-move) [![minzipped size](https://img.shields.io/bundlephobia/minzip/use-mouse-move.svg)](https://www.npmjs.com/package/use-mouse-move) [![downloads](https://img.shields.io/npm/dt/use-mouse-move.svg)](https://www.npmjs.com/package/use-mouse-move) [![build](https://api.travis-ci.com/CharlesStover/use-mouse-move.svg)](https://travis-ci.com/CharlesStover/use-mouse-move/)

Listen to mouse move events with a React hook.

- [Install](#install)
- [Use](#use)
  - [Variants](#variants)
- [Sponsor](#sponsor)

## Install

- `npm install use-mouse-move` or
- `yarn add use-mouse-move`

## Use

```javascript
import useMouseMove from 'use-mouse-move';

function App() {
  const [x, y] = useMouseMove();
  return (
    <p>
      Your mouse coordinates are {x}, {y}.
    </p>
  );
}
```

### Variants

The `useMouseMove` hook accepts one parameter -- a `MouseMoveVariant` enum that
you can import from the `use-mouse-move` package. These variants coincide with
the different x/y coordinates emit by mouse move events.

```javascript
import useMouseMove, { MouseMoveVariant } from 'use-mouse-move';
useMouseMove(MouseMoveVariant.Default);
```

- `MouseMoveVariant.Default`: `x` and `y` (default if no variant is specified)
- `MouseMoveVariant.Client`: `clientX` and `clientY`
- `MouseMoveVariant.Movement`: `movementX` and `movementY` (relative movement)
- `MouseMoveVariant.Offset`: `offsetX` and `offsetY`
- `MouseMoveVariant.Page`: `pageX` and `pageY`
- `MouseMoveVariant.Screen`: `screenX` and `screenY`

## Sponsor 💗

If you are a fan of this project, you may
[become a sponsor](https://github.com/sponsors/CharlesStover)
via GitHub's Sponsors Program.
