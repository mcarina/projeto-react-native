import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import MapView, { UrlTile } from 'react-native-maps';
import { ArrowsIn, CloudSun, Drop, DropHalf, Eye, Cloud, Wind } from 'phosphor-react-native';

const Inicio = () => {

  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?lat=-3.10194&lon=-60.025&appid=2ecc17c858b8f41edd131da401168ceb');
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchData();
  }, []);

  const kelvinToCelsius = (temp:number) => {
    return (temp - 273.15).toFixed(0); // Arredonda a temperatura para 2 casas decimais
  };

  const metersToKilometers = (meters:number) => {
    return (meters / 1000).toFixed(2); // Converte metros para quilômetros e arredonda para 2 casas decimais
  };0

  const metersPerSecondToKmPerHour = (speed:number) => {
    return (speed * 3.6).toFixed(0); // Converte m/s para km/h e arredonda para 2 casas decimais
  };

  return (
    <LinearGradient 
      colors={['#051d38','#0f2b4a', '#051d38']}
      style={styles.gradientContainer}>
      <ScrollView contentContainerStyle={styles.scrollContentContainer}>
        <View style={styles.content}>
          <View style={styles.header}>
            <View style={styles.headerLeft}>
              <Text style={styles.headerLeftText}>
                {weatherData ? weatherData.name : 'Nome não disponível'}
              </Text>
            </View>
          </View>

          <View style={styles.contentSun}>
            <Text style={styles.info}>Temperatura</Text>
            <View style={styles.infoContainer}>
              <CloudSun color='#FFF' size={90} />
              {/* <Text style={styles.infoText}>26°C</Text> */}
              <Text style={styles.infoText}>
                {weatherData ? `${kelvinToCelsius(weatherData.main.temp)}°c` : '...'}
              </Text>
            </View>
          </View>

          <Text style={styles.infoTextMaxMin}>
              {weatherData && weatherData.main ? 
                `${kelvinToCelsius(weatherData.main.temp_max)}º/${kelvinToCelsius(weatherData.main.temp_min)}º sensação térmica de ${kelvinToCelsius(weatherData.main.feels_like)}º` 
                : 'Dados não disponíveis'
            }
        </Text>

          {/* <View style={styles.contentTable}>
            <View style={styles.infoContainer2}>
              <View style={styles.rowContainer}>
                <Thermometer color='#FFF' size={20} />
                <Text style={styles.infoSen}>Sensação térmica de amanhã</Text>
              </View>
              <Text style={styles.infoTextum}>A umidade fará com que a sensação de 36ºC seja alta</Text>
            </View>
          </View> */}

          <View style={styles.Container}>
            <View style={styles.contentQuadrados}>
              <Text style={styles.infoSen}>Nuvem</Text>
              <View style={styles.infoContainer}>
                <Cloud color='#FFF' size={32} />
                <Text style={styles.infoTextum}>{weatherData && weatherData.weather[0].description}</Text>
              </View>
            </View>

            <View style={styles.contentQuadrados}>
              <Text style={styles.infoSen}>Umidade</Text>
              <View style={styles.infoContainer}>
                <Drop color='#FFF' size={32} />
                <Text style={styles.infoTextum}>
                  {weatherData && weatherData.main ? `${weatherData.main.humidity}%` : 'Dados não disponíveis'}
                </Text>

              </View>
            </View>
            
          </View>

          <View style={styles.Container}>
            <View style={styles.contentQuadrados}>
              <Text style={styles.infoSen}>Vento</Text>
              <View style={styles.infoContainer}>
                <Wind color='#FFF' size={28} />
                <Text style={styles.infoTextum}>
                  {weatherData && weatherData.wind ? `${metersPerSecondToKmPerHour(weatherData.wind.speed)} km/h` : 'Dados não disponíveis'}
                </Text>
              </View>
            </View>

            <View style={styles.contentQuadrados}>
              <Text style={styles.infoSen}>Visibilidade</Text>
              <View style={styles.infoContainer}>
                <Eye color='#FFF' size={28} />
                <Text style={styles.infoTextum}>
                  {weatherData && typeof weatherData.visibility !== 'undefined' ? `${metersToKilometers(weatherData.visibility)} km` : 'Dados não disponíveis'}
                </Text>
              </View>
            </View>
            
          </View>
          
          <View style={styles.Container}>
            <View style={styles.contentQuadrados}>
              <Text style={styles.infoSen}>Ponto do Orvalho</Text>
              <View style={styles.infoContainer}>
              <DropHalf color='#FFF' size={28} />
                <Text style={styles.infoTextum}>24º</Text>
              </View>
            </View>

            <View style={styles.contentQuadrados}>
              <Text style={styles.infoSen}>Pressão</Text>
              <View style={styles.infoContainer}>
              <ArrowsIn color='#FFF' size={28} />
                <Text style={styles.infoTextum}>
                  {weatherData && weatherData.main && typeof weatherData.main.pressure !== 'undefined' ? `${weatherData.main.pressure} mb` : 'Dados não disponíveis'}
                </Text>
              </View>
            </View>
            
          </View>

        </View>

      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Faculdade Martha Falcão, 2024 - Wyden</Text>
        <Text style={styles.footerText}></Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  containermap:{flex:1},
  map:{flex:1},
  gradientContainer: {
    flex: 1,
    alignItems: 'center',
  },
  scrollContentContainer: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  content: { 
    paddingTop: 20, 
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  header: {
    width: "100%",
    marginTop: 44,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  headerLeftText: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "400",
    marginBottom: 20
  },
  info: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "400",
    marginBottom: 10,
  },
  contentSun: { 
    paddingTop: 10, 
    paddingHorizontal: 20,
    backgroundColor: 'rgba(61, 61, 81, 0.40)',
    borderRadius: 20,
    alignItems: 'center',
  },
  contentTable: { 
    paddingTop: 1, 
    paddingHorizontal: 2,
    backgroundColor: 'rgba(61, 61, 81, 0.53)',
    borderRadius: 20,
    alignItems: 'center',
  },
  infoText: {
    fontSize: 60,
    fontWeight: "400",
    color: "#FFF",
  },
  infoContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
  },
  infoContainer2: {
    flexDirection: 'column', 
    alignItems: 'center', 
    padding: 10,
  },
  infoTextMaxMin: {
    padding:20,
    fontSize: 16,
    fontWeight: "400",
    color: "#FFF",
  },
  infoSen: {
    fontSize: 16,
    padding: 5,
    fontWeight: "200",
    color: "#FFF",
  },
  infoTextum: {
    fontSize: 16,
    padding: 20,
    fontWeight: "400",
    color: "#FFF",
  },
  rowContainer: {
    flexDirection: 'row',  
    alignItems: 'center',  
    margin:10,
  },
  Container: {
    top:20,
    flexDirection: 'row',
    justifyContent: 'space-between', 
    width: '100%', 
    paddingHorizontal: 5,
    marginBottom: 20, 
  },
  contentQuadrados: { 
    flex: 1,
    paddingTop: 10, 
    paddingHorizontal: 5,
    backgroundColor: 'rgba(61, 61, 81, 0.38)',
    borderRadius: 20,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  footer: {
    height: 50,
    width:500,
    backgroundColor: '#05111f',
    alignItems: 'center',
    justifyContent: 'center', 
  },
  footerText: {
    color: '#fff',
    
  }
});

export default Inicio;
