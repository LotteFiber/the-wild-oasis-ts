import styled from 'styled-components'

const Button = styled.button`
  padding: 1.2rem 1.6rem;
  box-shadow: var(--shadow-sm);
  background-color: var(--color-brand-600);
  border: none;
  border-radius: var(--border-radius-sm);
  font-size: 1.4rem;
  font-weight: 500;
  color: var(--color-brand-50);
  cursor: pointer;

  &:hover {
    background-color: var(--color-brand-700);
  }
`

export default Button
