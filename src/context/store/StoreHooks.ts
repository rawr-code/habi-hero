import { useContext } from 'react'
import { updateUserSaleInformation } from './StoreActions'
import { storeContext, StoreContext, StoreState } from './StoreContext'
import { SaleForm, SaleFormState } from './StoreTypes'

export const useStoreState = (): StoreState => {
    const { state } = useContext<StoreContext>(storeContext)
    return state
}

export const useSaleForm = (): SaleFormState => {
    const {
        state: { saleForm },
    } = useContext<StoreContext>(storeContext)
    return saleForm
}

export const useUpdateSaleInformation = () => {
    const { dispatch } = useContext<StoreContext>(storeContext)

    return (saleForm: SaleForm) => dispatch(updateUserSaleInformation(saleForm))
}
