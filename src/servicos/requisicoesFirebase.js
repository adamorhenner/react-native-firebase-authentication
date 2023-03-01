import { auth } from "../config/firebase";
import { createUserWithEmailAndPassword, AuthErrorCodes } from "firebase/auth";

function errosFirebase(error){
  let mensagem = '';
  switch(error.code) {
    case AuthErrorCodes.EMAIL_EXISTS:
      mensagem = "Esse email já está em uso.";
      break;
    case AuthErrorCodes.INVALID_EMAIL:
      mensagem = "Email Inválido.";
      break
    case AuthErrorCodes.WEAK_PASSWORD:
      mensagem = "A senha precisa de no mínimo 6 caracteres.";
      break;
    default:
      mensagem = "Erro Desconhecido."
  }
}


export async function  cadastrar(email, senha) {
   const resultado = await createUserWithEmailAndPassword(auth, email, senha)
   .then((dadosDoUsuario) => {
     console.log(dadosDoUsuario)
     return "sucesso"
   })
   .catch((error) => {
     console.log(error)
     return errosFirebase(error)
   });

   return resultado;
}