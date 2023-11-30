"use strict";(self.webpackChunkngrx_08_finished=self.webpackChunkngrx_08_finished||[]).push([[350],{1350:(Q,f,p)=>{p.r(f),p.d(f,{RecipesModule:()=>Y});var c=p(9970),r=p(5030),e=p(2223),l=p(4004),u=p(6789),m=p(4755);let C=(()=>{class i{transform(t){return!t||t.split(" ").length<=10?t:t.split(" ").slice(0,10).join(" ")+"..."}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275pipe=e.Yjl({name:"truncate",type:i,pure:!0}),i})();const T=function(i){return[i]};let w=(()=>{class i{constructor(){this.errorLoadingImage=!1}ngOnInit(){}imageError(){console.log("Error loading image"),this.errorLoadingImage=!0}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-recipe-item"]],inputs:{recipe:"recipe",index:"index"},decls:9,vars:9,consts:[[1,"card","mb-3",2,"width","10rem"],["routerLinkActive","active",1,"list-group-item","clearfix",2,"cursor","pointer",3,"routerLink"],[1,"card-img-top",2,"max-height","50px",3,"src","alt","error"],[1,"card-body"],[1,"card-title"],[1,"list-group-item-text","m-0"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"a",1)(2,"img",2),e.NdJ("error",function(){return n.imageError()}),e.qZA(),e.TgZ(3,"div",3)(4,"h6",4),e._uU(5),e.qZA(),e.TgZ(6,"p",5),e._uU(7),e.ALo(8,"truncate"),e.qZA()()()()),2&t&&(e.xp6(1),e.Q6J("routerLink",e.VKq(7,T,n.index)),e.xp6(1),e.s9C("alt",null==n.recipe?null:n.recipe.name),e.Q6J("src",n.errorLoadingImage?"../../../assets/images/recipe-app/no-image.png":n.recipe.imagePath,e.LSH),e.xp6(3),e.Oqu(null==n.recipe?null:n.recipe.name),e.xp6(2),e.Oqu(e.lcZ(8,5,null==n.recipe?null:n.recipe.description)))},dependencies:[c.rH,c.Od,C]}),i})();function b(i,o){if(1&i&&e._UZ(0,"app-recipe-item",5),2&i){const n=o.index;e.Q6J("recipe",o.$implicit)("index",n)}}let A=(()=>{class i{constructor(t,n,s){this.router=t,this.route=n,this.store=s}ngOnInit(){this.subscription=this.store.select("recipes").pipe((0,l.U)(t=>t.recipes)).subscribe(t=>{this.recipes=t})}onNewRecipe(){this.router.navigate(["new"],{relativeTo:this.route})}ngOnDestroy(){this.subscription.unsubscribe()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(c.F0),e.Y36(c.gz),e.Y36(u.yh))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-recipe-list"]],decls:8,vars:1,consts:[[1,"row"],[1,"col-xs-12"],[1,"btn","btn-success",3,"click"],[1,"d-flex","flex-wrap","gap-10"],[3,"recipe","index",4,"ngFor","ngForOf"],[3,"recipe","index"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"button",2),e.NdJ("click",function(){return n.onNewRecipe()}),e._uU(3,"New Recipe"),e.qZA()()(),e._UZ(4,"hr"),e.TgZ(5,"div",0)(6,"div",3),e.YNc(7,b,1,2,"app-recipe-item",4),e.qZA()()),2&t&&(e.xp6(7),e.Q6J("ngForOf",n.recipes))},dependencies:[m.sg,w],styles:[".gap-10[_ngcontent-%COMP%]{gap:10px}"]}),i})(),x=(()=>{class i{constructor(){}ngOnInit(){}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-recipes"]],decls:5,vars:0,consts:[[1,"row"],[1,"col-md-5"],[1,"col-md-7"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"app-recipe-list"),e.qZA(),e.TgZ(3,"div",2),e._UZ(4,"router-outlet"),e.qZA()())},dependencies:[c.lC,A],encapsulation:2}),i})();var I=p(3870);let y=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-recipe-start"]],decls:2,vars:0,template:function(t,n){1&t&&(e.TgZ(0,"h3"),e._uU(1,"Please select a Recipe!"),e.qZA())},encapsulation:2}),i})();var g=p(2876);function F(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"div",18)(1,"div",19),e._UZ(2,"input",20),e.qZA(),e.TgZ(3,"div",21),e._UZ(4,"input",22),e.qZA(),e.TgZ(5,"div",21)(6,"button",5),e.NdJ("click",function(){const d=e.CHM(t).index,a=e.oxw();return e.KtG(a.onDeleteIngredient(d))}),e._uU(7," X "),e.qZA()()()}2&i&&e.Q6J("formGroupName",o.index)}let v=(()=>{class i{get ingredientsControls(){return this.recipeForm.get("ingredients").controls}constructor(t,n,s){this.route=t,this.router=n,this.store=s,this.editMode=!1}ngOnInit(){this.route.params.subscribe(t=>{this.id=+t.id,this.editMode=null!=t.id,this.initForm()})}onSubmit(){this.store.dispatch(this.editMode?g.DI({index:this.id,newRecipe:this.recipeForm.value}):g.XD({recipe:this.recipeForm.value})),this.onCancel()}onAddIngredient(){this.recipeForm.get("ingredients").push(new r.cw({name:new r.NI(null,r.kI.required),amount:new r.NI(null,[r.kI.required,r.kI.pattern(/^[1-9]+[0-9]*$/)])}))}onDeleteIngredient(t){this.recipeForm.get("ingredients").removeAt(t)}onCancel(){this.router.navigate(["../"],{relativeTo:this.route})}ngOnDestroy(){this.storeSub&&this.storeSub.unsubscribe()}initForm(){let t="",n="",s="",d=new r.Oe([]);this.editMode&&(this.storeSub=this.store.select("recipes").pipe((0,l.U)(a=>a.recipes.find((h,P)=>P===this.id))).subscribe(a=>{if(t=a.name,n=a.imagePath,s=a.description,a.ingredients)for(let h of a.ingredients)d.push(new r.cw({name:new r.NI(h.name,r.kI.required),amount:new r.NI(h.amount,[r.kI.required,r.kI.pattern(/^[1-9]+[0-9]*$/)])}))})),this.recipeForm=new r.cw({name:new r.NI(t,r.kI.required),imagePath:new r.NI(n,r.kI.required),description:new r.NI(s,r.kI.required),ingredients:d})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(c.gz),e.Y36(c.F0),e.Y36(u.yh))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-recipe-edit"]],decls:39,vars:4,consts:[[1,"row"],[1,"col-xs-12"],[3,"formGroup","ngSubmit"],[1,"row","mb-1"],["type","submit",1,"btn","btn-success",3,"disabled"],["type","button",1,"btn","btn-danger",3,"click"],[1,"form-group"],["for","name"],["type","text","id","name","formControlName","name",1,"form-control"],["for","imagePath"],["type","text","id","imagePath","formControlName","imagePath",1,"form-control"],["imagePath",""],[1,"img-responsive",2,"max-height","300px","width","100%",3,"src"],["for","description"],["type","text","id","description","formControlName","description","rows","6",1,"form-control"],["formArrayName","ingredients",1,"col-xs-12"],["class","row","style","margin-top: 10px;",3,"formGroupName",4,"ngFor","ngForOf"],["type","button",1,"btn","btn-success",3,"click"],[1,"row",2,"margin-top","10px",3,"formGroupName"],[1,"col-xs-8"],["type","text","formControlName","name",1,"form-control"],[1,"col-xs-2"],["type","number","formControlName","amount",1,"form-control"]],template:function(t,n){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"form",2),e.NdJ("ngSubmit",function(){return n.onSubmit()}),e.TgZ(3,"div",3)(4,"div",1)(5,"button",4),e._uU(6," Save "),e.qZA(),e.TgZ(7,"button",5),e.NdJ("click",function(){return n.onCancel()}),e._uU(8," Cancel "),e.qZA()()(),e.TgZ(9,"div",3)(10,"div",1)(11,"div",6)(12,"label",7),e._uU(13,"Name"),e.qZA(),e._UZ(14,"input",8),e.qZA()()(),e.TgZ(15,"div",3)(16,"div",1)(17,"div",6)(18,"label",9),e._uU(19,"Image URL"),e.qZA(),e._UZ(20,"input",10,11),e.qZA()()(),e.TgZ(22,"div",3)(23,"div",1),e._UZ(24,"img",12),e.qZA()(),e.TgZ(25,"div",3)(26,"div",1)(27,"div",6)(28,"label",13),e._uU(29,"Description"),e.qZA(),e._UZ(30,"textarea",14),e.qZA()()(),e.TgZ(31,"div",3)(32,"div",15),e.YNc(33,F,8,1,"div",16),e._UZ(34,"hr"),e.TgZ(35,"div",0)(36,"div",1)(37,"button",17),e.NdJ("click",function(){return n.onAddIngredient()}),e._uU(38," Add Ingredient "),e.qZA()()()()()()()()),2&t){const s=e.MAs(21);e.xp6(2),e.Q6J("formGroup",n.recipeForm),e.xp6(3),e.Q6J("disabled",!n.recipeForm.valid),e.xp6(19),e.Q6J("src",s.value,e.LSH),e.xp6(9),e.Q6J("ngForOf",n.ingredientsControls)}},dependencies:[r._Y,r.Fj,r.wV,r.JJ,r.JL,r.sg,r.u,r.x0,r.CE,m.sg],styles:["input.ng-invalid.ng-touched[_ngcontent-%COMP%], textarea.ng-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}"]}),i})();var _=p(3900),U=p(1572),D=p(8332);let N=(()=>{class i{constructor(){this.isOpen=!1}toggleOpen(){this.isOpen=!this.isOpen}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275dir=e.lG2({type:i,selectors:[["","appDropdown",""]],hostVars:2,hostBindings:function(t,n){1&t&&e.NdJ("click",function(){return n.toggleOpen()}),2&t&&e.ekj("open",n.isOpen)}}),i})();function J(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"app-alert",16),e.NdJ("close",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.close())}),e.qZA()}if(2&i){const t=e.oxw();e.Q6J("message",t.message)}}function q(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"a",10),e.NdJ("click",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.onDeleteRecipe())}),e._uU(1,"Delete Recipe"),e.qZA()}}function O(i,o){if(1&i&&(e.TgZ(0,"li",17),e._uU(1),e.qZA()),2&i){const t=o.$implicit;e.xp6(1),e.AsE(" ",t.name," - ",t.amount," ")}}let S=(()=>{class i{constructor(t,n,s){this.route=t,this.router=n,this.store=s,this.message="Added to shopping-app"}ngOnInit(){this.route.params.pipe((0,l.U)(t=>(this.nonDeletableIndex=+t.id,+t.id)),(0,_.w)(t=>(this.id=t,this.store.select("recipes"))),(0,l.U)(t=>t.recipes.find((n,s)=>s===this.id))).subscribe(t=>{this.recipe=t})}onAddToShoppingList(){this.store.dispatch(U.Rw({ingredients:this.recipe.ingredients})),this.addedToShopping=!0}onEditRecipe(){this.router.navigate(["edit"],{relativeTo:this.route})}onDeleteRecipe(){this.store.dispatch(g.eI({index:this.id})),this.router.navigate(["/recipes-app"])}close(){this.addedToShopping=!1}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(c.gz),e.Y36(c.F0),e.Y36(u.yh))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-recipe-detail"]],decls:31,vars:7,consts:[[3,"message","close",4,"ngIf"],[1,"row","mt-5"],[1,"col-xs-12"],[1,"img-responsive",2,"max-height","300px","width","100%",3,"src","alt"],[1,"row"],["appDropdown","",1,"btn-group"],[1,"dropdown"],["type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"btn","btn-primary","dropdown-toggle"],[1,"caret"],[1,"dropdown-menu"],[1,"dropdown-item",2,"cursor","pointer",3,"click"],["style","cursor: pointer;","class","dropdown-item",3,"click",4,"ngIf"],[1,"col-xs-12","p-3","lh-lg"],[1,"row","mb-5"],[1,"list-group"],["class","list-group-item",4,"ngFor","ngForOf"],[3,"message","close"],[1,"list-group-item"]],template:function(t,n){1&t&&(e.YNc(0,J,1,1,"app-alert",0),e.TgZ(1,"div",1)(2,"div",2),e._UZ(3,"img",3),e.qZA()(),e.TgZ(4,"div",4)(5,"div",2)(6,"h1"),e._uU(7),e.qZA()()(),e.TgZ(8,"div",4)(9,"div",2)(10,"div",5)(11,"div",6)(12,"button",7),e._uU(13," Manage Recipe "),e._UZ(14,"span",8),e.qZA(),e.TgZ(15,"ul",9)(16,"li")(17,"a",10),e.NdJ("click",function(){return n.onAddToShoppingList()}),e._uU(18,"To Shopping List"),e.qZA()(),e.TgZ(19,"li")(20,"a",10),e.NdJ("click",function(){return n.onEditRecipe()}),e._uU(21,"Edit Recipe"),e.qZA()(),e.TgZ(22,"li"),e.YNc(23,q,2,0,"a",11),e.qZA()()()()()(),e.TgZ(24,"div",4)(25,"div",12),e._uU(26),e.qZA()(),e.TgZ(27,"div",13)(28,"div",2)(29,"ul",14),e.YNc(30,O,2,2,"li",15),e.qZA()()()),2&t&&(e.Q6J("ngIf",n.addedToShopping),e.xp6(3),e.s9C("alt",n.recipe.name),e.Q6J("src",n.recipe.imagePath,e.LSH),e.xp6(4),e.Oqu(n.recipe.name),e.xp6(16),e.Q6J("ngIf",0!==n.nonDeletableIndex&&1!==n.nonDeletableIndex),e.xp6(3),e.hij(" ",n.recipe.description," "),e.xp6(4),e.Q6J("ngForOf",n.recipe.ingredients))},dependencies:[D.w,N,m.sg,m.O5]}),i})();var k=p(5698),Z=p(9646);let R=(()=>{class i{constructor(t){this.store=t}resolve(){return this.store.select("recipes").pipe((0,k.q)(1),(0,l.U)(t=>t.recipes),(0,_.w)(t=>0===t.length?(this.store.dispatch(g.AA()),(0,Z.of)([])):(0,Z.of)(t)))}}return i.\u0275fac=function(t){return new(t||i)(e.LFG(u.yh))},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();const L=[{path:"",component:x,canActivate:[I.a],children:[{path:"",component:y},{path:"new",component:v},{path:":id",component:S,resolve:[R]},{path:":id/edit",component:v,resolve:[R]}]}];let E=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[c.Bz.forChild(L),c.Bz]}),i})();var M=p(4466);let Y=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[c.Bz,r.UX,r.u5,E,M.m,c.Bz.forChild([])]}),i})()}}]);