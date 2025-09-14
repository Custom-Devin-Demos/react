
## Input

```javascript
function useHookWithOverloadedFunction() {
  function processValue(input) {
    if (!input) return null;
    return `processed: ${input}`;
  }

  return { processValue };
}

export function TestOverloadBug() {
  const { processValue } = useHookWithOverloadedFunction();
  
  console.log('processValue is:', processValue);
  
  if (processValue === undefined) {
    throw new Error('Function is undefined - overload bug reproduced!');
  }
  
  const result = processValue('test');
  return result;
}

```

## Code

```javascript
import { c as _c } from "react/compiler-runtime";
function useHookWithOverloadedFunction() {
  const $ = _c(1);
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    const processValue = function processValue(input) {
      if (!input) {
        return null;
      }
      return `processed: ${input}`;
    };

    t0 = { processValue };
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  return t0;
}

export function TestOverloadBug() {
  const $ = _c(2);
  const { processValue } = useHookWithOverloadedFunction();

  console.log("processValue is:", processValue);

  if (processValue === undefined) {
    throw new Error("Function is undefined - overload bug reproduced!");
  }
  let t0;
  if ($[0] !== processValue) {
    t0 = processValue("test");
    $[0] = processValue;
    $[1] = t0;
  } else {
    t0 = $[1];
  }
  const result = t0;
  return result;
}

```
      
### Eval output
(kind: exception) Fixture not implemented