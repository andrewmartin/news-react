# News API

This is a demo application using the [News API](https://newsapi.org/) service. It uses `react`, `react-redux`, and several other packages to display items using their API.

[Demo](http://am-news.s3-website-us-east-1.amazonaws.com/)

This application uses `React Router` to manage the routes and maintain the search state in the URL, as it might occur in a production application.

It should be noted that there are some reasonable defaults here to demonstrate a production app setup. For example, `React Router` and `Connected React Router` are included to handle route handling and dispatching actions on route changes––even though this application only has one route. These inclusions are merely to demonstrate a reasonable baseline and expectation / plans for a production application, and are not therein absolutely required for requirements of this demo application.

This app includes some customizations and is branched from [`create-react-app`](https://github.com/facebook/create-react-app). See below for an explanation of the structure of the application and the packages chosen.

## Quickstart

1. Copy `.env-example` to `.env` in the project root, updating parameters if necessary. Most likely, you will want to use `REACT_APP_API_ROOT=https://newsapi.org/v2/` as your base URL and add your own key.
2. `yarn` and `yarn start`

_We are using `husky` to enforce the linting rules before committing. Invalid lint rules will attempted to be fixed if found, and prevented from being committed._

## Project Features

- I added and am using a really nice lint pattern setup I prefer and rolled in my customized setup for all of this.
- Though it wasn't requested, I decided to push the search query and the sort parameters through the URL routing. For example, you're able to revisit the site with a search parameter inline and it will display the results (`http://am-news.s3-website-us-east-1.amazonaws.com/?q=bitcoin&sortBy=popularity`, for example).
- Adds and uses `reactstrap` and Bootstrap for the basic components, and rolled in a custom SCSS manifest of required minimum styles for this project to function.
- Included a (reactstrap) Tooltip and showed some default behaviors for when the search is attempted to be submitted without a query
- Some basic font imports and a little nicer subjective styling decisions made (added the date stamp to the article image area)

_Production / time permitting roadmap:_

- In production I might use a better form package like Formik or Redux-Form, but wanted to keep it simple here
- I'd certainly add tests around the reducer and basic snapshot tests for the larger components

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