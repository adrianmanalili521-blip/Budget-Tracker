import { Tabs, usePathname } from 'expo-router'
import { StyleSheet, View } from 'react-native'

import AntDesign from '@expo/vector-icons/AntDesign'
import Feather from '@expo/vector-icons/Feather'

import CustomHeader from '../components/customeHeader'
import DashboardView from '../components/dashboardView'

export default function TabLayout() {

  return (
    <View style={styles.container}>
      <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: '#000' }}>
        <Tabs.Screen
          name='index'
          options={{
            title: 'transactions',
            tabBarIcon: ({ size, color }) => (
              <Feather name='list' size={size} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name='summaryView'
          options={{
            title: 'summary',
            tabBarIcon: ({ size, color }) => (
              <AntDesign name='bar-chart' size={size} color={color} />
            ),
          }}
        />
        <Tabs.Screen 
          name='+not-found'
          options={{
            href: null
          }}
        />

      </Tabs>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})
