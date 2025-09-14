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
