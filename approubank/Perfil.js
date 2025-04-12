import { Text, SafeAreaView, StyleSheet, View, ImageBackground, Image, ScrollView } from 'react-native';

export default function Perfil() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.background} source={require('./assets/background1.png')}>
        <ScrollView style={styles.content}>
          <View style={styles.containerTitle}>
            <Text style={styles.title}>Perfil</Text>
          </View>

          <View style={styles.circle}>
            <Image source={require('./assets/retrato.jpg')} style={styles.fotoUsuario} />
          </View>

          <Text style={styles.nome}>Ana Maria Souza</Text>
          
          <View style={styles.separator} />
          <View style={styles.containerNascimento}>
            <Text style={styles.titulo}>Data de Nascimento</Text>
            <Text style={styles.subTitulo}>10/04/2025</Text>
          </View>

          <View style={styles.separator} />
          <View style={styles.containerLimite}>
            <Text style={styles.titulo}>Limite Pix</Text>
            <Text style={styles.subTitulo}>R$ 3.000,00</Text>
          </View>

          <View style={styles.separator} />
          <View style={styles.containerLimiteCredito}>
            <Text style={styles.titulo}>Limite Crédito</Text>
            <Text style={styles.subTitulo}>R$ 10.000,00</Text>
          </View>
          <View style={styles.separator} />
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

  content: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fafafa',
    marginTop: 150,
    height: '100%',
    borderTopLeftRadius: 20, 
    borderTopRightRadius: 20,
  },
  
  containerTitle: {
    alignItems: 'left',
    padding: 20,
  },

  title: {
    fontSize: 22,
    color: 'black',
    height: 55,
  },

  circle: {
    width: 140, 
    height: 140, 
    borderRadius: 70, 
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center', 
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    overflow: 'hidden',
  },

  fotoUsuario: {
    width: '140%',
    height: '140%',
  },

  nome: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    marginBottom: 50, 
  },

  containerNascimento: {
    marginBottom: 5,
    padding: 5,
  },

  titulo: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black', 
    marginBottom: 5,
  },

  subTitulo: {
    fontSize: 12,
    color: '#ccc', 
  },

  containerLimite: {
    marginBottom: 5,
    padding: 5,
  },

  containerLimiteCredito: {
    marginBottom: 5,
    padding: 5,
  },

  separator: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 5,
  },
});