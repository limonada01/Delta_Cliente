import './App.css';
import styled from 'styled-components';
import Clasificar from './componentes/Clasificador'

const StyledTitulo = styled.h1`
  background-color: gray;
  display: flex;
  justify-content: center;
  color: #fff;
  font-size: 50px;
  padding: 10px 10px;
  border: none;
  border-radius: 5px;
  margin-bottom: 20px ;
`;

function App() {
  return (
    <div>
      <StyledTitulo>Clasificar Moretón</StyledTitulo>
      <Clasificar/>
    </div>
  );
}

export default App;
