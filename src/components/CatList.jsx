import React, { useState, useEffect } from 'react';
import { getAllCats } from '../api/categoria.api';
import CatCard from './CatCard';

const CatList = () => {
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        async function loadCategorias() {
            const res = await getAllCats();
            setCategorias(res.data);
        }
        loadCategorias();
    }, []);

  return (
    <div>
        {categorias.map(categoria => (
            <CatCard key={categoria.id} categoria={categoria} />
        ))}
    </div>
  )
}

export default CatList;