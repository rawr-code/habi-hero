import { UPDATE_USER_SALE_INFORMATION } from './StoreConstants'

export type SaleForm = {
    key: string
    label: string
    value: string
    checked?: boolean
}

export type SaleFormState = Record<string, {
    label: string
    value?: string
    checked?: boolean
}>

// Actions -----
export interface UpdateUserSaleInformation {
    type: typeof UPDATE_USER_SALE_INFORMATION
    payload: SaleForm
}

export type StoreActionTypes = UpdateUserSaleInformation
// -----
