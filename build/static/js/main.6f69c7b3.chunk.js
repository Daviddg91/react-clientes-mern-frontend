(this["webpackJsonpclientes-crud"]=this["webpackJsonpclientes-crud"]||[]).push([[0],{115:function(e,n,t){},117:function(e,n,t){},118:function(e,n,t){"use strict";t.r(n);var r=t(0),c=t(1),a=t(21),s=t.n(a),i=t(8),o=t(17),l=t(49),d=t(27),j=t(3),b={clientsLogout:"[clients] Logout clients",clientAddNew:"[clients] Add new",clientUpdated:"[clients] Client updated",clientDeleted:"[clients] Client deleted",clientsLoaded:"[clients] Clients loaded",clientActiveForUpdate:"[clients] Clients Active Update",clientExistByDNI:"[clients] Client find the same clients",searchClientById:"[clients] find client by ID ",clientDesactiveForDelete:"[clients] desactive client active for delete ",clientActiveDelete:"[clients] set client active for delete ",authCheckingFinish:"[auth] Finish checking login state",authStartLogin:"[auth] Start login",authLogin:"[auth] Login",authStartRegister:"[auth] Start Register",authStartStartTokenRenew:"[auth] Start token renew",authLogout:"[auth] Logout"},u={clients:[],activeClient:null},m=Object(o.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;switch(n.type){case b.authLogin:return Object(j.a)(Object(j.a)(Object(j.a)({},e),n.payload),{},{checking:!1});case b.authCheckingFinish:return Object(j.a)(Object(j.a)({},e),{},{checking:!1});case b.authLogout:return{checking:!1};default:return e}},clients:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;switch(n.type){case b.clientActiveForUpdate:return Object(j.a)(Object(j.a)({},e),{},{client:[n.payload]});case b.clientActiveDelete:return Object(j.a)(Object(j.a)({},e),{},{clientActiveDelete:e.clientes.find((function(e){return e.dni===n.payload}))});case b.clientDesactiveForDelete:return Object(j.a)(Object(j.a)({},e),{},{activeEvent:null});case b.clientUpdated:return Object(j.a)(Object(j.a)({},e),{},{clients:e.clients.map((function(e){return e.id===n.payload.id?n.payload:e}))});case b.clientDeleted:return Object(j.a)(Object(j.a)({},e),{},{clientes:e.clientes.filter((function(n){return n.dni!==e.clientActiveDelete.dni})),clientActiveDelete:null});case b.clientsLoaded:return Object(j.a)(Object(j.a)({},e),{},{clientes:Object(d.a)(n.payload)});case b.clientLogout:return Object(j.a)({},u);case b.clientAddNew:return Object(j.a)(Object(j.a)({},e),{},{clientes:Object(j.a)(Object(j.a)({},e.clients.clientes),n.payload)});case b.searchClientById:return Object(j.a)(Object(j.a)({},e),{},{clienteModify:e.clients.clientes.find((function(e){return e.id===n.payload.id&&e}))});default:return e}}}),h="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.d,p=Object(o.e)(m,h(Object(o.a)(l.a))),x=t(7),O=t(5),v=t(15),f=t(14),g=t.n(f),y=function(e){var n=Object(r.jsx)(x.b,{type:"button",className:"btn btn-success",exact:!0,to:"/clientes/deleteClient/".concat(e.dni),children:"Eliminar"},"eliminar".concat(e.id)),t=Object(r.jsx)(x.b,{type:"button",className:"btn btn-success",exact:!0,to:"/clientes/modifyClient/".concat(e.id),children:"Editar"},"editar".concat(e.id));return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:Object(r.jsxs)("div",{children:["    ",e.nombre,"    "]})}),Object(r.jsx)("td",{children:Object(r.jsxs)("div",{children:["    ",e.apellidos,"    "]})}),Object(r.jsx)("td",{children:Object(r.jsxs)("div",{children:["    ",e.dni,"    "]})}),Object(r.jsx)("td",{children:Object(r.jsxs)("div",{children:["    ",e.correo,"    "]})}),Object(r.jsxs)("td",{children:[Object(r.jsxs)("div",{children:["    ",e.telefono,"   "]})," "]}),Object(r.jsxs)("td",{children:[Object(r.jsxs)("div",{children:["    ",e.direccion,"    "]})," "]}),Object(r.jsxs)("td",{children:[Object(r.jsxs)("div",{children:["    ",e.cp,"   "]})," "]}),Object(r.jsx)("td",{children:Object(r.jsxs)("div",{children:["    ",e.edad,"   "]})}),Object(r.jsx)("td",{children:Object(r.jsxs)("div",{children:["     ",t,"    "]})}),Object(r.jsx)("td",{children:Object(r.jsxs)("div",{children:["     ",n,"    "]})})]},e.id)},N=t(2),k=t.n(N),C=t(6),w=t(9),E=t.n(w),F="http://localhost:4000/api",D=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",r="".concat(F,"/").concat(e);return"GET"===t?fetch(r):fetch(r,{method:t,headers:{"Content-type":"application/json"},body:JSON.stringify(n)})},I=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",r="".concat(F,"/").concat(e),c=localStorage.getItem("token")||"";return"GET"===t?fetch(r,{method:t,headers:{"x-token":c}}):fetch(r,{method:t,headers:{"Content-type":"application/json","x-token":c},body:JSON.stringify(n)})},A=function(e){return function(){var n=Object(C.a)(k.a.mark((function n(t,r){var c;return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,I("clients",e,"POST");case 3:return c=n.sent,n.next=6,c.json();case 6:n.sent.ok&&t(S(e)),E.a.fire({position:"center",icon:"success",title:" El cliente  ".concat(e.nombre,"  se ha creado con exito "),showConfirmButton:!1,timer:2300}),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),E.a.fire("Error",n.t0,"error");case 14:case"end":return n.stop()}}),n,null,[[0,11]])})));return function(e,t){return n.apply(this,arguments)}}()},S=function(e){return{type:b.clientAddNew,payload:e}},B=function(e){return function(){var n=Object(C.a)(k.a.mark((function n(t){var r,c;return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,I("clients/".concat(e.id),e,"PUT");case 3:return r=n.sent,n.next=6,r.json();case 6:(c=n.sent).ok?t(T(e)):E.a.fire("Error",c.msg,"error"),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}()},T=function(e){return{type:b.clientUpdated,payload:e}},L=function(){return{type:b.clientDesactiveForDelete}},_=function(){return{type:b.clientDeleted}},q=function(e){return{type:b.clientActiveDelete,payload:e}},P=function(e){return{type:b.clientsLoaded,payload:e}};t(61),t(62),t(63);g.a.DataTable=t(14),t(14),t(30),t(35),t(36),t(64);var M=function(){Object(i.b)()(function(){var e=Object(C.a)(k.a.mark((function e(n){var t,r,c;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I("clients");case 3:return t=e.sent,e.next=6,t.json();case 6:r=e.sent,c=r.clientes,n(P(c)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(n){return e.apply(this,arguments)}}());var e=Object(i.c)((function(e){return e.clients.clientes})),n=Object(c.useState)(!1),t=Object(v.a)(n,2),a=(t[0],t[1]);return Object(c.useEffect)((function(){a(!0)}),[g.a]),g.a.fn.dataTable.ext.errMode="none",g()(document).ready((function(){g()("#buscresult").DataTable({responsive:!0,paging:!0,searching:!0,ordering:!0,info:!1,language:{lengthMenu:"Mostrar _MENU_ registros",zeroRecords:"No se encontraron resultados",info:"Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",infoEmpty:"Mostrando registros del 0 al 0 de un total de 0 registros",infoFiltered:"(filtrado de un total de _MAX_ registros)",sSearch:"Buscar:",oPaginate:{sFirst:"Primero",sLast:"\xdaltimo",sNext:"Siguiente",sPrevious:"Anterior"},sProcessing:"Procesando..."}})})),Object(r.jsxs)("div",{className:"col-10 m-auto",children:[Object(r.jsxs)("div",{className:"d-flex justify-content-center ",children:["  ",Object(r.jsx)("h1",{children:"Listado de Clientes "})," "]}),e&&Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("table",{id:"buscresult",className:"table table-bordered table-striped table-hover col-12",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsxs)("th",{children:[" ",Object(r.jsx)("div",{children:"Nombre"})]}),Object(r.jsxs)("th",{children:[" ",Object(r.jsx)("div",{children:"Apellidos"})]}),Object(r.jsxs)("th",{children:[" ",Object(r.jsx)("div",{children:"DNI"})," "]}),Object(r.jsxs)("th",{children:[" ",Object(r.jsx)("div",{children:"Correo"})]}),Object(r.jsxs)("th",{children:[" ",Object(r.jsx)("div",{children:"Telefono"})," "]}),Object(r.jsxs)("th",{children:[" ",Object(r.jsx)("div",{children:"Direccion"})]}),Object(r.jsxs)("th",{children:[" ",Object(r.jsx)("div",{children:"CP"})]}),Object(r.jsxs)("th",{children:[" ",Object(r.jsx)("div",{children:"Edad"})]}),Object(r.jsx)("th",{children:"Editar"}),Object(r.jsx)("th",{children:"Eliminar"})]})}),Object(r.jsx)("tbody",{id:"tablebody",children:e.map((function(e){return Object(r.jsx)(y,Object(j.a)({},e))}))})]})})]})},U=t(20),R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=Object(c.useState)(e),t=Object(v.a)(n,2),r=t[0],a=t[1],s=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;a(n)},i=function(e){var n=e.target;a(Object(j.a)(Object(j.a)({},r),{},Object(U.a)({},n.name,n.value)))};return[r,i,s]},J=t(18),G=t.n(J),z=function(){var e=/^(\d{8})([A-Z])$/,n=/^([ABCDEFGHJKLMNPQRSUVW])(\d{7})([0-9A-J])$/,t=/^[XYZ]\d{7,8}[A-Z]$/,r=function(r){return r.match(e)?"dni":r.match(n)?"cif":r.match(t)?"nie":void 0},c=function(e){return"TRWAGMYFPDXBNJZSQVHLCKE".charAt(parseInt(e,10)%23)===e.charAt(8)},a=function(e){var n=e.charAt(0);switch(n){case"X":n=0;break;case"Y":n=1;break;case"Z":n=2}return c(n+e.substr(1))},s=function(e){for(var t,r=e.match(n),c=r[1],a=r[2],s=r[3],i=0,o=0,l=0;l<a.length;l++)t=parseInt(a[l],10),l%2===0?o+=(t*=2)<10?t:t-9:i+=t;var d=10-(i+o).toString().substr(-1),j="JABCDEFGHI".substr(d,1);return c.match(/[ABEH]/)?s===d:c.match(/[KPQS]/)?s===j:s===d||s===j};return function(e){e=e.toUpperCase().replace(/\s/,"");var n=!1,t=r(e);switch(t){case"dni":n=c(e);break;case"nie":n=a(e);break;case"cif":n=s(e)}return{type:t,valid:n}}}();G.a.extend("isDni",(function(e){return!!e&&!0===z(e).valid}),"Introduzca un DNI correcto"),G.a.setMessages({required:"El campo :name esta vacio",min:"La cifra del :name tiene que ser mayor a :min",max:"La cifra del :name tiene que ser menor a :max",string:"El campo :name no puede contener numeros",numeric:"El campo :name no puede contener letras",email:"El campo :name no es correcto"});var X=t(26),Z=t.n(X),H=function(){var e=Object(U.a)({nombre:"",apellidos:"",edad:"",dni:"",correo:"",telefono:"",cp:"",direccion:""},"correo",""),n=R(e),t=Object(v.a)(n,3),a=t[0],s=t[1],o=t[2];Object(O.g)();var l={errors:{nombre:"",apellidos:"",edad:"",direccion:"",dni:"",cp:"",telefono:"",correo:""}},d=Object(c.useState)(l),j=Object(v.a)(d,2),b=j[0],u=j[1];Object(c.useEffect)((function(){u(l),console.log(a),""!==a.cp&&(a.cp=Number.parseInt(a.cp)),""!==a.telefono&&(a.telefono=Number.parseInt(a.telefono)),""!==a.edad&&(a.edad=Number.parseInt(a.edad));var e=G.a.validate(a,{nombre:"required|string|min:2|max:30",apellidos:"required|string|min:2|max:30",direccion:"required|string|min:2|max:30",edad:"required|numeric|min:18|max:100",telefono:"required|numeric|min:99999|max:999999999",correo:"required|email|max:50",dni:"required|isDni",cp:"required|numeric|min:1000|max:999999"});console.log(e),u(e),m(a.dni)}),[a]);var m=function(){var e=Object(C.a)(k.a.mark((function e(n){var t,r,c,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(9!==n.length){e.next=10;break}if(null===b.errors.dni){e.next=10;break}return"http://localhost:4000/api",t=" ".concat("http://localhost:4000/api","/clients/getClient/").concat(n),r=localStorage.getItem("token")||"",c={mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json","x-token":r}},e.next=8,Z.a.get(t,c);case 8:(a=e.sent)&&a.data.cliente.length>0&&(b.errors.dni="El DNI esta repetido",u(b));case 10:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),h=Object(i.b)(),p=function(){var e=Object(C.a)(k.a.mark((function e(n){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault();try{h(A(a)),setTimeout((function(){o()}),2e3)}catch(t){E.a.fire("Error",t,"error")}case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{id:"",children:[Object(r.jsxs)("div",{className:"d-flex justify-content-center ",children:[" ",Object(r.jsx)("h1",{children:Object(r.jsx)("p",{children:"Crear nuevo usuario"})})," "]}),Object(r.jsx)("form",{onSubmit:p,children:Object(r.jsxs)("div",{className:"col-10 creaClienteForm m-auto",children:[Object(r.jsxs)("div",{className:"",children:[Object(r.jsx)("label",{htmlFor:"nombre",children:"Nombre: "}),Object(r.jsx)("input",{value:a.nombre,type:"text",className:"form-control \n                        ".concat(""===a.nombre||b.errors.nombre?"":"is-valid","\n                        ").concat(""!==a.nombre&&b.errors.nombre?"is-invalid":"","\n                      "),name:"nombre",placeholder:"Ingresar Nombre",onChange:s})]}),Object(r.jsx)("div",{className:"alert  alert-danger \n                 ".concat(b.errors.nombre&&""!==a.nombre?"displayBlock":"displayNone"," \n               "),children:b.errors.nombre&&Object(r.jsxs)(r.Fragment,{children:[" ",b.errors.nombre]})}),Object(r.jsx)("br",{}),Object(r.jsxs)("div",{className:"",children:[Object(r.jsx)("label",{htmlFor:"apellidos",children:"Apellidos: "}),Object(r.jsx)("input",{value:a.apellidos,type:"text",className:"form-control \n                    ".concat(""===a.apellidos||b.errors.apellidos?"":"is-valid","\n                    ").concat(""!==a.apellidos&&b.errors.apellidos?"is-invalid":"","\n                   "),name:"apellidos",placeholder:"Ingresar Apellidos",onChange:s})]}),Object(r.jsx)("div",{className:"alert  alert-danger \n                ".concat(b.errors.apellidos&&""!==a.apellidos?"displayBlock":"displayNone"," \n               "),children:b.errors.apellidos&&Object(r.jsxs)(r.Fragment,{children:[" ",b.errors.apellidos]})}),Object(r.jsx)("br",{}),Object(r.jsxs)("div",{className:"form group",children:[Object(r.jsx)("label",{htmlFor:"edad",children:"Edad: "}),Object(r.jsx)("input",{value:a.edad,type:"number",className:"form-control \n                    ".concat(""===a.edad||b.errors.edad?"":"is-valid","\n                    ").concat(""!==a.edad&&b.errors.edad?"is-invalid":"","\n                   "),name:"edad",placeholder:"Ingresar edad",onChange:s})]}),Object(r.jsx)("div",{className:"alert  alert-danger \n                ".concat(b.errors.edad&&""!==a.edad?"displayBlock":"displayNone"," \n               "),children:b.errors.edad&&Object(r.jsxs)(r.Fragment,{children:[" ",b.errors.edad]})}),Object(r.jsx)("br",{}),Object(r.jsxs)("div",{className:"form group",children:[Object(r.jsx)("label",{htmlFor:"direccion",children:"Direccion: "}),Object(r.jsx)("input",{value:a.direccion,type:"text",className:"form-control \n                    ".concat(""===a.direccion||b.errors.direccion?"":"is-valid","\n                    ").concat(""!==a.direccion&&b.errors.direccion?"is-invalid":"","\n                   "),name:"direccion",placeholder:"Ingresar direccion",onChange:s})]}),Object(r.jsx)("div",{className:"alert  alert-danger \n                ".concat(b.errors.direccion&&""!==a.direccion?"displayBlock":"displayNone"," \n               "),children:b.errors.direccion&&Object(r.jsxs)(r.Fragment,{children:[" ",b.errors.direccion]})}),Object(r.jsx)("br",{}),Object(r.jsxs)("div",{className:"form group",children:[Object(r.jsx)("label",{htmlFor:"dni",children:"DNI: "}),Object(r.jsx)("input",{value:a.dni,type:"text",className:"form-control \n                    ".concat(""===a.dni||b.errors.dni?"":"is-valid","\n                    ").concat(""!==a.dni&&b.errors.dni?"is-invalid":"","\n                   "),name:"dni",placeholder:"Ingresar dni",onChange:s})]}),Object(r.jsx)("div",{className:"alert  alert-danger \n                ".concat(b.errors.dni&&""!==a.dni?"displayBlock":"displayNone","  \n               "),children:b.errors.dni&&Object(r.jsxs)(r.Fragment,{children:[" ",b.errors.dni]})}),Object(r.jsx)("br",{}),Object(r.jsxs)("div",{className:"form group",children:[Object(r.jsx)("label",{htmlFor:"cp",children:"Codigo Postal: "}),Object(r.jsx)("input",{value:a.cp,type:"text",className:"form-control \n                    ".concat(""===a.cp||b.errors.cp?"":"is-valid","\n                    ").concat(""!==a.cp&&b.errors.cp?"is-invalid":"","\n                   "),name:"cp",placeholder:"Ingresar cp",onChange:s})]}),Object(r.jsx)("div",{className:"alert  alert-danger \n                ".concat(b.errors.cp&&""!==a.cp?"displayBlock":"displayNone"," \n               "),children:b.errors.cp&&Object(r.jsxs)(r.Fragment,{children:[" ",b.errors.cp]})}),Object(r.jsx)("br",{}),Object(r.jsxs)("div",{className:"form group",children:[Object(r.jsx)("label",{htmlFor:"telefono",children:"Telefono: "}),Object(r.jsx)("input",{value:a.telefono,type:"number",className:"form-control \n                    ".concat(""===a.telefono||b.errors.telefono?"":"is-valid","\n                    ").concat(""!==a.telefono&&b.errors.telefono?"is-invalid":""," \n                   "),name:"telefono",placeholder:"Ingresar telefono",onChange:s})]}),Object(r.jsx)("div",{className:"alert  alert-danger \n                ".concat(b.errors.telefono&&""!==a.telefono?"displayBlock":"displayNone","  \n               "),children:b.errors.telefono&&Object(r.jsxs)(r.Fragment,{children:[" ",b.errors.telefono]})}),Object(r.jsx)("br",{}),Object(r.jsxs)("div",{className:"form group",children:[Object(r.jsx)("label",{htmlFor:"correo",children:"Correo: "}),Object(r.jsx)("input",{value:a.correo,type:"email",className:"form-control \n                    ".concat(""===a.correo||b.errors.correo?"":"is-valid","\n                    ").concat(""!==a.correo&&b.errors.correo?"is-invalid":"","\n                   "),name:"correo",placeholder:"Ingresar correo",onChange:s})]}),Object(r.jsx)("div",{className:"alert  alert-danger \n                ".concat(b.errors.correo&&""!==a.correo?"displayBlock":"displayNone"," \n               "),children:b.errors.correo&&Object(r.jsxs)(r.Fragment,{children:[" ",b.errors.correo]})}),Object(r.jsx)("br",{}),Object(r.jsx)("button",{type:"submit",className:"btn btn-primary \n              ".concat(b.hasError?"btn-secondary":"btn-primary","\n              "),disabled:b.hasError,children:"Crear usuario"})]})})]})})},V=function(e){var n=e.match.params.id,t=Object(i.b)(),a=Object(i.c)((function(e){return e.clients.clientes.find((function(e){return e.id===n&&e}))})),s=R(a),o=Object(v.a)(s,3),l=o[0],d=o[1],j=(o[2],Object(O.g)()),b={errors:{nombre:"",apellidos:"",edad:"",direccion:"",dni:"",cp:"",telefono:"",correo:""}},u=Object(c.useState)(b),m=Object(v.a)(u,2),h=m[0],p=m[1];Object(c.useEffect)((function(){p(b),console.log(l),""!==l.cp&&(l.cp=Number.parseInt(l.cp)),""!==l.telefono&&(l.telefono=Number.parseInt(l.telefono)),""!==l.edad&&(l.edad=Number.parseInt(l.edad));var e=G.a.validate(l,{nombre:"required|string|min:2|max:30",apellidos:"required|string|min:2|max:30",direccion:"required|string|min:2|max:30",edad:"required|numeric|min:18|max:100",telefono:"required|numeric|min:99999|max:999999999",correo:"required|email|max:50",dni:"required|isDni",cp:"required|numeric|min:1000|max:999999"});console.log(e),p(e),x(l.dni)}),[l]);var x=function(){var e=Object(C.a)(k.a.mark((function e(n){var t,r,c,s;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(9!==n.length){e.next=10;break}if(null===h.errors.dni){e.next=10;break}return"http://localhost:4000/api",t=" ".concat("http://localhost:4000/api","/clients/getClient/").concat(n),r=localStorage.getItem("token")||"",c={mode:"cors",cache:"no-cache",credentials:"same-origin",headers:{"Content-Type":"application/json","x-token":r}},e.next=8,Z.a.get(t,c);case 8:(s=e.sent)&&s.data.cliente.length>0&&(console.log(n),console.log(a.dni),n!==a.dni&&(h.errors.dni="El DNI esta repetido",p(h)));case 10:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=Object(C.a)(k.a.mark((function e(n){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault();try{t(B(l)),setTimeout((function(){j.push("/clientes/dashboardClient")}),2e3)}catch(r){E.a.fire("Error",r,"error")}case 2:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{id:"",children:[Object(r.jsxs)("div",{className:"d-flex justify-content-center ",children:[" ",Object(r.jsx)("h1",{children:Object(r.jsx)("p",{children:"Crear nuevo usuario"})})," "]}),Object(r.jsx)("form",{onSubmit:f,children:Object(r.jsxs)("div",{className:"col-10 creaClienteForm m-auto",children:[Object(r.jsxs)("div",{className:"",children:[Object(r.jsx)("label",{htmlFor:"nombre",children:"Nombre: "}),Object(r.jsx)("input",{value:l.nombre,type:"text",className:"form-control \n                            ".concat(""===l.nombre||h.errors.nombre?"":"is-valid","\n                            ").concat(""!==l.nombre&&h.errors.nombre?"is-invalid":"","\n                          "),name:"nombre",placeholder:"Ingresar Nombre",onChange:d})]}),Object(r.jsx)("div",{className:"alert  alert-danger \n                     ".concat(h.errors.nombre&&""!==l.nombre?"displayBlock":"displayNone"," \n                   "),children:h.errors.nombre&&Object(r.jsxs)(r.Fragment,{children:[" ",h.errors.nombre]})}),Object(r.jsx)("br",{}),Object(r.jsxs)("div",{className:"",children:[Object(r.jsx)("label",{htmlFor:"apellidos",children:"Apellidos: "}),Object(r.jsx)("input",{value:l.apellidos,type:"text",className:"form-control \n                        ".concat(""===l.apellidos||h.errors.apellidos?"":"is-valid","\n                        ").concat(""!==l.apellidos&&h.errors.apellidos?"is-invalid":"","\n                       "),name:"apellidos",placeholder:"Ingresar Apellidos",onChange:d})]}),Object(r.jsx)("div",{className:"alert  alert-danger \n                    ".concat(h.errors.apellidos&&""!==l.apellidos?"displayBlock":"displayNone"," \n                   "),children:h.errors.apellidos&&Object(r.jsxs)(r.Fragment,{children:[" ",h.errors.apellidos]})}),Object(r.jsx)("br",{}),Object(r.jsxs)("div",{className:"form group",children:[Object(r.jsx)("label",{htmlFor:"edad",children:"Edad: "}),Object(r.jsx)("input",{value:l.edad,type:"number",className:"form-control \n                        ".concat(""===l.edad||h.errors.edad?"":"is-valid","\n                        ").concat(""!==l.edad&&h.errors.edad?"is-invalid":"","\n                       "),name:"edad",placeholder:"Ingresar edad",onChange:d})]}),Object(r.jsx)("div",{className:"alert  alert-danger \n                    ".concat(h.errors.edad&&""!==l.edad?"displayBlock":"displayNone"," \n                   "),children:h.errors.edad&&Object(r.jsxs)(r.Fragment,{children:[" ",h.errors.edad]})}),Object(r.jsx)("br",{}),Object(r.jsxs)("div",{className:"form group",children:[Object(r.jsx)("label",{htmlFor:"direccion",children:"Direccion: "}),Object(r.jsx)("input",{value:l.direccion,type:"text",className:"form-control \n                        ".concat(""===l.direccion||h.errors.direccion?"":"is-valid","\n                        ").concat(""!==l.direccion&&h.errors.direccion?"is-invalid":"","\n                       "),name:"direccion",placeholder:"Ingresar direccion",onChange:d})]}),Object(r.jsx)("div",{className:"alert  alert-danger \n                    ".concat(h.errors.direccion&&""!==l.direccion?"displayBlock":"displayNone"," \n                   "),children:h.errors.direccion&&Object(r.jsxs)(r.Fragment,{children:[" ",h.errors.direccion]})}),Object(r.jsx)("br",{}),Object(r.jsxs)("div",{className:"form group",children:[Object(r.jsx)("label",{htmlFor:"dni",children:"DNI: "}),Object(r.jsx)("input",{value:l.dni,type:"text",className:"form-control \n                        ".concat(""===l.dni||h.errors.dni?"":"is-valid","\n                        ").concat(""!==l.dni&&h.errors.dni?"is-invalid":"","\n                       "),name:"dni",placeholder:"Ingresar dni",onChange:d})]}),Object(r.jsx)("div",{className:"alert  alert-danger \n                    ".concat(h.errors.dni&&""!==l.dni?"displayBlock":"displayNone","  \n                   "),children:h.errors.dni&&Object(r.jsxs)(r.Fragment,{children:[" ",h.errors.dni]})}),Object(r.jsx)("br",{}),Object(r.jsxs)("div",{className:"form group",children:[Object(r.jsx)("label",{htmlFor:"cp",children:"Codigo Postal: "}),Object(r.jsx)("input",{value:l.cp,type:"text",className:"form-control \n                        ".concat(""===l.cp||h.errors.cp?"":"is-valid","\n                        ").concat(""!==l.cp&&h.errors.cp?"is-invalid":"","\n                       "),name:"cp",placeholder:"Ingresar cp",onChange:d})]}),Object(r.jsx)("div",{className:"alert  alert-danger \n                    ".concat(h.errors.cp&&""!==l.cp?"displayBlock":"displayNone"," \n                   "),children:h.errors.cp&&Object(r.jsxs)(r.Fragment,{children:[" ",h.errors.cp]})}),Object(r.jsx)("br",{}),Object(r.jsxs)("div",{className:"form group",children:[Object(r.jsx)("label",{htmlFor:"telefono",children:"Telefono: "}),Object(r.jsx)("input",{value:l.telefono,type:"number",className:"form-control \n                        ".concat(""===l.telefono||h.errors.telefono?"":"is-valid","\n                        ").concat(""!==l.telefono&&h.errors.telefono?"is-invalid":""," \n                       "),name:"telefono",placeholder:"Ingresar telefono",onChange:d})]}),Object(r.jsx)("div",{className:"alert  alert-danger \n                    ".concat(h.errors.telefono&&""!==l.telefono?"displayBlock":"displayNone","  \n                   "),children:h.errors.telefono&&Object(r.jsxs)(r.Fragment,{children:[" ",h.errors.telefono]})}),Object(r.jsx)("br",{}),Object(r.jsxs)("div",{className:"form group",children:[Object(r.jsx)("label",{htmlFor:"correo",children:"Correo: "}),Object(r.jsx)("input",{value:l.correo,type:"email",className:"form-control \n                        ".concat(""===l.correo||h.errors.correo?"":"is-valid","\n                        ").concat(""!==l.correo&&h.errors.correo?"is-invalid":"","\n                       "),name:"correo",placeholder:"Ingresar correo",onChange:d})]}),Object(r.jsx)("div",{className:"alert  alert-danger \n                    ".concat(h.errors.correo&&""!==l.correo?"displayBlock":"displayNone"," \n                   "),children:h.errors.correo&&Object(r.jsxs)(r.Fragment,{children:[" ",h.errors.correo]})}),Object(r.jsx)("br",{}),Object(r.jsx)("button",{type:"submit",className:"btn btn-primary \n                  ".concat(h.hasError?"btn-secondary":"btn-primary","\n                  "),disabled:h.hasError,children:"Modificar usuario"})]})})]})})},W=function(e,n){return function(){var t=Object(C.a)(k.a.mark((function t(r){var c,a,s,i,o;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D("auth",{email:e,password:n},"POST");case 2:return c=t.sent,t.next=5,c.json();case 5:if(!(a=t.sent).ok){t.next=13;break}return localStorage.setItem("token",a.token),localStorage.setItem("token-init-date",(new Date).getTime()),r(Q({uid:a.uid,name:a.name})),t.abrupt("return",!0);case 13:a.msg?E.a.fire("Error",a.msg,"error"):(s=Object.values(a.errors),i=[],s.map((function(e){e.msg&&(i=[].concat(Object(d.a)(i),[e.msg]))})),o=i.join("<br>"),E.a.fire("Error",o,"error"));case 14:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},K=function(){return{type:b.authCheckingFinish}},Q=function(e){return{type:b.authLogin,payload:e}},Y=function(){return{type:b.authLogout}},$=function(){var e=Object(i.b)();return Object(r.jsxs)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark",children:[Object(r.jsx)("div",{className:"navbar-collapse col-6",children:Object(r.jsxs)("div",{className:"navbar-nav",children:[Object(r.jsx)(x.b,{activeClassName:"active",className:"nav-item nav-link btn btn-primary ml-3",exact:!0,to:"/clientes/dashboardClient",children:"Lista de Clientes"}),Object(r.jsx)(x.b,{activeClassName:"active",className:"nav-item nav-link btn btn-primary ml-3",exact:!0,to:"/clientes/newClient",children:"Nuevo Cliente"})]})}),Object(r.jsx)("div",{className:"navbar-collapse collapse w-100 order-3 dual-collapse2 col-6",children:Object(r.jsx)("ul",{className:"navbar-nav ml-auto",children:Object(r.jsx)(x.b,{activeClassName:"active",className:"nav-item nav-link btn btn-warning ",exact:!0,to:"",onClick:function(){e((function(e){localStorage.clear(),e(Y())}))},children:"Volver"})})})]})},ee=function(e){Object(O.g)().push("/clientes/dashboardClient");var n=e.match.params.dni;return Object(i.b)()(function(e){return function(){var n=Object(C.a)(k.a.mark((function n(t,r){var c;return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t(q(e)),c=r().clients.clientActiveDelete,n.next=4,E.a.fire({title:"\xbf Esta seguro que desea borrar el cliente  ".concat(c.nombre," ?"),showDenyButton:!0,showCancelButton:!1,confirmButtonText:"Aceptar",denyButtonText:"Cancelar",allowOutsideClick:!1}).then(function(){var e=Object(C.a)(k.a.mark((function e(n){var r,a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.isConfirmed){e.next=16;break}return e.prev=1,e.next=4,I("clients/".concat(c.dni),{},"DELETE");case 4:return r=e.sent,e.next=7,r.json();case 7:(a=e.sent).ok?(E.a.fire({position:"center",icon:"success",title:"El cliente  ".concat(c.nombre,"  se ha borrado con exito "),showConfirmButton:!1,timer:2300}),t(_())):E.a.fire("Error",a.msg,"error"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),E.a.fire("Error",e.t0,"error");case 14:e.next=17;break;case 16:n.isDenied&&t(L());case 17:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(n){return e.apply(this,arguments)}}());case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()}(n)),null},ne=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(x.a,{children:[Object(r.jsx)($,{}),Object(r.jsx)("div",{children:Object(r.jsx)("div",{className:"",children:Object(r.jsx)(O.d,{children:Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(O.b,{exact:!0,path:"/clientes/newClient",component:H}),Object(r.jsx)(O.b,{exact:!0,path:"/clientes/modifyClient/:id",component:V}),Object(r.jsx)(O.b,{exact:!0,path:"/clientes/dashboardClient",component:M}),Object(r.jsx)(O.b,{exact:!0,path:"/clientes/deleteClient/:dni",component:ee}),Object(r.jsx)(O.a,{to:"/clientes/dashboardClient"})]})})})})]})})},te=t.p+"static/media/mern.b2af878d.jpg",re=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)("div",{className:"d-flex justify-content-center",children:Object(r.jsx)("h3",{children:"Bienvenido"})}),Object(r.jsxs)("div",{className:"col-10 m-auto ",children:[Object(r.jsx)("img",{src:te,alt:"Logo",className:"col-12",height:"100px"}),"Esta es una aplicacion web desarollada con el Framework React, el cual realiza funcionalidades CRUD explotando una API desarrollada con Express y Mongoose, esta realiza las funcionalidades CRUD conectandose a una base de datos MongoDB en la nube (Mongo Atlas) y respondiendo a los formularios reactivos con validaciones y control de consistencia de datos.",Object(r.jsx)("br",{}),"Esta aplicaci\xf3n implementa redux y todos sus componentes se comunican con redux para realizar las funcionalidades desarolladas para el CRUD. Incluye login con JWT y registro de usuarios."]})]})},ce=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"d-flex justify-content-center",children:Object(r.jsx)("h3",{children:"Acerca de la aplicacion Web"})}),Object(r.jsx)("div",{className:"d-flex",children:Object(r.jsx)("div",{className:"col-10",children:"En esta aplicaci\xf3n podras gestionar los clientes pudiendo crear, eliminar y modificar los datos de los mismos, asi como visualizar una tabla con todos los clientes, pudiendo hacer busquedas y ordenaciones segun los criterios presentes en los clientes."})})]})},ae=function(){var e=Object(i.b)(),n=R({email:"prueba2@prueba.com",password:"1234567"}),t=Object(v.a)(n,3),c=t[0],a=t[1],s=(t[2],c.email),o=c.password,l=function(){var n=Object(C.a)(k.a.mark((function n(t){return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.preventDefault(),e(W(s,o));case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h3",{className:"auth__title",children:"Login"}),Object(r.jsxs)("form",{children:[Object(r.jsx)("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input",autoComplete:"off",onChange:a,value:s}),Object(r.jsx)("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",onChange:a,value:o}),Object(r.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",onClick:l,children:"Login"})]})]})},se=function(){return Object(r.jsx)("nav",{className:"navbar navbar-expand-sm navbar-dark bg-dark",children:Object(r.jsx)("div",{className:"navbar-collapse col-8",children:Object(r.jsxs)("div",{className:"navbar-nav",children:[Object(r.jsx)(x.b,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/auth/home",children:"Inicio"}),Object(r.jsx)(x.b,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/auth/login",children:"Login"}),Object(r.jsx)(x.b,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/auth/about",children:"Informacion"})]})})})},ie=function(){return Object(r.jsx)(x.a,{children:Object(r.jsx)("div",{className:"auth__main",children:Object(r.jsxs)("div",{className:"auth__box-container col-6",children:[Object(r.jsx)("div",{className:"auth__boxhead2",children:Object(r.jsx)(se,{})}),Object(r.jsxs)(O.d,{children:[Object(r.jsx)(O.b,{exact:!0,path:"/auth/home",component:re}),Object(r.jsx)(O.b,{exact:!0,path:"/auth/about",component:ce}),Object(r.jsx)(O.b,{exact:!0,path:"/auth/login",component:ae}),Object(r.jsx)(O.a,{to:"/auth/home"})]})]})})})},oe=function(){var e=Object(i.b)(),n=Object(i.c)((function(e){return e.auth})),t=n.checking,a=n.uid,s=Object(O.g)();return Object(c.useEffect)((function(){e(function(){var e=Object(C.a)(k.a.mark((function e(n){var t,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I("auth/renew");case 2:return t=e.sent,e.next=5,t.json();case 5:(r=e.sent).ok?(localStorage.setItem("token",r.token),localStorage.setItem("token-init-date",(new Date).getTime()),n(Q({uid:r.uid,name:r.name}))):n(K());case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}())}),[e]),t?Object(r.jsx)("h5",{children:"Espere..."}):Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(x.a,{history:s,children:Object(r.jsxs)(O.d,{children:[a?Object(r.jsx)(ne,{}):Object(r.jsx)(ie,{}),Object(r.jsx)(O.a,{to:"/"})]})})})};t(115),t(116),t(117);s.a.render(Object(r.jsx)(i.a,{store:p,children:Object(r.jsx)(oe,{})}),document.getElementById("root"))}},[[118,1,2]]]);
//# sourceMappingURL=main.6f69c7b3.chunk.js.map