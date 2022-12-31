import { Builder } from "./builder";
import { User } from "./user";

const emptyState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    canDelete: false,
    canCreate: false,
    canUpdate: false,
    canRead: false,
};

type UserProps = typeof emptyState;

export class UserBuilder implements Builder {
    private userProps: UserProps = emptyState;

    constructor() {
        this.reset();
    }

    reset(): void {
        this.userProps = emptyState;
    }

    withEmail(email: string): Builder {
        this.userProps.email = email;
        return this;
    }

    withName(firstName: string, lastName: string): Builder {
        this.userProps.firstName = firstName;
        this.userProps.lastName = lastName;
        return this;
    }

    withPassword(passwd: string): Builder {
        this.userProps.password = passwd;
        return this;
    }

    canCreate(): Builder {
        this.userProps.canCreate = true;
        return this;
    }

    canUpdate(): Builder {
        this.userProps.canUpdate = true;
        return this;
    }

    canRead(): Builder {
        this.userProps.canRead = true;
        return this;
    }

    canDelete(): Builder {
        this.userProps.canDelete = true;
        return this;
    }

    build(): User {
        return new User(
            this.userProps.firstName,
            this.userProps.lastName,
            this.userProps.email,
            this.userProps.password,
            this.userProps.canDelete,
            this.userProps.canCreate,
            this.userProps.canUpdate,
            this.userProps.canRead
        );
    }
}
