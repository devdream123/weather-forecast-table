import styled from 'styled-components';

export const TopBarStyled = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const DropdownContainer = styled.div``;

export const DropdownLabel = styled.label`
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: bold;
`;

export const DropDownList = styled.select`
  width: 100%;
  height: 50px;
  background: transparent;
  outline: transparent;
  margin: ${({ theme }) => `${theme.spacing.md} 0 ${theme.spacing.lg} 0`};
  &:hover {
    cursor: pointer;
  }
`;

export const SearchButton = styled.button`
  height: 50px;
  color: black;
  background: none;
  border: 1px solid black;
  border-radius: 3px;
  outline: transparent;
  &:hover {
    background: ${({ theme }) => theme.color.grey};
    color: white;
    box-shadow: none;
    cursor: pointer;
  }
`;
