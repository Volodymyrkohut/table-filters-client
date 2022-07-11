"use strict";var ne=Object.create;var O=Object.defineProperty;var se=Object.getOwnPropertyDescriptor;var pe=Object.getOwnPropertyNames;var me=Object.getPrototypeOf,ce=Object.prototype.hasOwnProperty;var de=(t,e)=>{for(var r in e)O(t,r,{get:e[r],enumerable:!0})},w=(t,e,r,o)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of pe(e))!ce.call(t,a)&&a!==r&&O(t,a,{get:()=>e[a],enumerable:!(o=se(e,a))||o.enumerable});return t};var p=(t,e,r)=>(r=t!=null?ne(me(t)):{},w(e||!t||!t.__esModule?O(r,"default",{value:t,enumerable:!0}):r,t)),ue=t=>w(O({},"__esModule",{value:!0}),t);var Oe={};de(Oe,{TableFiltersClient:()=>N});module.exports=ue(Oe);var u=p(require("react"));var R=require("formik");var m=p(require("yup")),fe=m.object().shape({filters:m.array().of(m.object().shape({id:m.object().shape({label:m.string().required("\u0426\u0435 \u043F\u043E\u043B\u0435 \u0454 \u043E\u0431\u043E\u0432\u044F\u0437\u043A\u043E\u0432\u0438\u043C \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u0432\u043D\u0435\u043D\u043D\u044F"),value:m.string().required("\u0426\u0435 \u043F\u043E\u043B\u0435 \u0454 \u043E\u0431\u043E\u0432\u044F\u0437\u043A\u043E\u0432\u0438\u043C \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u0432\u043D\u0435\u043D\u043D\u044F")}).nullable().required("\u0426\u0435 \u043F\u043E\u043B\u0435 \u0454 \u043E\u0431\u043E\u0432\u044F\u0437\u043A\u043E\u0432\u0438\u043C \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u0432\u043D\u0435\u043D\u043D\u044F"),values:m.array().of(m.object().shape({label:m.string().required("\u0426\u0435 \u043F\u043E\u043B\u0435 \u0454 \u043E\u0431\u043E\u0432\u044F\u0437\u043A\u043E\u0432\u0438\u043C \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u0432\u043D\u0435\u043D\u043D\u044F"),value:m.string().required("\u0426\u0435 \u043F\u043E\u043B\u0435 \u0454 \u043E\u0431\u043E\u0432\u044F\u0437\u043A\u043E\u0432\u0438\u043C \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u0432\u043D\u0435\u043D\u043D\u044F")})).nullable().min(1,"\u0426\u0435 \u043F\u043E\u043B\u0435 \u0454 \u043E\u0431\u043E\u0432\u044F\u0437\u043A\u043E\u0432\u0438\u043C \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u0432\u043D\u0435\u043D\u043D\u044F").required("\u0426\u0435 \u043F\u043E\u043B\u0435 \u0454 \u043E\u0431\u043E\u0432\u044F\u0437\u043A\u043E\u0432\u0438\u043C \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u0432\u043D\u0435\u043D\u043D\u044F"),operator:m.string().nullable().required("\u0426\u0435 \u043F\u043E\u043B\u0435 \u0454 \u043E\u0431\u043E\u0432\u044F\u0437\u043A\u043E\u0432\u0438\u043C \u0434\u043B\u044F \u0437\u0430\u043F\u043E\u0432\u043D\u0435\u043D\u043D\u044F")}))}),V=fe;var f=p(require("react"));var I=p(require("react"));var k="number",D="string",M="boolean",U="date",h="enum",q="source";var T=p(require("react")),z=require("formik");var b=p(require("react"));var B=p(require("classnames")),Fe=t=>{let{children:e,label:r="",isError:o,error:a}=t,n=(0,B.default)("field-control",{isError:o});return b.createElement("div",{className:n},r&&b.createElement("label",null,r),e,b.createElement("span",{className:"field-control__error"},o&&b.createElement("span",null,a)))},y=Fe;var H=p(require("react")),$=require("react-select-async-paginate"),ye=t=>{let{...e}=t;return H.createElement($.AsyncPaginate,{additional:{page:1},...e})},j=ye;var ve=t=>{let{name:e,label:r,onChange:o,...a}=t;return T.createElement(z.Field,{name:e},n=>{let{field:d,meta:i,form:l}=n,c=i.touched&&!!i.error;return T.createElement(y,{isError:c,error:i.error,label:r},T.createElement(j,{...a,...d,onBlur:()=>l.setFieldTouched(e,!0),onChange:s=>{o&&o(s),l.setFieldValue(e,s)}}))})},G=ve;var A=p(require("react")),Q=require("formik");var W=p(require("react")),J=p(require("react-select/async-creatable")),Re=function(t){let{options:e,isError:r,...o}=t;return W.createElement(J.default,{defaultOptions:e,...o})},K=Re;var be=t=>{let{name:e,label:r,onChange:o,...a}=t;return A.createElement(Q.Field,{name:e},n=>{let{field:d,meta:i,form:l}=n,c=i.touched&&!!i.error;return A.createElement(y,{isError:c,error:i.error,label:r},A.createElement(K,{...a,...d,onBlur:()=>l.setFieldTouched(e,!0),onChange:s=>{o&&o(s),l.setFieldValue(e,s)}}))})},v=be;var Ie=({type:t,name:e,valueOptions:r,loadOptions:o})=>{switch(t){case q:return I.createElement(G,{name:e,isMulti:!0,loadOptions:o});case(D||M||U||h||k):return I.createElement(v,{name:e,isMulti:!0});case h:return I.createElement(v,{name:e,options:r,isMulti:!0});default:return I.createElement(v,{name:e,isMulti:!0})}},X=Ie;var S=p(require("react")),te=require("formik");var L=p(require("react")),Z=p(require("classnames")),Se=t=>{let{isError:e,children:r,...o}=t,a=(0,Z.default)("select",{isError:e});return L.default.createElement("div",{className:a},L.default.createElement("select",{autoComplete:"off",...o},r))},ee=Se;var Ce=t=>{let{name:e,options:r=[],disabled:o,label:a,id:n}=t;return S.createElement(te.Field,{name:e},d=>{let{field:i,meta:l}=d,c=l.touched&&!!l.error;return S.createElement(y,{isError:c,error:l.error,label:a},S.createElement(ee,{id:n,...i,isError:c,disabled:o},r.map(s=>S.createElement("option",{key:s.value,value:s.value},s.key))))})},re=Ce;var Pe=t=>{let{idOptions:e,loadOptions:r,operatorOptions:o,type:a,valueOptions:n,onRemove:d,onChangeIdSelect:i,index:l}=t;return f.createElement("div",{className:"filter-row"},f.createElement("div",{className:"filter-row__field filter-row__field__id"},f.createElement(v,{name:`filters[${l}].id`,options:e,onChange:i})),f.createElement("div",{className:"filter-row__field filter-row__field__operator"},f.createElement(re,{name:`filters[${l}].operator`,options:o})),f.createElement("div",{className:"filter-row__field filter-row__field__values"},f.createElement(X,{name:`filters[${l}].values`,type:a,valueOptions:n,loadOptions:r}),a),f.createElement("div",{className:"filter-row__field filter-row__remove"},f.createElement("button",{type:"button",onClick:()=>d(l)},"\u0432\u0438\u0434\u0430\u043B\u0438\u0442\u0438")))},oe=Pe;var ae=(t,e)=>({filters:t.filters?.length?t.filters.map(o=>{let a=e.find(n=>o.id.value===n.value);return{values:o.values,operator:o.operator,id:a}}):[]}),ie=t=>t.map(e=>{let{caption:r,id:o,values:a,operators:n,...d}=e,i;Array.isArray(a)?i=a.map(c=>({label:c.name,value:String(c.id)})):i=a;let l=n.map(c=>({key:c,value:c}));return{label:r,value:String(o),values:i,operators:[{key:"\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044C \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440",value:""},...l],...d}});var ge=t=>{let{onSubmitFilterForm:e,initialFilters:r,filtersTypesList:o,onRemoveFilter:a,onAddFilter:n,onLoadSourceOptions:d}=t,i=ie(o),l=ae(r,i);return u.createElement(R.Formik,{onSubmit:(s,C)=>{let _={filters:s.filters.map(E=>{let{id:P,...x}=E;return{...x,id:{label:P.label,value:P.value}}})};e&&e(_)},initialValues:l,validationSchema:V,enableReinitialize:!0},u.createElement(R.Form,null,u.createElement(R.FieldArray,{name:"filters"},s=>{let{form:C,push:Y,remove:_}=s,{filters:E}=C.values,P=F=>{_(F),a&&a(F)},x=()=>{let[F=null]=i;Y({id:F,operator:"",values:[]}),n&&n(s)};return u.createElement("div",{className:"filter-list"},u.createElement("ul",{className:"filter-list__items"},E.map((F,g)=>{let le=Te=>{C.setFieldValue(`filters[${g}].operator`,""),C.setFieldValue(`filters[${g}].values`,null)};return u.createElement("li",{className:"filter-list__item",key:g},u.createElement(oe,{loadOptions:d(F?.id?.value),type:F?.id?.type,onChangeIdSelect:le,idOptions:i,operatorOptions:F?.id?.operators,valueOptions:F?.id?.values,onRemove:P,index:g}))})),u.createElement("div",{className:"filter-list__button"},u.createElement("button",{type:"button",onClick:x},"add one more filter")))}),u.createElement("button",{type:"submit"},"\u0417\u0430\u0441\u0442\u0443\u0441\u0443\u0432\u0430\u0442\u0438 \u0444\u0456\u043B\u044C\u0442\u0440")))},N=ge;
//# sourceMappingURL=index.js.map
