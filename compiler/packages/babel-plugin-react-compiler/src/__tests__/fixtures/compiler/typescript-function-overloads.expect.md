
## Input

```javascript
export function useTranslatedResourceOverload(translations) {
  function formatMessage(descriptor) {
    return descriptor.defaultMessage;
  }

  function formatValue(key) {
    if (!key) return null;
    if (!translations[key]) return key;
    return formatMessage(translations[key]);
  }

  return { formatValue };
}

export function TestComponent() {
  const premiumTranslations = {
    none: { id: 'premium.none', defaultMessage: 'None' }
  };
  
  const { formatValue } = useTranslatedResourceOverload(premiumTranslations);
  
  const premium = formatValue('none');
  
  return premium;
}

```

## Code

```javascript
import { c as _c } from "react/compiler-runtime";
export function useTranslatedResourceOverload(translations) {
  const $ = _c(3);
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = function formatMessage(descriptor) {
      return descriptor.defaultMessage;
    };
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  const formatMessage = t0;
  let t1;
  if ($[1] !== translations) {
    const formatValue = function formatValue(key) {
      if (!key) {
        return null;
      }
      if (!translations[key]) {
        return key;
      }
      return formatMessage(translations[key]);
    };

    t1 = { formatValue };
    $[1] = translations;
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  return t1;
}

export function TestComponent() {
  const $ = _c(3);
  let t0;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t0 = { none: { id: "premium.none", defaultMessage: "None" } };
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  const premiumTranslations = t0;

  const { formatValue } = useTranslatedResourceOverload(premiumTranslations);
  let t1;
  if ($[1] !== formatValue) {
    t1 = formatValue("none");
    $[1] = formatValue;
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  const premium = t1;
  return premium;
}

```
      
### Eval output
(kind: exception) Fixture not implemented