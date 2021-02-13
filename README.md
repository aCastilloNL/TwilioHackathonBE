# La Nurserie

## “A little bit of help with a whole lot of love”

# Twilio / WCS Hackaton Project

Welcome to the repository for the Back-End sector of our group's submission to the second and final official Wild Code School Remote EU 2021 Hackathon, sponsored by Twilio.

![Javascript](https://aleen42.github.io/badges/src/javascript.svg)
![Node](https://github.com/aleen42/badges/blob/master/src/node.svg)
![Express](https://img.shields.io/badge/JS-Express-red)
![MongoDB](https://img.shields.io/badge/db-MongoDB-blue)
![Twilio](https://img.shields.io/badge/API-twilio-red)
![OpenStreetMap](https://img.shields.io/badge/map-OpenStreetMap-green)

## Developed by Wilders

### Back-End Devs:

- Victoria Kulinkovich https://github.com/KulinkovichVA
- Dima Piskun https://github.com/DzmitryPS
- Alfred Castillo https://github.com/aCastilloNL

### Front-End Devs:

Separate repository: https://github.com/JacopoLuri/TwilioHackaton
Deployed Front-end: https://lucid-feynman-60c600.netlify.app/

- Jacopo Luri https://github.com/JacopoLuri
- Jeanloup Cayuela https://github.com/j-loup30400
- Niko Phalen https://github.com/nphalen29

> WebApp created in 48hrs

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

The Hackathon group participants were each tasked with the challenge of developing a product aimed at providing disaster relief for socially impacted areas from our global economy, i.e. climate change, mental health, equal opportunities, and etcetera, within 48 hours.

Using MongoDB, JS, Node, Express, Twilio API and OpenStreetMap as resources, we have concocted a Back-End environment suitable for our project's purpose of providing daycare assistance to parents and guardians alike who are unable to reach tutelage solutions for their offspring.

## La Nurserie

La Nurserie

Are you a parent or guardian? Do you struggle with options of finding who to care for your little ones? Send us a WhatsApp message at La Nurserie! We have the solution for you!

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

### Twilio

To enable whatsapp communication flow:

- set up twilio whatsapp testing sandbox (https://www.twilio.com/docs/whatsapp/sandbox)
- set up twilio studio flow by importing it from twilio/flow.json file
- update http widgets in flow to use correct endpoint (if creating your own deployment)
- set sandbox inbound webhook to value from trigger widget in flow

### Maps (OpenStreetMaps)

Project uses OpenStreetMaps as a Geocoding API provider, it can be replaced by updating options variable in app.js

### Deploy (Heroku)

Project is deployed to Heroku. https://radiant-badlands-42962.herokuapp.com/
When creating your own deployment make sure to set enviroment variables.
