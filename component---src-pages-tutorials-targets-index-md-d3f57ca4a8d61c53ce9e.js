(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[3382],{81509:function(e,t,n){"use strict";n.r(t),n.d(t,{_frontmatter:function(){return s},default:function(){return c}});var i=n(22122),o=n(19756),r=(n(15007),n(64983)),a=n(99536),s={},p={_frontmatter:s},d=a.Z;function c(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,r.mdx)(d,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,"Target interception is a feature provided by PWA Studio's extensibility framework.\nIt gives you the ability define an intercept file that can change feature behaviors, component logic, and even component source code without modifying a local copy of PWA Studio code."),(0,r.mdx)("h2",{id:"intercept-file"},"Intercept file"),(0,r.mdx)("p",null,"The intercept file is where you directly interact with Target objects to apply customizations.\nIt must export a default function that accepts a ",(0,r.mdx)("inlineCode",{parentName:"p"},"TargetProvider")," parameter."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},'module.exports = targets => {\n    // Set buildpack features\n  const builtins = targets.of("@magento/pwa-buildpack");\n  builtins.specialFeatures.tap((featuresByModule) => {\n    featuresByModule["my-extension"] = {\n      // Tells buildpack that this extension uses ES Modules\n      esModules: true,\n    };\n  });\n}\n')),(0,r.mdx)("h3",{id:"intercept-file-name-and-location"},"Intercept file name and location"),(0,r.mdx)("p",null,"The file name and location of your intercept file is a custom value you specify in your project's ",(0,r.mdx)("inlineCode",{parentName:"p"},"package.json")," file."),(0,r.mdx)("p",null,"To register the location of your intercept file, set the value for ",(0,r.mdx)("inlineCode",{parentName:"p"},"pwa-studio.targets.intercept"),".\nFor example, the following entry registers ",(0,r.mdx)("inlineCode",{parentName:"p"},"src/targets/intercept.js")," as this project's intercept file."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'"pwa-studio": {\n    "targets": {\n      "intercept": "src/targets/intercept"\n    }\n}\n')),(0,r.mdx)("h2",{id:"how-interception-works"},"How interception works"),(0,r.mdx)("p",null,"Target interception happens during the build process.\nThe ",(0,r.mdx)("inlineCode",{parentName:"p"},"@magento/pwa-buildpack")," module creates a ",(0,r.mdx)("inlineCode",{parentName:"p"},"BuildBus")," process to execute intercept files in the storefront project or its dependencies."),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"BuildBus")," process executes intercept files in ",(0,r.mdx)("strong",{parentName:"p"},"named direct dependencies")," in a project.\nThis means that modules listed under ",(0,r.mdx)("inlineCode",{parentName:"p"},"dependencies")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"devDependencies")," in a project's ",(0,r.mdx)("inlineCode",{parentName:"p"},"package.json")," file have the ability to intercept Targets in the project.\nThe process does not execute intercept files in dependencies beyond those modules in the dependency tree."),(0,r.mdx)("h3",{id:"interception-order"},"Interception order"),(0,r.mdx)("p",null,"The interception process executes files in dependency order.\nThis means that if your module declares another module with Targets as a peer dependency, the other module's intercept file executes first."))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-tutorials-targets-index-md-d3f57ca4a8d61c53ce9e.js.map