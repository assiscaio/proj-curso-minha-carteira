import React from 'react'

import { Container } from './styles'
import ContentHeader from '../../components/ContentHeader'
import SelectInput from '../../components/SelectInput'

const List: React.FC = () => {
    const options = [
        {value: '2018', label: '2018'},
        {value: '2019', label: '2019'},
        {value: '2020', label: '2020'}
    ]

    return (
        <Container>
            <ContentHeader title="List" lineColor="#40F">
                <SelectInput options={options}></SelectInput>
            </ContentHeader>
        </Container>
    )
}

export default List