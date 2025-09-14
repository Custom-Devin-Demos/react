interface MessageDescriptor {
  id: string;
  defaultMessage: string;
}

export function useTranslatedResourceOverload<Translations extends Record<string, MessageDescriptor>>(
  translations: Translations,
) {
  function formatMessage(descriptor: MessageDescriptor) {
    return descriptor.defaultMessage;
  }

  function formatValue(key: keyof Translations): string;
  function formatValue(key: keyof Translations | null | undefined): string | null;
  function formatValue(key: keyof Translations | null | undefined) {
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
