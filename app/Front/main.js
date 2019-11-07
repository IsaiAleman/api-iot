"use strict"

var main = function () {
    let self = this;
    let contador = 1;

    this.init = function(data){
        var fecha = self.funcionTiempo();
        self.insertarTabla(fecha,data,contador);
        contador += 1;
    };

    this.funcionTiempo = function() {
        var fecha = new Date();
        return fecha;
    };
    
    this.insertarTabla = function(fecha,data,contador) {
        var table = $('#table').DataTable();
        
        table.row.add( [
            contador,
            fecha,
            data.matricula,
            data.lab
        ]).draw(false);
    };

    this.cambiaTabla = function() {
        $(document).ready(function() {
            $('#table').DataTable({
                dom: 'Bfrtip',
                buttons: [
                    'copy', 'csv', 'excel', 'pdf', 'print'
                ]
            });
        });
    };
};