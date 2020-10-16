import { act, renderHook } from '@testing-library/react-hooks';
import useMouseMove, { MouseMoveVariant } from '.';

const TEST_X = 420;
const TEST_Y = 69;

describe('useMouseMove', (): void => {
  it('should default to 0, 0', (): void => {
    const { result } = renderHook(useMouseMove);
    expect(result.current[0]).toBe(0);
    expect(result.current[1]).toBe(0);
  });

  it('should listen to mousemove events on mount', (): void => {
    const windowAddEventListener: jest.SpyInstance<void> = jest.spyOn(
      window,
      'addEventListener',
    );
    expect(windowAddEventListener).not.toHaveBeenCalledWith(
      'mousemove',
      expect.any(Function),
    );

    renderHook(useMouseMove);

    expect(windowAddEventListener).toHaveBeenCalledWith(
      'mousemove',
      expect.any(Function),
    );
  });

  it('should track coordinates', (): void => {
    const { result } = renderHook(useMouseMove);
    expect(result.current[0]).not.toBe(TEST_X);
    expect(result.current[1]).not.toBe(TEST_Y);

    act((): void => {
      const e: MouseEvent = new MouseEvent('mousemove');
      Object.assign(e, { x: TEST_X, y: TEST_Y });
      window.dispatchEvent(e);
    });

    expect(result.current[0]).toBe(TEST_X);
    expect(result.current[1]).toBe(TEST_Y);
  });

  it('should track client coordinates', (): void => {
    const { result } = renderHook(useMouseMove, {
      initialProps: MouseMoveVariant.Client,
    });
    expect(result.current[0]).not.toBe(TEST_X);
    expect(result.current[1]).not.toBe(TEST_Y);

    act((): void => {
      const e: MouseEvent = new MouseEvent('mousemove', {
        clientX: TEST_X,
        clientY: TEST_Y,
      });
      window.dispatchEvent(e);
    });

    expect(result.current[0]).toBe(TEST_X);
    expect(result.current[1]).toBe(TEST_Y);
  });

  it('should track movement coordinates', (): void => {
    const { result } = renderHook(useMouseMove, {
      initialProps: MouseMoveVariant.Movement,
    });
    expect(result.current[0]).not.toBe(TEST_X);
    expect(result.current[1]).not.toBe(TEST_Y);

    act((): void => {
      const e: MouseEvent = new MouseEvent('mousemove');
      Object.assign(e, {
        movementX: TEST_X,
        movementY: TEST_Y,
      });
      window.dispatchEvent(e);
    });

    expect(result.current[0]).toBe(TEST_X);
    expect(result.current[1]).toBe(TEST_Y);
  });

  it('should track offset coordinates', (): void => {
    const { result } = renderHook(useMouseMove, {
      initialProps: MouseMoveVariant.Offset,
    });
    expect(result.current[0]).not.toBe(TEST_X);
    expect(result.current[1]).not.toBe(TEST_Y);

    act((): void => {
      const e: MouseEvent = new MouseEvent('mousemove');
      Object.assign(e, { offsetX: TEST_X, offsetY: TEST_Y });
      window.dispatchEvent(e);
    });

    expect(result.current[0]).toBe(TEST_X);
    expect(result.current[1]).toBe(TEST_Y);
  });

  it('should track page coordinates', (): void => {
    const { result } = renderHook(useMouseMove, {
      initialProps: MouseMoveVariant.Page,
    });
    expect(result.current[0]).not.toBe(TEST_X);
    expect(result.current[1]).not.toBe(TEST_Y);

    act((): void => {
      const e: MouseEvent = new MouseEvent('mousemove');
      Object.assign(e, { pageX: TEST_X, pageY: TEST_Y });
      window.dispatchEvent(e);
    });

    expect(result.current[0]).toBe(TEST_X);
    expect(result.current[1]).toBe(TEST_Y);
  });

  it('should track screen coordinates', (): void => {
    const { result } = renderHook(useMouseMove, {
      initialProps: MouseMoveVariant.Screen,
    });
    expect(result.current[0]).not.toBe(TEST_X);
    expect(result.current[1]).not.toBe(TEST_Y);

    act((): void => {
      const e: MouseEvent = new MouseEvent('mousemove', {
        screenX: TEST_X,
        screenY: TEST_Y,
      });
      window.dispatchEvent(e);
    });

    expect(result.current[0]).toBe(TEST_X);
    expect(result.current[1]).toBe(TEST_Y);
  });

  it('should track default coordinates', (): void => {
    const { result } = renderHook(useMouseMove, {
      initialProps: MouseMoveVariant.Default,
    });
    expect(result.current[0]).not.toBe(TEST_X);
    expect(result.current[1]).not.toBe(TEST_Y);

    act((): void => {
      const e: MouseEvent = new MouseEvent('mousemove');
      Object.assign(e, { x: TEST_X, y: TEST_Y });
      window.dispatchEvent(e);
    });

    expect(result.current[0]).toBe(TEST_X);
    expect(result.current[1]).toBe(TEST_Y);
  });

  it('should stop listening to mousemove events on unmount', (): void => {
    const windowRemoveEventListeneer: jest.SpyInstance<void> = jest.spyOn(
      window,
      'removeEventListener',
    );
    expect(windowRemoveEventListeneer).not.toHaveBeenCalledWith(
      'mousemove',
      expect.any(Function),
    );

    const { unmount } = renderHook(useMouseMove);
    unmount();

    expect(windowRemoveEventListeneer).toHaveBeenCalledWith(
      'mousemove',
      expect.any(Function),
    );
  });
});
