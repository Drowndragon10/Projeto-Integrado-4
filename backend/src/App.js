const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Importar as rotas
const equipaRoutes = require('./routes/EquipaRoute');
const escalacaoRoutes = require('./routes/EscalaoRoute');
const jogadorRoutes = require('./routes/JogadorRoute');
const utilizadorRoutes = require('./routes/UtilizadorRoute');
const conviteRoutes = require('./routes/ConviteRoute');
const registoRoutes = require('./routes/RegistoRoute');
const tarefaRoutes = require('./routes/TarefaRoute');
const jogoRoutes = require('./routes/JogoRoute');
const relatorioRoutes = require('./routes/RelatorioRoute');
const loginRoutes = require('./routes/LoginRoute'); // Importar a rota de login

// Inicializar o app
const app = express();

// Middlewares
app.use(cors()); // Permitir CORS
app.use(bodyParser.json()); // Parse JSON

// Usar as rotas importadas
app.use('/api/equipas', equipaRoutes);
app.use('/api/escalacoes', escalacaoRoutes);
app.use('/api/jogadores', jogadorRoutes);
app.use('/api/utilizadores', UtilizadorRoutes);
app.use('/api/convites', conviteRoutes);
app.use('/api/registos', registoRoutes);
app.use('/api/tarefas', tarefaRoutes);
app.use('/api/jogos', jogoRoutes);
app.use('/api/relatorios', relatorioRoutes);
app.use('/api/login', loginRoutes); // Definir a rota de login

// Rota inicial de teste
app.get('/', (req, res) => {
  res.send('API está funcionando!');
});

// Middleware de erro
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Erro interno do servidor.' });
});

module.exports = app;
