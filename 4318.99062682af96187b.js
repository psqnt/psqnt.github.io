"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4318],{4318:(q,g,a)=>{a.r(g),a.d(g,{ContributorsPageModule:()=>A});var c=a(6814),C=a(95),i=a(1929),_=a(5877),d=a(5861),t=a(5678),p=a(2848);function f(n,s){if(1&n&&(t.TgZ(0,"div")(1,"ion-card")(2,"ion-card-content")(3,"ion-avatar"),t._UZ(4,"img",8),t.qZA()(),t.TgZ(5,"ion-card-header")(6,"ion-card-title"),t._uU(7),t.qZA()(),t.TgZ(8,"ion-card-content"),t._uU(9),t.qZA()()()),2&n){const e=t.oxw();t.xp6(4),t.s9C("src",e.userContent.picture,t.LSH),t.xp6(3),t.Oqu(e.userContent.name),t.xp6(2),t.hij(" ",e.userContent.about," ")}}function m(n,s){1&n&&(t.TgZ(0,"div")(1,"ion-text"),t._uU(2,"Go to settings and connect to nostr network to load Contributors"),t.qZA()())}function b(n,s){if(1&n&&(t.TgZ(0,"p"),t._uU(1),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.pubkey)}}function h(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"ion-item-sliding")(1,"ion-item")(2,"ion-avatar",1),t._UZ(3,"ion-img",12),t.qZA(),t.TgZ(4,"ion-label")(5,"h2"),t._uU(6),t.qZA(),t.TgZ(7,"p"),t._uU(8),t.qZA(),t.YNc(9,b,2,1,"p",2),t.qZA()(),t.TgZ(10,"ion-item-options",13)(11,"ion-item-option",14)(12,"ion-icon",15),t.NdJ("click",function(){const u=t.CHM(e).index,l=t.oxw(2);return t.KtG(l.removeContributor(u))}),t.qZA()()()()}if(2&n){const e=s.$implicit;t.xp6(3),t.s9C("src",e.picture),t.xp6(3),t.Oqu(e.name),t.xp6(2),t.Oqu(e.about),t.xp6(1),t.Q6J("ngIf",e.pubkey)}}function Z(n,s){if(1&n&&(t.TgZ(0,"ion-list",9)(1,"ion-text",10)(2,"h4"),t._uU(3,"Publishing Event will add these users as invitees"),t.qZA()(),t.YNc(4,h,13,4,"ion-item-sliding",11),t.qZA()),2&n){const e=t.oxw();t.Q6J("inset",!0),t.xp6(4),t.Q6J("ngForOf",e.currentContributors)}}function x(n,s){if(1&n&&(t.TgZ(0,"p"),t._uU(1),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.pubkey)}}function v(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"ion-item")(1,"ion-avatar",1),t._UZ(2,"ion-img",12),t.qZA(),t.TgZ(3,"ion-label")(4,"h2"),t._uU(5),t.qZA(),t.TgZ(6,"p"),t._uU(7),t.qZA(),t.YNc(8,x,2,1,"p",2),t.qZA(),t.TgZ(9,"ion-button",19),t.NdJ("click",function(){const u=t.CHM(e).index,l=t.oxw(2);return t.KtG(l.addContributors(u))}),t._uU(10,"Add"),t.qZA()()}if(2&n){const e=s.$implicit;t.xp6(2),t.s9C("src",e.picture),t.xp6(3),t.Oqu(e.name),t.xp6(2),t.Oqu(e.about),t.xp6(1),t.Q6J("ngIf",e.pubkey),t.xp6(1),t.Q6J("strong",!0)}}function T(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),t._uU(3,"Add Contributors"),t.qZA(),t.TgZ(4,"ion-buttons",16)(5,"ion-button",17),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.confirm())}),t._uU(6,"Close"),t.qZA()()(),t.TgZ(7,"ion-searchbar",18),t.NdJ("ionInput",function(r){t.CHM(e);const u=t.oxw();return t.KtG(u.handleInput(r))})("ionClear",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.clearSearch())}),t.qZA()(),t.TgZ(8,"ion-content")(9,"ion-list"),t.YNc(10,v,11,5,"ion-item",11),t.qZA()()}if(2&n){const e=t.oxw();t.xp6(7),t.Q6J("debounce",500),t.xp6(3),t.Q6J("ngForOf",e.filteredUserContents)}}const P=[{path:"",component:(()=>{var n;class s{constructor(o){this.dataService=o,this.userContent=null,this.userContents=[],this.filteredUserContents=[],this.selectedUserContents=[],this.currentContributors=[],this.selectedNPub=""}ngOnInit(){this.getProfile(),this.getUserContents(),this.getCurrentContributors()}getProfile(){this.dataService.getProfiles().subscribe(o=>{null!==o?(this.userContent=o[0],this.userContent&&!this.userContent.hasOwnProperty("picture")&&(this.userContent.picture="https://ionicframework.com/docs/img/demos/avatar.svg")):this.userContent=null})}getCurrentContributors(){this.currentContributors=[],this.dataService.getContributors().subscribe(o=>{if(null!==o)for(var r of o)this.currentContributors.push(r)})}getUserContents(){this.dataService.getContactList().subscribe(o=>{if(null!==o)for(var r of o)this.userContents.push(r);this.filteredUserContents=this.userContents})}confirm(){this.modal&&(console.log(this.selectedUserContents),this.saveContributors(),this.modal.dismiss(null,"confirm"))}saveContributors(){var o=this;return(0,d.Z)(function*(){for(var r of o.selectedUserContents)yield o.dataService.addContributor(r);o.getCurrentContributors()})()}addContributors(o){this.selectedUserContents.push(this.filteredUserContents[o])}removeContributor(o){var r=this;return(0,d.Z)(function*(){console.log("REMVVING"),yield r.dataService.removeContributor(o),r.currentContributors.splice(o,1)})()}handleInput(o){if(o.target&&o.target.value){const r=o.target.value.toLowerCase();console.log(r),this.filteredUserContents=""===r||null===r?this.userContents:this.userContents.filter(u=>u.name.toLowerCase().indexOf(r)>-1)}}clearSearch(){this.filteredUserContents=this.userContents}}return(n=s).\u0275fac=function(o){return new(o||n)(t.Y36(p.D))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-contributors"]],viewQuery:function(o,r){if(1&o&&t.Gf(i.ki,5),2&o){let u;t.iGM(u=t.CRH())&&(r.modal=u.first)}},decls:16,vars:4,consts:[[3,"translucent"],["slot","start"],[4,"ngIf"],[3,"inset",4,"ngIf"],["slot","fixed","vertical","bottom","horizontal","end","id","open-modal"],["name","add"],["trigger","open-modal"],["modal",""],["alt","profile picture",3,"src"],[3,"inset"],[1,"ion-padding"],[4,"ngFor","ngForOf"],[3,"src"],["side","end"],["color","danger"],["slot","icon-only","name","trash",3,"click"],["slot","end"],[3,"click"],["show-clear-button","always",3,"debounce","ionInput","ionClear"],[3,"strong","click"]],template:function(o,r){1&o&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),t._UZ(3,"ion-menu-button"),t.qZA(),t.TgZ(4,"ion-title"),t._uU(5,"Contributors"),t.qZA()()(),t.TgZ(6,"ion-content"),t.YNc(7,f,10,3,"div",2)(8,m,3,0,"div",2)(9,Z,5,2,"ion-list",3),t.TgZ(10,"ion-fab",4)(11,"ion-fab-button"),t._UZ(12,"ion-icon",5),t.qZA()(),t.TgZ(13,"ion-modal",6,7),t.YNc(15,T,11,2,"ng-template"),t.qZA()()),2&o&&(t.Q6J("translucent",!0),t.xp6(7),t.Q6J("ngIf",r.userContent),t.xp6(1),t.Q6J("ngIf",!r.userContent),t.xp6(1),t.Q6J("ngIf",r.currentContributors.length>0))},dependencies:[c.sg,c.O5,i.BJ,i.YG,i.Sm,i.PM,i.FN,i.Zi,i.Dq,i.W2,i.IJ,i.W4,i.Gu,i.gu,i.Xz,i.Ie,i.u8,i.IK,i.td,i.Q$,i.q_,i.fG,i.VI,i.yW,i.wd,i.sr,i.ki,i.j9]}),s})()}];let U=(()=>{var n;class s{}return(n=s).\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[_.Bz.forChild(P),_.Bz]}),s})(),A=(()=>{var n;class s{}return(n=s).\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[c.ez,C.u5,i.Pc,U]}),s})()}}]);