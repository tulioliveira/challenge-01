# Simple API Challenge

<p align="center">
  <img src="https://github.com/tulioliveira/challenge-01/blob/master/screenshot.png?raw=true" alt="Screenshot"/>
</p>

This challenge consists in creating a simple REST API to fit an existing Todos app that supports reading, creating, editing and deleting todos.

The code used to interact with the API can be found in `webapp/api.js`. Use that as reference to how data is being handled in the frontend.

The API should run on `Port 3000` so that the webapp can communicate with it without changes.

Feel free to run the webapp and check how calls are made. There's a version without API to show how the application's final UX should be.

The API can be done with any language/framework/library that you prefer, but a starter project with `Express` has already been created in the `api` folder for convenience.

## Bonus
Static type checking is a very important feature in programming, as it allow for developers to quickly assess what type of data is being handled in the system.

If you have the knowledge and feels comfortable with it, it would be a plus to have static type checking in your API.

Since time is short, you can point out with comments how you would add type checking for the API.


## Requirements
You should have `node` and `npm` or `yarn` installed.

Clone the repo and run `yarn` to install dependencies in the root, `webapp`, and `api` folders.

## Running the webapp

After cloning this repo
```
cd webapp && npm start // or yarn start
```

## Running the API

After cloning this repo
```
cd api && npm run start // or yarn start
```