# ⚔️🔓 GladiatusApi Auth Retriever

A cross-browser extension to retrieve an authentication object for a gladiatus character.

## What is this about?
Due to limitations such as captchas, [GladiatusApi](https://github.com/0tii/GladiatusApi) can not automatically retrieve player data and authenticate against gameforge servers. Bypassing captcha would be an endless cat-and-mouse-game which I am not willing to even attempt.

It is, however, possible to authenticate as a character with http requests only, by using the cookie and session hash of a character logged into a browser. That requires manually getting the cookie, session hash and server id every time you switch browsers or log in from a different location (as that generates a new session hash and, within the cookie, a new session id).

With this extension it's as simple as pressing a button and saving the auth object, then importing that and passing it to the character constructor/factory. Using a designated target folder to save the file to makes this even more streamlined.

## Install
Chromium has made it almost impossible to install third-party extensions that are not on the web store (with a convenient 5€ developer fee), so you have to install this extension via **developer mode**.

**Chrome**:
- Download the source
- Navigate to Settings -> Extensions
- In the very top right enable Developer Mode
- Select 'Load unpacked'
- Select the folder containing the source

**Edge**:
- Download the source
- Navigate **...** -> Extensions
- Manage Extensions
- Turn on developer mode
- Select 'Load unpacked'
- Select the folder containing the source

**Firefox***:
- Head to about:config
- Search for `extensions.manifestV3.enabled` and set to `true`
- Search for `xpinstall.signatures.required` and set to `false`
(^ this allows us to load manifest v3 extensions)
- Head to Settings -> Extensions & Themes
- Gear-Icon -> Debug Addons
- Select 'Load Temporary Add-on'
- Select the manifest.json file from the downloaded source

*Firefox users have to reimport the plugin on each start, as support for manifest V3 is nightly.

## Screenshot
![screenshot](https://i.imgur.com/tiiKzmG.png)

## How to use
Log into your character in your browser. 

While on the game tab, select the extension from the extension list and click it. The extension window (*see screenshot*) will open and present you with an "export" button, which will download the characters auth object as a `.gao` (**g**ladiatus **a**uth **o**bject) file.

Optionally you can enter a password in the input text field which will be used to encrypt your authentication data with.

That auth object can then be used to authenticate a **[GladiatusApi](https://github.com/0tii/GladiatusApi)** character, until you log into that character from a different browser.

For instructions how to use the auth object to authenticate, refer to the [GladiatusApi](https://github.com/0tii/GladiatusApi) doc.