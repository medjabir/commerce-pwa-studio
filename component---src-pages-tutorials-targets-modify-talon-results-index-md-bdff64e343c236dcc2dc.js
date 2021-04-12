(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[1211],{71304:function(e,t,n){"use strict";n.r(t),n.d(t,{_frontmatter:function(){return l},default:function(){return p}});var a=n(22122),o=n(19756),r=(n(15007),n(64983)),i=n(99536),l={},s={_frontmatter:l},d=i.Z;function p(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,r.mdx)(d,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,"In core Magento development:"),(0,r.mdx)("blockquote",null,(0,r.mdx)("p",{parentName:"blockquote"},"A plugin, or interceptor, is a class that modifies the behavior of public class functions by intercepting a function call and running code before, after, or around that function call.\nThis allows you to substitute or extend the behavior of original, public methods for any class or interface.")),(0,r.mdx)("p",null,"See: ",(0,r.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/extension-dev-guide/plugins.html"},"Plugins (Interceptors)")),(0,r.mdx)("p",null,"PWA Studio's extensibility framework provides a similar feature that allows you to intercept a talon call and surround it with custom logic.\nThis is useful if you want to add tracking logic or alter the incoming or outgoing values for a talon."),(0,r.mdx)("p",null,"This tutorial teaches you how to create an extension that intercepts a talon and changes the results."),(0,r.mdx)("h2",{id:"tasks-overview"},"Tasks overview"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"Initialize the project"),(0,r.mdx)("li",{parentName:"ol"},"Create and register an intercept file"),(0,r.mdx)("li",{parentName:"ol"},"Define the intercept file"),(0,r.mdx)("li",{parentName:"ol"},"Make a data fetch hook"),(0,r.mdx)("li",{parentName:"ol"},"Create the talon wrapper module"),(0,r.mdx)("li",{parentName:"ol"},"Update the package entry point"),(0,r.mdx)("li",{parentName:"ol"},"Test on a local instance")),(0,r.mdx)("h2",{id:"initialize-the-project"},"Initialize the project"),(0,r.mdx)("p",null,"To intercept and wrap a talon, you need a PWA Studio extension.\nUse ",(0,r.mdx)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/init"},(0,r.mdx)("inlineCode",{parentName:"a"},"npm init"))," or ",(0,r.mdx)("a",{parentName:"p",href:"https://classic.yarnpkg.com/en/docs/cli/init/"},(0,r.mdx)("inlineCode",{parentName:"a"},"yarn init"))," to create a new JavaScript package project for this tutorial."),(0,r.mdx)("p",null,"{: .bs-callout .bs-callout-info}\n",(0,r.mdx)("strong",{parentName:"p"},"Note:")," This is a standalone project.\nYou do not need to create this inside a storefront project."),(0,r.mdx)("p",null,"Edit the ",(0,r.mdx)("inlineCode",{parentName:"p"},"packages.json")," file so it looks like the following:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "my-extension",\n  "version": "0.0.1",\n  "description": "A PWA Studio extension",\n  "publishConfig": {\n    "access": "public"\n  },\n  "main": "index.js",\n  "license": "(OSL-3.0 OR AFL-3.0)",\n  "repository": "",\n  "dependencies": {},\n  "peerDependencies": {\n    "@magento/peregrine": "~7.0.0",\n    "@magento/pwa-buildpack": "~6.0.0",\n    "@magento/venia-ui": "~4.0.0",\n    "apollo-client": "2.6.4",\n    "graphql-tag": "~2.10.1",\n    "react": "~17.0.1",\n    "webpack": "~4.38.0"\n  },\n}\n')),(0,r.mdx)("h2",{id:"create-and-register-the-intercept-file"},"Create and register the intercept file"),(0,r.mdx)("p",null,"You can create the intercept file anywhere in your project.\nFor this tutorial, create this file under ",(0,r.mdx)("inlineCode",{parentName:"p"},"src/targets"),"."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-sh"},"mkdir -p src/targets && touch src/targets/my-intercept.js\n")),(0,r.mdx)("p",null,"Set the value for ",(0,r.mdx)("inlineCode",{parentName:"p"},"pwa-studio.targets.intercept")," in your project's ",(0,r.mdx)("inlineCode",{parentName:"p"},"package.json")," file to tell the build process where to find the intercept file."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-diff"},'    "react": "~17.0.1",\n    "webpack": "~4.38.0"\n  },\n+ "pwa-studio": {\n+   "targets": {\n+     "intercept": "src/targets/my-intercept"\n+   }\n+ }\n}\n')),(0,r.mdx)("h2",{id:"define-the-intercept-file"},"Define the intercept file"),(0,r.mdx)("p",null,"The intercept file is where you tap into PWA Studio's extensibility framework and add your modifications."),(0,r.mdx)("p",null,"In your intercept file, add the following content:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},'module.exports = (targets) => {\n  // Wrap the useProductFullDetail talon with this extension\n  const peregrineTargets = targets.of("@magento/peregrine");\n  const talonsTarget = peregrineTargets.talons;\n\n  talonsTarget.tap((talonWrapperConfig) => {\n    talonWrapperConfig.ProductFullDetail.useProductFullDetail.wrapWith(\n      "my-extension"\n    );\n  });\n\n  // Set the buildpack features required by this extension\n  const builtins = targets.of("@magento/pwa-buildpack");\n  builtins.specialFeatures.tap((featuresByModule) => {\n    featuresByModule["@my-extension/my-product-page"] = {\n      // Wrapper modules must be ES Modules\n      esModules: true,\n    };\n  });\n};\n')),(0,r.mdx)("p",null,"When this file runs, it taps into the ",(0,r.mdx)("inlineCode",{parentName:"p"},"talonsTarget")," from the available targets in ",(0,r.mdx)("inlineCode",{parentName:"p"},"@magento/peregrine")," and wraps the ",(0,r.mdx)("inlineCode",{parentName:"p"},"useProductFullDetail()")," function call with your extension."),(0,r.mdx)("p",null,"Since talon wrappers must be ES modules, this file also taps into the ",(0,r.mdx)("inlineCode",{parentName:"p"},"specialFeatures")," target from ",(0,r.mdx)("inlineCode",{parentName:"p"},"@magento/pwa-buildpack")," to set the ",(0,r.mdx)("inlineCode",{parentName:"p"},"esModules")," flag to ",(0,r.mdx)("inlineCode",{parentName:"p"},"true"),"."),(0,r.mdx)("h2",{id:"make-a-data-fetch-hook"},"Make a data fetch hook"),(0,r.mdx)("p",null,"Create a data fetch hook to query the backend for more data."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-sh"},"mkdir -p src/hooks && touch src/hooks/useProductCategoriesList.js\n")),(0,r.mdx)("p",null,"Inside the ",(0,r.mdx)("inlineCode",{parentName:"p"},"useProductCategoriesList.js")," file, add the following content:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},'import { useMemo } from "react";\nimport { useQuery } from "@apollo/react-hooks";\nimport gql from "graphql-tag";\n\nconst GET_PRODUCT_CATEGORIES = gql`\n  query getProductCategories($urlKey: String!) {\n    products(filter: { url_key: { eq: $urlKey } }) {\n      items {\n        categories {\n          name\n          url_path\n        }\n      }\n    }\n  }\n`;\nconst useProductCategoriesList = (props) => {\n  const { urlKey } = props;\n\n  const { error, loading, data } = useQuery(GET_PRODUCT_CATEGORIES, {\n    fetchPolicy: "cache-and-network",\n    nextFetchPolicy: "cache-first",\n    variables: {\n      urlKey: urlKey\n    }\n  });\n\n  const categories = useMemo(() => {\n    if (data && data.products.items[0]) {\n      return data.products.items[0].categories;\n    }\n    return null;\n  }, [data]);\n\n  return {\n    error,\n    isLoading: loading,\n    categories\n  };\n};\n\nexport default useProductCategoriesList;\n')),(0,r.mdx)("p",null,"This code defines a GraphQL query that fetches a list of category names and URL for a product at a specific URL key.\nIt returns a hook that sends the query to the backend and returns data about the request, which includes the results."),(0,r.mdx)("h2",{id:"create-the-talon-wrapper-module"},"Create the talon wrapper module"),(0,r.mdx)("p",null,"A talon wrapper module wraps around an existing talon and injects code around the implementation logic the talon executes."),(0,r.mdx)("p",null,"You can define this module anywhere in your project, but for this tutorial create it under ",(0,r.mdx)("inlineCode",{parentName:"p"},"src/targets"),"."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-sh"},"touch src/targets/wrapper.js\n")),(0,r.mdx)("p",null,"Inside ",(0,r.mdx)("inlineCode",{parentName:"p"},"wrapper.js"),", add the following content:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},'import useProductCategoriesList from "../hooks/useProductCategoriesList";\n\nconst wrapUseProductFullDetails = (original) => {\n  return function useProductFullDetails(props, ...restArgs) {\n    console.log("Calling new useProductFullDetails() function!")\n\n    const { product } = props;\n\n    const categoriesListData = useProductCategoriesList({\n      urlKey: product.url_key\n    });\n\n    const { productDetails, ...defaultReturnData } = original(\n      props,\n      ...restArgs\n    );\n\n    return {\n      ...defaultReturnData,\n      productDetails: {\n        ...productDetails,\n        categoriesList: categoriesListData\n      }\n    };\n  };\n};\n\nexport default wrapUseProductFullDetails;\n')),(0,r.mdx)("p",null,"This module exports a function that returns a new ",(0,r.mdx)("inlineCode",{parentName:"p"},"useProductFullDetails()")," function.\nWhenever a component calls the original ",(0,r.mdx)("inlineCode",{parentName:"p"},"useProductFullDetails()")," talon, it calls this new function instead."),(0,r.mdx)("p",null,"The module imports and uses the ",(0,r.mdx)("inlineCode",{parentName:"p"},"useProductCategoriesList()")," hook defined in a previous step to get the ",(0,r.mdx)("inlineCode",{parentName:"p"},"categoriesListData"),", which contains information about the request.\nThe code uses the ",(0,r.mdx)("inlineCode",{parentName:"p"},"props")," normally passed into the ",(0,r.mdx)("inlineCode",{parentName:"p"},"original")," function to get the value of the ",(0,r.mdx)("inlineCode",{parentName:"p"},"urlKey")," for the GraphQL request."),(0,r.mdx)("p",null,"The extensibility framework provides the ",(0,r.mdx)("inlineCode",{parentName:"p"},"original")," talon function when it executes the wrapper module.\nThe new ",(0,r.mdx)("inlineCode",{parentName:"p"},"useProductFullDetails()")," function calls this function and uses the props data result as a starting point for the final returned value."),(0,r.mdx)("p",null,"The final return value is combination of the original props data and the categories list data returned by the hook."),(0,r.mdx)("h2",{id:"update-the-package-entry-point"},"Update the package entry point"),(0,r.mdx)("p",null,"Update the ",(0,r.mdx)("inlineCode",{parentName:"p"},"package.json")," file and set the main entry point to the talon wrapper module."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-diff"},'  "publishConfig": {\n    "access": "public"\n  },\n- "main": "index.js",\n+ "main": "src/targets/wrapper.js",\n  "license": "(OSL-3.0 OR AFL-3.0)",\n')),(0,r.mdx)("p",null,"This indicates which module to return when another project uses this package as a dependency.\nThis is an important step because the intercept file in this project tells the extensibility framework to wrap the ",(0,r.mdx)("inlineCode",{parentName:"p"},"useProductFullDetails()")," talon with the module this package provides."),(0,r.mdx)("h2",{id:"test-on-a-local-instance"},"Test on a local instance"),(0,r.mdx)("p",null,"Install this extension in a local storefront project to test its functionality."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-sh"},"yarn add --dev file:/path/to/your/extension/project\n")),(0,r.mdx)("p",null,"This will add a ",(0,r.mdx)("inlineCode",{parentName:"p"},"devDependencies")," entry to your storefront project's ",(0,r.mdx)("inlineCode",{parentName:"p"},"package.json")," that looks like the following:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-diff"},'  "memory-fs": "~0.4.1",\n+ "my-extension": "file:/path/to/your/extension/project"\n  "prettier": "~1.16.4",\n')),(0,r.mdx)("p",null,"Now, when you navigate to a product page, the following message appears in the console:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-text"},'"Calling new useProductFullDetails() function!".\n')),(0,r.mdx)("p",null,"Use additional ",(0,r.mdx)("inlineCode",{parentName:"p"},"console.log()")," calls to verify the application calls the data fetch hook."),(0,r.mdx)("p",null,"To test the new props data the wrapped talon returns, you will need to create a copy of the ProductFullDetails component and alter it to log or render the new data."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-tutorials-targets-modify-talon-results-index-md-bdff64e343c236dcc2dc.js.map