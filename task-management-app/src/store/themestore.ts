import { writable } from "svelte/store";

export const themesStore = writable("default");

export default {
  subscribe: themesStore.subscribe,
  toggleDefaultTheme: () => themesStore.update((themeColor: string) => "default"),
  toggleBarbieTheme: () => themesStore.update((themeColor: string) => "barbie"),
  toggleSeaFoamTheme: () => themesStore.update((themeColor: string) => "seaFoam"),
  toggleInnocentTheme: () => themesStore.update((themeColor: string) => "innocent"),
}