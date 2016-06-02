import { Injectable } from '@angular/core';
import { LocalStorage } from 'angular2-localstorage/WebStorage';

export interface IUser {
    firstName: string,
    lastName?: string,
    email?: string,
    widgets?: string[],
    settings?: any,
    wallpaper?: string
}

@Injectable()
export class UserService {
    @LocalStorage() private user: IUser;
    
    constructor() {}
    
    public get(): IUser {
        console.log('returning user', this.user);
        return this.user;
    }
    
    public update(user: IUser): void {
        console.log(`updating ${this.user} with ${user}`);
        this.user = user;
    }
}
