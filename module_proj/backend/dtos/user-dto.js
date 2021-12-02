export default class UserDto {
    id;
    email;
    name;
    createdAt;

    constructor(existingUser) {
        this.id = existingUser.id;
        this.email = existingUser.email;
        this.name = existingUser.name;
        this.createdAt = existingUser.createdAt;
    }
};