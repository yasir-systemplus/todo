(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{1551:function(e,t,s){"use strict";s.r(t);var n=s(0),r=s.n(n),a=s(20),c=s.n(a),i=(s(56),s(21)),o=s(22),l=s(30),d=s(29),j=s(1),m=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(i.a)(this,s),(n=t.call(this,e)).increase=function(){n.setState((function(e){return{count:e.count+1}}))},n.getSnapshotBeforeUpdate=function(e,t){return console.log("getSnapshotBeforeUpdate"),null},n.state={count:0},console.log("contructor: ",n.state.count),n}return Object(o.a)(s,[{key:"shouldComponentUpdate",value:function(e,t){return console.log("shouldComponentUpdate"),!0}},{key:"render",value:function(){return console.log("Rendering: Component is mounting to DOM"),Object(j.jsxs)(r.a.Fragment,{children:[Object(j.jsx)("p",{children:"Use console to see the messages. "}),Object(j.jsx)("div",{children:this.state.count}),Object(j.jsx)("button",{className:"border-2",onClick:this.increase,children:"Increase"})]})}},{key:"componentDidMount",value:function(){console.log("Component did mount: ",this.state.count)}},{key:"componentDidUpdate",value:function(e,t){console.log("componentDidUpdate")}}],[{key:"getDerivedStateFromProps",value:function(e,t){return console.log("getDrivedStateFromProps: Updating state"),null}}]),s}(n.Component);var b=s(4),x=s(14),u=s(16),h=s(51);function g(e){var t=e.title,s=e.color,n=e.onDelete;return Object(j.jsxs)("div",{className:"mr-2 bg-".concat(s,"-300 rounded-md inline-block px-2 py-1/2 "),children:[Object(j.jsx)("p",{className:"text-sm inline",children:t}),"function"==typeof n&&Object(j.jsx)(h.a,{className:"h-3 w-3 inline",onClick:n})]})}var f=function(){return["grey","red","yellow","green","blue","indigo","purple","pink"][(7*Math.random()+0).toFixed(0)]};function p(e){var t=e.todo,s=t.title,r=t.tags,a=t.id,c=Object(n.useState)(!1),i=Object(u.a)(c,2),o=i[0],l=i[1];return Object(j.jsxs)("div",{draggable:!0,onDragStart:function(e){e.dataTransfer.setData("id",a.toString()),l(!0)},onDragEnd:function(e){e.preventDefault(),l(!1)},className:"todo mb-3 rounded-md shadow-sm hover:shadow-md bg-white p-3 cursor-move border-t-2 ".concat(o&&"opacity-30"),children:[Object(j.jsx)("p",{className:"text-md",children:s}),Object(j.jsx)("div",{className:"flex-1 mt-3 space-y-1",children:r.map((function(e){return Object(j.jsx)(g,{color:f(),title:e.title},e.id)}))})]})}var O=s(1554),y=s(1553);function v(e){var t=e.onAddTodo,s=e.open,r=e.onToggle,a=Object(n.useRef)(null),i=Object(n.useState)({title:"",tags:[]}),o=Object(u.a)(i,2),l=o[0],d=o[1];return c.a.createPortal(Object(j.jsx)(O.a.Root,{show:s,as:n.Fragment,children:Object(j.jsx)(y.a,{as:"div",className:"fixed z-10 inset-0 overflow-y-auto",onClose:r,children:Object(j.jsxs)("div",{className:"flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0",children:[Object(j.jsx)(O.a.Child,{as:n.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:Object(j.jsx)(y.a.Overlay,{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})}),Object(j.jsx)("span",{className:"hidden sm:inline-block sm:align-middle sm:h-screen","aria-hidden":"true",children:"\u200b"}),Object(j.jsx)(O.a.Child,{as:n.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:Object(j.jsxs)("div",{className:"inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full",children:[Object(j.jsx)("div",{className:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4",children:Object(j.jsxs)("div",{className:"flex flex-col px-6 py-5 bg-gray-50",children:[Object(j.jsx)("p",{className:"mb-2 font-semibold text-gray-700",children:"Todo"}),Object(j.jsx)("textarea",{type:"text",name:"",placeholder:"Type description",className:"p-2 mb-5 bg-white border border-gray-200 rounded shadow-sm h-36",onChange:function(e){var t=e.target.value;t&&d(Object(b.a)(Object(b.a)({},l),{},{title:t.trim()}))}}),Object(j.jsx)("p",{className:"mb-2 font-semibold text-gray-700",children:"Tags"}),Object(j.jsx)("div",{className:"flex flex-row items-center justify-between  bg-white border border-gray-200 rounded shadow-sm",children:Object(j.jsx)("input",{type:"text",className:"w-full p-2",ref:a,onKeyDown:function(e){var t=a.current.value;"Enter"===e.key&&t&&(d(Object(b.a)(Object(b.a)({},l),{},{tags:[].concat(Object(x.a)(l.tags),[{title:t.trim(),id:Date.now()}])})),a.current.value="")}})}),Object(j.jsx)("div",{className:"flex flex-row items-center justify-start mt-3",children:l.tags.map((function(e){return Object(j.jsx)(g,{title:e.title,color:f(),onDelete:function(){return t=e.id,void d((function(e){return Object(b.a)(Object(b.a)({},e),{},{tags:e.tags.filter((function(e){return e.id!==t}))})}));var t}},e.id)}))})]})}),Object(j.jsxs)("div",{className:"bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse",children:[Object(j.jsx)("button",{type:"button",className:"w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-500 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gree-500 sm:ml-3 sm:w-auto sm:text-sm",onClick:function(){l.title&&(t(l),r(!1))},children:"Add Todo"}),Object(j.jsx)("button",{type:"button",className:"mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm",onClick:function(){return r(!1)},children:"Cancel"})]})]})})]})})}),document.getElementById("modal-portal"))}function N(e){return Object(j.jsx)("div",{style:{height:120},className:"mb-3 rounded-md border-dashed border flex justify-center items-center p-3 border-8 block min-w-full",children:Object(j.jsx)("p",{className:"text-gray-300",children:"Drop Here"})})}function w(e){var t=e.todos,s=e.length,a=e.title,c=e.type,i=e.onMove,o=e.onAddTodo,l=Object(n.useState)(!1),d=Object(u.a)(l,2),m=d[0],x=d[1];return Object(j.jsxs)(r.a.Fragment,{children:[m&&Object(j.jsx)(v,{onAddTodo:function(e){return o(Object(b.a)(Object(b.a)({},e),{},{type:c}))},open:m,onToggle:function(e){x(e)}}),Object(j.jsxs)("div",{className:"flex-1 bg-gray-100 rounded-sm p-2 dragover",onDragOver:function(e){e.preventDefault()},onDrop:function(e){e.preventDefault();var t=e.dataTransfer.getData("id");i(t,c)},children:[Object(j.jsxs)("header",{className:"mb-2",children:[Object(j.jsxs)("div",{className:"flex flex-row justify-between items-center",children:[Object(j.jsx)("div",{className:"font-semibold",children:a}),Object(j.jsx)("p",{className:"bg-gray-300 text-gray-500 text-sm rounded-lg px-2 py-1/2",children:t.length})]}),Object(j.jsx)("div",{onClick:function(){return x(!0)},className:"bg-gray-300 text-gray-500 rounded-lg px-2 text-center tex-lg my-2 hover:shadow-sm",children:"+"})]}),Object(j.jsxs)("div",{children:[t.map((function(e){return Object(j.jsx)(p,{todo:e},e.id)})),s>0&&Object(j.jsx)(N,{})]})]})]})}function k(e){var t=Object(n.useState)([]),s=Object(u.a)(t,2),a=s[0],c=s[1],i=function(e){c([].concat(Object(x.a)(a),[Object(b.a)(Object(b.a)({},e),{},{id:Date.now()})]))},o=function(e,t){var s=a.map((function(s){return e==s.id&&(s.type=t),s}));c(Object(x.a)(s))};return console.log(a),Object(j.jsx)(r.a.Fragment,{children:Object(j.jsx)("div",{className:"bg-gray-200 min-h-screen ",children:Object(j.jsxs)("div",{className:"container shadow-md relative top-9 rounded-md p-4 bg-gray-50 w-2/3 mx-auto",children:[Object(j.jsx)("h1",{className:"text-xl font-bold",children:"System Plus Todo App"}),Object(j.jsxs)("div",{className:"flex flex-row space-x-2 mt-5",children:[Object(j.jsx)(w,{title:"\ud83d\udca1 Ideas",todos:a.filter((function(e){return"ideas"===e.type})),onAddTodo:i,type:"ideas",onMove:o,length:a.length}),Object(j.jsx)(w,{title:"\ud83d\udc68\u200d\ud83d\udcbb In Progress",todos:a.filter((function(e){return"progress"===e.type})),onAddTodo:i,type:"progress",onMove:o,length:a.length}),Object(j.jsx)(w,{title:"\ud83c\udfc1 Finished",todos:a.filter((function(e){return"finished"===e.type})),onAddTodo:i,type:"finished",onMove:o,length:a.length})]})]})})})}var C=s(18),P=function(){for(var e=[],t=0;t<37;t++)e.push({jobTitle:C.name.jobTitle(),jobDescriptor:C.name.jobDescriptor(),title:C.name.title(),firstName:C.name.firstName(),lastName:C.name.lastName(),email:C.internet.email(),avatar:C.internet.avatar()});return e},S=s(13),T=s(23),D=s.n(T),B=function(e){var t=e.count,s=e.pageSize,n=e.selected,r=e.currentPage,a=e.onPageChange,c=e.onPrevPage,i=e.onNextPage,o=Math.ceil(t/s);if(1==o)return null;var l=T.range(1,o+1);return Object(j.jsxs)("div",{className:"bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6",children:[Object(j.jsxs)("div",{className:"flex-1 flex justify-between sm:hidden",children:[Object(j.jsx)("a",{href:"#",className:"relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50",children:"Previous"}),Object(j.jsx)("a",{href:"#",className:"ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50",children:"Next"})]}),Object(j.jsxs)("div",{className:"hidden sm:flex-1 sm:flex sm:items-center sm:justify-between",children:[Object(j.jsx)("div",{children:Object(j.jsxs)("p",{className:"text-sm text-gray-700",children:["Showing"," ",Object(j.jsx)("span",{className:"font-medium",children:(r-1)*s+1})," ","to"," ",Object(j.jsx)("span",{className:"font-medium",children:(r-1)*s+n})," ","of ",Object(j.jsx)("span",{className:"font-medium",children:t})," results"]})}),Object(j.jsx)("div",{children:Object(j.jsxs)("nav",{className:"relative z-0 inline-flex rounded-md shadow-sm -space-x-px ".concat(1==r?"bg-grey":""),"aria-label":"Pagination",children:[Object(j.jsxs)("a",{onClick:function(){return 1==r?null:c()},className:"relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50",children:[Object(j.jsx)("span",{className:"sr-only",children:"Previous"}),Object(j.jsx)(S.b,{className:"h-5 w-5","aria-hidden":"true"})]}),l.map((function(e){return Object(j.jsx)("a",{className:e==r?"z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium":"bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium",onClick:function(){return a(e)},children:e},e)})),r<o&&Object(j.jsxs)("a",{onClick:i,className:"relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50",children:[Object(j.jsx)("span",{className:"sr-only",children:"Next"}),Object(j.jsx)(S.c,{className:"h-5 w-5","aria-hidden":"true"})]})]})})]})]})};var F=function(e){var t=e.contacts;return Object(j.jsx)("tbody",{className:"bg-white divide-y divide-gray-200",children:t.map((function(e){return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{className:"px-6 py-4 whitespace-nowrap",children:Object(j.jsxs)("div",{className:"flex items-center",children:[Object(j.jsx)("div",{className:"flex-shrink-0 h-10 w-10",children:Object(j.jsx)("img",{className:"h-10 w-10 rounded-full",src:e.avatar,alt:""})}),Object(j.jsxs)("div",{className:"ml-4",children:[Object(j.jsx)("div",{className:"text-sm font-medium text-gray-900",children:e.firstName+" "+e.lastName}),Object(j.jsx)("div",{className:"text-sm text-gray-500",children:e.email})]})]})}),Object(j.jsxs)("td",{className:"px-6 py-4 whitespace-nowrap",children:[Object(j.jsx)("div",{className:"text-sm text-gray-900",children:e.title}),Object(j.jsx)("div",{className:"text-sm text-gray-500",children:e.jobDescriptor})]}),Object(j.jsx)("td",{className:"px-6 py-4 whitespace-nowrap",children:Object(j.jsx)("span",{className:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800",children:"Active"})}),Object(j.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-500",children:e.jobTitle}),Object(j.jsx)("td",{className:"px-6 py-4 whitespace-nowrap text-right text-sm font-medium",children:Object(j.jsx)("a",{href:"#",className:"text-indigo-600 hover:text-indigo-900",children:"Edit"})})]},e.email)}))})},A=function(e){var t=e.onSort,s=e.sortByItem,n=e.order;return Object(j.jsx)("thead",{className:"bg-gray-50",children:Object(j.jsxs)("tr",{className:"flex flex-row",children:[Object(j.jsxs)("th",{onClick:function(){return t("firstName")},scope:"col",className:"flex flex-row justify-between items-center px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:["Name",Object(j.jsxs)("div",{className:"child",children:[Object(j.jsx)(S.d,{width:"20",height:"20",color:"firstName"===s&&"asc"===n?"black":""}),Object(j.jsx)(S.a,{width:"20",height:"20",color:"firstName"===s&&"desc"===n?"black":""})]})]}),Object(j.jsxs)("th",{onClick:function(){return t("title")},scope:"col",className:"flex flex-row justify-between items-center px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:["Title",Object(j.jsxs)("div",{className:"child",children:[Object(j.jsx)(S.d,{width:"20",height:"20",color:"title"===s&&"asc"===n?"black":""}),Object(j.jsx)(S.a,{width:"20",height:"20",color:"title"===s&&"desc"===n?"black":""})]})]}),Object(j.jsxs)("th",{onClick:function(){return t("status")},scope:"col",className:"flex flex-row justify-between items-center px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:["Status",Object(j.jsxs)("div",{className:"child",children:[Object(j.jsx)(S.d,{width:"20",height:"20",color:"status"===s&&"asc"===n?"black":""}),Object(j.jsx)(S.a,{width:"20",height:"20",color:"status"===s&&"desc"===n?"black":""})]})]}),Object(j.jsxs)("th",{onClick:function(){return t("jobTitle")},scope:"col",className:"flex flex-row justify-between items-center px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:["Role",Object(j.jsxs)("div",{className:"child",children:[Object(j.jsx)(S.d,{width:"20",height:"20",color:"jobTitle"===s&&"asc"===n?"black":""}),Object(j.jsx)(S.a,{width:"20",height:"20",color:"jobTitle"===s&&"desc"===n?"black":""})]})]}),Object(j.jsx)("th",{scope:"col",className:"relative px-6 py-3",children:Object(j.jsx)("span",{className:"sr-only",children:"Edit"})})]})})},I=function(e){var t=e.contacts,s=e.onSort,n=e.sortByItem,r=e.order;return Object(j.jsx)("div",{className:"py-2 align-middle inline-block min-w-full sm:px-6 ",children:Object(j.jsx)("div",{className:"shadow overflow-hidden border-b border-gray-200 sm:rounded-lg",children:Object(j.jsxs)("table",{className:"min-w-full divide-y divide-gray-200",children:[Object(j.jsx)(A,{onSort:s,sortByItem:n,order:r}),Object(j.jsx)(F,{contacts:t})]})})})},z=function(e){var t=e.descriptors,s=e.selected,n=e.filterBy;return Object(j.jsxs)("ul",{className:"rounded-md border-2",children:[Object(j.jsx)("li",{onClick:function(){return n("all")},className:"px-2 py-3 border-solid border-b-2 rounded-md ".concat("all"===s?"bg-red-500 text-white":""),children:"All"}),t.map((function(e){return Object(j.jsx)("li",{onClick:function(){return n(e)},className:"px-2 py-3 border-solid border-b-2 rounded-md ".concat(s===e?"bg-red-500 text-white":""),children:e},e)}))]})},M=function(e){Object(l.a)(s,e);var t=Object(d.a)(s);function s(){var e;Object(i.a)(this,s);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={contacts:Object(x.a)(P()),currentPage:1,pageSize:8,filterBy:"all",sort:{sortBy:"name",order:"asc"}},e.onSort=function(t){e.setState(Object(b.a)(Object(b.a)({},e.state),{},{sort:{sortBy:t,order:"asc"===e.state.sort.order?"desc":"asc"}}))},e.handlePageChange=function(t){e.setState(Object(b.a)(Object(b.a)({},e.state),{},{currentPage:t}))},e.handlePrevPageChange=function(){e.setState(Object(b.a)(Object(b.a)({},e.state),{},{currentPage:e.state.currentPage-1}))},e.handleNextPageChange=function(){e.setState(Object(b.a)(Object(b.a)({},e.state),{},{currentPage:e.state.currentPage+1}))},e.filterBy=function(t){e.setState(Object(b.a)(Object(b.a)({},e.state),{},{filterBy:t}))},e.cmpFn=function(e,t){var s=e.firstName.toLowerCase(),n=t.firstName.toLowerCase();return console.log(s,n),s<n?-1:s>n?1:0},e}return Object(o.a)(s,[{key:"render",value:function(){var e=this,t=Object(x.a)(new Set(Object(x.a)(this.state.contacts.map((function(e){return e.jobDescriptor}))))).sort(),s=this.state,n=s.contacts,r=s.currentPage,a=s.pageSize,c=n.filter((function(t){return"all"===e.state.filterBy||t.jobDescriptor===e.state.filterBy})),i=D.a.sortBy(c,[this.state.sort.sortBy]),o=function(e,t,s){var n=(t-1)*s;return D()(e).slice(n).take(s).value()}("asc"!==this.state.sort.order?i:i.reverse(),r,a);return Object(j.jsxs)("div",{className:"bg-gray-100 flex flex-row pl-4 py-2",children:[Object(j.jsx)("div",{className:"flex flex-col w-2/12 mt-2",children:Object(j.jsx)(z,{descriptors:t,selected:this.state.filterBy,filterBy:this.filterBy})}),Object(j.jsxs)("div",{className:"flex flex-col w-10/12",children:[Object(j.jsx)(I,{contacts:o,onSort:this.onSort,sortByItem:this.state.sort.sortBy,order:this.state.sort.order}),Object(j.jsx)(B,{count:c.length,pageSize:this.state.pageSize,currentPage:this.state.currentPage,selected:o.length,onPageChange:this.handlePageChange,onPrevPage:this.handlePrevPageChange,onNextPage:this.handleNextPageChange})]})]})}}]),s}(n.Component),U=s(24),E=s(5);var L=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"flex flex-row justify-center space-x-10",children:[Object(j.jsx)(U.b,{exact:!0,to:"/",children:"Todos"}),Object(j.jsx)(U.b,{to:"/table",children:"Table"}),Object(j.jsx)(U.b,{to:"/hooks",children:"Hooks"})]}),Object(j.jsxs)(E.c,{children:[Object(j.jsx)(E.a,{path:"/table",component:M}),Object(j.jsx)(E.a,{path:"/hooks",component:m}),Object(j.jsx)(E.a,{path:"/",exact:!0,component:k})]})]})},R=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,1555)).then((function(t){var s=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,c=t.getTTFB;s(e),n(e),r(e),a(e),c(e)}))};c.a.render(Object(j.jsx)(U.a,{children:Object(j.jsx)(L,{})}),document.getElementById("root")),R()},56:function(e,t,s){}},[[1551,1,2]]]);
//# sourceMappingURL=main.72d49a66.chunk.js.map