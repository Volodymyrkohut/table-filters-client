import*as n from"react";import{FieldArray as Se,Form as Ie,Formik as Ee}from"formik";import*as a from"yup";var I=(e,t)=>(console.log(e),e&&e.length?e?.map(o=>t==="number"?Number(o.id):o.id):null),pe={required:"Required",date:"Should be valid date format",string:"Should be valid string",number:"Should be valid number"};function E(e=pe){return a.object().shape({filters:a.array().of(a.object().shape({id:a.object().nullable().required(e.required),values:a.lazy((t,o)=>{let r=o&&o.parent&&o.parent.id&&o.parent.id.type?o.parent.id.type:"";return r==="number"?a.array().transform(i=>I(i,r)).of(a.string().typeError(e.number)).required(e.required):r==="date"?a.array().transform(i=>I(i,r)).of(a.date().typeError(e.date)).required(e.required):r==="boolean"?a.boolean():a.array().transform(i=>I(i,r)).of(a.string().typeError(e.string)).required(e.required)}),operator:a.object({id:a.string().typeError(e.string),name:a.string().typeError(e.string)}).nullable().required(e.required)}))})}import*as m from"react";import*as v from"react";var B="number",Y="string",H="boolean",M="date",O="enum",q="source";import*as x from"react";import{Field as fe}from"formik";import*as R from"react";import ue from"classnames";var me=e=>{let{children:t,label:o="",isError:r,error:i}=e,l=ue("filter-field-control",{isError:r});return R.createElement("div",{className:l},o&&R.createElement("label",null,o),R.createElement("div",{className:"filter-field-control__field"},t),R.createElement("span",{className:"filter-field-control__error"},r&&R.createElement("span",null,i)))},y=me;import*as k from"react";import{AsyncPaginate as de}from"react-select-async-paginate";var ce=e=>{let{...t}=e;return k.createElement(de,{additional:{page:1},...t})},D=ce;var Fe=e=>{let{name:t,label:o,onChange:r,onBlur:i,...l}=e;return x.createElement(fe,{name:t},d=>{let{field:p,meta:u,form:F}=d,s=u.touched&&!!u.error;return x.createElement(y,{isError:s,error:u.error,label:o},x.createElement(D,{...l,...p,onBlur:f=>{i&&i(f),F.setFieldTouched(t,!0)},onChange:f=>{r&&r(f),F.setFieldValue(t,f)}}))})},U=Fe;import*as P from"react";import{Field as ye}from"formik";import*as $ from"react";import be from"react-select/async-creatable";var Re=function(e){let{options:t,isError:o,...r}=e;return $.createElement(be,{defaultOptions:t,...r})},j=Re;var ve=e=>{let{name:t,label:o,onChange:r,...i}=e;return P.createElement(ye,{name:t},l=>{let{field:d,meta:p,form:u}=l,F=p.touched&&!!p.error;return P.createElement(y,{isError:F,error:p.error,label:o},P.createElement(j,{...i,...d,onBlur:()=>u.setFieldTouched(t,!0),onChange:s=>{r&&r(s),u.setFieldValue(t,s)}}))})},b=ve;import _ from"react";import{Field as ge}from"formik";import A from"react";var Ce=e=>{let{isError:t,...o}=e;return A.createElement("label",{className:`field-switch ${t?"isError":""}`},A.createElement("input",{type:"checkbox",className:"field-switch__input",...o}),A.createElement("span",{className:"field-switch__slider field-switch__slider--round"}))},z=Ce;var Te=e=>{let{name:t,label:o,...r}=e;return _.createElement(ge,{name:t},i=>{let{field:l,form:d,meta:p}=i,u=p.touched&&!!p.error;return _.createElement(y,{isError:u,error:p.error,label:o},_.createElement("div",{className:"app-switcher"},_.createElement(z,{isError:u,...r,...l,checked:l.value}),l.value?"On":"Off"))})},W=Te;var he=({type:e,name:t,valueOptions:o,loadOptions:r,classNamePrefix:i,...l})=>{switch(e){case q:return v.createElement(U,{name:t,isMulti:!0,loadOptions:r,classNamePrefix:i,placeholder:"",...l});case H:return v.createElement(W,{name:t,placeholder:""});case(Y||M||O||B):return v.createElement(b,{name:t,isMulti:!0,classNamePrefix:i,placeholder:"",...l});case O:return v.createElement(b,{name:t,options:o,isMulti:!0,classNamePrefix:i,placeholder:"",...l});default:return v.createElement(b,{name:t,isMulti:!0,classNamePrefix:i,placeholder:"",...l})}},Z=he;import*as L from"react";import J from"classnames";import*as N from"react";var xe=()=>N.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},N.createElement("path",{d:"M18.222 7.111H15.111V5.556C15.111 5.1435 14.9472 4.74787 14.6556 4.4561C14.364 4.16432 13.9685 4.00027 13.556 4H10.444C10.0315 4.00027 9.63598 4.16432 9.34439 4.4561C9.0528 4.74787 8.889 5.1435 8.889 5.556V7.111H5.778C5.57166 7.111 5.37377 7.19297 5.22787 7.33887C5.08197 7.48477 5 7.68266 5 7.889C5 8.09534 5.08197 8.29323 5.22787 8.43913C5.37377 8.58503 5.57166 8.667 5.778 8.667H6.486L7.461 19.457C7.4827 19.6964 7.59309 19.9191 7.77051 20.0814C7.94793 20.2436 8.17958 20.3337 8.42 20.334H15.507C15.7677 20.3341 16.0189 20.2366 16.2114 20.0608C16.4038 19.885 16.5235 19.6436 16.547 19.384L17.515 8.668H18.223C18.3252 8.66787 18.4263 8.64761 18.5207 8.6084C18.615 8.56918 18.7007 8.51176 18.7728 8.43942C18.845 8.36709 18.9022 8.28125 18.9412 8.1868C18.9801 8.09236 19.0001 7.99117 19 7.889C19 7.68266 18.918 7.48477 18.7721 7.33887C18.6262 7.19297 18.4283 7.111 18.222 7.111ZM10.444 5.556H13.555V7.111H10.444V5.556ZM15.044 18.778H8.96L8.047 8.667H15.952L15.044 18.778Z",fill:"#94A0B5"})),G=xe;var Pe=({className:e="",...t})=>{let o=J("remove-button",J);return L.createElement("button",{...t,className:o,type:"button"},L.createElement(G,null))},K=Pe;var _e=e=>{let{loadOptions:t,filterType:o,onRemove:r,onChangeField:i,index:l,options:d,RemoveFilterButton:p,fieldId:u}=e;function F(s=[]){return s.map(C=>({label:C,value:C}))}return m.createElement("div",{className:"filter-row"},m.createElement("div",{className:"filter-row__field filter-row__field__id"},m.createElement(b,{classNamePrefix:"select-id",name:`filters[${l}].id`,options:d.fields,getOptionLabel:s=>s.caption,getOptionValue:s=>String(s.id),onChange:i})),m.createElement("div",{className:"filter-row__field filter-row__field__operator"},m.createElement(b,{classNamePrefix:"select-id",name:`filters[${l}].operator`,options:F(d?.operators),onChange:i})),m.createElement("div",{className:"filter-row__field filter-row__field__values"},m.createElement(Z,{classNamePrefix:"select-values",name:`filters[${l}].values`,getOptionLabel:s=>s.name,getOptionValue:s=>String(s.id),getNewOptionData:(s,f)=>({id:f,name:s,__isNew__:!0}),type:o,valueOptions:d.values,loadOptions:t,key:u})),m.createElement("div",{className:"filter-row__field filter-row__remove",onClick:()=>r(l)},p?m.createElement(p,null):m.createElement(K,null)))},Q=_e;var X=(e,t)=>({filters:e.filters?.length?e.filters.map(r=>({id:t.find(l=>r.id.id===String(l.id)),values:r.values,operator:r.operator})):[]}),ee=e=>({filters:e.filters.map(o=>{let{id:r,...i}=o;return{...i,id:{caption:r.caption,id:r.id}}})});var Oe=e=>{let{onSubmitFilterForm:t,initialFilters:o,filtersTypesList:r,onRemoveFilter:i,onAddFilter:l,onLoadSourceOptions:d,addFilterButtonText:p,submitFilterButtonText:u,idLabelText:F,operatorLabelText:s,valuesLabelText:f,validationMessages:C,RemoveFilterButton:re,AddFilterButton:w,SaveFilterButton:V}=e,oe=X(o,r);return n.createElement(Ee,{onSubmit:(g,T)=>{let S=ee(g);t&&t(S)},initialValues:oe,validationSchema:E(C),enableReinitialize:!0},n.createElement(Ie,null,n.createElement(Se,{name:"filters"},g=>{let{form:T,push:S,remove:ie}=g,{filters:le}=T.values,ae=c=>{ie(c),i&&i(c)},ne=()=>{let[c=null]=r;S({id:c,operator:"",values:[]}),l&&l(g)};return n.createElement("div",{className:"filter-list"},n.createElement("div",{className:"filter-list-labels"},n.createElement("label",null,F),n.createElement("label",null,s),n.createElement("label",null,f),n.createElement("div",{style:{width:36}})),n.createElement("ul",{className:"filter-list__items"},le.map((c,h)=>{let se=()=>{T.setFieldValue(`filters[${h}].operator`,null),T.setFieldValue(`filters[${h}].values`,null)};return n.createElement("li",{className:"filter-list__item",key:h},n.createElement(Q,{loadOptions:d(c?.id?.id),fieldId:c?.id?.id,filterType:c?.id?.type,onChangeField:se,options:{fields:r,operators:c?.id?.operators,values:c?.id?.values},onRemove:ae,index:h,RemoveFilterButton:re}))})),n.createElement("div",{className:"button-group"},n.createElement("div",{className:"filter-list-button",onClick:ne},w?n.createElement(w,null):n.createElement("button",{type:"button",className:"filter-list-button__add"},p)),n.createElement("div",{className:"filter-list-button"},V?n.createElement(V,null):n.createElement("button",{type:"submit",className:"filter-list-button__save"},u))))})))},te=Oe;export{te as TableFiltersClient};
//# sourceMappingURL=index.js.map
