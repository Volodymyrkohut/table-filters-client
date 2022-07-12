import * as React from 'react';
import { FilterType, LoadOptionsType, OperatorOptions, ReactSelectOption } from '../../../types/filter';
export interface IFiltersRow {
    loadOptions: LoadOptionsType;
    idOptions: Array<ReactSelectOption>;
    operatorOptions: OperatorOptions;
    valueOptions: Array<ReactSelectOption> | null;
    onRemove: (index: number) => void;
    onChangeIdSelect: (value: any) => void;
    index: number;
    filterType: FilterType;
}
declare const FiltersRow: React.FC<IFiltersRow>;
export default FiltersRow;
