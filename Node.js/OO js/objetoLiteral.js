const user = {
    nome: "Mirai",
    email: "miraiwolf@gmail.com",
    nascimento: "2021/01/01",
    role: "estudante",
    ativo: true,
    exibirInfos: function(){
        console.log(this.nome, this.email)
    }
}

const admin = {
    nome: "Maria",
    email: "maria@gmail.com",
    role: "admin",
    criarCurso(){
        console.log('curso criado!')
    }
}

Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfos()