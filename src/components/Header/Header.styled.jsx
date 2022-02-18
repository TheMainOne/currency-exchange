import styled from 'styled-components';

export const PageHeader = styled.header`
  @media (min-width: 380px) and (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  display: flex;
  justify-content: space-between;
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const Title = styled.h1`
  @media (min-width: 380px) and (max-width: 768px) {
    font-size: 20px;
    font-weight: 500;
  }

  font-size: 28px;
  font-weight: 600;
`;

export const Currency = styled.p`
  @media (min-width: 380px) and (max-width: 768px) {
    font-size: 14px;
    font-weight: 500;
  }

  font-size: 18px;
  font-weight: 500;
`;
