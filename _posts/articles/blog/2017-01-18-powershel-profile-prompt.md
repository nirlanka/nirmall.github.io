---
layout: post
title: "PowerShell"
excerpt: "Introduction to test-driven development philosophy and hands-on experience with Python 2.7 and Nose testing framework"
categories: blog
tags: [windows, code, config, tech]
author: nir
comments: true
share: true
modified: 2017-01-11
---

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
