import { useState } from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, StatusBar, TouchableOpacity, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomePage } from './src/pages/Home/Home.jsx';
import { CartPage } from './src/pages/Cart/Cart.jsx';
import Icon from 'react-native-vector-icons/Ionicons'; // Importando o ícone do carrinho

import './gesture-handler.native';

const Drawer = createDrawerNavigator();

export default function App() {  
  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
      <NavigationContainer>
        <StatusBar
          backgroundColor="transparent"
          translucent={true}
          barStyle="dark-content" // Define o estilo do conteúdo da StatusBar (claro ou escuro)
        />

        <Drawer.Navigator initialRouteName="Products">
          <Drawer.Screen 
            name="E-Commerce" 
            component={HomePage} 
            options={{
              headerRight: () => <CartIconWithNavigation />,
              title: 'E-Commerce',
            }}/>
          <Drawer.Screen name="Cart" component={CartPage} />
        </Drawer.Navigator>

      </NavigationContainer>
    </SafeAreaView>

  )
}


const CartIconWithNavigation = () => {
  const navigation = useNavigation();
  const [cartItemCount, setCartItemCount] = useState(3); // Simulação de quantidade de itens no carrinho

  return (
    <TouchableOpacity
      style={styles.cartContainer}
      onPress={() => navigation.navigate('Cart')}
    >
      <Icon name="cart-outline" size={24} color="#000" />
      <Text style={styles.cartCount}>{cartItemCount}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  cartContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  cartCount: {
    marginLeft: 4,
    fontSize: 16,
    color: '#000',
    fontWeight: 'bold',
  },
});