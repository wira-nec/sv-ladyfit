(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"1LfX":function(t,e,i){"use strict";i.r(e),i.d(e,"reservationsModule",function(){return k});var n=i("hctd"),o=i("YUcS"),a=i("ofXK"),c=i("3Pt+"),r=i("tyNb"),s=i("ToaQ"),l=i("mrSG"),d=i("VfN6"),b=i("fXoL");let g=(()=>{let t=class{};return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=b.Hb({type:t,selectors:[["app-reservation"]],decls:1,vars:0,template:function(t,e){1&t&&b.Ob(0,"router-outlet")},directives:[r.f],encapsulation:2}),t=Object(l.a)([Object(d.a)()],t),t})();var u=i("7EHt"),f=i("JT7+"),m=i("yCIP"),v=i("2I3Q"),p=i("dNgK"),h=i("0IaG"),x=i("7EVV"),y=i("XiUz"),S=i("bTqV"),T=i("NFeN"),F=i("Wp6s"),w=i("TU8p");function C(t,e){if(1&t){const t=b.Ub();b.Tb(0,"div",6),b.Tb(1,"mat-card",11),b.Tb(2,"div",12),b.bc("click",function(){b.oc(t);const i=e.$implicit;return b.fc(2).gotoChange(i)}),b.Tb(3,"div",13),b.Tb(4,"p",14),b.vc(5),b.Sb(),b.Tb(6,"div",15),b.Tb(7,"mat-icon",16),b.vc(8,"access_time"),b.Sb(),b.Sb(),b.Tb(9,"mat-icon",17),b.vc(10,"chevron_right"),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.Sb()}if(2&t){const t=e.$implicit,i=b.fc(2);b.Db(5),b.xc(" ",t.activityDay," "),b.Db(2),b.ic("matBadge",i.reservationCount(t))("matBadgeHidden",0==i.reservationCount(t))}}function L(t,e){if(1&t){const t=b.Ub();b.Tb(0,"div",2),b.Tb(1,"h2",3),b.vc(2,"Reserveer Activiteit(en)"),b.Sb(),b.Tb(3,"div",4),b.Tb(4,"div",5),b.Tb(5,"b"),b.vc(6,"Filter op locatie"),b.Sb(),b.Sb(),b.Tb(7,"div",6),b.vc(8),b.Sb(),b.Tb(9,"div",7),b.Tb(10,"button",8),b.bc("click",function(){return b.oc(t),b.fc().openLocationDialog()}),b.Tb(11,"mat-icon"),b.vc(12,"filter_list"),b.Sb(),b.Sb(),b.Sb(),b.Sb(),b.Tb(13,"div",9),b.uc(14,C,11,3,"div",10),b.Sb(),b.Sb()}if(2&t){const t=b.fc();b.Db(8),b.wc(t.location),b.Db(6),b.ic("ngForOf",t.items)}}const O=[{path:"",component:g,children:[{path:"",component:(()=>{let t=class{constructor(t,e,i,n){this.ladyFitService=t,this.snackBar=e,this.router=i,this.dialog=n,this.toggleText="open alles",this.loading=!1,this.error=!1,this.location="Allemaal",this.items=[]}ngOnInit(){return this.loadActivities()}openLocationDialog(){this.dialog.open(m.a).afterClosed().subscribe(t=>this.updateLocation())}gotoChange(t){this.router.navigate(["reservations/change"],{queryParams:{day:t.activityDay}})}reservationCount(t){return t.activities.filter(t=>t.isActive).length}loadActivities(){return this.loading=!0,this.ladyFitService.getActivities().subscribe(t=>{const e=[];this.ladyFitService.convertAndSort(t,e),this.items=e,this.activityItems=JSON.parse(JSON.stringify(this.items)),this.updateLocation(),this.loading=!1,this.error=!1},t=>{this.error=!0,this.loading=!1,this.snackBar.openFromComponent(f.a,{duration:0,horizontalPosition:"center",verticalPosition:"top",panelClass:"snackbar-error"}).onAction().subscribe(()=>{this.loadActivities()})})}updateLocation(){const t=localStorage.getItem("LadyFitLocation");t?(this.location=t,this.items=[...this.activityItems.filter(t=>t.activities&&t.activities.filter(t=>t.location&&this.location.includes(t.location)).length>0)]):this.location="Allemaal"}};return t.\u0275fac=function(e){return new(e||t)(b.Nb(v.a),b.Nb(p.a),b.Nb(r.c),b.Nb(h.a))},t.\u0275cmp=b.Hb({type:t,selectors:[["app-create-reservation"]],viewQuery:function(t,e){if(1&t&&b.yc(u.a,1),2&t){let t;b.mc(t=b.cc())&&(e.accordion=t.first)}},decls:2,vars:3,consts:[[3,"loading","error"],["fxLayout","column","fxFlexFill","",4,"ngIf"],["fxLayout","column","fxFlexFill",""],[1,"center-text"],["fxLayout","row nowrap","fxLayoutAlign","start start","fxFlex","",1,"activity-row"],["fxFlex","nogrow",1,"locatie"],["fxFlex",""],["fxFlex","none",1,"filter-button"],["mat-mini-fab","","color","secondary",3,"click"],["fxLayout","column","fxFlexFill","",1,"content"],["fxFlex","",4,"ngFor","ngForOf"],[1,"mat-elevation-z2","booking-card"],[3,"click"],["fxLayout","row","fxLayoutAlign","start center"],["fxFlex","",1,"title-content"],["fxFlex","none",1,"time"],["matBadgeSize","small","matBadgeColor","warn",3,"matBadge","matBadgeHidden"],["aria-hidden","false","fxFlex","none"]],template:function(t,e){1&t&&(b.Ob(0,"app-spinner-error-message",0),b.uc(1,L,15,2,"div",1)),2&t&&(b.ic("loading",e.loading)("error",e.error),b.Db(1),b.ic("ngIf",!e.loading&&!e.error))},directives:[x.a,a.j,y.d,y.f,y.c,y.b,S.a,T.a,a.i,F.a,w.a],styles:[".content[_ngcontent-%COMP%]{padding:0 .5em;overflow:auto;background-color:background-color(card)}.booking-card[_ngcontent-%COMP%]{padding:0 0 0 1em;margin:.2em;cursor:pointer}.time[_ngcontent-%COMP%]{margin:.3em .5em 0 0}.title-content[_ngcontent-%COMP%]{padding:1em 0 .3em}.toggle-button[_ngcontent-%COMP%]{padding-bottom:0;padding-right:2.2em}.center-text[_ngcontent-%COMP%]{text-align:center}.filter-button[_ngcontent-%COMP%]{transform:scale(.9);padding-right:1em;margin-top:-.7em}.locatie[_ngcontent-%COMP%]{padding:0 1em}.activity-row[_ngcontent-%COMP%]{padding-bottom:2.5em}"]}),t=Object(l.a)([Object(d.a)()],t),t})(),data:{navBarHeaderInLayout:{show:!0,headerText:"Mijn Activiteiten"}}},{path:"change",component:s.a,data:{navBarHeaderInLayout:{show:!0,headerText:"Reserveer Activiteit(en)"}}}]}];let P=(()=>{class t{}return t.\u0275mod=b.Lb({type:t}),t.\u0275inj=b.Kb({factory:function(e){return new(e||t)},imports:[[r.e.forChild(O)],r.e]}),t})();var A=i("PCNd");let k=(()=>{class t{}return t.\u0275mod=b.Lb({type:t}),t.\u0275inj=b.Kb({factory:function(e){return new(e||t)},imports:[[P,a.b,c.h,o.a,n.a,A.a]]}),t})()}}]);