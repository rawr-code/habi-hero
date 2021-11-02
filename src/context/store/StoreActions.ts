import { UPDATE_USER_SALE_INFORMATION } from './StoreConstants'
import { SaleForm, StoreActionTypes } from './StoreTypes'

export const updateUserSaleInformation = (saleForm: SaleForm): StoreActionTypes => {
    return {
        type: UPDATE_USER_SALE_INFORMATION,
        payload: saleForm,
    }
}

