import { appState } from "./appState";

export function saveAppState() {
  const value = JSON.stringify(appState)
  window.localStorage.setItem('appState', value)
}

export function loadAppState() {
  const value = JSON.parse(window.localStorage.getItem('appState') || 'null')
  Object.assign(appState, value || {})
}