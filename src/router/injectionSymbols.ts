import { InjectionKey, ShallowRef } from "vue";
import type { Router, RouteRecordRaw } from "./types";

export const routerKey = Symbol('') as InjectionKey<Router>

export const routeLocationKey = Symbol('') as InjectionKey<ShallowRef<RouteRecordRaw>>
