# Material em Classe - React Native com Expo

Este repositório contém os códigos e materiais utilizados nas aulas do curso de React Native com Expo. A estrutura foi organizada por aulas, com os respectivos códigos-fonte e slides.

## Estrutura do Repositório

```
├── codigo_das_aulas
│   ├── aula_01
│   └── aula_02
├── slides
└── mise.toml
```

### `codigo_das_aulas/`

Contém os projetos desenvolvidos durante as aulas. Cada subdiretório (`aula_01`, `aula_02`, etc.) é um projeto React Native separado utilizando Expo.

Dentro de cada diretório de aula você encontrará:

- `App.js`: Arquivo principal da aplicação.
- `index.js`: Ponto de entrada.
- `app.json`: Configuração do projeto Expo.
- `assets/`: Imagens e outros recursos estáticos.
- `package.json`: Dependências e scripts do projeto.
- `pnpm-lock.yaml` e `pnpm-workspace.yaml`: Arquivos de gerenciamento de dependências com `pnpm`.

> **Observação:** Cada projeto é independente e pode ser iniciado separadamente.

### `slides/`

Contém os arquivos PDF com os slides apresentados durante as aulas:

- `aula_00.pdf`: Introdução
- `aula_01.pdf`: Conteúdo da Aula 01
- `aula_02.pdf`: Conteúdo da Aula 02

## Como Executar uma Aula

1. Acesse o diretório da aula desejada:

   ```bash
   cd codigo_das_aulas/aula_01
   ```

2. Instale as dependências (requer `pnpm`):

   ```bash
   pnpm install
   ```

3. Inicie a aplicação com Expo:

   ```bash
   pnpm start
   ```

   Isso abrirá o Expo Developer Tools no navegador, permitindo rodar no emulador, dispositivo físico ou Web.

## Pré-requisitos

- Node.js (versão 22) e PNPM instalados (sugerido utilizar [mise](https://mise.jdx.dev/) para gerenciar as versões, conforme `mise.toml`)
- Expo CLI global (caso deseje rodar diretamente):

  ```bash
  pnpm add -g expo-cli
  ```

## Recomendações

- Use o aplicativo **Expo Go** no celular para testar rapidamente via QR Code.
- Utilize o emulador Android/iOS para testes locais mais completos.

---

Qualquer dúvida ou sugestão, sinta-se à vontade para abrir uma issue ou contribuir com o repositório.
