import * as React from 'react';
import { FilterType, LoadOptionsType, OperatorOptions, ReactSelectOption } from '../../../types/filter';
import FilterSwitchValueField from '../FilterSwitchValueField/FilterSwitchValueField';
import AppReactSelectControl from '../../ui/controls/AppReactSelectControl';
import AppSelectControl from '../../ui/controls/AppSelectControl';
import RemoveButton from '../../ui/buttons/RemoveButton/RemoveButton';
import {FC} from "react";

export interface IFiltersRow {
  loadOptions: LoadOptionsType;
  // idOptions: Array<ReactSelectOption>;
  // operatorOptions: OperatorOptions;
  // valueOptions: Array<ReactSelectOption> | null;
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

const FiltersRow: React.FC<IFiltersRow> = (props) => {
  const { loadOptions, filterType, onRemove, onChangeField, index, options, RemoveFilterButton } = props;

  return (
    <div className="filter-row">
      <div className="filter-row__field filter-row__field__id">
        <AppReactSelectControl classNamePrefix="select-id" name={`filters[${index}].id`} options={options.fields} onChange={onChangeField} />
      </div>
      <div className="filter-row__field filter-row__field__operator">
        <AppSelectControl className="select-operator" name={`filters[${index}].operator`} options={options.operators} />
      </div>
      <div className="filter-row__field filter-row__field__values">
        <FilterSwitchValueField
          classNamePrefix="select-values"
          name={`filters[${index}].values`}
          type={filterType}
          valueOptions={options.values}
          loadOptions={loadOptions}
        />
      </div>

      <div className="filter-row__field filter-row__remove" onClick={() => onRemove(index)}>
        {RemoveFilterButton ? <RemoveFilterButton /> : <RemoveButton />}
      </div>
    </div>
  );
};
export default FiltersRow;
