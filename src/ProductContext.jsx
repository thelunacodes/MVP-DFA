import { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext(undefined);

export function ProductProvider({children}) {
    const [products, setProducts] = useState([]);
    const [finishedLoading, setFinishedLoading] = useState(false);

    async function fetchProducts() {
        try {
            const res = await fetch("/product_records.json");
            if (!res.ok) {
                console.error(`HTTP ERROR: ${res.status}`)
            }
            
            const p = await res.json();
            setProducts(p)
        } catch (err) {
            console.error(err);
        } finally {
            setFinishedLoading(true);
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <ProductContext.Provider value={{ products, setProducts, finishedLoading }}>
            {children}
        </ ProductContext.Provider>
    )
}

export function UseProductContext() {
    const context = useContext(ProductContext);

    if (!context) {
        throw new Error("O 'UseProductContext' deve ser usado dentro de um 'ProductProvider'!")
    }

    return context;
}