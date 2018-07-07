---
layout: post
title: "Cooler PowerShell prompt"
excerpt: "Changing Powershell's prompt by adding a profile... with bonus: aliases!"
categories: article
tags: [windows, shell, code, config, tech]
author: nir
comments: true
share: true
created: 2017-01-18
modified: 2017-01-19
image: /assets/images/blog/powershell-prompt.PNG
featured: false
---

Like for bash or any other \*ix shell, we can create profiles with shell configurations for PowerShell.

```sh
new-item -itemtype file -path $profile -force
notepad $PROFILE
```

Obviously, this opens the newly created profile item (at `$profile`) in Notepad. Just type and save! :simple_smile:

## Cool prompt

```sh
function Prompt
{
    $id = 1
    $historyItem = Get-History -Count 1
    if($historyItem)
    {
       $id = $historyItem.Id + 1
    }

    Write-Host -ForegroundColor Green -NoNewLine "$id "
    Write-Host -ForegroundColor Gray -NoNewLine "$(Get-Location) "
    $host.UI.RawUI.WindowTitle = "PS $(Get-Location)"

    "$ "
}
```

This creates a number-tagged prompt for re-using old commands with a simple dollar sign instead of the greater-than symbol that always confuses me... with a tiny bit of color.

I believe the code is quite self-explanatory, but if you find it to be confusing, let me know in the comments.

You'll probably find my example prompt to be kinda boring, but you can see the possibilities and change stuff in the ways you find the coolest and more usefull.

## Bonus: aliases and other stuff! :smile:

We can set the default starting directory:

```sh
set-location e:\dev
```

Add an alias:

```sh
new-item alias:np -value C:WindowsSystem32notepad.exe
```

Remove all stuff from the shell:

```sh
Clear-Host
```

Change the shell colors:

```sh
$shell.BackgroundColor = “Gray”
$shell.ForegroundColor = “Black”
```

Set window size, buffer size:

```sh
$Shell = $Host.UI.RawUI
$size = $Shell.WindowSize
$size.width=70
$size.height=25
$Shell.WindowSize = $size
$size = $Shell.BufferSize
$size.width=70
$size.height=5000
$Shell.BufferSize = $size
```

---

Why not share your awesome and useful profiles with us in the comments?! :wink: