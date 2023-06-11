// Função para rolar suavemente até uma seção do site ao clicar em um link
function smoothScroll(target) {
  const element = document.querySelector(target);
  window.scrollTo({
    top: element.offsetTop,
    behavior: 'smooth'
  });
}

// Event listeners para os links de navegação
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = e.target.getAttribute('href');
    smoothScroll(target);
  });
});

// Event listener para o formulário de contato
const contactForm = document.querySelector('form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // Lógica para processar o envio do formulário
  // Aqui você pode adicionar código para enviar os dados do formulário para um servidor, por exemplo
  // Exemplo básico: exibindo um alerta com os dados inseridos no formulário
  const name = contactForm.querySelector('input[type="text"]').value;
  const email = contactForm.querySelector('input[type="email"]').value;
  const message = contactForm.querySelector('textarea').value;

  alert(`Nome: ${name}\nEmail: ${email}\nMensagem: ${message}`);
  contactForm.reset(); // Limpa o formulário após o envio
});
