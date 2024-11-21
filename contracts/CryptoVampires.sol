// SPDX-License-Identifier: MIT 
pragma solidity  ^0.8.21;
contract MiContrato {
    string public saludo = 'Hola, Rinkeby!';

    function cambiarSaludo(string memory _nuevoSaludo) public {
        saludo = _nuevoSaludo;
    }
}