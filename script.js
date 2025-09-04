  // Dados das fichas e atividades
        const fichas = {
            fichaNatal: {
                titulo: "CENÁRIO NATALINO: CRIE SUA ÁRVORE INTERATIVA",
                tituloVoz: "Cenário Natalino, Crie Sua Árvore Interativa",
                descricao: "Monte um cenário de Natal interativo que reproduz mensagens e músicas natalinas, explorando datas comemorativas e a utilização de módulos eletrônicos Bloco+.",
                materiais: [
                    "Kit Bloco+",
                    "Módulo Bloco+ PIC",
                    "Módulo Bloco+ Chipcorder",
                    "Módulo Bloco+ Power",
                    "Pedaço de papelão",
                    "Tinta verde"
                ],
                imagemMateriais: "https://via.placeholder.com/600x350?text=Materiais+Cenario+Natalino",
                passosMontagem: [
                    {
                        instrucao: "Corte dois pedaços triangulares de papelão para a árvore de Natal. Faça um corte na ponta de um e na base do outro para que se encaixem, conforme a Figura 1 do material.",
                        instrucaoVoz: "Corte dois pedaços triangulares de papelão para a árvore de Natal. Faça um corte na ponta de um e na base do outro para que se encaixem, conforme a Figura um do material.",
                        gif: "https://via.placeholder.com/400x300?text=Passo+1+Arvore+Natal"
                    },
                    {
                        instrucao: "Faça furos de aproximadamente 8 cm de diâmetro no papelão para pendurar os blocos do kit como enfeites na árvore.",
                        instrucaoVoz: "Faça furos de aproximadamente oito centímetros de diámetro no papelão para pendurar os blocos do kit como enfeites na árvore.",
                        gif: "https://via.placeholder.com/400x300?text=Passo+2+Furos+Enfeites"
                    },
                    {
                        instrucao: "Pinte o papelão de verde para simular o pinheiro. Após secar, encaixe as partes para que a árvore fique em pé.",
                        instrucaoVoz: "Pinte o papelão de verde para simular o pinheiro. Após secar, encaixe as partes para que a árvore fique em pé.",
                        gif: "https://via.placeholder.com/400x300?text=Passo+3+Pintar+e+Encaixar"
                    },
                    {
                        instrucao: "Monte o circuito utilizando os módules Bloco+ Power, Bloco+ Chipcorder e Bloco+ PIC, conectando-os conforme a Figura 2 do material.",
                        instrucaoVoz: "Monte o circuito utilizando os módulos Bloco Mais Power, Bloco Mais Chipcorder e Bloco Mais PIC, conectando-os conforme a Figura dois do material.",
                        gif: "https://via.placeholder.com/400x300?text=Passo+4+Montagem+Circuito+Natal"
                    },
                    {
                        instrucao: "Teste o funcionamento do circuito apertando a tecla 'ON' no módulo Bloco+ Power para ligá-lo.",
                        instrucaoVoz: "Teste o funcionamento do circuito apertando a tecla 'ON' no módulo Bloco Mais Power para ligá-lo.",
                        gif: "https://via.placeholder.com/400x300?text=Passo+5+Testar+Power"
                    },
                    {
                        instrucao: "Com o circuito ligado, use o módulo Bloco+ Chipcorder para gravar uma mensagem de Natal (máximo 10 segundos), por exemplo: 'HO! HO! HO! Feliz Natal para todos!'. Mantenha o botão 'REC' pressionado enquanto fala e solte ao terminar.",
                        instrucaoVoz: "Com o circuito ligado, use o módulo Bloco Mais Chipcorder para gravar uma mensagem de Natal, máximo dez segundos, por exemplo: 'HO HO HO Feliz Natal para todos!'. Mantenha o botão 'REC' pressionado enquanto fala e solte ao terminar.",
                        gif: "https://via.placeholder.com/400x300?text=Passo+6+Gravar+Mensagem"
                    }
                ],
                passosCodigo: [
                    {
                        instrucao: "Utilizando o módulo Bloco+ PIC, selecione o programa 3. Para isso, aperte a tecla 'Program' três vezes. Este programa é o 'cérebro' do circuito e irá acionar a gravação e uma música natalina.",
                        instrucaoVoz: "Utilizando o módulo Bloco Mais PIC, selecione o programa três. Para isso, aperte a tecla 'Program' três vezes. Este programa é o 'cérebro' do circuito e irá acionar a gravação e uma música natalina.",
                        gif: "https://via.placeholder.com/400x300?text=Ajustar+Bloco+PIC+Programa+3"
                    }
                ]
            },
            fichaErrosEletricos: {
                titulo: "DETETIVES DOS CIRCUITOS: DESCOBRINDO E CORRIGINDO ERROS ELÉTRICOS",
                tituloVoz: "Detetives dos Circuitos, Descobrindo e Corrigindo Erros Elétricos",
                descricao: "Estude um circuito elétrico simples com defeito, encontre e corrija os problemas que impedem o seu funcionamento correto, aprendendo sobre polaridade e resistências.",
                materiais: [
                    "Kit Bloco+",
                    "Módulo Bloco+ LED",
                    "Módulo Bloco+ Resistor H",
                    "Resistor de 330Ω (opcional, para aumentar o brilho do LED)"
                ],
                imagemMateriais: "https://via.placeholder.com/600x350?text=Materiais+Erros+Eletricos",
                passosMontagem: [
                    {
                        instrucao: "Monte o circuito elétrico com os módulos Bloco+ LED e Bloco+ Resistor H conforme o desenho da Figura 1 do material, que representa o circuito com os defeitos.",
                        instrucaoVoz: "Monte o circuito elétrico com os módulos Bloco Mais LED e Bloco Mais Resistor H conforme o desenho da Figura um do material, que representa o circuito com os defeitos.",
                        gif: "https://via.placeholder.com/400x300?text=Passo+1+Montar+Circuito+Com+Erro"
                    },
                    {
                        instrucao: "Analise o circuito montado: você notará que a ligação do Bloco+ LED está invertida (por isso o LED não acende) e o resistor do Bloco+ Resistor H tem um valor muito alto (10kΩ), o que limita bastante a corrente.",
                        instrucaoVoz: "Analise o circuito montado: você notará que a ligação do Bloco Mais LED está invertida, por isso o LED não acende, e o resistor do Bloco Mais Resistor H tem um valor muito alto, dez quilo ohms, o que limita bastante a corrente.",
                        gif: "https://via.placeholder.com/400x300?text=Passo+2+Analisar+Erros"
                    },
                    {
                        instrucao: "Corrija a ligação do Bloco+ LED invertendo sua polaridade. Lembre-se que o LED é um componente que só conduz (acende) quando ligado com a polaridade correta.",
                        instrucaoVoz: "Corrija a ligação do Bloco Mais LED invertendo sua polaridade. Lembre-se que o LED é um componente que só conduz, acende, quando ligado com a polaridade correta.",
                        gif: "https://via.placeholder.com/400x300?text=Passo+3+Corrigir+LED"
                    },
                    {
                        instrucao: "Para um brilho maior no LED, você pode substituir o resistor de 10kΩ do Bloco+ Resistor H por um de valor menor, como 330Ω. Se ligado em um resistor de 330Ω, o brilho será maior. A Figura 2 do material mostra o circuito corrigido.",
                        instrucaoVoz: "Para um brilho maior no LED, você pode substituir o resistor de dez quilo ohms do Bloco Mais Resistor H por um de valor menor, como trezentos e trinta ohms. Se ligado em um resistor de trezentos e trinta ohms, o brilho será maior. A Figura dois do material mostra o circuito corrigido.",
                        gif: "https://via.placeholder.com/400x300?text=Passo+4+Substituir+Resistor"
                    },
                    {
                        instrucao: "Verifique todas as conexões novamente e teste o funcionamento do circuito após as correções. O LED deve acender agora.",
                        instrucaoVoz: "Verifique todas as conexões novamente e teste o funcionamento do circuito após as correções. O LED deve acender agora.",
                        gif: "https://via.placeholder.com/400x300?text=Passo+5+Testar+Corrigido"
                    }
                ],
                passosCodigo: [] // Esta atividade não envolve programação no PIC, apenas correção de montagem.
            },
            fichaAlarmeIncendio: {
                titulo: "ALERTA VERMELHO: CONSTRUINDO UM ALARME DE INCÊNDIO",
                tituloVoz: "Alerta Vermelho, Construindo um Alarme de Incêndio",
                descricao: "Construa um alarme de incêndio avec acionamento manual e entenda como sistemas de segurança e combate a incêndios funcionam, utilizando um módulo Bloco+ PIC pré-programado.",
                materiais: [
                    "Kit Bloco+",
                    "Módulo Bloco+ Press Switch",
                    "Módulo Bloco+ PIC",
                    "Módulo Bloco+ Resistor H (para sinal estável no PIC)",
                    "Pedaços de madeira ou MDF (para a caixa do acionador)",
                    "Papelão grosso (para a caixa do hidrante)",
                    "Tinta vermelha",
                    "Alto-falante",
                    "LED vermelho"
                ],
                imagemMateriais: "https://via.placeholder.com/600x350?text=Materiais+Alarme+Incendio",
                passosMontagem: [
                    {
                        instrucao: "Acomode o módulo Bloco+ Press Switch em uma pequena caixa feita de madeira ou MDF, para criar um acionador manual, como ilustrado na Figura 2 do material.",
                        instrucaoVoz: "Acomode o módulo Bloco Mais Press Switch em uma pequena caixa feita de madeira ou MDF, para criar um acionador manual, como ilustrado na Figura dois do material.",
                        gif: "https://via.placeholder.com/400x300?text=Passo+1+Acionador+Manual"
                    },
                    {
                        instrucao: "Recorte um pedaço de papelão no formato de uma caixa de abrigo de mangueira de hidrante e pinte-o inteiramente de vermelho.",
                        instrucaoVoz: "Recorte um pedaço de papelão no formato de uma caixa de abrigo de mangueira de hidrante e pinte-o inteiramente de vermelho.",
                        gif: "https://via.placeholder.com/400x300?text=Passo+2+Caixa+Hidrante"
                    },
                    {
                        instrucao: "Posicione o acionador manual que você construiu ao lado da caixa de hidrante de papelão.",
                        instrucaoVoz: "Posicione o acionador manual que você construiu ao lado da caixa de hidrante de papelão.",
                        gif: "https://via.placeholder.com/400x300?text=Passo+3+Posicionar+Acionador"
                    },
                    {
                        instrucao: "Ligue o circuito montado, seguindo as conexões da Figura 1 do material. O módulo Bloco+ Resistor H garante um sinal estável no Bloco+ PIC.",
                        instrucaoVoz: "Ligue o circuito montado, seguindo as conexões da Figura um do material. O módulo Bloco Mais Resistor H garante um sinal estável no Bloco Mais PIC.",
                        gif: "https://via.placeholder.com/400x300?text=Passo+4+Ligar+Circuito"
                    }
                ],
                passosCodigo: [
                    {
                        instrucao: "No módulo Bloco+ PIC, selecione o programa 8. Este programa é configurado para ativar um alarme sonoro no alto-falante e acionar um LED vermelho para sinalização visual.",
                        instrucaoVoz: "No módulo Bloco Mais PIC, selecione o programa oito. Este programa é configurado para ativar um alarme sonoro no alto-falante e acionar um LED vermelho para sinalização visual.",
                        gif: "https://via.placeholder.com/400x300?text=Ajustar+Bloco+PIC+Programa+8"
                    },
                    {
                        instrucao: "Utilize o acionador manual (o botão Bloco+ Press Switch) para testar o circuito. Pressione-o para ativar o alarme. Quando o alarme parar, basta acionar novamente.",
                        instrucaoVoz: "Utilize o acionador manual, o botão Bloco Mais Press Switch, para testar o circuito. Pressione-o para ativar o alarme. Quando o alarme parar, basta acionar novamente.",
                        gif: "https://via.placeholder.com/400x300?text=Testar+Alarme"
                    }
                ]
            },
            fichaAnaliseAgua: {
                titulo: "A ÁGUA CONDUZ? CIENTISTA DA ÁGUA",
                tituloVoz: "A Água Conduz? Cientista da Água",
                descricao: "Monte um circuito para analisar a condutividade da água e descobrir seu grau de pureza, classificando materiais como isolantes ou condutores de eletricidade.",
                materiais: [
                    "Kit Bloco+",
                    "Cuba transparente (pode ser garrafa PET cortada)",
                    "Pedaços de arame (para eletrodos A e B)",
                    "Água destilada",
                    "Materiais para teste de contaminação: sal, vinagere, detergente, etc."
                ],
                imagemMateriais: "https://via.placeholder.com/600x350?text=Materiais+Analise+Agua",
                passosMontagem: [
                    {
                        instrucao: "Monte um circuito avec o kit Bloco+, que acenda um LED sempre que houver a passagem da corrente elétrica entre dois eletrodos metálicos (eletrodos A e B), conforme a Figura 1 do material.",
                        instrucaoVoz: "Monte um circuito com o kit Bloco Mais, que acenda um LED sempre que houver a passagem da corrente elétrica entre dois eletrodos metálicos, eletrodos A e B, conforme a Figura um do material.",
                        gif: "https://via.placeholder.com/400x300?text=Passo+1+Circuito+Condutividade"
                    },
                    {
                        instrucao: "Prenda os eletrodos de arame na cuba transparente vazia. Energize o circuito e observe que o LED deve permanecer apagado, indicando que o ar é um isolante.",
                        instrucaoVoz: "Prenda os eletrodos de arame na cuba transparente vazia. Energize o circuito e observe que o LED deve permanecer apagado, indicando que o ar é um isolante.",
                        gif: "https://via.placeholder.com/400x300?text=Passo+2+Eletrodos+Cuba+Vazia"
                    },
                    {
                        instrucao: "Cuidadosamente, coloque água destilada na cuba até que ela atinja os dois eletrodos. O LED deve permanecer apagado, pois a água destilada (água pura) não contém minerais dissolvidos e não conduz eletricidade.",
                        instrucaoVoz: "Cuidadosamente, coloque água destilada na cuba até que ela atinja os dois eletrodos. O LED deve permanecer apagado, pois a água destilada, água pura, não contém minerais dissolvidos e não conduz eletricidade.",
                        gif: "https://via.placeholder.com/400x300?text=Passo+3+Teste+Agua+Destilada"
                    },
                    {
                        instrucao: "Agora, contamine a água destilada com produtos disponíveis na cozinha, como sal, vinagre ou detergente. Observe o brilho o LED: quanto mais ele brilha, mais condutora a água se tornou.",
                        instrucaoVoz: "Agora, contamine a água destilada com produtos disponíveis na cozinha, como sal, vinagre ou detergente. Observe o brilho do LED: quanto mais ele brilha, mais condutora a água se tornou.",
                        gif: "https://via.placeholder.com/400x300?text=Passo+4+Teste+Contaminacao"
                    },
                    {
                        instrucao: "Estruture seu estudo com tabelas e gráficos, registrando a condutividade observada com cada tipo de contaminação. Você pode convencionar uma escala numérica (ex: 0 para LED apagado, 5 para brilho máximo).",
                        instrucaoVoz: "Estruture seu estudo com tabelas e gráficos, registrando a condutividade observada com cada tipo de contaminação. Você pode convencionar uma escala numérica, por exemplo: zero para LED apagado, cinco para brilho máximo.",
                        gif: "https://via.placeholder.com/400x300?text=Passo+5+Registrar+Dados"
                    }
                ],
                passosCodigo: [] // Esta atividade não envolve programação no PIC.
            },
            fichaCampainhaMusical: {
                titulo: "MINHA CAMPAINHA PERSONALIZADA: SONS E MENSAGENS",
                tituloVoz: "Minha Campainha Personalizada, Sons e Mensagens",
                descricao: "Crie uma campainha musical com mensagens gravadas, aprendendo sobre gravação e reprodução de sounds com o kit Bloco+.",
                materiais: [
                    "Kit Bloco+",
                    "Módulo Bloco+ Chipcorder",
                    "Módulo Bloco+ Press Switch",
                    "Módulo Bloco+ Resistor L (para estabilizar o nível lógico do borne PLAY)",
                    "Pedaço de papelão (para criar um cenário)"
                ],
                imagemMateriais: "https://via.placeholder.com/600x350?text=Materiais+Campainha",
                passosMontagem: [
                    {
                        instrucao: "Monte o circuito da campainha musical utilizando o Bloco+ Chipcorder, Bloco+ Press Switch e Bloco+ Resistor L, conforme as instruções do material.",
                        instrucaoVoz: "Monte o circuito da campainha musical utilizando o Bloco Mais Chipcorder, Bloco Mais Press Switch e Bloco Mais Resistor L, conforme as instruções do material.",
                        gif: "https://via.placeholder.com/400x300?text=Passo+1+Montagem+Campainha"
                    },
                    {
                        instrucao: "Conecte o módulo Bloco+ Press Switch de forma separada do restante do circuito principal, pois ele funcionará como o botão da campainha, que geralmente fica distante do mecanismo.",
                        instrucaoVoz: "Conecte o módulo Bloco Mais Press Switch de forma separada do restante do circuito principal, pois ele funcionará como o botão da campainha, que geralmente fica distante do mecanismo.",
                        gif: "https://via.placeholder.com/400x300?text=Passo+2+Separar+Botao"
                    },
                    {
                        instrucao: "Crie um cenário em papelão, como la fachada de uma casa ou a entrada de uma loja, e integre o circuito da campainha neste cenário para torná-lo mais realista.",
                        instrucaoVoz: "Crie um cenário em papelão, como la fachada de uma casa ou a entrada de uma loja, e integre o circuito da campainha neste cenário para torná-lo mais realista.",
                        gif: "https://via.placeholder.com/400x300?text=Passo+3+Cenario+Campainha"
                    },
                    {
                        instrucao: "Grave uma música ou uma mensagem no módule Bloco+ Chipcorder. O tempo máximo de gravação é de 10 segundos. Para gravar, pressione e mantenha o botão 'REC' enquanto fala ou toca um som próximo ao microfone do módulo.",
                        instrucaoVoz: "Grave uma música ou uma mensagem no módulo Bloco Mais Chipcorder. O tempo máximo de gravação é de dez segundos. Para gravar, pressione e mantenha o botão 'REC' enquanto fala ou toca um som próximo ao microfone do módulo.",
                        gif: "https://via.placeholder.com/400x300?text=Passo+4+Gravar+Som"
                    },
                    {
                        instrucao: "Para reproduzir o som ou a mensagem que você gravou, pressione a tecla do módulo Bloco+ Press Switch.",
                        instrucaoVoz: "Para reproduzir o som ou a mensagem que você gravou, pressione a tecla do módulo Bloco Mais Press Switch.",
                        gif: "https://via.placeholder.com/400x300?text=Passo+5+Testar+Campainha"
                    }
                ],
                passosCodigo: [] // Esta atividade não envolve programação no PIC, mas gravação no Chipcorder.
            }
        };

        // Variáveis de estado da aplicação
        let userName = "";
        let currentFicha = null;
        let currentStep = 0;
        let isMontagemPhase = true;
        let recognition = null;
        let isMicActive = true; // Microfone inicia ativo por padrão
        let isSystemSpeaking = false;
        let speechQueue = [];
        let isProcessingQueue = false;
        let currentScreen = "welcome"; // Tela atual: welcome, fichaSelection, ficha, completion
        let doubtCounter = 0; // Contador para ajuda do professor
        let isAutoListening = false; // Controle para escuta automática
        let isSpeechPaused = false; // Controle para pausar a fala
        
        // Elementos da DOM
        const chatContainer = document.getElementById('chatContainer');
        const userInput = document.getElementById('userInput');
        const sendBtn = document.getElementById('sendBtn');
        const voiceBtn = document.getElementById('voiceBtn');
        const micToggle = document.getElementById('micToggle');
        const listeningIndicator = document.getElementById('listeningIndicator');
        const speechQueueInfo = document.getElementById('speechQueueInfo');
        const queueCount = document.getElementById('queueCount');
        const pauseSpeechBtn = document.getElementById('pauseSpeechBtn');
        const accessibilityToggle = document.getElementById('accessibilityToggle');
        const accessibilityPanel = document.getElementById('accessibilityPanel');
        const highContrastToggle = document.getElementById('highContrastToggle');
        const reducedMotionToggle = document.getElementById('reducedMotionToggle');
        const largerTextToggle = document.getElementById('largerTextToggle');
        
        // Inicializar a síntese de voz
        const synth = window.speechSynthesis;
        
        // Verificar suporte à síntese de voz
        if (!('speechSynthesis' in window)) {
            addChatMessage("Bloquito-Fichas", "Seu navegador não suporte síntese de voz. Recomendo usar o Google Chrome para uma experiência completa.", 'bot');
        }
        
        // Configurar reconhecimento de voz (Web Speech API)
        function setupSpeechRecognition() {
            try {
                const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
                if (SpeechRecognition) {
                    recognition = new SpeechRecognition();
                    recognition.continuous = true;
                    recognition.lang = 'pt-BR';
                    recognition.interimResults = false;
                    recognition.maxAlternatives = 1;
                    
                    recognition.onresult = function(event) {
                        if (isSystemSpeaking) return;
                        
                        const transcript = event.results[event.results.length - 1][0].transcript;
                        console.log("Comando de voz recebido:", transcript);
                        userInput.value = transcript;
                        processUserResponse(transcript);
                    };
                    
                    recognition.onerror = function(event) {
                        console.error('Erro no reconhecimento de voz:', event.error);
                        listeningIndicator.style.display = 'none';
                        voiceBtn.classList.remove('listening');
                        if (isMicActive && isAutoListening) {
                            setTimeout(() => {
                                if (isMicActive && isAutoListening && !isSystemSpeaking) recognition.start();
                            }, 1000); 
                        }
                    };
                    
                    recognition.onend = function() {
                        listeningIndicator.style.display = 'none';
                        voiceBtn.classList.remove('listening');
                        if (isMicActive && isAutoListening && !isSystemSpeaking) {
                            setTimeout(() => {
                                if (isMicActive && isAutoListening && !isSystemSpeaking) recognition.start();
                            }, 500);
                        }
                    };
                    
                    recognition.onstart = function() {
                        listeningIndicator.style.display = 'block';
                        voiceBtn.classList.add('listening');
                    };
                }
            } catch (e) {
                console.error("API de Reconhecimento de Voz não suportada ou problema na inicialização:", e);
                voiceBtn.style.display = 'none';
                micToggle.style.display = 'none';
                addChatMessage("Bloquito-Fichas", "Seu navegador não oferece suporte completo ao reconhecimento de voz. Por favor, use a digitação.", 'bot');
            }
        }
        
        // Event listeners
        sendBtn.addEventListener('click', () => {
            if (userInput.value.trim() !== '') {
                processUserResponse(userInput.value.trim());
                userInput.value = '';
            }
        });
        
        userInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                sendBtn.click();
            }
        });
        
        voiceBtn.addEventListener('click', () => {
            toggleMic(!isMicActive);
        });
        
        micToggle.addEventListener('click', () => {
            toggleMic(!isMicActive);
        });

        pauseSpeechBtn.addEventListener('click', () => {
            toggleSpeechPause();
        });

        accessibilityToggle.addEventListener('click', () => {
            accessibilityPanel.classList.toggle('hidden');
        });

        highContrastToggle.addEventListener('change', () => {
            document.body.classList.toggle('high-contrast', highContrastToggle.checked);
        });

        reducedMotionToggle.addEventListener('change', () => {
            document.body.classList.toggle('reduced-motion', reducedMotionToggle.checked);
        });

        largerTextToggle.addEventListener('change', () => {
            document.body.classList.toggle('larger-text', largerTextToggle.checked);
        });
        
        // Delegação de eventos para elementos dinâmicos
        document.addEventListener('click', function(e) {
            // Botões de opção (Sim, Não, Repetir)
            if (e.target.classList.contains('option-btn')) {
                const response = e.target.getAttribute('data-response');
                processUserResponse(response);
            }
            
            // Botões de ação (Curiosidade, Nova Ficha, Voltar)
            if (e.target.classList.contains('action-btn')) {
                const action = e.target.id;
                if (action === 'curiosityBtn') {
                    showCuriosity();
                } else if (action === 'restartFichaBtn') {
                    showFichaSelection();
                } else if (action === 'goHomeBtn') {
                    askSameOrNewUser();
                } else if (action === 'restartFichaBtnAgain') {
                    showFichaSelection();
                } else if (action === 'goHomeBtnAgain') {
                    askSameOrNewUser();
                }
            }
            
            // Cartões de ficha
            if (e.target.closest('.ficha-card')) {
                const fichaCard = e.target.closest('.ficha-card');
                const fichaKey = fichaCard.getAttribute('data-ficha');
                selectFicha(fichaKey);
            }
            
            // Botão iniciar
            if (e.target.id === 'startBtn') {
                userName = document.getElementById('nameInput').value.trim();
                if (userName) {
                    addToSpeechQueue(`Olá ${userName}! Bem-vindo ao Bloquito-Fichas. Estou aqui para te ajudar nas atividades com blocos eletrônicos.`, true);
                    setTimeout(() => {
                        showFichaSelection();
                    }, 3500);
                } else {
                    alert("Por favor, digite seu nome para continuar.");
                }
            }
        });
        
        // Função para ligar/desligar o microfone
        function toggleMic(activate) {
            isMicActive = activate;
            
            if (!recognition) {
                setupSpeechRecognition();
            }
            
            if (isMicActive) {
                micToggle.textContent = '🔴';
                micToggle.parentElement.querySelector('span').textContent = 'Microfone: Ativo';
                micToggle.setAttribute('aria-label', 'Desativar microfone');
                if (recognition) {
                    recognition.start();
                }
            } else {
                micToggle.textContent = '🔵';
                micToggle.parentElement.querySelector('span').textContent = 'Microfone: Inativo';
                micToggle.setAttribute('aria-label', 'Ativar microfone');
                if (recognition) {
                    recognition.stop();
                    listeningIndicator.style.display = 'none';
                    voiceBtn.classList.remove('listening');
                }
            }
        }

        // Função para pausar/retomar a fala
        function toggleSpeechPause() {
            isSpeechPaused = !isSpeechPaused;
            
            if (isSpeechPaused) {
                synth.pause();
                pauseSpeechBtn.textContent = '▶️';
                pauseSpeechBtn.setAttribute('aria-label', 'Retomar fala');
                pauseSpeechBtn.title = 'Retomar Fala';
            } else {
                synth.resume();
                pauseSpeechBtn.textContent = '⏸️';
                pauseSpeechBtn.setAttribute('aria-label', 'Pausar fala');
                pauseSpeechBtn.title = 'Pausar Fala';
            }
        }
        
        // Função para ativar escuta automática (sem necessidade de clicar)
        function activateAutoListening() {
            isAutoListening = true;
            if (isMicActive && recognition) {
                recognition.start();
            }
        }
        
        // Função para adicionar texto à fila de fala
        function addToSpeechQueue(text, isPhonetic = false) {
            speechQueue.push({text, isPhonetic});
            updateQueueInfo();
            
            if (!isProcessingQueue) {
                processSpeechQueue();
            }
        }
        
        // Função para processar a fila de fala
        function processSpeechQueue() {
            if (speechQueue.length === 0 || isSpeechPaused) {
                isProcessingQueue = false;
                return;
            }
            
            isProcessingQueue = true;
            const {text, isPhonetic} = speechQueue.shift();
            updateQueueInfo();
            
            // Usar a versão fonética se solicitado
            const speechText = isPhonetic ? convertToPhonetic(text) : text;
            
            speakText(speechText, () => {
                setTimeout(() => {
                    processSpeechQueue();
                }, 500);
            });
        }
        
        // Função para atualizar a informação da fila
        function updateQueueInfo() {
            queueCount.textContent = speechQueue.length;
            if (speechQueue.length > 0) {
                speechQueueInfo.style.display = 'block';
                pauseSpeechBtn.classList.remove('hidden');
            } else {
                speechQueueInfo.style.display = 'none';
                pauseSpeechBtn.classList.add('hidden');
            }
        }
        
        // Função para converter texto para versão fonética
        function convertToPhonetic(text) {
            // Mapeamento de termos técnicos e números para pronúncia mais clara
            const phoneticMap = {
                "LDR": "L D R",
                "LED": "ledi",
                "LEDs": "ledis",
                "A0": "A zero",
                "D2": "D dois",
                "D3": "D três",
                "D4": "D quatro",
                "GND": "G N D",
                "DC": "D C",
                "ESP32": "E S P trinta e dois",
                "Ardublock": "Arduíno Block",
                "SE": "Se",
                "ENTÃO": "Então",
                "IA": "I A",
                "Bloco\+ Bot": "Bloco Mais Boti", 
                "Bloco\+": "Bloco Mais", 
                "PIC": "PIC", 
                "Chipcorder": "Chipcorder", 
                "Press Switch": "Press Switch", 
                "Resistor H": "Resistor H", 
                "Resistor L": "Resistor L", 
                "10kΩ": "dez quilo ohms", 
                "330Ω": "trezentos e trinta ohms", 
                "10": "dez",
                "8": "oito",
                "500": "quinhentos",
                "30": "trinta",
                "3": "três",
                "8": "oito",
                "7": "sete",
                "5": "cinco"
            };
            
            let result = text;
            for (const [key, value] of Object.entries(phoneticMap)) {
                if (key.includes("Bloco\+ Bot")) {
                     result = result.replace(new RegExp(`\\b${key.replace('\+','\\+')}\\b`, 'gi'), value);
                } else if (key.includes("Bloco\+")) {
                     result = result.replace(new RegExp(`\\b${key.replace('\+','\\+')}\\b`, 'gi'), value);
                } else {
                    result = result.replace(new RegExp(`\\b${key}\\b`, 'gi'), value);
                }
            }
            
            return result;
        }
        
        // Função para detectar seleção de ficha por voz
        function detectFichaFromVoice(command) {
            const normalized = command.toLowerCase().trim();
            
            for (const key in fichas) {
                const ficha = fichas[key];
                const tituloNormalized = ficha.titulo.toLowerCase();
                const tituloVozNormalized = ficha.tituloVoz.toLowerCase();
                
                if (normalized.includes(tituloNormalized) || 
                    normalized.includes(tituloVozNormalized) ||
                    normalized.includes(key.toLowerCase()) ||
                    (key === "fichaNatal" && (normalized.includes("natal") || normalized.includes("cenário") || normalized.includes("arvore"))) ||
                    (key === "fichaErrosEletricos" && (normalized.includes("erro") || normalized.includes("elétrico") || normalized.includes("detetive") || normalized.includes("circuitos"))) ||
                    (key === "fichaAlarmeIncendio" && (normalized.includes("alarme") || normalized.includes("incêndio") || normalized.includes("vermelho"))) ||
                    (key === "fichaAnaliseAgua" && (normalized.includes("água") || normalized.includes("pureza") || normalized.includes("cientista") || normalized.includes("condutividade"))) ||
                    (key === "fichaCampainhaMusical" && (normalized.includes("campainha") || normalized.includes("música") || normalized.includes("personalizada")))
                ) {
                    return key;
                }
            }
            
            const fichaKeys = Object.keys(fichas);
            for (let i = 0; i < fichaKeys.length; i++) {
                const num = i + 1;
                const numWords = ["um", "dois", "três", "quatro", "cinco"];
                if (normalized.includes(`ficha ${num}`) || 
                    normalized.includes(`ficha ${numWords[i]}`) ||
                    (i === 0 && (normalized.includes("primeira ficha") || normalized.includes("primeira"))) ||
                    (i === 1 && (normalized.includes("segunda ficha") || normalized.includes("segunda"))) ||
                    (i === 2 && (normalized.includes("terceira ficha") || normalized.includes("terceira"))) ||
                    (i === 3 && (normalized.includes("quarta ficha") || normalized.includes("quarta"))) ||
                    (i === 4 && (normalized.includes("quinta ficha") || normalized.includes("quinta")))
                ) {
                    return fichaKeys[i];
                }
            }
            
            return null;
        }
        
        // Funções principais
        function startApp() {
            userName = "";
            currentFicha = null;
            currentStep = 0;
            isMontagemPhase = true;
            doubtCounter = 0;
            showWelcomeScreen();
            setupSpeechRecognition();
            toggleMic(true); // Ativa o microfone automaticamente
        }
        
        function showWelcomeScreen() {
            currentScreen = "welcome";
            chatContainer.innerHTML = '';
            
            const welcomeHTML = `
                <div class="welcome-screen">
                    <h2>Bem-vindo ao Bloquito-Fichas!</h2>
                    <p>Seu assistente interativo para atividades de robótica educacional. Vamos aprender juntos?</p>
                    <input type="text" class="name-input" id="nameInput" placeholder="Como você se chama?" aria-label="Digite seu nome">
                    <button class="start-btn" id="startBtn">Começar</button>
                </div>
            `;
            
            chatContainer.innerHTML = welcomeHTML;
            userInput.focus();
        }
        
        function showFichaSelection() {
            currentScreen = "fichaSelection";
            chatContainer.innerHTML = '';
            
            addChatMessage("Bloquito-Fichas", `Olá ${userName}! Escolha uma das fichas abaixo para começarmos nossa aventura:`, 'bot');
            
            const fichaSelectionHTML = `
                <div class="ficha-selection">
                    ${Object.keys(fichas).map((key) => `
                        <div class="ficha-card" data-ficha="${key}" aria-label="${fichas[key].titulo} - ${fichas[key].descricao}">
                            <img src="https://via.placeholder.com/300x160?text=${encodeURIComponent(fichas[key].titulo.replace(':', '').replace('?', '').replace('!', ''))}" alt="${fichas[key].titulo}">
                            <div class="ficha-card-content">
                                <h3>${fichas[key].titulo}</h3>
                                <p>${fichas[key].descricao}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
                <div class="options-container" style="padding: 0 20px 20px;">
                    <p style="font-size: 1rem; color: var(--scratch-dark); opacity: 0.8;">Você também pode dizer, por exemplo: "Ficha 1", "Campainha Musical" ou "Alarme de Incêndio".</p>
                </div>
            `;
            
            chatContainer.innerHTML += fichaSelectionHTML;
            
            addToSpeechQueue(`Olá ${userName}! Escolha uma das fichas para começar. Você pode clicar na ficha que desejar ou dizer "Ficha um", "Ficha dois" ou o nome da ficha.`, true);
            chatContainer.scrollTop = chatContainer.scrollHeight;
            
            // Ativar escuta automática para seleção de ficha
            activateAutoListening();
        }
        
        function selectFicha(fichaKey) {
            currentScreen = "ficha";
            currentFicha = fichas[fichaKey];
            currentStep = 0;
            isMontagemPhase = true;
            doubtCounter = 0;
            
            chatContainer.innerHTML = '';
            
            addChatMessage("Bloquito-Fichas", `Excelente escolha, ${userName}! Vamos mergulhar na ficha: "${currentFicha.titulo}"`, 'bot');
            addChatMessage("Bloquito-Fichas", currentFicha.descricao, 'bot');
            
            setTimeout(() => {
                addToSpeechQueue(`Para esta atividade, vamos precisar dos seguintes materiais: ${currentFicha.materiais.join(', ')}. Você já separou tudo? Responda "sim", "não" ou "repetir".`, true);
                
                addChatMessage("Bloquito-Fichas", "Para esta atividade, vamos precisar dos seguintes materiais:", 'bot');
                
                const materialsHTML = `
                    <div class="materiais-container">
                        <img src="${currentFicha.imagemMateriais}" alt="Materiais necessários para ${currentFicha.titulo}">
                        <div class="materiais-lista">
                            <ul>
                                ${currentFicha.materiais.map(material => `<li>${material}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                `;
                
                chatContainer.innerHTML += materialsHTML;
                
                const optionsHTML = `
                    <div class="options-container">
                        <button class="option-btn" data-response="sim" aria-label="Sim, já separei os materiais">Sim, já separei</button>
                        <button class="option-btn" data-response="não" aria-label="Não, preciso de mais tempo">Não, preciso de mais tempo</button>
                        <button class="option-btn" data-response="repetir" aria-label="Repetir a lista de materiais">Repetir os materiais</button>
                    </div>
                `;
                
                chatContainer.innerHTML += `<div class="chat-message bot-message"><div class="message-content"><strong>Bloquito-Fichas:</strong> Você já separou todos os materiais?</div></div>`;
                chatContainer.innerHTML += optionsHTML;
                
                chatContainer.scrollTop = chatContainer.scrollHeight;
            }, 1000);
            
            // Ativar escuta automática para interação com a ficha
            activateAutoListening();
        }
        
        function processUserResponse(response) {
            const normalizedResponse = response.toLowerCase().trim();
            
            addChatMessage(userName, response, 'user');
            
            // Lógica para seleção de ficha por voz na tela de seleção
            if (currentScreen === "fichaSelection") {
                const fichaKey = detectFichaFromVoice(normalizedResponse);
                if (fichaKey) {
                    selectFicha(fichaKey);
                    return;
                } else {
                    addChatMessage("Bloquito-Fichas", "Não entendi qual ficha você quer. Por favor, tente dizer o nome completo da ficha ou o número, ou clique em uma das opções acima.", 'bot');
                    addToSpeechQueue("Não entendi qual ficha você quer. Por favor, tente dizer o nome completo da ficha ou o número, ou clique em uma das opções acima.", true);
                    return;
                }
            }

            // Lógica para resposta à pergunta inicial de materiais (currentStep === 0)
            if (currentStep === 0) {
                if (normalizedResponse.includes('sim') || normalizedResponse.includes('pronto') || normalizedResponse.includes('feito')) {
                    addChatMessage("Bloquito-Fichas", "Perfeito! Vamos começar a montagem passo a passo.", 'bot');
                    addToSpeechQueue("Perfeito! Vamos começar a montagem passo a passo.", true);
                    doubtCounter = 0;
                    setTimeout(() => {
                        nextStep();
                    }, 1500);
                } else if (normalizedResponse.includes('não') || normalizedResponse.includes('nao') || normalizedResponse.includes('preciso de mais tempo')) {
                    addChatMessage("Bloquito-Fichas", "Tudo bem! Sem pressa. Avise-me quando estiver pronto para começar a montagem, dizendo 'estou pronto'.", 'bot');
                    addToSpeechQueue("Tudo bem! Sem pressa. Avise-me quando estiver pronto para começar a montagem, dizendo 'estou pronto'.", true);
                    
                    const optionsHTML = `
                        <div class="options-container">
                            <button class="option-btn" data-response="pronto">Estou pronto</button>
                            <button class="option-btn" data-response="repetir">Repetir materiais</button>
                        </div>
                    `;
                    chatContainer.innerHTML += optionsHTML;
                    chatContainer.scrollTop = chatContainer.scrollHeight;

                } else if (normalizedResponse.includes('repetir')) {
                    addToSpeechQueue(`Para esta atividade, vamos precisar dos seguintes materiais: ${currentFicha.materiais.join(', ')}. Você já separou tudo? Responda "sim", "não" ou "repetir".`, true);
                    addChatMessage("Bloquito-Fichas", "Ok, repetindo os materiais:", 'bot');
                    const materialsHTML = `
                        <div class="materiais-container">
                            <img src="${currentFicha.imagemMateriais}" alt="Materiais necessários para ${currentFicha.titulo}">
                            <div class="materiais-lista">
                                <ul>
                                    ${currentFicha.materiais.map(material => `<li>${material}</li>`).join('')}
                                </ul>
                            </div>
                        </div>
                    `;
                    chatContainer.innerHTML += materialsHTML;
                    chatContainer.innerHTML += `<div class="chat-message bot-message"><div class="message-content"><strong>Bloquito-Fichas:</strong> Você já separou todos os materiais?</div></div>`;
                    const optionsHTML = `
                        <div class="options-container">
                            <button class="option-btn" data-response="sim">Sim, já separei</button>
                            <button class="option-btn" data-response="não">Não, preciso de mais tempo</button>
                            <button class="option-btn" data-response="repetir">Repetir os materiais</button>
                        </div>
                    `;
                    chatContainer.innerHTML += optionsHTML;
                    chatContainer.scrollTop = chatContainer.scrollHeight;
                } else {
                    addChatMessage("Bloquito-Fichas", "Não entendi bem. Por favor, diga 'sim' se já tem todos os materiais, 'não' se precisa de tempo, ou 'repetir' para ouvir a lista novamente.", 'bot');
                    addToSpeechQueue("Não entendi bem. Por favor, diga 'sim' se já tem todos os materiais, 'não' se precisa de tempo, ou 'repetir' para ouvir a lista novamente.", true);
                }
                return;
            }
            
            // Lógica para processar respostas durante os passos (montagem/código)
            if (currentScreen === "ficha") {
                if (normalizedResponse.includes('sim') || normalizedResponse.includes('pronto') || normalizedResponse.includes('feito')) {
                    addChatMessage("Bloquito-Fichas", "Ótimo! Vamos para o próximo passo.", 'bot');
                    addToSpeechQueue("Ótimo! Vamos para o próximo passo.", true);
                    doubtCounter = 0;
                    setTimeout(() => {
                        nextStep();
                    }, 1500);
                } else if (normalizedResponse.includes('não') || normalizedResponse.includes('nao') || normalizedResponse.includes('dúvida') || normalizedResponse.includes('duvida')) {
                    doubtCounter++;
                    if (doubtCounter >= 2) {
                        addChatMessage("Bloquito-Fichas", "Hmm, parece que você está com alguma dúvida neste passo. Por favor, procure seu professor para te ajudar com este desafio.", 'bot');
                        addToSpeechQueue("Hmm, parece que você está com alguma dúvida neste passo. Por favor, procure seu professor para te ajudar com este desafio.", true);
                    } else {
                        addChatMessage("Bloquito-Fichas", "Sem problemas! Vou repetir o passo atual para você.", 'bot');
                        addToSpeechQueue("Sem problemas! Vou repetir o passo atual para você.", true);
                        setTimeout(() => {
                            repeatCurrentStep();
                        }, 1500);
                    }
                } else if (normalizedResponse.includes('repetir')) {
                    addChatMessage("Bloquito-Fichas", "Claro, vou repetir a instrução.", 'bot');
                    addToSpeechQueue("Claro, vou repetir a instrução.", true);
                    setTimeout(() => {
                        repeatCurrentStep();
                    }, 1500);
                }
                 else {
                    addChatMessage("Bloquito-Fichas", "Não entendi. Você já concluiu este passo? Responda 'sim', 'não' ou 'repetir'.", 'bot');
                    addToSpeechQueue("Não entendi. Você já concluiu este passo? Responda 'sim', 'não' ou 'repetir'.", true);
                }
            } else if (currentScreen === "new-user-question") {
                if (normalizedResponse.includes('mesmo aluno') || normalizedResponse.includes('sim')) {
                    addChatMessage("Bloquito-Fichas", "Ok! Vamos escolher uma nova ficha para você, " + userName + ".", 'bot');
                    addToSpeechQueue("Ok! Vamos escolher uma nova ficha para você, " + userName + ".", true);
                    setTimeout(() => {
                        showFichaSelection();
                    }, 2000);
                } else if (normalizedResponse.includes('novo aluno') || normalizedResponse.includes('não')) {
                    addChatMessage("Bloquito-Fichas", "Entendido! Vamos recomeçar para o novo aluno.", 'bot');
                    addToSpeechQueue("Entendido! Vamos recomeçar para o novo aluno.", true);
                    setTimeout(() => {
                        startApp();
                    }, 2000);
                } else {
                    addChatMessage("Bloquito-Fichas", "Não entendi. Você é o 'mesmo aluno' ou um 'novo aluno'?", 'bot');
                    addToSpeechQueue("Não entendi. Você é o 'mesmo aluno' ou um 'novo aluno'?", true);
                }
            }
        }
        
        function nextStep() {
            const totalMontagemSteps = currentFicha.passosMontagem.length;
            const totalCodigoSteps = currentFicha.passosCodigo.length;

            if (isMontagemPhase) {
                if (currentStep < totalMontagemSteps) {
                    showCurrentStep();
                } else {
                    if (totalCodigoSteps > 0) {
                        isMontagemPhase = false;
                        currentStep = 0;
                        addChatMessage("Bloquito-Fichas", "Parabéns! Você completou a montagem do circuito. Agora, vamos para a parte de 'programação' (configuração do Bloco+ PIC, se aplicável).", 'bot');
                        addToSpeechQueue("Parabéns! Você completou a montagem do circuito. Agora, vamos para a parte de programação, que é a configuração do Bloco Mais PIC, se aplicável.", true);
                        setTimeout(() => {
                            showCurrentStep();
                        }, 2000);
                    } else {
                        showCompletionScreen();
                    }
                }
            } else {
                if (currentStep < totalCodigoSteps) {
                    showCurrentStep();
                } else {
                    showCompletionScreen();
                }
            }
        }
        
        function showCurrentStep() {
            chatContainer.innerHTML = '';
            
            const currentPhaseSteps = isMontagemPhase ? 
                currentFicha.passosMontagem : 
                currentFicha.passosCodigo;
                
            const totalStepsInPhase = currentPhaseSteps.length;
                
            const phaseName = isMontagemPhase ? "Montagem" : "Configuração do PIC";
            
            const progressHTML = `
                <div class="step-progress-wrapper">
                    <h3>Fase: ${phaseName} - Passo ${currentStep + 1} de ${totalStepsInPhase}</h3>
                    <div class="step-progress">
                        ${Array.from({length: totalStepsInPhase}, (_, i) => `
                            <div class="step-circle ${i < currentStep ? 'completed' : i === currentStep ? 'active' : ''}">${i + 1}</div>
                        `).join('')}
                    </div>
                </div>
            `;
            
            chatContainer.innerHTML = progressHTML;
            
            const step = currentPhaseSteps[currentStep];
            
            addChatMessage("Bloquito-Fichas", step.instrucao, 'bot');
            
            const instrucaoVoz = step.instrucaoVoz || step.instrucao;
            
            const mediaURL = step.gif;
            if (mediaURL) {
                const mediaHTML = `
                    <div class="gif-container">
                        <img src="${mediaURL}" alt="Passo ${currentStep + 1} da ${phaseName}">
                        <p>Figura: Passo ${currentStep + 1} da ${phaseName.toLowerCase()}</p>
                    </div>
                `;
                chatContainer.innerHTML += mediaHTML;
            }
            
            const optionsHTML = `
                <div class="options-container">
                    <button class="option-btn" data-response="sim" aria-label="Sim, concluí este passo">Sim, concluí!</button>
                    <button class="option-btn" data-response="não" aria-label="Não, tenho dúvida sobre este passo">Não, tenho dúvida</button>
                    <button class="option-btn" data-response="repetir" aria-label="Repetir esta instrução">Repetir instrução</button>
                </div>
            `;
            
            chatContainer.innerHTML += `<div class="chat-message bot-message"><div class="message-content"><strong>Bloquito-Fichas:</strong> Você já concluiu este passo?</div></div>`;
            chatContainer.innerHTML += optionsHTML;
            
            setTimeout(() => {
                addToSpeechQueue(instrucaoVoz + ". Você já concluiu este passo? Responda 'sim', 'não' ou 'repetir'.", true);
            }, 1000);
            
            chatContainer.scrollTop = chatContainer.scrollHeight;
            
            currentStep++;
        }
        
        function repeatCurrentStep() {
            currentStep--;
            showCurrentStep();
        }
        
        function showCompletionScreen() {
            currentScreen = "completion";
            chatContainer.innerHTML = '';
            
            addChatMessage("Bloquito-Fichas", "🎶🎶🎶 Uma música alegre para celebrar sua vitória! 🎶🎶🎶", 'bot');
            addToSpeechQueue("Parabéns, " + userName + "! Você completou com sucesso a ficha " + currentFicha.tituloVoz + "!", true);
            
            const completionHTML = `
                <div class="completion-screen">
                    <h2>Parabéns, ${userName}!</h2>
                    <p>Você completou com sucesso a ficha "${currentFicha.titulo}"</p>
                    
                    <div style="margin: 20px 0;">
                        <h3>Próximos passos para seu Bloco+ (se aplicável):</h3>
                        <p>1. Se a atividade que você montou utiliza o módulo Bloco+ PIC, certifique-se de que o programa correto foi selecionado conforme as instruções da ficha (por exemplo, programa 3 para o Cenário Natalino ou programa 8 para o Alarme de Incêndio).</p>
                        <p>2. Conecte seu circuito ao Bloco+ Power (se necessário) e divirta-se com sua criação!</p>
                        <p>3. Para atividades que não usam o Bloco+ PIC, revise suas conexões e a polaridade dos componentes para garantir o funcionamento.</p>
                    </div>
                    
                    <div class="action-buttons">
                        <button class="action-btn primary" id="curiosityBtn">Saber uma curiosidade</button>
                        <button class="action-btn primary" id="restartFichaBtn">Montar uma nova ficha</button>
                        <button class="action-btn secondary" id="goHomeBtn">Voltar ao início</button>
                    </div>
                </div>
            `;
            
            chatContainer.innerHTML += completionHTML;
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }

        function showCuriosity() {
            addChatMessage("Bloquito-Fichas", "Que legal! Aqui vai uma curiosidade sobre o circuito que você montou:", 'bot');
            let curiosityText = "O circuito de " + currentFicha.tituloVoz + " é um exemplo incrível de como a eletrônica nos ajuda no dia a dia. Você sabia que circuitos parecidos com este são usados em lugares como carros, robôs e até mesmo em brinquedos eletrônicos? É a magia da tecnologia em ação!";
            addToSpeechQueue("Que legal! Aqui vai uma curiosidade sobre o circuito que você montou: " + curiosityText, true);
            
            addChatMessage("Bloquito-Fichas", curiosityText, 'bot');
            
            const optionsHTML = `
                <div class="action-buttons">
                    <button class="action-btn primary" id="restartFichaBtnAgain">Montar uma nova ficha</button>
                    <button class="action-btn secondary" id="goHomeBtnAgain">Voltar ao início</button>
                </div>
            `;
            chatContainer.innerHTML += optionsHTML;
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }

        function askSameOrNewUser() {
            currentScreen = "new-user-question";
            chatContainer.innerHTML = '';
            
            const questionHTML = `
                <div class="new-user-question-screen">
                    <h2>É o mesmo aluno ou um novo aluno?</h2>
                    <p>Assim consigo personalizar a experiência de forma correta.</p>
                    <div class="action-buttons">
                        <button class="action-btn primary" data-response="mesmo aluno">Mesmo Aluno</button>
                        <button class="action-btn secondary" data-response="novo aluno">Novo Aluno</button>
                    </div>
                </div>
            `;
            chatContainer.innerHTML = questionHTML;
            addToSpeechQueue("É o mesmo aluno ou um novo aluno? Assim consigo personalizar a experiência de forma correta.", true);
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }
        
        function addChatMessage(sender, message, type) {
            const messageDiv = document.createElement('div');
            messageDiv.classList.add('chat-message', type === 'bot' ? 'bot-message' : 'user-message');
            
            messageDiv.innerHTML = `
                <div class="message-content">
                    <strong>${sender}:</strong> ${message}
                </div>
            `;
            
            chatContainer.appendChild(messageDiv);
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }
        
        function speakText(text, onEnd) {
            if ('speechSynthesis' in window) {
                synth.cancel();
                
                if (recognition && isMicActive) {
                    recognition.stop();
                }
                
                isSystemSpeaking = true;
                
                const utterance = new SpeechSynthesisUtterance(text);
                utterance.lang = 'pt-BR';
                utterance.rate = 1.0;
                utterance.pitch = 1.0;
                utterance.volume = 1.0;
                
                const voices = synth.getVoices();
                const ptBrVoice = voices.find(voice => voice.lang === 'pt-BR' || voice.name.includes('Brazil'));
                if (ptBrVoice) {
                    utterance.voice = ptBrVoice;
                } else {
                    const ptVoice = voices.find(voice => voice.lang.includes('pt'));
                    if (ptVoice) {
                        utterance.voice = ptVoice;
                    }
                }
                
                utterance.onend = function() {
                    isSystemSpeaking = false;
                    if (isMicActive && recognition) {
                        setTimeout(() => {
                            recognition.start();
                        }, 500);
                    }
                    
                    if (onEnd && typeof onEnd === 'function') {
                        onEnd();
                    }
                };
                
                utterance.onerror = function(event) {
                    console.error("Erro na síntese de voz:", event.error);
                    isSystemSpeaking = false;
                    if (isMicActive && recognition) {
                        setTimeout(() => {
                            recognition.start();
                        }, 500);
                    }
                    if (onEnd && typeof onEnd === 'function') {
                        onEnd();
                    }
                };
                
                synth.speak(utterance);
            } else {
                if (onEnd && typeof onEnd === 'function') {
                    onEnd();
                }
            }
        }
        
        // Iniciar a aplicação
        startApp();