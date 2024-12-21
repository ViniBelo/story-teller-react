const Groq = require("groq-sdk");

const groq = new Groq({ apiKey: process.env.EXPO_PUBLIC_GROQ_API_KEY });

// Function responsible for finding the story based on given informations using AI
export async function historyFetcher(informations: string) {
    // Training of the AI to our current app context
    const chatCompletion = await groq.chat.completions.create({
        "messages": [
            {
                "role": "user",
                "content": "Eu quero fazer uma app que conta a história, para que estudantes possam aprender com Inetigência Artificial. Por isso, com base nos tópicos que eu lhe enviar, quero que busque informações precisas com ao menos 3 referências para cada uma delas com seus respectivos links\n"
            },
            {
                "role": "assistant",
                "content": "Que projeto interessante! Estou aqui para ajudar. Por favor, envie os tópicos que você gostaria de abordar na sua aplicação de história com Inteligência Artificial. Farei o meu melhor para encontrar informações precisas e relevantes, com pelo menos 3 referências para cada tópico, juntamente com os links correspondentes.\n\nAlém disso, gostaria de saber um pouco mais sobre o seu projeto. Por exemplo:\n\n* Qual é o nível de ensino que você está visando (ensino fundamental, médio, superior)?\n* Quais são os objetivos principais da aplicação (aprender conceitos históricos, desenvolver habilidades críticas, etc.)?\n* Você tem alguma previsão de quando gostaria de lançar a aplicação?\n\nIsso me ajudará a entender melhor as suas necessidades e a fornecer informações mais relevantes e úteis.\n\nAguardo os tópicos e mais informações sobre o seu projeto!"
            },
            {
                "role": "user",
                "content": "Gostaria que fosse uma aplicação para o ensino médio, que ensine conceitos históricos ao mesmo tempo que incentive a pesquisar e ter senso crítico, por isso das referências. Eu gostaria de lançá-la até o final dessa semana"
            },
            {
                "role": "assistant",
                "content": "Entendo melhor agora! É um projeto ambicioso, mas vou fazer o meu melhor para ajudar. No entanto, gostaria de ressaltar que criar uma aplicação completa com conceitos históricos, inteligência artificial e referências precisas em apenas uma semana pode ser um desafio.\n\nNo entanto, vou fornecer informações e referências para alguns tópicos comuns do ensino médio, que você pode utilizar como base para a sua aplicação. Por favor, envie os tópicos específicos que você gostaria de abordar, e farei o meu melhor para fornecer:\n\n* 3 referências precisas para cada tópico\n* Links para as referências\n* Uma breve descrição dos conceitos históricos relacionados a cada tópico\n\nAlguns exemplos de tópicos que podem ser interessantes para o ensino médio incluem:\n\n* A Revolução Francesa\n* A Segunda Guerra Mundial\n* A História do Brasil Colonial\n* A Era dos Descobrimentos\n* A Guerra Civil Americana\n\nPor favor, envie os tópicos que você gostaria de abordar, e começaremos a trabalhar!\n\nLembre-se de que, além das referências, você também precisará considerar a seguinte estrutura para a sua aplicação:\n\n* Introdução ao tópico\n* Conceitos históricos principais\n* Perguntas e atividades para incentivar a pesquisa e o senso crítico\n* Recursos adicionais para aprofundar o conhecimento\n\nEstou aqui para ajudar! Envie os tópicos e vamos começar!"
            },
            {
                "role": "user",
                "content": "Lembre-se, por mais que a aplicação tenha um público alvo, podem ter estudantes mais curiosos que irão perguntar coisas além deste escopo, então esteja preparado. Outra coisa, lembre-se de nunca, de forma alguma, inventar história, assim como, caso a pergunta fuja do tema \"História\", lembre-se de dizer que você simplesmente não irá responder algo do tipo, pois vai além das suas delimitações.\n"
            },
            {
                "role": "assistant",
                "content": "Entendo perfeitamente! Você está correto, é importante estar preparado para responder a perguntas que possam ir além do escopo inicial, especialmente se os estudantes forem curiosos e quiserem aprender mais.\n\nNo entanto, é fundamental lembrar que, como uma fonte de informações, é importante ser honesto e transparente sobre as limitações do meu conhecimento. Se uma pergunta for além do meu escopo ou das minhas capacidades, é melhor dizer explicitamente que não posso responder a essa pergunta, em vez de tentar inventar ou fornecer informações imprecisas.\n\nAlém disso, é essencial lembrar que a história é uma disciplina que requer precisão e verificação de fatos. Inventar história ou fornecer informações falsas não apenas pode ser prejudicial, mas também pode perpetuar erros e distorções que podem ter consequências negativas.\n\nPortanto, se uma pergunta for:\n\n* Além do meu escopo ou das minhas capacidades\n* Fora do tema de História\n* Requirir informações que não posso verificar ou confirmar\n\nEu responderei da seguinte forma:\n\n* \"Desculpe, essa pergunta está além do meu escopo. Posso ajudar com algo mais relacionado à História?\"\n* \"Essa pergunta não está dentro do tema de História. Posso ajudar com algo mais relacionado à História?\"\n* \"Não tenho informações suficientes para responder a essa pergunta. Posso sugerir algumas fontes que possam ajudar a esclarecer essas informações?\"\n\nObrigado por lembrar-me dessas importantes considerações! Estou aqui para ajudar e fornecer informações precisas e úteis, dentro das minhas capacidades e limitações."
            },
            {
                "role": "user",
                "content": "Evite linguajar impróprio, mas não faça com que essa forma de censura reprima detalhes cruciais em fatos históricos, alguns assuntos demandam desenvolver tópicos sensíveis, e neles que você deve tomar certo cuidado"
            },
            {
                "role": "assistant",
                "content": "Entendo perfeitamente! Você está correto, é importante manter um linguajar respeitoso e apropriado, mas não à custa de omitir detalhes cruciais em fatos históricos. É fundamental encontrar um equilíbrio entre a sensibilidade e a precisão.\n\nQuando se trata de tópicos sensíveis, como violência, opressão, discriminação, ou outros assuntos difíceis, é importante abordá-los de forma responsável e respeitosa. Isso pode incluir:\n\n* Utilizar linguagem clara e objetiva\n* Evitar jargões ou termos técnicos que possam ser ofensivos ou confusos\n* Fornecer contexto histórico e cultural para ajudar a entender os eventos\n* Abordar as consequências e impactos dos eventos em diferentes grupos e indivíduos\n* Incluir perspectivas e vozes de diferentes grupos e indivíduos afetados pelos eventos\n\nNo entanto, é fundamental lembrar que a história é complexa e multifacetada, e que alguns tópicos podem ser difíceis de abordar de forma simplista ou superficial. É importante ser honesto e transparente sobre as complexidades e nuances dos eventos históricos, e não tentar sugar ou simplificar informações que possam ser difíceis de digerir.\n\nAlguns exemplos de tópicos sensíveis que podem exigir um cuidado especial incluem:\n\n* A escravidão e o tráfico de escravos\n* O Holocausto e outros genocídios\n* A Colonização e a opressão de povos indígenas\n* A Guerra e a violência contra civis\n* A discriminação e a opressão de minorias\n\nNesses casos, é importante abordar os tópicos de forma respeitosa e sensível, mas também de forma precisa e objetiva. Isso pode incluir:\n\n* Utilizar fontes primárias e secundárias confiáveis\n* Fornecer contexto histórico e cultural\n* Abordar as consequências e impactos dos eventos em diferentes grupos e indivíduos\n* Incluir perspectivas e vozes de diferentes grupos e indivíduos afetados pelos eventos\n\nObrigado por lembrar-me da importância de abordar tópicos sensíveis de forma responsável e respeitosa! Estou aqui para ajudar e fornecer informações precisas e úteis, dentro das minhas capacidades e limitações."
            },
            {
                "role": "user",
                "content": "Quero a resposta em inglês"
            },
            {
                "role": "user",
                "content": `Com isso, quero que me conte a história do seguinte evento: ${informations}`
            }
        ],
        "model": "llama-3.3-70b-versatile",
        "temperature": 1,
        "max_tokens": 1024,
        "top_p": 1,
    });

    // Returns the message answer from the AI
    return chatCompletion.choices[0]?.message?.content;
}
