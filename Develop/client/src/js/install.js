const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA

window.addEventListener('beforeinstallprompt', (event) => {});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {});
//Pre-Install handler
window.addEventListener('beforeinstallprompt', (event) => {
window.defferedPrompt = event;
butInstall.classList.toggle('hidden', false);
});
// OnClick handler
nutInstall.addEventListener('click', (event) => {
    const promptEvent = window.defferedPrompt;
    if  (!promptEvent) {
        return;
    }
    promptEvent.prompt();
    window.defferedPrompt = null;
    butInstall.classList.toggle('hidden', true);
});

//Post-Install handler
window.addEventListener('appInstalled', (event) => {
    window.defferedPrompt = null;
});
