import { makeAutoObservable } from 'mobx'
import { Observer } from 'mobx-react-lite'

export type RootStoreSyncData = {}

export default class RootStore {
    constructor() {}

    syncData(serverData: RootStoreSyncData) {}
}
