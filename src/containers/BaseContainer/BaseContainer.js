import React from 'react';
import PropTypes from 'prop-types';
// Importamos los componentes
import Header from '../../components/Header';
import SearchContainer from '../SearchContainer';
import { Link, NavLink } from 'react-router-dom';

/**
 * Este es el container base de nuestra aplicación. Si recibe un elemento en
 * props.children, renderizará dicho elemento en la UI. Si este prop es
 * `undefined`, renderizará la vista para buscar nuevos repositorios.
 */
class BaseContainer extends React.Component {
  /**
   * Props del component
   */
  static propTypes = {
    // Es necesario, si no, los links no se actualizarán
    location: PropTypes.object.isRequired
  };

  /**
   * Render the HomeContainer component
   */
  render() {
    return <main className="container">
      <Header />
      <nav className="Navigation">
        <Link to="/" className="Link">Home</Link>
        <Link to="/about" className="Link">About</Link>
      </nav>
      { this.props.children || <SearchContainer /> }
    </main>;
  }
}

// Export the class
export default BaseContainer;