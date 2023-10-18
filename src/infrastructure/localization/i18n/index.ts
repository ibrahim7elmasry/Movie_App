import I18n from "react-native-i18n"
const en = require("../../../translation/en")
const ar = require("../../../translation/ar")
I18n.fallbacks = true;

I18n.translations = {
    en: en,
    ar: ar,
};

export default I18n