import { Injectable } from '@angular/core';
// import { LocalStorage } from 'angular2-loader/WebStorage';

export interface IUser {
    firstName: string,
    lastName?: string,
    email?: string,
    widgets: string[],
    settings: any,
    wallpaper: string
}

@Injectable()
export class UserService {
    private user: IUser;
    // @LocalStorage() private user: User = false;
    
    constructor() {}
    
    public getUser(): IUser {
        return;
    }
    
    public update(user: IUser): void {
        console.log(`updating ${this.user} with ${user}`);
        this.user = user;
    }
}
