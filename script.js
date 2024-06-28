let valoresPrevios = [];

let id = []
let saldo = []
let fecha = []
let habilitado = []
let i = 0;
let tarjeta = [id,saldo,fecha,habilitado];
let imax=0;
let nuevacarga = []
let antiguosaldo1 = []
let idcaja = [1,2,3,4,5,6,7]
let nombre = ["Providencia", "Recoleta", "Maipu", "Ñuñoa", "Quilicura", "LaFlorida", "Independencia"]
let caja = [idcaja,nombre,];
console.log(i);
console.log(nombre[1]);
let o=10;
let tarxcaj1 =[]
let tarxcaj2 =[]
let tarxcaj3 =[]
let tarxcaj4 =[]
let tarxcaj5 =[]
let tarxcaj6 =[]
let tarxcaj7 =[]
let contOsi =[0,0,0,0,0,0,0]
let contOno =[0,0,0,0,0,0,0]
let atarxcaj1 =[]
let atarxcaj2 =[]
let atarxcaj3 =[]
let atarxcaj4 =[]
let atarxcaj5 =[]
let atarxcaj6 =[]
let atarxcaj7 =[]

function consultarPorID() {
    if (o>8) {
        alert("SELECCIONE UNA CAJA PRIMERO");
    } else {
    id = document.getElementById('inputID').value.trim();
    console.log(id);
    document.getElementById('resultadoID').textContent = id ; 
    console.log(id);
    

    if (valoresPrevios.includes(id)) {
        console.log("El valor ya ha sido usado antes");
        i = valoresPrevios.indexOf(id);
        console.log(i);
        console.log(saldo[i])
        console.log(valoresPrevios);
    } else {
        console.log("El valor es nuevo");
        
        console.log(saldo);
        i = imax;
        saldo[i] = Math.floor(Math.random() * 30000);
        console.log(saldo);
        valoresPrevios.push(id); 
        console.log(saldo);
        if (Math.random()>0.75) {
            habilitado[i] = false;
            contOno[o]=contOno[o] + 1;
            switch (o) {
                case 0:
                    atarxcaj1.push(id);
                    break;
                case 1:
                    atarxcaj2.push(id);
                    break;
                case 2:
                    atarxcaj3.push(id);
                    break;
                case 3:
                    atarxcaj4.push(id);
                    break; 
                case 4:
                    atarxcaj5.push(id);
                    break;
                case 5:
                    atarxcaj6.push(id);
                    break; 
                case 6:
                    atarxcaj7.push(id);
                    break;    
            }
        } else {
        habilitado[i] = true;
        contOsi[o]=contOsi[o] + 1;
        switch (o) {
            case 0:
                tarxcaj1.push(id);
                break;
            case 1:
                tarxcaj2.push(id);
                break;
            case 2:
                tarxcaj3.push(id);
                break;
            case 3:
                tarxcaj4.push(id);
                break; 
            case 4:
                tarxcaj5.push(id);
                break;
            case 5:
                tarxcaj6.push(id);
                break; 
            case 6:
                tarxcaj7.push(id);
                break;    
        }
    }
        console.log()
        imax=i + 1;
    }
    document.getElementById('balance').textContent = saldo[i] ;
    console.log(habilitado[i]);
    if (habilitado[i] === true) {
        document.getElementById('habilitadospan').textContent = 'SÍ' ;
    } else {
         document.getElementById('habilitadospan').textContent = 'NO' ;
    }
    
    }
}
function cargarTarjeta() { 
    if (habilitado[i] === true) {
    console.log("Cargar Tarjeta");
    nuevacarga[i] = parseInt(prompt("Por favor, ingresa el saldo que deseas cargar:"), 10);
    antiguosaldo1[i]=saldo[i];
    console.log(antiguosaldo1[i]);
    saldo[i]= saldo[i] + nuevacarga[i];
    console.log(saldo[i]);
    document.getElementById('balance').textContent = saldo[i] ;
    } else {
    alert("Tarjeta no válida/dehabilitada");
    }
}

