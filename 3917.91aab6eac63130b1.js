"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3917],{3917:(D,g,o)=>{o.r(g),o.d(g,{CalendarPageModule:()=>S});var u=o(6814),f=o(95),a=o(1929),h=o(5877),v=o(5861),m=o(9422),n=o(5678),p=o(2848);function C(t,r){if(1&t&&(n.TgZ(0,"ion-content"),n._UZ(1,"ion-datetime",7),n.qZA()),2&t){const l=n.oxw();n.xp6(1),n.Q6J("highlightedDates",l.highlightedDates)}}function Z(t,r){1&t&&n._UZ(0,"ion-spinner")}const P=[{path:"",component:(()=>{var t;class r{constructor(e){this.dataService=e,this.loading=!0,this.calendarEvents=[],this.highlightedDates=[]}ngOnInit(){this.loadCalendarEvents()}loadCalendarEvents(){var e=this;return(0,v.Z)(function*(){e.dataService.GetCalendarEvents().subscribe(i=>{i.forEach(c=>{const s=new m.c4(c).convert();e.calendarEvents.push(s),s.start&&e.highlightedDates.push({date:e.getProperDateString(s.start),textColor:"var(--ion-color-secondary-contrast)",backgroundColor:"var(--ion-color-secondary)"})}),console.log(e.highlightedDates),e.loading=!1})})()}getProperDateString(e){let i=e.getDate(),c=i.toString();i<10&&(c=`0${c}`);let s=e.getMonth()+1,d=s.toString();return s<10&&(d=`0${d}`),`${e.getFullYear()}-${d}-${c}`}}return(t=r).\u0275fac=function(e){return new(e||t)(n.Y36(p.D))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-calendar"]],decls:15,vars:3,consts:[[3,"translucent"],["slot","start"],["slot","end"],["slot","icon-only","name","share-social-outline"],["slot","icon-only","name","add-outline"],["slot","icon-only","name","search"],[4,"ngIf"],["size","cover","locale","en-US","presentation","date",3,"highlightedDates"]],template:function(e,i){1&e&&(n.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),n._UZ(3,"ion-menu-button"),n.qZA(),n.TgZ(4,"ion-title"),n._uU(5,"Calendar"),n.qZA(),n.TgZ(6,"ion-buttons",2)(7,"ion-button"),n._UZ(8,"ion-icon",3),n.qZA(),n.TgZ(9,"ion-button"),n._UZ(10,"ion-icon",4),n.qZA(),n.TgZ(11,"ion-button"),n._UZ(12,"ion-icon",5),n.qZA()()()(),n.YNc(13,C,2,1,"ion-content",6)(14,Z,1,0,"ion-spinner",6)),2&e&&(n.Q6J("translucent",!0),n.xp6(13),n.Q6J("ngIf",!i.loading),n.xp6(1),n.Q6J("ngIf",i.loading))},dependencies:[u.O5,a.YG,a.Sm,a.W2,a.x4,a.Gu,a.gu,a.fG,a.PQ,a.wd,a.sr,a.QI]}),r})()}];let y=(()=>{var t;class r{}return(t=r).\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[h.Bz.forChild(P),h.Bz]}),r})(),S=(()=>{var t;class r{}return(t=r).\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[u.ez,f.u5,a.Pc,y]}),r})()}}]);