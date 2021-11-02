import React from 'react'
import Button from '../../atoms/Button'
import InputField from '../../molecules/InputField'

import { FormWrapper, FormFieldsWrapper } from './styled'

const FakeForm = () => (
    <FormWrapper>
        <FormFieldsWrapper>
            <InputField label="Departamento" placeholder="¿Boyaca?" />
            <InputField label="Ciudad" placeholder="¿Tunja?" />
        </FormFieldsWrapper>
        <Button type="button">Buscar</Button>
    </FormWrapper>
)

export default FakeForm
