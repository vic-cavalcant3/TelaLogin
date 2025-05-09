import React from 'react';
import {StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';
import React, { useState, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync(); //Mantem a tela SplashScreen

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto"/>
      <Routes />
    </NavigationContainer>
  )
}

// export default function App() { // Mantenha sua linha original.
  
  useEffect(() => {
    async function prepare() {
      try {
        await new Promise(resolve => setTimeout(resolve, 5000));
        await SplashScreen.hideAsync();
      } catch (erro) {
        console.error(erro);
      } 
    }
    prepare();
  }, []);