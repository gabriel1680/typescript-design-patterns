export class User {
    constructor(
        readonly firstName: string,
        readonly lastName: string,
        readonly email: string,
        readonly password: string,
        readonly canDelete: boolean,
        readonly canCreate: boolean,
        readonly canUpdate: boolean,
        readonly canRead: boolean
    ) {}
}
