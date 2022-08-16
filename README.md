# Trabalho-Individual-2022-1
Trabalho individual de GCES de 2022/1

Os conhecimentos de *Gestão de Configuração de Software* são fundamentais no ciclo de vida de um produto de software. As técnicas para a gestão vão desde o controle de versão, automação de build e de configuração de ambiente, testes automatizados, isolamento do ambiente até o deploy do sistema. Todo este ciclo nos dias de hoje são integrados em um pipeline de DevOps com as etapas de Integração Contínua (CI) e Deploy Contínuo (CD) implementadas e automatizada.

Para exercitar estes conhecimentos, neste trabalho, você deverá aplicar os conceitos estudados ao longo da disciplina no produto de software contido neste repositório.

O sistema se trata de uma aplicação em Django e React que gerencia uma biblioteca.

Para executar a aplicação em sua máquina, basta seguir o passo-a-passo descrito no arquivo [README](./aplicacao/README.md) da pasta.

## Resumo da aplicação

A aplicação é um simples sistema de gerenciamento de uma biblioteca. Porém, o foco do trabalho é na automação da build, testes, conteinerização e configuração dos pipelines de CI/CD.

## Etapas de trabalho

O trabalho deve ser elaborado através de etapas. Cada uma das etapas deve ser realizada em um commit separado com o resultado funcional desta etapa.

As etapas de 1 a 3 são relacionadas ao isolamento do ambiente utilizando a ferramenta Docker e Docker Compose. Neste sentido o tutorial abaixo cobre os conceitos fundamentais para o uso destas tecnologias.

[Tutorial de Docker](https://github.com/FGA-GCES/Workshop-Docker-Entrega-01/tree/main/tutorial_docker)

As etapas de 4 e 5 são relacionadas à configuração do pipeline de CI e CD.

[Tutorial CI - Gitlab](https://github.com/FGA-GCES/Workshop-CI-Entrega-02/tree/main/gitlab-ci_tutorial)

### 1. Containerização do Banco

A versão inicial do sistema é uma aplicação Ruby on Rails cujo funcionamento requer uma instalação de um banco de dados Postgres. A primeira etapa do trabalho é de configurar um container somente para o banco de dados com as credenciais especificadas na descrição da aplicação e testar o funcionamento do mesmo.

### 2. Containerização da Aplicação + Banco

Nesta segunda etapa, tanto a aplicação quanto o banco de dados deverão estar funcionando em containers individuais.

Deverá ser utilizado um orquestrador (Docker Compose) para gerenciar comunicação entre os containers além do uso de credenciais, networks, volumes, entre outras configurações necessárias para a correta execução da aplicação.

### 3. Adição de um container do Nginx 

A aplicação originalmente está configurada para rodar com um servidor web simples interno na porta 3000. Nesta etapa será necessário adicionar o servidor Nginx para servir a aplicação através da porta 80. O resultado final também estará expresso utilizando o Docker Compose.

### 4. Integração Contínua (CI)

Para a realização desta etapa, a aplicação já deverá ter seu ambiente completamente containerizado.

Deverá ser utilizada uma ferramenta de Integração Contínua para garantir o build, os testes e os deploy para o [Docker Hub](https://hub.docker.com) dos serviços principais.

Esta etapa do trabalho poderá ser realizada utilizado os ambientes de CI do [GitLab-CI](https://docs.gitlab.com/ee/ci/). ou [Github Actions](https://github.com/features/actions).  

Requisitos da configuração da Integração Contínua (Gitlab ou Github) incluem:
- Build
- Test
- Lint

### 5. Deploy Contínuo (CD)

A etapa final do trabalho deverá ser realizada à partir do deploy automático da aplicação que deve ser realizado à partir após passar sem erros em todas as etapas de CI.

## Avaliação

A avaliação do trabalho será feita à partir da correta implementação de cada etapa 1 a 5. A avaliação será feita de maneira quantitativa (se foi realizado a implementação + documentação), e qualitativa (como foi implementado, entendimento dos conceitos na prática, complexidade da solução). Para isso, faça os commits atômicos, bem documentados, completos a fim de facilitar o entendimento e avaliação do seu trabalho. Lembrando o trabalho é individual.

| Item | Peso |
|---|---|
| Containerização do Banco                      | 1.0 |
| Containerização da Aplicação + Banco          | 2.0 |
| Containerização da Aplicação + Banco + Nginx  | 2.0 |
| Integração Contínua (Build, Test, Lint)       | 3.0 |
| Deploy Contínuo                               | 2.0 |


##  Exemplo de Trabalhos Anteriores

Alguns trabalhos de trabalhos anteriores:

- [2020/2](https://github.com/FGA-GCES/Trabalho-Individual-2020-2)
- [2021/1](https://github.com/FGA-GCES/Workshop-Docker-Entrega-01)
- [2021/2](https://github.com/FGA-GCES/Trabalho-Individual-2021-2)