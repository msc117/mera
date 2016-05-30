import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

export interface IMeraTool {
    name: string,
    html: string, // tool html
    inUse?: boolean, // active in user dashboard
    default: boolean, // part of default dashboard
    x?: number, // x-coordinate in grid
    y?: number // y-coordinate in grid
}

@Injectable()
export class ToolService {
    private tools: IMeraTool[] = [
        {
            name: 'clock',
            html: '12:30',
            default: true
        },
        {
            name: 'quote of the day',
            html: `<div>veni, vidi, vici</div>`,
            default: true
        },
        {
            name: 'clock',
            html: '12:30',
            default: true
        }
    ];
    
    constructor() {}
    
    // return list of tools
    public get(): Observable<IMeraTool[]> {
        return Observable.of(this.tools);
    }    
}
