import Router from './Router'
import { Toaster } from 'sonner';
import { UserProvider } from './context/UserContext';
import { CartProvider } from './context/CartContext';
import './App.css'

function App() {
  return (
    <UserProvider>
      <CartProvider>
        <Router />
        <Toaster />
      </CartProvider>
    </UserProvider>
  );
}

export default App

