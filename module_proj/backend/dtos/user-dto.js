export default class UserDto {
    id;
    email;
    name;
    createdAt;
    favorites;

    constructor(existingUser) {
        this.id = existingUser.id;
        this.email = existingUser.email;
        this.name = existingUser.name;
        this.favorites = existingUser.favorites;
        this.createdAt = existingUser.createdAt;
    }
};