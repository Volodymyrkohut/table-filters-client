import { transformResponseFilters } from '../helpers/transforms';
import transformedResponse from '../mocks/transformedResponse';
import filterResponse from '../mocks/filterResponse';

describe('transformResponseFilters', () => {
  test('with empty array', () => {
    expect(transformResponseFilters([])).toEqual([]);
  });
  test('with correct params', () => {
    expect(transformResponseFilters(filterResponse)).toEqual(transformedResponse);
  });
});
