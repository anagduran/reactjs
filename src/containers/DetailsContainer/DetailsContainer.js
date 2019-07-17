import React from 'react';
import PropTypes from 'prop-types';

// Componentes
import Header from '../../components/Header';
import ReleaseList from '../../components/ReleaseList';
/**
 * Este container muestra los detalles para un repositorio concreto
 */
class DetailsContainer extends React.Component {

    static propTypes = {
        user: PropTypes.string.isRequired,
        repo: PropTypes.string.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            releases: [], 
            loading: false

        }
    }

  stubData() {
    let repo = {
      name: 'v1.0',
      html_url: 'https://github.com/Angelmmiguel/material_icons/releases/tag/v2.2.0',
      author: {
        login: 'Angel',
        avatar_url: 'https://avatars.githubusercontent.com/u/4056725?v=3',
        html_url: 'https://github.com/Angelmmiguel'
      },
      published_at: 12018092381213,
      zipball_url: 'https://github.com/Angelmmiguel/material_icons/archive/v2.2.0.zip',
      tarball_url: 'https://github.com/Angelmmiguel/material_icons/archive/v2.2.0.tar.gz'
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
  }

  /**
   * UI del contenedor
   */
  //Load the data
  componentDidMount(){
      this.setState({loading: true});

      fetch(`https://api.github.com/repos/${this.repoName}/releases`)
        .then( res=>{
          return res.json();
        })
        .then(json => {
          this.setState({
            loading: false,
            releases: json
          })
        })

      /*setTimeout(()=> {
          this.setState({loading: false, releases: this.stubData()});
      },1000)*/
  }

  //Devuelve el nombre del repo
  get repoName(){
      return `${this.props.user}/${this.props.repo}`;
  }
  render() {
    return <main className="container">
    <Header></Header>
    <h2>Releases of <b>{this.repoName}</b></h2>
    <ReleaseList data={this.state.releases} loading={this.state.loading}/>
    </main>;
  }
}

// Export the class
export default DetailsContainer;