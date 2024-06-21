# Neutralinojs POC

This is a POC to create a basic installer. It basically copies bundled files to a path, selected by the user.

## Project setup:

First, install Neutralinojs globally by running `npm install -g @neutralinojs/neu`.

Then, clone the repository, cd to `{project-root}/react-src` and run `npm install`.

It should install all dependencies and you should be ready to run it.

## Project structure:

- `react-src`: Contains the React project of the installer.
- `neutralino.config.json`: Contains configurations regarding native OS APIs, the window, etc.

## How to run

`neu run -- --window-enable-inspector`
