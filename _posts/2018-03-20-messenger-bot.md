---
layout: post
title: "Create your own evil robot overlord on Messenger with 6 simple steps"
excerpt: "Build Messenger chatbots easily, with my little 'framework'."
categories: article
tags: [chatbot, republish, tech]
author: nir
comments: true
share: true
created: 2018-03-20
image: /assets/images/blog/2018-03-31/bruce-almighty.gif
---

## Step 1. Create a free server

{% include image.html url="/assets/images/blog/2018-03-31/free-stuff.png" description="#freeServersForTheWin #GlitchFTW" %}

First create a clone of the Evilbot server template:

- Go to https://glitch.com and sign up using GitHub.
- Go to https://glitch.com/~evilbot and click on “Remix your own”.

A server will be created with Evilbot code as a new Glitch project.

## Step 2. Create a Facebook app

{% include image.html url="/assets/images/blog/2018-03-31/aliens.png" description="This photo is extremely completely really related to the subject matter. Not at all a filler meme." %}

Go to https://developers.facebook.com.

Register as a developer on Facebook.

- Create a new app and give it a name and an email address^
- Inside the app, click “Set up” in the “Messenger” card.
- In the “Token Generation” section, click “Create a new page” to create a page for the bot as its profile.

^ You can use the same Gmail address for multiple apps. Simply add a tag after a “+”, as in “yourname+app1@gmail.com”

## Step 3. Connect Fb app to Glitch app

{% include image.html url="/assets/images/blog/2018-03-31/morpheus.jpeg" description="Another totally relevant meme" %}

In the dashboard of the created app,

- Select the created page
- Copy the “Page Access Token” value to the .env file in the Glitch project, for `PAGE_ACCESS_TOKEN=.`
- Click “Setup Webhooks” in the “Webhooks” section.
- Add `https://APPNAME.glitch.me` where APPNAME is the project url ID in the Glitch project. This URL is the server you’re going to be programming.
- In “Verify Token”, enter a token of your choice: e.g. “myrandomtoken”.
- Put the same verify token in the .env file, next to `VERIFY_TOKEN=.`
- In “Subscription Fields”, check `messages` and `messaging_postbacks` for now.
- Enable NLP in the “Built-In NLP” section.

## Step 4. Add Test Users

{% include image.html url="/assets/images/blog/2018-03-31/thanks.png" description="Testing is vital to developing a bot that’s actually useful" %}

In the Facebook app dashboard,

- Select “Roles” on the left-side menu.
- In the submenu, select “Roles”… again.
- Add your friends into any role, so that they can use the bot from Messenger.

## Step 5. Program the bot

{% include image.html url="/assets/images/blog/2018-03-31/bruce-almighty.gif" description="Testing is vital to developing a bot that’s actually useful" %}

In the Glitch project,

- Open the bot.js file and edit it to change the program.
- You can split the logic and code into separate .js files and import them with `require(..).`
- Consult the Evilbot Wiki on Github at https://github.com/EmblaTech/evilbot/wiki.

## Step 6. Profit!!

{% include image.html url="/assets/images/blog/2018-03-31/success.png" description="Step 6: PROFIT $$$" %}