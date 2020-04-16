class InstagramMainPage {
    get turnOnNatificationsAlert() {return $(`//*[contains(text(), 'Not Now')]`) }
}

export { InstagramMainPage }