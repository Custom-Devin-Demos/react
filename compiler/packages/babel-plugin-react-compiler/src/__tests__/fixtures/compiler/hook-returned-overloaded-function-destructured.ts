import {useMemo} from 'react';

function useOverloadedFunction() {
  const fn = useMemo(() => {
    function overloadedFn(x: string): string;
    function overloadedFn(x: number): number;
    function overloadedFn(x: string | number): string | number {
      return x;
    }
    return overloadedFn;
  }, []);
  
  return { fn };
}

function Component() {
  const { fn } = useOverloadedFunction();
  return fn("test");
}

export const FIXTURE_ENTRYPOINT = {
  fn: Component,
  params: [],
};
