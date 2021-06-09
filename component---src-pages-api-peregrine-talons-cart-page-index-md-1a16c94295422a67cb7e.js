(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[275],{99949:function(n,t,e){"use strict";e.r(t),e.d(t,{_frontmatter:function(){return i},default:function(){return c}});var a=e(27490),o=e(12265),r=(e(15007),e(64983)),s=e(99536),p=e(28457),m=["components"],i={},d={_frontmatter:i},u=s.Z;function c(n){var t=n.components,e=(0,o.Z)(n,m);return(0,r.mdx)(u,(0,a.Z)({},d,e,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"shopping-cart-talons"},"Shopping Cart Talons"),(0,r.mdx)(p.Z,{mdxType:"Component"}),(0,r.mdx)("h2",{id:"examples"},"Examples"),(0,r.mdx)("h3",{id:"usecartpage"},"useCartPage()"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { useCartPage } from '@magento/peregrine/lib/talons/CartPage/useCartPage';\n\nimport { GET_CART_DETAILS } from './myCartPage.gql';\n\nconst MyCartPage = props => {\n    const queries = {\n        getCartDetails: GET_CART_DETAILS\n    }\n    const talonProps = useCartPage({ queries });\n\n    const {\n        handleSignIn,\n        hasItems,\n        isSignedIn,\n        isCartUpdating,\n        setIsCartUpdating,\n        shouldShowLoadingIndicator\n    } = talonProps;\n\n    return (\n        // JSX using talonProps data\n    )\n}\n\nexport default MyCartPage\n")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-api-peregrine-talons-cart-page-index-md-1a16c94295422a67cb7e.js.map