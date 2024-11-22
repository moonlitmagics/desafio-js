const btn = document.querySelector('.btn');
const controle = document.getElementById('controle');


controle.addEventListener('change', pegouMudanca);

const funcoes = {
    text(valor){
        btn.innerText = valor;
    },
    color(valor){
        btn.style.color = valor;
    },
    backgroundColor(valor){
        btn.style.backgroundColor = valor;
    },
    height(valor){
        btn.style.height = valor + 'px';
    },
    width(valor){
        btn.style.width = valor + 'px';
    },
    borda(valor){
        btn.style.borda = valor;
    },
    bordaRadius(valor){
        btn.style.bordaRadius = valor + 'px';
    },
    fonte(valor){
        btn.style.fonte = valor;
    },
    fonteSize(valor){
        btn.style.fonteSize = valor;
    }
}

function pegouMudanca (event){
    const valor = event.target.value;
    const name = event.target.name;

    funcoes[nome](valor);
    colocarStorage();
}

function colocarStorage(nome, valor){
    localStorage[nome]=valor;
}
colocarCss();

function colocarCss(){
    const variaveisLocal = Object.keys(localStorage);

    variaveisLocal.forEach(function(variavelAtual){
        funcoes[variavelAtual](localStorage[variavelAtual])
    })
};

