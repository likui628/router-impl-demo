import { App, Component, DefineComponent } from "vue"

export type RouteComponent = Component | DefineComponent

export type RouteLocationRaw = string;

export type RouteLocation = {
    href: string;
    fullPath: string
}

export interface RouteRecordRaw {
    path: RouteLocationRaw;
    component: RouteComponent;
}


export interface RouterOptions {
    routes: Readonly<RouteRecordRaw[]>
}

export interface Router {
    resolve(to: RouteLocationRaw): RouteLocation
    push(to: RouteLocationRaw): Promise<any>
    install(app: App): void
}