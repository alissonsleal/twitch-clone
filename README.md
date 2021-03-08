<p align="center">
    <a href="https://github.com/Alissonsleal/twitch-clone/issues"><img alt="GitHub issues" src="https://img.shields.io/github/issues/Alissonsleal/twitch-clone?color=sucess&style=flat-square"></a>
    <a href="https://github.com/Alissonsleal/twitch-clone/network"><img alt="GitHub forks" src="https://img.shields.io/github/forks/Alissonsleal/twitch-clone?color=sucess&style=flat-square"></a>
    <a href="https://github.com/Alissonsleal/twitch-clone/stargazers"><img alt="GitHub stars" src="https://img.shields.io/github/stars/Alissonsleal/twitch-clone?color=sucess&style=flat-square"></a>
    <a href="https://github.com/Alissonsleal/twitch-clone/blob/master/LICENSE"><img alt="GitHub license" src="https://img.shields.io/github/license/Alissonsleal/twitch-clone?color=sucess&style=flat-square"></a>
    <a href="https://github.com/Alissonsleal/"><img alt="Alisson Leal GitHub Profile" src="https://img.shields.io/badge/made%20by-Alisson%20Leal-sucess?style=flat-square&logo=appveyor"></a>
</p>

# Twitch Clone

I made this clone as a coding challenge to join the [Provi](https://provi.com.br/) team.

## The challenge

Your challenge is to clone a page or pages of a product that you love. It can be anything (e.g: Spotify, Netflix, WhatsApp, you name it). Choose a product that you love and surprise us - you can even improve it with a feature that you would like to see.

Check out the live version here: [TwitchClone](https://twitchclone.vercel.app/)

Check out the Challenge Here: [Provi](https://github.com/provicapital/jobs/blob/master/frontend/challenge.md)

## Features

### Front Page

I created the main part of the website, and it's completely responsive to mobile devices.

  <p align="center">
    <img  max-width="768" src="https://i.imgur.com/tbDfTvZ.png">
  </p>
<br />

### Recommended Channels Component

The `<VideoGroup data={[]}/>` component is completely reusable, it only takes a data array from the official Twitch API and shuffles the results (Some sort of recommended channels "algorithm")

  <p align="center">
    <img  max-width="768" src="https://i.imgur.com/mpvTCuY.png">
  </p>
<br />

### Button Component

The `<Button buttonType={'primary'|'secondary'}>Text Inside</Button>` component takes a buttonType property that can be passed as 'primary' or 'secondary', the text inside it will be displayed as the button text.

  <p align="center">
    <img  max-width="768" src="https://i.imgur.com/mhWLZAm.png">
  </p>
<br />

### Lighthouse Performance Score

  <p align="center">
    <img  max-width="768" src="https://i.imgur.com/0bpjPLk.png">
  </p>

## Built With:

- [x] Next.JS
- [x] Typescript
- [x] Axios
- [x] Styled-Components
- [x] TwitchAPI
- [x] Deployed to Vercel

## Disclaimer

This project is in no way affiliated with Twitch Interactive, Inc. Amazon.com, Provi, or any company mentioned on this page.

## Run this locally

To run this project locally, you'll need Node.js installed.

Clone this repo using `git clone https://github.com/Alissonsleal/twitch-clone`

Go into your project directory `cd twitch-clone`

Install dependencies preferably with `yarn` but you can also use `npm install`

Create a .env file in the root of the folder based on .env.example.

Run your Next.JS App with `yarn dev` or `npm run dev`

Go to `localhost:3000` and check out this amazing clone

## Author Info

- Twitter - [@alissonsleal](https://twitter.com/alissonsleal) <i>dms are open</i>
- Discord - [Alisson#0629](https://discord.com/)
- StackOverflow - [Alisson Leal](https://stackoverflow.com/users/14122260/alisson-leal)

[Go to the top 🚀](#twitch-clone)
