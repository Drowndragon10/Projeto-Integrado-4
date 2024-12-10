// Importando as dependências
const express = require('express');
const app = express();
const cors = require('cors');  // Para permitir requisições de origens diferentes, se necessário

// Importando as rotas (Controllers)
const criarEquipaRoutes = require('./routes/criar_equipa');
const CriarEscalaoRoutes = require('./routes/criar_escalao');
const criarJogadorRoutes = require('./routes/criar_jogador');
const CriarJogoRoutes = require('./routes/criar_jogo');
const CriarRelatorioRoutes = require('./routes/criar_relatorio');
const CriarTarefaRoutes = require('./routes/criar_tarefa');
const EliminarEquipaRoutes = require('./routes/eliminar_equipa');
const EliminarEscalaoRoutes = require('./routes/eliminar_escalo');
const EliminarJogadorRoutes = require('./routes/eliminar_jogador');
const EliminarJogoRoutes = require('./routes/eliminar_jogo');
const EliminarRelatorioRoutes = require('./routes/eliminar_relatorio');
const EliminarTarefaRoutes = require('./routes/eliminar_tarefa');
const loginRoutes = require('./routes/login');

// Configurações
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(express.json());  // Para processar os dados JSON
app.use(cors());  // Para permitir que seu frontend faça requisições, se necessário

// Definindo as rotas
app.use('api/criar_equipa', criarEquipaRoutes);  // Para a funcionalidade de criação de equipes
app.use('/api/criar_escalao', CriarEscalaoRoutes);
app.use('/api/criar_jogador', criarJogadorRoutes);  // Para a funcionalidade de criação de jogadores
app.use('/api/criar_jogo', CriarJogoRoutes);
app.use('/api/criar_relatorio', CriarRelatorioRoutes);
app.use('/api/criar_tarefa', CriarTarefaRoutes);
app.use('/api/eliminar_equipa', EliminarEquipaRoutes);
app.use('/api/eliminar_escalao', EliminarEscalaoRoutes);
app.use('/api/eliminar_jogador', EliminarJogadorRoutes);
app.use('/api/eliminar_jogo', EliminarJogoRoutes);
app.use('/api/eliminar_relatorio', EliminarRelatorioRoutes);
app.use('/api/eliminar_tarefa', EliminarTarefaRoutes);
app.use('/api/login', loginRoutes);  // Rota de login

// Rota teste (você pode remover ou deixar como exemplo)
app.use('/teste', (req, res) => {
    res.send("Rota TESTE.");
});

// Rota padrão (Hello World)
app.use('/', (req, res) => {
    res.send("Hello World");
});

// Inicializando o servidor
app.listen(app.get('port'), () => {
    console.log("Servidor iniciado na porta " + app.get('port'));
});
