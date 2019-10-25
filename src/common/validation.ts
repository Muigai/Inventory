export interface DataErrorInfo {
    getError: (property: string) => string;
}

export const getAllErrors =
    (source: DataErrorInfo) => {
        const errors = new Array<string>();

        for (const key of Object.keys(source)) {
            errors.push(source.getError(key));
        }

        return errors.join("\r");
    };

export const getError =
    <T>(validations: Map<string, (T) => string>, instance: T, property: string) => {
        return validations.has(property) ? validations[property](instance) : "";
    };

export const notNullOrWhitespace =
    (value: string, propertyName: string, errorMessage?: string) =>
        !value || value.length === 0 ?
            (errorMessage || `${propertyName} cannot be blank`) :
            "";

export const maxLength =
    (value: string, maxLength: number, propertyName: string, errorMessage?: string) =>
         value && value.length > maxLength ?
            (errorMessage || `${propertyName} cannot be longer than ${maxLength} characters`) :
            "";

export const maxLengthRequired =
    (value: string, length: number, propertyName: string, errorMessage?: string) =>
        notNullOrWhitespace(value, propertyName, errorMessage) + maxLength(value, length, propertyName, errorMessage);

export const nameof = <T>() => (name: Extract<keyof T, string>): string => name;

export const capitalize = (s: string) => s[0].toUpperCase() + s.substr(1);

export const validateAll =
    <T>(... params: Array<(T) => string>) =>
        (instance: T) => {
            for (const validation of params) {
                const errorMessage = validation(instance);

                if (!errorMessage || errorMessage.length === 0) {
                    continue;
                }

                return errorMessage;
            }

            return "";
        };
