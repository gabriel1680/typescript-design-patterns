import { User } from "./user";

export interface Builder {
    reset(): void;
    build(): User;
    withEmail(email: string): Builder;
    withName(firstName: string, lastName: string): Builder;
    withPassword(passwd: string): Builder;
    canCreate(): Builder;
    canUpdate(): Builder;
    canRead(): Builder;
    canDelete(): Builder;
}
