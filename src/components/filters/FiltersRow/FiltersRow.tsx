import * as React from 'react';
import { FilterTransformedItem, OperatorOptions, Operators } from '../../../types/filter';
import AppReactSelectControl from '../../ui/controls/AppReactSelectControl';
import AppSelectControl from '../../ui/controls/AppSelectControl';

export interface IReactSelectOption {
  label: string;
  value: string;
}

export interface IFiltersRow {
  idOptions: Array<IReactSelectOption>;
  operatorOptions: OperatorOptions;
  valueOptions: Array<IReactSelectOption> | null;
  onRemove: (index: number) => void;
  onChangeIdSelect?: (value: any) => void;
  index: number;
}

const FiltersRow: React.FC<IFiltersRow> = (props) => {
  const { idOptions, operatorOptions, valueOptions, onRemove, onChangeIdSelect, index } = props;

  return (
    <div className="filter-row">
      <div className="filter-row__field filter-row__field__id">
        <AppReactSelectControl name={`filters[${index}].id`} options={idOptions} onChange={onChangeIdSelect} />
      </div>
      <div className="filter-row__field filter-row__field__operator">
        <AppSelectControl name={`filters[${index}].operator`} options={operatorOptions} />
      </div>
      <div className="filter-row__field filter-row__field__values">
        <AppReactSelectControl name={`filters[${index}].values`} options={valueOptions} isMulti type="creatable" />
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