function descargarTarjeta() {
    if (habilitado[i] === true) {
    console.log("Descargar Tarjeta");
    nuevacarga[i] = parseInt(prompt("Por favor, ingresa el valor del bus a descontar:"), 10);
    antiguosaldo1[i] = saldo[i];
    saldo[i] = saldo[i] - nuevacarga[i];
    document.getElementById('balance').textContent = saldo[i] ;
} else {
    alert("Tarjeta no válida/dehabilitada");
    } 

}   

function habilitarTarjeta() {
    console.log("Habilitar Tarjeta");
    if (habilitado[i] === true) {
        alert("tarjeta ya habilitada")
    } else {
    contOsi[o]=contOsi[o]+1
    habilitado[i] = true;
    document.getElementById('habilitadospan').textContent = 'SÍ' ;
    switch (o) {
        case 0:
            tarxcaj1.push(id);
            break;
        case 1:
            tarxcaj2.push(id);
            break;
        case 2:
            tarxcaj3.push(id);
            break;
        case 3:
            tarxcaj4.push(id);
            break; 
        case 4:
            tarxcaj5.push(id);
            break;
        case 5:
            tarxcaj6.push(id);
            break; 
        case 6:
            tarxcaj7.push(id);
            break;    
    }
    }
}

function deshabilitarTarjeta() {
    console.log("Deshabilitar Tarjeta");
    if (habilitado[i] === false) {
        alert("tarjeta ya deshabilitada")
    } else {
    habilitado[i] = false;
    document.getElementById('habilitadospan').textContent = 'NO' ;
    contOno[o]=contOno[o] + 1;
    switch (o) {
        case 0:
            atarxcaj1.push(id);
            break;
        case 1:
            atarxcaj2.push(id);
            break;
        case 2:
            atarxcaj3.push(id);
            break;
        case 3:
            atarxcaj4.push(id);
            break; 
        case 4:
            atarxcaj5.push(id);
            break;
        case 5:
            atarxcaj6.push(id);
            break; 
        case 6:
            atarxcaj7.push(id);
            break;    
    }
    }
}

function consultarTarjetasHabilitadasPorCaja() {
    let texto = "las tarjetas que ha habilitado son:"
    switch (o) {
        case 0:
            for (k=0; k < contOsi[o];k++) {
                texto += tarxcaj1[k];
                texto +=",";
            }
            break;
        case 1:
            for (k=0; k < contOsi[o];k++) {
                texto += tarxcaj2[k];
                texto +=",";
            }
            break;
        case 2:
            for (k=0; k < contOsi[o];k++) {
                texto += tarxcaj3[k];
                texto +=",";
            }
            break;
        case 3:
            for (k=0; k < contOsi[o];k++) {
                texto += tarxcaj4[k];
                texto +=",";
            }
            break; 
        case 4:
            for (k=0; k < contOsi[o];k++) {
                texto += tarxcaj5[k];
                texto +=",";
            }
            break;
        case 5:
            for (k=0; k < contOsi[o];k++) {
                texto += tarxcaj6[k];
                texto +=",";
            }
            break; 
        case 6:
            for (k=0; k < contOsi[o];k++) {
                texto += tarxcaj7[k];
                texto +=",";
            }
            break;    
    }
    document.getElementById('resultadoTextarea').textContent = texto;
}

