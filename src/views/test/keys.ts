import type { InjectionKey, Ref } from "vue";

export const injectionCountKey = Symbol('count') as InjectionKey<Ref<number>>
export const injectionauthorKey = Symbol('author') as InjectionKey<Ref<string>>
export const injectionauthor1Key = Symbol('author') as InjectionKey<Ref<string>>