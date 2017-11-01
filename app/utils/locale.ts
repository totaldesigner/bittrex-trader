export function getLanguage() {
  if (navigator.languages && navigator.languages.length) {
    return navigator.languages[0];
  } else if (navigator.userLanguage) {
    return navigator.userLanguage;
  } else {
    return navigator.language;
  }
}
