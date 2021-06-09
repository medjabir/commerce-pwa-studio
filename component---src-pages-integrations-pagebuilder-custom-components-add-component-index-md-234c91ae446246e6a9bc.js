(self.webpackChunkdev_site_documentation_template=self.webpackChunkdev_site_documentation_template||[]).push([[7794],{55560:function(e,n,t){"use strict";t.r(n),t.d(n,{_frontmatter:function(){return p},default:function(){return m}});var o=t(27490),a=t(12265),s=(t(15007),t(64983)),r=t(99536),d=["components"],p={},i={_frontmatter:p},l=r.Z;function m(e){var n=e.components,t=(0,a.Z)(e,d);return(0,s.mdx)(l,(0,o.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,s.mdx)("h1",{id:"add-component"},"Add component"),(0,s.mdx)("p",null,"The purpose of a Page Builder component is to recreate a Page Builder content type (from your Magento instance) to display inside a PWA app. Developing this component is similar to developing other React components in PWA Studio. However, the properties defined within a Page Builder component are determined by the properties returned from your configuration aggregator. The following steps highlight how to put these properties to use in your component:"),(0,s.mdx)("p",null,(0,s.mdx)("img",{parentName:"p",src:"/commerce-pwa-studio/d54d7c9a4488f289768ca8d6b09f9a6b/AddComponentSteps.svg",alt:"Add Component steps overview"})),(0,s.mdx)("h2",{id:"step-1-add-local-props-and-prop-types"},"Step 1: Add local props and prop-types"),(0,s.mdx)("p",null,"The first step is to declare local variables that match the names of the props being passed from your aggregator, for destructuring. For our ",(0,s.mdx)("inlineCode",{parentName:"p"},"ExampleQuote"),", we declare and assign these properties as follows:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-js"},"const ExampleQuote = props => {\n    const {\n        quote,\n        author,\n        description,\n        textAlign,\n        border,\n        borderColor,\n        borderWidth,\n        borderRadius,\n        isHidden,\n        marginTop,\n        marginRight,\n        marginBottom,\n        marginLeft,\n        paddingTop,\n        paddingRight,\n        paddingBottom,\n        paddingLeft,\n        cssClasses\n    } = props;\n")),(0,s.mdx)("p",null,"With a destructuring assignment, our component takes a ",(0,s.mdx)("inlineCode",{parentName:"p"},"props")," object and copies its values to our local variables. All you need to do is make sure the names of your local variables exactly match the names of the ",(0,s.mdx)("inlineCode",{parentName:"p"},"props")," passed from your aggregator. As noted before, you can use ",(0,s.mdx)("inlineCode",{parentName:"p"},"console.log(props)")," at the top of your component to see the names of the ",(0,s.mdx)("inlineCode",{parentName:"p"},"keys")," being passed in on the props object."),(0,s.mdx)("p",null,"Along with defining your local variables, you need to add the comparable ",(0,s.mdx)("inlineCode",{parentName:"p"},"prop-types")," to define exactly what can be passed into your component. The ",(0,s.mdx)("inlineCode",{parentName:"p"},"ExampleQuote")," component defines the following ",(0,s.mdx)("inlineCode",{parentName:"p"},"prop-types"),":"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-js"},'import { arrayOf, string, bool } from "prop-types";\n\nExampleQuote.propTypes = {\n  quote: string,\n  author: string,\n  description: string,\n  textAlign: string,\n  border: string,\n  borderColor: string,\n  borderWidth: string,\n  borderRadius: string,\n  isHidden: bool,\n  marginTop: string,\n  marginRight: string,\n  marginBottom: string,\n  marginLeft: string,\n  paddingTop: string,\n  paddingRight: string,\n  paddingBottom: string,\n  paddingLeft: string,\n  cssClasses: arrayOf(string),\n};\n')),(0,s.mdx)("h2",{id:"step-2-add-jsx-markup"},"Step 2: Add JSX markup"),(0,s.mdx)("p",null,"Your JSX markup should recreate the HTML structure of your Page Builder content type and provide the slots for rendering its content and styles. For example, here is the markup needed to recreate the structure of our Quote content type and host the local content-related ",(0,s.mdx)("inlineCode",{parentName:"p"},"props")," values from our aggregator:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-jsx"},"const toHTML = (str) => ({ __html: str });\n\nreturn (\n  <div>\n    <div>{quote}</div>\n    <div>{author}</div>\n    <div dangerouslySetInnerHTML={toHTML(description)} />\n  </div>\n);\n")),(0,s.mdx)("p",null,"Because our ",(0,s.mdx)("inlineCode",{parentName:"p"},"description")," property value is HTML, we need to use React's ",(0,s.mdx)("a",{parentName:"p",href:"https://reactjs.org/docs/dom-elements.html#dangerouslysetinnerhtml"},"dangerouslySetInnerHTML")," and ",(0,s.mdx)("inlineCode",{parentName:"p"},"__html")," to render it out properly."),(0,s.mdx)("h2",{id:"step-3-apply-form-styles"},"Step 3: Apply form styles"),(0,s.mdx)("p",null,"To make it easy to apply all the inline styles from your content type to your Page Builder component, you can create a separate object that contains only the styles retrieved from the content type's form. These styles include those that are retrieved by ",(0,s.mdx)("a",{parentName:"p",href:"/commerce-pwa-studio/integrations/pagebuilder/utility-functions/"},"utility functions")," like ",(0,s.mdx)("inlineCode",{parentName:"p"},"getAdvanced()")," and ",(0,s.mdx)("inlineCode",{parentName:"p"},"getBackgroundImages()"),"."),(0,s.mdx)("p",null,"For our component, we created an object called ",(0,s.mdx)("inlineCode",{parentName:"p"},"formStyles")," to group our form styles as shown here:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-js"},"const formStyles = {\n  textAlign,\n  border,\n  borderColor,\n  borderWidth,\n  borderRadius,\n  isHidden,\n  marginTop,\n  marginRight,\n  marginBottom,\n  marginLeft,\n  paddingTop,\n  paddingRight,\n  paddingBottom,\n  paddingLeft,\n};\n")),(0,s.mdx)("p",null,"These are the styles returned from the Advanced form section of our Quote content type (using ",(0,s.mdx)("inlineCode",{parentName:"p"},"getAdvanced()"),"). When they are grouped together as shown, we can apply them all at once to our component, as follows:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-jsx"},"return (\n  <div style={formStyles}>\n    <div>{quote}</div>\n    <div>{author}</div>\n    <div dangerouslySetInnerHTML={toHTML(description)} />\n  </div>\n);\n")),(0,s.mdx)("p",null,"Now we need to apply the CSS classes we used to style the rest of our content type."),(0,s.mdx)("h2",{id:"step-4-apply-css-classes"},"Step 4: Apply CSS classes"),(0,s.mdx)("p",null,"Applying CSS classes to your component in PWA involves importing both your CSS stylesheet and a PWA Studio function called ",(0,s.mdx)("inlineCode",{parentName:"p"},"mergeClasses"),". This function does exactly what its name implies: it merges classes from different sources into a single variable you can use to add your classes to your JSX, using ",(0,s.mdx)("inlineCode",{parentName:"p"},"className"),"."),(0,s.mdx)("p",null,"For our component, we import our component stylesheet and the ",(0,s.mdx)("inlineCode",{parentName:"p"},"mergeClasses")," function as follows:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-js"},'import defaultClasses from "./exampleQuote.css";\nimport { mergeClasses } from "../../../../../classify";\n')),(0,s.mdx)("p",null,"We then merge the classes from our stylesheet with any classes passed in on the props and use a single variable (",(0,s.mdx)("inlineCode",{parentName:"p"},"classes"),") to apply our consolidated classes to the correct nodes in the JSX:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-jsx"},"const classes = mergeClasses(defaultClasses, props.classes);\n\nreturn (\n  <div style={formStyles}>\n    <div className={classes.quote}>{quote}</div>\n    <div className={classes.quoteAuthor}>{author}</div>\n    <div\n      className={classes.quoteDescription}\n      dangerouslySetInnerHTML={toHTML(description)}\n    />\n  </div>\n);\n")),(0,s.mdx)("p",null,"Merging the ",(0,s.mdx)("inlineCode",{parentName:"p"},"props.classes")," ensures that our component can apply and override styles from other components."),(0,s.mdx)("p",null,"In the previous code block, we only used a single class, ",(0,s.mdx)("inlineCode",{parentName:"p"},"classes.quote"),", to style the quote in our component. However, our original class required two different classes (",(0,s.mdx)("inlineCode",{parentName:"p"},".quote")," and ",(0,s.mdx)("inlineCode",{parentName:"p"},".blue-quote"),") for styling. As a best practice, you want to use the ",(0,s.mdx)("inlineCode",{parentName:"p"},"composes")," construct from ",(0,s.mdx)("a",{parentName:"p",href:"/commerce-pwa-studio/guides/general-concepts/css-modules/"},"CSS Modules")," as much as possible."),(0,s.mdx)("p",null,"For example, in our ",(0,s.mdx)("inlineCode",{parentName:"p"},"exampleQuote.css"),", we composed each color quote class with the ",(0,s.mdx)("inlineCode",{parentName:"p"},".qoute")," class as shown in the following snippet:"),(0,s.mdx)("pre",null,(0,s.mdx)("code",{parentName:"pre",className:"language-css"},".quote {\n    display: block;\n    font-size: 1.4em;\n    margin: 1em 1em 0.3em 0.6em;\n    quotes: '\\201C''\\201D''\\2018''\\2019';\n    text-decoration: none;\n    font-style: italic;\n    word-break: normal !important;\n    line-height: 1.25em;\n    padding: 0;\n    font-weight: 300;\n}\n.blackQuote {\n    composes: quote;\n    color: #333333;\n}\n.blueQuote {\n    composes: quote;\n    color: #007ab9;\n}\n...\n")),(0,s.mdx)("p",null,"This ensures that for each colored quote class, we also apply the ",(0,s.mdx)("inlineCode",{parentName:"p"},".quote")," class."),(0,s.mdx)("h2",{id:"component-output"},"Component output"),(0,s.mdx)("p",null,"If you have followed along using the ",(0,s.mdx)("inlineCode",{parentName:"p"},"ExampleQuote")," component, you should see something like this displayed in the PWA Venia app:"),(0,s.mdx)("p",null,(0,s.mdx)("img",{parentName:"p",src:"/commerce-pwa-studio/05cd8b9b928baf3e605e2d247065bb37/AddComponentOutput.svg",alt:"Add Component output"})))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-integrations-pagebuilder-custom-components-add-component-index-md-234c91ae446246e6a9bc.js.map