# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## VSCode Extensions

- Install `Prettier` extension.
- Install `vscode-styled-components` extension

#

## How to contribute

1. Checkout to main branch and pull latest changes `git checkout main && git pull origin main && npm i --force --legacy-peer-deps`
2. Create your branch with the of your current ticket e.g `git checkout -b ch-#675-add-pretier-configuration`.
3. Make your changes.
4. Stage and commit your changes. e.g. `git add . && git commit -m "ch-#675: setup prettier configuration"`.
5. Repeat **step 3 and 4** until you're done with your ticket tasks.
6. Pull from origin `main` branch to sync all changes online with your local branch `git pull origin main && npm i --force --legacy-peer-deps`.
7. Fix all conflict/s if any (You might need to consult help from the Engineer responsible for causing the conflict/s).
8. Push your changes on your current branch! eg. `git push origin ch-#5-add-pretier-configuration`
9. Create a **PR** in GitHub if you don't have any yet.
10. If any change/s is requested by your Code Reviewers, repeat **step 3 to 8** until your **PR** is approved.
11. Merge **PR**. 🚢

#

## Pull Request (**PR**)

#### Rules

1. Request an Engineer/s to review your PR (to check if your code makes sense to merge to the `main` branch).
2. Assign yourself (for anyone to quickly identify you as the owner of the PR).
3. Don't Merge without approval from your Code reviewer/s!!! (This could deal some potential damage if you do this 🥴)
4. Merge after approval. 🚢

#### Format

- The **PR** title. eg. `[#675] Add prettier configuration`.
- The **PR** body: This should be the link to the ticket on Trello. eg. `Trello: https://trello.com/c/XEv0yeTA`.

#

## Branch / Commits Conventions

#### Branch

- Format `<ch|ft|bg>-#ticket-id-<ticket-title>`
- Example `ft-#675-add-button-component`

#### Commit

- Format `<ch|ft|bg>-#ticket-id: <short description>`
- Example `bg-#675: fix all failing links`

