import React, { useEffect, useState } from 'react';
import { getAllUsers } from '../../../api/usuario.api';
import UsuarioCard from './UsuarioCard';

const UsuarioList = () => {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        async function loadUsuarios() {
            const res = await getAllUsers();
            setUsuarios(res.data);
        }
        loadUsuarios();
    }, []);


  return (
    <div>
        {usuarios.map(usuario => (
            <UsuarioCard key={usuario.id} usuario={usuario} />
        ))}
    </div>
  )
}

export default UsuarioList