import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Image, Button, StyleSheet } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext';

const products = [
  { id: '1', name: 'Camisa', price: 29.99, image: 'https://via.placeholder.com/150' },
  { id: '2', name: 'Calça', price: 49.99, image: 'https://via.placeholder.com/150' },
  { id: '3', name: 'Tênis', price: 89.99, image: 'https://via.placeholder.com/150' },
  { id: '4', name: 'Jaqueta', price: 99.99, image: 'https://via.placeholder.com/150' },
  { id: '5', name: 'Boné', price: 19.99, image: 'https://via.placeholder.com/150' },
];

export const ProductPage = () => {
  const { logout } = useAuth()
  const { addItem } = useCart()

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query) {
      const filteredData = products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filteredData);
    } else {
      setFilteredProducts(products);
    }
  };

  function handleAddCart(item) {
    addItem(item)
    alert(`${item.name} adicionado ao carrinho!`)
  }

  const renderProduct = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.price}>R$ {item.price.toFixed(2)}</Text>
      <Button title="Adicionar ao Carrinho" onPress={() => handleAddCart(item)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Button title="Logout" onPress={logout}/>
      <TextInput
        style={styles.searchInput}
        placeholder="Buscar produto..."
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <FlatList
        data={filteredProducts}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 8,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    color: '#888',
    marginBottom: 8,
  },
});