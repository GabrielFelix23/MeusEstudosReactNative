import React from 'react'
import {View, Text, StyleSheet, Switch, TouchableOpacity} from 'react-native'

export default class App extends React.Component{
    state = {
        status: false,
        fundo: styles.container
    }
    
    render(){
        return(
            <View style={this.state.fundo}> 
                <Switch
                    value={this.state.status}
                    onValueChange={(valorSwitch) => this.setState({
                        status: valorSwitch,
                        fundo: styles.fundo
                    })}
                />
                <Text style={styles.fonte}>{(this.state.status) ? "Ativo" : "Initivo"}</Text>
            </View>
        )
    }
}

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    fundo:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "gray",
    },
    fonte:{
      fontSize: 30,
      textAlign: "center"
    }
})