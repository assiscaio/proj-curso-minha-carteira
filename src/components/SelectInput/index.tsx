import React from 'react'

import { Container } from './styles'

interface ISelectInputProps {
    options: {
        value: string | number;
        label: string | number;
    }[]
}

const SelectInput: React.FC<ISelectInputProps> = ( {options} ) => {
    return (
        <Container>
            <select>
                { options.map(o => (
                    <option value={o.value}>{o.label}</option>
                ))}
            </select>
        </Container>
    )
}

export default SelectInput