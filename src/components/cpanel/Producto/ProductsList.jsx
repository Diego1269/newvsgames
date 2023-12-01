import React, { useEffect, useState } from "react";
import { getAllProds } from '../../../api/producto.api';
import ProductsCard from "./ProductsCard";

const ProductsList = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        async function loadProductos(){
            const res = await getAllProds();
            setProductos(res.data);
        }
        loadProductos();
    }, []);


  return (
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {productos.map(producto => (
            <ProductsCard key={producto.id} producto={producto} />
        ))}
    </div>
  )
}

export default ProductsList;