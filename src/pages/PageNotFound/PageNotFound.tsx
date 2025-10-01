import { Link } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import './PageNotFound.css';

export const PageNotFound: React.FC = () => {
  return (
    <>
      <Header />
      <div className="not-found-container">
        <div className="not-found-content">
          <div className="not-found-image">
            <img src="/src/assets/img/pollo-1.webp" alt="Torito Grill Logo" className="bounce-animation" />
          </div>
          <h1 className="not-found-title">¡Oops! Página no encontrada</h1>
          <p className="not-found-text">
            Lo sentimos, la página que estás buscando no existe o ha sido movida.
          </p>
          <div className="not-found-actions">
            <Link to="/" className="not-found-button">
              Volver al inicio
            </Link>
            <Link to="/carta" className="not-found-button secondary">
              Ver nuestra carta
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};