import { useState } from 'react'
import {
    useSaleForm,
    useUpdateSaleInformation,
} from '../context/store/StoreHooks'
import { SaleForm } from '../context/store/StoreTypes'

type useInputFieldProps = {
    key: string
    label: string
    regex?: RegExp
}

type useInputFieldReturn = {
    value?: string
    checked?: boolean
    isInvalid?: boolean
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const useInputField = ({
    key,
    label,
    regex,
}: useInputFieldProps): useInputFieldReturn => {
    const saleForm = useSaleForm()
    const updateSaleInformation = useUpdateSaleInformation()
    const [isInvalid, setIsInvalid] = useState(false)

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { type, value, checked } = event.target

        const data: SaleForm = {
            key,
            label,
            value,
        }

        if (type === 'checkbox') {
            data.checked = checked
        }

        if (type === 'file') {
            const { files } = event.target
            if (!files) return

            const reader = new FileReader()
            reader.readAsDataURL(files[0])

            reader.onloadend = () => {
                const { result } = reader
                if (typeof result === 'string') {
                    console.log({ result })
                    updateSaleInformation({
                        ...data,
                        value: result,
                    })
                }
            }

            return
        }

        if (regex) {
            if (regex.test(data.value)) {
                setIsInvalid(false)
            } else {
                setIsInvalid(true)
            }
        }
        updateSaleInformation(data)
    }

    return {
        value: saleForm[key]?.value,
        checked: saleForm[key]?.checked,
        isInvalid,
        onChange: handleOnChange,
    }
}

export default useInputField
