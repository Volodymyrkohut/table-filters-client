import * as React from 'react';
import { LoadOptions } from 'react-select-async-paginate';
import './TableFiltersClient.scss';
import { FieldArrayRenderProps } from 'formik';
import { FilterResponseItem, InitialUILParseData } from '../../../types/filter';
export interface ITableFiltersClient {
    onLoadSourceOptions: (filterId: string) => LoadOptions<any, any, any>;
    onSubmitFilterForm: (outputData: InitialUILParseData) => void;
    onRemoveFilter?: (index: number) => void;
    onAddFilter?: (fieldArrayProps: FieldArrayRenderProps) => void;
    initialFilters: InitialUILParseData;
    filtersTypesList: Array<FilterResponseItem>;
}
declare const TableFiltersClient: React.FC<ITableFiltersClient>;
export default TableFiltersClient;
