import { Injectable } from '@angular/core';

export interface IMeraTool {
    name: string,
    html: string, // tool html
    inUse?: boolean, // active in user dashboard
    default: boolean, // part of default dashboard
    x?: number, // x-coordinate in grid
    y?: number // y-coordinate in grid
}

@Injectable()
export class ToolsService {
    private tools: IMeraTool[] = [
        {
            name: 'clock',
            html: '12:30',
            default: true
        },
        {
            name: 'quote of the day',
            html: 'remember, you will die.',
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
    public get() {
        return this.tools;
    }    
}