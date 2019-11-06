---
templateKey: blog-post
title: My take on Styled Components
date: 2019-07-12T20:42:12.767Z
description: With the advent of such JS frameworks as Vue and React, building Front End user interfaces is more fun than ever.
---
 It’s also more complicated than ever before. That said, all the latest js frameworks (especially Nuxt and Next) solve several critical issues:

- Rendering elements via Virtual DOM 
- State management
- Component UI architecture - allows for isolating sections/modules of a website as opposed to a page or template containing the entire content

That last bullet point is a key benefit to using an SPA or SSR tooling. By creating a finer point of emphasis on each section of a website, you allow yourself to closer attention to detail. It’s also an easier way to isolate and troubleshoot bugs. But wouldn’t it be great to style UI at the component level?

Enter Styled Components.  This has surprisingly become a hot button issue of late. It seems like the argument against using it is the potential for technical debt, in that if your framework of choice gets legacy’d, so will your css. A valid point, sure, but I don’t React/Next slowing down anytime soon. Here are just a few game changing things it achieves out of the box:

- Styled Components renders CSS at the component level, so if a component isn’t being rendered on a page, neither will its CSS. Great performance benefits!
- No class naming - this is helpful in avoividing duplicate styles. Just name your styled element and inject into the component.  An example below:
```
const ProductHero = styled.div`
    margin:1em 0;
    display:grid;
`
```
```
    const Navbar = () => (
    <div>
        <ProductHero>
            <h1>Shop Our Product</h1>
        </ProductHero>
    </div>
)

```
    export default Navbar

```
