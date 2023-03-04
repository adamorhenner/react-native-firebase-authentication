import React, { useState } from 'react';
import { View } from 'react-native';
import Botao from '../../componentes/Botao';
import { EntradaTexto } from '../../componentes/EntradaTexto';
import { logar } from '../../servicos/requisicoesFirebase';
import estilos from './estilos';
import { Alerta } from '../../componentes/Alerta';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [statusError, setStatusError] = useState('');
  const [mensagemError, setMensagemError] = useState('');

  async function realizarLogin(){
    if(email == ''){
      setMensagemError('O E-mail é obrigatorio!');
      setStatusError('email');
    } else if (senha == ''){
      setMensagemError('A Senha é obrigatoria!');
      setStatusError('senha');
    } else {
      const resultado = await logar(email,senha);
      if ( resultado == 'error') {
        setStatusError('firebase')
        setMensagemError('E-mail ou senha não conferem')
      } else {
        navigation.replace('Principal')
      }
    }
  }

  return (
    <View style={estilos.container}>
      <EntradaTexto 
        label="E-mail"
        value={email}
        onChangeText={texto => setEmail(texto)}
        error={statusError == 'email'}
        messageError={mensagemError}
      />
      <EntradaTexto
        label="Senha"
        value={senha}
        onChangeText={texto => setSenha(texto)}
        secureTextEntry
        error={statusError == 'senha'}
        messageError={mensagemError}
      />
      
      <Alerta
        mensagem={mensagemError}
        error={statusError == 'firebase'}
        setError={setStatusError}
      />

      <Botao onPress={() => realizarLogin()}>LOGAR</Botao>
      <Botao 
        onPress={() => { navigation.navigate('Cadastro') }}
      >
        CADASTRAR USUÁRIO
      </Botao>
    </View>
  );
}
