import * as React from 'react';
import { LoadOptions } from 'react-select-async-paginate';
import { FilterType, OperatorOptions } from '../../../types/filter';
export interface IReactSelectOption {
    label: string;
    value: string;
}
export interface IFiltersRow {
    loadOptions: LoadOptions<any, any, any>;
    idOptions: Array<IReactSelectOption>;
    operatorOptions: OperatorOptions;
    valueOptions: Array<IReactSelectOption> | null;
    onRemove: (index: number) => void;
    onChangeIdSelect: (value: any) => void;
    index: number;
    type: FilterType;
}
declare const FiltersRow: React.FC<IFiltersRow>;
export default FiltersRow;
