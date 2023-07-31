import { useEffect } from 'react'
import { ReduxStoreWithManager, StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema'
import { Reducer } from '@reduxjs/toolkit'
import { useDispatch, useStore } from 'react-redux'

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer
}

type ReducersListEntry = [StateSchemaKey, Reducer]

interface DynamicModuleLoaderProps {
  reducers: ReducersList
  removeAfterUnmount?: boolean
}

export function useDynamicModuleLoader(props: DynamicModuleLoaderProps) {
  const {
    reducers,
    removeAfterUnmount,
  } = props
  const store = useStore() as ReduxStoreWithManager
  const dispatch = useDispatch()

  useEffect(() => {
    Object.entries(reducers).forEach(([ reducerKey, reducer ]: ReducersListEntry) => {
      if (!store.reducerManager?.getReducerMap()[reducerKey]) {
        store.reducerManager.add(reducerKey, reducer)
        dispatch({ type: `@INIT ${reducerKey} reducer` })
      }
    })

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([ reducerKey, reducer ]: ReducersListEntry) => {
          store.reducerManager.remove(reducerKey)
          dispatch({ type: `@REMOVE ${reducerKey} reducer` })
        })
      }
    }
    // eslint-disable-next-line
  }, [])
}
