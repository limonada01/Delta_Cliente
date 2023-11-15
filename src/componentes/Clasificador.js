import React,{useState} from "react";
import styled from 'styled-components';

const StyledContenedor = styled.div`
    margin-top: 20px;
    width: 800px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;



const StyledLabel = styled.label`
    background-color: green;
    margin: 0 10px 0 10px;
    font-size: 25px;
`;
  
const StyledInput = styled.input`
    background-color: blue;
`;

const Clasificar = () => {
    
    return ( 
        <StyledContenedor>
            <form id="formularioImagen">
                <StyledLabel for="imagen">Selecciona una imagen:</StyledLabel>
                <StyledInput type="file" id="imagen" name="imagen" accept=".jpg, .jpeg"/>
                <button type="button" onclick="cargarImagen()">Cargar Imagen</button>
            </form>
        </StyledContenedor>
    );
}
export default Clasificar;