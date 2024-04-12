import { LinearGradient } from 'expo-linear-gradient';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { CloudSun } from 'phosphor-react-native';


const Landing = () => {
  return (
    <LinearGradient 
      colors={['#051d38','#0f2b4a', '#051d38']}
      style={styles.gradientContainer}>

      <View>
          <CloudSun color='#FFF' size={100} />
          <Text >26°C</Text>        
      </View>
     
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
    gradientContainer: {
      flex: 1,
      alignItems: 'center',
    }
});

export default Landing;
