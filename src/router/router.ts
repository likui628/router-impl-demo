import { App } from "vue"
import { routerKey } from "./injectionSymbols";
import { RouterLink } from "./RouterLink";
import { RouterView } from "./RouterView";
import type { RouteLocation, RouteLocationRaw, Router, RouterOptions } from "./types";

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