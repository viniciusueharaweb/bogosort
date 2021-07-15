## Algoritmo Bogosort

O propósito desse repositório é o de compartilhar um desafio envolvendo criar uma API que ordena um array de tamanho N utilizando o algoritmo [Bogosort](https://en.wikipedia.org/wiki/Bogosort). Usado comumente por motivos educacionais, o Bogosort embaralha os itens do array até que estejam todos ordenados (algoritmo de baixa performance).

### Construído com

-   Node.js
-   Express

### Pré-requisitos

-   Node.js
-   npm

### Passos para rodar o projeto localmente

1. Crie uma pasta que irá conter o projeto, e faça o comando `cd` na nova pasta
2. Clone o repositório
    ```sh
    git clone https://github.com/viniciusueharaweb/bogosort.git
    ```
3. Instale os pacotes NPM necessários para rodar o projeto
    ```sh
    npm install
    ```
4. Use o comando abaixo e o projeto estará disponível em modo de desenvolvimento no URL `localhost:3000`
    ```sh
    npm start
    ```

## Documentação da API

### Métricas do Bogosort

Retorna algumas métricas sobre o algoritmo Bogosort em função do tamanho do array consumido pelo parâmetro URL `length`

-   **URL**

    /api

-   **Método:**

    `GET`

-   **Parâmetros URL**

| Parâmetro | Tipo     | Descrição                         |
| :-------- | :------- | :-------------------------------- |
| `length`  | `número` | **Obrigatório**. Tamanho do array |

-   **Respostas bem-sucedidas:**

```javascript
{
  "time" : número,
  "interactions" : inteiro,
  "length"    : inteiro
}
```

O atributo `time` descreve em quanto tempo (em segundos) o algoritmo levou para ordenar o array

`interactions` por sua vez descreve a quantidade de vezes que o array foi embaralhado até ficar ordenado

`length` é simplesmente o tamanho da array

-   **Examplo de Chamada:**

```javascript
localhost:3000/api?length=5
```
