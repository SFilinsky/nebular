(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{SM1g:function(e,t,n){"use strict";n.r(t);var r=n("Valr"),i=n("QJY3"),s=n("cUzu"),o=n("0AKQ"),a=n("F4EV"),c=n("n81q"),l=n("15JJ"),u=n("BDhN"),b=n("0ICW"),g=n("TYT/"),d=function(){function e(e,t){this.injector=e,this.filter=t}return e.prototype.intercept=function(e,t){var n=this;return this.filter(e)?t.handle(e):this.authService.isAuthenticatedOrRefresh().pipe(Object(l.a)((function(r){return r?n.authService.getToken().pipe(Object(l.a)((function(n){var r="Bearer "+n.getValue();return e=e.clone({setHeaders:{Authorization:r}}),t.handle(e)}))):t.handle(e)})))},Object.defineProperty(e.prototype,"authService",{get:function(){return this.injector.get(u.a)},enumerable:!0,configurable:!0}),e.\u0275fac=function(t){return new(t||e)(g.hc(g.s),g.hc(b.e))},e.\u0275prov=g.Pb({token:e,factory:e.\u0275fac}),e}(),f=n("Abgx"),p=n("6y2k"),h=n("++eV"),m=n("4pP6"),v=n("X/Iy"),y=n("89WS"),w=function(){return function(){}}(),Y=new g.r("Nebular Security Options"),Z=function(e){return Object.assign({},e)},O=function(e){return Object.assign([],e)},M=function(e){var t=e.parent;return delete e.parent,t},F=function(){function e(e){void 0===e&&(e={}),this.settings=e,this.state={},e.accessControl&&this.setAccessControl(e.accessControl)}return e.prototype.setAccessControl=function(e){for(var t=0,n=Object.entries(e);t<n.length;t++){var r=n[t],i=r[0],s=Z(r[1]),o=M(s);this.register(i,o,s)}},e.prototype.register=function(e,t,n){void 0===t&&(t=null),void 0===n&&(n={}),this.validateRole(e),this.state[e]={parent:t};for(var r=0,i=Object.entries(n);r<i.length;r++){var s=i[r],o=s[1];this.allow(e,s[0],O("string"==typeof o?[o]:o))}},e.prototype.allow=function(e,t,n){this.validateRole(e),this.getRole(e)||this.register(e,null,{}),n="string"==typeof n?[n]:n;var r=O(this.getRoleResources(e,t));r=r.concat(n),this.state[e][t]=r.filter((function(e,t){return r.indexOf(e)===t}))},e.prototype.can=function(e,t,n){return this.validateResource(n),this.getRoleParent(e)&&this.can(this.getRoleParent(e),t,n)||this.exactCan(e,t,n)},e.prototype.getRole=function(e){return this.state[e]},e.prototype.validateRole=function(e){if(!e)throw new Error("NbAclService: role name cannot be empty")},e.prototype.validateResource=function(t){if(!t||[e.ANY_RESOURCE].includes(t))throw new Error("NbAclService: cannot use empty or bulk '*' resource placeholder with 'can' method")},e.prototype.exactCan=function(t,n,r){var i=this.getRoleResources(t,n);return i.includes(r)||i.includes(e.ANY_RESOURCE)},e.prototype.getRoleResources=function(e,t){return this.getRoleAbilities(e)[t]||[]},e.prototype.getRoleAbilities=function(e){var t=Z(this.state[e]||{});return M(Z(this.state[e]||{})),t},e.prototype.getRoleParent=function(e){return this.state[e]?this.state[e].parent:null},e.ANY_RESOURCE="*",e.\u0275fac=function(t){return new(t||e)(g.hc(Y,8))},e.\u0275prov=g.Pb({token:e,factory:e.\u0275fac}),e}(),C=n("67Y/"),I=function(){function e(e,t){this.roleProvider=e,this.acl=t}return e.prototype.isGranted=function(e,t){var n=this;return this.roleProvider.getRole().pipe(Object(C.a)((function(e){return Array.isArray(e)?e:[e]})),Object(C.a)((function(r){return r.some((function(r){return n.acl.can(r,e,t)}))})))},e.\u0275fac=function(t){return new(t||e)(g.hc(w),g.hc(F))},e.\u0275prov=g.Pb({token:e,factory:e.\u0275fac}),e}(),P=function(){function e(){}return e.forRoot=function(t){return{ngModule:e,providers:[{provide:Y,useValue:t},F,I]}},e.\u0275mod=g.Rb({type:e}),e.\u0275inj=g.Qb({factory:function(t){return new(t||e)},imports:[[r.c]]}),e}(),k=n("DUip"),q=function(){function e(){}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=g.Nb({type:e,selectors:[["nb-playground-auth"]],decls:1,vars:0,template:function(e,t){1&e&&g.Ub(0,"router-outlet")},directives:[k.h],encapsulation:2}),e}(),V=n("2Az5"),R=n("DYSn"),D=n("iVvT"),S=n("Dfz9"),T=n("b9/t"),L=n("Unyt"),E=n("g1JU"),N=n("FuSZ");function j(e,t){if(1&e&&(g.Zb(0,"li",28),g.Oc(1),g.Yb()),2&e){var n=t.$implicit;g.Fb(1),g.Pc(n)}}function x(e,t){if(1&e&&(g.Zb(0,"nb-alert",24),g.Zb(1,"p",25),g.Zb(2,"b"),g.Oc(3,"Oh snap!"),g.Yb(),g.Yb(),g.Zb(4,"ul",26),g.Mc(5,j,2,1,"li",27),g.Yb(),g.Yb()),2&e){var n=g.pc();g.Fb(5),g.vc("ngForOf",n.errors)}}function A(e,t){if(1&e&&(g.Zb(0,"li",28),g.Oc(1),g.Yb()),2&e){var n=t.$implicit;g.Fb(1),g.Pc(n)}}function W(e,t){if(1&e&&(g.Zb(0,"nb-alert",29),g.Zb(1,"p",25),g.Zb(2,"b"),g.Oc(3,"Hooray!"),g.Yb(),g.Yb(),g.Zb(4,"ul",26),g.Mc(5,A,2,1,"li",27),g.Yb(),g.Yb()),2&e){var n=g.pc();g.Fb(5),g.vc("ngForOf",n.messages)}}function $(e,t){1&e&&(g.Zb(0,"p",31),g.Oc(1," Full name is required! "),g.Yb())}function G(e,t){if(1&e&&(g.Zb(0,"p",31),g.Oc(1),g.Yb()),2&e){var n=g.pc(2);g.Fb(1),g.Rc(" Full name should contains from ",n.getConfigValue("forms.validation.fullName.minLength")," to ",n.getConfigValue("forms.validation.fullName.maxLength")," characters ")}}function U(e,t){if(1&e&&(g.Xb(0),g.Mc(1,$,2,0,"p",30),g.Mc(2,G,2,2,"p",30),g.Wb()),2&e){g.pc();var n=g.Dc(10);g.Fb(1),g.vc("ngIf",null==n.errors?null:n.errors.required),g.Fb(1),g.vc("ngIf",(null==n.errors?null:n.errors.minlength)||(null==n.errors?null:n.errors.maxlength))}}function z(e,t){1&e&&(g.Zb(0,"p",31),g.Oc(1," Email is required! "),g.Yb())}function _(e,t){1&e&&(g.Zb(0,"p",31),g.Oc(1," Email should be the real one! "),g.Yb())}function B(e,t){if(1&e&&(g.Xb(0),g.Mc(1,z,2,0,"p",30),g.Mc(2,_,2,0,"p",30),g.Wb()),2&e){g.pc();var n=g.Dc(16);g.Fb(1),g.vc("ngIf",null==n.errors?null:n.errors.required),g.Fb(1),g.vc("ngIf",null==n.errors?null:n.errors.pattern)}}function X(e,t){1&e&&(g.Zb(0,"p",31),g.Oc(1," Password is required! "),g.Yb())}function K(e,t){if(1&e&&(g.Zb(0,"p",31),g.Oc(1),g.Yb()),2&e){var n=g.pc(2);g.Fb(1),g.Rc(" Password should contain from ",n.getConfigValue("forms.validation.password.minLength")," to ",n.getConfigValue("forms.validation.password.maxLength")," characters ")}}function J(e,t){if(1&e&&(g.Xb(0),g.Mc(1,X,2,0,"p",30),g.Mc(2,K,2,2,"p",30),g.Wb()),2&e){g.pc();var n=g.Dc(22);g.Fb(1),g.vc("ngIf",null==n.errors?null:n.errors.required),g.Fb(1),g.vc("ngIf",(null==n.errors?null:n.errors.minlength)||(null==n.errors?null:n.errors.maxlength))}}function H(e,t){1&e&&(g.Zb(0,"p",31),g.Oc(1," Password confirmation is required! "),g.Yb())}function Q(e,t){1&e&&(g.Zb(0,"p",31),g.Oc(1," Password does not match the confirm password. "),g.Yb())}function ee(e,t){if(1&e&&(g.Xb(0),g.Mc(1,H,2,0,"p",30),g.Mc(2,Q,2,0,"p",30),g.Wb()),2&e){g.pc();var n=g.Dc(28),r=g.Dc(22);g.Fb(1),g.vc("ngIf",null==n.errors?null:n.errors.required),g.Fb(1),g.vc("ngIf",r.value!=n.value&&!(null!=n.errors&&n.errors.required))}}function te(e,t){if(1&e){var n=g.ac();g.Zb(0,"div",32),g.Zb(1,"nb-checkbox",33),g.lc("ngModelChange",(function(e){return g.Gc(n),g.pc().user.terms=e})),g.Oc(2," Agree to "),g.Zb(3,"a",34),g.Zb(4,"strong"),g.Oc(5,"Terms & Conditions"),g.Yb(),g.Yb(),g.Yb(),g.Yb()}if(2&e){var r=g.pc();g.Fb(1),g.vc("ngModel",r.user.terms)("required",r.getConfigValue("forms.register.terms"))}}function ne(e,t){if(1&e&&g.Ub(0,"nb-icon",43),2&e){var n=g.pc(2).$implicit;g.vc("icon",n.icon)}}function re(e,t){if(1&e&&g.Oc(0),2&e){var n=g.pc(2).$implicit;g.Pc(n.title)}}function ie(e,t){if(1&e&&(g.Zb(0,"a",40),g.Mc(1,ne,1,1,"nb-icon",41),g.Mc(2,re,1,1,"ng-template",null,42,g.Nc),g.Yb()),2&e){var n=g.Dc(3),r=g.pc().$implicit;g.Kb("with-icon",r.icon),g.vc("routerLink",r.link),g.Gb("target",r.target)("class",r.icon),g.Fb(1),g.vc("ngIf",r.icon)("ngIfElse",n)}}function se(e,t){if(1&e&&g.Ub(0,"nb-icon",43),2&e){var n=g.pc(2).$implicit;g.vc("icon",n.icon)}}function oe(e,t){if(1&e&&g.Oc(0),2&e){var n=g.pc(2).$implicit;g.Pc(n.title)}}function ae(e,t){if(1&e&&(g.Zb(0,"a"),g.Mc(1,se,1,1,"nb-icon",41),g.Mc(2,oe,1,1,"ng-template",null,42,g.Nc),g.Yb()),2&e){var n=g.Dc(3),r=g.pc().$implicit;g.Kb("with-icon",r.icon),g.Gb("href",r.url,g.Ic)("target",r.target)("class",r.icon),g.Fb(1),g.vc("ngIf",r.icon)("ngIfElse",n)}}function ce(e,t){if(1&e&&(g.Xb(0),g.Mc(1,ie,4,7,"a",38),g.Mc(2,ae,4,7,"a",39),g.Wb()),2&e){var n=t.$implicit;g.Fb(1),g.vc("ngIf",n.link),g.Fb(1),g.vc("ngIf",n.url)}}function le(e,t){if(1&e&&(g.Zb(0,"section",35),g.Oc(1," or enter with: "),g.Zb(2,"div",36),g.Mc(3,ce,3,2,"ng-container",37),g.Yb(),g.Yb()),2&e){var n=g.pc();g.Fb(3),g.vc("ngForOf",n.socialLinks)}}var ue=function(){function e(e,t,n,r){void 0===t&&(t={}),this.service=e,this.options=t,this.cd=n,this.router=r,this.redirectDelay=0,this.showMessages={},this.strategy="",this.submitted=!1,this.errors=[],this.messages=[],this.user={},this.socialLinks=[],this.redirectDelay=this.getConfigValue("forms.register.redirectDelay"),this.showMessages=this.getConfigValue("forms.register.showMessages"),this.strategy=this.getConfigValue("forms.register.strategy"),this.socialLinks=this.getConfigValue("forms.login.socialLinks")}return e.prototype.register=function(){var e=this;this.errors=this.messages=[],this.submitted=!0,this.service.register(this.strategy,this.user).subscribe((function(t){e.submitted=!1,t.isSuccess()?e.messages=t.getMessages():e.errors=t.getErrors();var n=t.getRedirect();n&&setTimeout((function(){return e.router.navigateByUrl(n)}),e.redirectDelay),e.cd.detectChanges()}))},e.prototype.getConfigValue=function(e){return Object(D.b)(this.options,e,null)},e.\u0275fac=function(t){return new(t||e)(g.Tb(u.a),g.Tb(b.b),g.Tb(g.h),g.Tb(k.c))},e.\u0275cmp=g.Nb({type:e,selectors:[["nb-register"]],decls:38,vars:31,consts:[["id","title",1,"title"],["outline","danger","role","alert",4,"ngIf"],["outline","success","role","alert",4,"ngIf"],["aria-labelledby","title",3,"ngSubmit"],["form","ngForm"],[1,"form-control-group"],["for","input-name",1,"label"],["nbInput","","id","input-name","name","fullName","placeholder","Full name","autofocus","","fullWidth","","fieldSize","large",3,"ngModel","status","required","minlength","maxlength","ngModelChange"],["fullName","ngModel"],[4,"ngIf"],["for","input-email",1,"label"],["nbInput","","id","input-email","name","email","pattern",".+@.+..+","placeholder","Email address","fullWidth","","fieldSize","large",3,"ngModel","status","required","ngModelChange"],["email","ngModel"],["for","input-password",1,"label"],["nbInput","","type","password","id","input-password","name","password","placeholder","Password","fullWidth","","fieldSize","large",3,"ngModel","status","required","minlength","maxlength","ngModelChange"],["password","ngModel"],["for","input-re-password",1,"label"],["nbInput","","type","password","id","input-re-password","name","rePass","placeholder","Confirm Password","fullWidth","","fieldSize","large",3,"ngModel","status","required","ngModelChange"],["rePass","ngModel"],["class","form-control-group accept-group",4,"ngIf"],["nbButton","","fullWidth","","status","primary","size","large",3,"disabled"],["class","links","aria-label","Social sign in",4,"ngIf"],["aria-label","Sign in",1,"another-action"],["routerLink","../login",1,"text-link"],["outline","danger","role","alert"],[1,"alert-title"],[1,"alert-message-list"],["class","alert-message",4,"ngFor","ngForOf"],[1,"alert-message"],["outline","success","role","alert"],["class","caption status-danger",4,"ngIf"],[1,"caption","status-danger"],[1,"form-control-group","accept-group"],["name","terms",3,"ngModel","required","ngModelChange"],["href","#","target","_blank"],["aria-label","Social sign in",1,"links"],[1,"socials"],[4,"ngFor","ngForOf"],[3,"routerLink","with-icon",4,"ngIf"],[3,"with-icon",4,"ngIf"],[3,"routerLink"],[3,"icon",4,"ngIf","ngIfElse"],["title",""],[3,"icon"]],template:function(e,t){if(1&e&&(g.Zb(0,"h1",0),g.Oc(1,"Register"),g.Yb(),g.Mc(2,x,6,1,"nb-alert",1),g.Mc(3,W,6,1,"nb-alert",2),g.Zb(4,"form",3,4),g.lc("ngSubmit",(function(){return t.register()})),g.Zb(6,"div",5),g.Zb(7,"label",6),g.Oc(8,"Full name:"),g.Yb(),g.Zb(9,"input",7,8),g.lc("ngModelChange",(function(e){return t.user.fullName=e})),g.Yb(),g.Mc(11,U,3,2,"ng-container",9),g.Yb(),g.Zb(12,"div",5),g.Zb(13,"label",10),g.Oc(14,"Email address:"),g.Yb(),g.Zb(15,"input",11,12),g.lc("ngModelChange",(function(e){return t.user.email=e})),g.Yb(),g.Mc(17,B,3,2,"ng-container",9),g.Yb(),g.Zb(18,"div",5),g.Zb(19,"label",13),g.Oc(20,"Password:"),g.Yb(),g.Zb(21,"input",14,15),g.lc("ngModelChange",(function(e){return t.user.password=e})),g.Yb(),g.Mc(23,J,3,2,"ng-container",9),g.Yb(),g.Zb(24,"div",5),g.Zb(25,"label",16),g.Oc(26,"Repeat password:"),g.Yb(),g.Zb(27,"input",17,18),g.lc("ngModelChange",(function(e){return t.user.confirmPassword=e})),g.Yb(),g.Mc(29,ee,3,2,"ng-container",9),g.Yb(),g.Mc(30,te,6,2,"div",19),g.Zb(31,"button",20),g.Oc(32," Register "),g.Yb(),g.Yb(),g.Mc(33,le,4,1,"section",21),g.Zb(34,"section",22),g.Oc(35," Already have an account? "),g.Zb(36,"a",23),g.Oc(37,"Log in"),g.Yb(),g.Yb()),2&e){var n=g.Dc(5),r=g.Dc(10),i=g.Dc(16),s=g.Dc(22),o=g.Dc(28);g.Fb(2),g.vc("ngIf",t.showMessages.error&&(null==t.errors?null:t.errors.length)&&!t.submitted),g.Fb(1),g.vc("ngIf",t.showMessages.success&&(null==t.messages?null:t.messages.length)&&!t.submitted),g.Fb(6),g.vc("ngModel",t.user.fullName)("status",r.dirty?r.invalid?"danger":"success":"basic")("required",t.getConfigValue("forms.validation.fullName.required"))("minlength",t.getConfigValue("forms.validation.fullName.minLength"))("maxlength",t.getConfigValue("forms.validation.fullName.maxLength")),g.Gb("aria-invalid",!(!r.invalid||!r.touched)||null),g.Fb(2),g.vc("ngIf",r.invalid&&r.touched),g.Fb(4),g.vc("ngModel",t.user.email)("status",i.dirty?i.invalid?"danger":"success":"basic")("required",t.getConfigValue("forms.validation.email.required")),g.Gb("aria-invalid",!(!i.invalid||!i.touched)||null),g.Fb(2),g.vc("ngIf",i.invalid&&i.touched),g.Fb(4),g.vc("ngModel",t.user.password)("status",s.dirty?s.invalid?"danger":"success":"basic")("required",t.getConfigValue("forms.validation.password.required"))("minlength",t.getConfigValue("forms.validation.password.minLength"))("maxlength",t.getConfigValue("forms.validation.password.maxLength")),g.Gb("aria-invalid",!(!s.invalid||!s.touched)||null),g.Fb(2),g.vc("ngIf",s.invalid&&s.touched),g.Fb(4),g.vc("ngModel",t.user.confirmPassword)("status",o.dirty?o.invalid||s.value!=o.value?"danger":"success":"basic")("required",t.getConfigValue("forms.validation.password.required")),g.Gb("aria-invalid",!(!o.invalid||!o.touched)||null),g.Fb(2),g.vc("ngIf",o.invalid&&o.touched),g.Fb(1),g.vc("ngIf",t.getConfigValue("forms.register.terms")),g.Fb(1),g.Kb("btn-pulse",t.submitted),g.vc("disabled",t.submitted||!n.valid),g.Fb(2),g.vc("ngIf",t.socialLinks&&t.socialLinks.length>0)}},directives:[r.n,i.w,i.m,i.n,S.a,i.a,i.l,i.o,i.s,i.i,i.h,i.q,T.a,k.f,L.a,r.m,E.a,N.a],styles:["[_nghost-%COMP%]   .title[_ngcontent-%COMP%]{margin-bottom:2rem}"],changeDetection:0}),e}(),be=function(){function e(e,t,n){void 0===t&&(t={}),this.service=e,this.options=t,this.router=n,this.redirectDelay=0,this.strategy="",this.redirectDelay=this.getConfigValue("forms.logout.redirectDelay"),this.strategy=this.getConfigValue("forms.logout.strategy")}return e.prototype.ngOnInit=function(){this.logout(this.strategy)},e.prototype.logout=function(e){var t=this;this.service.logout(e).subscribe((function(e){var n=e.getRedirect();n&&setTimeout((function(){return t.router.navigateByUrl(n)}),t.redirectDelay)}))},e.prototype.getConfigValue=function(e){return Object(D.b)(this.options,e,null)},e.\u0275fac=function(t){return new(t||e)(g.Tb(u.a),g.Tb(b.b),g.Tb(k.c))},e.\u0275cmp=g.Nb({type:e,selectors:[["nb-logout"]],decls:2,vars:0,template:function(e,t){1&e&&(g.Zb(0,"div"),g.Oc(1,"Logging out, please wait..."),g.Yb())},encapsulation:2}),e}();function ge(e,t){if(1&e&&(g.Zb(0,"li",19),g.Oc(1),g.Yb()),2&e){var n=t.$implicit;g.Fb(1),g.Pc(n)}}function de(e,t){if(1&e&&(g.Zb(0,"nb-alert",15),g.Zb(1,"p",16),g.Zb(2,"b"),g.Oc(3,"Oh snap!"),g.Yb(),g.Yb(),g.Zb(4,"ul",17),g.Mc(5,ge,2,1,"li",18),g.Yb(),g.Yb()),2&e){var n=g.pc();g.Fb(5),g.vc("ngForOf",n.errors)}}function fe(e,t){if(1&e&&(g.Zb(0,"li",19),g.Oc(1),g.Yb()),2&e){var n=t.$implicit;g.Fb(1),g.Pc(n)}}function pe(e,t){if(1&e&&(g.Zb(0,"nb-alert",20),g.Zb(1,"p",16),g.Zb(2,"b"),g.Oc(3,"Hooray!"),g.Yb(),g.Yb(),g.Zb(4,"ul",17),g.Mc(5,fe,2,1,"li",18),g.Yb(),g.Yb()),2&e){var n=g.pc();g.Fb(5),g.vc("ngForOf",n.messages)}}function he(e,t){1&e&&(g.Zb(0,"p",22),g.Oc(1," Email is required! "),g.Yb())}function me(e,t){1&e&&(g.Zb(0,"p",22),g.Oc(1," Email should be the real one! "),g.Yb())}function ve(e,t){if(1&e&&(g.Xb(0),g.Mc(1,he,2,0,"p",21),g.Mc(2,me,2,0,"p",21),g.Wb()),2&e){g.pc();var n=g.Dc(12);g.Fb(1),g.vc("ngIf",null==n.errors?null:n.errors.required),g.Fb(1),g.vc("ngIf",null==n.errors?null:n.errors.pattern)}}var ye=function(){function e(e,t,n,r){void 0===t&&(t={}),this.service=e,this.options=t,this.cd=n,this.router=r,this.redirectDelay=0,this.showMessages={},this.strategy="",this.submitted=!1,this.errors=[],this.messages=[],this.user={},this.redirectDelay=this.getConfigValue("forms.requestPassword.redirectDelay"),this.showMessages=this.getConfigValue("forms.requestPassword.showMessages"),this.strategy=this.getConfigValue("forms.requestPassword.strategy")}return e.prototype.requestPass=function(){var e=this;this.errors=this.messages=[],this.submitted=!0,this.service.requestPassword(this.strategy,this.user).subscribe((function(t){e.submitted=!1,t.isSuccess()?e.messages=t.getMessages():e.errors=t.getErrors();var n=t.getRedirect();n&&setTimeout((function(){return e.router.navigateByUrl(n)}),e.redirectDelay),e.cd.detectChanges()}))},e.prototype.getConfigValue=function(e){return Object(D.b)(this.options,e,null)},e.\u0275fac=function(t){return new(t||e)(g.Tb(u.a),g.Tb(b.b),g.Tb(g.h),g.Tb(k.c))},e.\u0275cmp=g.Nb({type:e,selectors:[["nb-request-password-page"]],decls:23,vars:10,consts:[["id","title",1,"title"],[1,"sub-title"],["outline","danger","role","alert",4,"ngIf"],["outline","success","role","alert",4,"ngIf"],["aria-labelledby","title",3,"ngSubmit"],["requestPassForm","ngForm"],[1,"form-control-group"],["for","input-email",1,"label"],["nbInput","","id","input-email","name","email","pattern",".+@.+\\..+","placeholder","Email address","autofocus","","fullWidth","","fieldSize","large",3,"ngModel","status","required","ngModelChange"],["email","ngModel"],[4,"ngIf"],["nbButton","","fullWidth","","status","primary","size","large",3,"disabled"],["aria-label","Sign in or sign up",1,"sign-in-or-up"],["routerLink","../login",1,"text-link"],["routerLink","../register",1,"text-link"],["outline","danger","role","alert"],[1,"alert-title"],[1,"alert-message-list"],["class","alert-message",4,"ngFor","ngForOf"],[1,"alert-message"],["outline","success","role","alert"],["class","caption status-danger",4,"ngIf"],[1,"caption","status-danger"]],template:function(e,t){if(1&e&&(g.Zb(0,"h1",0),g.Oc(1,"Forgot Password"),g.Yb(),g.Zb(2,"p",1),g.Oc(3,"Enter your email address and we\u2019ll send a link to reset your password"),g.Yb(),g.Mc(4,de,6,1,"nb-alert",2),g.Mc(5,pe,6,1,"nb-alert",3),g.Zb(6,"form",4,5),g.lc("ngSubmit",(function(){return t.requestPass()})),g.Zb(8,"div",6),g.Zb(9,"label",7),g.Oc(10,"Enter your email address:"),g.Yb(),g.Zb(11,"input",8,9),g.lc("ngModelChange",(function(e){return t.user.email=e})),g.Yb(),g.Mc(13,ve,3,2,"ng-container",10),g.Yb(),g.Zb(14,"button",11),g.Oc(15," Request password "),g.Yb(),g.Yb(),g.Zb(16,"section",12),g.Zb(17,"p"),g.Zb(18,"a",13),g.Oc(19,"Back to Log In"),g.Yb(),g.Yb(),g.Zb(20,"p"),g.Zb(21,"a",14),g.Oc(22,"Register"),g.Yb(),g.Yb(),g.Yb()),2&e){var n=g.Dc(7),r=g.Dc(12);g.Fb(4),g.vc("ngIf",t.showMessages.error&&(null==t.errors?null:t.errors.length)&&!t.submitted),g.Fb(1),g.vc("ngIf",t.showMessages.success&&(null==t.messages?null:t.messages.length)&&!t.submitted),g.Fb(6),g.vc("ngModel",t.user.email)("status",r.dirty?r.invalid?"danger":"success":"basic")("required",t.getConfigValue("forms.validation.email.required")),g.Gb("aria-invalid",!(!r.invalid||!r.touched)||null),g.Fb(2),g.vc("ngIf",r.invalid&&r.touched),g.Fb(1),g.Kb("btn-pulse",t.submitted),g.vc("disabled",t.submitted||!n.valid)}},directives:[r.n,i.w,i.m,i.n,S.a,i.a,i.q,i.l,i.o,i.s,T.a,k.f,L.a,r.m],styles:["[_nghost-%COMP%]   .form-group[_ngcontent-%COMP%]:last-of-type{margin-bottom:3rem}"],changeDetection:0}),e}();function we(e,t){if(1&e&&(g.Zb(0,"li",23),g.Oc(1),g.Yb()),2&e){var n=t.$implicit;g.Fb(1),g.Pc(n)}}function Ye(e,t){if(1&e&&(g.Zb(0,"nb-alert",19),g.Zb(1,"p",20),g.Zb(2,"b"),g.Oc(3,"Oh snap!"),g.Yb(),g.Yb(),g.Zb(4,"ul",21),g.Mc(5,we,2,1,"li",22),g.Yb(),g.Yb()),2&e){var n=g.pc();g.Fb(5),g.vc("ngForOf",n.errors)}}function Ze(e,t){if(1&e&&(g.Zb(0,"li",23),g.Oc(1),g.Yb()),2&e){var n=t.$implicit;g.Fb(1),g.Pc(n)}}function Oe(e,t){if(1&e&&(g.Zb(0,"nb-alert",24),g.Zb(1,"p",20),g.Zb(2,"b"),g.Oc(3,"Hooray!"),g.Yb(),g.Yb(),g.Zb(4,"ul",21),g.Mc(5,Ze,2,1,"li",22),g.Yb(),g.Yb()),2&e){var n=g.pc();g.Fb(5),g.vc("ngForOf",n.messages)}}function Me(e,t){1&e&&(g.Zb(0,"p",26),g.Oc(1," Password is required! "),g.Yb())}function Fe(e,t){if(1&e&&(g.Zb(0,"p",26),g.Oc(1),g.Yb()),2&e){var n=g.pc(2);g.Fb(1),g.Rc(" Password should contains from ",n.getConfigValue("forms.validation.password.minLength")," to ",n.getConfigValue("forms.validation.password.maxLength")," characters ")}}function Ce(e,t){if(1&e&&(g.Xb(0),g.Mc(1,Me,2,0,"p",25),g.Mc(2,Fe,2,2,"p",25),g.Wb()),2&e){g.pc();var n=g.Dc(12);g.Fb(1),g.vc("ngIf",null==n.errors?null:n.errors.required),g.Fb(1),g.vc("ngIf",(null==n.errors?null:n.errors.minlength)||(null==n.errors?null:n.errors.maxlength))}}function Ie(e,t){1&e&&(g.Zb(0,"p",26),g.Oc(1," Password confirmation is required! "),g.Yb())}function Pe(e,t){1&e&&(g.Zb(0,"p",26),g.Oc(1," Password does not match the confirm password. "),g.Yb())}function ke(e,t){if(1&e&&(g.Xb(0),g.Mc(1,Ie,2,0,"p",25),g.Mc(2,Pe,2,0,"p",25),g.Wb()),2&e){g.pc();var n=g.Dc(18),r=g.Dc(12);g.Fb(1),g.vc("ngIf",n.invalid&&(null==n.errors?null:n.errors.required)),g.Fb(1),g.vc("ngIf",r.value!=n.value&&!(null!=n.errors&&n.errors.required))}}var qe=function(){function e(e,t,n,r){void 0===t&&(t={}),this.service=e,this.options=t,this.cd=n,this.router=r,this.redirectDelay=0,this.showMessages={},this.strategy="",this.submitted=!1,this.errors=[],this.messages=[],this.user={},this.redirectDelay=this.getConfigValue("forms.resetPassword.redirectDelay"),this.showMessages=this.getConfigValue("forms.resetPassword.showMessages"),this.strategy=this.getConfigValue("forms.resetPassword.strategy")}return e.prototype.resetPass=function(){var e=this;this.errors=this.messages=[],this.submitted=!0,this.service.resetPassword(this.strategy,this.user).subscribe((function(t){e.submitted=!1,t.isSuccess()?e.messages=t.getMessages():e.errors=t.getErrors();var n=t.getRedirect();n&&setTimeout((function(){return e.router.navigateByUrl(n)}),e.redirectDelay),e.cd.detectChanges()}))},e.prototype.getConfigValue=function(e){return Object(D.b)(this.options,e,null)},e.\u0275fac=function(t){return new(t||e)(g.Tb(u.a),g.Tb(b.b),g.Tb(g.h),g.Tb(k.c))},e.\u0275cmp=g.Nb({type:e,selectors:[["nb-reset-password-page"]],decls:29,vars:17,consts:[["id","title",1,"title"],[1,"sub-title"],["outline","danger","role","alert",4,"ngIf"],["outline","success","role","alert",4,"ngIf"],["aria-labelledby","title",3,"ngSubmit"],["resetPassForm","ngForm"],[1,"form-control-group"],["for","input-password",1,"label"],["nbInput","","type","password","id","input-password","name","password","placeholder","New Password","autofocus","","fullWidth","","fieldSize","large",1,"first",3,"ngModel","status","required","minlength","maxlength","ngModelChange"],["password","ngModel"],[4,"ngIf"],[1,"form-group"],["for","input-re-password",1,"label"],["nbInput","","id","input-re-password","name","rePass","type","password","placeholder","Confirm Password","fullWidth","","fieldSize","large",1,"last",3,"ngModel","status","required","ngModelChange"],["rePass","ngModel"],["nbButton","","status","primary","fullWidth","","size","large",3,"disabled"],["aria-label","Sign in or sign up",1,"sign-in-or-up"],["routerLink","../login",1,"text-link"],["routerLink","../register",1,"text-link"],["outline","danger","role","alert"],[1,"alert-title"],[1,"alert-message-list"],["class","alert-message",4,"ngFor","ngForOf"],[1,"alert-message"],["outline","success","role","alert"],["class","caption status-danger",4,"ngIf"],[1,"caption","status-danger"]],template:function(e,t){if(1&e&&(g.Zb(0,"h1",0),g.Oc(1,"Change password"),g.Yb(),g.Zb(2,"p",1),g.Oc(3,"Please set a new password"),g.Yb(),g.Mc(4,Ye,6,1,"nb-alert",2),g.Mc(5,Oe,6,1,"nb-alert",3),g.Zb(6,"form",4,5),g.lc("ngSubmit",(function(){return t.resetPass()})),g.Zb(8,"div",6),g.Zb(9,"label",7),g.Oc(10,"New Password:"),g.Yb(),g.Zb(11,"input",8,9),g.lc("ngModelChange",(function(e){return t.user.password=e})),g.Yb(),g.Mc(13,Ce,3,2,"ng-container",10),g.Yb(),g.Zb(14,"div",11),g.Zb(15,"label",12),g.Oc(16,"Confirm Password:"),g.Yb(),g.Zb(17,"input",13,14),g.lc("ngModelChange",(function(e){return t.user.confirmPassword=e})),g.Yb(),g.Mc(19,ke,3,2,"ng-container",10),g.Yb(),g.Zb(20,"button",15),g.Oc(21," Change password "),g.Yb(),g.Yb(),g.Zb(22,"section",16),g.Zb(23,"p"),g.Zb(24,"a",17),g.Oc(25,"Back to Log In"),g.Yb(),g.Yb(),g.Zb(26,"p"),g.Zb(27,"a",18),g.Oc(28,"Register"),g.Yb(),g.Yb(),g.Yb()),2&e){var n=g.Dc(7),r=g.Dc(12),i=g.Dc(18);g.Fb(4),g.vc("ngIf",t.showMessages.error&&(null==t.errors?null:t.errors.length)&&!t.submitted),g.Fb(1),g.vc("ngIf",t.showMessages.success&&(null==t.messages?null:t.messages.length)&&!t.submitted),g.Fb(6),g.vc("ngModel",t.user.password)("status",r.dirty?r.invalid?"danger":"success":"basic")("required",t.getConfigValue("forms.validation.password.required"))("minlength",t.getConfigValue("forms.validation.password.minLength"))("maxlength",t.getConfigValue("forms.validation.password.maxLength")),g.Gb("aria-invalid",!(!r.invalid||!r.touched)||null),g.Fb(2),g.vc("ngIf",r.invalid&&r.touched),g.Fb(4),g.vc("ngModel",t.user.confirmPassword)("status",i.touched?i.invalid||r.value!=i.value?"danger":"success":"basic")("required",t.getConfigValue("forms.validation.password.required")),g.Gb("aria-invalid",!(!i.invalid||!i.touched)||null),g.Fb(2),g.vc("ngIf",i.touched),g.Fb(1),g.Kb("btn-pulse",t.submitted),g.vc("disabled",t.submitted||!n.valid)}},directives:[r.n,i.w,i.m,i.n,S.a,i.a,i.l,i.o,i.s,i.i,i.h,T.a,k.f,L.a,r.m],styles:["[_nghost-%COMP%]   .form-group[_ngcontent-%COMP%]:last-of-type{margin-bottom:3rem}"],changeDetection:0}),e}(),Ve=n("vuB0"),Re=n("S+eJ"),De=n("ny24"),Se=n("K9Ia"),Te=function(){function e(e,t,n){this.templateRef=e,this.viewContainer=t,this.accessChecker=n,this.destroy$=new Se.a,this.hasView=!1}return Object.defineProperty(e.prototype,"nbIsGranted",{set:function(e){var t=this;this.accessChecker.isGranted(e[0],e[1]).pipe(Object(De.a)(this.destroy$)).subscribe((function(e){e&&!t.hasView?(t.viewContainer.createEmbeddedView(t.templateRef),t.hasView=!0):!e&&t.hasView&&(t.viewContainer.clear(),t.hasView=!1)}))},enumerable:!0,configurable:!0}),e.prototype.ngOnDestroy=function(){this.destroy$.next(),this.destroy$.complete()},e.\u0275fac=function(t){return new(t||e)(g.Tb(g.N),g.Tb(g.R),g.Tb(I))},e.\u0275dir=g.Ob({type:e,selectors:[["","nbIsGranted",""]],inputs:{nbIsGranted:"nbIsGranted"}}),e}();function Le(e,t){1&e&&(g.Zb(0,"button"),g.Oc(1,"Post Comment"),g.Yb())}function Ee(e,t){1&e&&(g.Zb(0,"button"),g.Oc(1,"Post Comment"),g.Yb())}var Ne=function(){return["create","comments"]},je=function(){function e(e){this.accessChecker=e}return e.\u0275fac=function(t){return new(t||e)(g.Tb(I))},e.\u0275cmp=g.Nb({type:e,selectors:[["nb-actions-test"]],decls:13,vars:5,consts:[[4,"ngIf"],[4,"nbIsGranted"]],template:function(e,t){1&e&&(g.Zb(0,"nb-layout"),g.Zb(1,"nb-layout-column"),g.Zb(2,"nb-card"),g.Zb(3,"nb-card-header"),g.Oc(4,"Service usage"),g.Yb(),g.Zb(5,"nb-card-body"),g.Mc(6,Le,2,0,"button",0),g.qc(7,"async"),g.Yb(),g.Yb(),g.Zb(8,"nb-card"),g.Zb(9,"nb-card-header"),g.Oc(10,"Directive usage"),g.Yb(),g.Zb(11,"nb-card-body"),g.Mc(12,Ee,2,0,"button",1),g.Yb(),g.Yb(),g.Yb(),g.Yb()),2&e&&(g.Fb(6),g.vc("ngIf",g.rc(7,2,t.accessChecker.isGranted("create","comments"))),g.Fb(6),g.vc("nbIsGranted",g.yc(4,Ne)))},directives:[Ve.b,Ve.a,Re.b,Re.d,Re.a,r.n,Te],pipes:[r.b],encapsulation:2}),e}(),xe=n("xMyE"),Ae=function(){function e(e,t){this.authService=e,this.router=t}return e.prototype.canActivate=function(){var e=this;return this.authService.isAuthenticated().pipe(Object(xe.a)((function(t){t||e.router.navigate(["auth/login"])})))},e.\u0275fac=function(t){return new(t||e)(g.hc(u.a),g.hc(k.c))},e.\u0275prov=g.Pb({token:e,factory:e.\u0275fac}),e}(),We=n("F/XL"),$e=n("vubp"),Ge=n("9Z1F"),Ue=n("jXul");function ze(e,t){if(1&e&&(g.Zb(0,"nb-list-item"),g.Oc(1),g.Yb()),2&e){var n=t.$implicit;g.Fb(1),g.Sc(" ",n.region,", ",n.name," (",n.year,") ")}}function _e(e,t){if(1&e&&(g.Zb(0,"nb-card"),g.Zb(1,"nb-card-header"),g.Oc(2," Alain'wines "),g.Yb(),g.Zb(3,"nb-list"),g.Mc(4,ze,2,3,"nb-list-item",2),g.qc(5,"async"),g.Yb(),g.Yb()),2&e){var n=g.pc();g.Fb(4),g.vc("ngForOf",g.rc(5,1,n.wines$))}}var Be=[{path:"",component:q,children:[{path:"",component:V.a,children:[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",component:R.a},{path:"register",component:ue},{path:"logout",component:be},{path:"request-password",component:ye},{path:"reset-password",component:qe}]}]},{path:"acl/acl-test.component",component:je},{path:"auth-guard.service",canActivate:[Ae],component:q},{path:"api-calls.component",canActivate:[Ae],component:function(){function e(e,t,n,r){var i=this;void 0===r&&(r={}),this.authService=e,this.http=t,this.router=n,this.options=r,this.redirectDelay=0,this.strategy="",this.redirectDelay=this.getConfigValue("forms.logout.redirectDelay"),this.strategy=this.getConfigValue("forms.logout.strategy"),this.authService.onTokenChange().subscribe((function(e){i.token=null,e&&e.isValid()&&(i.token=e)}))}return e.prototype.logout=function(){var e=this;this.authService.logout(this.strategy).pipe(Object($e.a)(this.redirectDelay)).subscribe((function(t){return e.router.navigate(["/auth/login"])}))},e.prototype.loadWines=function(){var e=this;this.wines$=this.http.get("http://localhost:4400/api/wines").pipe(Object(Ge.a)((function(t){return t instanceof s.d&&401===t.status&&e.router.navigate(["/auth/login"]),Object(We.a)([])})))},e.prototype.getConfigValue=function(e){return Object(D.b)(this.options,e,null)},e.\u0275fac=function(t){return new(t||e)(g.Tb(u.a),g.Tb(s.b),g.Tb(k.c),g.Tb(b.b))},e.\u0275cmp=g.Nb({type:e,selectors:[["nb-playground-api-calls"]],decls:15,vars:3,consts:[["nbButton","","status","primary",3,"click"],[4,"ngIf"],[4,"ngFor","ngForOf"]],template:function(e,t){if(1&e&&(g.Ub(0,"router-outlet"),g.Zb(1,"nb-layout"),g.Zb(2,"nb-layout-column"),g.Zb(3,"nb-card"),g.Zb(4,"nb-card-body"),g.Zb(5,"h2"),g.Oc(6,"You are authenticated"),g.Yb(),g.Zb(7,"p"),g.Oc(8,"You can call the secured API"),g.Yb(),g.Zb(9,"button",0),g.lc("click",(function(){return t.loadWines()})),g.Oc(10,"Call API"),g.Yb(),g.Zb(11,"button",0),g.lc("click",(function(){return t.logout()})),g.Oc(12,"Sign out"),g.Yb(),g.Yb(),g.Yb(),g.Mc(13,_e,6,3,"nb-card",1),g.qc(14,"async"),g.Yb(),g.Yb()),2&e){var n,r=null==(n=g.rc(14,1,t.wines$))?null:n.length;g.Fb(13),g.vc("ngIf",r)}},directives:[k.h,Ve.b,Ve.a,Re.b,Re.a,r.n,Re.d,Ue.a,r.m,Ue.b],pipes:[r.b],encapsulation:2}),e}()}],Xe=function(){function e(){}return e.\u0275mod=g.Rb({type:e}),e.\u0275inj=g.Qb({factory:function(t){return new(t||e)},imports:[[k.g.forChild(Be)],k.g]}),e}(),Ke=function(){function e(e){this.authService=e}return e.prototype.getRole=function(){return this.authService.onTokenChange().pipe(Object(C.a)((function(e){return e instanceof m.b&&e.isValid()?e.getPayload().role:"guest"})))},e.\u0275fac=function(t){return new(t||e)(g.hc(u.a))},e.\u0275prov=g.Pb({token:e,factory:e.\u0275fac}),e}();function Je(e){return["http://localhost:4400/api/auth/","http://other.url/with/no/token/injected/"].some((function(t){return e.url.includes(t)}))}n.d(t,"filterInterceptorRequest",(function(){return Je})),n.d(t,"AuthPlaygroundModule",(function(){return He}));var He=function(){function e(){}return e.\u0275mod=g.Rb({type:e}),e.\u0275inj=g.Qb({factory:function(t){return new(t||e)},providers:[Ae,{provide:s.a,useClass:d,multi:!0},{provide:b.e,useValue:Je},{provide:w,useClass:Ke}],imports:[[r.c,i.g,s.c,Xe,o.a,a.a,c.a,f.a.forRoot({forms:{login:{strategy:"password",redirectDelay:1e3,socialLinks:[{url:"https://github.com/akveo",target:"_blank",title:"GitHub"},{url:"https://www.facebook.com/akveo",target:"_blank",icon:"home-outline"},{url:"https://www.facebook.com/akveo",target:"_blank",title:"Twitter"}]}},strategies:[p.a.setup({name:"dummy",alwaysFail:!0,delay:1e3}),h.a.setup({name:"email",token:{class:m.b},baseEndpoint:"http://localhost:4400/api/auth/",logout:{redirect:{success:"/auth/login",failure:"/auth/login"}},requestPass:{redirect:{success:"/auth/reset-password"}},resetPass:{redirect:{success:"/auth/login"}},errors:{key:"data.errors"}}),v.a.setup({name:"password",clientId:"test",clientSecret:"secret",baseEndpoint:"http://localhost:4400/api/auth/",token:{endpoint:"token",grantType:y.b.PASSWORD,class:m.d},refresh:{endpoint:"refresh-token",grantType:y.b.REFRESH_TOKEN}})]}),P.forRoot({accessControl:{guest:{view:["news","comments"]},user:{parent:"guest",create:"comments"},moderator:{parent:"user",create:"news",remove:"*"}}})]]}),e}()}}]);