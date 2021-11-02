import { createContext } from 'react'
import { ManageContext } from '../../types/stateManagement'
import { ProviderCreator } from '../contextInjector'
import { storeReducer, storePersistor } from './StoreReducer'
import { SaleFormState, StoreActionTypes } from './StoreTypes'

export interface StoreState {
    saleForm: SaleFormState
}

export const INITIAL_STATE: StoreState = storePersistor.get() || {
    saleForm: ((): SaleFormState => ({}))(),
}

export type StoreContext = ManageContext<StoreState, StoreActionTypes>

export const storeContext = createContext<StoreContext>({
    state: INITIAL_STATE,
    dispatch: (action) => {},
})

export const StoreProvider = ProviderCreator<StoreState, StoreActionTypes>(
    INITIAL_STATE,
    storeReducer,
    storeContext
)
