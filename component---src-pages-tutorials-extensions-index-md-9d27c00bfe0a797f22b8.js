(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[1925],{18080:function(e,n,t){"use strict";t.r(n),t.d(n,{_frontmatter:function(){return s},default:function(){return p}});var a=t(22122),i=t(19756),o=(t(15007),t(64983)),r=t(99536),s={},l={_frontmatter:s},d=r.Z;function p(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,o.mdx)(d,(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"PWA Studio follows the Magento way of merging third-party code to build web functionality on a simple platform.\nThe ",(0,o.mdx)("a",{parentName:"p",href:"%7B%25%20link%20pwa-buildpack/extensibility-framework/index.md%20%25%7D"},"extensibility framework")," provided by the ",(0,o.mdx)("inlineCode",{parentName:"p"},"pwa-buildpack")," package lets you create these third-party extensions for PWA Studio storefronts, such as Venia."),(0,o.mdx)("p",null,"Extensions provide new storefront functionality, extend existing components, or replace different storefront parts.\nLanguage packs are a specific extension type which provide translation data for the ",(0,o.mdx)("a",{parentName:"p",href:"%7B%25%20link%20technologies/basic-concepts/internationalization/index.md%20%25%7D"},"internationalization feature"),"."),(0,o.mdx)("h2",{id:"project-manifest-file"},"Project manifest file"),(0,o.mdx)("p",null,"PWA Studio extensions are ",(0,o.mdx)("a",{parentName:"p",href:"https://docs.npmjs.com/about-packages-and-modules"},"Node packages"),", which means it requires a ",(0,o.mdx)("inlineCode",{parentName:"p"},"package.json")," file.\nThe ",(0,o.mdx)("inlineCode",{parentName:"p"},"package.json")," file is the project manifest.\nIt contains metadata about the project, such as the name, entry point, and dependencies."),(0,o.mdx)("p",null,"You can manually create this file, but we recommend using the CLI command ",(0,o.mdx)("a",{parentName:"p",href:"https://yarnpkg.com/lang/en/docs/cli/init/"},(0,o.mdx)("inlineCode",{parentName:"a"},"yarn init"))," or ",(0,o.mdx)("a",{parentName:"p",href:"https://docs.npmjs.com/cli-commands/init/"},(0,o.mdx)("inlineCode",{parentName:"a"},"npm init"))," in your project directory.\nRunning either command launches an interactive questionnaire to help you fill in your project metadata."),(0,o.mdx)("h3",{id:"example-manifest-file"},"Example manifest file"),(0,o.mdx)("p",null,"The following is an example ",(0,o.mdx)("inlineCode",{parentName:"p"},"package.json")," file for an extension called ",(0,o.mdx)("inlineCode",{parentName:"p"},"my-extension"),".\nIt contains both an intercept and declare file under the ",(0,o.mdx)("inlineCode",{parentName:"p"},"src/targets")," directory."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "my-extension",\n  "version": "1.0.0",\n  "description": "An example extension package",\n  "main": "src/myList.js",\n  "license": "MIT",\n  "peerDependencies": {\n    "react": "^17.0.1"\n  },\n  "pwa-studio": {\n    "targets": {\n      "intercept": "src/targets/my-intercept",\n      "declare": "src/targets/my-declare"\n    }\n  }\n}\n')),(0,o.mdx)("h2",{id:"intercept-and-declare-files"},"Intercept and declare files"),(0,o.mdx)("p",null,"Extensions use intercept and declare files to interact with the extensibility framework.\nYou can create these files anywhere in your project.\nThe ",(0,o.mdx)("inlineCode",{parentName:"p"},"pwa-studio.targets.intercept")," and ",(0,o.mdx)("inlineCode",{parentName:"p"},"pwa-studio.targets.declare")," values in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"package.json")," file point to the locations for these files."),(0,o.mdx)("p",null,"For more information about these files, see the ",(0,o.mdx)("a",{parentName:"p",href:"%7B%25%20link%20pwa-buildpack/extensibility-framework/index.md%20%25%7D"},"extensibility framework")," topic."),(0,o.mdx)("h2",{id:"create-an-extensions-api"},"Create an extension's API"),(0,o.mdx)("p",null,"Storefront developers can use Targetables to change the behavior of your extensions, but\nTargets are the formal API for modules and extensions.\nThey are also the only way other third-party extensions can intercept and use your extension's API."),(0,o.mdx)("h3",{id:"declare-a-target"},"Declare a Target"),(0,o.mdx)("p",null,"Extensions declare their own Targets for interception through the declare file.\nDeclare files export a function that receives a ",(0,o.mdx)("a",{parentName:"p",href:"%7B%25%20link%20pwa-buildpack/extensibility-framework/index.md%20%25%7D#targetproviders"},"TargetProvider")," object.\nThe TargetProvider object has a ",(0,o.mdx)("inlineCode",{parentName:"p"},"declare()")," function that accepts a dictionary object of named Targets.\nThe TargetProvider also provides a utility collection called ",(0,o.mdx)("inlineCode",{parentName:"p"},"types"),", which holds all the legal constructors for Targets."),(0,o.mdx)("h4",{id:"example-for-declaring-a-target"},"Example for declaring a target"),(0,o.mdx)("p",null,"The following is an example of code in a declare file that exposes a ",(0,o.mdx)("inlineCode",{parentName:"p"},"myListContent")," target:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},'// src/targets/my-declare.js\n\nmodule.exports = (targets) => {\n  targets.declare({\n    myListContent: new targets.types.SyncWaterfall(["myListContent"]),\n  });\n}\n')),(0,o.mdx)("p",null,"The type for this Target is ",(0,o.mdx)("inlineCode",{parentName:"p"},"SyncWaterfall"),".\nThese Target types run their interceptors synchronously and in subscription order.\nAfter that, they pass the return value as an argument to the next interceptor."),(0,o.mdx)("p",null,"For more information on different Target types, see the documentation for ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/webpack/tapable#hook-types"},"Hook types")," in the Tapable library."),(0,o.mdx)("p",null,(0,o.mdx)("strong",{parentName:"p"},"Note:"),"\nThe Tapable hook types end with ",(0,o.mdx)("inlineCode",{parentName:"p"},"Hook"),", but the Target types do not."),(0,o.mdx)("h3",{id:"define-the-api"},"Define the API"),(0,o.mdx)("p",null,"The purpose of an extension's API is to provide functions that perform specific and predictable code transformations to files within the extension.\nUse the tools provided by the extensibility framework to define the extension's API in the project's intercept file."),(0,o.mdx)("h4",{id:"example-for-defining-the-api"},"Example for defining the API"),(0,o.mdx)("p",null,"The following example defines the ",(0,o.mdx)("inlineCode",{parentName:"p"},"myListContent")," target API from the previous example:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},'//src/targets/my-intercept.js\n\n// Get the Targetables manager\nconst { Targetables } = require("@magento/pwa-buildpack");\n\nmodule.exports = (targets) => {\n  // Create a Targetables factory bound to the TargetProvider (targets)\n  const targetables = Targetables.using(targets);\n\n  // Tell the build process to use an esModules loader for this extension\n  targetables.setSpecialFeatures("esModules");\n\n  // Create a TargetableModule instance representing the myList.js file\n  // And provide it a TargetablePublisher to define the API\n  targetables.module("my-extension/src/myList.js", {\n    // Provide a publish() function that accepts the extension\'s TargetProvider\n    // and an instance of this TargetableModule\n    publish(myTargets, self) {\n      // Define the Target\'s API\n      const myListContentAPI = {\n        // Define an `addContent()` function for the API\n        addContent(content) {\n          // Use the `insertBeforeSource()` function to make source code changes\n          self.insertBeforeSource(\n            "]; // List content data",\n            `\\n\\t\\t"${content}",`\n          );\n        },\n      };\n      // Connect the API to the `myListContent` target\n      myTargets.myListContent.call(myListContentAPI);\n    },\n  });\n};\n')),(0,o.mdx)("p",null,"For more information on the Targetables API used in this example, see the following reference pages:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"%7B%25%20link%20pwa-buildpack/reference/targetables/TargetableSet/index.md%20%25%7D"},"Targetables manager"),"  "),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"%7B%25%20link%20pwa-buildpack/reference/targetables/TargetableModule/index.md%20%25%7D"},"TargetableModule")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"%7B%25%20link%20pwa-buildpack/reference/targetables/TargetableSet/index.md%20%25%7D#TargetablePublisher"},"TargetablePublisher"))),(0,o.mdx)("p",null,"The API the ",(0,o.mdx)("inlineCode",{parentName:"p"},"myListContent")," target publishes contains an ",(0,o.mdx)("inlineCode",{parentName:"p"},"addContent()")," function that makes modifications to the ",(0,o.mdx)("inlineCode",{parentName:"p"},"src/myList.js")," file.\nThe content for ",(0,o.mdx)("inlineCode",{parentName:"p"},"src/myList.js")," is as follows:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-jsx"},'import React from "react";\n\nconst MyList = () => {\n  const listContentData = []; // List content data\n\n  const renderedContent = listContentData.map((content) => {\n    return <li key={content}>{content}</li>;\n  });\n\n  return <ul>{renderedContent}</ul>;\n};\n\nexport default MyList\n')),(0,o.mdx)("h2",{id:"access-an-extensions-api"},"Access an extension's API"),(0,o.mdx)("p",null,"Using the ",(0,o.mdx)("em",{parentName:"p"},"MyList")," component in your storefront with no modifications renders an empty list.\nTo add content, the storefront project or a third party extension must intercept and tap into the ",(0,o.mdx)("inlineCode",{parentName:"p"},"myListContent")," target to access the API."),(0,o.mdx)("p",null,"The following shows how a storefront or third part extension can access and use that API in their intercept file:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-js"},"// intercept.js\n\nconst { Targetables } = require('@magento/pwa-buildpack');\n\nfunction localIntercept(targets) {\n    const targetables = Targetables.using(targets);\n\n    targets.of('my-extension').myListContent.tap(api => {\n        api.addContent('Hello');\n        api.addContent('World');\n    });\n}\n\nmodule.exports = localIntercept;\n")),(0,o.mdx)("p",null,"Now, when the MyList component renders, it contains the two list entries added through the API."),(0,o.mdx)("h2",{id:"project-dependencies"},"Project dependencies"),(0,o.mdx)("p",null,"If your extension needs third-party libraries, you can ",(0,o.mdx)("a",{parentName:"p",href:"https://classic.yarnpkg.com/en/docs/cli/add/"},"add them as dependencies"),".\nPWA Studio extensions are Node packages, so most of their dependencies should be ",(0,o.mdx)("a",{parentName:"p",href:"https://classic.yarnpkg.com/en/docs/dependency-types#toc-peerdependencies"},"peer dependencies"),".\nStorefront developers should make sure their project has the dependencies an extension requires.\nThis safeguards against duplicate copies of the same library in the final application bundle."),(0,o.mdx)("h2",{id:"install-and-test-locally"},"Install and test locally"),(0,o.mdx)("p",null,"To install and test your extension on a local storefront project, add the extension as a local dependency or list it as a build dependency."),(0,o.mdx)("h3",{id:"adding-as-a-local-dependency"},"Adding as a local dependency"),(0,o.mdx)("p",null,"The ",(0,o.mdx)("inlineCode",{parentName:"p"},"package.json")," file lets you ","[specify a local path][]"," instead of a version for a dependency.\nThis tells the package manager to install that package from that local path instead of searching online.\nA local dependency in your storefront project's ",(0,o.mdx)("inlineCode",{parentName:"p"},"package.json")," file looks like the following:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-json"},'{\n    "dependencies": {\n        "my-extension": "file:../relative/path/to/my-extension"\n    }\n}\n')),(0,o.mdx)("p",null,"Use the ",(0,o.mdx)("inlineCode",{parentName:"p"},"yarn")," or ",(0,o.mdx)("inlineCode",{parentName:"p"},"npm")," command to add this entry to the ",(0,o.mdx)("inlineCode",{parentName:"p"},"package.json")," file:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-sh"},"yarn add file:../relative/path/to/my-extension\n")),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-sh"},"npm install -S ../relative/path/to/my-extension \n")),(0,o.mdx)("h3",{id:"adding-as-a-build-dependency"},"Adding as a build dependency"),(0,o.mdx)("p",null,"Buildpack provides an alternate way of installing a local extensions by linking it to Yarn's or NPM's global package set and listing it in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"BUILDBUS_DEPS_ADDITIONAL")," environment variable."),(0,o.mdx)("p",null,"Use the ",(0,o.mdx)("a",{parentName:"p",href:"https://classic.yarnpkg.com/en/docs/cli/link/"},(0,o.mdx)("inlineCode",{parentName:"a"},"yarn link"))," or ",(0,o.mdx)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v6/commands/npm-link"},(0,o.mdx)("inlineCode",{parentName:"a"},"npm link"))," command in your extension project to symlink it to the global package set."),(0,o.mdx)("p",null,"In your storefront project, run ",(0,o.mdx)("inlineCode",{parentName:"p"},"yarn link <package-name>")," or ",(0,o.mdx)("inlineCode",{parentName:"p"},"npm link <package-name>")," to link the two packages together.\nThis lets Node and Webpack resolve your extension from the storefront project without adding it as an entry in the dependency array."),(0,o.mdx)("p",null,"Edit your storefront project's ",(0,o.mdx)("inlineCode",{parentName:"p"},".env")," file and add your extension's name to the comma-separated value for ",(0,o.mdx)("inlineCode",{parentName:"p"},"BUILDBUS_DEPS_ADDITIONAL"),".\nThis tells the build process that it should check these packages for intercept and declare files."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-tutorials-extensions-index-md-9d27c00bfe0a797f22b8.js.map