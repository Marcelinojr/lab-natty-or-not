// Templates de histórias para cada gênero
const storyTemplates = {
    'fantasia': [
        {
            intro: 'Em um reino onde a magia flui como rios de luz',
            conflict: 'uma profecia antiga ameaça desfazer o equilíbrio entre os mundos',
            journey: '{protagonist} embarca em uma jornada épica através de {setting}, onde cada passo revela segredos ancestrais',
            climax: 'Ao encontrar {element}, {protagonist} descobre que o verdadeiro poder não vem da força, mas da coragem de acreditar',
            resolution: 'Com sabedoria recém-descoberta, {protagonist} restaura a harmonia e se torna uma lenda viva'
        },
        {
            intro: 'Nas terras esquecidas onde dragões ainda voam',
            conflict: '{protagonist} descobre possuir um dom raro que atrai tanto aliados quanto inimigos',
            journey: 'Através de {setting}, uma aventura repleta de magia e perigo se desenrola',
            climax: 'Quando {element} revela seu verdadeiro propósito, {protagonist} enfrenta seu maior medo',
            resolution: 'E assim nasce uma nova era, onde coragem e magia caminham lado a lado'
        }
    ],
    'ficcao-cientifica': [
        {
            intro: 'No ano 2147, a humanidade colonizou galáxias distantes',
            conflict: 'uma anomalia temporal ameaça colapsar toda a realidade conhecida',
            journey: '{protagonist}, um(a) cientista brilhante, investiga {setting} em busca de respostas',
            climax: 'Ao decifrar os segredos de {element}, uma verdade chocante sobre o universo é revelada',
            resolution: '{protagonist} altera o curso da história, provando que o impossível é apenas uma questão de perspectiva'
        },
        {
            intro: 'Em uma estação espacial orbitando um buraco negro',
            conflict: '{protagonist} detecta sinais de uma inteligência artificial ancestral',
            journey: 'A investigação em {setting} revela tecnologias além da compreensão humana',
            climax: '{element} se manifesta como a chave para transcender as limitações da consciência',
            resolution: 'Uma nova era de evolução começa, conectando passado, presente e futuro'
        }
    ],
    'aventura': [
        {
            intro: 'Onde montanhas tocam as nuvens e oceanos guardam tesouros milenares',
            conflict: 'um mapa antigo surge revelando um segredo que pode mudar o mundo',
            journey: '{protagonist} atravessa {setting}, enfrentando desafios que testam corpo e espírito',
            climax: 'Diante de {element}, a escolha entre glória e sacrifício define o verdadeiro caráter',
            resolution: 'A jornada transforma {protagonist}, que retorna não como partiu, mas como um verdadeiro herói'
        },
        {
            intro: 'Nos confins de terras inexploradas',
            conflict: '{protagonist} aceita o desafio de desbravar o desconhecido',
            journey: 'Cada passo em {setting} traz novos aliados, perigos e descobertas',
            climax: 'Ao finalmente alcançar {element}, o verdadeiro prêmio revela-se ser a transformação interior',
            resolution: 'E assim, {protagonist} prova que a maior aventura é descobrir quem realmente somos'
        }
    ],
    'misterio': [
        {
            intro: 'Em uma noite tempestuosa, um segredo enterrado há décadas vem à tona',
            conflict: 'pistas enigmáticas levam {protagonist} a questionar tudo que conhece',
            journey: 'A investigação em {setting} revela conexões sinistras e verdades ocultas',
            climax: '{element} surge como a peça final do quebra-cabeça, expondo uma conspiração surpreendente',
            resolution: 'A verdade liberta, mas transforma {protagonist} para sempre, mostrando que às vezes é melhor deixar certos mistérios sem resposta'
        },
        {
            intro: 'Quando o impossível se torna realidade',
            conflict: '{protagonist}, detetive perspicaz, é chamado para resolver o inexplicável',
            journey: 'Pistas em {setting} formam um padrão que desafia a lógica',
            climax: 'A descoberta de {element} revela que o maior mistério estava escondido à vista de todos',
            resolution: 'Justiça prevalece, mas {protagonist} aprende que nem todas as respostas trazem paz'
        }
    ],
    'romance': [
        {
            intro: 'Onde destinos se entrelaçam de formas inesperadas',
            conflict: '{protagonist} encontra alguém que desafia todas as suas certezas sobre amor',
            journey: 'Momentos em {setting} criam memórias que transcendem o tempo',
            climax: 'Quando {element} ameaça separá-los, {protagonist} descobre o verdadeiro significado de entrega',
            resolution: 'O amor vence, não por ser fácil, mas por valer cada sacrifício'
        },
        {
            intro: 'Em um mundo onde conexões verdadeiras são raras',
            conflict: '{protagonist} redescobre o que significa amar de verdade',
            journey: 'Cada momento em {setting} tece uma história de vulnerabilidade e força',
            climax: 'Diante de {element}, uma escolha difícil revela o poder do amor verdadeiro',
            resolution: 'E {protagonist} aprende que amar é aceitar imperfeições e celebrar a autenticidade'
        }
    ],
    'terror': [
        {
            intro: 'Nas sombras onde a sanidade vacila e pesadelos ganham forma',
            conflict: '{protagonist} é atraído para um horror além da compreensão humana',
            journey: 'Cada passo em {setting} revela horrores que não deveriam existir',
            climax: 'Ao confrontar {element}, {protagonist} questiona o que é real e o que é loucura',
            resolution: 'Alguns sobrevivem, mas nunca mais são os mesmos. O terror permanece, espreitando nas sombras'
        },
        {
            intro: 'Quando a escuridão sussurra promessas macabras',
            conflict: '{protagonist} descobre que alguns lugares guardam maldições antigas',
            journey: 'Em {setting}, a linha entre vivos e mortos se desfaz',
            climax: '{element} manifesta o mal em sua forma mais pura',
            resolution: 'O pesadelo termina, mas deixa cicatrizes eternas na alma de {protagonist}'
        }
    ]
};

