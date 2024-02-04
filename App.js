import { ActivityIndicator, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Slider from '@react-native-community/slider';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

export default function App() {

  const [city, setCity] = useState("")
  const [days, setdays] = useState(0)

  const [loading, setLoading] = useState(false)
  const [travel, setTravel] = useState("")

  const KEY_GPT = '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'

  function cliquei() {
    console.log(city)
    console.log(days.toFixed(0))
  }

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        
        <StatusBar barStyle='dark-content' translucent={true} backgroundColor='#F1F1F1' />
        
        <View style={styles.tituloDescrito}>
        
          <Text style={styles.title}>where are we going?</Text> 
          <Text style={styles.label}>Descreva aqui o nome da cidade e(ou) pais que deseja conhecer e uma IA irá fazer um roteiro de viagem para você seguir.</Text>
        
        </View>

      <View style={styles.input}>
      <Text style={styles.label2}>Cidade de Destino</Text>

        <TextInput
        value={city}
        onChangeText={(text) => setCity(text)}
        style={styles.mainInput} 
        placeholder="Example: New York, Us."/>

        <Text style={styles.label2}>Tempo de estadia: <Text style={styles.days}> {days.toFixed(0)} </Text> days</Text>  

        <Slider style={{width: 300, height: 40}}
            minimumValue={1}
            maximumValue={30}
            minimumTrackTintColor="#009688"
            maximumTrackTintColor="#000" 
            value={days}
            onValueChange={(value) => setdays(value)}
              />

      </View>    

        <Pressable onPress={cliquei} style={styles.button}>
        
        <Text style={styles.buttonText}>Gerar Roteiro 🌎</Text>
        
        </Pressable>
      
      
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 24, marginTop: 4}} style={styles.containerScroll}>
       {loading && (
             <View style={styles.content}>
        
             <Text style={styles.contentTitle}> Carregando roteiro... </Text>
             <ActivityIndicator color="#000" size="medium"/>

           </View>
       )}

      {travel && (
        <View style={styles.content}>
        
          <Text style={styles.contentTitle}> Roteiro da Viagem 👇 </Text>
          <Text>{travel}</Text>

        </View>
      )}
       
      </ScrollView>
      
      
    </View>
    

    </View>
  );
}

const styles = StyleSheet.create({
  container2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'start',
    paddingTop: 60,
    gap: 15,
    
  },
  container: {
    flex: 1,
    backgroundColor: '#B2DFDB',
  },
  title: {
    fontSize: '40px',
    color: '#009688',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tituloDescrito: {
    gap: 15,
  },
  label: {
    color: 'black',
    fontWeight: 'regular',
    textAlign: 'center',
    fontSize: 15,
    paddingRight: 25,
    paddingLeft: 25
  },
  mainInput: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#009688',
    padding: 20,
    width: 300,
    color: '#000',
    fontSize: 14,
  }, 
  label2: {
    color: 'black',
    fontWeight: 'regular',
    fontSize: 15,
    fontWeight: 'bold'
  },
  input: {
    gap: 20,
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 8,
  },
  button: {
    backgroundColor: '#009688',
    padding: 20,
    width: 200,
    borderRadius: 5,   
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F0F0F0',
    textAlign: 'center'
  },
  content: {
    backgroundColor:'#FFF',
    width: '100%',
    padding: 20,    
    borderRadius: 20,
    
  },
  contentTitle: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  containerScroll: {
    width: '90%',
  }

 
});
