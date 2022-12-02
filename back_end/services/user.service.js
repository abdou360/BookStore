const userRepository  = require('../repository/user.repository');

class UserService {

    constructor() {}

    async registrUser() {
        return await userRepository.registrUser();
    }
}

module.exports = new UserService();