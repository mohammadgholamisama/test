import './App.css';
import './../node_modules/bootstrap/dist/css/bootstrap.css'
import { Navigate, useRoutes } from 'react-router';
import routes from './Router';

function App() {

  const allRoutes = useRoutes(routes)

  return (
    <>
      {allRoutes ? allRoutes : <Navigate to='/' />}
    </>
  );
}

export default App;
