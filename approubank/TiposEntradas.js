import { Text, SafeAreaView, StyleSheet, ImageBackground, View, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons, Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

export default function TiposDeEntradas() {
  const navigation = useNavigation();
  const [showPinInput, setShowPinInput] = useState(false);
  const [pin, setPin] = useState('');

  const goToLoginOutros = () => {
    navigation.navigate('LoginOutros');
  };

  const goToLoginPin = () => {
    navigation.navigate('LoginPin');
  };

  const goToLoginFaceId = () => {
    navigation.navigate('LoginFaceId');
  };

  const goToLoginBiometria = () => {
    navigation.navigate('LoginBiometria');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.background} source={require('./assets/background1.png')}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>Roubank</Text>
        </View>

        <View style={styles.containerBottom}>
          <View style={styles.containerEntrarComo}>
            <Text style={styles.txtEntrarComo}>Entrar Como</Text>
          </View>
          
          <View style={styles.containerBotoes}>
            <View style={styles.containerIcon}>
              <TouchableOpacity onPress={goToLoginFaceId}>
                <Image source={require('./assets/faceid.png')} style={styles.imgIcon} />
                <Text style={styles.txtIcon}>Face ID</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.containerIcon}>
              <TouchableOpacity onPress={goToLoginBiometria}>
                <Image source={require('./assets/biometria.png')} style={styles.imgIcon} />
                <Text style={styles.txtIcon}>Biometria</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.containerIcon}>
              <TouchableOpacity onPress={goToLoginPin}>
                <Image source={require('./assets/pin.png')} style={styles.imgIcon} />
                <Text style={styles.txtIcon}>PIN</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.containerIcon}>
              <TouchableOpacity onPress={goToLoginOutros}>
                <Entypo style={styles.imgIcon} name="chevron-thin-up" />
                <Text style={styles.txtIcon}>Outros</Text>
              </TouchableOpacity>
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
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },

  background: {
    flex: 1,
    width: '100%', 
    height: '103%',
  },

  containerTitle: {
    marginTop: 390,
    marginLeft: 111,
    width: 229,
    height: 61,
  },

  title: {
    fontSize: 50,
    color: '#ffffff',
  },

  containerEntrarComo: {
    marginBottom: 0,
  },

  containerBottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 50,
  },

  txtEntrarComo: {
    fontSize: 12,
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 50,
  },

  containerIcon: {
    flexDirection: 'column',
    marginTop: 'auto',
    width: 90,
    alignItems: 'center',
  },

  txtIcon: {
    fontSize: 14,
    color: '#ffffff',
    textAlign: 'center',
    marginBottom: 40,
  },

  imgIcon: {
    marginBottom: 30,
    textAlign: 'center',
    fontSize: 35,
    color: '#ffffff',
    width: 50, 
    height: 50, 
    tintColor: 'white',
  },

  containerBotoes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  
});