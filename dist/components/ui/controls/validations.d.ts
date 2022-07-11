import * as Yup from 'yup';
declare const filterSchema: Yup.ObjectSchema<Yup.Shape<object | undefined, {
    filters: ((object & {
        id: any;
        values: any;
        operator: any;
    }) | undefined)[] | undefined;
}>, object>;
export default filterSchema;
