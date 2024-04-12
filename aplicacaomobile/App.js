import React, { useState, useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import Inicio from './src/screens/Home/index' // Ajuste o caminho conforme a organização de seus arquivos
import Landing from './src/screens/Home/landing' // Ajuste o caminho conforme a organização de seus arquivos

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Landing')

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentScreen('Inicio')
    }, 2000) // Mudar para a tela Inicio após 5 segundos

    return () => clearTimeout(timer) // Limpar o timer se o componente for desmontado
  }, [])

  return (
    <>
      {currentScreen === 'Landing' && <Landing />}
      {currentScreen === 'Inicio' && <Inicio />}
      <StatusBar style="light" />
    </>
  )
}
