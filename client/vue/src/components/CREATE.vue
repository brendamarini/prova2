<template>

    <div class="create1">
        <h1>Cadastro de Usuario</h1>
        <form @submit.prevent="create">
            <div>
                <label>Nome: </label>
                <input type="text" v-model="nome"/></div><br>
            <div>
                <label>E-mail: </label>
                <input type="email" v-model="email"/></div><br>
            <div>
                <label>Senha: </label>
                <input type="password" v-model="senha"/></div><br>
            <button class="botao12" type="submit">Enviar</button>
        </form>
        <p>{{ message }}</p>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                nome: '',
                email: '',
                senha: '',
                message: ''
            }
        },
        methods: {
            create(){
                const data = {
                    nome: this.nome,
                    email: this.email,
                    senha: this.senha
                }
                console.log(data);
                fetch('http://localhost:8080/api/create', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify(data)
                })
                .then(async (res) => {
                        this.message = await res.text();
                })
                .catch(async (error) => {
                        this.message = error.message;
                })
            }  
        },
    }
</script>