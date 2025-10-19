const searchInput = document.getElementById('searchInput');
const tabelas = document.querySelectorAll('.filmes-grid');
const noResults = document.getElementById('noResults');

document.querySelector('.search-form').addEventListener('submit', function(e){
  e.preventDefault();
});

searchInput.addEventListener('input', function(){
  const query = this.value.toLowerCase();
  let totalEncontrados = 0;

  tabelas.forEach(tabela => {
    let countTabela = 0;
    const filmes = tabela.querySelectorAll('td');

    filmes.forEach(filme => {
      const titulo = filme.dataset.titulo.toLowerCase();
      const ano = filme.dataset.ano.toLowerCase();
      const genero = filme.dataset.genero.toLowerCase();

      if(titulo.includes(query) || ano.includes(query) || genero.includes(query)) {
        filme.style.display = '';
        countTabela++;
      } else {
        filme.style.display = 'none';
      }
    });

    tabela.style.display = countTabela > 0 ? 'table' : 'none';
    totalEncontrados += countTabela;
  });

  noResults.style.display = totalEncontrados === 0 ? 'block' : 'none';
});

  const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});


    // Filtragem de Gêneros
    const botoes = document.querySelectorAll('.btn-genero');
    const filmes = document.querySelectorAll('.filme');

    botoes.forEach(btn => {
      btn.addEventListener('click', () => {
        const genero = btn.getAttribute('data-genero');
        filmes.forEach(f => {
          if (genero === 'todos' || f.getAttribute('data-genero') === genero) {
            f.style.display = 'inline-block';
          } else {
            f.style.display = 'none';
          }
        });
      });
    });