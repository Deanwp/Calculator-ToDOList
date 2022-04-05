import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, View, TouchableOpacity, Vibration} from 'react-native';
import React, {useState} from 'react';
import { Flex, Spacer } from "native-base";

export default function Hello(Navigation) {
  const [number, setNumber] = useState('')
  const buttons = [1, 2,'-' , '+', 3, 4, '/', '*', 5, 6, '%', '=', 7,8,9,0, 'DEL', 'C']
  function calculator() {
    
    let lastArr = number[number.length-1];
    
    if(lastArr === '/' || lastArr === '*' || lastArr === '-' || lastArr === '+' || lastArr === '.' || lastArr === '%'){
      setNumber(number)
      return
    }
    else {
      let result = eval(number).toString();
      setNumber(result)
      return
    }
  }

  function handleInput(buttonPressed) {
    if(buttonPressed  === '+' || buttonPressed === '-' || buttonPressed === '*' || buttonPressed === '/' || buttonPressed === '%') {
      setNumber(number + buttonPressed)
      return
    }
    else if (buttonPressed === 1 || buttonPressed === 2 || buttonPressed === 3 || buttonPressed === 4 || buttonPressed === 5 ||
            buttonPressed === 6 || buttonPressed === 7 || buttonPressed === 8 || buttonPressed === 9 || buttonPressed === 0 ) {}
    switch(buttonPressed) {
      case 'DEL':
        setNumber(number.substring(0, (number.length - 1)))
        return
      case 'C':
        setNumber('')
        return
      case '=':
        calculator()
        return
    }
    setNumber(number + buttonPressed)
  }

  return (
    <View style={styles.container}>
      <Text style={{marginTop:50, fontSize:30, color:'white', marginLeft:10}}>Display</Text>
      <View style={styles.results}>
        <Text style={styles.resultText}>{number}</Text>
      </View>
      <View style={styles.buttons}>
        {buttons.map((button) =>
          button === '=' || button === '/' || button === '*' || button === '-' || button === '+' || button === '%'?
          <TouchableOpacity key={button} style={[styles.button, {backgroundColor: '#930707'} ]} onPress={() => handleInput(button)}>
            <Text style={[styles.textButton, {color: 'white', fontSize: 28} ]}>{button}</Text>
          </TouchableOpacity>
          :
          <TouchableOpacity key={button} style={[styles.button, {backgroundColor: '#FF5757' } ]} onPress={() => handleInput(button)}>
            <Text style={styles.textButton}>{button}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#FFA0A0',
    maxWidth: '100%',
    minHeight: '100%',
  },
  results: {
    backgroundColor: 'white',
    maxWidth: '100%',
    minHeight: '10%',
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderRadius: 50,
    marginTop: 5
  },
  resultText: {
    maxHeight: 45,
    color: 'black',
    margin: 15,
    fontSize: 35,
  },
  themeButton: {
    alignSelf: 'flex-start',
    bottom: '5%',
    margin: 15,
    backgroundColor: '#e5e5e5',
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  buttons: {
    marginTop: 20,
    width: '100%',
    height: '55%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#FFA0A0'

  },
  button: {
    borderColor: '#3f4d5b',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '18%',
    minHeight: '16%',
    flex: 2,
    margin: 8,
    borderRadius: 20
  },
  textButton: {
    color: 'white',
    fontSize: 28,
  }
});

