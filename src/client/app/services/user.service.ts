import {Injectable} from 'angular2/core';

export interface IUser {
    firstName: string,
    lastName: string,
    email: string
}

@Injectable()
export class UserService {
    private user: IUser;

    constructor() {
        this.get();
    }

    get() {
        let promise = new Promise((resolve, reject) => {
            //   TODO (msantos) ajax call to grab user.json
            resolve({ data: { firstName: 'asdf', lastName: 'asfd', email: 'asdf@asdf.com' } });
        });

        return promise;
    }
}
