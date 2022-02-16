webpackJsonp([1],{"3FbH":function(t,e){},"60Ra":function(t,e){},"9M+g":function(t,e){},AkHW:function(t,e){},Cn5I:function(t,e){},Jmt5:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),i={name:"Header",data:function(){return{active:!1,navi:!1,scrollY:0}},mounted:function(){window.addEventListener("scroll",this.onScroll)},computed:{isScreentTop:function(){return this.scrollY>0}},methods:{onScroll:function(){this.scrollY=window.pageYOffset},naviOpen:function(){this.active=!this.active,this.navi=!this.navi}}},n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-wrap"},[e("header",{attrs:{id:"header"}},[e("div",{staticClass:"navbar",class:{light:this.isScreentTop}},[e("nav",[e("div",{staticClass:"container"},[e("ul",[e("li",[e("router-link",{staticClass:"nav-link p-0",attrs:{to:"/"}},[this._v("HOME")])],1),this._v(" "),e("li",[e("router-link",{staticClass:"nav-link p-0",attrs:{to:"/Project"}},[this._v("PROJECTS")])],1)])])])]),this._v(" "),this._m(0)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-sp"},[e("div",{staticClass:"burger"},[e("div",{staticClass:"line1"}),this._v(" "),e("div",{staticClass:"line2"}),this._v(" "),e("div",{staticClass:"line3"})])])}]};var r={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"footer"}},[e("div",{staticClass:"navbar"},[e("nav",[e("div",{staticClass:"container"})])]),this._v(" "),e("div",[e("small",[this._v("Copyright © 2022 Keiichi Katsuno, All rights reserved.")])])])}]};var o={name:"App",components:{Header:a("VU/8")(i,n,!1,function(t){a("zObX")},"data-v-22229019",null).exports,Footer:a("VU/8")({name:"Footer"},r,!1,function(t){a("w2kZ")},"data-v-2fe0b0c8",null).exports}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Header"),this._v(" "),e("router-view"),this._v(" "),e("Footer")],1)},staticRenderFns:[]};var l=a("VU/8")(o,c,!1,function(t){a("sIvF")},null,null).exports,d=a("Tqaz"),v=(a("Jmt5"),a("9M+g"),a("G1oA")),p=a.n(v),u=a("BF72"),h=a("zL8q"),_=a.n(h),m=(a("tvR6"),a("znjY")),f=a.n(m),C=a("/ocq"),g={name:"Splash",data:function(){return{scrollY:0}},mounted:function(){this.$nextTick(function(){var t=document.getElementById("parallax");new Parallax(t,{scalarX:10,scalarY:10,frictionX:.1,frictionY:.1})}),window.addEventListener("scroll",this.onScroll)},computed:{isScreentIconVisible:function(){return this.scrollY<100}},methods:{onScroll:function(){this.scrollY=window.pageYOffset}}},b={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"splash"}},[this._m(0),this._v(" "),e("transition",{attrs:{name:"slide",appear:""}},[e("a",{directives:[{name:"show",rawName:"v-show",value:this.isScreentIconVisible,expression:"isScreentIconVisible"},{name:"smooth-scroll",rawName:"v-smooth-scroll",value:{duration:500},expression:"{ duration: 500 }"}],staticClass:"scroll-icon right-to-left",attrs:{href:"#profile"}},[e("span",[this._v("SCROLL DOWN →")])])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"splash",attrs:{id:"parallax"}},[e("div",{staticClass:"ui page grid",attrs:{"data-depth":"0.2"}},[e("h1",{staticClass:"title text"},[this._v("\n        KEIICHI KATSUNO"),e("br")]),this._v(" "),e("br"),this._v(" "),e("span",{staticClass:"text"},[this._v("ROR DEVELOPER")])])])}]};var w=a("VU/8")(g,b,!1,function(t){a("60Ra")},"data-v-c709b024",null).exports,y={name:"FadeInComponent",data:function(){return{visible:!1}},created:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){if(!this.visible){var t=this.$refs.fade.getBoundingClientRect().top;this.visible=t+100<window.innerHeight}}}},k={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"fade",class:{fadein:this.visible,hidden:!this.visible}},[this._t("default")],2)},staticRenderFns:[]};var S=a("VU/8")(y,k,!1,function(t){a("m5cx")},"data-v-63fefa22",null).exports,x={name:"Profile",components:{FadeInComponent:S}},R={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"profile"}},[s("transition",{attrs:{name:"slide",appear:""}},[s("h2",{staticClass:"title tag"},[t._v("PROFILE")])]),t._v(" "),s("div",{staticClass:"pc"},[s("FadeInComponent",[s("div",{staticClass:"profile-wrapper"},[s("div",{staticClass:"profile-content-wrapper clearfix"},[s("div",{staticClass:"content mt-5"},[s("h3",[t._v("Hey! My name is Keiichi.")]),t._v(" "),s("br"),t._v(" "),s("h3",[t._v("I am a RoR developer based in Melbourne. Currently working at Stack Team App as a full-stack software developer. I'm enjoying building my skill set in back-end and front-end web application development. Always coming across the joy of the programming!")])]),t._v(" "),s("div",{staticClass:"profile-image"},[s("img",{attrs:{src:a("uQtg"),alt:"profile"}})])])])])],1),t._v(" "),s("div",{staticClass:"sp"},[s("FadeInComponent",[s("div",{staticClass:"profile-wrapper"},[s("table",{staticClass:"profile-content-wrapper clearfix"},[s("tr",[s("th",{staticClass:"profile-image"},[s("img",{attrs:{src:a("uQtg"),alt:"profile"}})]),t._v(" "),s("td",{staticClass:"content"},[s("h3",[t._v("Hey! My name is Keiichi.")])])])]),t._v(" "),s("h3",[t._v("I am a RoR developer based in Melbourne. Currently working at Stack Team App as a full-stack software developer. I'm enjoying building my skill set in back-end and front-end web application development. Always coming across the joy of the programming!")])])])],1)],1)},staticRenderFns:[]};var F=a("VU/8")(x,R,!1,function(t){a("cG56")},"data-v-66b2ed1a",null).exports,I={name:"SlideInRighttoLeftComponent",data:function(){return{visible:!1}},created:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){if(!this.visible){var t=this.$refs.slidein.getBoundingClientRect().top;this.visible=t+100<window.innerHeight}}}},E={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"slidein",class:{slidein:this.visible,hidden:!this.visible}},[this._t("default")],2)},staticRenderFns:[]};var A={name:"SlideInLefttoRightComponent",data:function(){return{visible:!1}},created:function(){window.addEventListener("scroll",this.handleScroll)},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){if(!this.visible){var t=this.$refs.slidein.getBoundingClientRect().top;this.visible=t+100<window.innerHeight}}}},j={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{ref:"slidein",class:{slidein:this.visible,hidden:!this.visible}},[this._t("default")],2)},staticRenderFns:[]};var L={name:"Skill",components:{FadeInComponent:S,SlideInLefttoRightComponent:a("VU/8")(I,E,!1,function(t){a("kF6T")},"data-v-59737f50",null).exports,SlideInRighttoLeftComponent:a("VU/8")(A,j,!1,function(t){a("gyHv")},"data-v-6ea109fa",null).exports},data:function(){return{safari:!1,background_image:{backgroundImage:"url("+a("T3p/")+")"}}},directives:{parallax:{inserted:function(t,e){t.setAttribute("style","\n          background-position: center top; \n          background-size: initial; \n          background-repeat: no-repeat;\n          background-position-y: "+window.scrollY/e.value.denominator+"px;\n          "),window.addEventListener("scroll",function(){t.setAttribute("style","\n            background-position: center center;\n            background-size: initial;\n            backgroung-repeat: no-repeat;\n            background-position-y: "+(window.scrollY/e.value.denominator+300)+"px;\n            ")})}}},created:function(){var t=window.navigator.userAgent.toLowerCase();-1!==t.indexOf("safari")&&-1===t.indexOf("chrome")&&-1===t.indexOf("edge")?this.safari=!0:this.safari=!1}},M={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg-blar",style:t.background_image,attrs:{id:"skill"}},[a("FadeInComponent",[a("h2",{staticClass:"title"},[t._v("SKILL SET")])]),t._v(" "),a("SlideInLefttoRightComponent",[a("section",[a("div",{staticClass:"clearfix"},[a("h2",[t._v("Specialties:")]),t._v(" "),a("div",{staticClass:"progress-col"},[a("div",{staticClass:"progress-wrapper"},[a("span",[t._v("Ruby / Ruby on Rails")]),t._v(" "),a("el-progress",{attrs:{percentage:90}})],1)]),t._v(" "),a("div",{staticClass:"progress-col"},[a("div",{staticClass:"progress-wrapper"},[a("span",[t._v("HTML / CSS")]),t._v(" "),a("el-progress",{attrs:{percentage:75}})],1)]),t._v(" "),a("div",{staticClass:"progress-col"},[a("div",{staticClass:"progress-wrapper"},[a("span",[t._v("JavaScript")]),t._v(" "),a("el-progress",{attrs:{percentage:75}})],1)]),t._v(" "),a("div",{staticClass:"progress-col"},[a("div",{staticClass:"progress-wrapper"},[a("span",[t._v("Vue.js")]),t._v(" "),a("el-progress",{attrs:{percentage:50}})],1)]),t._v(" "),a("div",{staticClass:"progress-col"},[a("div",{staticClass:"progress-wrapper"},[a("span",[t._v("jQuery")]),t._v(" "),a("el-progress",{attrs:{percentage:75}})],1)])])])]),t._v(" "),a("SlideInRighttoLeftComponent",[a("section",[a("div",{staticClass:"clearfix"},[a("h2",[t._v("Experience:")]),t._v(" "),a("div",{staticClass:"progress-col"},[a("div",{staticClass:"progress-wrapper"},[a("span",[t._v("Python")]),t._v(" "),a("el-progress",{attrs:{percentage:50}})],1)]),t._v(" "),a("div",{staticClass:"progress-col"},[a("div",{staticClass:"progress-wrapper"},[a("span",[t._v("Java")]),t._v(" "),a("el-progress",{attrs:{percentage:50}})],1)]),t._v(" "),a("div",{staticClass:"progress-col"},[a("div",{staticClass:"progress-wrapper"},[a("span",[t._v("jBuilder")]),t._v(" "),a("el-progress",{attrs:{percentage:50}})],1)])])])]),t._v(" "),a("SlideInLefttoRightComponent",[a("section",[a("div",{staticClass:"clearfix"},[a("h2",[t._v("Other Skills")]),t._v(" "),a("div",{staticClass:"progress-col"},[a("div",{staticClass:"progress-wrapper"},[a("span",[t._v("Git")]),t._v(" "),a("el-progress",{attrs:{percentage:75}})],1)]),t._v(" "),a("div",{staticClass:"progress-col"},[a("div",{staticClass:"progress-wrapper"},[a("span",[t._v("GitHub")]),t._v(" "),a("el-progress",{attrs:{percentage:75}})],1)]),t._v(" "),a("div",{staticClass:"progress-col"},[a("div",{staticClass:"progress-wrapper"},[a("span",[t._v("Docker")]),t._v(" "),a("el-progress",{attrs:{percentage:50}})],1)]),t._v(" "),a("div",{staticClass:"progress-col"},[a("div",{staticClass:"progress-wrapper"},[a("span",[t._v("Foreman")]),t._v(" "),a("el-progress",{attrs:{percentage:50}})],1)]),t._v(" "),a("div",{staticClass:"progress-col"},[a("div",{staticClass:"progress-wrapper"},[a("span",[t._v("Postgres SQL")]),t._v(" "),a("el-progress",{attrs:{percentage:50}})],1)]),t._v(" "),a("div",{staticClass:"progress-col"},[a("div",{staticClass:"progress-wrapper"},[a("span",[t._v("SQLite")]),t._v(" "),a("el-progress",{attrs:{percentage:50}})],1)])])])])],1)},staticRenderFns:[]};var T=a("VU/8")(L,M,!1,function(t){a("3FbH")},"data-v-5b9acc12",null).exports,O={name:"Experience",components:{FadeInComponent:S}},J={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"experience"}},[a("div",{staticClass:"container clearfix pc"},[a("section",[a("FadeInComponent",[a("h2",{staticClass:"title"},[t._v("Experience")])]),t._v(" "),a("FadeInComponent",[a("div",{staticClass:"card"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"card-body card-title"},[a("div",{staticClass:"card-experience"},[a("p",[t._v("Jun/2021 - Present")]),t._v(" "),a("h5",[t._v("Melbourne, Australia")])])])]),t._v(" "),a("div",{staticClass:"col-md-9"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"card-content"},[a("h5",[t._v("Back-end/Front-end web application developer at Team App")]),t._v(" "),a("p",[t._v("Joined as a RoR and Javascript development for the new project called Competition Manager.")]),t._v(" "),a("table",[a("tr",[a("th",[t._v("Specialty")]),t._v(" "),a("td",[t._v("Ruby on Rails, jQuery, jBuilder, Vue.js, Docker, GitHub")])]),t._v(" "),a("tr",[a("th",[t._v("Competition Manager:")])])])])])])])])]),t._v(" "),a("FadeInComponent",[a("div",{staticClass:"card"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"card-body card-title"},[a("div",{staticClass:"card-experience"},[a("p",[t._v("Oct/2020 - Jun/2021")]),t._v(" "),a("h5",[t._v("Melbourne, Australia")])])])]),t._v(" "),a("div",{staticClass:"col-md-9"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"card-content"},[a("h5",[t._v("Production Roaster at Small Batch Roasting Co.")]),t._v(" "),a("p",[t._v("Engaged in production for coffee product at a high-quality coffee wholesaler in Melbourne. Responsible for product development. Found my passion in pursuing product quality to improve user experience and its demand.")]),t._v(" "),a("table",[a("tr",[a("th"),t._v(" "),a("td")])])])])])])])]),t._v(" "),a("FadeInComponent",[a("div",{staticClass:"card"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"card-body card-title"},[a("div",{staticClass:"card-experience"},[a("p",[t._v("Sep/2019 - Dec/2019")]),t._v(" "),a("h5",[t._v("Caldas, Colombia")])])])]),t._v(" "),a("div",{staticClass:"col-md-9"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"card-content"},[a("h5",[t._v("Production Roaster at InverCafé Ltda.")]),t._v(" "),a("p",[t._v("Joined as a quality control assistant at a high-quality green coffee producer/exporter in Colombia. Acquired an intricate knowledge of the industry. Realised that the industry is still slow to adopt technological change globally, which gradually made me get interested in software development.")]),t._v(" "),a("table",[a("tr",[a("th"),t._v(" "),a("td")])])])])])])])]),t._v(" "),a("FadeInComponent",[a("div",{staticClass:"card"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"card-body card-title"},[a("div",{staticClass:"card-experience"},[a("p",[t._v("Jan/2018 - Sep/2019")]),t._v(" "),a("h5",[t._v("London, England")])])])]),t._v(" "),a("div",{staticClass:"col-md-9"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"card-content"},[a("h5",[t._v("Production Roaster at The Roasting Shed Co.")]),t._v(" "),a("p",[t._v("Turned my career into a production coffee roaster at a small coffee wholesaler in the UK. Engaging in local coffee market while building fundamental knowledge and skillsets of product development.")]),t._v(" "),a("table",[a("tr",[a("th"),t._v(" "),a("td")])])])])])])])]),t._v(" "),a("FadeInComponent",[a("div",{staticClass:"card"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"card-body card-title"},[a("div",{staticClass:"card-experience"},[a("p",[t._v("Apr/2013 - Jul/2017")]),t._v(" "),a("h5",[t._v("Fukuoka/Osaka, Japan")])])])]),t._v(" "),a("div",{staticClass:"col-md-9"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"card-content"},[a("h5",[t._v("Sales Development Representative at Yuasa Trading Co.")]),t._v(" "),a("p",[t._v("Started my career in Sales and Marketing of industrial machinery and equipment at one of the leading trading companies in Japan. Enjoyed building the relationship with stakeholders and gained strong confidence to work in a team. ")]),t._v(" "),a("table",[a("tr",[a("th",[t._v("Achievements")]),t._v(" "),a("td",[t._v("- Doubling my area sales within a 12-month period. (Both sales figure and profit)")]),t._v(" "),a("td",[t._v("- Successful relationship development with stakeholders, while ensuring developing sales figures.")]),t._v(" "),a("td",[t._v("- Accurate day to day order management in the fast-paced trade environment.")])])])])])])])])])],1),t._v(" "),a("section",[a("FadeInComponent",[a("h1",{staticClass:"title"},[t._v("Education")])]),t._v(" "),a("FadeInComponent",[a("div",{staticClass:"card"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"card-body card-title"},[a("div",{staticClass:"card-experience"},[a("p",[t._v("Jul/2021 - Ongoing")]),t._v(" "),a("h5",[t._v("Computer Science")])])])]),t._v(" "),a("div",{staticClass:"col-md-9"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"card-content"},[a("h5",[t._v("Master of Information Technology at RMIT University")]),t._v(" "),a("p",[t._v("Majoring in computer science to gain more intricate knowledge and skill set in backend web application development. Becoming a skilled back-end web developer is my current objective.")]),t._v(" "),a("table",[a("tr",[a("th"),t._v(" "),a("td")])])])])])])])]),t._v(" "),a("FadeInComponent",[a("div",{staticClass:"card"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"card-body card-title"},[a("div",{staticClass:"card-experience"},[a("p",[t._v("Apr/2009 - Mar/2013")]),t._v(" "),a("h5",[t._v("Business Administration")])])])]),t._v(" "),a("div",{staticClass:"col-md-9"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"card-content"},[a("h5",[t._v("Bachelor of Business Administration")]),t._v(" "),a("p",[t._v("Built the ability of team management and individual collaboration in a team through engaging in the university's American Football club for four years while successfully studying business administration. ")])])])])])])])],1)]),t._v(" "),a("div",{staticClass:"container clearfix sp"},[a("section",[a("FadeInComponent",[a("h1",{staticClass:"title"},[t._v("Experience")])]),t._v(" "),a("FadeInComponent",[a("div",{staticClass:"card"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"card-body card-title"},[a("div",{staticClass:"card-experience"},[a("p",[t._v("Jun/2021 - Present")]),t._v(" "),a("h5",[t._v("Melbourne, Australia")])])])]),t._v(" "),a("div",{staticClass:"col-md-9"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"card-content"},[a("h5",[t._v("Back-end/Front-end web application developer at Team App")]),t._v(" "),a("p",[t._v("Joined as a RoR and Javascript development for the new project called Competition Manager.")]),t._v(" "),a("table",[a("tr",[a("th",[t._v("Specialty")]),t._v(" "),a("td",[t._v("Ruby on Rails, jQuery, jBuilder, Vue.js, Docker, GitHub")])]),t._v(" "),a("tr",[a("th",[t._v("Competition Manager:")])])])])])])])])]),t._v(" "),a("FadeInComponent",[a("div",{staticClass:"card"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"card-body card-title"},[a("div",{staticClass:"card-experience"},[a("p",[t._v("Oct/2020 - Jun/2021")]),t._v(" "),a("h5",[t._v("Melbourne, Australia")])])])]),t._v(" "),a("div",{staticClass:"col-md-9"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"card-content"},[a("h5",[t._v("Production Roaster at Small Batch Roasting Co.")]),t._v(" "),a("p",[t._v("Engaged in production for coffee product at a high-quality coffee wholesaler in Melbourne. Responsible for product development. Found my passion in pursuing product quality to improve user experience and its demand.")]),t._v(" "),a("table",[a("tr",[a("th"),t._v(" "),a("td")])])])])])])])]),t._v(" "),a("FadeInComponent",[a("div",{staticClass:"card"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"card-body card-title"},[a("div",{staticClass:"card-experience"},[a("p",[t._v("Sep/2019 - Dec/2019")]),t._v(" "),a("h5",[t._v("Caldas, Colombia")])])])]),t._v(" "),a("div",{staticClass:"col-md-9"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"card-content"},[a("h5",[t._v("Production Roaster at InverCafé Ltda.")]),t._v(" "),a("p",[t._v("Joined as a quality control assistant at a high-quality green coffee producer/exporter in Colombia. Acquired an intricate knowledge of the industry. Realised that the industry is still slow to adopt technological change globally, which gradually made me get interested in software development.")]),t._v(" "),a("table",[a("tr",[a("th"),t._v(" "),a("td")])])])])])])])]),t._v(" "),a("FadeInComponent",[a("div",{staticClass:"card"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"card-body card-title"},[a("div",{staticClass:"card-experience"},[a("p",[t._v("Jan/2018 - Sep/2019")]),t._v(" "),a("h5",[t._v("London, England")])])])]),t._v(" "),a("div",{staticClass:"col-md-9"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"card-content"},[a("h5",[t._v("Production Roaster at The Roasting Shed Co.")]),t._v(" "),a("p",[t._v("Turned my career into a production coffee roaster at a small coffee wholesaler in the UK. Engaging in local coffee market while building fundamental knowledge and skillsets of product development.")]),t._v(" "),a("table",[a("tr",[a("th"),t._v(" "),a("td")])])])])])])])]),t._v(" "),a("FadeInComponent",[a("div",{staticClass:"card"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"card-body card-title"},[a("div",{staticClass:"card-experience"},[a("p",[t._v("Apr/2013 - Jul/2017")]),t._v(" "),a("h5",[t._v("Fukuoka/Osaka, Japan")])])])]),t._v(" "),a("div",{staticClass:"col-md-9"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"card-content"},[a("h5",[t._v("Sales Development Representative at Yuasa Trading Co.")]),t._v(" "),a("p",[t._v("Started my career in Sales and Marketing of industrial machinery and equipment at one of the leading trading companies in Japan. Enjoyed building the relationship with stakeholders and gained strong confidence to work in a team. ")]),t._v(" "),a("table",[a("tr",[a("th",[t._v("Achievements")]),t._v(" "),a("td",[t._v("- Doubling my area sales within a 12-month period. (Both sales figure and profit)")]),t._v(" "),a("td",[t._v("- Successful relationship development with stakeholders, while ensuring developing sales figures.")]),t._v(" "),a("td",[t._v("- Accurate day to day order management in the fast-paced trade environment.")])])])])])])])])])],1),t._v(" "),a("section",[a("FadeInComponent",[a("h1",{staticClass:"title"},[t._v("Education")])]),t._v(" "),a("FadeInComponent",[a("div",{staticClass:"card"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"card-body card-title"},[a("div",{staticClass:"card-experience"},[a("p",[t._v("Jul/2021 - Ongoing")]),t._v(" "),a("h5",[t._v("Computer Science")])])])]),t._v(" "),a("div",{staticClass:"col-md-9"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"card-content"},[a("h5",[t._v("Master of Information Technology at RMIT University")]),t._v(" "),a("p",[t._v("Majoring in computer science to gain more intricate knowledge and skill set in backend web application development. Becoming a skilled back-end web developer is my current objective.")]),t._v(" "),a("table",[a("tr",[a("th"),t._v(" "),a("td")])])])])])])])]),t._v(" "),a("FadeInComponent",[a("div",{staticClass:"card"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"card-body card-title"},[a("div",{staticClass:"card-experience"},[a("p",[t._v("Apr/2009 - Mar/2013")]),t._v(" "),a("h5",[t._v("Business Administration")])])])]),t._v(" "),a("div",{staticClass:"col-md-9"},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"card-content"},[a("h5",[t._v("Bachelor of Business Administration")]),t._v(" "),a("p",[t._v("Built the ability of team management and individual collaboration in a team through engaging in the university's American Football club for four years while successfully studying business administration. ")])])])])])])])],1)])])},staticRenderFns:[]};var B=a("VU/8")(O,J,!1,function(t){a("Cn5I")},"data-v-3dbf9b0c",null).exports,H={name:"Experience",components:{FadeInComponent:S}},P={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"contact"}},[e("div",[e("section",[e("FadeInComponent",[e("h2",{staticClass:"title"},[this._v("CONTACT")])]),this._v(" "),e("FadeInComponent",[e("div",{staticClass:"card p-5"},[e("div",[e("p",[this._v("\n              Should you have any questions, please DM me via Linkedin.\n            ")]),this._v(" "),e("a",{staticClass:"btn text-white mt-4 linkedin",attrs:{href:"https://www.linkedin.com/in/keiichi-katsuno/"}},[e("i",{staticClass:"fab fa-linkedin fa-lg m-1"}),this._v("LinkedIn")])])])])],1)])])},staticRenderFns:[]};var V=a("VU/8")(H,P,!1,function(t){a("e+jk")},null,null).exports,$={name:"Home",components:{Splash:w,Profile:F,Skill:T,Experience:B,Contact:V},data:function(){return{show:!0,publicPath:Object({NODE_ENV:"production"}).BASE_URL}}},U={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("transition",{attrs:{name:"slide",appear:""}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],attrs:{id:"nav_sns"}},[a("ul",{staticClass:"m-0 p-0",staticStyle:{display:"flex","justify-content":"space-evenly"}},[a("li",[a("a",{attrs:{href:"https://www.linkedin.com/in/keiichi-katsuno/",target:"_blank"}},[a("i",{staticClass:"fab fa-linkedin fa-lg"})])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/keiichi031605",target:"_blank"}},[a("i",{staticClass:"fab fa-github fa-lg"})])]),t._v(" "),a("li",[a("a",{attrs:{href:"#",target:"_blank"}},[a("i",{staticClass:"far fa-file fa-lg"})])])])])]),t._v(" "),a("Splash"),t._v(" "),a("Profile"),t._v(" "),a("Skill"),t._v(" "),a("Experience"),t._v(" "),a("Contact")],1)},staticRenderFns:[]};var q=a("VU/8")($,U,!1,function(t){a("S7jo")},"data-v-8f57ad6a",null).exports,Y={name:"Experience",components:{FadeInComponent:S}},D={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"projects"}},[e("div",[e("section",[e("h1",{staticClass:"title"},[this._v("Projects")]),this._v(" "),e("div",{staticClass:"card"},[e("div",[e("a",{attrs:{href:"",target:"_brank"}},[this._v("Sorry. I am building the project page at the moment.\n              "),e("img",{attrs:{src:"",alt:""}})])])])])])])}]};var N=a("VU/8")(Y,D,!1,function(t){a("AkHW")},"data-v-22540ccf",null).exports;s.default.use(d.a),s.default.use(p.a),s.default.use(u.a),s.default.use(_.a,{locale:f.a}),s.default.use(C.a);var K=new C.a({routes:[{path:"/",name:"Home",component:q},{path:"/Experience",component:B},{path:"/Project",component:N},{path:"/Contact",component:V}]});s.default.config.productionTip=!1,new s.default({el:"#app",router:K,components:{App:l},template:"<App/>"})},S7jo:function(t,e){},"T3p/":function(t,e,a){t.exports=a.p+"static/img/roasting.bdd9b29.jpg"},cG56:function(t,e){},"e+jk":function(t,e){},gyHv:function(t,e){},kF6T:function(t,e){},m5cx:function(t,e){},sIvF:function(t,e){},tvR6:function(t,e){},uQtg:function(t,e,a){t.exports=a.p+"static/img/keiichi.f60903e.jpeg"},w2kZ:function(t,e){},zObX:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.574e5ffe83a441f9b775.js.map