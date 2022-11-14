import * as React from 'react';
import { FieldArrayRenderProps } from 'formik';
import { FilterResponseItem, InitialFilterValues, LoadOptionsType, ValidationMessage } from '../../../types/filter';
import '../../../assets/index.scss';
export interface ITableFiltersClient {
    onLoadSourceOptions: (filterId: number) => LoadOptionsType;
    onSubmitFilterForm: (outputData: InitialFilterValues) => void;
    onRemoveFilter?: (index: number) => void;
    onAddFilter?: (fieldArrayProps: FieldArrayRenderProps) => void;
    initialFilters: InitialFilterValues;
    filtersTypesList: Array<FilterResponseItem>;
    addFilterButtonText?: string;
    submitFilterButtonText?: string;
    idLabelText?: string;
    operatorLabelText?: string;
    valuesLabelText?: string;
    validationMessages?: ValidationMessage;
    RemoveFilterButton?: React.FC;
    AddFilterButton?: React.FC;
    SaveFilterButton?: React.FC;
}
declare const TableFiltersClient: React.FC<ITableFiltersClient>;
export default TableFiltersClient;
