<h1 align="center">Typescript Study Basics</h1>

<!-- Image Here? -->
## Description
 Meant to improve my understanding of basic Typescript.

## Run Code (Environment)
### Helpful Hints (Node.js)
- Commmand Line Useage (see resources):

###### Run a compile based on a backwards look through the fs for a tsconfig.json
tsc
###### Emit JS for just the index.ts with the compiler defaults
tsc index.ts
###### Emit JS for any .ts files in the folder src, with the default settings
tsc src/*.ts
###### Emit files referenced in with the compiler settings from tsconfig.production.json
tsc --project tsconfig.production.json
###### Emit d.ts files for a js file with showing compiler options which are booleans
tsc index.js --declaration --emitDeclarationOnly
###### Emit a single .js file from two files via compiler options which take string arguments
tsc app.ts util.ts --target esnext --outfile index.js



## Resources & Helpful Hints:
- [Typescript](https://www.typescriptlang.org/docs/) documentation
    - [Context](https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/context/) for typscript
    - [Metadata](https://www.npmjs.com/package/reflect-metadata) Reflection API.
    - Javascript file will be generated from Typescript file
    - [Typescript](https://www.typescriptlang.org/docs/handbook/compiler-options.html) CLI options


