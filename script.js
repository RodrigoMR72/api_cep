const buscarEstados = () => {
    fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados`)
    // Tratamento do sucesso
    .then(response => response.json())  // converter para json
    .then(json => {
        console.log(json);
        let estados = '';
        json.forEach(estado => estados = estados + `<option value="${estado.sigla}">${estado.nome}</option>`);
        console.log(estados);
        let ufs = document.getElementById('uf');
        ufs.innerHTML = estados;
        
    })
    .catch(err => console.log('Erro de solicitação', err));
    


}

buscarEstados();


const findByCep = (input) => {

   //console.log(input.value)

    // Solicitação GET.
    fetch(`https://viacep.com.br/ws/${input.value}/json/`)
        // Tratamento do sucesso
        .then(response => response.json())  // converter para json
        .then(json => {
            console.log(json);
            let logradouro = document.getElementById('logradouro');
            logradouro.value = json.logradouro;
            let uf = document.getElementById('uf');
            uf.value = json.uf;
        })    //imprimir dados no console
        .catch(err => console.log('Erro de solicitação', err)); // lidar com os erros por catch


}

// findByCep(60430005);