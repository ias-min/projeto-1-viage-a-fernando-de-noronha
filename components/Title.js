import { View, Text, StyleSheet} from 'react-native'

export function Title() {
  return (
    <View>
      <Text style={styles.titulo}>Bem-vindo a Fernando de Noronha</Text>
      <Text>Descubra o paraíso das praias intocadas e águas cristalinas.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
   titulo: {
    fontSize: 25,
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: '#007b00',
    padding: 20
  }
})