// Função para gerar história baseada nas escolhas do usuário
function generateStory(genre, protagonist, setting, element) {
    const templates = storyTemplates[genre];
    const template = templates[Math.floor(Math.random() * templates.length)];
    
    // Substituir placeholders
    let story = '';
    story += `${template.intro}, ${template.conflict}.\n\n`;
    story += `${template.journey.replace(/{protagonist}/g, protagonist).replace(/{setting}/g, setting)}.\n\n`;
    story += `${template.climax.replace(/{protagonist}/g, protagonist).replace(/{element}/g, element)}.\n\n`;
    story += `${template.resolution.replace(/{protagonist}/g, protagonist)}`;
    
    return story;
}

// Função para adicionar variações e tornar cada história mais única
function enhanceStory(story, genre) {
    const enhancements = {
        'fantasia': ['✨', '🔮', '⚔️', '🏰'],
        'ficcao-cientifica': ['🚀', '🌌', '🤖', '⚡'],
        'aventura': ['🗺️', '⛰️', '🏴‍☠️', '💎'],
        'misterio': ['🔍', '🕵️', '🔐', '📜'],
        'romance': ['💕', '🌹', '💫', '💝'],
        'terror': ['👻', '🌑', '💀', '🕷️']
    };
    
    const icons = enhancements[genre];
    const randomIcon = icons[Math.floor(Math.random() * icons.length)];
    
    return `${randomIcon} ${story} ${randomIcon}`;
}

// Elementos do DOM
const generateBtn = document.getElementById('generateBtn');
const genreSelect = document.getElementById('genre');
const protagonistInput = document.getElementById('protagonist');
const settingInput = document.getElementById('setting');
const elementInput = document.getElementById('element');
const outputSection = document.getElementById('outputSection');
const storyContainer = document.getElementById('storyContainer');
const regenerateBtn = document.getElementById('regenerateBtn');
const copyBtn = document.getElementById('copyBtn');
const shareBtn = document.getElementById('shareBtn');

let currentStory = '';

// Gerar história
generateBtn.addEventListener('click', () => {
    const genre = genreSelect.value;
    const protagonist = protagonistInput.value.trim() || 'Alex';
    const setting = settingInput.value.trim() || 'um lugar misterioso';
    const element = elementInput.value.trim() || 'um artefato poderoso';
    
    // Simular carregamento
    generateBtn.disabled = true;
    generateBtn.innerHTML = '<span class="loading"></span> Gerando...';
    
    setTimeout(() => {
        currentStory = generateStory(genre, protagonist, setting, element);
        const enhancedStory = enhanceStory(currentStory, genre);
        
        storyContainer.innerHTML = `
            <h3>📖 ${getStoryTitle(genre, protagonist)}</h3>
            <p>${enhancedStory}</p>
        `;
        
        outputSection.style.display = 'block';
        outputSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        generateBtn.disabled = false;
        generateBtn.textContent = '🎨 Gerar História Mágica';
    }, 1500);
});

// Função para gerar título baseado no gênero
function getStoryTitle(genre, protagonist) {
    const titles = {
        'fantasia': `A Lenda de ${protagonist}`,
        'ficcao-cientifica': `${protagonist} e a Nova Fronteira`,
        'aventura': `As Aventuras de ${protagonist}`,
        'misterio': `O Enigma de ${protagonist}`,
        'romance': `O Amor de ${protagonist}`,
        'terror': `O Pesadelo de ${protagonist}`
    };
    
    return titles[genre] || `A História de ${protagonist}`;
}

// Regerar história
regenerateBtn.addEventListener('click', () => {
    generateBtn.click();
});

// Copiar história
copyBtn.addEventListener('click', () => {
    const textToCopy = storyContainer.textContent;
    
    navigator.clipboard.writeText(textToCopy).then(() => {
        copyBtn.textContent = '✅ Copiado!';
        setTimeout(() => {
            copyBtn.textContent = '📋 Copiar História';
        }, 2000);
    }).catch(err => {
        alert('Erro ao copiar texto. Por favor, tente manualmente.');
    });
});

// Compartilhar história
shareBtn.addEventListener('click', () => {
    const title = storyContainer.querySelector('h3').textContent;
    const text = `Acabei de criar uma história incrível com IA! ${title}\n\n#LabDIONattyOrNot`;
    
    if (navigator.share) {
        navigator.share({
            title: 'Minha História Gerada por IA',
            text: text,
            url: window.location.href
        }).catch(err => console.log('Erro ao compartilhar:', err));
    } else {
        // Fallback: copiar para clipboard
        navigator.clipboard.writeText(text + '\n' + window.location.href).then(() => {
            alert('Link copiado! Cole nas suas redes sociais 🚀');
        });
    }
});

// Adicionar efeitos de teclado
[protagonistInput, settingInput, elementInput].forEach(input => {
    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            generateBtn.click();
        }
    });
});
