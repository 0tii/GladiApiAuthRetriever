# ⚔️🔓 GladiApi Auth Retriever

A cross-browser extension to retrieve an auth object for a logged-in gladiatus character. Firefox support is nightly, as manifest V3 is, too.

## Install
Chrome has made it almost impossible to install third-party extensions that are not on the web store (with a convenient 5€ developer fee).

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

*Firefox has to reimport the plugin on each start, as support for MV3 is nightly.

## How to use
Start the game in your browser and log into your character. 

Once logged in, select the extension from the extension list and click it. The extension window will open and present you with an "export" button, which will download the characters auth object as a `.gao` (**g**ladiatus **a**uth **o**bject) file.

That auth object can then be used to authenticate a **[GladiApi](https://github.com/0tii/GladiatusApi)** character, until you log into that character from a different browser.

For instructions how to use the auth object to authenticate, refer to the [GladiApi](https://github.com/0tii/GladiatusApi) doc.

## Screenshot
![screenshot](https://i.imgur.com/3SVxlHH.png)