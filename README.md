# About the project
Project to practice interviewing with Glovo. 

## Getting Started
1. Installation of TypeScript
	```
	npm install typescript --save-dev
	```
2. Configuring TypeScript
	```
	touch tsconfig.json
	```
	Write in `tsconfig.json`:
	```
        touch tsconfig.json{
    "compilerOptions": {
        "target": "es5",
        "lib": ["dom", "dom.iterable", "esnext"],
        "allowJs": true,
        "module": "commonjs",
        "moduleResolution": "node",
        "outDir": "dist",
        "removeComments": true,
        "strict": true,
        "strictPropertyInitialization": false,
        "esModuleInterop": true,
        "resolveJsonModule": true,
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true
    },
    "include": ["**/*.ts"],
    "exclude": ["node_modules"]
    }
	```
3. Installing Jest & Babel 
    ```
    npm install --save-dev jest babel-jest @babel/core @babel/preset-env @babel/preset-typescript ts-jest @types/jest
    ```
    For more information visit the [Jest documentation](https://jestjs.io/docs/getting-started). 
4. Configuring Babel
   ```
    touch babel.config.js
   ```
   Write in babel.config.js: 
   ```
    module.exports = {
    presets: [
        ["@babel/preset-env", { targets: { node: "current" } }],
        "@babel/preset-typescript",
    ],
    };
   ```

You are done! 🎉