import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { getEmployees } from '../services/empService';

export default function Body() {
    const [employees, setEmployees] = React.useState([]);

    React.useEffect(() => {
      getEmployees().then(result => {
        console.log(result)
        setEmployees(result.data)
      })
    }, [])

  return (
    <View style={styles.container}>
      <Text>Dolgozók</Text>

      <FlatList 
        data={employees}
        renderItem={ ({item}) => (
            <View style={styles.item}>
                <View style={styles.row}>
                    <Text style={styles.idText}>Id: {item.id}</Text>
                    <Text style={styles.salaryText}>Fizetés: {item.salary}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.text}>{item.name}</Text>
                    <Text style={styles.text}>{item.city}</Text>
                </View>
            </View>

        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'gold',
      width: '100%',
      padding: 10,
    },
    item: {
        borderColor: 'red',
        borderWidth: 1,
        margin: 5,
        padding: 10,
        borderRadius: 5,
        backgroundColor: 'white',
    },
    idText: {
        // textAlign: 'center',
        width: '50%',
        fontSize: 16,
        fontWeight: 'bold',
    },
    salaryText: {
        // textAlign: 'center',
        width: '50%',
        fontSize: 16,
        fontWeight: 'bold',
    },
    row: {
        flexDirection: 'row',
    },
    text: {
        width: '50%',
        fontSize: 24,
    },
})