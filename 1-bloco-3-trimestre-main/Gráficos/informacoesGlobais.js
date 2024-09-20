const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function visualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const pessoasConectadas = (dados.total_pessoas_conectadas/1e9)
    const pessoasMundo = (dados.total_pessoas_mundo/1e9)
    const horas = parseInt(dados.tempo_medio)
    const minutos = Math.round((dados.tempo_medio - horas) *100)
    const porcentagemConectada = ((pessoasConectadas/pessoasMundo)*100).toFixed(2)
    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `As pessoas mais seguidas do mundo, como influenciadores digitais, celebridades e líderes de opinião, exercem um impacto significativo em nossas vidas diárias. Sua capacidade de moldar tendências, comportamentos e opiniões é impulsionada pelo alcance massivo que têm nas redes sociais. Desde a moda até o estilo de vida e até questões sociais, suas postagens e interações podem influenciar nossas escolhas, atitudes e até mesmo nossa autoestima. `
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}
visualizarInformacoesGlobais()

