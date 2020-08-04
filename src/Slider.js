import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Slider from '@react-native-community/slider'

export default class App extends React.Component{
  state = {
    valor: 0
  }
  
  render(){
    return(
      <View style={styles.container}>
          <Slider
            minimumValue={0}
            maximumValue={100}
            onValueChange={(valorSelecionado) => this.setState({valor: valorSelecionado})}
            value={this.state.valor}
            minimumTrackTintColor="#00ff00"
            maximumTrackTintColor="red"
            />

            <Text style={styles.fonte}>{this.state.valor.toFixed(1)}</Text>
      </View>
    )
  }
}

export const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 40
  },
  fonte:{
      fontSize: 30,
      textAlign: "center"
  }
})