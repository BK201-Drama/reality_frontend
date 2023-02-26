import { createContext, useContext } from 'react'
import { userStore, userStoreTag } from '../../domains/Login/stores'

function createStores () {
    return {
        [userStoreTag]: userStore
    }
}

export const stores = createStores()

export const StoresContext = createContext(stores)

export const useStores = () => useContext(StoresContext)
