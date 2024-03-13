import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, StyleSheet } from 'react-native';
import { CloudSun } from 'phosphor-react-native';
// import {MapPinLine} from 'phosphor-react-native';

const Inicio = () => {
  return (
    <LinearGradient 
    colors={['#292A4E', '#7677A4', '#A588AD']}
    style={styles.container}>
        <View style={styles.content}>
            <View style={styles.header}>
                <View style={styles.headerLeft}>
                    <Text style={styles.headerLeftText}>Manaus - Am</Text>
                </View>
            </View>
        </View>

        <View style={styles.container}>
            <View style={styles.contentSun}>
                <Text style={styles.info}>Temperatura</Text>
                <View style={styles.infoContainer}>
                <CloudSun color='#FFF' size={100} />
                <Text style={styles.infoText}>21°C</Text>
                </View>
            </View>
        </View>
        <Text style={styles.infoTextMaxMin}>Max.: 31º Min.: 25º</Text>

    </LinearGradient>

  );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
  
    },
    content: { paddingTop: 20, paddingHorizontal: 20},
    header:{
        width: "100%",
        marginTop: 44,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      },
    headerLeft:{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 10,
      },
      headerLeftText: {
        color: "#FFF",
        fontSize: 20,
        fontWeight: "600",
        marginBottom: 20
      },
      info: {
        color: "#FFF",
        fontSize: 20,
        fontWeight: "700",
        marginBottom: 10,
      },
      contentSun: { 
        paddingTop: 10, 
        paddingHorizontal: 20,
        backgroundColor: 'rgba(61, 61, 81, 0.53)',
        borderRadius: 20
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
      infoTextMaxMin: {
        fontSize: 16,
        fontWeight: "600",
        color: "#FFF",
      },
  });

export default Inicio;