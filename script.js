const inputTarefa = document.querySelector('[data-input]');
const btnCriar = document.querySelector('[data-btn-criar]');
const listaTarefas = document.querySelector('[data-lista-tarefas]');

const semTarefa = document.createElement('h2');
semTarefa.classList.add('sem-tarefa');
semTarefa.innerText = `Nenhuma tarefa para você fazer. Crie tarefas no painel a esquerda.`;
listaTarefas.appendChild(semTarefa);

let arrayTarefas = [];

function criar() {
    if(inputTarefa.value !== '') {
        let objTarefa = {
            'Tarefa':inputTarefa.value, 
            'Finalizada':false
        };

        arrayTarefas.push(objTarefa);

        inputTarefa.value = '';
    }
}

function render() {
    listaTarefas.innerHTML = '';

    semTarefa.remove();

    if(arrayTarefas.length > 0) {

        arrayTarefas.forEach((trf, index) => {
            const tarefa = document.createElement('li');
            const tituloTarefa = document.createElement('p');
            const btnsDiv = document.createElement('div');
            const btnConcluir = document.createElement('button');
            const btnExcluir = document.createElement('button');

            const mediaQuery = window.matchMedia('(max-width: 640px)');

            function mobileQuery(e) {
                if (e.matches) {
                    btnConcluir.innerText = '';
                    btnExcluir.innerText = '';
                } else {
                    btnConcluir.innerText = `Concluir`;
                    btnExcluir.innerText = `Excluir`;
                }
            }

            mediaQuery.addEventListener('change', mobileQuery);

            mobileQuery(mediaQuery);

            tarefa.classList.add('tarefa');
            tituloTarefa.classList.add('title-tarefa');
            btnsDiv.classList.add('btns');
            btnConcluir.classList.add('btn', 'concluir');
            btnExcluir.classList.add('btn', 'excluir');

            btnsDiv.appendChild(btnConcluir);
            btnsDiv.appendChild(btnExcluir);

            tarefa.appendChild(tituloTarefa);
            tarefa.appendChild(btnsDiv);

            btnExcluir.addEventListener('click', () => excluir(tarefa));
            btnConcluir.addEventListener('click', () => concluir(tarefa));

            tituloTarefa.innerText = trf.Tarefa;
            tarefa.dataset.id = index;

            listaTarefas.appendChild(tarefa);
        })

    } else {
        const semTarefa = document.createElement('h2');
        semTarefa.classList.add('sem-tarefa');
        semTarefa.innerText = `Nenhuma tarefa para você fazer. Crie tarefas no painel a esquerda.`;
        listaTarefas.appendChild(semTarefa);
    }
}

function excluir(tarefa) {
    arrayTarefas.splice(tarefa.dataset.id, 1);
    render();
}

function concluir(tarefa) {
    arrayTarefas[tarefa.dataset.id].Finalizada = true;
    tarefa.classList.add('concluida');
}

btnCriar.addEventListener('click', (e) => {
    e.preventDefault();

    criar();
    render();
})