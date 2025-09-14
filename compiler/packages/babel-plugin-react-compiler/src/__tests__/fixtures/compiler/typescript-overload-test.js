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
