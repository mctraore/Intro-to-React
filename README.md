# Introduction to React

## Environment Requirements

Ensure that Node version >= 14.0.0 and npm version>= 5.6 are installed on your machine. You can install node here: https://nodejs.org/en/

## Run `travel-blog`

The `travel-blog` repo includes completed code for a simple React website. In order to run the `travel-blog` application, clone or download this repo then run the following:

```
cd Intro-to-React
cd travel-blog
npm install
npm start
```

View running application at http://localhost:3000

## Create a New React Project

Run the following commands:

```
npx create-react-app my-app
cd my-app
npm start
```

## Deploy Website using Github Pages

- In project directory, run `npm install gh-pages --save -dev`
- In package.json, add:
  - `"homepage": "http://<GITHUB-USERNAME>.github.io/REPONAME"`
- In package.json under scripts, add:

```
"predeploy": "npm run build"
"deploy": "gh-pages -d build"
```

- In project directory, run:

```
git init
git remote add origin https://github.com/<GITHUB-USERNAME>/<REPONAME>.git
npm run deploy
```

- [Optional] Push your code to Github

```
git add .
git commit -m <Commit Message>
git push origin master
```

- To confirm that your app has been deployed, go to Github repo settings
- Click Pages section on left nav
- If your site is published, you should see a link to the deployed app!

## Learning Resources

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Intro to React Tutorial](https://reactjs.org/tutorial/tutorial.html)
- [React Express](https://www.react.express/)
- [Codecademy: Learn React](https://www.codecademy.com/learn/react-101)
- [Egghead.io: A Beginner's Guide to React](https://egghead.io/courses/the-beginner-s-guide-to-react)
- [Udemy: React - The Complete Guide](https://www.udemy.com/course/react-the-complete-guide-incl-redux/)
- [`gh-pages` Docs: Deploying a React App with Github Pages](https://github.com/gitname/react-gh-pages)
- [Dev.to: Deploying a React App with Github Pages](https://dev.to/cenacr007_harsh/deploying-a-react-app-to-github-pages-370)
