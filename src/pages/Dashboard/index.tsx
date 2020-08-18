import React from 'react'

import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/SelectInput'

import { Container } from './styles'

const Dashboard: React.FC = () => {

    const options = [
        {value: 'Caio', label: 'Caio'},
        {value: 'Ciro', label: 'Ciro'},
        {value: 'Pai', label: 'Pai'}
    ]

    return (
        <Container>
            <ContentHeader title="Dashboard" lineColor="#0F0">
                <SelectInput options={options}></SelectInput>
            </ContentHeader>
        </Container>
    )
}

export default Dashboard