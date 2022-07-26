import { App, Component, DefineComponent } from "vue"

export type RouteComponent = Component | DefineComponent

export type RouteLocationRaw = string;

export interface RouteRecordRaw {
    path: RouteLocationRaw;
    component: RouteComponent;
}


export interface RouterOptions {
    routes: Readonly<RouteRecordRaw[]>
}

export interface Router {
    options: RouterOptions
    push(to: RouteLocationRaw): Promise<any>
    install(app: App): void
}