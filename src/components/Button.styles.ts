import styled, { css } from 'styled-components'

export type ButtonVariant = 'primary' | 'secundary' | 'danger' | 'warning'

interface ButtonContainerProps {
  variant: ButtonVariant;
}

const buttonVariants = {
  primary: 'purple',
  secundary: 'orange',
  danger: 'red',
  warning: 'yellow'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  border: none;

  background-color: ${props => props.theme.primary};

  /* ${ props => {
    return css`
      background-color: ${buttonVariants[props.variant]}
    ` 
  }} */
`