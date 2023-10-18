import I18n from "../../infrastrcuture/localization/i18n"

export function localizedString(key: string, params: (any | null) = null): string {
    return I18n.t(key, params)
}