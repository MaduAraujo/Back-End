import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, ImageBackground, ScrollView} from 'react-native';

export default function Boletos() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.background} source={require('./assets/background1.png')}>
        <ScrollView style={styles.content}>
          <View style={styles.containerTitle}>
            <Text style={styles.title}>Boletos</Text>
          </View>

        <View style={styles.boletoItem}>
          <View style={styles.boletoInfo}>
            <Text style={styles.boletoValue}>R$ 150,00</Text>
            <Text style={styles.boletoDate}>10/04/2025</Text>
          </View>
          <View style={styles.boletoDetails}>
            <Text style={styles.boletoDescription}>Água</Text>
            <Text style={styles.boletoCompany}>Sabesp</Text>
          </View>
        </View>
        <View style={styles.separator} />

        <View style={styles.boletoItem}>
          <View style={styles.boletoInfo}>
            <Text style={styles.boletoValue}>R$ 300,00</Text>
            <Text style={styles.boletoDate}>10/04/2025</Text>
          </View>
          <View style={styles.boletoDetails}>
            <Text style={styles.boletoDescription}>Luz</Text>
            <Text style={styles.boletoCompany}>Enel</Text>
          </View>
        </View>
        <View style={styles.separator} />

        <View style={styles.boletoItem}>
          <View style={styles.boletoInfo}>
            <Text style={styles.boletoValue}>R$ 50,00</Text>
            <Text style={styles.boletoDate}>10/04/2025</Text>
          </View>
          <View style={styles.boletoDetails}>
            <Text style={styles.boletoDescription}>Telefone</Text>
            <Text style={styles.boletoCompany}>Tim</Text>
          </View>
        </View>
        <View style={styles.separator} />

        <View style={styles.boletoItem}>
          <View style={styles.boletoInfo}>
            <Text style={styles.boletoValue}>R$ 130,00</Text>
            <Text style={styles.boletoDate}>10/04/2025</Text>
          </View>
          <View style={styles.boletoDetails}>
            <Text style={styles.boletoDescription}>Gás</Text>
            <Text style={styles.boletoCompany}>Congás</Text>
          </View>
        </View>
        <View style={styles.separator} />

        <View style={styles.boletoItem}>
          <View style={styles.boletoInfo}>
            <Text style={styles.boletoValue}>R$ 80,00</Text>
            <Text style={styles.boletoDate}>10/04/2025</Text>
          </View>
          <View style={styles.boletoDetails}>
            <Text style={styles.boletoDescription}>Internet</Text>
            <Text style={styles.boletoCompany}>Claro</Text>
          </View>
        </View>
        <View style={styles.separator} />

        <View style={styles.boletoItem}>
          <View style={styles.boletoInfo}>
            <Text style={styles.boletoValue}>R$ 200,00</Text>
            <Text style={styles.boletoDate}>10/05/2025</Text>
          </View>
          <View style={styles.boletoDetails}>
            <Text style={styles.boletoDescription}>Supermercado</Text>
            <Text style={styles.boletoCompany}>Carrefour</Text>
          </View>
        </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  background: {
    flex: 1,
    width: '100%',
    height: '110%',
  },

  containerTitle: {
    paddingTop: 5,
    alignItems: 'flex-start', 
    marginTop: 10,
    marginLeft: 10,
    marginBottom: 30,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
  },

  content: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fafafa',
    marginTop: 150,
    height: '100%',
    borderTopLeftRadius: 20, 
    borderTopRightRadius: 20,
  },

  boletoItem: {
    padding: 10,
    marginBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  boletoInfo: {
    flexDirection: 'column',
  },

  boletoValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },

  boletoDate: {
    fontSize: 13,
    color: '#666',
  },

  boletoDetails: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },

  boletoDescription: {
    fontSize: 16,
    color: '#333',
  },
  
  boletoCompany: {
    fontSize: 12,
    color: '#777',
  },

  separator: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 5,
  },
});