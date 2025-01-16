**UpdateTaskController**

[X] Deve retornar 204 em caso de sucesso
[X] Deve retornar 500 se UpdateTask for lançado
[X] Deve retornar 400 se a validação falhar
[X] Deve chamar UpdateTask com os valores corretos quando apenas uma parte da solicitação for enviada
[X] Deve chamar UpdateTask com os valores corretos quando a solicitação completa for enviada

**DbUpdateTask.**

[X] Deve chamar UpdateTaskRepository com os valores corretos
[X] Deve lançar exceção se UpdateTaskRepository lançar exceção

**TaskMongoRepository**

[X] Deve atualizar tarefa com sucesso
[X] Deve retornar InvalidParamError se o ID da tarefa for inválido
[X] Deve retornar NotFoundError se nenhuma tarefa for encontrada para atualização

**TaskRoutes**
[X] Deve retornar 204 ao chamar a rota para atualizar a tarefa
