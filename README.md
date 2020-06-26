# Welcome to project-chef-templates 👋

![license](https://img.shields.io/github/license/tolgaerdonmez/project-chef-templates)
[![npm](https://img.shields.io/npm/v/project-chef)](https://www.npmjs.com/package/project-chef)

> Templates for project-chef CLI

## Template Structure

```
📦framework-name
 ┣ 📂extras
 ┃ ┗ 📂extra-package-name
 ┃ ┃ ┣ 📂init
 ┃ ┃ ┃ ┣ 📜injector.config.json
 ┃ ┃ ┃ ┗ 📜other config files
 ┃ ┃ ┗ 📂main
 ┃ ┃ ┃ ┗ 📜main files to be copied
 ┣ 📂init
 ┃ ┗ 📜index.js
 ┗ 📂main
 ┃ ┗ 📜main files to be copied
```

There are 3 entry points for a framework template, ***main, init, extras***
Either main or init is ***required*** or both, extras is optional if you want extra packages to be added.

### main

The files here are copied directly to the target

### init

An index.js is required for this directory, the default export of this index.js file is ran while creating your boilerplate in the cli. The init files index.js needs to be in es5 format.

I used this to ran commands like create-react-app, gatsby-cli and nextjs. You can adjust it to your own needs.

### extras

Here appears the packages that are optional for the user who selected your framework in the cli to create the boilerplate.
Every main directory is a standalone package to be installed.

There are 2 entry points for an extra package, either one is required or both.

#### main

The main files of the extra package to be copied to main directory.

#### init

This directory is for injecting extra config to the main framework directory
For example, you want to add plugins to babel.config.json, install npm packages

For these purposes an injector.config.json is required
To install npm packages add package names to the lists:

+ packages

+ devPackages

To alter the main config files the field ***configs*** is required
this field takes json objects as input,

```json
{
  file:"babel.config.json"
  appenders:["plugins"]
}
```

The field ***file*** is the reference config for the Injector API to get the fields that you want to add to target config,
config files must be in ***json*** format, copy the config file next to ***injector.config.json***

The fields you want to have as reference and target to alter should be appended to field ***appenders***

For example I want to add plugins to babel.config.json,

Add ***plugins*** to ***appenders***, this will read the reference babel.config.json's plugins field, and add the plugins to the target babel.config.json

If you want to alter a nested field use ***.*** like:
***field.nested.target***

[injector.config.json template](https://gist.github.com/tolgaerdonmez/3ca9ca885a44f8939ba015c5a0061736)

> ***Note:*** leave the fields empty if not used, all the fields must be present in injector.config.json

> ***Note:*** to a field, whose value type is a list, the values needed are appended. to a field, whose value type is not a list, the value provided by injector.config.json is replaced with the current value.

> Examine the existing templates for further understanding

> Please contact me if there is a problem or a question :)

## Author

👤 **Tolga Erdönmez**

* Twitter: [@tolgaerdonmez](https://twitter.com/tolgaerdonmez)
* Github: [@tolgaerdonmez](https://github.com/tolgaerdonmez)
* LinkedIn: [@tolgaerdonmez](https://linkedin.com/in/tolgaerdonmez)

## Show your support

Give a ⭐️ if this project helped you!


***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_