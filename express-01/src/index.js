import 'dotenv/config';
import cors from 'cors';
import express from 'express';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/hello', (req, res) => {
  res.send('Olá, Turma!');
});

const port = process.env.PORT || 3000;

// Executa o servidor apenas quando rodar localmente (não no ambiente Vercel)
if (process.env.NODE_ENV !== 'production') {
  app.listen(port, () =>
    console.log(`Example app listening on port ${port}!`),
  );
}

// Exportação necessária para a Vercel tratar o Express como Serverless Function
export default app;