(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{149:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return p});var n=a(7),r=a.n(n),i=a(0),o=a.n(i),c=a(157),s=a(155),l=a(151),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,a=e.site.siteMetadata.description,n=e.allElementsJson.edges;return o.a.createElement(c.a,{location:this.props.location,title:t,description:a},o.a.createElement(s.a,{title:"Custom element list",keywords:["Kentico Cloud","caas","javascript","extensions","custom elements"]}),o.a.createElement("h2",null,"Marketplace"),n.map(function(e){var t=e.node;return o.a.createElement("div",{key:t.id},o.a.createElement("a",{href:t.readmeUrl},o.a.createElement("h3",{style:{marginBottom:Object(l.a)(.25)}},t.title)),o.a.createElement("p",null,t.description),o.a.createElement("img",{src:t.thumbnailUrl,alt:t.title+" custom element"}))}))},t}(o.a.Component);t.default=d;var p="859968673"},151:function(e,t,a){"use strict";a.d(t,"a",function(){return s}),a.d(t,"b",function(){return l});var n=a(160),r=a.n(n),i=a(161),o=a.n(i);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"},"header p":{color:"grey",fontStyle:"italic"}}},delete o.a.googleFonts;var c=new r.a(o.a);var s=c.rhythm,l=c.scale},152:function(e,t,a){var n;e.exports=(n=a(153))&&n.default||n},153:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(56),s=a(2),l=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},154:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{width:50,height:50,src:"/static/e2c6d3619b444326d7ee780d821adaeb/f39b3/profile-pic.png",srcSet:"/static/e2c6d3619b444326d7ee780d821adaeb/f39b3/profile-pic.png 1x,\n/static/e2c6d3619b444326d7ee780d821adaeb/ddf57/profile-pic.png 1.5x,\n/static/e2c6d3619b444326d7ee780d821adaeb/7e625/profile-pic.png 2x,\n/static/e2c6d3619b444326d7ee780d821adaeb/80e1d/profile-pic.png 3x",srcWebp:"/static/e2c6d3619b444326d7ee780d821adaeb/c2f71/profile-pic.webp",srcSetWebp:"/static/e2c6d3619b444326d7ee780d821adaeb/c2f71/profile-pic.webp 1x,\n/static/e2c6d3619b444326d7ee780d821adaeb/839a0/profile-pic.webp 1.5x,\n/static/e2c6d3619b444326d7ee780d821adaeb/b03bc/profile-pic.webp 2x,\n/static/e2c6d3619b444326d7ee780d821adaeb/fd3b4/profile-pic.webp 3x"}}},site:{siteMetadata:{author:"Ondřej Chrastina",social:{twitter:"ChrastinaOndrej"}}}}}},155:function(e,t,a){"use strict";var n=a(156),r=a(0),i=a.n(r),o=a(4),c=a.n(o),s=a(162),l=a.n(s);function d(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,c=e.title,s=n.data.site,d=t||s.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:c},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:d}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})}d.defaultProps={lang:"en",meta:[],keywords:[],description:""},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.object),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=d},156:function(e){e.exports={data:{site:{siteMetadata:{title:"Custom Elements Marketplace",description:"Samples of the HTML web pages that can be used as Custom Element (BETA) Extensions in Kentico Cloud. Custom elements help you with extending the basic functionality of Kentico Cloud UI and thus improving the content editing experience. Custom element is essentially a small HTML application that exists in a sandboxed <iframe> and interacts with the Kentico Cloud app via the Custom Elements API.",author:"Ondřej Chrastina"}}}}},157:function(e,t,a){"use strict";a(34);var n=a(7),r=a.n(n),i=a(0),o=a.n(i),c=a(4),s=a.n(c),l=a(33),d=a.n(l),p=(a(152),o.a.createContext({})),u=function(e){return o.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func};a(158);var m=a(154),h=a(159),b=a.n(h),f=a(151);var g="962221346",y=function(){return o.a.createElement(u,{query:g,render:function(e){var t=e.site.siteMetadata,a=t.author,n=t.social;return o.a.createElement("div",{style:{display:"flex",marginTop:Object(f.a)(2.5)}},o.a.createElement(b.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(f.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),o.a.createElement("p",null,"Written by ",o.a.createElement("strong",null,a),".",o.a.createElement("br",null),o.a.createElement("a",{href:"https://twitter.com/"+n.twitter},"...You should follow him on Twitter")))},data:m})},w=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=this.props,a=t.location,n=t.title,r=t.description,i=t.children;return e="/"===a.pathname?o.a.createElement("h1",{style:Object.assign({},Object(f.b)(1.5),{marginBottom:Object(f.a)(1.5),marginTop:0})},o.a.createElement(d.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)):o.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},o.a.createElement(d.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},n)),o.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(f.a)(24),padding:Object(f.a)(1.5)+" "+Object(f.a)(.75)}},o.a.createElement("header",null,e,o.a.createElement("p",null,r)),o.a.createElement("main",null,i),o.a.createElement("footer",null,o.a.createElement(y,null),"© ",(new Date).getFullYear(),", Built with"," ",o.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")," ","using"," ",o.a.createElement("a",{href:"https://www.gatsbyjs.org/starters/gatsbyjs/gatsby-starter-blog/"},"Gatsby Starter Blog")," ","by"," ",o.a.createElement("a",{href:"https://www.twitter.com/kylemathews"},"Kyle Mathews")))},t}(o.a.Component);t.a=w}}]);
//# sourceMappingURL=component---src-pages-index-js-700cb16f46d1f4700231.js.map