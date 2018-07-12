---
layout: post
title: "Introduction to Mobile Development Over Multiple Platforms With React Native And Expo"
subtitle: "This is the start of a series of tutorials on cross-platform mobile development with React Native and Expo."
excerpt: "Introduction to cross-platform mobile app development with React Native (series)"
categories: article
tags: [javascript, mobile, react-native, code, tutorial, tech]
author: nir
comments: true
share: true
created: 2018-07-07
image: /assets/images/blog/2018-07/react-native-expo-cover.png
image_ext: .png
featured: true
hidden: true
---

You can [skip to the series outline](#outline) at the end of the post.

---

## Introduction to cross-platform mobile development {% include anchor.html id="intro" %}

For developing mobile applications for both Android and iOS, the languages recommended by the OS vendors are Kotlyn/Java and Swift. If these technologies were used, developers will need to maintain two separate code-bases for each platform. They'd also have to implement the same functionality on both code-bases separately, twice. This is contrasted with web development, where a single thread of development is usually sufficient for any platform.

In addition, similar concepts have subtle but important differences on each platform. This includes differences in UI concepts like screens/activities and buttons, lower-level system APIs like Geo-location and camera.

The developers also had to learn, debug and test two technologies, which made it impossible to focus on and become experts on a single base technology with a good learning and efficiency curve.

To solve the issue of productivity and lack of abstraction of concepts, several mechanisms were introduced at different points. The first of such efforts was **Cordova** (by Apache) and **Ionic**. They make use of a simple and minimal "container" app developed in either Java/Kotlyn or Swift that runs a local HTML/Javascript website abstracts system APIs through a new common API.

{% include image.html url="/assets/images/blog/2018-07/ionic-customers.png" description="A large number of popular and domain-specific apps are built with Ionic" %}

This new philosophy in Cordova/Ionic can be called _write-once-build-everywhere_, as the same codebase is built over different build-chains and tools to create different build targets, i.e. binaries. 

> The philosophy behind Ionic is called **write-once-build-everywhere**

Later, **React Native** was introduced (by Facebook) as a possible alternative to Cordova/Ionic. Instead of a WebView component to run a local website, it employed an abstracting concept in the original React to bypass HTML/Javascript and create native UI components on-the-fly.

React Native was able to solved issues in developing on Cordova/Ionic such as,
- Performance and memory-efficiency (web-technology abstractions and native WebView UI component limitations)
- Having to re-implement every UI control on HTML/Javascript
- Inability to use existing or new native code

Creating complex UIs and workflows that are easily faster and more memory-efficient was a huge reason for it to become popular. React's own mechanisms of efficiently rendering UI changes with a virtual DOM is another reason for React Native UIs being fast. While app logic and rendering logic is written in Javascript, it barely makes a performance difference to native code.

React Native also made it much easier and straight-forward to implement new interfacing with native APIs for the end developers. In addition, React Native also became a framework for combining existing separate platform-specific codebases into a single codebase.

> React Native helps combine existing codebases for different platforms into a single codebase

{% include image.html url="/assets/images/blog/2018-07/react-native-users.png" description="❝Thousands of apps are using React Native, from established Fortune 500 companies to hot new startups❞" %}

_**Flutter** is another cross-platform development technology recently introduced (by Google), which is not considered in this article. We'll discuss it at a later time._

## _Write-once-**run**-everywhere_ with React Native {% include anchor.html id="expo" %}

Both Cordova/Ionic and React Native are different to the _write-once-run-everywhere_ concept in Oracle Java. In Java, the same _bytecode_ files created in a single build can run on any platform. This is made possible by the Java Virtual Machine that acts as a middle layer between platform and app. With Cordova/Ionic or React Native, usually, the developer has to build twice for both Android and iOS, separately.

Ionic very recently came up with a solution by providing an online service that builds the app for both Android and iOS for separately-given certificates and configurations. While React Native didn't focus on this, a separate organization called **Expo** created such a service for free.

Still, building separately for both platforms on every new change and testing continues to be a hassle. The solution for this from Ionic is the Ionic View app, and later the Ionic Dev app, as well as the Expo app. The developer can build an easily testable version of target servable over a network, without using or even installing Android or iOS SDKs. Then, using Ionic View/Ionic Dev or Expo apps running on either an emulator, or a mobile on the same (WiFi) network as the developer's machine, testing the app is possible. 

> Ionic View, Ionic Dev and Expo apps make testing and prototyping of cross-plarform mobile apps a breeze

This mechanism supports most app requirements, but does have certain limitations. However this ease in development and testing made it a popular part in cross-platform mobile app development workflows.

---

## Outline of this series {% include anchor.html id="outline" %}

1. 	**Create and run simple Expo app** <br>On emulators and physical phones
1. 	**Creating and using standard UI components**
1. 	**Navigation and screens** <br>Tab navigation, communicating state, creating screens
1. 	**Handling camera** <br>For face-recognition with Microsoft Cognitive Services
1. 	**Using Google Maps** <br>With multiple routes, labels, markers, shapes, etc.
1. 	**Structuring complex Expo apps**
1. 	**Building for Android**
1. 	**Building for iOS**
1. 	**Publishing to Android App Store**
1. 	**Publishing to iOS App Store**

The order is open for change, depending on your suggestions. There will be multiple articles covering this series.