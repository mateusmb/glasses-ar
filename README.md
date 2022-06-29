# Face Tracking com WebAR.rocks VTOGlasses

Óculos virtual try on utilizando lib WebAR.rocks (mesmo projeto responsável pelo JeelizVTO). Demo disponível em (glasses-ar.vercel.app)[https://glasses-ar.versel.app]

## Executar

Utilizar Node versão **15.14.0**

1. npm install

2. npm start

3. Acessar https://127.0.0.1:8443

## Build

1. npm install

2. npm run build

3. Servir a pasta *dist/* no seu servidor ou provider com https

## Features

* Possibilita a utilização de GLTF/GLB. Salvar os modelos na pasta *src/assets/VTOGlasses/models3D*

* Possibilita utilização de HDRI/mapas de reflexão. Dois mapas padrões estão disponíveis na pasta *src/assets/VTOGlasses/envmaps*.

* Exemplo em full screen mas pode ser redimesionado.

## Estrutura

* *src/*
    * *index.js* - Página raiz da aplicação, pode conter as rotas para os componentes. Atualmente só chama o componente do face tracking (DemoVTOGlasses).
    * *styles/* - Estilização com *css*;
    * *js/*
        * *components/*
            * *VTOButton.js* - Botão padrão do projeto, pode ser estilizado como quiser ou ser utilizado como baseç
            * *VTOGlasses.js* - Componente responsável pelo Face tracking. Função *VTOModelContainer* instancia o óculos e occluder. Como o occluder é carregado sobre o rosto sem computação automatizada pode ser necessário micro ajustar o tamanho e posicionamento. A linha 95 tem parâmetros de escala ajustados que podem ser mexidos como bem entender.
        * *contrib/* - Classes e componentes *helpers* da lib e modelos de IA. Dificilmente devem ser mexidos pois são códigos core para funcionamento.
    * *assets/* - Pasta para *assets* (modelos, imagens, etc) da aplicação.
