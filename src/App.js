import './App.css';
import './../node_modules/bootstrap/dist/css/bootstrap.css'
import { Navigate, useRoutes } from 'react-router';
import Footer from './components/Footer/Footer';
import NavBar from './components/SiteBar/NavBar/NavBar';
import TopBar from './components/SiteBar/TopBar/TopBar';
import routes from './Router';

function App() {

  const allRoutes = useRoutes(routes)

  return (
    <>
      <TopBar></TopBar>
      <NavBar></NavBar>
      {allRoutes ? allRoutes : <Navigate to='/' />}
      <Footer></Footer>
    </>
  );
}

export default App;
