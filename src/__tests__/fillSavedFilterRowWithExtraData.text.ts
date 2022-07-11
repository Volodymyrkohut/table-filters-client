import { FilterTransformedItem } from '../types/filter';
import { fillSavedFilterRowWithExtraData } from '../helpers/transforms';
import initialFilterValues from '../mocks/initialFiltersValues';
import transformedResponse from '../mocks/transformedResponse';
import initialFilterWithExtraData from '../mocks/initialFilterWithExtraData';

describe('fillSavedFilterRowWithExtraData', () => {
  test('with correct input data', () => {
    expect(fillSavedFilterRowWithExtraData(initialFilterValues, transformedResponse)).toEqual(initialFilterWithExtraData);
  });

  test('function got params with empty arrays', () => {
    const inputInitialData = { filters: [] };
    const inputFiltersData: Array<FilterTransformedItem> = [];
    const outputData = { filters: [] };

    expect(fillSavedFilterRowWithExtraData(inputInitialData, inputFiltersData)).toEqual(outputData);
  });
  test('transformResponseFilters', () => {});
});
