class InstagramLoginPage {
    get userNameFieldXpath() { return $(`//input[@name='username']`) }
    get passwordFieldXpath() { return $(`//input[@name='password']`) }
    get submitButtonXpath() { return $(`//button[@type='submit']`) }
}


export { InstagramLoginPage }