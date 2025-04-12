import React from 'react';
import {SafeAreaView, StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Cartoes() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.background} source={require('./assets/background1.png')}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>Cartões</Text>
        </View>

        <View style={styles.cardContainer}>
          <View style={styles.cardBackground} />
          <Text style={styles.currentBalanceLabel}>Saldo Atual</Text>
          <Text style={styles.currentBalance}>$10 985,84</Text>
          <Text style={styles.cardNumber}>**** **** **** 1289</Text>
          <Text style={styles.expiryDate}>09/25</Text>
          <Image source={require('./assets/mastercard.png')} style={styles.cardLogo} />
        </View>

        <View style={styles.dotContainer}>
         <View style={styles.dot} />
        </View>

        <View style={styles.detailsContainer}>
          <Text style={styles.detailsTitle}>Detalhes</Text>
          <View style={styles.usdBalance}>
            <Image style={styles.euaImage} source={require('./assets/EUA.png')} />
            <Text style={styles.usdText}>USD 56*3254</Text>
            <TouchableOpacity>
              <Text style={styles.seeButton}>Ver {'>'}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.historyContainer}>
            <Text style={styles.historyTitle}>Histórico de Transações</Text>

            <View style={styles.transactionItem}>
              <View style={styles.transactionIconNegative}>
                <Ionicons name="arrow-down" size={20} color="#fc0303" />
              </View>
              <View style={styles.transactionDetails}>
                <Text style={styles.transactionAmountNegative}>-$2,7</Text>
                <Text style={styles.transactionDate}>12.01.2020 09:34</Text>
              </View>
              <View style={styles.containerDescription}>
              <Text style={styles.transactionDescription}>Starbucks New York LLP</Text>
              <Text style={styles.transactionLocation}>NY, USA</Text>
              </View>
            </View>

            <View style={styles.transactionItem}>
              <View style={styles.transactionIconNegative}>
                <Ionicons name="arrow-down" size={20} color="#fc0303" />
              </View>
              <View style={styles.transactionDetails}>
                <Text style={styles.transactionAmountNegative}>-$135</Text>
                <Text style={styles.transactionDate}>11.01.2020 21:34</Text>
              </View>
              <View style={styles.containerDescription}>
              <Text style={styles.transactionDescription}>Wallmart Marketplace</Text>
              <Text style={styles.transactionLocation}>NY, USA</Text>
              </View>
            </View>

            <View style={styles.transactionItem}>
              <View style={styles.transactionIconPositive}>
                <Ionicons name="arrow-up" size={20} color="#28C76F" />
              </View>
              <View style={styles.transactionDetails}>
                <Text style={styles.transactionAmountPositive}>+$250</Text>
                <Text style={styles.transactionDate}>11.01.2020 18:08</Text>
              </View>
              <View style={styles.containerDescription}>
              <Text style={styles.transactionDescription}>From Catherine Pierce</Text>
              <Text style={styles.transactionCode}>Code: 32548/765487</Text>
              </View>
            </View>
          </View>
        </View>
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
    paddingTop: 50,
    alignItems: 'left',
    marginTop: 25,
    marginLeft: 20,
    marginBottom: 15,
  },

  title: {
   fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },

  cardContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 10,
    padding: 20,
    margin: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    overflow: 'hidden',
    position: 'relative',
  },

  cardBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.4,
    borderRadius: 10,
    backgroundColor: 'linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
  },

  currentBalanceLabel: {
    color: '#ddd',
    fontSize: 16,
    marginBottom: 5,
  },

  currentBalance: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  cardNumber: {
    color: '#eee',
    fontSize: 18,
    marginBottom: 5,
  },

  expiryDate: {
    color: '#ccc',
    fontSize: 14,
    alignSelf: 'flex-start',
  },

  dotContainer: {
    alignItems:'center',
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ddd',
    marginHorizontal: 3,
  },

  cardLogo: {
    width: 60,
    height: 40,
    position: 'absolute',
    bottom: 10,
    right: 10,
    resizeMode: 'contain',
  },

  detailsContainer: {
    marginTop: 30,
    padding: 20,
    backgroundColor: '#fafafa',
    borderRadius: 30,
    height: '100%',
  },

  detailsTitle: {
    color: 'black',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  usdBalance: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: 'space-between',
  },

  euaImage: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginRight: 10,
  },

  usdText: {
    color:'black',
    fontSize: 14,
    fontWeight: 'bold',
    flex: 1,
  },

  seeButton: {
    color: '#fc0303',
    fontSize: 16,
    fontWeight: 'bold',
  },

  historyContainer: {
    marginBottom: 8,
  },

  historyTitle: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },

  transactionIconNegative: {
    backgroundColor: '#f7f5f5',
    borderRadius: 15,
    padding: 8,
    marginRight: 17,
  },

  transactionIconPositive: {
    backgroundColor: '#f7f5f5',
    borderRadius: 15,
    padding: 8,
    marginRight: 17,
  },

  transactionDetails: {
    flex:1,
    marginBottom: 30,
  },

  transactionAmountNegative: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },

  transactionAmountPositive: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },

  transactionDate: {
    color: '#ccc',
    fontSize: 12,
  },

  containerDescription: {
    color: '#ccc',
    fontSize: 13,
    marginRight: 15,
  },

  transactionDescription: {
    color: '#ccc',
    fontSize: 12,
  },

  transactionLocation: {
    color: '#ccc',
    fontSize: 12,
  },

  transactionCode: {
    color: '#ccc',
    fontSize: 12,
  },
});