## Mark Hario's Developer Portfolio

Hey, thanks for checking out my portfolio page! I've been in web development professionally for just over two years, with full-time education in the craft for another 5-odd months. This page essentially acts as my expanded resume, where I can go into a bit more detail and length. My PDF resume is also available for download [here](./public/HarioResume.pdf)

This page was started with Create-React-App, using Radium for styling. I wanted to try inline JavaScript styling. It seems pretty nice; JavaScript has imports/exports and variables much more elegantly addressed than does CSS or even SCSS. 

The downsides mostly were attempting to style multiple children with similar styling - I'm not sure I like using Style components in multiple places - it's an awkward blend of template-string CSS and JavaScript object syntax. I ended up using a 'sharedStyling' export with generic styling, and most of the component-unique styling is in the template strings. Also, no 'after' tags? Fail.

I'll probably try the [styled-components library](https://github.com/styled-components/styled-components) next.

