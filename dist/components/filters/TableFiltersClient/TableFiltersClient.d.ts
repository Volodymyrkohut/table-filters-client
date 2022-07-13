import * as React from 'react';
import './TableFiltersClient.scss';
import { FieldArrayRenderProps } from 'formik';
import { FilterResponseItem, InitialFiltersWithoutExtraData, LoadOptionsType } from '../../../types/filter';
export interface ITableFiltersClient {
    onLoadSourceOptions: (filterId: string) => LoadOptionsType;
    onSubmitFilterForm: (outputData: InitialFiltersWithoutExtraData) => void;
    onRemoveFilter?: (index: number) => void;
    onAddFilter?: (fieldArrayProps: FieldArrayRenderProps) => void;
    initialFilters: InitialFiltersWithoutExtraData;
    filtersTypesList: Array<FilterResponseItem>;
    addFilterButtonText: string;
    submitFilterButtonText: string;
    idLabelText?: string;
    operatorLabelText?: string;
    valuesLabelText?: string;
}
declare const TableFiltersClient: React.FC<ITableFiltersClient>;
export default TableFiltersClient;
