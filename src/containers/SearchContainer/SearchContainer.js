import React, { PropTypes } from 'react';

//Actions
// import {startSearch, successSearch} from '../../actions/actions';
import {searchRepositories} from '../../actions/actions';

// Importamos los componentes
// import Header from '../../components/Header';
import SearchForm from '../../components/SearchForm'
import RepositoryList from '../../components/RepositoryList';

//React-redux

import {connect} from 'react-redux';

/**
 * Muestra un buscador, así como la lista de resultados.
 */
class SearchContainer extends React.Component {

    /*constructor(props) {
        super(props);

        //binds
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            loading: false,
            results: [],
            search: '',
            queried: false
        }
    }*/


  /**
   * Datos falsos. Los utilizamos en desarrollo hasta que leamos los datos de
   * la API.
   */
  /*stubData() {
    let repo = {
      full_name: 'My Repository',
      owner: {
        login: 'Angel',
        avatar_url: 'https://avatars.githubusercontent.com/u/4056725?v=3',
        html_url: 'https://github.com/Angelmmiguel'
      },
      stargazers_count: 10,
      forks_count: 5
    }
    return [
      Object.assign({}, repo),
      Object.assign({}, repo),
      Object.assign({}, repo),
      Object.assign({}, repo),
      Object.assign({}, repo),
      Object.assign({}, repo),
      Object.assign({}, repo),
      Object.assign({}, repo),
      Object.assign({}, repo),
      Object.assign({}, repo)
    ]
  }*/

  

  onSubmit = (value) => {
    // this.setState({loading: true});
    this.props.dispatch(searchRepositories(value)); 

    /*fetch(`https://api.github.com/search/repositories?q=${ value }`)
      .then(res => {
          return res.json();
      })
      .then(json =>{
        this.props.dispatch(successSearch(json.items))
      })
      .catch(err => {
        console.log(err);
      })*/

    /*setTimeout (()=> {
      this.props.dispatch(successSearch(this.stubData()));
       // this.setState({search: value, loading: false, queried: true, results: this.stubData()});
    }, 2000);*/
  }

  /**
   * Render the SearchContainer component
   */
  render() {
    return <main className="container">
    <SearchForm onSubmit = {this.onSubmit} search = {this.props.search}/>
    <RepositoryList data = {this.props.results} loading={this.props.loading} queried={this.props.queried} search={this.props.search}/>
    </main>
  }
}

const mapStateToProps = state => {
  let {search, loading, results, queried} = state;

  return {search, loading, results, queried};
}

// Exportamos
export default connect(mapStateToProps)(SearchContainer);