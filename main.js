const gaoVersion = '0.1';

document.getElementById('exportAuth').addEventListener('click', exportAuth);

function exportAuth() {
    var cookie = '', sh = '', serverId = '', userAgent ='';

    chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
        let url = tabs[0].url;

        if (!url.includes('gladiatus.gameforge.com/game/index.php')) {
            alert('Please use this extension only on a logged-in gladiatus character tab.');
            return;
        }

        chrome.tabs.sendMessage(tabs[0].id, { query: 'userAgent' }, function (response) {
            
            if (!response || !response.result) {
                alert('Could not communicate with gladiatus page. Please reload the page and try again.');
            }

            //read session hash, server id from url & get userAgent from content script
            sh = url.substring(url.indexOf('&sh=') + 4, url.indexOf('&sh=') + 36);
            serverId = url.substring(url.indexOf('://') + 3, url.indexOf('.gladiatus.gameforge'));
            userAgent = response.result;

            //get all cookies, concatenate them into valid request format, then start download
            chrome.cookies.getAll({ url }, cookies => {
                for (const c of cookies) {
                    let keyVal = c.name + '=' + c.value + '; ';
                    cookie += keyVal;
                }
                exportFile(cookie.trim(), sh, serverId, userAgent);
            });
        });
    });
}

function exportFile(cookie, sh, serverId, userAgent) {
    //prepare format and encrypt to b64
    let content = gaoVersion + '||' + serverId + '||' + cookie + '||' + sh + '||' + userAgent;
    content = btoa(content);

    //(optional) encrypt with password
    let pass = document.getElementById('password').value;
    if (pass !== '' && pass !== undefined && pass !== null){
        alert(`pass: ${pass}`);
        content = encrypt(content, pass);
    }

    //create file and download
    const blob = new Blob([content], { type: 'application/octet-stream' });
    const url = URL.createObjectURL(blob);
    chrome.downloads.download({
        url: url,
        filename: `${sh}.gao`,
        saveAs: true
    });
}