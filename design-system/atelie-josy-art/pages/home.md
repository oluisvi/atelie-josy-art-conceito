# Home — direção de interface

## Trabalho real e público

Uma página mobile-first para apresentar a oficina de modelagem manual do Ateliê Josy’art. O objetivo principal é explicar a experiência e abrir consulta de próximas turmas pelo WhatsApp. Não é uma loja: os trabalhos exibidos no Instagram pertencem aos alunos e não estão à venda.

## Sistema visual

- Base mineral e tátil: argila queimada `#A4472C`, papel mineral `#EEE9DF`, branco quente `#F8F5ED`, carvão `#211F1B`, oliva `#656546`.
- Direção gráfica alternativa da oficina: azul cobalto `#174F87`, papaya `#EF7650`, amarelo-verde `#DCEA68` e azul-marinho `#142D5D`.
- Direção da galeria: carvão `#151714`, creme `#F2EEE4`, argila clara `#D39A70`, sálvia `#B4BD83`.
- Tipografia: DM Serif Display para o texto editorial; DM Sans para leitura funcional; DM Mono para pequenas anotações. Space Grotesk substitui o display apenas na direção Oficina.
- Imagens geradas são referências conceituais e sempre identificadas como ilustrativas. Substituir por fotos próprias com autorização antes do site final.

## As três composições

1. **Caderno:** editorial e assimétrica, com fundo mineral, título serifado, imagem como matéria, linhas finas e anotações de processo.
2. **Oficina:** composição de cartaz modular em cobalt/papaya/amarelo, títulos geométricos, recortes duros e cartões de processo organizados como bancada.
3. **Galeria:** modo escuro de exposição, imagem panorâmica, tipografia monumental e espaço negativo para contemplar a prática.

Os três modos vivem na mesma página e preservam o conteúdo semântica e funcionalmente. O seletor tem estados acessíveis e suporta teclado. A escolha pode ser endereçada via hash `#caderno`, `#oficina` ou `#galeria`.

## Interação e acessibilidade

- CTA para consultar datas e detalhes no WhatsApp; não inventar preço, duração, agenda ou política de envio.
- Acordeões nativos `details/summary`, navegação por âncoras e foco visível.
- Alvos de toque de pelo menos 44 px, layout a partir de telas pequenas, botão de consulta fixo só em mobile e margem inferior segura.
- Respeitar `prefers-reduced-motion`; revelações só com IntersectionObserver, sem scroll-scrub/parallax.
- Imagens com dimensões declaradas, texto alternativo e lazy-load quando não forem a imagem principal.

## Contratos de conteúdo

- Fato: a pessoa cria uma peça na oficina; ela seca, passa por queima, é embalada e enviada ao aluno.
- Fato: o atendimento pode ser pelo WhatsApp ou no ateliê.
- Não publicar preço/datas ou dizer que as peças dos alunos estão disponíveis para compra.
- Rodapé e imagem deixam claro que se trata de conceito e que a imagem é ilustrativa.
