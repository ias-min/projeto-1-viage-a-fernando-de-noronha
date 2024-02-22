import { View, Text, StyleSheet} from 'react-native'

export function SubTitle() {
   return (
    <View>
      <Text style={styles.subtitulo}>Explore as Maravilhosas Praias</Text>
      <Text style={styles.subfrase}>Visite as praias de Fernando de Noronha e mergulhe nas águas azul-turquesa.</Text>
    </View>
  )
}
 
const styles = StyleSheet.create({
  subtitulo: {
    fontSize: 18,
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: '#ed7000',
    padding: 15,
    marginTop: 23
  },

  subfrase: {
    margin:10
  }
})