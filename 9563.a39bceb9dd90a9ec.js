"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9563],{9563:(U,u,l)=>{l.r(u),l.d(u,{SettingsPageModule:()=>v});var c=l(6814),r=l(95),o=l(1929),g=l(5877),e=l(5678),p=l(6402);let y=(()=>{var t;class s{constructor(n){this.authService=n,this.npub="",this.nsec=""}ngOnInit(){this.npub=this.authService.npub(),this.nsec=this.authService.nsec()}}return(t=s).\u0275fac=function(n){return new(n||t)(e.Y36(p.$))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-keys"]],decls:23,vars:2,consts:[[1,"ion-padding"],["fill","clear"]],template:function(n,i){1&n&&(e.TgZ(0,"ion-content",0)(1,"h1"),e._uU(2,"Keys"),e.qZA(),e.TgZ(3,"ion-card")(4,"ion-card-header")(5,"ion-card-title"),e._uU(6,"npub"),e.qZA(),e.TgZ(7,"ion-card-subtitle"),e._uU(8,"nip-19 encoded public key"),e.qZA()(),e.TgZ(9,"ion-card-content"),e._uU(10),e.qZA(),e.TgZ(11,"ion-button",1),e._uU(12,"Copy"),e.qZA()(),e.TgZ(13,"ion-card")(14,"ion-card-header")(15,"ion-card-title"),e._uU(16,"nsec"),e.qZA(),e.TgZ(17,"ion-card-subtitle"),e._uU(18,"nip-19 encoded private key"),e.qZA()(),e.TgZ(19,"ion-card-content"),e._uU(20),e.qZA(),e.TgZ(21,"ion-button",1),e._uU(22,"Copy"),e.qZA()()()),2&n&&(e.xp6(10),e.hij(" ",i.npub," "),e.xp6(10),e.hij(" ",i.nsec," "))},dependencies:[o.YG,o.PM,o.FN,o.Zi,o.tO,o.Dq,o.W2]}),s})();var d=l(5861),h=l(2848);function m(t,s){if(1&t&&(e.TgZ(0,"ion-list")(1,"ion-item")(2,"ion-label"),e._uU(3),e.qZA()()()),2&t){const a=s.$implicit;e.xp6(3),e.Oqu(a)}}let _=(()=>{var t;class s{constructor(n){this.dataService=n,this.newRelay="",this.relays=[]}ngOnInit(){this.getRelays()}getRelays(){this.relays=[],this.dataService.getRelays().subscribe(n=>{n.forEach(i=>{this.relays.push(i)})})}saveRelay(){var n=this;return(0,d.Z)(function*(){console.log("saving"),console.log(n.newRelay),yield n.dataService.AddRelay(n.newRelay),n.newRelay="",n.getRelays()})()}}return(t=s).\u0275fac=function(n){return new(n||t)(e.Y36(h.D))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-relays"]],decls:9,vars:2,consts:[[1,"ion-padding"],["label","Add Relay","placeholder","wss://relay.damus.io/",3,"ngModel","ngModelChange"],[3,"click"],[4,"ngFor","ngForOf"]],template:function(n,i){1&n&&(e.TgZ(0,"ion-content",0)(1,"h1"),e._uU(2,"Relays"),e.qZA(),e.TgZ(3,"ion-list")(4,"ion-item")(5,"ion-input",1),e.NdJ("ngModelChange",function(C){return i.newRelay=C}),e.qZA(),e.TgZ(6,"ion-button",2),e.NdJ("click",function(){return i.saveRelay()}),e._uU(7,"Save"),e.qZA()()(),e.YNc(8,m,4,1,"ion-list",3),e.qZA()),2&n&&(e.xp6(5),e.Q6J("ngModel",i.newRelay),e.xp6(3),e.Q6J("ngForOf",i.relays))},dependencies:[c.sg,r.JJ,r.On,o.YG,o.W2,o.pK,o.Ie,o.Q$,o.q_,o.j9]}),s})();function Z(t,s){if(1&t){const a=e.EpF();e.TgZ(0,"ion-list",11)(1,"ion-item",12),e.NdJ("click",function(){e.CHM(a);const i=e.oxw();return e.KtG(i.switchComponent("keys"))}),e._UZ(2,"ion-icon",13),e.TgZ(3,"ion-label")(4,"strong"),e._uU(5,"Keys"),e.qZA()()(),e.TgZ(6,"ion-item",12),e.NdJ("click",function(){e.CHM(a);const i=e.oxw();return e.KtG(i.switchComponent("relays"))}),e._UZ(7,"ion-icon",14),e.TgZ(8,"ion-label")(9,"strong"),e._uU(10,"Relays"),e.qZA()()(),e.TgZ(11,"ion-item",15),e._UZ(12,"ion-icon",16),e.TgZ(13,"ion-label")(14,"strong"),e._uU(15,"Something else"),e.qZA()()()()}2&t&&(e.Q6J("inset",!0),e.xp6(1),e.Q6J("button",!0),e.xp6(5),e.Q6J("button",!0),e.xp6(5),e.Q6J("button",!0))}function f(t,s){if(1&t){const a=e.EpF();e.TgZ(0,"ion-button",17),e.NdJ("click",function(){e.CHM(a);const i=e.oxw();return e.KtG(i.setAllComponentsFalse())}),e._UZ(1,"ion-icon",18),e._uU(2,"Back "),e.qZA()}}function T(t,s){1&t&&e._UZ(0,"app-keys")}function A(t,s){1&t&&e._UZ(0,"app-relays")}const S=[{path:"",component:(()=>{var t;class s{constructor(){this.showList=!0,this.showKeys=!1,this.showRelays=!1}switchComponent(n){this.setAllComponentsFalse(),"keys"===n&&(this.showList=!1,this.showKeys=!0),"relays"===n&&(this.showList=!1,this.showRelays=!0)}setAllComponentsFalse(){this.showList=!0,this.showKeys=!1,this.showRelays=!1}}return(t=s).\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-settings"]],decls:22,vars:5,consts:[[3,"translucent"],["slot","start"],["slot","end"],["slot","icon-only","name","share-social-outline"],["slot","icon-only","name","add-outline"],["slot","icon-only","name","search"],["collapse","condense"],["size","large"],[3,"inset",4,"ngIf"],["fill","clear",3,"click",4,"ngIf"],[4,"ngIf"],[3,"inset"],[3,"button","click"],["color","primary","slot","start","name","key-outline","size","large"],["color","secondary","slot","start","name","server-outline","size","large"],[3,"button"],["color","success","slot","start","name","construct-outline","size","large"],["fill","clear",3,"click"],["slot","start","name","chevron-back-outline"]],template:function(n,i){1&n&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),e._UZ(3,"ion-menu-button"),e.qZA(),e.TgZ(4,"ion-title"),e._uU(5,"Settings"),e.qZA(),e.TgZ(6,"ion-buttons",2)(7,"ion-button"),e._UZ(8,"ion-icon",3),e.qZA(),e.TgZ(9,"ion-button"),e._UZ(10,"ion-icon",4),e.qZA(),e.TgZ(11,"ion-button"),e._UZ(12,"ion-icon",5),e.qZA()()()(),e.TgZ(13,"ion-content")(14,"ion-header",6)(15,"ion-toolbar")(16,"ion-title",7),e._uU(17,"Settings"),e.qZA()()(),e.YNc(18,Z,16,4,"ion-list",8)(19,f,3,0,"ion-button",9)(20,T,1,0,"app-keys",10)(21,A,1,0,"app-relays",10),e.qZA()),2&n&&(e.Q6J("translucent",!0),e.xp6(18),e.Q6J("ngIf",i.showList),e.xp6(1),e.Q6J("ngIf",!i.showList),e.xp6(1),e.Q6J("ngIf",i.showKeys),e.xp6(1),e.Q6J("ngIf",i.showRelays))},dependencies:[c.O5,o.YG,o.Sm,o.W2,o.Gu,o.gu,o.Ie,o.Q$,o.q_,o.fG,o.wd,o.sr,y,_]}),s})()}];let b=(()=>{var t;class s{}return(t=s).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[g.Bz.forChild(S),g.Bz]}),s})(),v=(()=>{var t;class s{}return(t=s).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.ez,r.u5,o.Pc,b]}),s})()}}]);