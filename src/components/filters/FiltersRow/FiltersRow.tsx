import * as React from 'react';
import { FilterType, LoadOptionsType, OperatorOptions, ReactSelectOption } from '../../../types/filter';
import FilterSwitchValueField from '../FilterSwitchValueField/FilterSwitchValueField';
import AppReactSelectControl from '../../ui/controls/AppReactSelectControl';
import AppSelectControl from '../../ui/controls/AppSelectControl';
import RemoveButton from '../../ui/buttons/RemoveButton/RemoveButton';
import AppSwitcher from "../../ui/controls/AppSwitcher";

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

const FiltersRow: React.FC<IFiltersRow> = (props) => {
  const { idOptions, loadOptions, operatorOptions, filterType, valueOptions, onRemove, onChangeIdSelect, index } = props;

  return (
    <div className="filter-row">
      <div className="filter-row__field filter-row__field__id">
        <AppReactSelectControl classNamePrefix="select-id" name={`filters[${index}].id`} options={idOptions} onChange={onChangeIdSelect} />
      </div>
      <div className="filter-row__field filter-row__field__operator">
        <AppSelectControl className="select-operator" name={`filters[${index}].operator`} options={operatorOptions} />
      </div>
      <div className="filter-row__field filter-row__field__values">
        <FilterSwitchValueField
          classNamePrefix="select-values"
          name={`filters[${index}].values`}
          type={filterType}
          valueOptions={valueOptions}
          loadOptions={loadOptions}
        />
      </div>

      <div className="filter-row__field filter-row__remove">
        <RemoveButton onClick={() => onRemove(index)} />
      </div>
    </div>
  );
};
export default FiltersRow;
