import { createContext, ReactNode } from 'react'
import { enableStaticRendering } from 'mobx-react-lite'

import isServer from '@utils/isServer'

import RootStore, { RootStoreSyncData } from './rootStore'

enableStaticRendering(isServer())

let store: RootStore
const StoreContext = createContext<null | RootStore>(null)

export const StoreProvider = ({
    children,
    serverData,
}: {
    children: ReactNode
    serverData?: RootStoreSyncData
}) => {
    const store = initializeStore(serverData)

    return (
        <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
    )
}

const initializeStore = (serverData?: RootStoreSyncData) => {
    const _store = store ?? new RootStore()

    if (serverData) {
        _store.syncData(serverData)
    }

    if (isServer()) {
        return _store
    }

    if (!store) store = _store

    return _store
}
