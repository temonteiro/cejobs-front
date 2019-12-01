(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{247:function(e,n,t){var content=t(380);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(53).default)("71a01d2b",content,!0,{sourceMap:!1})},376:function(e,n){var t={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"job"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"jobId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"ID"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"job"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"jobId"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"description"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"Published"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"JobType"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"Salary"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"ApplyEmail"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"ApplyWebsite"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"company"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"Title"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"Address"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"Website"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"Logo"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"url"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"jobareas"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"AreaName"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"languages"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"LangName"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"createdAt"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"updatedAt"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:380}};t.loc.source={body:"query job ( $jobId: ID! ) {\n    job( id: $jobId ) {\n    id\n    title\n    description\n    Published\n    JobType\n    Salary\n    ApplyEmail\n    ApplyWebsite\n    company {\n      id\n      Title\n      Address\n      Website\n      Logo {\n        url\n      }\n    }\n    jobareas {\n      id\n      AreaName\n    }\n    languages {\n      id\n      LangName\n    }\n    createdAt\n    updatedAt\n  }\n}",name:"GraphQL request",locationOffset:{line:1,column:1}};var r={};function d(e,n){for(var i=0;i<e.definitions.length;i++){var element=e.definitions[i];if(element.name&&element.name.value==n)return element}}t.definitions.forEach((function(e){if(e.name){var n=new Set;!function e(n,t){if("FragmentSpread"===n.kind)t.add(n.name.value);else if("VariableDefinition"===n.kind){var r=n.type;"NamedType"===r.kind&&t.add(r.name.value)}n.selectionSet&&n.selectionSet.selections.forEach((function(n){e(n,t)})),n.variableDefinitions&&n.variableDefinitions.forEach((function(n){e(n,t)})),n.definitions&&n.definitions.forEach((function(n){e(n,t)}))}(e,n),r[e.name.value]=n}})),e.exports=t,e.exports.job=function(e,n){var t={kind:e.kind,definitions:[d(e,n)]};e.hasOwnProperty("loc")&&(t.loc=e.loc);var l=r[n]||new Set,o=new Set,m=new Set;for(l.forEach((function(e){m.add(e)}));m.size>0;){var c=m;m=new Set,c.forEach((function(e){o.has(e)||(o.add(e),(r[e]||new Set).forEach((function(e){m.add(e)})))}))}return o.forEach((function(n){var r=d(e,n);r&&t.definitions.push(r)})),t}(t,"job")},378:function(e,n,t){var map={"./af":249,"./af.js":249,"./ar":250,"./ar-dz":251,"./ar-dz.js":251,"./ar-kw":252,"./ar-kw.js":252,"./ar-ly":253,"./ar-ly.js":253,"./ar-ma":254,"./ar-ma.js":254,"./ar-sa":255,"./ar-sa.js":255,"./ar-tn":256,"./ar-tn.js":256,"./ar.js":250,"./az":257,"./az.js":257,"./be":258,"./be.js":258,"./bg":259,"./bg.js":259,"./bm":260,"./bm.js":260,"./bn":261,"./bn.js":261,"./bo":262,"./bo.js":262,"./br":263,"./br.js":263,"./bs":264,"./bs.js":264,"./ca":265,"./ca.js":265,"./cs":266,"./cs.js":266,"./cv":267,"./cv.js":267,"./cy":268,"./cy.js":268,"./da":269,"./da.js":269,"./de":270,"./de-at":271,"./de-at.js":271,"./de-ch":272,"./de-ch.js":272,"./de.js":270,"./dv":273,"./dv.js":273,"./el":274,"./el.js":274,"./en-SG":275,"./en-SG.js":275,"./en-au":276,"./en-au.js":276,"./en-ca":277,"./en-ca.js":277,"./en-gb":278,"./en-gb.js":278,"./en-ie":279,"./en-ie.js":279,"./en-il":280,"./en-il.js":280,"./en-nz":281,"./en-nz.js":281,"./eo":282,"./eo.js":282,"./es":283,"./es-do":284,"./es-do.js":284,"./es-us":285,"./es-us.js":285,"./es.js":283,"./et":286,"./et.js":286,"./eu":287,"./eu.js":287,"./fa":288,"./fa.js":288,"./fi":289,"./fi.js":289,"./fo":290,"./fo.js":290,"./fr":291,"./fr-ca":292,"./fr-ca.js":292,"./fr-ch":293,"./fr-ch.js":293,"./fr.js":291,"./fy":294,"./fy.js":294,"./ga":295,"./ga.js":295,"./gd":296,"./gd.js":296,"./gl":297,"./gl.js":297,"./gom-latn":298,"./gom-latn.js":298,"./gu":299,"./gu.js":299,"./he":300,"./he.js":300,"./hi":301,"./hi.js":301,"./hr":302,"./hr.js":302,"./hu":303,"./hu.js":303,"./hy-am":304,"./hy-am.js":304,"./id":305,"./id.js":305,"./is":306,"./is.js":306,"./it":307,"./it-ch":308,"./it-ch.js":308,"./it.js":307,"./ja":309,"./ja.js":309,"./jv":310,"./jv.js":310,"./ka":311,"./ka.js":311,"./kk":312,"./kk.js":312,"./km":313,"./km.js":313,"./kn":314,"./kn.js":314,"./ko":315,"./ko.js":315,"./ku":316,"./ku.js":316,"./ky":317,"./ky.js":317,"./lb":318,"./lb.js":318,"./lo":319,"./lo.js":319,"./lt":320,"./lt.js":320,"./lv":321,"./lv.js":321,"./me":322,"./me.js":322,"./mi":323,"./mi.js":323,"./mk":324,"./mk.js":324,"./ml":325,"./ml.js":325,"./mn":326,"./mn.js":326,"./mr":327,"./mr.js":327,"./ms":328,"./ms-my":329,"./ms-my.js":329,"./ms.js":328,"./mt":330,"./mt.js":330,"./my":331,"./my.js":331,"./nb":332,"./nb.js":332,"./ne":333,"./ne.js":333,"./nl":334,"./nl-be":335,"./nl-be.js":335,"./nl.js":334,"./nn":336,"./nn.js":336,"./pa-in":337,"./pa-in.js":337,"./pl":338,"./pl.js":338,"./pt":339,"./pt-br":340,"./pt-br.js":340,"./pt.js":339,"./ro":341,"./ro.js":341,"./ru":342,"./ru.js":342,"./sd":343,"./sd.js":343,"./se":344,"./se.js":344,"./si":345,"./si.js":345,"./sk":346,"./sk.js":346,"./sl":347,"./sl.js":347,"./sq":348,"./sq.js":348,"./sr":349,"./sr-cyrl":350,"./sr-cyrl.js":350,"./sr.js":349,"./ss":351,"./ss.js":351,"./sv":352,"./sv.js":352,"./sw":353,"./sw.js":353,"./ta":354,"./ta.js":354,"./te":355,"./te.js":355,"./tet":356,"./tet.js":356,"./tg":357,"./tg.js":357,"./th":358,"./th.js":358,"./tl-ph":359,"./tl-ph.js":359,"./tlh":360,"./tlh.js":360,"./tr":361,"./tr.js":361,"./tzl":362,"./tzl.js":362,"./tzm":363,"./tzm-latn":364,"./tzm-latn.js":364,"./tzm.js":363,"./ug-cn":365,"./ug-cn.js":365,"./uk":366,"./uk.js":366,"./ur":367,"./ur.js":367,"./uz":368,"./uz-latn":369,"./uz-latn.js":369,"./uz.js":368,"./vi":370,"./vi.js":370,"./x-pseudo":371,"./x-pseudo.js":371,"./yo":372,"./yo.js":372,"./zh-cn":373,"./zh-cn.js":373,"./zh-hk":374,"./zh-hk.js":374,"./zh-tw":375,"./zh-tw.js":375};function r(e){var n=d(e);return t(n)}function d(e){if(!t.o(map,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return map[e]}r.keys=function(){return Object.keys(map)},r.resolve=d,e.exports=r,r.id=378},379:function(e,n,t){"use strict";var r=t(247);t.n(r).a},380:function(e,n,t){(e.exports=t(52)(!1)).push([e.i,'.heading{text-align:center;margin-bottom:40px}.heading:after{content:" ";display:block;width:100px;height:2px;margin:20px auto;background:#ff7473}.heading small{font-size:1.4rem}.job-detail-description{text-align:center;text-transform:uppercase;letter-spacing:.1em;font-family:Montserrat,Helvetica,Arial,sans-serif;color:#868e96;font-size:.9rem}',""])},386:function(e,n,t){"use strict";t.r(n);var r=t(376),d=t.n(r),l=t(246),o=t.n(l),m={data:function(){return{id:null,job:{title:"",company:{}}}},validate:function(e){return e.params.slug.length>3},apollo:{job:{query:d.a,variables:function(){return{jobId:this.id}},update:function(data){return data.job}}},mounted:function(){this.id=this.$route.params.slug},computed:{dateMoment:function(){return o()(this.job.createdAt).fromNow()}}},c=(t(379),t(51)),component=Object(c.a)(m,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"job"}},[e._m(0),e._v(" "),t("section",{staticClass:"mt-4 p-4 bg-light text-dark"},[t("h1",{staticClass:"heading"},[e._v("\n      "+e._s(e.job.title)+"\n      "),t("br"),e._v(" "),t("small",[e._v("\n        at\n        "),t("a",{attrs:{href:"#"}},[e._v(e._s(e.job.company.Title))])])]),e._v(" "),t("div",{staticClass:"job-detail-description"},[e._v("\n      Postado "+e._s(e.dateMoment)+" |\n      "),t("span",{staticClass:"badge featured-badge badge-success"},[e._v(e._s(e.job.JobType))])])])])}),[function(){var e=this.$createElement,n=this._self._c||e;return n("nav",{staticClass:"pt-4",attrs:{"aria-label":"breadcrumb"}},[n("ul",{staticClass:"breadcrumb d-flex justify-content-center"},[n("li",{staticClass:"breadcrumb-item"},[n("a",{attrs:{href:"index.html"}},[this._v("Home")])]),this._v(" "),n("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[this._v("Detalhe da vaga")])])])}],!1,null,null,null);n.default=component.exports}}]);