export function useServices () {
    const services = [{
        title: 'Detetização',
        imageURL: '/dedetizacao.jpg',
        intro: 'Realizamos dedetização contra diversas pragas. Acabe com os  insetos que podem atingir sua casa, condomínio ou empresa.',
        fullText: 'As pragas são mais do que um incômodo. Além disso, algumas transmitem doenças prejudiciais, enquanto outras podem causar prejuízos econômicos.Nós temos uma equipe experiente de técnicos treinados para usar os métodos de controle de pragas mais seguros e eficazes, que manterão você protegido.<br><br>Atuamos nas áreas residenciais, comerciais, industriais e hoteleiro.<br><br>Trabalhamos com técnicas inovadoras, que não necessita sua ausência durante, antes e depois do procedimento. Somos reconhecidos pela rapidez e qualidade em nosso trabalho.',
        link: 'detetizacao'
    },{
        title: 'Controle Integrado de Pragas (CIP)',
        imageURL: '/controle-integrado-de-pragas.png',
        intro: 'É uma seleção de métodos de controle e o desenvolvimento de critérios que garantam resultados favoráveis sob o ponto de vista higiênico, ecológico e econômico.',
        fullText: 'É uma ação que elimina e impede e proliferação de animais em ambientes.<br>Para que o controle seja realmente eficaz, é necessário conhecer bem os hábitos das espécies a serem combatidas. Assim, é essencial obter informações como o ciclo de vida, habilidades, alimentação e reprodução das espécies, e, a partir de tais informações as providências serão realizadas.<br>Algumas dessas ações, como a remoção ou a limitação de fontes de alimento, água e abrigos, são baseadas em fatores de controle. Se este manejo for combinado com ações de combate direto às espécies – com produtos químicos –, o resultado será o mais positivo possível, podendo erradicar a espécie.',
        link: 'controle-integrado-de-pragas'
    },{
        title: 'Desinfecção por névoa',
        imageURL: '/desinfeccao-por-nevoa.jpg',
        intro: 'Esse equipamento é desenvolvido para sanitização de ambientes, através do processo de Névoa Seca, transformando a solução desinfetante em micro partículas que aderem ao local onde foi aplicado, sem deixar nenhum tipo de humidade no local de aplicação. ',
        fullText: 'Nosso diluente (fluido utilizado para o sistema termo difusor) é especialmente desenvolvido para manter a estabilidade dos produtos a serem utilizados na sanitização, gerando assim uma névoa densa, seca e de fácil dispersão, atingindo rapidamente todas as áreas e equipamentos colocados em exposição ao sistema. Utilizamos Quartec 100 como nosso princípio ativo, esse desinfetante a base de Quartenário de Amônio possui eficácia comprovada contra microrganismos, além de possuir laudos de corrosividade, estabilidade e eficácia em diluição para uso em vaporização',
        link: 'desinfeccao-por-nevoa'
    },{
        title: 'Desratização',
        imageURL: '/desratizacao.jpg',
        intro: 'Os Ratos são uma das principais pragas urbanas presentes nas grandes cidades, sendo vetor de doenças graves como hantavírus e leptospirose.',
        fullText: 'O primeiro passo para controlar uma infestação de roedores é a execução de um bom serviço de desratização. Deve-se conhecer a espécie dos ratos que habitam o local e encontrar o local da reprodução, suas fontes de alimento, etc. Os roedores são animais extremante rápidos e resistentes, necessitando de apenas 3 gramas de alimento por dia para sobreviver.<br><b>Quanto mais demorar para desratizar, mais complexos se tornam os processos para realizar o trabalho de desratização.</b><br>A BacterClear trabalha com profissionais dedicados a acabar com seu problema e proporcionar a sua família todo conforto.',
        link: 'desratizacao'
    },{
        title: 'Descupinização',
        imageURL: '/descupinizacao.jpg',
        intro: 'Inimigos invisíveis danos reais, os cupins são muito vorazes e podem causar grandes prejuízos econômicos na sua casa ou comércio.',
        fullText: 'Este serviço também é conhecido como dedetização de cupim, no qual utilizamos os melhores produtos, com a mais alta tecnologia para o controle dessas pragas urbanas.<br>A dedetização de cupim é um processo complexo que deve ser realizado cuidadosamente para que possa atingir o efeito desejado sem causar nenhum efeito colateral.<br>Para combatê-los, nossa empresa utiliza os procedimentos de descupinização mais eficazes, além disso, os nossos profissionais são extremamente qualificados para oferecer um serviço de dedetização de cupins muito eficiente.',
        link: 'descupinizacao'
    },{
        title: 'Manejo de pombos e morcegos',
        imageURL: '/manejo-de-pombos-e-morcegos.jpg',
        intro: 'Diferente de insetos e outros animais nocivos, estas espécies não podem ser maltratadas, envenenadas e mortas. Isso é considerado crime ambiental pelo Ibama.',
        fullText: 'A remoção de pombos e morcegos no perímetro urbano é importante por vários motivos. Em primeiro lugar, esses animais podem causar danos a edifícios e estruturas, como fachadas de prédios, telhados e calhas. Eles também podem contaminar alimentos e água com suas fezes, o que pode causar doenças em seres humanos e animais domésticos.<br><br>' +
        ' Além disso, a presença excessiva de pombos e morcegos em áreas urbanas pode causar problemas de limpeza e manutenção, já que suas fezes podem sujar calçadas e outras superfícies. Isso pode prejudicar a aparência e a higiene das cidades, o que pode afetar a qualidade de vida das pessoas que vivem nessas áreas. <br><br>' +
        ' Por fim, o controle de pombos e morcegos no perímetro urbano também proteger esses animais. Eles podem sofrer com a falta de alimentos e abrigo em ambientes urbanos, o que pode afetar sua saúde e bem-estar. A remoção de pombos e morcegos deve ser realizada de forma humanitária, de acordo com as leis e regulamentações. <br><br>' +
        ' Em resumo, a remoção de pombos e morcegos no perímetro urbano é importante para proteger a saúde das pessoas, a integridade das estruturas e a higiene das cidades, além de proteger os próprios animais.',
        link: 'manejo-de-pombos-e-morcegos'
    },{
        title: 'Limpeza de caixa d’água',
        imageURL: '/limpeza-de-caixa-de-agua.jpg',
        intro: 'Quando a caixa d’água está suja, não é feita uma limpeza periódica, essa água pode provocar gastrointestinal na família, entre outras doenças.',
        fullText: 'É necessário programar a higienização da caixa d’água com antecedência para não haver o desperdício total da água. O registro da rua deve ser fechado ou a boia amarrada, para consumir a maior quantidade de água possível e no dia da execução haver o menor descarte, evitando assim desperdício.<br>No caso de condomínios em alguns casos é possível transferir água de uma caixa para outra, caso estejam próximas. Possuímos bombas com alta capacidade de sucção que fazem este trabalho e diminuem consideravelmente o descarte.<br>Feita a higienização, nossos técnicos fazem aplicação de uma pastilha efervescente para purificar a nova água e limpar os encanamentos.',
        link: 'limpeza-de-caixa-de-agua'
    },{
        title: 'Conserto de persianas',
        imageURL: '/conserto-de-persianas.jpeg',
        intro: 'Consertamos persianas externas e esquadrias em alumínio, assim como, adaptações e substituições, limpando suas caixas, muitas vezes contaminadas e alojadas por morcegos.',
        fullText: 'Consertamos persianas externas e esquadrias em alumínio, assim como, adaptações e substituições, limpando suas caixas, muitas vezes contaminadas e alojadas por morcegos.',
        link: 'conserto-de-persianas'
    },{
        title: 'Telas para insetos',
        imageURL: '/telas-para-insetos.jpg',
        intro: 'Fabricamos e instalamos telas de proteção contra insetos, de alta qualidade evitando assim a entrada de insetos e controlando as pragas.',
        fullText: 'Instalar uma tela é ajudar a impedir a proliferação de doenças, ela evita o incômodo de ruídos e picadas, deixando o ambiente  mais tranquilo. Outra vantagem é que a tela impede a passagem de outros animais. Dando mais segurança , diminuindo as chances de entrada de roedores e  morcegos e baratas.',
        link: 'telas-para-insetos'
    }]

    return services
  }