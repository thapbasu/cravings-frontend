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
import ChefsList from './pages/ChefsList';
import ChefProfile from './pages/ChefProfile';
import Payment from './pages/Payment';
import Profile from './pages/user/Profile';
import Favourties from './pages/user/Favourties';
import Dashboard from './pages/chef/Dashboard';
import ViewRecipe from './pages/chef/ViewRecipe';
import AddRecipe from './pages/chef/AddRecipe';
import ChefOwnProfile from './pages/chef/ChefOwnProfile';
import AdminDashboard from './pages/Admin/AdminDashboard';
import ViewChefs from './pages/Admin/ViewChefs';
import ViewRecipes from './pages/Admin/ViewRecipes';
import ViewUsers from './pages/Admin/ViewUsers';
import CategoryList from './pages/Admin/CategoryList';
import ViewPayment from './pages/Admin/ViewPayment';
import AdminProfile from './pages/Admin/AdminProfile';

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
      <Route path="/user/profile" element={<Profile />} />
      <Route path="/user/profile/favourites" element={<Favourties />} />
      {/* Chef routes */}
      <Route path="/chef/dashboard" element={<Dashboard />} />
      <Route path="/chef/view-recipes" element={<ViewRecipe />} />
      <Route path="/chef/add-recipe" element={<AddRecipe />} />
      <Route path="/chef/profile" element={<ChefOwnProfile />} />
      {/* Admin Routes */}
      <Route path="/admin/profile" element={<AdminProfile />} />
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/admin/chefs" element={<ViewChefs />} />
      <Route path="/admin/recipes" element={<ViewRecipes />} />
      <Route path="/admin/users" element={<ViewUsers />} />
      <Route path="/admin/category" element={<CategoryList />} />
      <Route path="/admin/payments" element={<ViewPayment />} />
    </Routes>
  );
}

export default App;
