# nextjs-chakra-navigation-example

I looked at how to implement navigation in next.js and chakra. Since this small project was so complex, I decided to publish it.

Here's a quick rundown of all the commands I've used. I will document this as soon as possible and comment on it as soon as I find time for it.

Create Project

```sh
  npx create-next-app knasan-nextjs-chakra-backend --with-typescript
```

Install chakra and chakra icons (MenuBurger in this project)

```sh
  npm i @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^5 @chakra-ui/icons
```

Configure Typescript

```sh
touch tsconfig.json
```

Starting dev server, this fills the tsconfig.json file with simple configuration.

```sh
npm run dev
```

Add custom configuration into tsconfig.json

```json
"baseUrl": ".",
    "paths" :{
      "@components/*": ["components/*"],
      "@styles/*": ["styles/*"],
    },
```

These lines set up aliases. This means you can always access the components with "@components" and don't have to think about the levels.

```js
import Layout from '@components/Layout'
```

## Build Navigation

I saved all related components in a subfolder of components.

   1. Build Logo.tsx (return a text, but could also return a logo or whatever.)
   2. Build MenuItem.tsx (return a link)
   3. Build MenuToogle.tsx (HamburgerMenu for Mobile, Desktop and Tablet)
   4. Build ToggleLayout (switching from light to dark mode)
   5. NavBarContainer.tsx (Basically, it's the component that encloses everything else.)
   6. NavBar.tsx (Is the only component that should actually be used by other sites! In this example, I've packed them into a layout page.)

## Layout

Layout of the pages so that each page always has the same layout and it doesn't have to be rewritten over and over for each page. This got placed in the first level. Everything that I put in the first level, I also use in other pages. I only use everything in subfolders (e.g. navigation) within the components. I came up with this to keep track. If you know a better and easier way, please feel free to share it with me.

## Index

Only uses layout and the layout component takes care of everything. Everything in between is passed on and processed as children.
