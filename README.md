# GithubReposWeb (https://github-repos-web.herokuapp.com/)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.1.1.

## Note:

- I didn't make the app complex by using some angular UI framework
- State mangement is not used.

## App is built using:

HTML,
CSS,
Javascript,
Bootstrap 5,
Angular

## CI

Travis

## Deployment Env

Heroku

## To run App

### Prerequisite

Node
NPM

## Available Scripts

In the project directory, you can run:

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Development

main branch is used for development. Ideally we should use feature branch like feature/<jira-ticket> for development and bugfix branch for defect fixing.

Code base is structured based on modules (ex. repository-list). All related files are grouped together and kept in one folder. In this way it is easy to find files and also helps others to understand the code base easily.

All the file names follow kabab case (ex., <>-<>.ts | tsx) naming convention.

Component based design is followed.

Folder structure

```
src
- app
    - modules
    - core
      - authentication
      - guards
      - interceptors
      - services
      core.module.ts - Not created for this test. but we should have this as project grows
    - shared
        - components
        - directives
        - pipes
        - models
```

## Deployment

Travis CI is linked to github project github-repos-web and it listens on main branch. Whenever code is merged to main automatically travis will trigger the build, runs the test cases and once test cases are successfull it builds production ready container image using Docker file and deploys it to the heroku.

## Improvements

- Use SCSS or SASS instead of CSS
- Write e2e test cases
- Handling errors in more generic way
- State Mangement can be used (once app starts to grow like redux)
- Avoid using more external libraries
- UI design can be improved :-)
