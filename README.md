# News API

This is a demo application using the [News API](https://newsapi.org/) service. It uses `react`, `react-redux`, and several other packages to display items using their API.

[Demo](http://am-news.s3-website-us-east-1.amazonaws.com/)

It includes some customizations and is branched from [`create-react-app`](https://github.com/facebook/create-react-app). See below for an explanation of the structure of the application and the packages chosen.

It should be noted that there are some reasonable defaults here to demonstrate a production app setup. For example, `React Router` and `Connected React Router` are included to handle route handling and dispatching actions on route changes––even though this application only has one route. These inclusions are merely to demonstrate a reasonable baseline and expectation / plans for a production application, and are not therein absolutely required for requirements of this demo application.

## Quickstart

1. Copy `.env-example` to `.env` in the project root, updating parameters if necessary.
2. `yarn` and `yarn start`

_We are using `husky` to enforce the linting rules before committing. Invalid lint rules will attempted to be fixed if found, and prevented from being committed._

## Tests

1. `yarn test`

### Application Structure

This is a high level view of the notable files and directories in this application:

```
├── .eslintrc.js -> custom eslint config
├── .env -> app environment
├── .prettierrc -> prettier config
├── api -> api singleton (uses `axios`)
├── components -> shared components
├── containers -> app containers
├── index.js -> app entry and render call
├── index.scss -> global styles (mostly resets, font imports)
├── reducers -> application redux reducers (and action creators)
├── selectors -> redux store selectors
├── store -> redux store configuration and helpers
└── styles -> shared styles
```

The general pattern held here is that those files in `containers` will hold the `mapStateToProps` assignments only, and pass down to other containers.

### Application Setup

This is a custom invocation of some sensible defaults for Create React App, based on practices I find most efficient when building React/Redux applications.

It includes:

- `redux` and `redux-thunk`
- `redux-actions`
- `connected-react-router`
- `redux-persist`
- `node-sass`
- `axios` and a vanilla API constructor singleton pattern
- `classnames`

It also has some default setup related to my preferred lint standards:

- `husky` for pre-commit linting
- `eslint-config-airbnb` (and related packages required to run linting)
- `prettier`
- ...and several other packages related to linting. Please see `package.json` and `.eslintrc.js` for specifics.

It suggests and uses `NODE_PATH=src/` in the `.env` for absolute module importing.

## Create React App Overrides

I'm using `react-app-rewired` and `customize-cra` to:

1. Setup `react-hot-loader`
2. Setup `eslint`

(See `config-overrides.js` for this 2 line setup).