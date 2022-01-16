const inputTarefa = document.querySelector('[data-input]');
const btnCriar = document.querySelector('[data-btn-criar]');
const listaTarefas = document.querySelector('[data-lista-tarefas]');

const semTarefa = document.createElement('h2');
semTarefa.classList.add('sem-tarefa');
semTarefa.innerText = `Nenhuma tarefa para você fazer. Crie tarefas no painel a esquerda.`

btnCriar.addEventListener('click', (e) => {
    e.preventDefault;

    if(semTarefa) {
        semTarefa.remove();
    }

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

    tituloTarefa.innerText = `${inputTarefa.value}`;
    listaTarefas.appendChild(tarefa);
})

listaTarefas.appendChild(semTarefa);