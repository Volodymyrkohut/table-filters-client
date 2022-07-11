import * as React from 'react';
import './TableFiltersClient.scss';
import { FieldArray, FieldArrayRenderProps, Form, Formik, FormikHelpers } from 'formik';
import filterSchema from '../../ui/controls/validations';
import FiltersRow from '../FiltersRow/FiltersRow';
import {
  FilterResponseItem,
  InitialUILParseData,
  InitialValues,
  InitialValuesItem,
  LoadOptionsType,
} from '../../../types/filter';
import {
  fillSavedFilterRowWithExtraData,
  transformResponseFilters,
  transformWithoutUselessData,
} from '../../../helpers/transforms';

export interface ITableFiltersClient {
  onLoadSourceOptions: (filterId: string) => LoadOptionsType;
  onSubmitFilterForm: (outputData: InitialUILParseData) => void;
  onRemoveFilter?: (index: number) => void;
  onAddFilter?: (fieldArrayProps: FieldArrayRenderProps) => void;
  initialFilters: InitialUILParseData; // InitialValues;
  filtersTypesList: Array<FilterResponseItem>; // Array<FilterTransformedItem>;
}

const TableFiltersClient: React.FC<ITableFiltersClient> = (props) => {
  const { onSubmitFilterForm, initialFilters, filtersTypesList, onRemoveFilter, onAddFilter, onLoadSourceOptions } = props;

  // transform server data
  const transformed = transformResponseFilters(filtersTypesList);

  // for each saved filter add extra info {type, values, options }
  const initialValue = fillSavedFilterRowWithExtraData(initialFilters, transformed);

  const submitForm = (values: InitialValues, helpers: FormikHelpers<InitialValues>) => {
    // extract useless data
    const outputData = transformWithoutUselessData(values);

    if (onSubmitFilterForm) {
      onSubmitFilterForm(outputData);
    }
  };

  return (
    <Formik onSubmit={submitForm} initialValues={initialValue} validationSchema={filterSchema} enableReinitialize>
      <Form>
        <FieldArray name="filters">
          {(fieldArrayProps) => {
            const { form, push, remove } = fieldArrayProps;
            const { filters } = form.values;

            const onRemove = (index: number) => {
              remove(index);

              // for interface
              if (onRemoveFilter) {
                onRemoveFilter(index);
              }
            };

            const addFilter = () => {
              const [firstItem = null] = transformed;

              push({
                id: firstItem,
                operator: '',
                values: [],
              });

              // for interface
              if (onAddFilter) {
                onAddFilter(fieldArrayProps);
              }
            };

            return (
              <div className="filter-list">
                <ul className="filter-list__items">
                  {filters.map((row: InitialValuesItem, index: number) => {
                    // clear operator's select and values select
                    const onChangeIdSelect = (value: any) => {
                      form.setFieldValue(`filters[${index}].operator`, '');
                      form.setFieldValue(`filters[${index}].values`, null);
                    };

                    return (
                      <li className="filter-list__item" key={index}>
                        <FiltersRow
                          loadOptions={onLoadSourceOptions(row?.id?.value)}
                          type={row?.id?.type}
                          onChangeIdSelect={onChangeIdSelect}
                          idOptions={transformed}
                          operatorOptions={row?.id?.operators}
                          valueOptions={row?.id?.values}
                          onRemove={onRemove}
                          index={index}
                        />
                      </li>
                    );
                  })}
                </ul>

                <div className="filter-list__button">
                  <button type="button" onClick={addFilter}>
                    add one more filter
                  </button>
                </div>
              </div>
            );
          }}
        </FieldArray>
        <button type="submit">Застусувати фільтр</button>
      </Form>
    </Formik>
  );
};

export default TableFiltersClient;
