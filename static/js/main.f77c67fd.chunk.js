(this["webpackJsonppersonal-website"]=this["webpackJsonppersonal-website"]||[]).push([[0],{43:function(e,t,n){e.exports=n.p+"static/media/splitSky.925f03ec.jpg"},44:function(e,t,n){e.exports=n.p+"static/media/me.7efc5e07.jpg"},45:function(e,t,n){e.exports=n.p+"static/media/berkeley_0.925f03ec.jpg"},46:function(e,t,n){e.exports=n.p+"static/media/berkeley_1.8739e5f4.jpg"},47:function(e,t,n){e.exports=n.p+"static/media/berkeley_2.2b86e4de.jpg"},48:function(e,t,n){e.exports=n.p+"static/media/berkeley_3.852095b7.jpg"},49:function(e,t,n){e.exports=n.p+"static/media/berkeley_4.e96e2129.jpg"},50:function(e,t,n){e.exports=n.p+"static/media/berkeley_5.58c6ab13.jpg"},51:function(e,t,n){e.exports=n.p+"static/media/la_0.38714b21.jpg"},59:function(e,t,n){e.exports=n(76)},64:function(e,t,n){},65:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(20),c=n.n(l),o=(n(64),n(65),n(66),n(56)),i=n(4),s=n(13),u=n(14),m=n(24),h=n(17),d=n(16),p=n(8),f=n(79),g=n(57),v=n(9),E=n(28),b=n(25);function y(){var e=Object(p.a)(["\n    .Current {\n        writing-mode: vertical-lr;\n        text-orientation: sideways;\n        text-align: center;\n        width: 50px;\n        line-height: 50px; //keep this value the same as width\n        padding: 0px;\n    }\n\n    .All {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        vertical-align: middle;\n        height: 85%;\n        padding-left: 20px;\n        border-left: thin solid #AAAAAA;\n    }\n\n    a {\n        color: PowderBlue;\n    }\n\n    display: flex;\n    flex-direction: row;\n    justify-content: center;\n    align-items: center;\n    position: fixed;\n    height: 100%;\n    z-index: 1;\n"]);return y=function(){return e},e}var w=v.a.div(y()),x=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={currSect:[0,0],show:!1},a}return Object(u.a)(n,[{key:"getSections",value:function(e){for(var t=this.props.sections,n=this.props.sections.length,a=0,r=0;r<n;r++)if((a+=t[r][1].length)>e)return[r,a=e-(a-=t[r][1].length)]}},{key:"componentDidMount",value:function(){var e=this,t=Math.max(document.documentElement.clientHeight,window.innerHeight||0);document.getElementById("sectContainer").addEventListener("scroll",(function(){var n=Math.floor(document.getElementById("sectContainer").scrollTop/t);(n=e.getSections(n))[0]===e.state.currSect[0]&&n[1]===e.state.currSect[1]||e.setState({currSect:n}),e.setState({show:0!==n[0]})}))}},{key:"componentWillUnmount",value:function(){document.getElementById("sectContainer").removeEventListener("scroll",this.getSections)}},{key:"render",value:function(){var e,t,n,a,l,c,o=this.props.sections,i=[],s=Object(g.a)(o);try{for(s.s();!(c=s.n()).done;){var u=c.value;if(e=[],t=u[0],a=(n=u[1])[0]||t,(l=o[this.state.currSect[0]][0]===t)?i.push(r.a.createElement("a",{href:"#".concat(a),style:{color:"#84a8ac"}},t)):i.push(r.a.createElement("a",{href:"#".concat(a)},t)),null!==n[0]){for(var m=n.length,h=void 0,d=0;d<m;d++)h=n[d],l&&d===this.state.currSect[1]?e.push(r.a.createElement("a",{href:"#".concat(h),style:{color:"#84a8ac"}}," - ",h)):e.push(r.a.createElement("a",{href:"#".concat(h)}," - ",h)),e.push(r.a.createElement("br",null));i.push(r.a.createElement(b.a,{in:l},r.a.createElement("div",null,e)))}}}catch(p){s.e(p)}finally{s.f()}return r.a.createElement(E.a,{in:this.state.show},r.a.createElement(w,null,r.a.createElement("div",{className:"Current"},o[this.state.currSect[0]][0]),r.a.createElement("div",{className:"All"},i)))}}]),n}(r.a.Component);function j(){var e=Object(p.a)(["\n    display: flex;\n    flex-direction: Column;\n    justify-content: flex-start;\n    align-items: center;\n    position: fixed;\n    height: 20%;\n    width: 100%;\n    z-index: 1;\n"]);return j=function(){return e},e}var k=v.a.div(j()),S=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={currSect:0,show:!1},a}return Object(u.a)(n,[{key:"getSections",value:function(e){for(var t=this.props.sections,n=this.props.sections.length,a=0,r=0;r<n;r++)if((a+=t[r][1].length)>e)return r}},{key:"componentDidMount",value:function(){var e=this,t=Math.max(document.documentElement.clientHeight,window.innerHeight||0);document.getElementById("sectContainer").addEventListener("scroll",(function(){var n=Math.floor(document.getElementById("sectContainer").scrollTop/t);(n=e.getSections(n))!==e.state.currSect&&e.setState({currSect:n}),e.setState({show:0!==n})}))}},{key:"render",value:function(){return r.a.createElement(E.a,{in:this.state.show},r.a.createElement(k,null,r.a.createElement("h2",{style:{color:"PowderBlue"}},this.props.sections[this.state.currSect][0])))}}]),n}(r.a.Component),P=n(43),C=n.n(P),O=n(44),A=n.n(O),B=n(45),M=n.n(B),N=n(46),H=n.n(N),z=n(47),W=n.n(z),I=n(48),L=n.n(I),D=n(49),V=n.n(D),G=n(50),J=n.n(G),_=n(51),U=n.n(_);function F(){var e=Object(p.a)(["\n    a {\n        color: PowderBlue;\n    }\n\n    #sectContainer {\n        overflow: scroll;\n        height: 100vh;\n        scroll-snap-type: y mandatory;\n        scroll-behavior: smooth;\n\n        ::-webkit-scrollbar {\n            display: none;\n        }\n    }\n\n    .smallNavigation {\n        display: flex;\n        flex-direction: row;\n        a {\n            margin-right: 40px;\n        }\n    }\n\n    .homeJumbo {\n        background: url(",") no-repeat fixed center;\n        background-size: cover;\n        background-position: center;\n        min-height: 100vh;\n        position: relative;\n        padding: 40px;\n\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: flex-start;\n        color: #ededed;\n\n        z-index: 2;\n        scroll-snap-align: start;\n\n    }\n\n    .Projects {\n        height: 100vh;\n        position: relative;\n        display: flex;\n        justify-content: center;\n        flex-wrap: wrap;\n        align-items: center;\n        flex-direction: row;\n        z-index: 0;\n        scroll-snap-align: start;\n    }\n    \n    .Photography {\n        height: 100vh;\n        position: relative;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        flex-direction: column;\n        flex-wrap: wrap;\n        z-index: 0;\n        scroll-snap-align: start;\n    }\n\n    .Gallery {\n        width: 70vw;\n        display: flex;\n        flex-direction: row;\n        flex-wrap: wrap;\n        justify-content: center;\n        \n        img {\n            height: 25vh;\n            width: auto;\n            padding: 3px;\n        }\n    }\n\n    .GalleryMobile {\n        width: 100vw;\n        height: 70vh;\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n        justify-content: flex-start;\n        scroll-snap-type: x mandatory;\n        scroll-behavior: smooth;\n        overflow-x: scroll;\n        \n        img {\n            scroll-snap-align: center;\n            width: auto;\n            height: 70vh;\n            padding: 3px;\n        }\n\n    }\n"]);return F=function(){return e},e}var R=v.a.div(F(),C.a),T=["Prosthetic Simulator","Heal-Bot","RSA-Protected Chat Client","My Very Own Website"],q=["Berkeley, CA","Los Angeles, CA"],$=["Blog post 1"],K=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={isDesktop:!0},a.checkScreenSize=a.checkScreenSize.bind(Object(m.a)(a)),a}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.checkScreenSize(),window.addEventListener("resize",this.checkScreenSize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.checkScreenSize)}},{key:"checkScreenSize",value:function(){this.setState({isDesktop:window.innerWidth>999})}},{key:"render",value:function(){var e=this.state.isDesktop?"Gallery":"GalleryMobile";return r.a.createElement(R,null,this.state.isDesktop?r.a.createElement(x,{sections:[["Home",[null]],["About Me",[null]],["Projects",T],["Photography",q],["Blog",$]]}):r.a.createElement(S,{sections:[["Home",[null]],["About Me",[null]],["Projects",T],["Photography",q],["Blog",$]]}),r.a.createElement("div",{id:"sectContainer"},r.a.createElement(f.a,{fluid:!0,className:"homeJumbo",id:"Home"},r.a.createElement("h1",null,"Joshua Fajardo"),r.a.createElement("h2",null,"UC Berkeley EECS/MechE | Photography"),r.a.createElement("div",{className:"smallNavigation"},r.a.createElement("a",{href:"#Prosthetic Simulator"},"Projects"),r.a.createElement("a",{href:"#Berkeley, CA"},"Photography"),r.a.createElement("a",{href:"/blog"},"Blog"))),r.a.createElement("section",{id:"About Me",className:"Projects"},r.a.createElement("img",{src:A.a,alt:"me!",height:"200px"}),r.a.createElement("div",null,r.a.createElement("h1",null,"Hi, I'm Josh"),r.a.createElement("p",null,"stuff stuff stuff about me. Scroll down to see some of the work that I'm passionate about."))),r.a.createElement("section",{id:"Prosthetic Simulator",className:"Projects"},r.a.createElement("img",{src:"",alt:"Prosthetic Simulator",height:"200px"}),r.a.createElement("div",null,r.a.createElement("h1",null,"Prosthetic Simulator"),r.a.createElement("p",null,"How can we assess the effectiveness of haptic feedback in upper-limb prosthetics?"),r.a.createElement("a",{href:"/prosthetic-simulator"},"View Project\u2192"))),r.a.createElement("section",{id:"Heal-Bot",className:"Projects"},r.a.createElement("img",{src:"",alt:"Heal-Bot",height:"200px"}),r.a.createElement("div",null,r.a.createElement("h1",null,"Heal-Bot"),r.a.createElement("p",null,"How can we make Coronavirus-related information feel more accessible?"),r.a.createElement("a",{href:""},"View Project\u2192"))),r.a.createElement("section",{id:"RSA-Protected Chat Client",className:"Projects"},r.a.createElement("img",{src:"",alt:"RSA-Protected Chat Client",height:"200px"}),r.a.createElement("div",null,r.a.createElement("h1",null,"RSA-Protected Chat Client"),r.a.createElement("p",null,"How can we ensure the privacy of messages?"),r.a.createElement("a",{href:""},"View Project\u2192"))),r.a.createElement("section",{id:"My Very Own Website",className:"Projects"},r.a.createElement("img",{src:"",alt:"My Very Own Website",height:"200px"}),r.a.createElement("div",null,r.a.createElement("h1",null,"My Very Own Website"),r.a.createElement("p",null,"What is the best way for me to showcase my work?"),r.a.createElement("a",{href:""},"View Project\u2192"))),r.a.createElement("section",{id:"Berkeley, CA",className:"Photography"},r.a.createElement("div",null,r.a.createElement("h1",null,"Berkeley, CA"),r.a.createElement("p",null,"Photos from ",r.a.createElement("del",null,"the Underworld")," Undergrad")),r.a.createElement("div",{className:e},r.a.createElement("img",{src:M.a}),r.a.createElement("img",{src:H.a}),r.a.createElement("img",{src:W.a}),r.a.createElement("img",{src:L.a}),r.a.createElement("img",{src:V.a}),r.a.createElement("img",{src:J.a}))),r.a.createElement("section",{id:"Los Angeles, CA",className:"Photography"},r.a.createElement("div",null,r.a.createElement("h1",null,"Los Angeles, CA"),r.a.createElement("p",null,"you can be my angle or my devil")),r.a.createElement("div",{className:e},r.a.createElement("img",{src:U.a})))))}}]),n}(r.a.Component),Q=function(){return r.a.createElement("h1",null,"404: Page Not Found")},X=n(81),Y=n(80),Z=n(55);function ee(){var e=Object(p.a)(["\n    .navbar{\n        background-color: #222\n    }\n\n    .navbar-brand, .navbar-nav, .navbar-link {\n        color: #bbb;\n\n        &.hover{\n            color: white;\n        }\n    }\n"]);return ee=function(){return e},e}var te=v.a.div(ee()),ne=function(){return r.a.createElement(te,null,r.a.createElement(X.a,{expand:"lg"},r.a.createElement(X.a.Brand,{href:"/"},"Joshua Fajardo"),r.a.createElement(X.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(X.a.Collapse,{id:"basic-navbar-nav"}),r.a.createElement(Y.a,{classname:"ml-auto"},r.a.createElement(Z.a,null," ",r.a.createElement(Y.a.Link,{href:"/projects"},"Projects")),r.a.createElement(Z.a,null," ",r.a.createElement(Y.a.Link,{href:"/photography"},"Photography")),r.a.createElement(Z.a,null," ",r.a.createElement(Y.a.Link,{href:"/blog"},"Blog")))))};function ae(){var e=Object(p.a)(["\n    padding: 0px;\n    height: 100vh;\n    width: 100vw;\n"]);return ae=function(){return e},e}var re=v.a.div(ae()),le=function(e){return r.a.createElement(re,null,r.a.createElement(ne,null),e.children)};function ce(){var e=Object(p.a)(["\n    a {\n        color: PowderBlue;\n    }\n    scroll-behavior: smooth;\n\n    \n"]);return ce=function(){return e},e}var oe=v.a.div(ce()),ie=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){return Object(s.a)(this,n),t.call(this,e)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement(le,null,r.a.createElement(oe,null,r.a.createElement("div",null,r.a.createElement("h1",null,"Prosthetic Simulator"),r.a.createElement("p",null,"Assessing kinesthetic feedback in prosthetics")),r.a.createElement("p",null,"In the fall of 2019, I joined the Embodied Dexterity Group (EDG) to do help conduct research on prosthetic devices. Our subgroup within EDG aims at better understanding how impactful haptic feedback can be in upper-limb prosthetics."),r.a.createElement("h2",null,"Problem Statement"),r.a.createElement("p",null,"Much of the existing research on haptic feedback gives a binary response on haptic feedback's effectiveness. The goal of the Prosthetic Simulator was to understand how big of a role this feedback plays. Specifically, we wanted to observe how it affected the amount of grasping force applied by a user trying to lift an object."),r.a.createElement("p",null,"When lifting an object, there is a minimum amount of grasping force needed to move the object without slipping. In practice, the force applied typically overshoots the minimum amount needed. We can see describe this overshoot as a safety factor: force applied divided by minimum force required. Our group's goal is that by varying the attenuation of the feedback received, we can observe corresponding safety factor changes applied by our test subjects."),r.a.createElement("p",null)))}}]),n}(r.a.Component);var se=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:K}),r.a.createElement(i.a,{exact:!0,path:"/prosthetic-simulator",component:ie}),r.a.createElement(i.a,{component:Q}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(se,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[59,1,2]]]);
//# sourceMappingURL=main.f77c67fd.chunk.js.map