import * as React from 'react';
import './TableFiltersClient.scss';
import { FieldArrayRenderProps } from 'formik';
import { FilterResponseItem, InitialUILParseData, LoadOptionsType } from '../../../types/filter';
export interface ITableFiltersClient {
    onLoadSourceOptions: (filterId: string) => LoadOptionsType;
    onSubmitFilterForm: (outputData: InitialUILParseData) => void;
    onRemoveFilter?: (index: number) => void;
    onAddFilter?: (fieldArrayProps: FieldArrayRenderProps) => void;
    initialFilters: InitialUILParseData;
    filtersTypesList: Array<FilterResponseItem>;
    addFilterButtonText: string;
    submitFilterButtonText: string;
    idLabelText?: string;
    operatorLabelText?: string;
    valuesLabelText?: string;
}
declare const TableFiltersClient: React.FC<ITableFiltersClient>;
export default TableFiltersClient;
