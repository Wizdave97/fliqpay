(this["webpackJsonpfliq-pay"]=this["webpackJsonpfliq-pay"]||[]).push([[0],{36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var c,l=a(1),n=a.n(l),r=a(5),s=a.n(r),i=a(3),o=a.p+"static/media/logo.13b0d137.svg",u=a.p+"static/media/close.d6994e24.svg",d=a(2),b=a(0),m=function(e){var t=e.steps,a=e.activeIndex,c=n.a.useMemo((function(){return t.length-1}),[t]),l=n.a.useRef(null),r=n.a.useRef(null);return n.a.useEffect((function(){if(r.current&&l.current){var e=a/c*100;r.current.style.width="".concat(e,"%"),l.current.style.left=e?"calc(".concat(e,"% - 4px)"):"-4px"}}),[a,c]),Object(b.jsxs)("div",{className:"w-full h-20 flex flex-col justify-center px-4 sm:px-6 lg:px-12",children:[Object(b.jsxs)("div",{className:"w-full rounded-sm h-1 bg-light-gray relative",children:[Object(b.jsx)("span",{ref:r,className:"absolute left-0 top-0 rounded-full h-full transition-width duration-500 bg-gradient-to-r from-sharp-indigo to-grayish-indigo"}),Object(b.jsx)("span",{ref:l,"data-testid":"dot",className:"bg-dark-gray z-10 rounded-full w-2 h-2 absolute transition-left duration-500",style:{top:"-2px"}})]}),Object(b.jsx)("div",{className:"w-full relative mt-3",children:t.map((function(e,t){var l=t/c*100,n=Object(d.a)(Object(d.a)(Object(d.a)({},t===c&&{left:"100%"}),t>0&&t<c&&{left:"calc(".concat(l,"% - 4px)")}),0===t&&{left:"-4px"}),r=a===t?"text-dark-gray":"text-sleek-gray";return r=t<a?"text-sharp-indigo":r,Object(b.jsx)("span",{className:"text-xs sm:text-sm md:text-md ".concat(r," relative top-0 font-normal"),style:n,children:Object(b.jsx)("span",{className:"absolute px-4",style:{left:"-30px"},children:e})},t)}))})]})},j=a(6),x=a.n(j);!function(e){e.fill="fill",e.outline="outline"}(c||(c={}));var f,h=function(e){var t=e.variant,a=e.label,l=e.onClick,n=e.disabled,r=void 0!==n&&n,s=e.fillColor,i=void 0===s?"bg-sharp-indigo":s,o=t===c.fill?"".concat(i,"  text-white"):"bg-white text-sharp-indigo border border-sharp-indigo",u=r?"opacity-60":"";return Object(b.jsx)("span",{role:"button","aria-disabled":r,className:"rounded-md hover:opacity-70 text-sm py-4 px-4 w-full cursor-pointer flex items-center justify-center ".concat(o," ").concat(u),onClick:function(){r||l()},children:Object(b.jsx)("span",{children:a})})},p=a.p+"static/media/gbp.320bf846.png",O=a.p+"static/media/eu.82531138.png",g=a.p+"static/media/usa.bdcaa975.png",v=a.p+"static/media/aud.10f47fac.png";!function(e){e.USD="USD",e.EUR="EUR",e.GBP="GBP",e.AUD="AUD"}(f||(f={}));var w,N=[{image:g,text:f.USD,value:f.USD},{image:O,text:f.EUR,value:f.EUR},{image:p,text:f.GBP,value:f.GBP},{image:v,text:f.AUD,value:f.AUD}],y={EUR:3.69},C=a.p+"static/media/caret.9a23dcae.svg",E=a(13),k=function(e){var t=e.open,a=e.mountNode,c=void 0===a?document.body:a,l=e.children;return t?s.a.createPortal(l,c):null},D=function(e){var t,a,c=e.options,n=e.value,r=e.onChange,s=e.disabled,o=Object(l.useMemo)((function(){return Object(E.find)(c,(function(e){return e.value===n}))}),[n,c]),u=Object(l.useRef)(null),d=Object(l.useRef)(null),m=Object(l.useState)(!1),j=Object(i.a)(m,2),x=j[0],f=j[1];return t=u,a=function(){return f(!1)},Object(l.useEffect)((function(){var e=function(e){t.current&&!t.current.contains(e.target)&&a(e)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[t,a]),Object(l.useEffect)((function(){if(d.current&&u.current&&x){var e=u.current.getBoundingClientRect();d.current.style.top="".concat(e.height,"px"),d.current.style.width="".concat(e.width,"px"),d.current.classList.remove("hidden"),d.current.classList.add("flex")}}),[x]),Object(b.jsxs)("div",{ref:u,"data-testid":"dropdown-handle",onClick:function(e){e.stopPropagation(),!x&&!s&&f(!0)},className:"bg-blueish-gray w-full h-full py-2 px-4 flex flex-row items-center cursor-pointer relative ".concat(o?"justify-center":"justify-end"),children:[o&&Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("img",{src:null===o||void 0===o?void 0:o.image,className:"w-20p h-20p rounded-full overflow-hidden",alt:""}),Object(b.jsx)("span",{className:"capitalize text-header-blue font-medium ml-2 mr-4",children:null===o||void 0===o?void 0:o.text})]}),Object(b.jsx)("img",{src:C,alt:"",className:"w-3"}),Object(b.jsx)(k,{open:x,childRef:d,mountNode:u.current,children:Object(b.jsx)("div",{ref:d,className:"max-h-80 overflow-y-auto bg-white shadow-md z-20 left-0 flex-col absolute hidden",children:c.map((function(e){var t=e.value,a=e.text,c=e.image;return Object(b.jsxs)("div",{className:"flex flex-row px-3 py-2 text-header-blue hover:bg-ceramic-gray cursor-pointer ".concat(t===(null===o||void 0===o?void 0:o.value)?"bg-ceramic-gray text-white hover:opacity-70":""),onClick:function(e){e.stopPropagation(),f(!1),r(t)},children:[Object(b.jsx)("img",{src:c,className:"w-20p h-20p rounded-full overflow-hidden",alt:""}),Object(b.jsx)("span",{className:"capitalize  font-medium mx-2",children:a})]},t)}))})})]})},T=function(e){var t=e.label,a=e.dropdownValue,c=e.inputValue,l=e.onChange,n=e.onChangeInput,r=e.disabled,s=e.options,i=e.disableDropdown,o=e.inputType,u=void 0===o?"number":o;return Object(b.jsxs)("div",{className:"w-full border border-ceramic-gray rounded-md p-0 m-0 flex flex-row",children:[Object(b.jsxs)("label",{className:"w-3/5 flex flex-col py-2 px-4",children:[Object(b.jsx)("span",{className:"text-sharp-gray mb-1",children:t}),Object(b.jsx)("input",{"data-testid":"dropdown-input",type:u,disabled:r,className:"outline-hidden appearance-none bg-transparent text-header-blue text-lg",value:c,onChange:function(e){e.persist(),e.target.value.length>7||n(e.target.value)}})]}),Object(b.jsx)("div",{className:"w-2/5 h-full",children:Object(b.jsx)(D,{disabled:i,options:s,value:a,onChange:l})})]})},R=a.p+"static/media/minus.fb18a807.svg",S=a.p+"static/media/eq.2559c76b.svg",I=a.p+"static/media/mul.d91dab21.svg",U=function(e){var t=e.rate,a=e.fee,c=e.amount,l=e.currency;return Object(b.jsxs)("div",{className:"w-full flex flex-col relative py-4",children:[Object(b.jsx)("div",{className:"w-0.5 bg-light-gray h-full absolute left-9mm top-0"}),Object(b.jsxs)("div",{className:"flex flex-row text-sharp-gray hover:text-header-blue cursor-pointer",children:[Object(b.jsx)("div",{className:"w-20p h-20p z-10",children:Object(b.jsx)("img",{src:R,className:"w-full h-full",alt:""})}),Object(b.jsxs)("span",{className:"mx-4 w-24 font-medium capitalize text-xs md:text-sm",children:[a," ",l]}),Object(b.jsx)("span",{className:"text-xs md:text-sm",children:"Transfer fee"})]}),Object(b.jsxs)("div",{className:"flex flex-row text-sharp-gray my-6 hover:text-header-blue cursor-pointer",children:[Object(b.jsx)("div",{className:"w-20p h-20p z-10",children:Object(b.jsx)("img",{src:S,className:"w-full h-full",alt:""})}),Object(b.jsxs)("span",{className:"mx-4 min-w-24 font-medium capitalize text-xs md:text-sm",children:[(new Intl.NumberFormat).format(+c.toFixed(2))," ",l]}),Object(b.jsx)("span",{className:"text-xs md:text-sm",children:"Amount we'll convert"})]}),Object(b.jsxs)("div",{className:"flex flex-row text-sharp-gray hover:text-header-blue cursor-pointer",children:[Object(b.jsx)("div",{className:"w-20p h-20p z-10",children:Object(b.jsx)("img",{src:I,className:"w-full h-full",alt:""})}),Object(b.jsx)("span",{className:"mx-4 w-24 font-medium text-xs md:text-sm",children:t}),Object(b.jsx)("span",{className:"text-xs md:text-sm",children:"Guaranteed rate (1hr)"})]})]})},A="1c0b8b07e56db22c656666e2c174ea54",F="https://data.fixer.io/api/latest?access_key=".concat(A),P=Object.values(f),B=function(e){var t=e.onCompleted,a=e.initData,n=Object(l.useState)(a.inputAmount),r=Object(i.a)(n,2),s=r[0],o=r[1],u=Object(l.useState)(a.convertedAmount),d=Object(i.a)(u,2),m=d[0],j=d[1],f=Object(l.useState)(a.currencyInput),p=Object(i.a)(f,2),O=p[0],g=p[1],v=Object(l.useState)(a.currencyOutput),w=Object(i.a)(v,2),C=w[0],E=w[1],k=Object(l.useState)(!1),D=Object(i.a)(k,2),R=D[0],S=D[1],I=function(e){var t=Object(l.useState)(null),a=Object(i.a)(t,2),c=a[0],n=a[1],r=Object(l.useState)(!1),s=Object(i.a)(r,2),o=s[0],u=s[1],d=Object(l.useState)(!1),b=Object(i.a)(d,2),m=b[0],j=b[1];return Object(l.useEffect)((function(){if(P.includes(e)){var t=P.filter((function(t){return t!==e})).join(",");u(!0),fetch("".concat(F,"&base=").concat(e,"&symbols=").concat(t)).then((function(e){return e.json()})).then((function(e){n(e.rates),u(!1),j(!1)})).catch((function(){u(!1),j(!0)}))}}),[e]),Object(l.useMemo)((function(){return{loading:o,data:c,error:m}}),[o,m,c])}(O).data;return Object(l.useEffect)((function(){if(I&&O&&C&&+s)if(+s<=y[O])j("");else{var e=(+s-y[O])*+I[C];j("".concat((new Intl.NumberFormat).format(+e.toFixed(2))))}else j("")}),[s,O,C,I]),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"rounded-md border bg-white border-ceramic-gray p-8 w-full md:w-508 flex flex-col",children:[Object(b.jsx)("h1",{className:"w-full text-header-blue text-lg mb-1",children:"One-time Payout"}),Object(b.jsx)("h2",{className:"w-full text-subheader-gray text-sm mb-6",children:"Send money internationally"}),Object(b.jsx)(T,{disableDropdown:!1,options:[N[1]],label:"You send",onChangeInput:o,inputValue:s,onChange:g,dropdownValue:O}),(!I||!C)&&Object(b.jsx)("div",{className:"h-8 w-full"}),I&&C&&Object(b.jsx)("div",{className:"w-full px-3",children:Object(b.jsx)(U,{amount:+s>y[O]?+s-y[O]:0,currency:O,rate:null===I||void 0===I?void 0:I[C],fee:y[O]})}),Object(b.jsx)(T,{inputType:"string",disableDropdown:!O||!s,options:N.filter((function(e){return e.value!==O})),disabled:!0,label:"Recipient gets",dropdownValue:C,inputValue:m,onChangeInput:j,onChange:E}),Object(b.jsxs)("div",{className:"w-full grid grid-cols-2 gap-3 mt-6",children:[Object(b.jsx)(h,{variant:c.outline,label:"Compare Rates",onClick:function(){return S(!0)}}),Object(b.jsx)(h,{disabled:!s||!m||!C||!C,variant:c.fill,label:"Continue",onClick:function(){return t({currencyInput:O,currencyOutput:C,inputAmount:s,convertedAmount:m,fees:y[O].toString(),rate:null===I||void 0===I?void 0:I[C]})}})]})]}),Object(b.jsx)(x.a,{ariaHideApp:!1,isOpen:R,style:{overlay:{zIndex:40}},onRequestClose:function(){return S(!1)},className:"w-full absolute top-1/4 left-1/4 md:w-1/2 py-12 px-8 outline-hidden bg-white border-0 shadow-md",children:Object(b.jsxs)("div",{className:"w-full flex flex-col bg-white",children:[Object(b.jsx)("h1",{className:"w-full text-header-blue text-lg mb-1 text-center",children:"Compare rates of top merchants"}),Object(b.jsxs)("div",{className:"w-full p-4 grid grid-cols-4 my-2 gap-4 place-content-center",children:[Object(b.jsx)("div",{className:"text-lg text-contrasty-gray",children:"Merchant"}),Object(b.jsx)("div",{className:"text-lg text-contrasty-gray mx-2",children:"USD"}),Object(b.jsx)("div",{className:"text-lg text-contrasty-gray mx-2",children:"GBP"}),Object(b.jsx)("div",{className:"text-lg text-contrasty-gray mx-2",children:"AUD"})]}),Object(b.jsxs)("div",{className:"w-full p-4 grid grid-cols-4 my-2 gap-4 place-content-center",children:[Object(b.jsx)("div",{className:"text-lg font-medium text-header-blue",children:"Fliqpay"}),Object(b.jsx)("div",{className:"text-sm text-sharp-gray mx-2 align-middle",children:null===I||void 0===I?void 0:I.USD}),Object(b.jsx)("div",{className:"text-sm text-sharp-gray mx-2 align-middle",children:null===I||void 0===I?void 0:I.GBP}),Object(b.jsx)("div",{className:"text-sm text-sharp-gray mx-2 align-middle",children:null===I||void 0===I?void 0:I.AUD})]}),Object(b.jsxs)("div",{className:"w-full p-4 grid grid-cols-4 my-2 gap-4 place-content-center",children:[Object(b.jsx)("div",{className:"text-lg font-medium text-header-blue",children:"Wise"}),Object(b.jsx)("div",{className:"text-sm text-sharp-gray mx-2 align-middle",children:"1.243"}),Object(b.jsx)("div",{className:"text-sm text-sharp-gray mx-2 align-middle",children:"2.442"}),Object(b.jsx)("div",{className:"text-sm text-sharp-gray mx-2 align-middle",children:"2.567"})]})]})})]})},Y=a(4),z=function(e){var t=e.label,a=e.placeholder,c=e.onChange,l=e.value,n=e.type,r=void 0===n?"text":n,s=e.error;return Object(b.jsx)("div",{className:"w-full p-0 m-0",children:Object(b.jsxs)("label",{className:"w-full h-full flex flex-col p-0 m-0",children:[Object(b.jsx)("span",{className:"text-sm text-sleek-gray mb-1",children:t}),Object(b.jsx)("input",{"data-testid":"common-input",type:r,value:l,className:"text-header-blue w-full py-2 px-3 border border-ceramic-gray rounded-sm outline-hidden placeholder-washed-gray",placeholder:a,onChange:function(e){e.persist(),c(e.target.value)}}),s&&Object(b.jsx)("span",{className:"w-full mt-2 text-xs text-red-700 italic font-bold",children:s})]})})};!function(e){e.EUROPE="EUROPE",e.OTHER="OTHER"}(w||(w={}));var G=function(e){var t=e.onCompleted,a=e.data,n=Object(l.useState)(a.region),r=Object(i.a)(n,2),s=r[0],o=r[1],u=Object(l.useState)(a),m=Object(i.a)(u,2),j=m[0],x=m[1],f=Object(l.useState)({swift:"",fullName:"",email:"",iban:""}),p=Object(i.a)(f,2),O=p[0],g=p[1],v=j.email,N=j.fullName,y=j.swift,C=j.iban,E=Object(l.useCallback)((function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};switch(e){case"email":t.trim().match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)?g((function(e){return Object(d.a)(Object(d.a)({},e),{},{email:""})})):(g((function(e){return Object(d.a)(Object(d.a)({},e),{},{email:"Please use a valid email"})})),a.email=!0);break;case"fullName":t.trim().length<3||t.trim().length>255?(g((function(e){return Object(d.a)(Object(d.a)({},e),{},{fullName:"Name supplied is not valid, minimum length is 3 and maximum is 255"})})),a.fullName=!0):g((function(e){return Object(d.a)(Object(d.a)({},e),{},{fullName:""})}));break;case"iban":t.trim().length<5||t.trim().length>34?(g((function(e){return Object(d.a)(Object(d.a)({},e),{},{iban:"IBAN supplied is not valid, minimum length is 5 and maximum is 34"})})),a.iban=!0):g((function(e){return Object(d.a)(Object(d.a)({},e),{},{iban:""})}));break;case"swift":t.trim().length<5||t.trim().length>11?(g((function(e){return Object(d.a)(Object(d.a)({},e),{},{swift:"Swift code supplied is not valid, minimum length is 8 and maximum is 11"})})),a.swift=!0):g((function(e){return Object(d.a)(Object(d.a)({},e),{},{swift:""})}))}}),[]),k=Object(l.useCallback)((function(e){return function(t){x((function(a){return Object(d.a)(Object(d.a)({},a),{},Object(Y.a)({},e,t))})),E(e,t)}}),[E]),D=Object(l.useCallback)((function(){var e={};switch(Object.entries(j).forEach((function(t){var a=Object(i.a)(t,2),c=a[0],l=a[1];("email"!==c||l.trim())&&E(c,l,e)})),s){case w.EUROPE:if(e.fullName||e.iban||e.email)return;break;case w.OTHER:if(e.fullName||e.iban||e.swift||e.email)return}t(Object(d.a)(Object(d.a)({},j),{},{region:s}))}),[j,E,t,s]);return Object(b.jsxs)("div",{className:"rounded-md border bg-white border-ceramic-gray p-8 w-full md:w-508 flex flex-col",children:[Object(b.jsx)("h1",{className:"w-full text-header-blue text-lg mb-1",children:"Your Recipient"}),Object(b.jsx)("h2",{className:"w-full text-subheader-gray text-sm",children:"Who are you sending money to?"}),Object(b.jsx)("span",{className:"w-full h-0.5 bg-ceramic-gray  my-2"}),Object(b.jsx)(z,{label:"Their email (optional)",value:v,onChange:k("email"),error:O.email}),Object(b.jsx)("div",{className:"w-full h-4"}),Object(b.jsx)(z,{label:"Full name of the account holder",value:N,onChange:k("fullName"),error:O.fullName}),Object(b.jsx)("div",{className:"w-full h-4"}),Object(b.jsx)("h1",{className:"w-full text-header-blue text-lg mb-1",children:"Bank Details"}),Object(b.jsx)("span",{className:"w-full h-0.5 bg-ceramic-gray  my-2"}),Object(b.jsxs)("div",{className:"w-full flex flex-row relative h-10",children:[Object(b.jsx)("div",{role:"tab",onClick:function(){return o(w.EUROPE)},className:"w-36 py-1 mr-2 z-10 h-full flex items-center cursor-pointer justify-center  ".concat(s===w.EUROPE?"text-sharp-indigo border-b-2 border-sharp-indigo":"text-sleek-gray"),children:"Inside Europe"}),Object(b.jsx)("div",{role:"tab",onClick:function(){return o(w.OTHER)},className:"w-36 py-1 z-10 flex items-center justify-center cursor-pointer  ".concat(s===w.OTHER?"text-sharp-indigo border-b-2 border-sharp-indigo":"text-sleek-gray"),children:"Outside Europe"}),Object(b.jsx)("div",{className:"w-full bg-ceramic-gray h-0.5 absolute bottom-0 left-0"})]}),Object(b.jsx)("div",{className:"w-full h-4"}),s===w.EUROPE?Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(z,{placeholder:"DE98370440018929829032",label:"IBAN",value:C,onChange:k("iban"),error:O.iban})}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(z,{label:"SWIFT / BIC code",placeholder:"BUKBGB22",value:y,onChange:k("swift"),error:O.swift}),Object(b.jsx)("div",{className:"w-full h-4"}),Object(b.jsx)(z,{label:"IBAN / Account Number",placeholder:"01234567891",value:C,onChange:k("iban"),error:O.iban})]}),Object(b.jsx)("div",{className:"w-full h-4"}),Object(b.jsx)(h,{variant:c.fill,label:"Continue",onClick:D})]})},H=function(e){var t=e.bold,a=void 0!==t&&t,c=e.leftText,l=e.rightText;return Object(b.jsxs)("div",{className:"w-full flex justify-between my-1 items-center",children:[Object(b.jsx)("span",{className:"text-left max-w-1/2 text-xs truncate text-sharp-gray pr-2",children:c}),Object(b.jsx)("span",{className:"text-right max-w-1/2 text-xs truncate text-contrasty-gray pl-2 ".concat(a?"text-lg font-medium":""),children:l})]})},L=function(e){var t=e.payoutData,a=t.inputAmount,l=t.currencyInput,n=t.currencyOutput,r=t.convertedAmount,s=t.fees,i=t.rate,o=e.recipientData,u=e.onCompleted;return Object(b.jsxs)("div",{className:"rounded-md border bg-white border-ceramic-gray p-8 w-full md:w-508 flex flex-col",children:[Object(b.jsx)("h1",{className:"w-full text-header-blue text-lg mb-1",children:"Review details of your transfer"}),Object(b.jsx)("span",{className:"w-full h-0.5 bg-ceramic-gray  my-4"}),Object(b.jsxs)("div",{className:"w-full flex flex-col",children:[Object(b.jsx)(H,{leftText:"You send",bold:!0,rightText:"".concat(a," ").concat(l)}),Object(b.jsx)(H,{leftText:"Total fees (included)",rightText:"".concat(s," ").concat(l)}),Object(b.jsx)(H,{leftText:"Amount we'll convert",rightText:"".concat((new Intl.NumberFormat).format(+(+a-+s).toFixed(2))," ").concat(l)}),Object(b.jsx)(H,{leftText:"Guaranteed rate",rightText:i}),Object(b.jsx)(H,{leftText:"".concat(o.fullName.split(" ")[0]," gets"),bold:!0,rightText:"".concat(r," ").concat(n)})]}),Object(b.jsx)("span",{className:"w-full h-0.5 bg-ceramic-gray  my-4"}),Object(b.jsxs)("div",{className:"w-full flex flex-col",children:[Object(b.jsx)(H,{leftText:"Name",rightText:o.fullName}),o.email&&Object(b.jsx)(H,{leftText:"Email",rightText:o.email}),Object(b.jsx)(H,{leftText:"IBAN / Account Number",rightText:o.iban}),o.region===w.OTHER&&Object(b.jsx)(H,{leftText:"SWIFT / BIC code",rightText:o.swift})]}),Object(b.jsx)("div",{className:"w-full h-4"}),Object(b.jsx)(h,{variant:c.fill,fillColor:"bg-bright-green",label:"Continue",onClick:u})]})},V=function(e){var t=e.onCompleted,a=Object(l.useState)(!1),n=Object(i.a)(a,2),r=n[0],s=n[1],o=Object(l.useState)({cardNumber:"",cvv:"",expDate:"",expYear:""}),u=Object(i.a)(o,2),m=u[0],j=u[1],f=Object(l.useState)({cardNumber:"",cvv:"",expDate:"",expYear:""}),p=Object(i.a)(f,2),O=p[0],g=p[1],v=m.cardNumber,w=m.cvv,N=m.expDate,y=m.expYear,C=Object(l.useCallback)((function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};switch(e){case"cardNumber":16!==t.trim().length?(g((function(e){return Object(d.a)(Object(d.a)({},e),{},{cardNumber:"Invalid card number"})})),a.cardNumber=!0):g((function(e){return Object(d.a)(Object(d.a)({},e),{},{cardNumber:""})}));break;case"cvv":3!==t.trim().length?(g((function(e){return Object(d.a)(Object(d.a)({},e),{},{cvv:"Invalid cvv"})})),a.cvv=!0):g((function(e){return Object(d.a)(Object(d.a)({},e),{},{cvv:""})}));break;case"expDate":var c=t.trim().split("/");5===t.trim().length&&2===t.trim().indexOf("/")&&+c[0].trim()>0&&+c[0].trim()<=12&&+c[1].trim()>0&&+c[1].trim()<=31?g((function(e){return Object(d.a)(Object(d.a)({},e),{},{expDate:""})})):(g((function(e){return Object(d.a)(Object(d.a)({},e),{},{expDate:"Invalid date supplied"})})),a.expDate=!0);break;case"expYear":+t.trim()<(new Date).getFullYear()?(g((function(e){return Object(d.a)(Object(d.a)({},e),{},{expYear:"Invalid year"})})),a.expYear=!0):g((function(e){return Object(d.a)(Object(d.a)({},e),{},{expYear:""})}))}}),[]),E=Object(l.useCallback)((function(e){return function(t){j((function(a){return Object(d.a)(Object(d.a)({},a),{},Object(Y.a)({},e,t))})),C(e,t)}}),[C]),k=Object(l.useCallback)((function(){var e={};Object.entries(m).forEach((function(t){var a=Object(i.a)(t,2),c=a[0],l=a[1];C(c,l,e)})),Object.values(e).length||(t(m),s(!0))}),[m,C,t]);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:"rounded-md border bg-white border-ceramic-gray p-8 w-full md:w-508 flex flex-col",children:[Object(b.jsx)("h1",{className:"w-full text-header-blue text-lg mb-1",children:"Your Card Details"}),Object(b.jsx)("h2",{className:"w-full text-subheader-gray text-sm",children:"Only mastercards are accepted"}),Object(b.jsx)("span",{className:"w-full h-0.5 bg-ceramic-gray  my-2"}),Object(b.jsx)(z,{label:"Card number",value:v,onChange:E("cardNumber"),error:O.cardNumber}),Object(b.jsx)("div",{className:"w-full h-4"}),Object(b.jsxs)("div",{className:"w-full grid grid-cols-2 gap-4",children:[Object(b.jsx)(z,{label:"Expiry Date",placeholder:"01/21",value:N,onChange:E("expDate"),error:O.expDate}),Object(b.jsx)(z,{label:"Expiry year",placeholder:"2021",value:y,onChange:E("expYear"),error:O.expYear})]}),Object(b.jsx)("div",{className:"w-full h-4"}),Object(b.jsx)(z,{label:"CVV",value:w,placeholder:"342",onChange:E("cvv"),error:O.cvv}),Object(b.jsx)("div",{className:"w-full h-4"}),Object(b.jsx)(h,{variant:c.fill,fillColor:"bg-bright-green",label:"Complete transaction",onClick:k})]}),Object(b.jsx)(x.a,{ariaHideApp:!1,isOpen:r,style:{overlay:{zIndex:40}},onRequestClose:function(){return s(!1)},className:"w-full absolute top-1/4 left-0 md:left-1/4 md:w-1/2 py-12 px-8 outline-hidden bg-white border-0 shadow-md",children:Object(b.jsxs)("div",{className:"w-full flex flex-col bg-white",children:[Object(b.jsx)("h1",{className:"w-full text-header-blue text-lg mb-1 text-center",children:"Notification"}),Object(b.jsx)("div",{className:"w-full p-8 flex items-center justify-center",children:Object(b.jsx)("div",{className:"text-lg text-contrasty-gray mx-2",children:"Congratulations, the transaction was successful"})})]})})]})},q=a(14),M=a(15),W=a(17),J=a(16),K=function(e){Object(W.a)(a,e);var t=Object(J.a)(a);function a(e){var c;return Object(q.a)(this,a),(c=t.call(this,e)).state={hasError:!1},c}return Object(M.a)(a,[{key:"componentDidCatch",value:function(e,t){console.error(e,t)}},{key:"render",value:function(){return this.state.hasError?Object(b.jsx)("h1",{children:"Something went wrong."}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),a}(n.a.Component),$=["Amount","Recipient","Review","Pay"],_=function(){var e=Object(l.useState)(0),t=Object(i.a)(e,2),a=t[0],c=t[1],n=Object(l.useState)({currencyInput:f.EUR,currencyOutput:"",inputAmount:"",convertedAmount:"",fees:"",rate:""}),r=Object(i.a)(n,2),s=r[0],d=r[1],j=Object(l.useState)({swift:"",fullName:"",email:"",iban:"",region:w.EUROPE}),x=Object(i.a)(j,2),h=x[0],p=x[1];return Object(b.jsx)(K,{children:Object(b.jsxs)("div",{className:"w-full h-full bg-white m-0 p-0",children:[Object(b.jsxs)("div",{role:"navigation",className:"bg-white shadow-md h-24 w-full px-2 py-3 md:px-16 lg:px-48 xl:px-64 flex flex-row items-center justify-between",children:[Object(b.jsx)("div",{className:"w-20 h-full mr-4 flex items-center",children:Object(b.jsx)("img",{src:o,alt:"Fliq pay",className:"w-full"})}),Object(b.jsx)(m,{activeIndex:a,steps:$}),Object(b.jsx)("div",{className:"w-4 h-full ml-4 flex items-center",role:"button",onClick:function(){0!==a&&c(a-1)},children:Object(b.jsx)("img",{src:u,alt:"",className:"w-full"})})]}),Object(b.jsxs)("div",{className:"my-6 w-full px-2 py-3 md:px-16 lg:px-48 xl:px-64 flex justify-center",children:[0===a&&Object(b.jsx)(B,{initData:s,onCompleted:function(e){d(e),c(a+1)}}),1===a&&Object(b.jsx)(G,{data:h,onCompleted:function(e){p(e),c(a+1)}}),2===a&&Object(b.jsx)(L,{payoutData:s,recipientData:h,onCompleted:function(){return c(a+1)}}),3===a&&Object(b.jsx)(V,{onCompleted:function(){}})]})]})})},Q=(a(36),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,38)).then((function(t){var a=t.getCLS,c=t.getFID,l=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),c(e),l(e),n(e),r(e)}))});s.a.render(Object(b.jsx)(n.a.StrictMode,{children:Object(b.jsx)(_,{})}),document.getElementById("root")),Q()}},[[37,1,2]]]);
//# sourceMappingURL=main.440ee6f1.chunk.js.map