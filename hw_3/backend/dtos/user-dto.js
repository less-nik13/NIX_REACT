export default class UserDto {
    id;
    email;
    name;

    constructor(existingUser) {
        this.id = existingUser.id;
        this.email = existingUser.email;
        this.name = existingUser.name
    }
};