export {}// import { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import { parseUrl } from '../helpers/url';
// import { FilterTransformedItem, InitialUILParseData } from '../types/filter';
// import { fillSavedFilterRowWithExtraData, transformResponseFilters } from '../helpers/transforms';
//
// function useFilterData() {
//   const location = useLocation();
//   const [filters, setFilters] = useState<Array<FilterTransformedItem>>([]);
//
//   useEffect(() => {
//     fetch('https://api.nites.cloud/extranet/hotels/leuschke-plc-hotel-42507/reservations', {
//       headers: {
//         Authorization:
//           'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLm5pdGVzLmNsb3VkXC9leHRyYW5ldFwvYXV0aFwvbG9naW4iLCJpYXQiOjE2NTY0MDc4OTIsImV4cCI6MTY4Nzk0Mzg5MiwibmJmIjoxNjU2NDA3ODkyLCJqdGkiOiJ4YlhudkdkaGlzckI0MW91Iiwic3ViIjoxLCJwcnYiOiI2NDNkOGEwNGY0ZDI2ZjUyNTlmMDI4MjkzNjM4NDk1NzEyNzA0OThmIn0.04MWse5o4LpOjTwQNvIkWdKhiVHJvNvgZF8GjBOZDGs',
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         // data transformation
//         // const transformed = transformResponseFilters(data.meta.filters);
//
//         setFilters(data.meta.filters);
//       });
//   }, []);
//
//   const urlData = parseUrl<InitialUILParseData>(location.search.slice(1));
//
//   return { filters, initialValues: fillSavedFilterRowWithExtraData(urlData, filters) };
// }
//
// export default useFilterData;

/*

*   useEffect(() => {
    // transform data for ajax
    const requestData = urlData.filters?.length
      ? urlData.filters.map((item) => ({
          values: item?.values?.map((im) => im.value),
          id: item.id.value,
          operator: item.operator,
        }))
      : [];

    console.log('requestData', requestData);
  }, [location.search, urlData.filters]);
  * */
