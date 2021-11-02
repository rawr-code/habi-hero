import { Persistor } from '../../utils/persistor'
import { UPDATE_USER_SALE_INFORMATION } from './StoreConstants'
import { INITIAL_STATE, StoreState } from './StoreContext'
import { StoreActionTypes } from './StoreTypes'

export const storePersistor = Persistor<StoreState>('store_data')

export function storeReducer(
    state = INITIAL_STATE,
    action: StoreActionTypes
): StoreState {
    const {
        payload: { key, label, value, checked },
    } = action
    return storePersistor.set(
        (() => {
            switch (action.type) {
                case UPDATE_USER_SALE_INFORMATION:
                    return {
                        saleForm: {
                            ...state.saleForm,
                            [key]: {
                                label,
                                value,
                                checked,
                            },
                        },
                    }

                default:
                    return state
            }
        })()
    )
}
