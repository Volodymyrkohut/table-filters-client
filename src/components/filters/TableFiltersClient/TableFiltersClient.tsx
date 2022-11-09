import * as React from 'react';
import { FC } from "react";
import { FieldArray, FieldArrayRenderProps, Form, Formik, FormikHelpers } from 'formik';
import filterSchema from '../../ui/controls/validations';
import FiltersRow from '../FiltersRow/FiltersRow';
import {
  FilterResponseItem,
  InitialFiltersWithoutExtraData,
  InitialValues,
  InitialValuesItem,
  LoadOptionsType,
  ValidationMessage,
} from '../../../types/filter';
import {
  fillSavedFilterRowWithExtraData,
  transformResponseFilters,
  transformWithoutUselessData,
} from '../../../helpers/transforms';
import '../../../assets/index.scss';

export interface ITableFiltersClient {
  onLoadSourceOptions: (filterId: string) => LoadOptionsType;
  onSubmitFilterForm: (outputData: InitialFiltersWithoutExtraData) => void;
  onRemoveFilter?: (index: number) => void;
  onAddFilter?: (fieldArrayProps: FieldArrayRenderProps) => void;
  initialFilters: InitialFiltersWithoutExtraData; // InitialValues;
  filtersTypesList: Array<FilterResponseItem>; // Array<FilterTransformedItem>;
  addFilterButtonText?: string;
  submitFilterButtonText?: string;
  idLabelText?: string;
  operatorLabelText?: string;
  valuesLabelText?: string;
  validationMessages?: ValidationMessage;
  RemoveFilterButton?: FC;
  AddFilterButton?: FC;
  SaveFilterButton?: FC;
}

const TableFiltersClient: React.FC<ITableFiltersClient> = (props) => {
  const {
    onSubmitFilterForm,
    initialFilters,
    filtersTypesList,
    onRemoveFilter,
    onAddFilter,
    onLoadSourceOptions,
    addFilterButtonText,
    submitFilterButtonText,
    idLabelText,
    operatorLabelText,
    valuesLabelText,
    validationMessages,
    RemoveFilterButton,
    AddFilterButton,
    SaveFilterButton,
  } = props;

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
    <Formik
      onSubmit={submitForm}
      initialValues={initialValue}
      validationSchema={filterSchema(validationMessages)}
      enableReinitialize
    >
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
                <div className="filter-list-labels">
                  <label>{idLabelText}</label>
                  <label>{operatorLabelText}</label>
                  <label>{valuesLabelText}</label>
                  <div style={{ width: 36 }}></div>
                </div>
                <ul className="filter-list__items">
                  {filters.map((row: InitialValuesItem, index: number) => {
                    // clear operator's select and values select
                    const onChangeField = () => {
                      form.setFieldValue(`filters[${index}].operator`, '');
                      form.setFieldValue(`filters[${index}].values`, null);
                    };

                    return (
                      <li className="filter-list__item" key={index}>
                        <FiltersRow
                          loadOptions={onLoadSourceOptions(row?.id?.value)}
                          filterType={row?.id?.type}
                          onChangeField={onChangeField}
                          options={{
                            fields: transformed,
                            operators: row?.id?.operators,
                            values: row?.id?.values,
                          }}
                          onRemove={onRemove}
                          index={index}
                          RemoveFilterButton={RemoveFilterButton}
                        />
                      </li>
                    );
                  })}
                </ul>
                <div className="button-group">
                  <div className="filter-list-button" onClick={addFilter}>
                    {
                      AddFilterButton ? <AddFilterButton/> : <button type="button" className="filter-list-button__add">{addFilterButtonText}</button>
                    }
                  </div>

                  <div className="filter-list-button">
                    {SaveFilterButton ? <SaveFilterButton />: <button type="submit" className="filter-list-button__save">{submitFilterButtonText}</button>}
                  </div>
                </div>
              </div>
            );
          }}
        </FieldArray>
      </Form>
    </Formik>
  );
};

export default TableFiltersClient;
