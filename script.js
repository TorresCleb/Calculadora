function calcular(tipo,valor){
 
    if(tipo === 'acao'){
        if (valor === 'c') {
            document.getElementById('resultado').value = '' // limpa o visor pois está atribuindo o valor vazio quando se clica no c 
            //limpar o visor  
        }
        if (valor === '+' || valor === '-' || valor === '*'||  valor === '/'|| valor === '.'  ) {
            document.getElementById('resultado').value += valor
            //recupera valor das operações
        }
        if ( valor === '=') {
           var valor_campo = eval(document.getElementById('resultado').value)   
            document.getElementById('resultado').value = valor_campo
           //recupera o valor de =   
        }
    }else if(tipo === 'valor'){
        document.getElementById('resultado').value += valor
        //recupera o valor de cada número
    }

}