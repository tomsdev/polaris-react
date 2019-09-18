import React, {useEffect} from 'react';
import {mount} from 'test-utilities';
import {useIsMountedRef} from '../use-is-mounted-ref';

describe('useIsMountedRef', () => {
  it('returns a false value before mounting', () => {
    const spy = jest.fn((_) => {});

    function MockComponent() {
      const isMounted = useIsMountedRef();
      spy(isMounted.current);
      return null;
    }

    mount(<MockComponent />);
    expect(spy).toHaveBeenCalledWith(false);
  });

  it('returns a false value after unmounting', () => {
    const spy = jest.fn((_) => {});

    function MockComponent() {
      const isMounted = useIsMountedRef();

      useEffect(() => {
        return () => {
          // eslint-disable-next-line react-hooks/exhaustive-deps
          spy(isMounted.current);
        };
      }, [isMounted]);

      return null;
    }

    const mockComponent = mount(<MockComponent />);
    mockComponent.unmount();
    expect(spy).toHaveBeenCalledWith(false);
  });

  it('returns true after the component mounts', () => {
    const spy = jest.fn((_) => {});

    function MockComponent() {
      const isMounted = useIsMountedRef();

      useEffect(() => {
        spy(isMounted.current);
      }, [isMounted]);

      return null;
    }

    mount(<MockComponent />);
    expect(spy).toHaveBeenCalledWith(true);
  });
});
