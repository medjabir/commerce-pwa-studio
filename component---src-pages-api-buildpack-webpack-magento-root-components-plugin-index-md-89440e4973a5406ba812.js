(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[2531],{67011:function(n,e,t){"use strict";t.r(e),t.d(e,{_frontmatter:function(){return s},default:function(){return d}});var a=t(22122),o=t(19756),i=(t(15007),t(64983)),p=t(99536),m=["components"],s={},r={_frontmatter:s},u=p.Z;function d(n){var e=n.components,t=(0,o.Z)(n,m);return(0,i.mdx)(u,(0,a.Z)({},r,t,{components:e,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"magento-root-components-plugin"},"Magento root components plugin"),(0,i.mdx)("p",null,"This plugin creates ",(0,i.mdx)("a",{parentName:"p",href:"https://webpack.js.org/guides/code-splitting/"},"unique chunks")," for each Root Component in a Magento PWA project and extension."),(0,i.mdx)("h2",{id:"example"},"Example"),(0,i.mdx)("p",null,"Given a ",(0,i.mdx)("inlineCode",{parentName:"p"},"RootComponents")," directory in a PWA project with the following structure:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-sh"},"├── Page1\n│   └── index.js\n├── Page2\n│   └── index.js\n└── Page3\n    └── index.js\n")),(0,i.mdx)("p",null,"This plugin creates unique chunks for ",(0,i.mdx)("inlineCode",{parentName:"p"},"Page1"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"Page2"),", and ",(0,i.mdx)("inlineCode",{parentName:"p"},"Page3"),".\nFurther webpack optimization techniques, such as ",(0,i.mdx)("a",{parentName:"p",href:"https://webpack.js.org/plugins/commons-chunk-plugin/"},(0,i.mdx)("inlineCode",{parentName:"a"},"CommonsChunkPlugin")),", can be applied if needed."),(0,i.mdx)("h2",{id:"example-usage"},"Example usage"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-javascript"},'// webpack.config.js\n\nconst path = require("path");\nconst { MagentoRootComponentsPlugin } = require("@magento/pwa-buildpack");\n\nmodule.exports = {\n  entry: {\n    main: path.join(__dirname, "src"),\n  },\n  output: {\n    path: path.join(__dirname, "dist"),\n    filename: "[name].js",\n    chunkFilename: "[name].chunk.js",\n  },\n  plugins: [\n    new MagentoRootComponentsPlugin({\n      rootComponentsDirs: [path.join(__dirname, "src/RootComponents")], // optional\n      manifestFileName: "roots-manifest.json", // optional\n    }),\n  ],\n};\n')))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-api-buildpack-webpack-magento-root-components-plugin-index-md-89440e4973a5406ba812.js.map