function consultarMontoPromedioSaldos() {
    console.log("Consultar monto promedio de saldos anteriores");
    let texto = "El promedio de los saldos que ha pasado habilitados por caja es:"
    let variablin=0;
    let variablon=0;
    let resultadon=0;
    switch (o) {
        case 0:
            for (k=0; k < contOsi[o];k++) {
                variablin = tarxcaj1[k]
                variablon = tarxcaj1.indexOf(variablin);
                resultadon = resultadon + saldo[variablon];
                console.log(variablin);
                console.log(variablon);
                console.log(resultadon);
                console.log(contOsi[o]);
            }
            resultadon = resultadon / contOsi[o];
            texto += resultadon;
            break;
        case 1:
            for (k=0; k < contOsi[o];k++) {
                variablin = tarxcaj2[k]
                variablon = tarxcaj2.indexOf(variablin);
                resultadon = resultadon + saldo[variablon];
                console.log(variablin);
                console.log(variablon);
                console.log(resultadon);
                console.log(contOsi[o]);
            }
            resultadon = resultadon / contOsi[o];
            texto += resultadon;
            break;
        case 2:
            for (k=0; k < contOsi[o];k++) {
                variablin = tarxcaj3[k]
                variablon = tarxcaj3.indexOf(variablin);
                resultadon = resultadon + saldo[variablon];
                console.log(variablin);
                console.log(variablon);
                console.log(resultadon);
                console.log(contOsi[o]);
            }
            resultadon = resultadon / contOsi[o];
            texto += resultadon;
            break;
        case 3:
            for (k=0; k < contOsi[o];k++) {
                variablin = tarxcaj4[k]
                variablon = tarxcaj4.indexOf(variablin);
                resultadon = resultadon + saldo[variablon];
                console.log(variablin);
                console.log(variablon);
                console.log(resultadon);
                console.log(contOsi[o]);
            }
            resultadon = resultadon / contOsi[o];
            texto += resultadon;
            break; 
        case 4:
            for (k=0; k < contOsi[o];k++) {
                variablin = tarxcaj5[k]
                variablon = tarxcaj5.indexOf(variablin);
                resultadon = resultadon + saldo[variablon];
                console.log(variablin);
                console.log(variablon);
                console.log(resultadon);
                console.log(contOsi[o]);
            }
            resultadon = resultadon / contOsi[o];
            texto += resultadon;
            break;
        case 5:
            for (k=0; k < contOsi[o];k++) {
                variablin = tarxcaj6[k]
                variablon = tarxcaj6.indexOf(variablin);
                resultadon = resultadon + saldo[variablon];
                console.log(variablin);
                console.log(variablon);
                console.log(resultadon);
                console.log(contOsi[o]);
            }
            resultadon = resultadon / contOsi[o];
            texto += resultadon;
            break; 
        case 6:
            for (k=0; k < contOsi[o];k++) {
                variablin = tarxcaj7[k]
                variablon = tarxcaj7.indexOf(variablin);
                resultadon = resultadon + saldo[variablon];
                console.log(variablin);
                console.log(variablon);
                console.log(resultadon);
                console.log(contOsi[o]);
            }
            resultadon = resultadon / contOsi[o];
            texto += resultadon;
            break;    
    }
    document.getElementById('resultadoTextarea').textContent = texto;
}

function consultarTarjetasDeshabilitadasporCaja() {
    console.log("Consultar monto promedio de cargas");
    let texto = "las tarjetas que ha deshabilitado son:"
    switch (o) {
        case 0:
            for (k=0; k < contOno[o];k++) {
                texto += atarxcaj1[k];
                texto +=",";
            }
            break;
        case 1:
            for (k=0; k < contOno[o];k++) {
                texto += atarxcaj2[k];
                texto +=",";
            }
            break;
        case 2:
            for (k=0; k < contOno[o];k++) {
                texto += atarxcaj3[k];
                texto +=",";
            }
            break;
        case 3:
            for (k=0; k < contOno[o];k++) {
                texto += atarxcaj4[k];
                texto +=",";
            }
            break; 
        case 4:
            for (k=0; k < contOno[o];k++) {
                texto += atarxcaj5[k];
                texto +=",";
            }
            break;
        case 5:
            for (k=0; k < contOno[o];k++) {
                texto += atarxcaj6[k];
                texto +=",";
            }
            break; 
        case 6:
            for (k=0; k < contOno[o];k++) {
                texto += atarxcaj7[k];
                texto +=",";
            } 
            break;    
    }
    document.getElementById('resultadoTextarea').textContent = texto;
}

