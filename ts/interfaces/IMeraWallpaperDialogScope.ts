/// <reference path='../_all.ts' />

module mera {
    export interface IMeraWallpaperDialogScope extends ng.IScope {
        images: Array<string>,
        hideDialog(): void,
        confirm(): void,
        wallpaper: string,
        closeDialog(): void
    }
}
