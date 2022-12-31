import { UserBuilder } from "../user-builder";

const userBuilder = new UserBuilder();
const user = userBuilder
    .withName("John", "Doe")
    .withEmail("john_doe@test.net")
    .withPassword("secret_password")
    .canCreate()
    .build();

console.log(user);
