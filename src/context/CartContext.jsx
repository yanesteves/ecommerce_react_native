import { createContext, useContext, useState } from 'react'

// Criacao do contexto
const CartContext = createContext()

// Criacao do Provider e exportar funcoes e variaveis
export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([])

    // Numero de itens no carrinho
    function getTotalItems() {
        return items.length // [1, 2, 3].length => 3
    }

    // Add Item
    function addItem(item) {
        // [...existente,  novo]
        setItems(prev => [...prev, item])
    }

    // Clear Cart    
    function clearCart() {
        setItems([])
    }

    return (
        <CartContext.Provider value={{ items, getTotalItems, addItem, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}

// Criar o hook personalizado
export const useCart = () => useContext(CartContext)
// const { getTotalItems, clearCart } = useCart()