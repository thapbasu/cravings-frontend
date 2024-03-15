import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Recipe from './pages/Recipe';
import Register from './pages/Register';
import NorthIndian from './pages/categories/NorthIndian';
import SouthIndian from './pages/categories/SouthIndian';
import Chinese from './pages/categories/Chinese';
import Login from './pages/Login';
import About from './pages/About';
import RecipeDetails from './pages/RecipeDetails';
import Profile from './pages/Profile';
import Favourties from './pages/Favourties';
import ChefsList from './pages/ChefsList';
import ChefProfile from './pages/ChefProfile';
import Payment from './pages/Payment';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipe" element={<Recipe />} />
      <Route path="/recipe/:id" element={<RecipeDetails />} />

      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route path="/chefs" element={<ChefsList />} />
      <Route path="/chefs/:id" element={<ChefProfile />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/categories/north-indian" element={<NorthIndian />} />
      <Route path="/categories/south-indian" element={<SouthIndian />} />
      <Route path="/categories/chinese" element={<Chinese />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/profile/favourites" element={<Favourties />} />
    </Routes>
  );
}

export default App;
