(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{111:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),r=a(21),c=a.n(r),o=(a(67),a(20)),i=a(5),l=a(6),d=a(7),b=a(8),u=(a(68),a(10)),h=a(12),j=a(9),p=a.n(j),x=function(e,t,a,n,s){return p.a.post("/api/auth/signup",{username:e,password:t,email:a,nativeLang:n,targetLang:s}).then((function(e){return e.data})).catch((function(e){return e.response.data}))},m=function(e,t){return p.a.post("/api/auth/login",{username:e.toLowerCase(),password:t}).then((function(e){return e.data})).catch((function(e){return e.response.data}))},g=a(0);function O(e){var t=function(){p.a.delete("/api/auth/logout").then((function(e){return e.data})).catch((function(e){return e.response.data})).then((function(){e.setUser(null)}))};return Object(g.jsxs)("header",{children:[Object(g.jsx)(h.b,{to:"/",children:Object(g.jsx)("h1",{class:"text-4xl",children:"LingoFish"})}),Object(g.jsx)("ul",{children:e.user?Object(g.jsxs)("div",{className:"menu",children:[Object(g.jsx)("li",{children:Object(g.jsx)(h.b,{to:"/dashboard",children:"Dashboard"})}),Object(g.jsx)("li",{children:Object(g.jsx)(h.b,{to:"/library",children:"Library"})}),Object(g.jsx)("li",{children:Object(g.jsx)(h.b,{to:"/",onClick:function(){return t()},children:"Logout"})})]}):Object(g.jsxs)("div",{className:"menu",children:[Object(g.jsx)("li",{children:Object(g.jsx)(h.b,{to:"/signup",children:"Signup"})}),Object(g.jsx)("li",{children:Object(g.jsx)(h.b,{to:"/login",children:"Login"})})]})})]})}var f=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(g.jsxs)("main",{children:[Object(g.jsx)("h1",{children:"Headline"}),Object(g.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, ducimus?"})]})}}]),a}(s.a.Component);function v(){return Object(g.jsx)("footer",{children:Object(g.jsx)("h4",{class:"text-4xl text-white p-3",children:"footer"})})}var y=a(14),L=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={username:"",password:"",email:"",nativeLang:"EN",targetLang:"EN",message:""},e.handleChange=function(t){var a=t.target,n=a.name,s=a.value;e.setState(Object(y.a)({},n,s))},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n=a.username,s=a.password,r=a.email,c=a.nativeLang,o=a.targetLang;x(n,s,r,c,o).then((function(t){t.message?e.setState({message:t.message,username:"",password:"",email:""}):(e.props.setUser(t),e.props.history.push("/dashboard"))}))},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(g.jsxs)("main",{children:[Object(g.jsx)("h2",{children:"Signup"}),Object(g.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(g.jsx)("label",{htmlFor:"username",children:"Username: "}),Object(g.jsx)("input",{id:"username",type:"text",name:"username",value:this.state.username,onChange:this.handleChange}),Object(g.jsx)("label",{htmlFor:"email",children:"Email: "}),Object(g.jsx)("input",{id:"email",type:"email",name:"email",value:this.state.email||"",onChange:this.handleChange}),Object(g.jsx)("label",{htmlFor:"password",children:"Password: "}),Object(g.jsx)("input",{id:"password",type:"password",name:"password",value:this.state.password,onChange:this.handleChange}),Object(g.jsx)("label",{htmlFor:"nativeLang",children:"Native Language: "}),Object(g.jsxs)("select",{name:"nativeLang",id:"nativeLang",value:this.state.nativeLang,onChange:this.handleChange,children:[Object(g.jsx)("option",{value:"EN",children:"English"}),Object(g.jsx)("option",{value:"GER",children:"German"}),Object(g.jsx)("option",{value:"FR",children:"French"}),Object(g.jsx)("option",{value:"ES",children:"Spanish"})]}),Object(g.jsx)("label",{htmlFor:"targetLang",children:"Target Language: "}),Object(g.jsxs)("select",{name:"targetLang",id:"targetLang",value:this.state.targetLang,onChange:this.handleChange,children:[Object(g.jsx)("option",{value:"EN",children:"English"}),Object(g.jsx)("option",{value:"GER",children:"German"}),Object(g.jsx)("option",{value:"FR",children:"French"}),Object(g.jsx)("option",{value:"ES",children:"Spanish"})]}),Object(g.jsx)("button",{type:"submit",children:"Sign Up"}),this.state.message&&Object(g.jsx)("h3",{children:this.state.message})]})]})}}]),a}(n.Component),w=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={username:"",password:"",message:""},e.handleChange=function(t){var a=t.target,n=a.name,s=a.value;e.setState(Object(y.a)({},n,s))},e.handleSubmit=function(t){t.preventDefault();var a=e.state,n=a.username,s=a.password;m(n,s).then((function(t){t.message?e.setState({message:t.message,username:"",password:""}):(e.props.setUser(t),e.props.history.push("/dashboard"))}))},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(g.jsxs)("main",{children:[Object(g.jsx)("h2",{children:"Login"}),Object(g.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(g.jsx)("label",{htmlFor:"username",children:"Username: "}),Object(g.jsx)("input",{id:"username",type:"text",name:"username",value:this.state.username,onChange:this.handleChange}),Object(g.jsx)("label",{htmlFor:"password",children:"Password: "}),Object(g.jsx)("input",{id:"password",type:"password",name:"password",value:this.state.password,onChange:this.handleChange}),Object(g.jsx)("button",{type:"submit",children:"Log in"}),this.state.message&&Object(g.jsx)("h3",{children:this.state.message})]})]})}}]),a}(n.Component);function N(e){return Object(g.jsx)(h.b,{to:"/vocablist/".concat(e.vocablist._id),children:Object(g.jsxs)("div",{className:"w-90 mb-10 bg-gray-100 rounded-lg p-5",children:[Object(g.jsx)("h3",{className:"text-lg font-bold",children:e.vocablist.name}),Object(g.jsx)("span",{children:e.vocablist.nativeLang}),Object(g.jsx)("span",{children:e.vocablist.targetLang}),Object(g.jsxs)("h6",{children:[Object(g.jsx)("strong",{children:"created by: "}),e.user.username]})]})})}var C=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={vocabLists:[]},e.componentDidMount=function(){e.getVocabListFromUser()},e.getVocabListFromUser=function(){p.a.get("/api/vocabList/myVocabLists/".concat(e.props.user._id)).then((function(t){e.setState({vocabLists:t.data})}))},e.vocabLists=function(){return e.state.vocabLists.map((function(t){return Object(g.jsx)(N,{vocablist:t,user:e.props.user},t._id)}))},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(g.jsxs)("div",{children:[Object(g.jsx)("h3",{className:"text-3xl text-center mb-5 font-bold tracking-wide border-b pb-1",children:"MY VOCABLISTS \ud83d\udcda"}),this.vocabLists()]})}}]),a}(n.Component);function S(e){return console.log(e.user),Object(g.jsx)("main",{children:Object(g.jsx)(C,{user:e.user})})}var T=a(13),k=function(e){var t=e.component,a=e.user,n=e.path,s=e.redirectPath,r=void 0===s?"/":s,c=Object(T.a)(e,["component","user","path","redirectPath"]);return Object(g.jsx)(u.b,{exact:!0,path:n,render:function(e){return a?Object(g.jsx)(t,Object(o.a)(Object(o.a)(Object(o.a)({},e),c),{},{user:a})):Object(g.jsx)(u.a,{to:r})}})},F=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props.text;return Object(g.jsxs)("div",{class:"lg:max-w-md m-10 bg-gray-50 p-6 shadow-lg  bg-white bg-opacity-75 rounded-md",children:[Object(g.jsxs)(h.b,{to:"/texts/".concat(e._id),children:[Object(g.jsx)("h3",{class:"text-2xl",children:e.title})," "]}),Object(g.jsx)("h4",{class:"text-xl",children:e.author}),Object(g.jsx)("h4",{class:"italic p-1",children:e.genre.join("")}),Object(g.jsx)("p",{children:e.body.slice(0,300)+"..."})]})}}]),a}(n.Component),V=a(22),W=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={showForm:!1,genre:[]},e.closeForm=function(){e.setState({showForm:!1})},e.handleSubmit=function(t){t.preventDefault();var a=t.target,n=a.title,s=a.author,r=a.releaseDate,c=a.type,o=a.genre,i=a.body,l=[];o.length>1?o.forEach((function(e){l.push(e.value)})):l=o.value,p.a.post("/api/textList/addText",{title:n.value,author:s.value,releaseDate:new Date(r.value),type:c.value,body:i.value,genre:l}).then((function(t){e.setState({showForm:!1}),e.props.getText()}))},e.form=function(){return Object(g.jsx)("div",{className:"flex justify-center overflow-y-scroll items-center fixed h-screen top-0 left-0 right-0 bottom-0 z-10 bg-black bg-opacity-60",children:Object(g.jsxs)("form",{onSubmit:function(t){return e.handleSubmit(t)},className:"flex flex-col w-96 py-10 px-10 text-left relative rounded-md bg-white",children:[Object(g.jsxs)("div",{className:"flex flex-col mb-5",children:[Object(g.jsx)("legend",{className:"text-center text-2xl font-semibold",children:"Add a new text"}),Object(g.jsx)("button",{onClick:e.closeForm,className:"absolute top-5 text-xl right-5 w-10 h-10 rounded-full border",children:"\u2716"})]}),Object(g.jsxs)("div",{className:"flex flex-col mb-5",children:[Object(g.jsxs)("label",{htmlFor:"title",children:[Object(g.jsx)("strong",{children:"Title:"})," "]}),Object(g.jsx)("input",{className:"border-b",required:!0,type:"text",name:"title"})]}),Object(g.jsxs)("div",{className:"flex flex-col mb-5",children:[Object(g.jsx)("label",{htmlFor:"author",children:Object(g.jsx)("strong",{children:"Author:"})}),Object(g.jsx)("input",{className:"border-b",required:!0,type:"author",name:"author"})]}),Object(g.jsxs)("div",{className:"flex flex-col mb-5",children:[Object(g.jsxs)("label",{htmlFor:"releaseDate",children:[Object(g.jsx)("strong",{children:"Release Date: "})," "]}),Object(g.jsx)("input",{type:"date",name:"releaseDate"})]}),Object(g.jsx)("label",{htmlFor:"type",children:Object(g.jsx)("strong",{children:"Type:"})}),Object(g.jsx)("div",{className:"flex flex-col mb-5",children:Object(g.jsx)(V.a,{name:"type",options:[{value:"book",label:"Book"},{value:"poem",label:"Poem"},{value:"article",label:"Article"}],className:"basic-single",classNamePrefix:"select",id:"type"})}),Object(g.jsxs)("div",{className:"flex flex-col mb-5",children:[Object(g.jsx)("label",{htmlFor:"genre",children:Object(g.jsx)("strong",{children:"Genre:"})}),Object(g.jsx)(V.a,{isMulti:!0,name:"genre",options:[{value:"drama",label:"drama"},{value:"fiction",label:"fiction"},{value:"mystery",label:"mystery"},{value:"horror",label:"horror"},{value:"thriller",label:"thriller"},{value:"historical",label:"historical"},{value:"romance",label:"romance"},{value:"action",label:"action"},{value:"non-fiction",label:"non-fiction"},{value:"sci-fi",label:"sci-fi"},{value:"educational",label:"educational"},{value:"biographical",label:"biographical"},{value:"erotic",label:"erotic"},{value:"crime",label:"crime"},{value:"childrens",label:"childrens"},{value:"comedy",label:"comedy"}],className:"basic-multi-select",classNamePrefix:"select"})]}),Object(g.jsxs)("div",{className:"flex flex-col mb-5",children:[Object(g.jsxs)("label",{htmlFor:"body",children:[Object(g.jsx)("strong",{children:"Body:"})," "]}),Object(g.jsx)("textarea",{className:"border h-48 pt-3 px-4",id:"body",name:"body"})]}),Object(g.jsx)("button",{className:"py-2 px-4 bg-gray-900 text-white font-bold",children:" + add"})]})})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(g.jsxs)("div",{children:[Object(g.jsx)("button",{className:"bg-gray-900 text-white font-bold py-4 px-8 shadow-md rounded-md",onClick:function(t){return e.setState({showForm:!e.state.showForm})},children:"Add Text"}),this.state.showForm&&this.form()]})}}]),a}(n.Component),A=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={texts:[],name:"",author:"",targetLang:"",type:""},e.componentDidMount=function(){e.getAllTexts()},e.getAllTexts=function(){p.a.get("/api/textList/allText").then((function(t){console.log(t.data),e.setState({texts:t.data})}))},e.handleQueryChange=function(t){console.log(t.target.value),e.setState({name:t.target.value})},e.updateTargetLang=function(t){console.log(t),e.setState({targetLang:t.value})},e.updateTargettype=function(t){e.setState({type:t.value})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=this.state.texts.filter((function(t){return"".concat(t.title.toLowerCase()," ").concat(t.author.toLowerCase()).includes(e.state.name.toLowerCase())&&(t.sourceLang===e.state.targetLang||!e.state.targetLang)&&(t.type===e.state.type||!e.state.type)}));console.log(t.length);var a=t.map((function(e){return Object(g.jsx)(F,{text:e},e._id)}));return Object(g.jsxs)("main",{className:"mx-auto p-10 text-center",children:[Object(g.jsx)("h1",{className:"text-3xl py-7",children:"Library Page"}),Object(g.jsx)("div",{children:Object(g.jsxs)("form",{children:[Object(g.jsx)("label",{children:"Title / Author:"}),Object(g.jsx)("input",{type:"text",value:this.state.name,onChange:this.handleQueryChange}),Object(g.jsx)("br",{}),Object(g.jsx)("label",{htmlFor:"targetLangSelect",children:"Choose a language"}),Object(g.jsx)(V.a,{id:"targetLangSelect",options:[{value:"",label:"All languages"},{value:"FR",label:"French"},{value:"GER",label:"German"},{value:"EN",label:"English"},{value:"ES",label:"Spanish"}],onChange:this.updateTargetLang}),Object(g.jsx)("br",{}),Object(g.jsx)("label",{htmlFor:"typeSelect",children:"Choose a type"}),Object(g.jsx)(V.a,{id:"typeSelect",options:[{value:"",label:"All type"},{value:"book",label:"Book"},{value:"poem",label:"Poem"},{value:"article",label:"Article"}],onChange:this.updateTargettype})]})}),this.props.user&&Object(g.jsx)(W,{getText:this.getAllTexts}),Object(g.jsx)("div",{className:"flex flex-wrap justify-around",children:a})]})}}]),a}(n.Component),D=a(37),B=a.n(D),E=a(59),U=a(60);function P(e){return e.slice(0,1).toUpperCase()+e.slice(1)}var I=a(62),M=Object(I.a)(),R=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={showVocabList:!0,showNewVocabListForm:!1,newVocabListName:"Vocab from "+e.props.textTitle,myVocabLists:[]},e.componentDidMount=function(){e.updateDisplayedVocabLists()},e.updateDisplayedVocabLists=function(){console.log("updating lists"),p.a.get("/api/vocabList/myVocabLists/".concat(e.props.user._id)).then((function(t){t.data.map((function(t){var a={value:t._id,label:t.name};return e.setState((function(e){e.myVocabLists.push(a)})),a}))}))},e.createVocabList=function(t){var a=t.target;t.preventDefault(),p.a.post("/api/vocabList/addVocabList",{name:a.name.value,nativeLang:e.props.sourceLang,targetLang:e.props.targetLang,words:[[e.props.sourceLangWord,e.props.targetLangWord]],createdBy:e.props.user._id}),e.updateDisplayedVocabLists(),setTimeout((function(){e.setState({newVocabListName:"",showVocabList:!1,showNewVocabListForm:!1}),e.props.showSideBar()}),2e3)},e.addToVocabLists=function(t){if(t.preventDefault(),t.target.listsToAddTo.length>1){var a,n=Object(U.a)(t.target.listsToAddTo);try{for(n.s();!(a=n.n()).done;){var s=a.value;e.addWordToList(s.value)}}catch(r){n.e(r)}finally{n.f()}}else e.addWordToList(t.target.listsToAddTo.value);setTimeout((function(){e.setState({showVocabList:!1,showNewVocabListForm:!1}),e.props.showSideBar()}),2e3)},e.addWordToList=function(t){console.log("adding word to list"),p.a.put("/api/vocabList/addWord/".concat(t),{word:[e.props.sourceLangWord,e.props.targetLangWord]}).then((function(e){return console.log(e)}))},e.handleChange=function(t){e.setState({newVocabListName:t.target.value})},e.showVocabList=function(){console.log("showing vocab list"),e.state.showVocabList||e.updateDisplayedVocabLists(),e.setState({showVocabList:!e.state.showVocabList})},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(g.jsxs)("aside",{className:"fixed w-screen left-0 md:left-auto md:w-1/3 md:right-20 top-1/4  h-auto rounded-md  flex flex-col text-center p-6 bg-white bg-opacity-75 rounded-md",children:[Object(g.jsx)("button",{onClick:this.props.showSideBar,className:"text-white  py-1 px-2 rounded self-end",children:"\u2716\ufe0f"}),Object(g.jsxs)("div",{className:"translation",children:[Object(g.jsx)("h3",{className:"text-3xl font-bold",children:P(this.props.targetLangWord)}),Object(g.jsx)("h4",{className:"text-2xl pb-2",children:P(this.props.sourceLangWord)})]}),Object(g.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 text-white mr-1 py-2 px-4 rounded",onClick:this.showVocabList,children:"add to vocabulary list"}),this.state.showVocabList&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsxs)("form",{onSubmit:this.addToVocabLists,children:[Object(g.jsx)("h3",{children:"My Lists"}),Object(g.jsx)(V.a,{components:M,id:"listsSelect",options:this.state.myVocabLists,isMulti:!0,name:"listsToAddTo",className:"basic-multi-select"}),Object(g.jsx)("button",{type:"submit",className:"bg-green-500",children:"Add to your lists"})]}),Object(g.jsx)("button",{className:"bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded",onClick:function(){e.setState({showNewVocabListForm:!0})},children:"Create a new Vocab list"}),this.state.showNewVocabListForm&&Object(g.jsxs)("form",{onSubmit:this.createVocabList,children:[Object(g.jsx)("label",{htmlFor:"listName",children:"Name of List:"}),Object(g.jsx)("input",{value:this.state.newVocabListName,onChange:this.handleChange,name:"name",id:"listName"}),Object(g.jsx)("button",{type:"submit",className:"bg-blue-500 hover:bg-blue-700 text-white  py-2 px-4 rounded",children:"Create"})]})]})]})}}]),a}(s.a.Component),_=a(61),G=a.n(_),q=function(e,t){return G()({free_api:!0,text:e,target_lang:t,auth_key:"c4d15740-4878-d0bf-6dd6-67e60ffe8c8c:fx"}).then((function(e){return e.data.translations[0].text})).catch((function(e){return console.log(e)}))},J=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={textTitle:"",textBody:"",sideBar:!1,wordToBeTranslated:"",wordTranslated:"",targetLang:"EN",sourceLang:""},e.componentDidMount=function(){p.a.get("/api/textList/findText/".concat(e.props.match.params.id)).then((function(t){var a=e.makeTextClickable(t.data.body);e.setState({textTitle:t.data.title,sourceLang:t.data.sourceLang,textBody:a})})).catch((function(e){return console.log(e)}))},e.makeTextClickable=function(t){return t.split(" ").map((function(t){if(t.includes("\n")){var a=t.split("\n");return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("span",{class:"hover:text-blue-600",onClick:function(t){return e.handleTranslation(t.target.innerText)},children:a[0]}),Object(g.jsx)("br",{}),Object(g.jsx)("span",{class:"hover:text-blue-600",onClick:function(t){return e.handleTranslation(t.target.innerText)},children:a[1]+" "})]})}return Object(g.jsx)("span",{class:"hover:text-blue-600",onClick:function(t){return e.handleTranslation(t.target.innerText)},children:t+" "})}))},e.showSideBar=function(t){e.setState({sideBar:!e.state.sideBar})},e.handleTranslation=function(){var t=Object(E.a)(B.a.mark((function t(a){var n,s;return B.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(a),n=e.prepWordForApi(a),console.log(n),t.next=5,q(n,e.state.targetLang);case 5:s=t.sent,e.setState({wordToBeTranslated:n,wordTranslated:s}),e.state.sideBar||e.showSideBar(s);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.updateTargetLang=function(t){e.setState({targetLang:t.value})},e}return Object(l.a)(a,[{key:"prepWordForApi",value:function(e){return console.log("word: ",e),e.toLowerCase().replace(/[.,/#!$%^&*;:{}=-_`~()]/g,"")}},{key:"render",value:function(){var e=[{value:"EN",label:"English"},{value:"DE",label:"German"},{value:"FR",label:"French"},{value:"ES",label:"Spanish"},{value:"IT",label:"Italian"},{value:"NL",label:"Dutch"},{value:"PL",label:"Polish"}];return Object(g.jsxs)("div",{class:"mx-auto lg:ml-52 p-10 text-center mt-16 pb-20 max-w-screen-md bg-white bg-opacity-75 rounded-md",children:[Object(g.jsxs)("div",{className:"flex-col flex items-center",children:[Object(g.jsx)("label",{htmlFor:"targetLangSelect",children:"Translate to"}),Object(g.jsx)(V.a,{id:"targetLangSelect",onChange:this.updateTargetLang,options:e,defaultValue:e[0],className:"w-28",default:"FR"})]}),Object(g.jsx)("h1",{class:"text-3xl py-7",children:this.state.textTitle}),Object(g.jsx)("p",{class:"text-lg",children:this.state.textBody}),this.state.sideBar&&Object(g.jsx)(R,{sourceLangWord:this.state.wordToBeTranslated,targetLangWord:this.state.wordTranslated,textTitle:this.state.textTitle,sourceLang:this.state.sourceLang,targetLang:this.state.targetLang,user:this.props.user,showSideBar:this.showSideBar})]})}}]),a}(n.Component),K=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={vocabListWords:[],vocabListName:""},e.getVocabListDetail=function(){p.a.get("/api/vocablist/findVocabList/".concat(e.props.match.params.id)).then((function(t){e.setState({vocabListWords:t.data.words,vocabListName:t.data.name})})).catch((function(e){return console.log(e)}))},e.componentDidMount=function(){e.getVocabListDetail()},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(g.jsxs)("div",{className:"text-center",children:[Object(g.jsx)("h1",{className:"font-bold text-2xl text-center mb-5",children:this.state.vocabListName}),this.state.vocabListWords.map((function(e,t){return Object(g.jsxs)("div",{className:"text-lg leading-releaxed",children:[Object(g.jsxs)("span",{children:[e[0]," \u2013 "]}),Object(g.jsx)("span",{children:e[1]})]},t)})),Object(g.jsxs)(h.b,{to:"/vocablist/".concat(this.props.match.params.id,"/flashcards"),children:[" ",Object(g.jsx)("button",{className:"bg-green-700 text-white px-3 py-2 rounded-lg mt-3",children:"Learn this set!"})]})]})}}]),a}(n.Component),Q=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).flipCard=function(){console.log("flipping");var e=document.querySelector(".flashcard");e.classList.contains("flashcard-turned")?e.classList.remove("flashcard-turned"):e.classList.add("flashcard-turned")},e.handleKeyUp=function(t){38!==t.keyCode&&40!==t.keyCode||(console.log("up key"),console.log(t.keyCode),e.flipCard()),39===t.keyCode&&e.props.showNewWord(1),37===t.keyCode&&e.props.showNewWord(-1)},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return document.addEventListener("keydown",this.handleKeyUp),Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("div",{className:"flashcard mx-auto min-w-1/2 md:w-500px h-72 bg-white rounded-md bg-opacity-100  ",children:Object(g.jsxs)("div",{className:"flashcard-inner h-72 min-w-1/2 md:w-500px",children:[Object(g.jsx)("div",{className:"flashcard-front bg-white  h-72 min-w-1/2 md:w-500px flex items-center justify-center rounded-lg",children:Object(g.jsx)("h1",{className:"text-6xl",children:this.props.word[0]})}),Object(g.jsx)("div",{className:"flaschard-back back-card-text bg-white h-72 min-w-1/2 md:w-500px flex items-center justify-center rounded-lg",children:Object(g.jsx)("h1",{className:"text-6xl ",children:this.props.word[1]})})]})}),Object(g.jsx)("button",{className:"bg-blue-500 m-4 py-2 rounded-3xl px-4 text-white hover:bg-blue-800",onClick:function(){e.props.showNewWord(-1)},children:"Last Card"}),Object(g.jsx)("button",{className:"bg-blue-500 m-4 py-2 rounded-3xl px-4 text-white hover:bg-blue-800",onClick:function(){e.props.showNewWord(1)},children:"Next Card"})]})}}]),a}(n.Component),z=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={vocabListObject:"",vocabListWords:[],vocabIndex:-1,randomOrder:!1,currentWord:["Use  arrows or the buttons to start","Use your arrows or the buttons to start"]},e.componentDidMount=function(){p.a.get("/api/vocabList/findVocabList/".concat(e.props.match.params.id)).then((function(t){e.setState({vocabListObject:t.data,vocabListWords:t.data.words})}))},e.showNewWord=function(t){document.querySelector(".flashcard").classList.remove("flashcard-turned"),setTimeout((function(){if(e.state.randomOrder){var a=Math.floor(Math.random()*e.state.vocabListWords.length);e.setState({vocabIndex:a,currentWord:e.state.vocabListWords[a]})}else e.setState((function(a){return 0===a.vocabIndex?{vocabIndex:e.state.vocabListWords.length-1,currentWord:e.state.vocabListWords[e.state.vocabListWords.length-1]}:{vocabIndex:(a.vocabIndex+t)%e.state.vocabListWords.length,currentWord:e.state.vocabListWords[(a.vocabIndex+t)%e.state.vocabListWords.length]}}))}),200)},e.toggleRandom=function(){e.setState({randomOrder:!e.state.randomOrder})},e.handle=function(){console.log("key pressed")},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(g.jsxs)("div",{className:"w-auto bg-white bg-opacity-80 p-3 text-center",children:[Object(g.jsxs)("h1",{children:["FlashCards from ",Object(g.jsx)("em",{children:this.state.vocabListObject.name})]}),Object(g.jsx)("label",{htmlFor:"randomOrder",children:"Random order:"}),Object(g.jsx)("input",{type:"checkbox",name:"randomOrder",checked:this.state.randomOrder,onClick:this.toggleRandom}),Object(g.jsx)(Q,{showNewWord:this.showNewWord,vocabListObject:this.state.vocabListObject,word:this.state.currentWord})]})}}]),a}(n.Component),H=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(g.jsx)("main",{children:Object(g.jsx)("h1",{children:"Site not found"})})}}]),a}(n.Component),Y=function(e){Object(d.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={user:e.props.user},e.setUser=function(t){return e.setState({user:t}),t},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return Object(g.jsxs)("body",{class:" flex flex-col min-h-screen  bg-gradient-to-r  from-blue-400  to-green-800  via-blue-700 animate-gradient-xy ",children:[Object(g.jsx)(O,{user:this.state.user,setUser:this.setUser}),Object(g.jsx)("main",{class:"flex-grow",children:Object(g.jsxs)(u.d,{children:[Object(g.jsx)(u.b,{exact:!0,path:"/",component:f,user:this.state.user}),Object(g.jsx)(u.b,{exact:!0,path:"/signup",render:function(t){return Object(g.jsx)(L,Object(o.a)({setUser:e.setUser},t))}}),Object(g.jsx)(u.b,{exact:!0,path:"/login",render:function(t){return Object(g.jsx)(w,Object(o.a)({setUser:e.setUser},t))}}),Object(g.jsx)(k,{path:"/dashboard",user:this.state.user,component:S,redirectPath:"/"}),Object(g.jsx)(u.b,{exact:!0,path:"/library",render:function(t){return Object(g.jsx)(A,Object(o.a)({user:e.state.user,setUser:e.setUser},t))}}),Object(g.jsx)(u.b,{exact:!0,path:"/texts/:id",render:function(t){return Object(g.jsx)(J,Object(o.a)({user:e.state.user},t))}}),Object(g.jsx)(u.b,{exact:!0,path:"/vocablist/:id",render:function(e){return Object(g.jsx)(K,Object(o.a)({},e))}}),Object(g.jsx)(u.b,{exact:!0,path:"/vocablist/:id/flashcards",render:function(t){return Object(g.jsx)(z,Object(o.a)({user:e.state.user},t))}}),Object(g.jsx)(u.b,{path:"/404",component:H}),Object(g.jsx)(u.a,{to:"/404"})]})}),Object(g.jsx)(v,{})]})}}]),a}(s.a.Component),$=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,114)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,c=t.getTTFB;a(e),n(e),s(e),r(e),c(e)}))};p.a.get("/api/auth/loggedin").then((function(e){var t=e.data;console.log("user in index.js: ",t),c.a.render(Object(g.jsx)(h.a,{children:Object(g.jsx)(Y,{user:t})}),document.getElementById("root"))})).catch((function(e){console.log(e)})),$()},67:function(e,t,a){},68:function(e,t,a){}},[[111,1,2]]]);
//# sourceMappingURL=main.9d0ace86.chunk.js.map