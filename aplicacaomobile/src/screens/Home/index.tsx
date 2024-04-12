import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { CloudSun, Drop, Eye, SunHorizon, Wind } from 'phosphor-react-native';
import { Thermometer } from 'phosphor-react-native'
import { Sun } from 'phosphor-react-native'

const Inicio = () => {
  return (
    <LinearGradient 
      colors={['#051d38','#0f2b4a', '#051d38']}
      style={styles.gradientContainer}>
        <View style={styles.content}>
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <Text style={styles.headerLeftText}>Manaus</Text>
                </View>
            </View>

            <View style={styles.contentSun}>
                <Text style={styles.info}>Temperatura</Text>
                <View style={styles.infoContainer}>
                    <CloudSun color='#FFF' size={100} />
                    <Text style={styles.infoText}>26°C</Text>
                </View>
            </View>

            <Text style={styles.infoTextMaxMin}>30º/25º sensação termica de 31º</Text>

          <View style={styles.contentTable}>
              <View style={styles.infoContainer2}>
              <View style={styles.rowContainer}>
                  <Thermometer color='#FFF' size={20} />
                  <Text style={styles.infoSen}>Sensação térmica de amanhã</Text>
              </View>
                  <Text style={styles.infoTextum}>A umidade fará com que a sensação de 36ºC seja alta</Text>
              </View>
          </View>

          <View style={styles.Container}>
              <View style={styles.contentQuadrados}>
                  <Text style={styles.infoSen}>Indice UV</Text>
                  <View style={styles.infoContainer}>
                  <Sun color='#FFF' size={32} />
                      <Text style={styles.infoTextum}>Baixo</Text>
                  </View>
              </View>

              <View style={styles.contentQuadrados}>
                  <Text style={styles.infoSen}>Umidade</Text>
                  <View style={styles.infoContainer}>
                  <Drop color='#FFF' size={32} />
                      <Text style={styles.infoTextum}>90%</Text>
                  </View>
              </View>

          </View>
          <View style={styles.Container}>
              <View style={styles.contentQuadrados}>
                  <Text style={styles.infoSen}>Vento</Text>
                  <View style={styles.infoContainer}>
                  <Wind color='#FFF' size={28} />
                      <Text style={styles.infoTextum}>5 km/h</Text>
                  </View>
              </View>

              <View style={styles.contentQuadrados}>
                  <Text style={styles.infoSen}>Visibilidade</Text>
                  <View style={styles.infoContainer}>
                  <Eye color='#FFF' size={28} />
                      <Text style={styles.infoTextum}>9,66 km</Text>
                  </View>
              </View>

          </View>

        </View>

        <View style={styles.footer}>
            <Text style={styles.footerText}>Faculdade Martha Falcão, 2024</Text>
            <Text style={styles.footerText}></Text>
        </View>

    </LinearGradient>
  );
};

const styles = StyleSheet.create({
    gradientContainer: {
      flex: 1,
      alignItems: 'center',
    },
    content: { 
      flex: 1,
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
      fontSize: 100,
      fontWeight: "300",
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
    paddingHorizontal: 20,
    marginBottom: 20, 
  },
  contentQuadrados: { 
    flex: 1,
    paddingTop: 10, 
    paddingHorizontal: 10,
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
