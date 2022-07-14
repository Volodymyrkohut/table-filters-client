import * as Yup from 'yup';
import { FilterTransformedItem, ReactSelectOption } from '../../../types/filter';

const arrayOfObjectsToArrayOfStrings = (value: Array<ReactSelectOption>) => {
  return value?.map((item) => item.value);
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
        id: Yup.object()
          .shape({
            label: Yup.string().required(),
            value: Yup.string().required(),
            type: Yup.string().required(),
          })
          .nullable()
          .required(validationMessage.required),
        values: Yup.array()
          .when('id', {
            is: (object: FilterTransformedItem) => {
              if (object && object.type) {
                return object.type === 'number';
              }
              return false;
            },
            then: Yup.array()
              .transform((value: Array<ReactSelectOption>) => arrayOfObjectsToArrayOfStrings(value))
              .of(Yup.number().typeError(validationMessage.number))
              .required(validationMessage.required),
          })
          .when('id', {
            is: (object: FilterTransformedItem) => {
              if (object && object.type) {
                return object.type === 'date';
              }
              return false;
            },
            then: Yup.array()
              .transform((value: Array<ReactSelectOption>) => arrayOfObjectsToArrayOfStrings(value))
              .of(Yup.date().typeError(validationMessage.date))
              .required(validationMessage.required),
          })
          .when('id', {
            is: (object: FilterTransformedItem) => {
              if (object && object.type) {
                return object.type !== 'date' && object.type !== 'number';
              }
              return false;
            },
            then: Yup.array()
              .transform((value: Array<ReactSelectOption>) => arrayOfObjectsToArrayOfStrings(value))
              .of(Yup.number().typeError(validationMessage.string))
              .required(validationMessage.required),
          }),

        operator: Yup.string().nullable().required(validationMessage.required), // these constraints take precedence
      })
    ),
  });
}
