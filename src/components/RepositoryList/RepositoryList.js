import React from 'react';
import PropTypes from 'prop-types';
import RepositoryRow from '../RepositoryRow';

/**
 * Muestra los repositorios en una lista.
 */
class RepositoryList extends React.PureComponent {

  static propTypes = {
    repositories: PropTypes.arrayOf(PropTypes.object).isRequired,
    loading: PropTypes.bool.isRequired,
    queried: PropTypes.bool.isRequired,
    search: PropTypes.string.isRequired
  }
  /**
   * Render the RepositoryList component
   */
  render() {
    return <section className="RepositoryList">
      <h1>RepositoryList</h1>
    </section>;
  }
}

// Export the class
export default RepositoryList;