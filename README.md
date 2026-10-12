# Lista de Tarefas

Aplicação simples de lista de tarefas (to-do list) feita em React. Você pode adicionar, editar e remover tarefas — as tarefas ficam salvas no `localStorage` do navegador.

## Funcionalidades

- Adicionar uma nova tarefa pelo formulário
- Editar uma tarefa existente
- Remover uma tarefa
- Persistência automática das tarefas no `localStorage`
- Interface limpa e responsiva, sem dependências de UI

## Tecnologias

- [React](https://react.dev/) 19
- [react-icons](https://react-icons.github.io/react-icons/)
- [prop-types](https://github.com/facebook/prop-types)
- CSS puro (Create React App)

## Como rodar

Requisitos: [Node.js](https://nodejs.org/) 18+ e npm.

```bash
# 1. Instale as dependências
npm install

# 2. Inicie o servidor de desenvolvimento
npm start
```

O app abre em [http://localhost:3000](http://localhost:3000).

### Outros comandos

| Comando           | Descrição                              |
| ----------------- | -------------------------------------- |
| `npm start`       | Roda o app em modo de desenvolvimento  |
| `npm run build`   | Gera o build de produção na pasta `build` |
| `npm test`        | Roda os testes                         |

## Estrutura

```
src/
├── App.js                  # Componente raiz
├── App.css                 # Estilos globais
├── index.js                # Ponto de entrada do React
└── components/
    ├── Main.js             # Estado e lógica da lista
    ├── Main.css
    ├── Form/               # Formulário de nova tarefa
    │   ├── index.js
    │   └── Form.css
    └── Tasks/              # Lista de tarefas
        ├── index.js
        └── Tasks.css
```

## Licença

Distribuído sob a licença [MIT](LICENSE).
