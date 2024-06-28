import styled from 'styled-components';

const Header = styled.header`
  background-color: #f8f9fa;
  padding: 20px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #343a40;
`;

const Cabecalho = () => (
  <Header>
    <Title>EBAC Jobs</Title>
  </Header>
);

export default Cabecalho;