function consultarMontoTotalCargasHabilitadas() {
    console.log("Consultar monto total de saldos habilitados por caja");
    let texto = "El total de los saldos habilitados por caja es:"
    let variablin=0;
    let variablon=0;
    let resultadon=0;
    switch (o) {
        case 0:
            for (k=0; k < contOsi[o];k++) {
                variablin = tarxcaj1[k]
                variablon = tarxcaj1.indexOf(variablin);
                resultadon = resultadon + saldo[variablon];
                console.log(variablin);
                console.log(variablon);
                console.log(resultadon);
                console.log(contOsi[o]);
            }
            
            texto += resultadon;
            break;
        case 1:
            for (k=0; k < contOsi[o];k++) {
                variablin = tarxcaj2[k]
                variablon = tarxcaj2.indexOf(variablin);
                resultadon = resultadon + saldo[variablon];
                console.log(variablin);
                console.log(variablon);
                console.log(resultadon);
                console.log(contOsi[o]);
            }
            
            texto += resultadon;
            break;
        case 2:
            for (k=0; k < contOsi[o];k++) {
                variablin = tarxcaj3[k]
                variablon = tarxcaj3.indexOf(variablin);
                resultadon = resultadon + saldo[variablon];
                console.log(variablin);
                console.log(variablon);
                console.log(resultadon);
                console.log(contOsi[o]);
            }
            
            texto += resultadon;
            break;
        case 3:
            for (k=0; k < contOsi[o];k++) {
                variablin = tarxcaj4[k]
                variablon = tarxcaj4.indexOf(variablin);
                resultadon = resultadon + saldo[variablon];
                console.log(variablin);
                console.log(variablon);
                console.log(resultadon);
                console.log(contOsi[o]);
            }
            
            texto += resultadon;
            break; 
        case 4:
            for (k=0; k < contOsi[o];k++) {
                variablin = tarxcaj5[k]
                variablon = tarxcaj5.indexOf(variablin);
                resultadon = resultadon + saldo[variablon];
                console.log(variablin);
                console.log(variablon);
                console.log(resultadon);
                console.log(contOsi[o]);
            }
            
            texto += resultadon;
            break;
        case 5:
            for (k=0; k < contOsi[o];k++) {
                variablin = tarxcaj6[k]
                variablon = tarxcaj6.indexOf(variablin);
                resultadon = resultadon + saldo[variablon];
                console.log(variablin);
                console.log(variablon);
                console.log(resultadon);
                console.log(contOsi[o]);
            }
            
            texto += resultadon;
            break; 
        case 6:
            for (k=0; k < contOsi[o];k++) {
                variablin = tarxcaj7[k]
                variablon = tarxcaj7.indexOf(variablin);
                resultadon = resultadon + saldo[variablon];
                console.log(variablin);
                console.log(variablon);
                console.log(resultadon);
                console.log(contOsi[o]);
            }
            
            texto += resultadon;
            break;    
    }
    document.getElementById('resultadoTextarea').textContent = texto;
}

function consultarMontoTotalSaldos() {
    let texto = "El total de los saldos anteriores por caja es:"
    let variablin=0;
    let variablon=0;
    let resultadon=0;
    switch (o) {
        case 0:
            for (k=0; k < imax;k++) {
                variablin = tarxcaj1[k]
                variablon = tarxcaj1.indexOf(variablin);
                resultadon = resultadon + antiguosaldo1[variablon];
                console.log(variablin);
                console.log(variablon);
                console.log(resultadon);
                console.log(contOsi[o]);
            }
            
            texto += resultadon;
            break;
        case 1:
            for (k=0; k < imax[o];k++) {
                variablin = tarxcaj2[k]
                variablon = tarxcaj2.indexOf(variablin);
                resultadon = resultadon + antiguosaldo1[variablon];
                console.log(variablin);
                console.log(variablon);
                console.log(resultadon);
                console.log(contOsi[o]);
            }
            
            texto += resultadon;
            break;
        case 2:
            for (k=0; k < imax[o];k++) {
                variablin = tarxcaj3[k]
                variablon = tarxcaj3.indexOf(variablin);
                resultadon = resultadon + antiguosaldo1[variablon];
                console.log(variablin);
                console.log(variablon);
                console.log(resultadon);
                console.log(contOsi[o]);
            }
            
            texto += resultadon;
            break;
        case 3:
            for (k=0; k < imax[o];k++) {
                variablin = tarxcaj4[k]
                variablon = tarxcaj4.indexOf(variablin);
                resultadon = resultadon + antiguosaldo1[variablon];
                console.log(variablin);
                console.log(variablon);
                console.log(resultadon);
                console.log(contOsi[o]);
            }
            
            texto += resultadon;
            break; 
        case 4:
            for (k=0; k < imax[o];k++) {
                variablin = tarxcaj5[k]
                variablon = tarxcaj5.indexOf(variablin);
                resultadon = resultadon + antiguosaldo1[variablon];
                console.log(variablin);
                console.log(variablon);
                console.log(resultadon);
                console.log(contOsi[o]);
            }
            
            texto += resultadon;
            break;
        case 5:
            for (k=0; k < imax[o];k++) {
                variablin = tarxcaj6[k]
                variablon = tarxcaj6.indexOf(variablin);
                resultadon = resultadon + antiguosaldo1[variablon];
                console.log(variablin);
                console.log(variablon);
                console.log(resultadon);
                console.log(contOsi[o]);
            }
            
            texto += resultadon;
            break; 
        case 6:
            for (k=0; k < imax[o];k++) {
                variablin = tarxcaj7[k]
                variablon = tarxcaj7.indexOf(variablin);
                resultadon = resultadon + antiguosaldo1saldo[variablon];
                console.log(variablin);
                console.log(variablon);
                console.log(resultadon);
                console.log(contOsi[o]);
            }
            
            texto += resultadon;
            break;    
    }
    document.getElementById('resultadoTextarea').textContent = texto;
    
}

