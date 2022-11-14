import * as React from 'react';
import { FilterResponseItem, FilterType, LoadOptionsType } from '../../../types/filter';
export interface IFiltersRow {
    loadOptions: LoadOptionsType;
    onRemove: (index: number) => void;
    onChangeField: (value: any) => void;
    index: number;
    filterType: FilterType;
    options: {
        fields: Array<FilterResponseItem>;
        operators: Array<string>;
        values: any;
    };
    RemoveFilterButton?: React.FC;
}
declare const FiltersRow: React.FC<IFiltersRow>;
export default FiltersRow;
