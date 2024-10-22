// Função para verificar se o usuário está no final da página
function verificarPosicao() {
    const alturaDaJanela = window.innerHeight;
    const posicaoAtual = window.scrollY;
    const alturaDaPagina = document.body.scrollHeight;
  
    if (posicaoAtual >= alturaDaPagina - alturaDaJanela - 100) {
      document.getElementById('btn-topo').style.display = 'block';
    } else {
      document.getElementById('btn-topo').style.display = 'none';
    }
  }
  
  // Adicionar evento de rolagem para verificar a posição
  window.addEventListener('scroll', verificarPosicao);
  
  // Função para ir para o topo da página
  function irParaTopo() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  // Adicionar evento de clique ao botão
  document.addEventListener('DOMContentLoaded', function() {
    const btnTopo = document.getElementById('btn-topo');
    btnTopo.addEventListener('click', irParaTopo);
  });