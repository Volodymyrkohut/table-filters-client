import * as Yup from 'yup';
export default function filterSchemaHOF(validationMessage?: {
    required: string;
    date: string;
    string: string;
    number: string;
}): Yup.ObjectSchema<Yup.Shape<object | undefined, {
    filters: ((object & {
        id: any;
        values: any;
        operator: any;
    }) | undefined)[] | undefined;
}>, object>;
