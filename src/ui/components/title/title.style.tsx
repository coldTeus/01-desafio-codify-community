import { styled } from '@mui/material'

export const TitleContainer = styled('div')`
  display: grid;
`

export const HelloTitle = styled('h3')`
  margin: 0;
  padding-top: 289px;
  padding-bottom: 9px;
  text-align: center;
  color: ${({ theme }) => theme.palette.text.primary};
  font-family: 'Asap Condensed';
  font-style: normal;
  font-weight: 500;
  font-size: 28px;
  line-height: 32px;
`

export const TitleStyled = styled('h1')`
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.palette.text.secondary};
  font-family: 'Raleway';
  font-style: normal;
  font-weight: 400;
  font-size: 124px;
  line-height: 146px;
  text-transform: uppercase;
  text-align: center;
  padding-bottom: 36px;
`

export const SubTitle = styled('h2')`
  margin: 0;
  padding: 0;
  text-align: center;
  color: ${({ theme }) => theme.palette.text.primary};
  font-family: 'Asap Condensed';
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 46px; ;
`
