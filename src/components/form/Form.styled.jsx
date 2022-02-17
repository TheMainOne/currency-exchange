import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 400px;
  min-height: 250px;
  padding: 30px;
  background: hsl(240deg 6% 87%);
  border-radius: 7px;
`;

export const Input = styled.input`
  width: 100%;
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
  margin-bottom: 5px;
`;

export const DropList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 15px;
`;
