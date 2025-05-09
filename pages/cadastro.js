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
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { StatusBar } from 'expo-status-bar';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Cadastro() {
  const navigation = useNavigation();

  const [email,setEmail]=useState("");
  const [senha,setSenha]=useState("");

  function cadastrar(){
    const usuario ={email:email, senha:senha}
    AsyncStorage.setItem("chave", JSON.stringify(usuario));
    alert("Cadastro efetuado com sucesso.")
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>

      <TouchableOpacity onPress={() => navigation.navigate("saida")} style={styles.botaotext}>
        
      </TouchableOpacity>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <Animatable.View
            animation="fadeInLeft"
            delay={500}
            style={styles.containerHeader}>
           <View style={styles.headerRow}>
                <TouchableOpacity onPress={() => navigation.navigate("index")}>
                  <Ionicons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
                <Text style={styles.message}>Cadastre-se</Text>
              </View>
          </Animatable.View>

          <Animatable.View animation="fadeInUp" style={styles.containerForm}>
            <Text style={styles.title}>E-mail</Text>
            
            <TextInput placeholder="Digite um email..." style={styles.input} onChangeText={(value)=>setEmail(value)} />
            
            <TextInput placeholder="Sua senha" style={styles.input} onChangeText={(value)=>setSenha(value)} secureTextEntry/>
            
            <TouchableOpacity onPress={cadastrar} style={styles.button}>
              <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
            
          </Animatable.View>
          <StatusBar style="light" />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
    headerRow: {
        flexDirection: "row",
        alignItems: "center",
      },
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
});
