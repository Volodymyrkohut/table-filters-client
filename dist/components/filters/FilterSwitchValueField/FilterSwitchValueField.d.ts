import * as React from 'react';
import { LoadOptions } from 'react-select-async-paginate';
import { FilterType } from '../../../types/filter';
import { IReactSelectOption } from '../FiltersRow/FiltersRow';
interface IFilterSwitchValueField {
    type: FilterType;
    name: string;
    valueOptions: Array<IReactSelectOption> | null;
    loadOptions: LoadOptions<any, any, any>;
}
declare const FilterSwitchValueField: React.FC<IFilterSwitchValueField>;
export default FilterSwitchValueField;
