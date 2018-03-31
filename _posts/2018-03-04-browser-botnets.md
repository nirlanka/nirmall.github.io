---
layout: post
title: "Browser-based supercomputers: the evil and the good"
excerpt: "Hackers are focusing on more than just your personal details: they want your power!"
categories: article
tags: [security, republish, tech, web]
author: nir
comments: true
share: true
modified: 2018-03-04
image:
  feature: blog/2018-03-04/dark-side-vs-light.jpeg
  thumb: blog/2018-03-04/dark-side-vs-light.jpeg
  credit: Unknown
  creditlink: 
---

{% include image.html url="/images/blog/2018-03-31/dark-side-vs-light.jpeg" description="The dark side vs the light: the eternal struggle" %}

# Browser-based supercomputers: the evil and the good

Viruses and hackers have created a modern norm of paranoia in everyone who uses a modern electronic gadget, may it be a computer, a phone, a wrist-watch or the refrigerator at home. To add to the validity of that paranoia, from time to time, whole new areas of technical possibilities and trends open up with new dimensions of cyber threats.

Every known cyber threat can be categorized by the intent behind it. The most frequent motives we encounter are identity theft, espionage and sabotage. Numerous methods of prevention have been explored and utilized to prevent such attacks.

But the list of possible intentions behind attacks doesn’t end there. There’s another possibility of such an intention: stealing processing power.

Every time we install an application we rely on its developers and distributors to be transparent about the exact nature and activities of that application. But unless it’s open-source, and we built it from trusted code by ourselves, can we really be sure of its transparency?

The same issue exists for websites. With Web 2.0 being the norm today, almost every web site requires users’ default consent to allow the execution of arbitrary javascript on their browser.

While all major browser vendors continue to strengthen the security of their products, the undeniable fact is that they can’t — as of yet — discriminate against website code based on intention alone. In other words, there’s nothing to stop a website doing unnecessary mathematical calculations in the background that has very little to do with the website’s advertised purpose.

This issue isn’t only prevalent to websites: any code that can execute on top of a web browser can exploit the users’ processing power for their own gain, without actually — arguably — being malicious.

Distributed computing on consumer devices over the web isn’t new. SETI@Home, a program that allows users to contribute computing resources to process data for the search for extra-terrestrial life is a great example for it. There are many other projects utilize “volunteer computing” for noble causes, with users’ explicit consent.

{% include image.html url="/images/blog/2018-03-31/seti-home-project.png" description="The SETI@Home project was a pioneer of distributed supercomputer technology" %}

Another example of distributed computing is cryptocurrency mining. Such processes can easily run over web browsers as parts of the website. They are sometimes initiated by the users themselves for a share of the loot; and some non-profit websites can employ this as a way of allowing the users to fund their infrastructure.

But the worst of the lot simply steal unsuspecting users’ processing power through interactive advertisements on popular sites. Coinhive is the most frequent example I’ve encountered that does this. See [this article by Robert Putt](https://www.robertputt.co.uk/distributed-mining-in-the-browser.html) and [this article by Brannon Dorsey](https://medium.com/@brannondorsey/browser-as-botnet-or-the-coming-war-on-your-web-browser-be920c4f718) for some great insights and a proof-of-concept experiment on this.

The effectiveness of employing browsers to perform distributed computations has been improved with the arrival of asm.js, and more recently WebAssembly that help developers deliver binary-level code to the browser with the consequence of faster execution.

Fortunately, popular and famous web applications are not likely to exploit user in such ways, because they integrity will be on the line. Security researchers and curious hackers are eyeing each and every piece of code that run on such applications and websites.

But that doesn’t affect websites that have nothing to lose. A lot of rather obscure pornographic websites are already exploiting their viewers with coin mining. Websites with pirated content will exploit this possibility, as some already have, one of the examples being PirateBay. The era of link-baiting and scamming could very well be replaced by similar exploitations.

{% include image.html url="/images/blog/2018-03-31/piratebay.jpeg" description="PirateBay was caught secretly running a Coinhive miner" %}

However, there are a few key shortcomings these con sites have to face, with the most prominent issue being the time of execution. If a user is not likely to stay on a website for a sufficient time, the component of calculation expected to complete on that user will have to be redone somewhere else, requiring redundancy.

Ad agencies need to take responsibility in not allowing anything other than markup and content in the ads they distribute. It would also help if browser vendors made it easier for users to allow code only on trusted websites and took measures to automatically monitor and block suspicious tabs or code in them.

There are browser extensions like minerBlock that help stop known miners. In addition to them, users must keep an eye on their device’s CPU usage trends to catch suspicious situations. [This article from The Next Web](https://thenextweb.com/apps/2017/09/19/cpu-cryptocurrency-miner-blocker/) gives similar advice with great insight.

On the other hand, genuine websites can actually use this possibility to borrow users’ resources, with their explicit consent. It may be projects like the afore-mentioned SETI@Home or Wikipedia that are doing a service to the world. Even PirateBay can ask its users’ permission to run such miners on their browsers, rather than doing it in stealth.

It’s worth mentioning that there are exciting technologies being built with this concept like WebTorrent, which basically allows users to contribute to the content delivery of non-profit websites. Imagine a YouTube powered by its own users without corporate propaganda and without silencing of free-speech.

I’m looking forward to the great noble possibilities this concept can bring, and watching out for the evil that can exploit this.

I’d love to hear your thoughts about this and continue a discussion. :-)