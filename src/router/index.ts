import { App, Component, DefineComponent } from "vue"
import { routerKey } from "./injectionSymbols";
import { RouterLink } from "./RouterLink";
import { RouterView } from "./RouterView";


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

export function createRouter(options: RouterOptions): Router {
    function resolve(to: RouteLocationRaw): RouteLocation {
        //todo
        return {
            href: '',
            fullPath: ''
        }
    }

    function push(to: RouteLocationRaw): Promise<any> {
        //todo
        return Promise.resolve()
    }

    const router = {
        resolve,
        push,
        install(app: App) {
            const router = this;
            app.component('RouterLink', RouterLink)
            app.component('RouterView', RouterView)

            app.provide(routerKey, router)
        }
    }
    return router;
}