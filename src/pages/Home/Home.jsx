import { Button, Text, View } from "react-native"
import { useCart } from "../../context/CartContext";

export const HomePage = () => {
    const { getTotalItems, clearCart, addItem } = useCart()
    // const { addItemToCart, getTotalItemCount, getTotalPrice } = useCart();
    const sampleProduct = {
        id: '1',
        name: 'Produto Exemplo',
        price: 49.99,
    };

    return (
        <View>
            <Text>Quantidade de Itens no Carrinho: {getTotalItems()}</Text>
            <Button title="Limpar carrinho" onPress={clearCart}/>
            <Button title="Adicionar ao Carrinho" onPress={() => addItem(sampleProduct)} />
            {/* 
            <Text>Total do Carrinho: R$ {getTotalPrice().toFixed(2)}</Text>
             */}
        </View>
    )
}
