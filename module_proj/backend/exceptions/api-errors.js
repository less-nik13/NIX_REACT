export default class ApiError extends Error {
    status;

    constructor(status, message) {
        super(message);
        this.status = status;
    }

    static UnauthorizedError() {
        return new ApiError(401, 'User not authorized')
    }

    static ForbiddenError() {
        return new ApiError(403, 'You don`t have permission for this operation')
    }

    static BadRequest(message) {
        return new ApiError(400, message)
    }
}