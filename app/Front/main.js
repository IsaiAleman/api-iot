"use strict"

var main = function () {
    let self = this;
    let contador = 1;

    this.init = function(data){
        console.log("Desde init",data);
        var fecha = self.funcionTiempo();
        self.insertarTabla(fecha,data,contador);
        contador += 1;
    };

    this.funcionTiempo = function() {
        var fecha = new Date();
        return fecha;
    };
    
    this.insertarTabla = function(fecha,data,contador) {
        $('#tabla').html(`
        <tr>
        <th scope="row">${contador}</th>
        <td>${fecha}</td>
        <td>${data.matricula}</td>
        <td>${data.lab}</td>
      </tr>`);
    };

    this.cambiaTabla = function() {
        $(document).ready(function() {
            $('#table').DataTable();
        });
    };
};