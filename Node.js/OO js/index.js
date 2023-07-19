import User from "./User.js";
import Admin from "./admin.js";
import Docente from "./Docente.js";

//const novoUser = new User('Nata','nata@dsd.com', '2021-01-01')
//console.log(novoUser.exibirInfos())

//não vai ser chamado por ser privado:
//novoUser.#nome = 'sdsds'

 
const novoAdmin = new Admin('Nata','nata@dsd.com', '2021-01-01')
console.log(novoAdmin.nome)
novoAdmin.nome = 'andré'
console.log(novoAdmin.nome)