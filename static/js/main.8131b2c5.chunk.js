(this["webpackJsonpmovie-cards-crud"]=this["webpackJsonpmovie-cards-crud"]||[]).push([[0],{20:function(e,t,n){},29:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n.n(i),r=n(21),s=n.n(r),c=(n(29),n(3)),o=n(4),l=n(6),u=n(5),d=n(9),h=n(2),m=n(10),b=n.n(m),j=n(12),v=n(8),f=n(0),p=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{className:"w-full h-screen flex justify-center items-center font-bold text-xl text-white",children:"Carregando..."})}}]),n}(i.Component),x=p,O=n(15),g=n(13),y=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(c.a)(this,n),(i=t.call(this,e)).state=Object(g.a)({},e.movie),i.handleSubmit=i.handleSubmit.bind(Object(v.a)(i)),i}return Object(o.a)(n,[{key:"handleSubmit",value:function(){(0,this.props.onSubmit)(this.state)}},{key:"updateMovie",value:function(e,t){this.setState(Object(O.a)({},e,t))}},{key:"renderTitleInput",value:function(){var e=this,t=this.state.title;return Object(f.jsx)("div",{children:Object(f.jsxs)("label",{className:"edit-label",htmlFor:"movie_title",children:["T\xedtulo",Object(f.jsx)("input",{placeholder:"Insira o t\xedtulo",id:"movie_title",type:"text",className:"validate edit-input",value:t,onChange:function(t){return e.updateMovie("title",t.target.value)}})]})})}},{key:"renderSubtitleInput",value:function(){var e=this,t=this.state.subtitle;return Object(f.jsx)("div",{children:Object(f.jsxs)("label",{className:"edit-label",htmlFor:"movie_subtitle",children:["Subt\xedtulo",Object(f.jsx)("input",{placeholder:"Insira o subt\xedtulo",id:"movie_subtitle",type:"text",className:"edit-input",value:t,onChange:function(t){return e.updateMovie("subtitle",t.target.value)}})]})})}},{key:"renderImagePathInput",value:function(){var e=this,t=this.state.imagePath;return Object(f.jsx)("div",{className:"row",children:Object(f.jsxs)("label",{className:"edit-label",htmlFor:"movie_image",children:["Imagem",Object(f.jsx)("input",{placeholder:"Insira o caminho da imagem",id:"movie_image",type:"text",className:"edit-input",value:t,onChange:function(t){return e.updateMovie("imagePath",t.target.value)}})]})})}},{key:"renderStorylineInput",value:function(){var e=this,t=this.state.storyline;return Object(f.jsx)("div",{children:Object(f.jsxs)("label",{className:"edit-label",htmlFor:"movie_storyline",children:["Sinopse",Object(f.jsx)("textarea",{className:"text-area",id:"movie_storyline",value:t,onChange:function(t){return e.updateMovie("storyline",t.target.value)}})]})})}},{key:"renderGenreSelection",value:function(){var e=this,t=this.state.genre;return Object(f.jsx)("div",{children:Object(f.jsxs)("label",{className:"edit-label",htmlFor:"movie_genre",children:["G\xeanero",Object(f.jsxs)("select",{id:"movie_genre",value:t,className:"edit-input",onChange:function(t){return e.updateMovie("genre",t.target.value)},children:[Object(f.jsx)("option",{value:"action",children:"A\xe7\xe3o"}),Object(f.jsx)("option",{value:"comedy",children:"Com\xe9dia"}),Object(f.jsx)("option",{value:"thriller",children:"Suspense"}),Object(f.jsx)("option",{value:"fantasy",children:"Fantasia"})]})]})})}},{key:"renderRatingInput",value:function(){var e=this,t=this.state.rating;return Object(f.jsx)("div",{children:Object(f.jsxs)("label",{className:"edit-label",htmlFor:"movie_rating",children:["Avalia\xe7\xe3o",Object(f.jsx)("input",{placeholder:"Avalia\xe7\xe3o",id:"movie_rating",type:"number",step:.1,min:0,max:5,value:t,className:"edit-input",onChange:function(t){return e.updateMovie("rating",t.target.value)}})]})})}},{key:"renderSubmitButton",value:function(){return Object(f.jsx)("div",{children:Object(f.jsx)("button",{className:"bg-red-700 px-4 py-2 rounded text-white hover:bg-red-600 transition duration-300",type:"button",onClick:this.handleSubmit,children:Object(f.jsx)("span",{className:"font-semibold",children:"Concluir"})})})}},{key:"render",value:function(){return Object(f.jsx)("div",{children:Object(f.jsxs)("form",{children:[this.renderTitleInput(),this.renderSubtitleInput(),this.renderImagePathInput(),this.renderStorylineInput(),Object(f.jsxs)("div",{className:"flex justify-between",children:[this.renderGenreSelection(),this.renderRatingInput()]}),Object(f.jsx)("div",{className:"flex justify-center mt-4",children:this.renderSubmitButton()})]})})}}]),n}(a.a.Component),k=(n(20),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.movie,t=e.id,n=e.title,i=e.storyline,a=e.imagePath,r=e.genre,s=e.rating;return Object(f.jsxs)("div",{"data-testid":"movie-card",className:"w-96 bg-white flex flex-col rounded m-4",children:[Object(f.jsx)("img",{className:"rounded-t h-56",src:a,alt:n}),Object(f.jsxs)("div",{className:"px-4 py-4",children:[Object(f.jsx)("p",{className:"mb-4 font-bold",children:n}),Object(f.jsx)("p",{className:"mb-8",children:i}),Object(f.jsxs)("p",{className:"mb-4 font-medium",children:["Genre: ",Object(f.jsx)("span",{children:r})]}),Object(f.jsxs)("p",{className:"mb-4 font-medium",children:["Rating: ",Object(f.jsx)("span",{children:s})]}),Object(f.jsx)(d.b,{className:"text-red-700 font-medium hover:text-red-600 transition duration-300 ease-in-out",to:"/movies/".concat(t),children:"MOVIE DETAILS"})]})]})}}]),n}(a.a.Component)),w=k,N=n(24),S=[{id:1,title:"Kingsglaive",subtitle:"Final Fantasy XV",storyline:"King Regis, who oversees the land of Lucis, commands his army of soldiers to protect the kingdom from the Niflheim empire's plans to steal the sacred crystal.",rating:4.5,imagePath:"https://raikouve.github.io/movie-cards-crud/images/Kingsglaive_Final_Fantasy_XV.jpg",bookmarked:!0,genre:"action"},{id:2,title:"Final Fantasy",subtitle:"Spirits Within",storyline:"A scientist makes a last stand on Earth with the help of a ragtag team of soldiers against an invasion of alien phantoms.",rating:4.5,imagePath:"https://raikouve.github.io/movie-cards-crud/images/Final_Fantasy_Spirits_Within.jpg",bookmarked:!1,genre:"fantasy"},{id:3,title:"Ghost In The Shell",subtitle:"Ghost In The Shell",storyline:"A hacker known as the Puppet Master is hunted by a female cyborg cop and her partner. This film is a revised version of Ghost in the Shell (1995).",rating:5,imagePath:"https://raikouve.github.io/movie-cards-crud/images/Ghost_In_The_Shell_2_0.jpg",bookmarked:!1,genre:"comedy"},{id:4,title:"Appleseed Alpha",subtitle:"Appleseed Alpha",storyline:"A young female soldier Deunan and her cyborg partner Briareos survive through the post World War 3 apocalyptic New York in search of human's future hope, the legendary city of Olympus.",rating:3.8,imagePath:"https://raikouve.github.io/movie-cards-crud/images/Appleseed_Alpha.jpg",bookmarked:!0,genre:"action"},{id:5,title:"Resident Evil",subtitle:"Vendetta",storyline:"Chris Redfield enlists the help of Leon S. Kennedy and Rebecca Chambers to stop a death merchant, with a vengeance, from spreading a deadly virus in New York.",rating:4.2,imagePath:"https://raikouve.github.io/movie-cards-crud/images/Resident_Evil_Vendetta.jpg",bookmarked:!0,genre:"fantasy"}];localStorage.setItem("movies",JSON.stringify(S));var I=function(){return JSON.parse(localStorage.getItem("movies"))},C=function(e){return localStorage.setItem("movies",JSON.stringify(e))},M="OK",_=function(e){return function(t){setTimeout((function(){t(e)}),2e3)}},R=function(e){var t=I().find((function(t){return t.id===parseInt(e,10)}));return new Promise((function(e){_(t)(e)}))},A=function(e){return new Promise((function(t){var n=I().map((function(t){return t.id===parseInt(e.id,10)?Object(g.a)(Object(g.a)({},t),e):t}));C(n),_(M)(t)}))},P=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(c.a)(this,n),(i=t.call(this,e)).fetchMovies=i.fetchMovies.bind(Object(v.a)(i)),i.state={loading:!0,movies:[]},i}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.fetchMovies()}},{key:"fetchMovies",value:function(){var e=Object(j.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){var t=I();_(t)(e)}));case 2:t=e.sent,this.setState({movies:t,loading:!1});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.loading,n=e.movies;return Object(f.jsxs)("section",{"data-testid":"movie-list",className:"w-full container mx-auto flex flex-col flex-wrap px-4 py-4 bg-black",children:[Object(f.jsx)("div",{children:t?Object(f.jsx)(x,{}):Object(f.jsx)("div",{className:"w-full container mx-auto flex flex-wrap bg-black",children:n.map((function(e){return Object(f.jsx)(w,{movie:e},e.title)}))})}),Object(f.jsx)("div",{className:"w-full flex justify-center items-center text-white",children:Object(f.jsx)(d.b,{className:"bg-red-700 px-2 py-2 rounded hover:bg-red-600 transition duration-200 ease-linear",to:"movie-cards-crud/movies/new",children:"ADICIONAR CART\xc3O"})})]})}}]),n}(i.Component),F=P,T=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(c.a)(this,n),(i=t.call(this,e)).fetchMovie=Object(j.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=i.props.match.params,e.next=3,R(t.id);case 3:n=e.sent,i.setState({movie:n,loading:!1});case 5:case"end":return e.stop()}}),e)}))),i.fetchMovie=i.fetchMovie.bind(Object(v.a)(i)),i.state={loading:!0,movie:{}},i}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.fetchMovie()}},{key:"render",value:function(){var e=this.state,t=e.loading,n=e.movie,i=n.id,a=n.title,r=n.storyline,s=n.imagePath,c=n.genre,o=n.rating,l=n.subtitle;return t?Object(f.jsx)(x,{}):Object(f.jsx)("section",{className:"w-full h-full flex justify-center items-center bg-black",children:Object(f.jsxs)("div",{"data-testid":"movie-details",className:"container w-2/6 h5/6 bg-white flex flex-col rounded m-4",children:[Object(f.jsx)("img",{className:"rounded-t",alt:"Movie Cover",src:"../".concat(s)}),Object(f.jsxs)("div",{className:"flex flex-col",children:[Object(f.jsx)("h1",{className:"m-2 mt-4 font-bold text-xl",children:"Title: ".concat(a)}),Object(f.jsx)("p",{className:"m-2 font-semibold text-lg",children:"Subtitle: ".concat(l)}),Object(f.jsx)("p",{className:"m-2",children:"Storyline: ".concat(r)}),Object(f.jsx)("p",{className:"m-2 font-medium",children:"Genre: ".concat(c)}),Object(f.jsx)("p",{className:"m-2 font-medium",children:"Rating: ".concat(o)}),Object(f.jsxs)("div",{className:"flex justify-around mt-8 mb-4",children:[Object(f.jsx)(d.b,{className:"text-red-700 font-medium hover:text-red-600 transition duration-300",to:"movie-cards-crud/movies/".concat(i,"/edit"),children:"EDITAR"}),Object(f.jsx)(d.b,{className:"text-red-700 font-medium hover:text-red-600 transition duration-300",to:"/movie-cards-crud",onClick:function(){!function(e){var t=I();t=t.filter((function(t){return t.id!==parseInt(e,10)})),C(t),new Promise((function(e){_({status:M})(e)}))}(i)},children:"DELETAR"}),Object(f.jsx)(d.b,{className:"text-red-700 font-medium hover:text-red-600 transition duration-300",to:"/movie-cards-crud",children:"VOLTAR"})]})]})]})})}}]),n}(i.Component),D=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(c.a)(this,n),(i=t.call(this,e)).handleSubmit=i.handleSubmit.bind(Object(v.a)(i)),i.state={shouldRedirect:!1},i}return Object(o.a)(n,[{key:"handleSubmit",value:function(e){var t;t=e,new Promise((function(e){var n=I(),i=n[n.length-1].id+1,a=Object(g.a)(Object(g.a)({},t),{},{id:i});n=[].concat(Object(N.a)(n),[a]),C(n),_(M)(e)})),this.setState({shouldRedirect:!0})}},{key:"render",value:function(){return this.state.shouldRedirect?Object(f.jsx)(h.a,{to:"/movie-cards-crud"}):Object(f.jsx)("div",{"data-testid":"new-movie",className:"w-full mt-16 flex justify-center items-center",children:Object(f.jsx)(y,{onSubmit:this.handleSubmit})})}}]),n}(i.Component),E=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(c.a)(this,n),(i=t.call(this,e)).state={status:"loading",shouldRedirect:!1,movie:[]},i.handleSubmit=i.handleSubmit.bind(Object(v.a)(i)),i.requestMovie=i.requestMovie.bind(Object(v.a)(i)),i}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=Object(j.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.requestMovie();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleSubmit",value:function(){var e=Object(j.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A(t);case 2:this.setState({status:"loading",shouldRedirect:!0});case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"requestMovie",value:function(){var e=Object(j.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,R(t);case 3:n=e.sent,this.setState({status:"loaded",movie:n});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.status,n=e.shouldRedirect,i=e.movie;return n?Object(f.jsx)(h.a,{to:"/movie-cards-crud"}):"loading"===t?Object(f.jsx)(x,{}):Object(f.jsx)("section",{className:"w-full h-full flex justify-center",children:Object(f.jsx)("div",{className:"w-2/6 h-3/4 mt-16 bg-white flex justify-center items-center flex-wrap rounded px-4 py-4",children:Object(f.jsx)(y,{movie:i,onSubmit:this.handleSubmit})})})}}]),n}(i.Component),G=E,L=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{"data-testid":"404-error",className:"text-white",children:"P\xe1gina n\xe3o encontrada"})}}]),n}(i.Component),V=L,W=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(f.jsx)(d.a,{children:Object(f.jsxs)("div",{className:"h-screen bg-black overflow-x-hidden",children:[Object(f.jsx)("nav",{className:"flex justify-center items-center align-middle text-white text-2xl font-extrabold h-24 bg-red-700",children:Object(f.jsx)(d.b,{exact:!0,to:"/movie-cards-crud",children:"Movie Card Library CRUD"})}),Object(f.jsxs)(h.d,{children:[Object(f.jsx)(h.b,{exact:!0,path:"/movies/new",component:D}),Object(f.jsx)(h.b,{exact:!0,path:"/movies/:id/edit",component:G}),Object(f.jsx)(h.b,{exact:!0,path:"/movie-cards-crud",component:F}),Object(f.jsx)(h.b,{exact:!0,path:"/movies/:id",component:T}),Object(f.jsx)(h.b,{exact:!0,component:V})]})]})})}}]),n}(i.Component),B=W;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(f.jsx)(B,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[40,1,2]]]);
//# sourceMappingURL=main.8131b2c5.chunk.js.map