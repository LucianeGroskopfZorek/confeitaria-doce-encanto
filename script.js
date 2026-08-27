// Captura o formulário
const form = document.getElementById('form-contato');

// Adiciona o evento de envio
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio real do formulário

  // Exibe a mensagem de sucesso
  alert('Mensagem enviada com sucesso!');

  // Limpa os campos do formulário
  form.reset();
});
// Faz as imagens aparecerem suavemente ao carregar
window.addEventListener('load', () => {
  const imagens = document.querySelectorAll('.galeria img');
  imagens.forEach(img => {
    img.classList.add('aparecer');
  });
});
