import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default function App() {
  let [quote, setQuote] = React.useState('')
  let [source, setSource] = React.useState('')

  const fetchApiCall = () => {
    fetch("https://quotes15.p.rapidapi.com/quotes/random/", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "quotes15.p.rapidapi.com",
        "x-rapidapi-key": "d12abe7ff8msh59bdeb4ac04c2e3p12014djsn52fd12344aae"
      }
    })
      .then(response => response.json())
      .then(response => {
        setQuote(response.content);
        setSource(response.originator.name)
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quote Generator</Text>
      <Text>Example with fetch and Axios</Text>
      <TouchableHighlight onPress={fetchApiCall}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Generate</Text>
        </View>
      </TouchableHighlight>
      <View>
        <Text>{quote}</Text>
        <Text>{source}</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ada7a5',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff'
  },
  title: {
    fontSize: 35,
    color: '#fff'
  },
  button: {
    padding: 10,
    marginVertical: 15,
    backgroundColor: '#0645AD',
    borderRadius: 10,
    width: 300,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff'
  }
});