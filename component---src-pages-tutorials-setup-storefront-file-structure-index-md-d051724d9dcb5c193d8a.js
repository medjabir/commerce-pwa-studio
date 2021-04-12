(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[1623],{16153:function(e,n,t){"use strict";t.r(n),t.d(n,{_frontmatter:function(){return s},default:function(){return p}});var r=t(22122),o=t(19756),i=(t(15007),t(64983)),a=t(99536),s={},d={_frontmatter:s},l=a.Z;function p(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,i.mdx)(l,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"explore-the-files"},"Explore the files"),(0,i.mdx)("p",null,"Learn about the files found inside a new storefront project."),(0,i.mdx)("h2",{id:"source-directory"},"Source directory"),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"src")," directory holds your storefront project's source code.\nThis is where you add your own custom, client-side code for your storefront."),(0,i.mdx)("p",null,"During the build process, Webpack scans this folder and creates bundles from these files.\nThese bundles are small chunks of your storefront that the server provides to the browser as needed."),(0,i.mdx)("p",null,"After scaffolding a new project, the ",(0,i.mdx)("inlineCode",{parentName:"p"},"src")," directory looks like the following:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-tree"},"src\n├── .storybook\n├── ServiceWorker\n├── drivers.js\n├── index.js\n├── registerSW.js\n└── store.js\n")),(0,i.mdx)("h3",{id:"storybook"},(0,i.mdx)("inlineCode",{parentName:"h3"},".storybook")),(0,i.mdx)("p",null,"This directory contains configurations for ",(0,i.mdx)("a",{parentName:"p",href:"https://storybook.js.org/docs/react/workflows/testing-with-storybook"},"Storybook")," testing.\nYou can delete this directory if you do not need it."),(0,i.mdx)("h3",{id:"serviceworker"},(0,i.mdx)("inlineCode",{parentName:"h3"},"ServiceWorker")),(0,i.mdx)("p",null,"The ServiceWorker directory contains all the logic for providing ",(0,i.mdx)("a",{parentName:"p",href:"https://developers.google.com/web/fundamentals/primers/service-workers"},"service worker features"),".\nExamples of service workers features include push notifications, background sync, and even offline mode for your storefront."),(0,i.mdx)("p",null,"The service worker also gives you the ability to intercept and handle network requests.\nThis gives you better control over your site's client-side caching logic."),(0,i.mdx)("h3",{id:"driversjs"},(0,i.mdx)("inlineCode",{parentName:"h3"},"drivers.js")),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"drivers.js")," file is a centralized module that provides non-PWA-Studio dependencies, such as GraphQL clients, React-router components, Redux components, etc.\nCentralizing these modules into a virtual dependency makes it easy to switch out or override these components"),(0,i.mdx)("p",null,"You have access to these dependencies through the virtual ",(0,i.mdx)("inlineCode",{parentName:"p"},"@magento/venia-drivers")," dependency:"),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"import { Link, resourceUrl } from '@magento/venia-drivers';\n")),(0,i.mdx)("p",null,"Edit the entry in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"browser")," section of the ",(0,i.mdx)("inlineCode",{parentName:"p"},"package.json")," file if you want to change the name."),(0,i.mdx)("p",null,"For more information about Venia's drivers and adapters pattern, see: ",(0,i.mdx)("a",{parentName:"p",href:"venia-pwa-concept/features/modular-components/index.md"},"Modular components")),(0,i.mdx)("h3",{id:"indexjs"},(0,i.mdx)("inlineCode",{parentName:"h3"},"index.js")),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"index.js")," file is the entry point for your application.\nIt imports the Venia application as a single component and renders it in the DOM.\nIt also wraps it up inside components that provide the drivers and application context."),(0,i.mdx)("h3",{id:"registerswjs"},(0,i.mdx)("inlineCode",{parentName:"h3"},"registerSW.js")),(0,i.mdx)("p",null,"This file registers the service worker when users visit the storefront.\nThe contents of this file is standard, boilerplate code and does not need modifications."),(0,i.mdx)("h3",{id:"storejs"},(0,i.mdx)("inlineCode",{parentName:"h3"},"store.js")),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"store.js")," file connects the Peregrine global store with your project's UI components.\nHere, you can add your custom reducers and enhancers to Peregrine's global store."),(0,i.mdx)("p",null,"For more information about state management, see: ",(0,i.mdx)("a",{parentName:"p",href:"technologies/basic-concepts/state-management/index.md"},"State management")),(0,i.mdx)("h2",{id:"non-source-files"},"Non-source files"),(0,i.mdx)("p",null,"These are important files outside the source directory."),(0,i.mdx)("h3",{id:"local-interceptjs"},(0,i.mdx)("inlineCode",{parentName:"h3"},"local-intercept.js")),(0,i.mdx)("p",null,"This is the intercept file for your storefront project.\nIt lets you use the extensibility framework to make changes to the Venia application and its dependencies using Targets and Targetables."),(0,i.mdx)("h3",{id:"webpackconfigjs"},(0,i.mdx)("inlineCode",{parentName:"h3"},"webpack.config.js")),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"webpack.config.js")," is a Webpack configuration file.\nIt uses ",(0,i.mdx)("a",{parentName:"p",href:"pwa-buildpack/reference/configure-webpack/index.md"},(0,i.mdx)("inlineCode",{parentName:"a"},"configureWebpack"))," from PWA Studio's buildpack to create a configuration object for Webpack."),(0,i.mdx)("h3",{id:"upwardyml"},(0,i.mdx)("inlineCode",{parentName:"h3"},"upward.yml")),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"upward.yml")," file is an ",(0,i.mdx)("a",{parentName:"p",href:"technologies/upward/index.md"},"UPWARD")," configuration file.\nIt provides instructions for how an UPWARD server implementation should respond to a request."),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"status"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"headers"),", and ",(0,i.mdx)("inlineCode",{parentName:"p"},"body")," values defined in the default ",(0,i.mdx)("inlineCode",{parentName:"p"},"upward.yml")," file uses values from the ",(0,i.mdx)("inlineCode",{parentName:"p"},"veniaResponse")," object.\nThis object is defined in the ",(0,i.mdx)("a",{parentName:"p",href:"https://github.com/magento/pwa-studio/blob/develop/packages/venia-ui/upward.yml"},"venia-ui package's ",(0,i.mdx)("inlineCode",{parentName:"a"},"upward.yml")," file"),"."),(0,i.mdx)("p",null,"You can edit this file if you want to change how your project's UPWARD server responds to requests,\nbut the preferred method is to use Targetables to make these changes."),(0,i.mdx)("h3",{id:"templatehtml"},(0,i.mdx)("inlineCode",{parentName:"h3"},"template.html")),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"template.html")," file contains the template for the server-side rendered HTML code for your storefront's application shell."),(0,i.mdx)("p",null,"During the build process, the ",(0,i.mdx)("a",{parentName:"p",href:"https://webpack.js.org/plugins/html-webpack-plugin/"},"HtmlWebpackPlugin")," injects this file with dynamic data, such as project variables and imports for Webpack-generated Javascript bundles.\nThe script saves this new file as ",(0,i.mdx)("inlineCode",{parentName:"p"},"dist/index.html"),".\nWhen a browser creates the initial request for your storefront application, the default ",(0,i.mdx)("inlineCode",{parentName:"p"},"upward.yml")," configuration tells the UPWARD server to respond with this index file."),(0,i.mdx)("p",null,"As the JavaScript bundles load in the browser, the React components hydrate the different visual elements on the page with separate network requests."),(0,i.mdx)("h3",{id:"serverjs"},(0,i.mdx)("inlineCode",{parentName:"h3"},"server.js")),(0,i.mdx)("p",null,"The ",(0,i.mdx)("inlineCode",{parentName:"p"},"server.js")," file is the script that starts the production or development server.\nThe script loads the ",(0,i.mdx)("inlineCode",{parentName:"p"},"NODE_ENV")," variable from the environment or your project's ",(0,i.mdx)("inlineCode",{parentName:"p"},".env")," file to determine which server type to start."),(0,i.mdx)("p",null,"Use the following values for ",(0,i.mdx)("inlineCode",{parentName:"p"},"NODE_ENV"),":"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"production")," - start a production server"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"test")," - start a staging server that uses staging server environment configurations"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"development")," - start a development server that uses the development server environment configurations")),(0,i.mdx)("p",null,"For more information on loading environment variables, see: ",(0,i.mdx)("a",{parentName:"p",href:"pwa-buildpack/reference/buildpack-cli/load-env/index.md#programmatic-api%3E"},"Load environment file")))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-tutorials-setup-storefront-file-structure-index-md-d051724d9dcb5c193d8a.js.map