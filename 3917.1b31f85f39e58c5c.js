"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3917],{3917:(E,u,s)=>{s.r(u),s.d(u,{CalendarPageModule:()=>y});var d=s(6814),m=s(95),a=s(1929),h=s(5877),p=s(5861),v=s(9422),t=s(5678),C=s(2848);function Z(e,l){if(1&e){const o=t.EpF();t.TgZ(0,"ion-datetime",6),t.NdJ("ionChange",function(i){t.CHM(o);const r=t.oxw();return t.KtG(r.dateSelected(i))}),t.qZA()}if(2&e){const o=t.oxw();t.Q6J("showDefaultTitle",!0)("highlightedDates",o.highlightedDates)}}function P(e,l){if(1&e&&(t.TgZ(0,"ion-item-sliding")(1,"ion-item",8),t._UZ(2,"ion-icon",9),t.TgZ(3,"ion-label")(4,"strong"),t._uU(5),t.qZA()(),t.TgZ(6,"ion-note",10),t._uU(7),t.qZA(),t.TgZ(8,"ion-note",2),t._uU(9),t.ALo(10,"date"),t.qZA()()()),2&e){const o=l.$implicit;t.xp6(1),t.Q6J("button",!0),t.xp6(4),t.Oqu(o.name),t.xp6(2),t.Oqu(o.location),t.xp6(2),t.Oqu(t.xi3(10,4,o.start,"shortDate"))}}function D(e,l){if(1&e&&(t.TgZ(0,"ion-list"),t.YNc(1,P,11,7,"ion-item-sliding",7),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.Q6J("ngForOf",o.selectedEvents)}}function T(e,l){1&e&&t._UZ(0,"ion-spinner")}const x=[{path:"",component:(()=>{var e;class l{constructor(n){this.dataService=n,this.loading=!0,this.calendarEvents=[],this.highlightedDates=[],this.selectedEvents=[]}ngOnInit(){this.loadCalendarEvents()}loadCalendarEvents(){var n=this;return(0,p.Z)(function*(){n.dataService.GetCalendarEvents().subscribe(i=>{i.forEach(r=>{const g=new v.c4(r).convert();n.calendarEvents.push(g),g.start&&n.highlightedDates.push({date:n.getProperDateString(g.start),textColor:"var(--ion-color-secondary-contrast)",backgroundColor:"var(--ion-color-orange)"})}),console.log(n.highlightedDates),n.loading=!1})})()}getProperDateString(n){let i=n.getDate(),r=i.toString();i<10&&(r=`0${r}`);let g=n.getMonth()+1,c=g.toString();return g<10&&(c=`0${c}`),`${n.getFullYear()}-${c}-${r}`}dateSelected(n){if(this.selectedEvents=[],"string"==typeof n.detail.value){let r=n.detail.value;console.log(r);let g=new Date(r);const c=this.getProperDateString(g);for(var i of(console.log(g),this.calendarEvents)){if(!i.start)continue;const f=this.getProperDateString(i.start);console.log(f),console.log(c),f===c&&this.selectedEvents.push(i)}}}}return(e=l).\u0275fac=function(n){return new(n||e)(t.Y36(C.D))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-calendar"]],decls:13,vars:4,consts:[[3,"translucent"],["slot","start"],["slot","end"],["slot","icon-only","name","share-social-outline"],["size","cover","presentation","date",3,"showDefaultTitle","highlightedDates","ionChange",4,"ngIf"],[4,"ngIf"],["size","cover","presentation","date",3,"showDefaultTitle","highlightedDates","ionChange"],[4,"ngFor","ngForOf"],[3,"button"],["color","danger","slot","start","name","list-circle","size","large"],["color","medium","slot","start"]],template:function(n,i){1&n&&(t.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),t._UZ(3,"ion-menu-button"),t.qZA(),t.TgZ(4,"ion-title"),t._uU(5,"Calendar"),t.qZA(),t.TgZ(6,"ion-buttons",2)(7,"ion-button"),t._UZ(8,"ion-icon",3),t.qZA()()()(),t.TgZ(9,"ion-content"),t.YNc(10,Z,1,2,"ion-datetime",4)(11,D,2,1,"ion-list",5),t.qZA(),t.YNc(12,T,1,0,"ion-spinner",5)),2&n&&(t.Q6J("translucent",!0),t.xp6(10),t.Q6J("ngIf",!i.loading),t.xp6(1),t.Q6J("ngIf",i.selectedEvents),t.xp6(1),t.Q6J("ngIf",i.loading))},dependencies:[d.sg,d.O5,a.YG,a.Sm,a.W2,a.x4,a.Gu,a.gu,a.Ie,a.td,a.Q$,a.q_,a.fG,a.uN,a.PQ,a.wd,a.sr,a.QI,d.uU]}),l})()}];let S=(()=>{var e;class l{}return(e=l).\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[h.Bz.forChild(x),h.Bz]}),l})(),y=(()=>{var e;class l{}return(e=l).\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[d.ez,m.u5,a.Pc,S]}),l})()}}]);