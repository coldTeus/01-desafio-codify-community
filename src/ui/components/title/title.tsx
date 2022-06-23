import {
  TitleStyled,
  HelloTitle,
  SubTitle,
  TitleContainer
} from './title.style'

interface TitleProps {
  hellotitle: string | JSX.Element
  titlestyled: string | JSX.Element
  subtitle: string | JSX.Element
}

export default function Title(props: TitleProps) {
  return (
    <>
      <TitleContainer>
        <HelloTitle>{props.hellotitle}</HelloTitle>
        <TitleStyled>{props.titlestyled}</TitleStyled>
        <SubTitle>{props.subtitle}</SubTitle>
      </TitleContainer>
    </>
  )
}
