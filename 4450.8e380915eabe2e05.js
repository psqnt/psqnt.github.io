"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4450],{4450:(J,u,s)=>{s.r(u),s.d(u,{HomePageModule:()=>w});var p=s(6814),g=s(95),n=s(1929),f=s(5877),o=s(5678),d=s(5861),h=s(7316),_=s(5619),T=s(4664),v=s(2181),x=s(7715),U=s(2096),A=s(2014);const c="testkey";let Z=(()=>{var t;class l{constructor(e){this.storage=e,this.storageReady=new _.X(!1),this.init()}init(){var e=this;return(0,d.Z)(function*(){console.log("INIT"),yield e.storage.defineDriver(h),yield e.storage.create(),e.storageReady.next(!0),console.log("DONE")})()}getData(){return this.storageReady.pipe((0,v.h)(e=>e),(0,T.w)(e=>(console.log("OK LETS GO"),(0,x.D)(this.storage.get(c))||(0,U.of)([]))))}addItem(e){var i=this;return(0,d.Z)(function*(){const r=(yield i.storage.get(c))||[];return r.push(e),i.storage.set(c,r)})()}removeItem(e){var i=this;return(0,d.Z)(function*(){const r=(yield i.storage.get(c))||[];return r.splice(e,1),i.storage.set(c,r)})()}}return(t=l).\u0275fac=function(e){return new(e||t)(o.LFG(A.K))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),l})();function H(t,l){if(1&t&&(o.TgZ(0,"ion-item",2),o._UZ(1,"ion-icon",3),o.TgZ(2,"ion-label")(3,"strong"),o._uU(4,"Garage"),o.qZA()(),o.TgZ(5,"ion-label"),o._uU(6),o.qZA(),o.TgZ(7,"ion-note",4),o._uU(8,"12/15/2023"),o.qZA()()),2&t){const a=l.$implicit;o.Q6J("button",!0),o.xp6(6),o.Oqu(a)}}let C=(()=>{var t;class l{constructor(e){this.dataService=e,this.listData=[],this.loadData()}loadData(){var e=this;return(0,d.Z)(function*(){e.dataService.getData().subscribe(i=>{e.listData=i})})()}handleRefresh(e){setTimeout(()=>{this.loadData(),e.target.complete()},2e3)}}return(t=l).\u0275fac=function(e){return new(e||t)(o.Y36(Z))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-upcoming-list"]],decls:4,vars:1,consts:[["slot","fixed",3,"ionRefresh"],[3,"button",4,"ngFor","ngForOf"],[3,"button"],["color","danger","slot","start","name","list-circle","size","large"],["slot","end"]],template:function(e,i){1&e&&(o.TgZ(0,"ion-refresher",0),o.NdJ("ionRefresh",function(m){return i.handleRefresh(m)}),o._UZ(1,"ion-refresher-content"),o.qZA(),o.TgZ(2,"ion-list"),o.YNc(3,H,9,2,"ion-item",1),o.qZA()),2&e&&(o.xp6(3),o.Q6J("ngForOf",i.listData))},dependencies:[p.sg,n.gu,n.Ie,n.Q$,n.q_,n.uN,n.nJ,n.Wo]}),l})(),y=(()=>{var t;class l{constructor(){}ngOnInit(){}}return(t=l).\u0275fac=function(e){return new(e||t)},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-home-view"]],decls:22,vars:0,consts:[["slot","end"],["slot","end","name","arrow-forward-outline"]],template:function(e,i){1&e&&(o.TgZ(0,"ion-toolbar")(1,"ion-title"),o._uU(2,"Main House"),o.qZA(),o.TgZ(3,"ion-buttons",0)(4,"ion-button"),o._uU(5,"Yard"),o._UZ(6,"ion-icon",1),o.qZA()()(),o.TgZ(7,"ion-grid")(8,"ion-row")(9,"ion-col"),o._uU(10,"Kitchen"),o.qZA(),o.TgZ(11,"ion-col"),o._uU(12,"Bathroom"),o.qZA(),o.TgZ(13,"ion-col"),o._uU(14,"Living Room"),o.qZA(),o.TgZ(15,"ion-col"),o._uU(16,"Bedrooms"),o.qZA()(),o.TgZ(17,"ion-row")(18,"ion-col"),o._uU(19,"Garage"),o.qZA(),o.TgZ(20,"ion-col"),o._uU(21,"Basement"),o.qZA()()())},dependencies:[n.YG,n.Sm,n.wI,n.jY,n.gu,n.Nd,n.wd,n.sr],styles:["ion-grid[_ngcontent-%COMP%]{--ion-grid-padding: 20px;--ion-grid-padding-xs: 20px;--ion-grid-padding-sm: 20px;--ion-grid-padding-md: 20px;--ion-grid-padding-lg: 20px;--ion-grid-padding-xl: 20px;--ion-grid-column-padding: 30px;--ion-grid-column-padding-xs: 30px;--ion-grid-column-padding-sm: 30px;--ion-grid-column-padding-md: 30px;--ion-grid-column-padding-lg: 30px;--ion-grid-column-padding-xl: 30px}ion-col[_ngcontent-%COMP%]{background-color:#135d54;border:solid 1px #fff;color:#fff;text-align:center}"]}),l})();function M(t,l){1&t&&o._UZ(0,"ion-datetime",19)}function b(t,l){if(1&t){const a=o.EpF();o.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",1)(3,"ion-button",12),o.NdJ("click",function(){o.CHM(a);const i=o.oxw();return o.KtG(i.cancel())}),o._uU(4,"Cancel"),o.qZA()(),o.TgZ(5,"ion-title"),o._uU(6,"Add home reminder"),o.qZA(),o.TgZ(7,"ion-buttons",2)(8,"ion-button",13),o.NdJ("click",function(){o.CHM(a);const i=o.oxw();return o.KtG(i.confirm())}),o._uU(9,"Confirm"),o.qZA()()()(),o.TgZ(10,"ion-content",14)(11,"ion-list")(12,"ion-item")(13,"ion-input",15),o.NdJ("ngModelChange",function(i){o.CHM(a);const r=o.oxw();return o.KtG(r.area=i)}),o.qZA()(),o.TgZ(14,"ion-item")(15,"ion-input",16),o.NdJ("ngModelChange",function(i){o.CHM(a);const r=o.oxw();return o.KtG(r.toDo=i)}),o.qZA()(),o.TgZ(16,"ion-item"),o._UZ(17,"ion-datetime-button",17),o.TgZ(18,"ion-modal",18),o.YNc(19,M,1,0,"ng-template"),o.qZA()()()()}if(2&t){const a=o.oxw();o.xp6(8),o.Q6J("strong",!0),o.xp6(5),o.Q6J("ngModel",a.area),o.xp6(2),o.Q6J("ngModel",a.toDo),o.xp6(3),o.Q6J("keepContentsMounted",!0)}}const D=[{path:"",component:(()=>{var t;class l{constructor(e){this.dataService=e,this.area="",this.toDo="",this.due=""}addItem(e){this.dataService.addItem(e)}cancel(){this.modal&&this.modal.dismiss(null,"cancel")}confirm(){this.modal&&this.modal.dismiss(this.area,"confirm")}onWillDismiss(e){"confirm"===e.detail.role&&this.addItem(`${e.detail.data}`)}}return(t=l).\u0275fac=function(e){return new(e||t)(o.Y36(Z))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-home"]],viewQuery:function(e,i){if(1&e&&o.Gf(n.ki,5),2&e){let r;o.iGM(r=o.CRH())&&(i.modal=r.first)}},decls:25,vars:3,consts:[[3,"translucent"],["slot","start"],["slot","end"],["slot","icon-only","name","share-social-outline"],["slot","icon-only","name","add-outline"],["slot","icon-only","name","search"],[3,"fullscreen"],["collapse","condense"],["size","large"],["slot","fixed","vertical","bottom","horizontal","end","id","open-modal"],["name","add"],["trigger","open-modal",3,"willDismiss"],[3,"click"],[3,"strong","click"],[1,"ion-padding"],["label","Area","labelPlacement","floating","type","text","placeholder","Kitchen",3,"ngModel","ngModelChange"],["label","To Do","labelPlacement","floating","type","text","placeholder","paint walls",3,"ngModel","ngModelChange"],["datetime","datetime"],[3,"keepContentsMounted"],["id","datetime"]],template:function(e,i){1&e&&(o.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),o._UZ(3,"ion-menu-button"),o.qZA(),o.TgZ(4,"ion-title"),o._uU(5,"Husband Helper"),o.qZA(),o.TgZ(6,"ion-buttons",2)(7,"ion-button"),o._UZ(8,"ion-icon",3),o.qZA(),o.TgZ(9,"ion-button"),o._UZ(10,"ion-icon",4),o.qZA(),o.TgZ(11,"ion-button"),o._UZ(12,"ion-icon",5),o.qZA()()()(),o.TgZ(13,"ion-content",6)(14,"ion-header",7)(15,"ion-toolbar")(16,"ion-title",8),o._uU(17),o.qZA()()(),o._UZ(18,"app-home-view")(19,"app-upcoming-list"),o.TgZ(20,"ion-fab",9)(21,"ion-fab-button"),o._UZ(22,"ion-icon",10),o.qZA()(),o.TgZ(23,"ion-modal",11),o.NdJ("willDismiss",function(m){return i.onWillDismiss(m)}),o.YNc(24,b,20,4,"ng-template"),o.qZA()()),2&e&&(o.Q6J("translucent",!0),o.xp6(13),o.Q6J("fullscreen",!0),o.xp6(4),o.Oqu(i.home))},dependencies:[g.JJ,g.On,n.YG,n.Sm,n.W2,n.x4,n.Mj,n.IJ,n.W4,n.Gu,n.gu,n.pK,n.Ie,n.q_,n.fG,n.wd,n.sr,n.ki,n.QI,n.j9,C,y]}),l})()}];let P=(()=>{var t;class l{}return(t=l).\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[f.Bz.forChild(D),f.Bz]}),l})(),w=(()=>{var t;class l{}return(t=l).\u0275fac=function(e){return new(e||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[p.ez,g.u5,n.Pc,P]}),l})()}}]);