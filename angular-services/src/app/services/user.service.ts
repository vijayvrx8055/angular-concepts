import { User } from "../models/user.model";

export class UserService {

    users: User[] | undefined;
    constructor() {

        //dummy data
        this.users = [
            new User("Vijay", "vij123@gmail.com", "Fullstack Developer"),
            new User("Ankit", "ankit@gmail.com", "Java Developer"),
            new User("Ramu", "Ramu@gmail.com", "Angular Developer"),
            new User("Priya", "Priya@gmail.com", "React Developer"),
        ]
    }

    //returns user list
    getUsers(): User[] | undefined {
        return this.users;
    }
}