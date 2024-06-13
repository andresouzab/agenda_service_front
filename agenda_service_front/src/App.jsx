import { useState } from 'react'
import './App.css'
import Cadastrar_usuario from './components/cadastrar_usuario'
import Cadastrar_prestador from './components/cadastrar_prestador'
import FormularioLogin from './components/login'
import {BrowserRouter as Router,Route, Routes, Navigate} from 'react-router-dom';
import { AuthProvider, useAuth } from './components/AuthProvider';
import Agendamento from './components/agendamento';

const ProtectedRoute = ({children}) => {
  const {autenticado} = useAuth();
  return autenticado ? children : <Navigate to="/login"/>
};

const RoutesWithAuth = () => {
  const { autenticado } = useAuth();
  return (
    <Router>
    {/* {autenticado} */}
    <Routes>
      <Route path="/login" element={<FormularioLogin/>}/>
      <Route path="/" element={autenticado ? <Navigate to="/agendamento" /> : <FormularioLogin />} />
      <Route path="/cadastrar/usuario" element={<Cadastrar_usuario/>} />
      <Route path="/cadastrar/prestador" element={<Cadastrar_prestador/>} />
      <Route path="/agendamento" element={<Agendamento/>} />

    </Routes>
    </Router> 
  
  )
}

const App = () => {
  return (
      <AuthProvider>
          <RoutesWithAuth/>
      </AuthProvider>
  );
};

export default App;
