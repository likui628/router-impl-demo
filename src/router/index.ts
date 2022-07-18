import { App, Component, DefineComponent } from "vue"
import { RouterLink } from "./RouterLink";
import { RouterView } from "./RouterView";


export type RouteComponent = Component | DefineComponent

export interface RouteRecordRaw {
    path: string;
    component: RouteComponent;
}


export interface RouterOptions {
    routes: Readonly<RouteRecordRaw[]>
}

export interface Router {
    install(app: App): void
}

export function createRouter(options: RouterOptions): Router {

    const router = {
        install(app: App) {
            const router = this;
            app.component('RouterLink', RouterLink)
            app.component('RouterView', RouterView)
        }
    }
    return router;
}