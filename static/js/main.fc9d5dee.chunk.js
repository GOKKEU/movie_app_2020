(this.webpackJsonpmovie_app_2020=this.webpackJsonpmovie_app_2020||[]).push([[0],{28:function(e,t,a){},34:function(e,t,a){e.exports=a(66)},57:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(29),o=a.n(s),c=a(7),l=a(6),i=a(15),m=a.n(i),u=a(30),v=a(10),p=a(11),d=a(12),_=a(13),E=a(31),f=a.n(E);a(57);var g=function(e){var t=e.id,a=e.year,n=e.title,s=e.summary,o=e.poster,l=e.genres;return r.a.createElement("div",{className:"movie"},r.a.createElement(c.b,{to:{pathname:"/movie/".concat(t),state:{year:a,title:n,summary:s,poster:o,genres:l}}},r.a.createElement("img",{src:o,alt:n,title:n}),r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__title"},n),r.a.createElement("h5",{className:"movie__year"},a),r.a.createElement("ul",{className:"movie__genres"},l.map((function(e,t){return r.a.createElement("li",{key:t,className:"genres__genre"},e)}))),r.a.createElement("p",{className:"movie__summary"},s.slice(0,180),"..."))))},h=(a(28),function(e){Object(_.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(v.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovies=Object(u.a)(m.a.mark((function t(){var a,n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:a=t.sent,n=a.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading...")):r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(g,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),a}(r.a.Component));a(63);var y=function(e){return console.log(e),r.a.createElement("div",{className:"about__container"},r.a.createElement("span",null,"\u201cFreedom is the freedom to say that two plus two make four. If that is granted, all else follows.\u201d"),r.a.createElement("span",null,"\u2212 George Orwell, 1984"))},b=(a(64),function(e){Object(_.a)(a,e);var t=Object(d.a)(a);function a(){return Object(v.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;void 0===t.state&&a.push("/")}},{key:"render",value:function(){var e=this.props.location;return console.log(e.state),e.state?r.a.createElement("div",{className:"detail__container"},r.a.createElement("img",{src:e.state.poster,alt:e.state.title,title:e.state.title}),r.a.createElement("div",{className:"detail__movie__data"},r.a.createElement("h3",null,e.state.title),r.a.createElement("h5",null,e.state.year),r.a.createElement("ul",{className:"detail__movie__genres"},e.state.genres.map((function(e,t){return r.a.createElement("li",{key:t,className:"genres__genre"},e)}))))):null}}]),a}(r.a.Component));a(65);var N=function(){return r.a.createElement("div",{className:"nav"},r.a.createElement(c.b,{to:"/"},"Home"),r.a.createElement(c.b,{to:"/about"},"About"))};var k=function(){return r.a.createElement(c.a,null,r.a.createElement(N,null),r.a.createElement(l.a,{path:"/",exact:!0,component:h}),r.a.createElement(l.a,{path:"/about",component:y}),r.a.createElement(l.a,{path:"/movie/:id",component:b}))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.fc9d5dee.chunk.js.map