const userService  = require('../services/user.service');
class UserController {

    async registrUser() {
        return await userService.registrUser();
    }

}
module.exports = new UserController();