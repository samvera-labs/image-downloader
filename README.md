# starter-react-component-npm

A React component library boilerplate which:

- includes React,
- bundles CommonJS, UMD and ESModule JavaScript files,
- provides a Styleguidist dev environment &amp; [component documentation](https://samvera-labs.github.io/starter-react-component-npm/styleguide/),
- provides unit test, best practice configuration
- supports styled components (CSS) via @emotion.

## Getting Started

### Installing

1. Clone or fork the repository:

```
git clone git@github.com:samvera-labs/starter-react-component-npm.git
```

2. Rename the cloned folder to your new project's title (ie. something other than `starter-react-component-npm`). Also update the `name` value in the `package.json` file.

3. Remove boilerplate `/.git` folder. If you want to do so via command line, run:

```
chmod -R +w .git // needed to be able to delete the folder from command line
rm -r .git
```

4. Install dependencies (use Yarn or NPM...your choice but examples below use `yarn`)

```
# Yarn
yarn install

// or...

# NPM
npm install
```

5. Start with a fresh Git history

```
git init
git add .
git commit -m "Initial commit"
```

## Developing

Use [Styleguidist](https://react-styleguidist.js.org/) as the development environment.

```
yarn styleguide
```

which will spin up a local Styleguidist webpack dev server that handles live-reloading as you write tests, build out components, and write documentation.

## Documentation

Styleguidist generates documentation through markdown files (`.md`) which you'll create, and which live alongside component `.js` files and `.test.js` files in a component's folder. For example:

```
Button/
  Button.js
  Button.test.js
  Button.md
```

To directly build the latest version of the style guide:

```
yarn styleguide:build
```

Which is available at: https://samvera-labs.github.io/starter-react-component-npm/styleguide/

## Tests

Unit tests are set up to run using [Jest](https://jestjs.io/) and [@testing-library](https://testing-library.com/).

```
yarn test

// or
yarn test:watch
```

## Building the package

To build the package, we use [Rollup](https://rollupjs.org/):

```
yarn build
```

Any components you want to export, place them in this file:

```
// src/main.js

export { default as SomeComponent } from "./components/SomeComponent/SomeComponent.js";
export { default as AnotherComponent } from "./components/AnotherComponent/AnotherComponent.js";
```

## Customizing

1. Rename the project folder "starter-react-component-npm" to your own...ie: "my-new-component"

2. Update the `/package.json` file to customize for your project. Especially `namme, description, keywords, author`, etc.

## Deployment

### Bundling

When ready to bundle your component, run:

```
yarn build
```

This will build a fresh copies of the package in the `/dist` folder. It will also build a fresh copy of the style guide in the `/styleguide` directory.

### Push to NPM registry

Here's how to publishing your package to NPM:
https://docs.npmjs.com/cli/publish

To publish your package:

```
npm publish
```

## Authors

- **Adam J. Arling** - _UI Developer_ - [Northwestern Univeristy Libraries](https://github.com/nulib) [Github](https://github.com/adamjarling)

## Built With

- [React](https://reactjs.org/) - JavaScript component library
- [Rollup](https://rollupjs.org/) - Rollup JavaScript bundler
- [Jest](https://jestjs.io/) - Testing framework
- [Styleguidist](https://react-styleguidist.js.org/) - Local dev environment &amp; documentation

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
