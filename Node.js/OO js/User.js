export default class User {
// # antes do atributo para deixa-lo privado e tem que declarar antes do construtor
    #nome 
    #email 
    #nascimento 
    #role 
    #ativo
    constructor(nome, email, nascimento, role, ativo = true){
        this.#nome = nome
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role || 'estudante'
        this.#ativo = ativo 
    }

    get nome(){
        return this.#nome
    }
    get email(){
        return this.#email
    }
    get nascimento(){
        return this.#nascimento
    }
    get role(){
        return this.#role
    }
    get ativo(){
        return this.#ativo
    }

    set nome(novoNome){
        if(novoNome === ""){
            throw new Error('formato não valido')
        }
        this.#nome = novoNome
    }

    exibirInfos() {
        return `${this.nome}, ${this.email}`
    }
}

