document.getElementById('exportAuth').addEventListener('click', exportAuth);

function exportAuth() {
    var cookie = "", sh = "", serverId = "";

    chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
        let url = tabs[0].url;

        if (!url.includes("gladiatus.gameforge.com/game/index.php")) {
            alert("Please use this extension only on a logged-in gladiatus character tab.");
            return;
        }

        //read session hash and server id from url
        sh = url.substring(url.indexOf("&sh=") + 4, url.indexOf("&sh=") + 36);
        serverId = url.substring(url.indexOf("://") + 3, url.indexOf(".gladiatus.gameforge"));

        //get all cookies, concatenate them into valid request format, then start download
        chrome.cookies.getAll({ url }, cookies => {
            for (const c of cookies) {
                let keyVal = c.name + "=" + c.value + "; ";
                cookie += keyVal;
            }
            exportFile(cookie.trim(), sh, serverId);
        });
    });
}

function exportFile(cookie, sh, serverId) {
    //prepare format and encrypt to b64
    var content = serverId + "||" + cookie + "||" + sh;
    content = btoa(content);

    //create file and download
    var blob = new Blob([content], { type: "application/octet-stream" });
    var url = URL.createObjectURL(blob);
    chrome.downloads.download({
        url: url, // The object URL can be used as download URL
        filename: `${sh}.gao`,
        saveAs: true
    });
}

