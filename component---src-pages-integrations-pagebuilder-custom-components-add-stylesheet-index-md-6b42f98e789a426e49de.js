(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[9577],{79227:function(e,n,t){"use strict";t.r(n),t.d(n,{_frontmatter:function(){return l},default:function(){return d}});var o=t(27490),a=t(12265),s=(t(15007),t(64983)),r=t(99536),i=["components"],l={},m={_frontmatter:l},p=r.Z;function d(e){var n=e.components,t=(0,a.Z)(e,i);return(0,s.mdx)(p,(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"add-stylesheet"},"Add stylesheet"),(0,s.mdx)("p",null,"Styling your Page Builder components is the same as styling any other component in PWA Studio. However, the CSS stylesheet for your component should define CSS classes that are comparable to the CSS classes you use on the frontend for original content type (",(0,s.mdx)("inlineCode",{parentName:"p"},"view/frontend/web/css/source/content-type/<your-content-type>/_import.less"),"). The following steps highlight the tasks for setting up the CSS classes for your component:"),(0,s.mdx)("p",null,(0,s.mdx)("img",{parentName:"p",src:"/commerce-pwa-studio/ea8098fd94ec5a59ad3d2e358839d601/AddStylesheetSteps.svg",alt:"Add Stylesheet steps"})),(0,s.mdx)("h2",{id:"step-1-add-content-type-classes"},"Step 1: Add content type classes"),(0,s.mdx)("p",null,"Start by adding the CSS classes from the frontend css of your content type. For our Quote content type, we copied the frontend styles (",(0,s.mdx)("inlineCode",{parentName:"p"},"app/code/Example/PageBuilderQuote/view/frontend/web/css/source/content-type/example-quote/_import.less"),") and added them to our ",(0,s.mdx)("inlineCode",{parentName:"p"},"exampleQuote.css"),"."),(0,s.mdx)("h2",{id:"step-2-convert-less-to-css"},"Step 2: Convert LESS to CSS"),(0,s.mdx)("p",null,"PWA studio uses ",(0,s.mdx)("a",{parentName:"p",href:"/commerce-pwa-studio/guides/general-concepts/css-modules/"},"CSS Modules"),". It does not include tooling for LESS pre-processors, so you will need to convert your LESS into standard CSS style rules. For example, the LESS stylesheet for our Quote content type is shown here, followed by the equivalent CSS we included in our ",(0,s.mdx)("inlineCode",{parentName:"p"},"exampleQuote.css"),"."),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Quote content type LESS styles")," (",(0,s.mdx)("inlineCode",{parentName:"p"},"_import.less"),"):"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-scss"},'& when (@media-common = true) {\n  blockquote.quote {\n    display: block;\n    font-size: 1.3em;\n    margin: 1em;\n    padding: 0.5em 10px;\n    quotes: "\\201C""\\201D""\\2018""\\2019";\n    text-decoration: none;\n    word-break: normal !important;\n    line-height: 1.5;\n    padding: 0;\n    font-weight: 300;\n    &:before {\n      content: open-quote;\n      font-size: 2.6em;\n      margin-right: 0.2em;\n      vertical-align: -0.35em;\n      line-height: 0;\n      margin-left: -0.5em;\n      font-weight: 300;\n    }\n    &:after {\n      content: close-quote;\n      font-size: 0;\n      line-height: 0;\n      margin-left: 0;\n    }\n  }\n  div {\n    &.quote-author {\n      text-align: left;\n      padding-right: 30px;\n      font-size: 14px;\n      color: #666;\n      margin-left: 1.1em;\n    }\n    &.quote-description {\n      text-align: left;\n      padding-right: 30px;\n      font-size: 14px;\n      color: #999;\n      margin-left: 1.1em;\n      font-weight: 300;\n    }\n  }\n  .black-quote {\n    color: #333333;\n    &:before {\n      color: #333333;\n    }\n  }\n  .blue-quote {\n    color: #007ab9;\n    &:before {\n      color: #71adcc;\n    }\n  }\n  .green-quote {\n    color: #009900;\n    &:before {\n      color: #009900;\n    }\n  }\n  .red-quote {\n    color: #990000;\n    &:before {\n      color: #990000;\n    }\n  }\n  .purple-quote {\n    color: #990099;\n    &:before {\n      color: #990099;\n    }\n  }\n}\n')),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Equivalent component styles")," (",(0,s.mdx)("inlineCode",{parentName:"p"},"exampleQuote.css"),"):"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-css"},'.quote {\n  display: block;\n  font-size: 1.4em;\n  margin: 1em 1em 0.3em 0.6em;\n  quotes: "\\201C""\\201D""\\2018""\\2019";\n  text-decoration: none;\n  font-style: italic;\n  word-break: normal !important;\n  padding: 0;\n  font-weight: 300;\n}\n.quote:before {\n  content: open-quote;\n  font-size: 2.4em;\n  margin-right: 0.1em;\n  vertical-align: -0.3em;\n  line-height: 0;\n  margin-left: -0.3em;\n  font-weight: 300;\n}\n.quote:after {\n  content: close-quote;\n  font-size: 0;\n  line-height: 0;\n  margin-left: 0;\n}\n.quoteAuthor {\n  padding-right: 30px;\n  font-size: 16px;\n  color: #333333;\n  line-height: 24px;\n  margin-left: 1.5em;\n  word-break: normal !important;\n  font-weight: 600;\n}\n.quoteDescription {\n  position: relative;\n  padding-right: 30px;\n  font-size: 16px;\n  line-height: 18px;\n  color: #666666;\n  margin-left: 1.5em;\n  font-weight: 300;\n  word-break: normal !important;\n}\n.blackQuote {\n  color: #333333;\n}\n.blackQuote::before {\n  color: #333333;\n}\n.blueQuote {\n  color: #007ab9;\n}\n.blueQuote::before {\n  color: #007ab9;\n}\n.greenQuote {\n  color: #009900;\n}\n.greenQuote::before {\n  color: #009900;\n}\n.redQuote {\n  color: #990000;\n}\n.redQuote::before {\n  color: #990000;\n}\n.purpleQuote {\n  color: #990099;\n}\n.purpleQuote::before {\n  color: #990099;\n}\n')),(0,s.mdx)("h2",{id:"step-3-rename-classes-optional"},"Step 3: Rename classes (optional)"),(0,s.mdx)("p",null,"Renaming your class names to use camelCase instead of hyphens allows you to work with CSS classes in your component as if they were JavaScript object properties. For example, if you name the class for the quote author's name as ",(0,s.mdx)("inlineCode",{parentName:"p"},".quote-author")," (with a hyphen), you must access this class in your component like this:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-html"},"<div className={classes['quote-author']}>{author}</div>\n")),(0,s.mdx)("p",null,"This not only uses a string which is prone to errors, but you don't have the benefit of your editor's intellisense."),(0,s.mdx)("p",null,"Compare that to using camelCase for your hyphenated class names by renaming ",(0,s.mdx)("inlineCode",{parentName:"p"},".quote-author")," to ",(0,s.mdx)("inlineCode",{parentName:"p"},".quoteAuthor")," and thereby enabling access to CSS classes using dot syntax, as shown here:"),(0,s.mdx)("p",null,(0,s.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"740px"}},"\n      ",(0,s.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"30.624999999999996%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,s.mdx)("picture",{parentName:"span"},"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/commerce-pwa-studio/static/026c41779d021effdec85272868a25db/cb523/AddStylesheetCamelCase.webp 320w","/commerce-pwa-studio/static/026c41779d021effdec85272868a25db/797b9/AddStylesheetCamelCase.webp 640w","/commerce-pwa-studio/static/026c41779d021effdec85272868a25db/9ea21/AddStylesheetCamelCase.webp 740w"],sizes:"(max-width: 740px) 100vw, 740px",type:"image/webp"}),"\n          ",(0,s.mdx)("source",{parentName:"picture",srcSet:["/commerce-pwa-studio/static/026c41779d021effdec85272868a25db/72799/AddStylesheetCamelCase.png 320w","/commerce-pwa-studio/static/026c41779d021effdec85272868a25db/6af66/AddStylesheetCamelCase.png 640w","/commerce-pwa-studio/static/026c41779d021effdec85272868a25db/50383/AddStylesheetCamelCase.png 740w"],sizes:"(max-width: 740px) 100vw, 740px",type:"image/png"}),"\n          ",(0,s.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-pwa-studio/static/026c41779d021effdec85272868a25db/50383/AddStylesheetCamelCase.png",alt:"Change class names to camelCase",title:"Change class names to camelCase",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,s.mdx)("p",null,(0,s.mdx)("strong",{parentName:"p"},"Protip"),": Use camelCase to rename your CSS classes so that you can use dot syntax and intellisense to browse through your style rules more easily when applying them to your component."))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-integrations-pagebuilder-custom-components-add-stylesheet-index-md-6b42f98e789a426e49de.js.map