import * as React from 'react'
import { Redirect } from 'react-router-dom'
import { appState } from './appState'

export function securePage(Page: any) {
  return (props: any) => {
    const { currentUser } = appState
    if (currentUser == null) { return <Redirect to='/login' /> }
    return <Page {...props} />
  }
}