// cep: string
async function getCEP(cep) {
    if (!cep) return;
    // if (cep.length < 9 || cep.length > 9) return;


    return new Promise((resolve, reject) => {
        fetch(`http://viacep.com.br/ws/${cep}/json/`)
            .then(async (data) => {
                const response = await data.json();
                resolve(response)
            })
            .catch((error) => reject(error))
            .finally()
    })
}


async function handleCepBlur() {
    const cep = document.getElementById('cep').value;
    const address = await getCEP(cep);

    const logradouro = document.getElementById('logradouro');
    const complemento = document.getElementById('complemento');
    const bairro = document.getElementById('bairro');
    const localidade = document.getElementById('localidade');

    logradouro.value = address.logradouro;
    complemento.value = address.complemento;
    bairro.value = address.bairro;
    localidade.value = address.localidade;
}