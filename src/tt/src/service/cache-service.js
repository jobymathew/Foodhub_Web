import { appState } from "../state/app-state";

export function saveAppState() {
  const value = JSON.stringify(appState)
  window.localStorage.setItem('app-state', value)
}

export function loadAppState() {
  const value = JSON.parse(window.localStorage.getItem('app-state') || 'null')
  Object.assign(appState, value || {})
}