import { StyleSheet, Text, View } from 'react-native';

function CustomHeader() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Budget Tracker</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 16,
    paddingBottom: 12,
    paddingHorizontal: 16,
    backgroundColor: '#e67d22',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
  },
})

export default CustomHeader;