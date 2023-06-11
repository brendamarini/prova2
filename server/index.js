const express = require("express");
const app = express();
const cors = require("cors");
const { pool } = require("./data/data.js");
const {v4} = require ('uuid'); 

app.use(cors());
app.use(express.json());
app.listen(8080, () => {
    console.log("O servidor esta ativo!");
});

process.on('SIGINT', () => {
    pool.end();
    process.exit();
});

let register = null;

app.post('/api/create', async (req, res) => {
    try {
        register = await pool.connect();
        const { nome, email, senha } = req.body;
        await register.query(`INSERT INTO "Users" ("id", "nome", "email", "senha") VALUES ('${v4()}', '${nome}', '${email}', '${senha}');`)
        res.send("Cadastrado com sucesso!")
    } catch (error) {
        console.error(error);
        res.status(500).send("Erro no cadastro de usuário");
    } finally {
        register.release()
    }
});

app.get('/api/read', async(req, res) => {
    try {
        register = await pool.connect();
        const data = await register.query(`SELECT * FROM "Users"`);
        res.send(data.rows)
    } catch (error) {
        res.status(500).send('Erro na busca')
    }
});

app.post("/api/update", async (req, res) => {
    try {
        const { email, nome, senha } = req.body;
        pool.query (`UPDATE "Users" SET nome = '${nome}',senha = '${senha}' WHERE email = '${email}'`)
        res.status(200).send("Usuario atualizado com sucesso!")
    }catch (error) {
        console.error(error);
        res.status(500).send(`Erro, não há conexão com o servidor`);        
    }
});

app.delete("/api/delet", async (req, res) => {
    try {
        const { email, senha } = req.body;
        pool.query (`DELETE FROM "Users" WHERE email = '${email}'`)
        res.status(200).send("Usuário apagado")
    }catch (error) {
        console.error(error);
        res.status(500).send(`Erro de conexão com o servidor`);        
    }
});