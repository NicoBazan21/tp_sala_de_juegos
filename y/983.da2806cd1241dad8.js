"use strict";(self.webpackChunktp1_sala_de_juegos=self.webpackChunktp1_sala_de_juegos||[]).push([[983],{6983:(T,c,o)=>{o.r(c),o.d(c,{AhorcadoModule:()=>O});var r=o(6895),d=o(5450),f=o(5226),h=o.n(f),t=o(8256),p=o(529);let m=(()=>{class a{constructor(e){this.http=e,this.api="https://clientes.api.greenborn.com.ar/public-random-word?c=1&l=8"}traerPalabra(){return this.http.get(this.api)}static#t=this.\u0275fac=function(s){return new(s||a)(t.LFG(p.eN))};static#a=this.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var u=o(3786),g=o(9682);function b(a,i){if(1&a&&(t.ynx(0),t._uU(1),t.BQk()),2&a){const e=t.oxw().$implicit;t.xp6(1),t.hij(" ",e.letra," ")}}function _(a,i){if(1&a&&(t.ynx(0),t.TgZ(1,"button",10),t.YNc(2,b,2,1,"ng-container",11),t.qZA(),t.BQk()),2&a){const e=i.$implicit;t.xp6(1),t.Q6J("disabled",e.estado),t.xp6(1),t.Q6J("ngIf",0==e.estado)}}function v(a,i){if(1&a){const e=t.EpF();t.ynx(0),t.TgZ(1,"button",12),t.NdJ("click",function(n){t.CHM(e);const l=t.oxw(2);return t.KtG(l.onClick(n))}),t._uU(2),t.qZA(),t.BQk()}if(2&a){const e=i.$implicit;t.xp6(1),t.Q6J("disabled",e.estado),t.xp6(1),t.Oqu(e.letra)}}function x(a,i){if(1&a&&(t.ynx(0),t.YNc(1,v,3,2,"ng-container",6),t.BQk()),2&a){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.abc)}}function C(a,i){if(1&a){const e=t.EpF();t.TgZ(0,"div",13)(1,"button",14),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.reiniciar())}),t._uU(2,"Reiniciar "),t.qZA()()}}const A=[{path:"",component:(()=>{class a{constructor(e,s,n){this.palabrasService=e,this.resultadosService=s,this.userService=n,this.path="/assets/img/ahorcado/",this.abc=[{letra:"Q",estado:!1},{letra:"W",estado:!1},{letra:"E",estado:!1},{letra:"R",estado:!1},{letra:"T",estado:!1},{letra:"Y",estado:!1},{letra:"U",estado:!1},{letra:"I",estado:!1},{letra:"O",estado:!1},{letra:"P",estado:!1},{letra:"A",estado:!1},{letra:"S",estado:!1},{letra:"D",estado:!1},{letra:"F",estado:!1},{letra:"G",estado:!1},{letra:"H",estado:!1},{letra:"J",estado:!1},{letra:"K",estado:!1},{letra:"L",estado:!1},{letra:"\xd1",estado:!1},{letra:"Z",estado:!1},{letra:"X",estado:!1},{letra:"C",estado:!1},{letra:"V",estado:!1},{letra:"B",estado:!1},{letra:"N",estado:!1},{letra:"M",estado:!1}],this.palabra="",this.palabraObj=[],this.vidas=1,this.img=`${this.path}${this.vidas}.png`,this.finalizar=!1}ngOnInit(){this.comenzar()}onClick(e){console.log(e.srcElement.innerText);let s=!1;this.vidas<5?(this.palabra.includes(e.srcElement.innerText.toLowerCase())&&(console.log("la letra esta"),this.palabraObj.forEach(n=>{n.letra==e.srcElement.innerText.toLowerCase()&&(n.estado=!1,s=!0)})),0==s&&(this.vidas++,this.img=`${this.path}${this.vidas}.png`),e.srcElement.disabled=!0):(5==this.vidas&&(this.vidas++,this.img=`${this.path}${this.vidas}.png`),h().fire({title:"Ohh!... Te has ahorcado.",text:'La palabra era  "'+this.palabra+'".',icon:"error",confirmButtonText:"Ok.",background:"#3b293b"}),this.resultadosService.subirResultado(this.userService.sesionFirestore.mail,0,"Ahorcado","Perdio"),this.finalizar=!0)}comenzar(){this.palabrasService.traerPalabra().subscribe(e=>{this.palabra=e.toString().normalize("NFD").replace(/[\u0300-\u036f]/g,"");for(let s=0;s<this.palabra.length;s++)this.palabraObj.push({letra:this.palabra[s],estado:!0});console.log(this.palabra)})}reiniciar(){this.vidas=1,this.palabraObj=[],this.palabra="",this.finalizar=!1,this.comenzar()}static#t=this.\u0275fac=function(s){return new(s||a)(t.Y36(m),t.Y36(u.q),t.Y36(g.R))};static#a=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-ahorcado"]],decls:11,vars:4,consts:[[1,"container"],[1,"row"],[1,"centrar","row","mt-4","mb-2"],[1,"centrar"],[1,"animacion",3,"src"],[1,"centrar","mt-4","mb-4"],[4,"ngFor","ngForOf"],[1,"d-flex","justify-content-around","flex-wrap"],[4,"ngIf","ngIfElse"],["elseBlock",""],[1,"btn","btn-secondary","m-4","p-3",3,"disabled"],[4,"ngIf"],[1,"btn","btn-secondary","m-4","p-3",3,"disabled","click"],[1,"d-flex","justify-content-center"],[1,"btn","btn-dark",3,"click"]],template:function(s,n){if(1&s&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t._UZ(4,"img",4),t.qZA(),t.TgZ(5,"div",5),t.YNc(6,_,3,2,"ng-container",6),t.qZA(),t.TgZ(7,"div",7),t.YNc(8,x,2,1,"ng-container",8),t.YNc(9,C,3,0,"ng-template",null,9,t.W1O),t.qZA()()()()),2&s){const l=t.MAs(10);t.xp6(4),t.s9C("src",n.img,t.LSH),t.xp6(2),t.Q6J("ngForOf",n.palabraObj),t.xp6(2),t.Q6J("ngIf",0==n.finalizar)("ngIfElse",l)}},dependencies:[r.sg,r.O5],styles:[".centrar[_ngcontent-%COMP%]{display:flex;justify-content:center}.divGrande[_ngcontent-%COMP%]{width:100%;height:1px}.animacion[_ngcontent-%COMP%]{animation-duration:1.5s;animation-name:_ngcontent-%COMP%_slidein}@keyframes _ngcontent-%COMP%_slidein{0%{margin-left:100%}to{margin-left:0%}}"]})}return a})()}];let y=(()=>{class a{static#t=this.\u0275fac=function(s){return new(s||a)};static#a=this.\u0275mod=t.oAB({type:a});static#e=this.\u0275inj=t.cJS({imports:[d.Bz.forChild(A),d.Bz]})}return a})(),O=(()=>{class a{static#t=this.\u0275fac=function(s){return new(s||a)};static#a=this.\u0275mod=t.oAB({type:a});static#e=this.\u0275inj=t.cJS({imports:[r.ez,y]})}return a})()}}]);