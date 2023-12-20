import React, { useEffect } from 'react'
import { ReduxStoreWithManager, StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema'
import { Reducer } from '@reduxjs/toolkit'
import { useDispatch, useStore } from 'react-redux'

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer
}

interface DynamicModuleLoaderProps {
  reducers: ReducersList
  removeAfterUnmount?: boolean
}

export const DynamicModuleLoader: React.FC<DynamicModuleLoaderProps> = (props) => {
  const {
    children,
    reducers,
    removeAfterUnmount,
  } = props
  const store = useStore() as ReduxStoreWithManager
  const dispatch = useDispatch()

  useEffect(() => {
    Object.entries(reducers).forEach(([ reducerKey, reducer ]) => {
      if (!store.reducerManager?.getReducerMap()[reducerKey as StateSchemaKey]) {
        store.reducerManager.add(reducerKey as StateSchemaKey, reducer)
        dispatch({ type: `@INIT ${reducerKey} reducer` })
      }
    })

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([ reducerKey, reducer ]) => {
          store.reducerManager.remove(reducerKey as StateSchemaKey)
          dispatch({ type: `@REMOVE ${reducerKey} reducer` })
        })
      }
    }
    // eslint-disable-next-line
  }, [])

  return (
    <>
      { children }
    </>
  )
}
