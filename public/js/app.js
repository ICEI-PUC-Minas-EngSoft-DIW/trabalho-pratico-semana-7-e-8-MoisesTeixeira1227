
const cursos = [
    {
        "id": 1,
        "titulo": "JavaScript Moderno: Guia Completo",
        "descricao_curta": "Construa aplicações web interativas e dinâmicas do zero com a linguagem que domina o front-end.",
        "imagem": "https://picsum.photos/id/1/800/450",
        "instrutor": "Ana Souza",
        "nivel": "Iniciante a Avançado",
        "duracao": "25 Horas",
        "sobre": "Este curso é um mergulho profundo no universo do JavaScript. Partindo dos conceitos fundamentais como variáveis, tipos de dados e estruturas de controle, avançamos para tópicos avançados como Programação Assíncrona (Promises, Async/Await), manipulação do DOM, APIs e ES6+. Ao final, você será capaz de criar projetos complexos e entender o funcionamento dos frameworks modernos.",
        "aprendizados": [
            "Dominar os fundamentos e conceitos avançados do JavaScript.",
            "Manipular o DOM para criar páginas web dinâmicas.",
            "Trabalhar com requisições HTTP e APIs externas.",
            "Entender os paradigmas de programação síncrona e assíncrona."
        ],
        "aulas": [
            "Introdução e Configuração do Ambiente",
            "Fundamentos: Variáveis, Tipos e Operadores",
            "Estruturas de Controle: Condicionais e Laços",
            "Funções e Escopo de Variáveis",
            "Objetos e Arrays",
            "Manipulação do DOM (Document Object Model)",
            "Eventos e Interatividade",
            "JavaScript Assíncrono: Promises e Async/Await",
            "Requisições HTTP com a Fetch API",
            "Projeto Final: Criando um App de Lista de Tarefas"
        ]
    },
    {
        "id": 2,
        "titulo": "Python para Análise de Dados",
        "descricao_curta": "Transforme dados brutos em insights poderosos utilizando Python, Pandas e Matplotlib.",
        "imagem": "https://picsum.photos/id/2/800/450",
        "instrutor": "Carlos Oliveira",
        "nivel": "Intermediário",
        "duracao": "18 Horas",
        "sobre": "Neste curso, você aprenderá a utilizar o poder do Python para coletar, limpar, analisar e visualizar dados. Utilizaremos bibliotecas essenciais como Pandas para manipulação de dataframes, NumPy para computação numérica e Matplotlib/Seaborn para criar visualizações de dados impactantes. Ideal para quem busca uma carreira em Ciência de Dados ou Business Intelligence.",
         "aprendizados": [
            "Manipular grandes conjuntos de dados com Pandas.",
            "Realizar análises estatísticas e descritivas.",
            "Criar gráficos e dashboards informativos.",
            "Automatizar tarefas de limpeza e transformação de dados."
        ],
        "aulas": [
            "Introdução à Análise de Dados com Python",
            "Setup com Jupyter Notebook",
            "NumPy: Arrays e Operações Vetoriais",
            "Pandas: Series e DataFrames",
            "Limpeza e Tratamento de Dados (Data Cleaning)",
            "Agrupamento e Agregação de Dados",
            "Visualização de Dados com Matplotlib",
            "Visualização Avançada com Seaborn",
            "Estudo de Caso: Análise de Dados de Vendas"
        ]
    },
    {
        "id": 3,
        "titulo": "HTML5 e CSS3: O Guia Essencial",
        "descricao_curta": "Crie interfaces web incríveis, semânticas e responsivas do zero.",
        "imagem": "https://picsum.photos/id/3/800/450",
        "instrutor": "Juliana Lima",
        "nivel": "Iniciante",
        "duracao": "12 Horas",
        "sobre": "Este curso é a base para qualquer desenvolvedor web. Você aprenderá a estruturar suas páginas de forma semântica com HTML5 e a estilizá-las com o que há de mais moderno no CSS3, incluindo Flexbox, Grid Layout e animações. O curso é focado em projetos práticos para que você construa seu portfólio enquanto aprende.",
        "aprendizados": [
            "Estruturar páginas web de forma semântica e acessível.",
            "Dominar os layouts modernos com Flexbox e Grid.",
            "Criar sites responsivos que funcionam em qualquer dispositivo.",
            "Aplicar animações e transições para uma melhor UX."
        ],
        "aulas": [
           
        ]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    // Código para a página INDEX.HTML
    const container = document.getElementById('cursos-container');
    if (container) {
        cursos.forEach(curso => {
            const card = `
                <div class="course-card">
                    <img src="${curso.imagem}" alt="Capa do curso ${curso.titulo}">
                    <div class="card-content">
                        <h3>${curso.titulo}</h3>
                        <p>${curso.descricao_curta.substring(0, 100)}...</p>
                        <a href="detalhes.html?id=${curso.id}" class="btn">Ver Detalhes</a>
                    </div>
                </div>
            `;
            container.innerHTML += card;
        });
    }

    // CÓDIGO ATUALIZADO E MAIS ELABORADO PARA A PÁGINA DETALHES.HTML
    const detalhesContainer = document.getElementById('detalhes-curso');
    if (detalhesContainer) {
        const urlParams = new URLSearchParams(window.location.search);
        const cursoId = parseInt(urlParams.get('id'));
        const curso = cursos.find(c => c.id === cursoId);

        if (curso) {
            detalhesContainer.innerHTML = `
                <div class="details-hero">
                    <div class="container">
                        <h1>${curso.titulo}</h1>
                        <p class="hero-subtitle">${curso.descricao_curta}</p>
                        <div class="hero-meta">
                            <span><strong>Instrutor(a):</strong> ${curso.instrutor}</span>
                            <span><strong>Nível:</strong> ${curso.nivel}</span>
                            <span><strong>Duração:</strong> ${curso.duracao}</span>
                        </div>
                    </div>
                </div>

                <div class="details-main-content container">
                    <div class="details-left-col">
                        <img src="${curso.imagem}" alt="${curso.titulo}" class="course-main-image">

                        <h2>Sobre o Curso</h2>
                        <p>${curso.sobre}</p>

                        <h2 class="section-title">O que você vai aprender</h2>
                        <ul class="learn-list">
                            ${curso.aprendizados.map(item => `<li><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> ${item}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="details-right-col">
                        <div class="course-info-card">
                            <h3>Detalhes do Curso</h3>
                            <button class="btn-enroll">Comece a Aprender Agora</button>
                            <ul>
                                <li><strong>Instrutor:</strong> ${curso.instrutor}</li>
                                <li><strong>Duração Total:</strong> ${curso.duracao}</li>
                                <li><strong>Aulas:</strong> ${curso.aulas.length}</li>
                                <li><strong>Nível:</strong> ${curso.nivel}</li>
                                <li><strong>Idioma:</strong> Português</li>
                            </ul>
                            <a href="index.html" class="back-link">&larr; Voltar para a Home</a>
                        </div>
                    </div>
                </div>

                <div class="curriculum-section container">
                    <h2 class="section-title">Conteúdo Programático</h2>
                    <ol class="lesson-list">
                         ${curso.aulas.map(aula => `<li>${aula}</li>`).join('')}
                    </ol>
                </div>
            `;
        } else {
            detalhesContainer.innerHTML = '<p class="container">Curso não encontrado.</p>';
        }
    }
});