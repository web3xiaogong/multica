"use client";

import { useTranslations as useNextTranslations } from "next-intl";

type TranslationValues = Record<string, string | number>;

const fallbackMessages: Record<string, string> = {
  "ui.common.loading": "Loading...",
  "ui.common.close": "Close",
  "ui.common.moreEmojis": "More emojis...",
};

function formatFallback(template: string, values?: TranslationValues) {
  if (!values) return template;

  return template.replace(/\{(\w+)\}/g, (_, key) => {
    const value = values[key];
    return value === undefined ? `{${key}}` : String(value);
  });
}

export function useUiTranslations(namespace?: string) {
  let nextTranslator:
    | ((key: string, values?: TranslationValues) => string)
    | null = null;

  try {
    const translator = useNextTranslations(namespace);
    nextTranslator = (key, values) => translator(key, values);
  } catch {
    nextTranslator = null;
  }

  return (key: string, values?: TranslationValues) => {
    if (nextTranslator) return nextTranslator(key, values);

    const fullKey = namespace ? `${namespace}.${key}` : key;
    return formatFallback(fallbackMessages[fullKey] ?? fullKey, values);
  };
}
