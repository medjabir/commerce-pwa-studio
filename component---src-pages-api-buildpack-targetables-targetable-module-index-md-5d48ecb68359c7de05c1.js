(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[1897],{69719:function(e,n,a){"use strict";a.r(n),a.d(n,{_frontmatter:function(){return d},default:function(){return p}});var s=a(27490),t=a(12265),o=(a(15007),a(64983)),l=a(99536),r=a(93303),m=["components"],d={},i={_frontmatter:d},c=l.Z;function p(e){var n=e.components,a=(0,t.Z)(e,m);return(0,o.mdx)(c,(0,s.Z)({},i,a,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"targetablemodule"},"TargetableModule"),(0,o.mdx)(r.Z,{mdxType:"Docs"}),(0,o.mdx)("h2",{id:"examples"},"Examples"),(0,o.mdx)("p",null,"Code examples for using the ",(0,o.mdx)("inlineCode",{parentName:"p"},"TargetableModule")," class."),(0,o.mdx)("h3",{id:"insert-source-code"},"Insert source code"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"TargetableModule")," class contains functions that let you insert custom code into different areas in the source code."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},'const { Targetables } = require("@magento/pwa-buildpack");\n\nmodule.exports = (targets) => {\n  const targetableFactory = Targetables.using(targets);\n\n  // Create a TargetableModule instance that points to the main.js source\n  const MainComponent = targetables.module(\n    "@magento/venia-ui/lib/components/Main/main.js"\n  );\n\n  // Insert a console log message in the source\n  MainComponent.insertAfterSource(\n    "const Main = props => {\\n",\n    \'\\tconsole.log("Hello World");\\n\'\n  );\n};\n')),(0,o.mdx)("p",null,"The following example makes the following code modifications to ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/lib/components/Main/main.js"},(0,o.mdx)("inlineCode",{parentName:"a"},"main.js"))," for the final bundle:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-diff"},'  const Main = props => {\n+     console.log("Hello World");\n      const { children, isMasked } = props;\n      const classes = mergeClasses(defaultClasses, props.classes);\n\n      const rootClass = isMasked ? classes.root_masked : classes.root;\n      const pageClass = isMasked ? classes.page_masked : classes.page;\n\n      useScrollLock(isMasked);\n\n      return (\n          <main className={rootClass}>\n              <Header />\n              <div className={pageClass}>{children}</div>\n              <Footer />\n          </main>\n      );\n  };\n')),(0,o.mdx)("h2",{id:"related-content"},"Related content"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"/commerce-pwa-studio/api/buildpack/transform-requests/"},"Transform Requests"))))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-api-buildpack-targetables-targetable-module-index-md-5d48ecb68359c7de05c1.js.map