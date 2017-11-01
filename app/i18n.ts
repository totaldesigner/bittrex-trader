/**
 * i18n.js
 *
 * This will setup the i18n language files and locale data for your app.
 *
 */
import { addLocaleData } from 'react-intl';
import * as en from 'react-intl/locale-data/en';
import * as ko from 'react-intl/locale-data/ko';

import { DEFAULT_LOCALE, EN, KO } from './constants/langs';
import enTranslationMessages = require('./translations/en.json');
import koTranslationMessages = require('./translations/ko.json');

addLocaleData([...en, ...ko]);

export const appLocales = [
  EN,
  KO,
];

export const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages = locale !== DEFAULT_LOCALE
    ? formatTranslationMessages(DEFAULT_LOCALE, koTranslationMessages)
    : {};
  return Object.keys(messages).reduce((formattedMessages, key) => {
    const formattedMessage = !messages[key] && locale !== DEFAULT_LOCALE
      ? defaultFormattedMessages[key]
      : messages[key];
    return {...formattedMessages, ...{ [key]: formattedMessage }};
  }, {});
};

export const translationMessages = {
  en: formatTranslationMessages(EN, enTranslationMessages),
  ko: formatTranslationMessages(KO, koTranslationMessages),
};
