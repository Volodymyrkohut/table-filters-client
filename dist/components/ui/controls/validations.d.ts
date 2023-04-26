import * as Yup from 'yup';
export default function filterSchemaHOF(validationMessage?: {
    required: string;
    date: string;
    string: string;
    number: string;
}): Yup.ObjectSchema<{
    filters: {
        values?: boolean | (string | undefined)[] | (Date | undefined)[] | undefined;
        id: {};
        operator: {
            id?: string | undefined;
            name?: string | undefined;
        };
    }[] | undefined;
}, Yup.AnyObject, {
    filters: "";
}, "">;
