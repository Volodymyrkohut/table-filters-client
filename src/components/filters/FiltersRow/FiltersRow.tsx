import * as React from 'react';
import { FilterType, LoadOptionsType, OperatorOptions, ReactSelectOption } from '../../../types/filter';
import FilterSwitchValueField from '../FilterSwitchValueField/FilterSwitchValueField';
import AppReactSelectControl from '../../ui/controls/AppReactSelectControl';
import AppSelectControl from '../../ui/controls/AppSelectControl';

export interface IFiltersRow {
  loadOptions: LoadOptionsType;
  idOptions: Array<ReactSelectOption>;
  operatorOptions: OperatorOptions;
  valueOptions: Array<ReactSelectOption> | null;
  onRemove: (index: number) => void;
  onChangeIdSelect: (value: any) => void;
  index: number;
  type: FilterType;
}

const FiltersRow: React.FC<IFiltersRow> = (props) => {
  const { idOptions, loadOptions, operatorOptions, type, valueOptions, onRemove, onChangeIdSelect, index } = props;

  return (
    <div className="filter-row">
      <div className="filter-row__field filter-row__field__id">
        <AppReactSelectControl name={`filters[${index}].id`} options={idOptions} onChange={onChangeIdSelect} />
      </div>
      <div className="filter-row__field filter-row__field__operator">
        <AppSelectControl name={`filters[${index}].operator`} options={operatorOptions} />
      </div>
      <div className="filter-row__field filter-row__field__values">
        <FilterSwitchValueField
          name={`filters[${index}].values`}
          type={type}
          valueOptions={valueOptions}
          loadOptions={loadOptions}
        />
        {type}
      </div>

      <div className="filter-row__field filter-row__remove">
        <button type="button" onClick={() => onRemove(index)}>
          видалити
        </button>
      </div>
    </div>
  );
};
export default FiltersRow;
