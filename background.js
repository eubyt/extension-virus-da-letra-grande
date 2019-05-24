var ativo = false;
const VirusDaLetraGrande = (tabId, changeInfo, tab) => {

    if (!tab.url.match('twitch.tv')) return;
    if (ativo) return;

    chrome.tabs.executeScript(tabId, {
      code: `
      window.onload = () => {

        function VirusDaLetraGrande(e)
        {
            if (e.target.dataset.aTarget !== "chat-input") return;

                e.target.value = e.target.value.toUpperCase();
                e.target.setSelectionRange(e.target.selectionStart, e.target.selectionEnd);
        }

        window.addEventListener('keydown', VirusDaLetraGrande, false);
        window.addEventListener('keyup', VirusDaLetraGrande, false);
    };
      `,
      runAt: 'document_start'
    }, function(results) {

    });

    ativo = true;
};
chrome.tabs.onUpdated.addListener(VirusDaLetraGrande);


