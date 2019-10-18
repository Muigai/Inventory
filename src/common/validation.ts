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
    (value: string, errorMessage: string) => !value || value.length === 0 ? errorMessage : "";

export const maxLength =
    (value: string, maxLength: number, errorMessage: string) => value && value.length > maxLength ? errorMessage : "";
