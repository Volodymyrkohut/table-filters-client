import * as React from 'react';
import { FilterType, LoadOptionsType, ReactSelectOption } from '../../../types/filter';
export interface FilterSwitchValueFieldProps {
    type: FilterType;
    name: string;
    valueOptions: Array<ReactSelectOption> | null | boolean;
    loadOptions: LoadOptionsType;
    classNamePrefix?: string;
}
declare const FilterSwitchValueField: React.FC<FilterSwitchValueFieldProps>;
export default FilterSwitchValueField;
