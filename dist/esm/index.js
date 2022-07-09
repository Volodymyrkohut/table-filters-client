import*as u from"react";import{FieldArray as K,Form as Q,Formik as X}from"formik";import*as n from"yup";var Y=n.object().shape({filters:n.array().of(n.object().shape({id:n.object().shape({label:n.string().required("\u0426\u0435 \u043F\u043E\u043B\u0435 \u0454 \u043E\u0431\u043E\u0432\u044F\u0437\u043A\u043E\u0432\u0438\u043C \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u0432\u043D\u0435\u043D\u043D\u044F"),value:n.string().required("\u0426\u0435 \u043F\u043E\u043B\u0435 \u0454 \u043E\u0431\u043E\u0432\u044F\u0437\u043A\u043E\u0432\u0438\u043C \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u0432\u043D\u0435\u043D\u043D\u044F")}).nullable().required("\u0426\u0435 \u043F\u043E\u043B\u0435 \u0454 \u043E\u0431\u043E\u0432\u044F\u0437\u043A\u043E\u0432\u0438\u043C \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u0432\u043D\u0435\u043D\u043D\u044F"),values:n.array().of(n.object().shape({label:n.string().required("\u0426\u0435 \u043F\u043E\u043B\u0435 \u0454 \u043E\u0431\u043E\u0432\u044F\u0437\u043A\u043E\u0432\u0438\u043C \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u0432\u043D\u0435\u043D\u043D\u044F"),value:n.string().required("\u0426\u0435 \u043F\u043E\u043B\u0435 \u0454 \u043E\u0431\u043E\u0432\u044F\u0437\u043A\u043E\u0432\u0438\u043C \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u0432\u043D\u0435\u043D\u043D\u044F")})).nullable().min(1,"\u0426\u0435 \u043F\u043E\u043B\u0435 \u0454 \u043E\u0431\u043E\u0432\u044F\u0437\u043A\u043E\u0432\u0438\u043C \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u0432\u043D\u0435\u043D\u043D\u044F").required("\u0426\u0435 \u043F\u043E\u043B\u0435 \u0454 \u043E\u0431\u043E\u0432\u044F\u0437\u043A\u043E\u0432\u0438\u043C \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u0432\u043D\u0435\u043D\u043D\u044F"),operator:n.string().nullable().required("\u0426\u0435 \u043F\u043E\u043B\u0435 \u0454 \u043E\u0431\u043E\u0432\u044F\u0437\u043A\u043E\u0432\u0438\u043C \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u0432\u043D\u0435\u043D\u043D\u044F")}))}),x=Y;import*as c from"react";import*as R from"react";import{Field as $}from"formik";import*as F from"react";import D from"react-select/async";import O from"react-select";import M from"react-select/async-creatable";var q=function(i){let{type:t="default",options:r,isError:o,...e}=i,a=l=>l.inputValue===""?null:"\u0420\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0456\u0432 \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E";switch(t){case"async":return F.createElement(D,{defaultOptions:r,noOptionsMessage:a,...e});case"creatable":return F.createElement(M,{defaultOptions:r,...e});case"default":return F.createElement(O,{options:r,...e});default:return F.createElement(O,{options:r,...e})}},T=q;import*as v from"react";import H from"classnames";var U=i=>{let{children:t,label:r="",isError:o,error:e}=i,a=H("field-control",{isError:o});return v.createElement("div",{className:a},r&&v.createElement("label",null,r),t,v.createElement("span",{className:"field-control__error"},o&&v.createElement("span",null,e)))},I=U;var j=i=>{let{name:t,label:r,onChange:o,...e}=i;return R.createElement($,{name:t},a=>{let{field:l,meta:p,form:d}=a,s=p.touched&&!!p.error;return R.createElement(I,{isError:s,error:p.error,label:r},R.createElement(T,{...e,...l,onBlur:()=>d.setFieldTouched(t,!0),onChange:m=>{o&&o(m),d.setFieldValue(t,m)}}))})},g=j;import C from"react";import{Field as B}from"formik";import P from"react";import z from"classnames";var W=i=>{let{isError:t,children:r,...o}=i,e=z("select",{isError:t});return P.createElement("div",{className:e},P.createElement("select",{autoComplete:"off",...o},r))},L=W;var G=i=>{let{name:t,options:r=[],disabled:o,label:e,id:a}=i;return C.createElement(B,{name:t},l=>{let{field:p,meta:d}=l,s=d.touched&&!!d.error;return C.createElement(I,{isError:s,error:d.error,label:e},C.createElement(L,{id:a,...p,isError:s,disabled:o},r.map(m=>C.createElement("option",{key:m.value,value:m.value},m.key))))})},N=G;var J=i=>{let{idOptions:t,operatorOptions:r,valueOptions:o,onRemove:e,onChangeIdSelect:a,index:l}=i;return c.createElement("div",{className:"filter-row"},c.createElement("div",{className:"filter-row__field filter-row__field__id"},c.createElement(g,{name:`filters[${l}].id`,options:t,onChange:a})),c.createElement("div",{className:"filter-row__field filter-row__field__operator"},c.createElement(N,{name:`filters[${l}].operator`,options:r})),c.createElement("div",{className:"filter-row__field filter-row__field__values"},c.createElement(g,{name:`filters[${l}].values`,options:o,isMulti:!0,type:"creatable"})),c.createElement("div",{className:"filter-row__field filter-row__remove"},c.createElement("button",{type:"button",onClick:()=>e(l)},"\u0432\u0438\u0434\u0430\u043B\u0438\u0442\u0438")))},w=J;var E=(i,t)=>({filters:i.filters?.length?i.filters.map(o=>{let e=t.find(a=>o.id.value===a.value);return{values:o.values,operator:o.operator,id:e}}):[]}),V=i=>i.map(t=>{let{caption:r,id:o,values:e,operators:a,...l}=t,p;Array.isArray(e)?p=e.map(s=>({label:s.name,value:String(s.id)})):p=e;let d=a.map(s=>({key:s,value:s}));return{label:r,value:String(o),values:p,operators:[{key:"\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044C \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440",value:""},...d],...l}});var Z=i=>{let{onSubmitFilterForm:t,initialFilters:r,filtersTypesList:o,onRemoveFilter:e,onAddFilter:a}=i,l=V(o),p=E(r,l);return u.createElement(X,{onSubmit:(s,m)=>{let S={filters:s.filters.map(_=>{let{id:b,...h}=_;return{...h,id:{label:b.label,value:b.value}}})};t&&t(S)},initialValues:p,validationSchema:x,enableReinitialize:!0},u.createElement(Q,null,u.createElement(K,{name:"filters"},s=>{let{form:m,push:A,remove:S}=s,{filters:_}=m.values,b=f=>{S(f),e&&e(f)},h=()=>{let[f=null]=l;A({id:f,operator:"",values:[]}),a&&a(s)};return u.createElement("div",{className:"filter-list"},u.createElement("ul",{className:"filter-list__items"},_.map((f,y)=>u.createElement("li",{className:"filter-list__item",key:y},u.createElement(w,{onChangeIdSelect:te=>{m.setFieldValue(`filters[${y}].operator`,""),m.setFieldValue(`filters[${y}].values`,null)},idOptions:l,operatorOptions:f?.id?.operators,valueOptions:f?.id?.values,onRemove:b,index:y})))),u.createElement("div",{className:"filter-list__button"},u.createElement("button",{type:"button",onClick:h},"add one more filter")))}),u.createElement("button",{type:"submit"},"\u0417\u0430\u0441\u0442\u0443\u0441\u0443\u0432\u0430\u0442\u0438 \u0444\u0456\u043B\u044C\u0442\u0440")))},k=Z;export{k as TableFiltersClient};
//# sourceMappingURL=index.js.map
