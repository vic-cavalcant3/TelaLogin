import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import { StatusBar } from "expo-status-bar";
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Cadastro() {
    const navigation = useNavigation();

    const[email,setEmail] = useState(''); //Variavel & Função
    const[senha,setSenha] = useState('');

function cadastrar(){
  const usuario = {email:email, senha:senha }
  AsyncStorage.setItem("chave", JSON.stringify(usuario));
  alert("Cadastro efeituado com sucesso")
}

function cadastrar(){
  if (email == "victorrocha0223@gmail.com" && senha == "2512"){
    navigation.navigate("sucesso")
  }else("Dados Incorretos")
}



  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>


      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <Animatable.View
            animation="fadeInLeft"
            delay={500}
            style={styles.containerHeader}
          >
            <Text style={styles.message}>Cadastre-se</Text>
          </Animatable.View>

          <Animatable.View animation="fadeInUp" style={styles.containerForm}>
            <Text style={styles.title}>E-mail</Text>
            <TextInput placeholder="Digite um email..." style={styles.input} onChangeText={(value) => setEmail(value)} />
            {/* <TextInput placeholder="Digite seu Telefone..." style={styles.input} onChangeText={(value) => setTelefone(value)} />
            <TextInput placeholder="Digite seu CPF..." style={styles.input} onChangeText={(value) => setCpf(value)} /> */}
            <TextInput placeholder="Escolha uma senha" style={styles.input} onChangeText={(value) => setSenha(value)} />


            <TouchableOpacity onPress={acessar} style={styles.button} >
              <Text style={styles.buttonText} >Cadastrar</Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={() => navigation.navigate("saida")}
            style={styles.voltar}>
            <Text style={styles.voltartext}> clique aqui pra voltar</Text>
        </TouchableOpacity>

            <TouchableOpacity 
            onPress={() => navigation.navigate("cadastre")}
            style={styles.buttonRegister}>

              <Text style={styles.registerText}>
                Não possui uma conta? Cadastre-se
              </Text>
            </TouchableOpacity>
          </Animatable.View>
          <StatusBar style="light"></StatusBar>
        </View>

      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#880000",
  },
  containerHeader: {
    marginTop: "14%",
    marginBottom: "8%",
    paddingStart: "5%",
  },
  message: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#FFF",
  },
  containerForm: {
    backgroundColor: "#FFF",
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: "5%",
    paddingEnd: "5%",
  },
  title: {
    fontSize: 20,
    marginTop: 28,
  },
  input: {
    borderBottomWidth: 1,
    height: 40,
    marginBottom: 12,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#880000",
    width: "100%",
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonRegister: {
    marginTop: 14,
    alignSelf: "center",
  },
  registerText: {
    color: "#a1a1a1",
  },

  titlebutton:{
    backgroundColor: "#880000",
    color: "#fff",
    fontSize: 18,
  },

  botaotext:{
    width: "100%",
    borderRadius: 4,
    paddingVertical: 8,
    marginTop: 14,
    justifyContent: "center",
    alignItems: "center",
  },
});
