// background.js - Manifest V3 Background Service Worker

function getTimeSince(range) {
  const now = Date.now();
  switch (range) {
    case 'hour': return now - (1000 * 60 * 60);
    case '24h': return now - (1000 * 60 * 60 * 24);
    case '7d': return now - (1000 * 60 * 60 * 24 * 7);
    case '4w': return now - (1000 * 60 * 60 * 24 * 28);
    case 'everything': default: return 0;
  }
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'CLEAR_DATA') {
    const { options, whitelist = [] } = request;
    const since = getTimeSince(options.timeRange);

    const removalOptions = { since };

    // Protect Whitelisted Domains if present
    if (whitelist.length > 0) {
      removalOptions.excludeOrigins = whitelist.map((domain) => {
        return domain.startsWith('http') ? domain : `https://${domain}`;
      });
    }

    const dataTypes = {
      cache: !!options.cache,
      cookies: !!options.cookies,
      localStorage: !!options.localStorage,
      formData: !!options.formData,
      history: !!options.history,
      downloads: !!options.downloads,
      passwords: !!options.passwords
    };

    chrome.browsingData.remove(removalOptions, dataTypes, () => {
      sendResponse({ status: 'success' });
    });

    return true; // Keep message channel open for async response
  }
});

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === 'autoClearStartup') {
    chrome.browsingData.removeCache({});
  }
});