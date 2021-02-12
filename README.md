# La Nurserie

## “A bit of help and a lot of love”

# Twilio / WCS Hackaton Project

Welcome to the repository for the Back-End sector of our group's submission to the second and final official Remote EU 2020 Hackathon, sponsored by Twilio.

![Javascript](https://aleen42.github.io/badges/src/javascript.svg)
![Node](https://github.com/aleen42/badges/blob/master/src/node.svg)
![Express](https://img.shields.io/badge/JS-Express-red)
![MongoDB](https://img.shields.io/badge/db-MongoDB-blue)
![Twilio](https://img.shields.io/badge/API-twilio-red)
![OpenStreetMap](https://img.shields.io/badge/map-OpenStreetMap-green)

## Made by Wilders

### Back-End Members:

- Victoria Kulinkovich https://github.com/KulinkovichVA
- Dima Piskun https://github.com/DzmitryPS
- Alfred Castillo https://github.com/aCastilloNL

### Front-End Members:

(Separate repository: https://github.com/JacopoLuri/TwilioHackaton)

- Jacopo Luri https://github.com/JacopoLuri
- Jeanloup Cayuela https://github.com/j-loup30400
- Niko Phalen https://github.com/nphalen29

> WebApp made in 48 hours

## Install

```
$ npm install
$ cp .env.example .env
$ # set values in .env file

```

## List of Contents

- [Install](#install)
- [List of Contents](#list-of-contents)
- [Purpose](#purpose)
- [La Nurserie](#la-nurserie)
- [Wireframes Packages and Softwares used](#wireframes-packages-and-softwares-used)
- [Documentation](#documentation)

## Purpose

6 developers, 6 friends, 6 full-time learners in our second hackaton experience

## La Nurserie

La Nurserie

## Wireframes, Packages and Softwares used

- Node.js
- Express.js
- Twilio API
- Twilio Studio
- MongoDB
- MongoDB Atlas
- Mongoose
- Node-Geocoder
- Openstreetmap
- Heroku
- Miro

## Documentation

### Maps (OpenStreetMaps)

Project uses OpenStreetMaps as a Geocoding API provider, it can be replaced by updating options variable in app.js

### Deploy (Heroku)

Project is deployed to Heroku. https://radiant-badlands-42962.herokuapp.com/
When creating your own deployment make sure to set enviroment variables.

### Twilio

To enable whatsapp communication flow:

- set up twilio whatsapp testing sandbox (https://www.twilio.com/docs/whatsapp/sandbox)
- set up twilio studio flow by importing it from twilio/flow.json file
- update http widgets in flow to use correct endpoint (if creating your own deployment)
- set sandbox inbound webhook to value from trigger widget in flow
