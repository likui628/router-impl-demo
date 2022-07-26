import { App, shallowRef } from "vue"
import { routeLocationKey, routerKey } from "./injectionSymbols";
import { RouterLink } from "./RouterLink";
import { RouterView } from "./RouterView";
import type { RouteLocationRaw, Router, RouteRecordRaw, RouterOptions } from "./types";

export function createRouter(options: RouterOptions): Router {
    const currentRoute = shallowRef<RouteRecordRaw>()

    function push(to: RouteLocationRaw): Promise<any> {
        const route = options.routes.find(item => item.path === to)
        if (route) {
            currentRoute.value = route
            return Promise.resolve()
        }
        return Promise.reject()
    }

    const router = {
        push,
        options,
        install(app: App) {
            const router = this;
            app.component('RouterLink', RouterLink)
            app.component('RouterView', RouterView)

            currentRoute.value = options.routes[0]

            app.provide(routerKey, router)
            app.provide(routeLocationKey, currentRoute)
        }
    }
    return router;
}