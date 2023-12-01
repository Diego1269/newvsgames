import React, { useEffect, useState } from 'react';
import { getAllCats } from '../../../api/categoria.api';
import CategoriasCard from './CategoriasCard';

const CategoriasList = () => {
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
            <CategoriasCard key={categoria.id} categoria={categoria} />
        ))}
    </div>
  )
}

export default CategoriasList;