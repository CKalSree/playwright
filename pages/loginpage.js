export class LoginPage {

    constructor(page) {
        this.page = page;
    }

    async login(user,password) {

        await this.page.fill(
            "#username",
            user
        );

        await this.page.fill(
            "#password",
            password
        );

        await this.page.click(
            "#login"
        );
    }
}