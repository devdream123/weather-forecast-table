import styled from 'styled-components';

export const ForecastWeatherStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

export const ForecastHeading = styled.h2`
  text-align: center;
  margin-top: 0;
`;

export const TableHead = styled.thead`
  background: ${({ theme }) => theme.color.lighterGrey};
`;

export const TableRow = styled.tr`
  text-align: center;
`;
