"use strict"

var main = function () {
    let self = this;
    let contador = 1;
    let nodos = [];

    this.init = function(data){
        var fecha = self.funcionTiempo();
        self.insertarTabla(fecha,data,contador);
        nodos.push(
            {
                "fecha": fecha,
                "matricula": data.matricula,
                "laboratorio": data.lab
            }
        );
        contador += 1;
    };

    this.funcionTiempo = function() {
        var fecha = new Date().toLocaleDateString();
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

    this.insertarGrafica = function(data) {
        var cont = 0

        new Chart(document.getElementById("line-chart"), {
            type: 'bar',
            data: {
              labels: ["07/11/2019"],
              datasets: [
                {
                  label: "07/11/2019",
                  backgroundColor: ["#3e95cd"],
                  data: [nodos.length]
                }
              ]
            },
            options: {
              legend: { display: false },
              title: {
                display: true,
                text: 'Estadístico de entradas'
              }
            }
        });
    };
};