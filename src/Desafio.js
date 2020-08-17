import React from 'react'
import {View, Text, StyleSheet, TextInput, Switch, Button, Alert} from 'react-native'

export default class Desafio extends React.Component{
    state = {
        nome: '',
        idade: ''
    }

    pegarNome = (nomeUser) => {
        this.setState({nome: nomeUser })
    }

    pegarIdade = (idadeUser) => {
        this.setState({idade: idadeUser})
    }
    
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.fonte}>Nome:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite aqui o seu nome: "
                    underlineColorAndroid="transparent"
                    onChangeText={this.pegarNome}
                />

                <Text style={styles.fonte}>Idade:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite aqui a sua idade: "
                    underlineColorAndroid="transparent"
                    onChangeText={this.pegarIdade}
                />

                <Button
                    title={"Abrir conta"}
                    onPress={() => Alert.alert(" "," ")}
                />
                <Text>{this.state.nome}</Text>
                <Text>{this.state.idade}</Text>
            </View>
        )
    }
}

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    input:{
        width: 200,
        height: 30,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 10
    },
    fonte:{
        fontSize: 20
    }
})