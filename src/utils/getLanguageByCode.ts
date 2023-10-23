import { LanguageCode } from "../types/language-codes";

const LANGUAGE_MAP: Record<LanguageCode, string> = {
  [LanguageCode.English]: "English",
  [LanguageCode.German]: "German",
  [LanguageCode.French]: "French",
  [LanguageCode.Italian]: "Italian",
  [LanguageCode.Dutch]: "Dutch",
};

const CODE_MAP: Record<string, LanguageCode> = {
  English: LanguageCode.English,
  German: LanguageCode.German,
  French: LanguageCode.French,
  Italian: LanguageCode.Italian,
  Dutch: LanguageCode.Dutch,
};

const getLanguageByCode = (code: LanguageCode): string => {
  return LANGUAGE_MAP[code] || "Unknown";
};

const getCodeByLanguage = (language: string): LanguageCode => {
  return CODE_MAP[language] || LanguageCode.English;
};

export { getLanguageByCode, getCodeByLanguage };
