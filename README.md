<h3 align="center">
    <img src="./.github/letmeaskLogoPng.png" alt="Letmeask" />
    <br><br>
    <b>Letmeask, ask me anything.</b>  
    <br>
</h3>

# Index

- [About](#about)
- [Functionalities](#functionalities)
- [Technologies](#technologies)
- [Preview Web](#preview-web)
- [Preview Mobile](#preview-mobile)
- [How to use](#how-to-use)
- [How to contribute](#how-to-contribute)

<br>

<a id="about"></a>

## :bookmark: About

<strong>Letmeask</strong> is a realtime web application and to create rooms of Q&A.

This application was made during the <strong>Next Level Week - Together</strong> promoted by [Rocketseat](https://rocketseat.com.br/). 
The app was made to help people to combine questions organized by room. Inside each room, the admin can: highlight, answer and delete questions made in real-time!

<br>

<a id="functionalities"></a>

## :dart: Functionalities

<br>

- Users:
  - [x] Login using Google account.
  - [x] Create a new room.
  - [x] Manage room as administrator.
  - [x] Enter in an existed room using the room code.

- Admin:
  - [x] Highlight question.
  - [x] Check question as answered.
  - [x] Delete question.
  - [x] Close room.
  
<br>

<a id="technologies"></a>

## :rocket: Technologies

The project is made with:

- [ReactJS](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Firebase Auth](https://firebase.google.com/)
- [Firebase Realtime Database](https://firebase.google.com/)

<br>

<a id="preview-web"></a>

## :heavy_check_mark: :computer: Web

<h1 align="center">
    <img alt="Web" src=".github/happy_web.gif" width="900px">
</h1>

<br>

<a id="how-to-use"></a>

## :fire: How to Use

- ### **Dependencies**

  - Is **required** to install **[Node.js](https://nodejs.org/en/)**
  - In order to run scripts and install dependencies you need to install a **package manager** (ie: **[YARN](https://yarnpkg.com/)**).

  <br>

1. First step, clone this github repository:

```sh
  $ git clone https://github.com/dpisati/letmeask.git
```

2. Run the application:

```sh
  # Install dependencies for each folder: mobile, server, web.
  $ yarn

  # Run the app on localhost.
  $ yarn start
```

3. Setup an firebase, using auth and realtime database. [Firebase](https://firebase.google.com/):

The **web** application requires a few **tokens** from Firebase. To be able to get those, create a new project on Firebase. Go to the web project and setting to be able to generate the variables listed below.

Example:

File: `letmeask/.env.local`

Content:

```text
REACT_APP_API_KEY
REACT_APP_AUTH_DOMAIN
REACT_APP_DATABASE_URL
REACT_APP_PROJECT_ID
REACT_APP_STORAGE_BUCKET
REACT_APP_MESSAGING_ID
REACT_APP_APP_ID
```

<br>

<a id="how-to-contribute"></a>

## :recycle: How to Contribute

- Create a Fork from this repo,
- Create a branch with your feature: `git checkout -b my-feature`
- Commit changes: `git commit -m 'feat: My new feature'`
- Push to your branch: `git push origin my-feature`