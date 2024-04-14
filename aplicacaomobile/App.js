import React, { useState, useEffect } from 'react'
import { StatusBar, View, Animated } from 'react-native'
import Inicio from './src/screens/Home/index'
import Landing from './src/screens/Home/landing'

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Landing')
  const [fadeAnim] = useState(new Animated.Value(0))

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentScreen('Inicio')
    }, 2000)

    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true
      }
    ).start();

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {currentScreen === 'Landing' && (
        <Animated.View style={{ flex: 1, opacity: fadeAnim }}>
          <Landing />
        </Animated.View>
      )}
      {currentScreen === 'Inicio' && <Inicio />}
      <StatusBar style="light" />
    </>
  )
}
