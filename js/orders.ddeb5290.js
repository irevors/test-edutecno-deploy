(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["orders"],{"159d":function(e,t,c){"use strict";c.r(t);var r=c("7a23"),o={"aria-label":"breadcrumb"},b={class:"breadcrumb"},a={class:"breadcrumb-item"},n=Object(r["h"])("Home"),s=Object(r["f"])("li",{class:"breadcrumb-item active","aria-current":"page"},"Orders",-1),O=Object(r["f"])("h1",null,"orders",-1);function j(e,t,c,j,l,d){var f=Object(r["y"])("router-link"),u=Object(r["y"])("OrdersTable");return Object(r["r"])(),Object(r["e"])(r["a"],null,[Object(r["f"])("nav",o,[Object(r["f"])("ol",b,[Object(r["f"])("li",a,[Object(r["i"])(f,{to:{name:"Home"}},{default:Object(r["E"])((function(){return[n]})),_:1})]),s])]),O,Object(r["i"])(u,{data:d.ordenes},null,8,["data"])],64)}var l={class:"table"},d=Object(r["f"])("thead",null,[Object(r["f"])("tr",null,[Object(r["f"])("th",{scope:"col"},"N° Orden"),Object(r["f"])("th",{scope:"col"},"Cliente"),Object(r["f"])("th",{scope:"col"},"Monto Orden"),Object(r["f"])("th",{scope:"col"},"Cant. Productos"),Object(r["f"])("th",{scope:"col"},"Fecha Entrega"),Object(r["f"])("th",{scope:"col"},"Avance Preparación"),Object(r["f"])("th",{scope:"col"},"Estado"),Object(r["f"])("th",{scope:"col"}),Object(r["f"])("th",{scope:"col"})])],-1),f={scope:"row"},u={scope:"row"},p={scope:"row"},i={scope:"row"},h={scope:"row"},m={scope:"row"},w=Object(r["f"])("td",null,[Object(r["f"])("button",{type:"button",class:"btn btn-primary btn-sm"}," Ver Detalle ")],-1);function v(e,t,c,o,b,a){return Object(r["r"])(),Object(r["e"])("table",l,[d,Object(r["f"])("tbody",null,[(Object(r["r"])(!0),Object(r["e"])(r["a"],null,Object(r["x"])(c.data["ordenes:"],(function(e,t){return Object(r["r"])(),Object(r["e"])("tr",{key:t},[Object(r["f"])("th",f,Object(r["A"])(e.avance_preparacion),1),Object(r["f"])("th",u,Object(r["A"])(e.cliente),1),Object(r["f"])("th",p,Object(r["A"])(e.monto),1),Object(r["f"])("th",i,Object(r["A"])(e.cant_productos),1),Object(r["f"])("th",h,Object(r["A"])(e.fecha_entrega),1),Object(r["f"])("th",m,Object(r["A"])(e.estado),1),w])})),128))])])}var A={props:["data"]},g=c("6b0d"),y=c.n(g);const k=y()(A,[["render",v]]);var _=k,C={components:{OrdersTable:_},computed:{ordenes:function(){return this.$store.getters["orders/getOrders"]}},beforeCreate:function(){this.$store.dispatch("orders/getDashboard")}};const E=y()(C,[["render",j]]);t["default"]=E}}]);
//# sourceMappingURL=orders.ddeb5290.js.map