import styled from 'styled-components';
import { DebounceInput } from 'react-debounce-input';

export const DebounceCustomInput = styled(DebounceInput)`
  width: auto;
  outline: none;
  border: none;
  padding: 5px;
  border-radius: 5px;
`;

export const Wrapper = styled.div`
  @media (min-width: 380px) and (max-width: 768px) {
    width: 320px;
    padding: 20px;
  }

  width: 400px;
  min-height: 230px;
  padding: 30px;
  background: hsl(240deg 6% 87%);
  border-radius: 7px;
`;

export const Input = styled.input`
  height: 30px;
  outline: none;
  border: none;
  border-radius: 5px;
  padding: 0;

  &:focus {
    border: 1px solid #0969da;
  }
`;

export const Select = styled.select`
  width: auto;
  outline: none;
  border: none;
  padding: 5px;
  border-radius: 5px;
`;

export const Button = styled.button`
  margin-top: 15px;
  width: 100%;
  height: 52px;
  font-size: 18px;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 5px;

  &:hover {
    background: #606060;
    color: #ffffff;
  }
`;

export const TitleOfInput = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const DropList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
  margin-bottom: 15px;
`;

export const InputsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
