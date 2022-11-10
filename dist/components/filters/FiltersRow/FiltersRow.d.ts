import * as React from 'react';
import { FilterType, LoadOptionsType, OperatorOptions, ReactSelectOption } from '../../../types/filter';
import { FC } from "react";
export interface IFiltersRow {
    loadOptions: LoadOptionsType;
    onRemove: (index: number) => void;
    onChangeField: (value: any) => void;
    index: number;
    filterType: FilterType;
    options: {
        fields: Array<ReactSelectOption>;
        operators: OperatorOptions;
        values: Array<ReactSelectOption> | null;
    };
    RemoveFilterButton?: FC;
}
declare const FiltersRow: React.FC<IFiltersRow>;
export default FiltersRow;
