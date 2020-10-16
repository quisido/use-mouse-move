import { useEffect, useState } from 'react';

export enum MouseMoveVariant {
  Client,
  Default,
  Movement,
  Offset,
  Page,
  Screen,
}

export default function useMouseMove(
  variant?: MouseMoveVariant,
): [number, number] {
  const [coords, setCoords] = useState<[number, number]>([0, 0]);

  useEffect((): (() => void) => {
    const handleMouseMove = (e: MouseEvent): void => {
      switch (variant) {
        case MouseMoveVariant.Client:
          setCoords([e.clientX, e.clientY]);
          break;
        case MouseMoveVariant.Movement:
          setCoords([e.movementX, e.movementY]);
          break;
        case MouseMoveVariant.Offset:
          setCoords([e.offsetX, e.offsetY]);
          break;
        case MouseMoveVariant.Page:
          setCoords([e.pageX, e.pageY]);
          break;
        case MouseMoveVariant.Screen:
          setCoords([e.screenX, e.screenY]);
          break;
        case MouseMoveVariant.Default:
        default:
          setCoords([e.x, e.y]);
          break;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return (): void => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [variant]);

  return coords;
}
