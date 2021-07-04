function redirectToPage(url, manualRedirectionDiv, dryRun, debugInfo="") {
    if (manualRedirectionDiv) {
        // TODO: The below has no visible effect.
        manualRedirectionDiv.innerHTML = `Redirecting <a href='${url}'>here</a>`;
    }
    if (url && !dryRun) {
        window.location.replace(url + `?debugInfo=${debugInfo}`);
    }
}

