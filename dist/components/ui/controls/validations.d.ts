import * as Yup from 'yup';
export default function filterSchemaHOF(validationMessage?: {
    required: string;
    date: string;
    string: string;
    number: string;
}): Yup.ObjectSchema<{
    filters: {
        values?: boolean | {
            id?: string | undefined;
            name?: string | undefined;
        }[] | undefined;
        id: {};
        operator: {};
    }[] | undefined;
}, Yup.AnyObject, {
    filters: "";
}, "">;
