import { styled } from '@mui/material'

export const HeaderContainer = styled('nav')`
  display: flex;
  justify-content: center;
`

export const HeaderLinks = styled('a')``

export const Logo = styled('img')`
  width: 32px;
  height: 21px;
  margin-top: ${({theme}) => theme.spacing(3)};
`
