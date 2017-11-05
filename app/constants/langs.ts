import { getLanguage } from '../utils/locale';

export const KO: TLanguage = 'ko';
export const EN: TLanguage = 'en';

export const DEFAULT_LOCALE =  getLanguage().indexOf(KO) > -1 ? KO : EN;
