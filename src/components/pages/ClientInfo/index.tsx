import React, { Fragment, useState } from 'react'
import {
    Redirect,
    useHistory,
    useParams,
    useRouteMatch,
} from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

import Button from '../../atoms/Button'
import Modal from '../../molecules/Modal'

import { useSaleForm } from '../../../context/store/StoreHooks'

// Form steps components
import UserInformation from './Form/UserInformation'
import UserEmail from './Form/UserEmail'
import ApartmentAddress from './Form/ApartmentAddress'
import ApartmentLocation from './Form/ApartmentLocation'
import ApartmentZones from './Form/ApartmentZones'
import ApartmentGarage from './Form/ApartmentGarage'
import ApartmentPrice from './Form/ApartmentPrice'
import ApartmentPhoto from './Form/ApartmentPhoto'
import ApartmentLift from './Form/ApartmentLift'

import {
    StepTitle,
    StepSubtitle,
    StepWrapper,
    StepHeader,
    StepBody,
    StepNumber,
    ResumeWrapper,
    ResumeBody,
    ResumeHeader,
    ResumeHeaderActions,
    CloseButton,
    ResumeActions,
    ImagePreview,
    LeftBox,
    RightBox,
} from './styled'
import useWindowDimentions from '../../../hooks/useWindowDimentions'

type FormStep = {
    path: string
    component: React.ReactNode
    title: string
    description: string
    order: number
}

const formSteps: FormStep[] = [
    {
        path: 'datos-cliente',
        component: <UserInformation />,
        title: 'Datos del cliente',
        description: 'Debe introducir sus nombres y apellidos.',
        order: 1,
    },
    {
        path: 'correo-cliente',
        component: <UserEmail />,
        title: 'Correo del cliente',
        description: 'Debe introducir un correo electronico valido.',
        order: 2,
    },
    {
        path: 'direccion-apartamento',
        component: <ApartmentAddress />,
        title: 'Dirección del apartamento',
        description:
            'Indique la dirección exacta de donde se encuentra ubicado el apartamento.',
        order: 3,
    },
    {
        path: 'piso-apartamento',
        component: <ApartmentLocation />,
        title: 'Número de piso',
        description: 'Indique el piso donde esta ubicado el apartamento.',
        order: 4,
    },
    {
        path: 'zonas-apartamento',
        component: <ApartmentZones />,
        title: 'Zonas',
        description: 'Seleccióne cual de estas opciones posse el apartamento.',
        order: 5,
    },
    {
        path: 'parqueadero-apartamento',
        component: <ApartmentGarage />,
        title: 'Parqueadero',
        description: 'Indique si el apartamento poseé parqueadero.',
        order: 6,
    },
    {
        path: 'precio-apartamento',
        component: <ApartmentPrice />,
        title: 'Monto',
        description: 'Indique el monto por el que vende el apartamento.',
        order: 7,
    },
    {
        path: 'foto-apartamento',
        component: <ApartmentPhoto />,
        title: 'Foto',
        description: 'Adjunte una unica foto del apartamento.',
        order: 8,
    },
    {
        path: 'ascensor-apartamento',
        component: <ApartmentLift />,
        title: 'Ascensor',
        description: 'Indique si el apartamento poseé ascensor.',
        order: 9,
    },
]

const compare = (a: FormStep, b: FormStep) => {
    if (a.order < b.order) {
        return -1
    }
    if (a.order > b.order) {
        return 1
    }
    return 0
}

const ClientInfo = () => {
    const history = useHistory()
    const match = useRouteMatch()
    const saleForm = useSaleForm()
    const [isOpenResume, setIsOpenResume] = useState(false)
    const { step } = useParams<{ step?: string }>()
    const windowDimentions = useWindowDimentions()
    const stepsOrderer = formSteps.sort(compare)
    const stepInfo = stepsOrderer.find((formStep) => formStep.path === step)
    const firstStep = stepsOrderer[0]

    if (!stepInfo) {
        return <Redirect to={match.path + firstStep.path} />
    }

    const currentStep = stepsOrderer.findIndex(
        ({ order }) => order === stepInfo.order
    )

    const isLastStep = currentStep + 1 === stepsOrderer.length

    const handleBackStep = () => {
        const backStep = stepsOrderer[currentStep - 1]

        if (backStep) {
            const backStepUrl = match.path.replace(':step', backStep.path)
            history.push(backStepUrl)
        }
    }

    const handleNextStep = () => {
        const nextStep = stepsOrderer[currentStep + 1]

        if (nextStep) {
            const nextStepUrl = match.path.replace(':step', nextStep.path)
            history.push(nextStepUrl)
        } else {
            setIsOpenResume(true)
        }
    }

    const generateResume = Object.keys(saleForm).map((label) => {
        const itemInfo = saleForm[label]
        let value = itemInfo.value

        if (typeof itemInfo.checked !== 'undefined') {
            if (itemInfo.checked) value = 'Si'
            else value = 'No'
        }

        const isImage = value?.includes('data:image')

        return (
            <Fragment key={uuidv4()}>
                <StepTitle as="h2" small>
                    {itemInfo.label}
                </StepTitle>
                {isImage ? (
                    <ImagePreview src={value} alt="asd" />
                ) : (
                    <StepSubtitle small gutter>
                        {value}
                    </StepSubtitle>
                )}
            </Fragment>
        )
    })

    return (
        <StepWrapper>
            <LeftBox>
                <StepHeader>
                    <StepNumber>{`${currentStep + 1}/${
                        stepsOrderer.length
                    }`}</StepNumber>
                    <StepTitle>{stepInfo.title}</StepTitle>
                    <StepSubtitle>{stepInfo.description}</StepSubtitle>
                </StepHeader>
                <StepBody>{stepInfo.component}</StepBody>
                <ResumeActions>
                    {firstStep.order !== stepInfo.order && (
                        <Button onClick={handleBackStep}>Volver</Button>
                    )}
                    <Button onClick={handleNextStep}>
                        {isLastStep ? 'Finalizar' : 'Siguiente'}
                    </Button>
                    {windowDimentions.width < 1024 && !isLastStep && (
                        <Button onClick={() => setIsOpenResume(true)}>
                            Resumen
                        </Button>
                    )}
                </ResumeActions>
            </LeftBox>
            <RightBox>{generateResume}</RightBox>
            <Modal open={isOpenResume}>
                <ResumeWrapper>
                    <ResumeHeader>
                        <StepTitle as="h2">Resumen</StepTitle>
                        <StepSubtitle>Información del apartamento</StepSubtitle>
                        <ResumeHeaderActions>
                            <CloseButton
                                type="button"
                                onClick={() => setIsOpenResume(false)}
                            />
                        </ResumeHeaderActions>
                    </ResumeHeader>
                    <ResumeBody>{generateResume}</ResumeBody>
                </ResumeWrapper>
            </Modal>
        </StepWrapper>
    )
}

export default ClientInfo
