(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"1LfX":function(t,e,n){"use strict";n.r(e),n.d(e,"ReserverenModule",function(){return _});var i=n("hctd"),o=n("YUcS"),a=n("ofXK"),c=n("3Pt+"),r=n("tyNb"),s=n("ToaQ"),l=n("mrSG"),d=n("VfN6"),b=n("fXoL");let g=(()=>{let t=class{};return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=b.Hb({type:t,selectors:[["app-reservation"]],decls:1,vars:0,template:function(t,e){1&t&&b.Ob(0,"router-outlet")},directives:[r.f],encapsulation:2}),t=Object(l.a)([Object(d.a)()],t),t})();var u=n("7EHt"),f=n("JT7+"),v=n("yCIP"),m=n("2I3Q"),p=n("dNgK"),h=n("0IaG"),x=n("7EVV"),y=n("bTqV"),S=n("NFeN"),T=n("XiUz"),C=n("Wp6s"),F=n("TU8p");function L(t,e){if(1&t){const t=b.Ub();b.Tb(0,"div"),b.Tb(1,"mat-card",13),b.Tb(2,"div",14),b.Tb(3,"div",15),b.bc("click",function(){b.oc(t);const n=e.$implicit;return b.fc(2).gotoChange(n)}),b.Tb(4,"div",16),b.Tb(5,"p",17),b.vc(6),b.Sb(),b.Tb(7,"div",18),b.Tb(8,"mat-icon",19),b.vc(9,"access_time"),b.Sb(),b.Sb(),b.Tb(10,"mat-icon",20),b.vc(11,"chevron_right"),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.Sb()}if(2&t){const t=e.$implicit,n=b.fc(2);b.Db(6),b.xc(" ",t.activityDay," "),b.Db(2),b.ic("matBadge",n.reservationCount(t))("matBadgeHidden",0==n.reservationCount(t))}}function O(t,e){if(1&t&&(b.Tb(0,"div",5),b.Tb(1,"h2",6),b.vc(2,"Reserveer je lessen"),b.Sb(),b.Tb(3,"div",7),b.Tb(4,"div",8),b.Tb(5,"b"),b.vc(6,"Locatie"),b.Sb(),b.Sb(),b.Tb(7,"div",9),b.vc(8),b.Sb(),b.Sb(),b.Tb(9,"div"),b.Tb(10,"div",10),b.Tb(11,"div",11),b.uc(12,L,12,3,"div",12),b.Sb(),b.Sb(),b.Sb(),b.Sb()),2&t){const t=b.fc();b.Db(8),b.wc(t.location),b.Db(4),b.ic("ngForOf",t.items)}}const w=[{path:"",component:g,children:[{path:"",component:(()=>{let t=class{constructor(t,e,n,i){this.ladyFitService=t,this.snackBar=e,this.router=n,this.dialog=i,this.toggleText="open alles",this.loading=!1,this.error=!1,this.location="Allemaal",this.items=[]}ngOnInit(){return this.loadActivities()}openLocationDialog(){this.dialog.open(v.a).afterClosed().subscribe(t=>this.updateLocation())}gotoChange(t){this.router.navigate(["reserveren/change"],{queryParams:{day:t.activityDay}})}reservationCount(t){return t.activities.filter(t=>t.isActive).length}loadActivities(){return this.loading=!0,this.ladyFitService.getActivities().subscribe(t=>{const e=[];this.ladyFitService.convertAndSort(t,e),this.items=e,this.activityItems=JSON.parse(JSON.stringify(this.items)),this.updateLocation(),this.loading=!1,this.error=!1},t=>{this.error=!0,this.loading=!1,this.snackBar.openFromComponent(f.a,{duration:0,horizontalPosition:"center",verticalPosition:"top",panelClass:"snackbar-error"}).onAction().subscribe(()=>{this.loadActivities()})})}updateLocation(){const t=localStorage.getItem("LadyFitLocation");t?(this.location=t,this.items=[...this.activityItems.filter(t=>t.activities&&t.activities.filter(t=>t.location&&this.location.includes(t.location)).length>0)]):this.location="Allemaal"}};return t.\u0275fac=function(e){return new(e||t)(b.Nb(m.a),b.Nb(p.a),b.Nb(r.c),b.Nb(h.a))},t.\u0275cmp=b.Hb({type:t,selectors:[["app-create-reservation"]],viewQuery:function(t,e){if(1&t&&b.yc(u.a,1),2&t){let t;b.mc(t=b.cc())&&(e.accordion=t.first)}},decls:7,vars:3,consts:[[3,"loading","error"],[1,"floating-button"],["mat-mini-fab","","color","primary",3,"click"],["fxLayout","column","fxLayoutAlign","center center","fxFlexFill",""],["fxLayout","column","fxFlexFill","",4,"ngIf"],["fxLayout","column","fxFlexFill",""],[1,"center-text"],["fxLayout","row nowrap","fxLayoutAlign","start start","fxFlex","",1,"activity-row"],["fxFlex","none",1,"locatie"],["fxFlex",""],["id","content-area",1,"content-area"],[1,"content"],[4,"ngFor","ngForOf"],[1,"mat-elevation-z2","booking-card"],["fxLayout","column"],["fxFlex","none",3,"click"],["fxLayout","row","fxLayoutAlign","start center"],["fxFlex","",1,"title-content"],["fxFlex","none",1,"badge-content"],["matBadgeSize","small","matBadgeColor","warn",3,"matBadge","matBadgeHidden"],["aria-hidden","false","fxFlex","none",1,"chevron"]],template:function(t,e){1&t&&(b.Ob(0,"app-spinner-error-message",0),b.Tb(1,"div",1),b.Tb(2,"button",2),b.bc("click",function(){return e.openLocationDialog()}),b.Tb(3,"mat-icon"),b.vc(4,"filter_list"),b.Sb(),b.Sb(),b.Sb(),b.Tb(5,"div",3),b.uc(6,O,13,2,"div",4),b.Sb()),2&t&&(b.ic("loading",e.loading)("error",e.error),b.Db(6),b.ic("ngIf",!e.loading&&!e.error))},directives:[x.a,y.a,S.a,T.d,T.c,T.f,a.j,T.b,a.i,C.a,F.a],styles:[".content-area[_ngcontent-%COMP%]{position:relative;overflow:hidden}.content-area[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{padding:.5em;overflow:auto;background-color:background-color(card)}.booking-card[_ngcontent-%COMP%]{padding:0 0 0 1em;margin:.2em;cursor:pointer}.chevron[_ngcontent-%COMP%]{padding:0 1em}.title-content[_ngcontent-%COMP%]{padding:1em 0 .3em}.toggle-button[_ngcontent-%COMP%]{padding-bottom:0;padding-right:2.2em}.center-text[_ngcontent-%COMP%]{text-align:center}.floating-button[_ngcontent-%COMP%]{position:absolute;top:.5rem;right:1.4rem;transform:scale(.9);z-index:500}.locatie[_ngcontent-%COMP%]{padding:0 1em}"]}),t=Object(l.a)([Object(d.a)()],t),t})(),data:{}},{path:"change",component:s.a,data:{navBarHeaderInLayout:{show:!0,headerText:"Reserveren"}}}]}];let P=(()=>{class t{}return t.\u0275mod=b.Lb({type:t}),t.\u0275inj=b.Kb({factory:function(e){return new(e||t)},imports:[[r.e.forChild(w)],r.e]}),t})();var k=n("PCNd");let _=(()=>{class t{}return t.\u0275mod=b.Lb({type:t}),t.\u0275inj=b.Kb({factory:function(e){return new(e||t)},imports:[[P,a.b,c.h,o.a,i.a,k.a]]}),t})()}}]);