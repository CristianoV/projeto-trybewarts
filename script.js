const query = document.querySelector.bind(document);
const confirmacao = document.getElementById('agreement');
const botao = document.getElementById('submit-btn');
const contador = document.getElementById('counter');
contador.innerText = '500';
const textoDescrição = document.getElementById('textarea');

function validaEmail() {
  const regex = /\S+@\S+\.\S+/;
  const email = query('#login').value;
  const senha = query('#senha').value;
  const validEmail = regex.test(email); // https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
  if (validEmail && senha.length >= 6) alert('Olá, Tryber!');
  else alert('Email ou senha inválidos.');
}

function desabilitando() {
  if (confirmacao.checked === true) {
    botao.disabled = false;
  } else {
    botao.disabled = true;
  }
}

function contando() {
  const quantidadeTotal = 500;
  const quantidade = document.getElementById('textarea').value.length;
  contador.innerText = quantidadeTotal - quantidade;
}

query('#entrar').addEventListener('click', validaEmail);
confirmacao.addEventListener('click', desabilitando);
textoDescrição.addEventListener('keyup', contando);
