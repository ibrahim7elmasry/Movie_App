declare module 'react-native-i18n' {
    export interface TranslateOptions {
        [key: string]: string | number | boolean;
    }

    export interface I18n {
        t(key: string, options?: TranslateOptions): string;
    }

    const i18n: I18n;

    export function t(key: string, options?: TranslateOptions): string;

    export default i18n;
}
