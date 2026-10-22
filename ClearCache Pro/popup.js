// popup.js - Handles extension UI events and talks to background.js

document.addEventListener('DOMContentLoaded', async () => {
  const btnClear = document.getElementById('btn-quick-clear');
  const timeRange = document.getElementById('time-range');
  const inputWhitelist = document.getElementById('whitelist-input');
  const btnAddWhitelist = document.getElementById('btn-add-whitelist');
  const whitelistList = document.getElementById('whitelist-list');

  // Load saved settings
  const { whitelist = ['github.com', 'google.com'] } = await chrome.storage.sync.get('whitelist');
  renderWhitelist(whitelist);

  // Quick Clear Handler
  btnClear.addEventListener('click', async () => {
    const options = {
      cache: document.getElementById('chk-cache').checked,
      cookies: document.getElementById('chk-cookies').checked,
      localStorage: document.getElementById('chk-localStorage').checked,
      history: document.getElementById('chk-history').checked,
      downloads: document.getElementById('chk-downloads').checked,
      formData: document.getElementById('chk-formData').checked,
      passwords: document.getElementById('chk-passwords').checked,
      timeRange: timeRange.value
    };

    const { whitelist = [] } = await chrome.storage.sync.get('whitelist');

    btnClear.innerText = 'Clearing...';
    btnClear.disabled = true;

    // Send Message to Background Worker with whitelist attached
    chrome.runtime.sendMessage({ action: 'CLEAR_DATA', options, whitelist }, (response) => {
      setTimeout(() => {
        btnClear.innerText = 'Cleared Successfully!';
        setTimeout(() => {
          btnClear.innerText = 'Quick Clear Now';
          btnClear.disabled = false;
        }, 1500);
      }, 400);
    });
  });

  // Whitelist Add Handler
  btnAddWhitelist.addEventListener('click', async () => {
    const val = inputWhitelist.value.trim().toLowerCase();
    if (!val) return;
    const { whitelist = [] } = await chrome.storage.sync.get('whitelist');
    if (!whitelist.includes(val)) {
      const updated = [...whitelist, val];
      await chrome.storage.sync.set({ whitelist: updated });
      renderWhitelist(updated);
      inputWhitelist.value = '';
    }
  });

  function renderWhitelist(items) {
    whitelistList.innerHTML = '';
    items.forEach((domain) => {
      const tag = document.createElement('span');
      tag.className = 'tag';
      tag.innerHTML = `<span>${domain}</span><button data-domain="${domain}">×</button>`;
      tag.querySelector('button').addEventListener('click', () => removeWhitelist(domain));
      whitelistList.appendChild(tag);
    });
  }

  async function removeWhitelist(domain) {
    const { whitelist = [] } = await chrome.storage.sync.get('whitelist');
    const updated = whitelist.filter((d) => d !== domain);
    await chrome.storage.sync.set({ whitelist: updated });
    renderWhitelist(updated);
  }
});