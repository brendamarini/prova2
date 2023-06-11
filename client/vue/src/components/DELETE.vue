<template>
    <div class="create1">
        <h1>Remover usuario</h1>
        <form @submit.prevent="delet">
            <div>
                <label>E-mail: </label>
                <input type="email" v-model="email"></div><br>    
            <div>
                <label>Senha: </label>
                <input type="password" v-model="senha"></div><br>
            <button class="botao12" type="submit">Remover</button>
        </form>
        <p> {{ message }}</p>
    </div>
</template>
<script>
export default {
    data() {
        return {
            email: '',
            senha: '',
            message: '',
        }
    },
    methods: {
        delet(){
            const data = {
                email: this.email,
                senha: this.senha
            }
            fetch("http://localhost:8080/api/delet", {
                method:"DELETE",
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