function consultarMontoTotalCargasDeshabilitadas() {
    console.log("Consultar monto total de cargas deshabilitadas");
    let texto = "El total de los saldos deshabilitados por caja es:"
    let variablin=0;
    let variablon=0;
    let resultadon=0;
    switch (o) {
        case 0:
            for (k=0; k < contOno[o];k++) {
                variablin = atarxcaj1[k]
                variablon = atarxcaj1.indexOf(variablin);
                resultadon = resultadon + saldo[variablon];
                console.log(variablin);
                console.log(variablon);
                console.log(resultadon);
                console.log(contOno[o]);
            }
            
            texto += resultadon;
            break;
        case 1:
            for (k=0; k < contOno[o];k++) {
                variablin = atarxcaj2[k]
                variablon = atarxcaj2.indexOf(variablin);
                resultadon = resultadon + saldo[variablon];
                console.log(variablin);
                console.log(variablon);
                console.log(resultadon);
                console.log(contOno[o]);
            }
            
            texto += resultadon;
            break;
        case 2:
            for (k=0; k < contOno[o];k++) {
                variablin = atarxcaj3[k]
                variablon = atarxcaj3.indexOf(variablin);
                resultadon = resultadon + saldo[variablon];
                console.log(variablin);
                console.log(variablon);
                console.log(resultadon);
                console.log(contOno[o]);
            }
            
            texto += resultadon;
            break;
        case 3:
            for (k=0; k < contOno[o];k++) {
                variablin = atarxcaj4[k]
                variablon = atarxcaj4.indexOf(variablin);
                resultadon = resultadon + saldo[variablon];
                console.log(variablin);
                console.log(variablon);
                console.log(resultadon);
                console.log(contOno[o]);
            }
            
            texto += resultadon;
            break; 
        case 4:
            for (k=0; k < contOno[o];k++) {
                variablin = atarxcaj5[k]
                variablon = atarxcaj5.indexOf(variablin);
                resultadon = resultadon + saldo[variablon];
                console.log(variablin);
                console.log(variablon);
                console.log(resultadon);
                console.log(contOno[o]);
            }
            
            texto += resultadon;
            break;
        case 5:
            for (k=0; k < contOno[o];k++) {
                variablin = atarxcaj6[k]
                variablon = atarxcaj6.indexOf(variablin);
                resultadon = resultadon + saldo[variablon];
                console.log(variablin);
                console.log(variablon);
                console.log(resultadon);
                console.log(contOno[o]);
            }
            
            texto += resultadon;
            break; 
        case 6:
            for (k=0; k < contOno[o];k++) {
                variablin = atarxcaj7[k]
                variablon = atarxcaj7.indexOf(variablin);
                resultadon = resultadon + saldo[variablon];
                console.log(variablin);
                console.log(variablon);
                console.log(resultadon);
                console.log(contOno[o]);
            }
            
            texto += resultadon;
            break;    
    }
    document.getElementById('resultadoTextarea').textContent = texto;
}

function Cajita(x) {
    o=x;
    document.getElementById('caja-activa').textContent = idcaja[o] ;
}