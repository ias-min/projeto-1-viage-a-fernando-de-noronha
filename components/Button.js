import { View, Text, StyleSheet} from 'react-native'

export function Button() {
   return (
    <View>
      <Text style={styles.butao}>Reseva sua Viagem</Text>
    </View>
  )
}
 
const styles = StyleSheet.create({
  butao: {
    fontSize: 25,
    color: '#0303b5',
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: '#abdefa',
    margin: 30,
    padding: 20
  }
})