import React from 'react'
import {Botao, Box} from '../UI'

import { extratoLista } from '../../info'
import Items from '../Items'

export const Extrato = () => {
  return (
    <Box>
        {
            extratoLista.updates.map(({id, type, from, value, date}) => {
                return(
                    <Items key={id} type={type} from={from} value={value} date={date} />
                )
            })
        }
        <Botao>Ver Mais</Botao>
    </Box>
  )
}
