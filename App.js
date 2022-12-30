import React, { Component } from "react";
import { View, Text, StyleSheet, ImageBackground, Button } from "react-native"

export default class AppContadorDeAgua extends Component {

  constructor(props) {
    super(props)
    this.state = {volume: 0, restante: 2000, condicao: 'Ruim', meta: 2000, porcentagem: 0}
    this.beberAgua = this.beberAgua.bind(this)
  }

  verificarCondicao() {
    let s = this.state

    if (s.volume >= s.meta) {
      s.condicao = 'Boa'
    } else {
      s.condicao = 'Ruim'
    }
    
    this.setState(s)
  }

  atualizar() {
    let s = this.state
    
    if (s.restante > 0) {
      s.restante = s.restante - 200
    }
    
    s.porcentagem = (s.volume/s.meta * 100).toFixed(0)

    this.setState(s)
  }

  beberAgua() {
    let s = this.state
    
    s.volume = s.volume + 200
    this.setState(s)
    this.atualizar()
    this.verificarCondicao()
  }

  render() {

    return (
      <View style={styles.body}>
        <ImageBackground source={require('./images/waterbg.png')} style={styles.bgimage}>
          <Text style={styles.titulo} >App Contador de Água</Text>
          <View style={styles.topper} >
            <Text style={[styles.texto, styles.negrito]} >Meta: </Text>
            <Text style={styles.texto} >{this.state.meta} ml</Text>
          </View>
          <View style={styles.topper} >
            <Text style={[styles.texto, styles.negrito]} >Faltam: </Text>
            <Text style={styles.texto} >{this.state.restante} ml</Text>
            <Text style={[styles.texto, styles.negrito]} >Volume Ingerido: </Text>
            <Text style={styles.texto} >{this.state.volume} ml</Text>
          </View>
          <View style={styles.topper} >
            <Text style={[styles.texto, styles.negrito]} >Condição atual: </Text>
            <Text style={styles.texto} >{this.state.condicao}</Text>
          </View>
          <View style={styles.bottom} >
            <Text style={styles.textoPercent} >{this.state.porcentagem}%</Text>
            <Button title="Beber Água" onPress={this.beberAgua} />
          </View>
        </ImageBackground>
      </View>  
    )
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    paddingTop: 20
  },
  bgimage: {
    flex: 1,
    width: null,
    alignItems: "center"
  },
  titulo: {
    color: 'black',
    marginTop: 70,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 40
  },
  texto: {
    color: 'black',
    margin: 5,
  },
  negrito: {
    fontWeight: 'bold'
  },
  textoPercent: {
    color: 'white',
    fontSize: 80,
    marginBottom: 50
  },
  topper: {
    flex: 1,
    flexDirection: "row"
  },
  bottom: {
    flex: 15,
    justifyContent: "center"
  }
})