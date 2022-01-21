const inputTarefa = document.querySelector('[data-input]');
const btnCriar = document.querySelector('[data-btn-criar]');
const listaTarefas = document.querySelector('[data-lista-tarefas]');

const semTarefa = document.createElement('h2');
semTarefa.classList.add('sem-tarefa');
semTarefa.innerText = `Nenhuma tarefa para você fazer. Crie tarefas no painel a esquerda.`;

let arrayTarefas = [];

function criar () {
    if(inputTarefa.value !== '') {
        let objTarefa = {
            'Tarefa':`${inputTarefa.value}`, 
            'Finalizada':false
    };
        arrayTarefas.push(objTarefa);
    }

    console.log(arrayTarefas);
}

function render () {
    const tarefa = document.createElement('li');
    const tituloTarefa = document.createElement('p');
    const btnsDiv = document.createElement('div');
    const btnConcluir = document.createElement('button');
    const btnExcluir = document.createElement('button');

    btnConcluir.innerText = `Concluir`;
    btnExcluir.innerText = `Excluir`;

    tarefa.classList.add('tarefa');
    tituloTarefa.classList.add('title-tarefa');
    btnsDiv.classList.add('btns');
    btnConcluir.classList.add('btn', 'concluir');
    btnExcluir.classList.add('btn', 'excluir');

    btnsDiv.appendChild(btnConcluir);
    btnsDiv.appendChild(btnExcluir);

    tarefa.appendChild(tituloTarefa);
    tarefa.appendChild(btnsDiv);
    
    if(semTarefa && inputTarefa.value !== '') {
        arrayTarefas.forEach((trf) => {
            tituloTarefa.innerText = trf.Tarefa;
            listaTarefas.appendChild(tarefa);
            semTarefa.remove();
            inputTarefa.value = '';
        })
    }
}

btnCriar.addEventListener('click', (e) => {
    e.preventDefault;
    criar();
    render();
})

listaTarefas.appendChild(semTarefa);