import * as Yup from 'yup';
import { ReactSelectOption } from '../../../types/filter';

const arrayOfObjectsToArrayOfStrings = (values: Array<ReactSelectOption>, type: string) => {
  console.log(values);

  if (values && values.length) {
    return values?.map((item) => {
      if (type === 'number') {
        return Number(item.id);
      }
      return item.id;
    });
  }
  return null;
};

const defaultValidationMessages = {
  required: 'Required',
  date: 'Should be valid date format',
  string: 'Should be valid string',
  number: 'Should be valid number',
};

export default function filterSchemaHOF(validationMessage = defaultValidationMessages) {
  return Yup.object().shape({
    filters: Yup.array().of(
      Yup.object().shape({
        id: Yup.object().nullable().required(validationMessage.required),
        // @ts-ignore
        values: Yup.lazy((values: any, params: any) => {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
          const type = params && params.parent && params.parent.id && params.parent.id.type ? params.parent.id.type : '';

          if (type === 'number') {
            return Yup.array()
              .transform((value: Array<ReactSelectOption>) => arrayOfObjectsToArrayOfStrings(value, type))
              .of(Yup.string().typeError(validationMessage.number))
              .required(validationMessage.required);
          }
          if (type === 'date') {
            return Yup.array()
              .transform((value: Array<ReactSelectOption>) => arrayOfObjectsToArrayOfStrings(value, type))
              .of(Yup.date().typeError(validationMessage.date))
              .required(validationMessage.required);
          }
          if (type === 'boolean') {
            return Yup.boolean();
          }
          return Yup.array()
            .transform((value: Array<ReactSelectOption>) => arrayOfObjectsToArrayOfStrings(value, type))
            .of(Yup.string().typeError(validationMessage.string))
            .required(validationMessage.required);
        }),

        operator: Yup.object({
          id: Yup.string().typeError(validationMessage.string),
          name: Yup.string().typeError(validationMessage.string),
        })
          .nullable()
          .required(validationMessage.required), // these constraints take precedence
      })
    ),
  });
}
