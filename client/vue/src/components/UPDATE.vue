<template>
    <div class="create1">
        <h1>Atualizar Usuario</h1>
        <form @submit.prevent="update">
            <div>
                <label>E-mail: </label>
                <input type="email" v-model="email"></div><br>
            <div>
                <label>Nome: </label>
                <input type="text" v-model="nome"></div><br>      
            <div>
                <label>Senha: </label>
                <input type="password" v-model="senha"></div><br>
            <button class="botao12" type="submit">Atualizar</button>
        </form>
        <p> {{ message }}</p>
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
        update(){
            const data = {
                nome: this.nome,
                email: this.email,
                senha: this.senha
            }
            fetch("http://localhost:8080/api/update", {
                method:"POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            })
            .then(async (res) => {
                this.message = await res.text();
            })
            .catch(async (err) =>{
                this.message = await err.text();
            })
        }
    }
}
</script>