import { darken, transparentize } from "polished";
import styled from "styled-components";

export const Container = styled.form`

  h2 { 
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input{
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    height: 4rem;
    border-radius: 0.25rem;
    padding: 0 1.5rem;

    border: none;

    background: var(--green);

    font-weight: 600;
    font-size: 1rem;

    color: var(--shape);

    margin-top: 1.5rem;

    transition: filter 0.2s;

    &:hover{
      filter:brightness(0.9);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`;

interface RadioBoxProps{
  isActive: boolean;
  activeColor: 'green' | 'red';
}

const colors = {
  red: '#E62E4D',
  green: '#33CC95'
}

export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;

  background: ${({isActive, activeColor}) =>  isActive ? transparentize(0.9,colors[activeColor]) : 'transparent'};

  display: flex;
  justify-content: center;
  align-items: center;

  transition: border-color 0.2s;

  &:hover{
    border-color: ${darken(0.2, '#d7d7d7')};
  }

  img{
    width: 20px;
    height: 20px;
  }

  span{
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title)
  }
`