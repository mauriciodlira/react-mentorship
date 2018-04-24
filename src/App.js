import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavigationMenu from './navigation/Navigation';
import Content from './content/Content';
import GithubApi from "./content/GithubApi";

class App extends Component {
  languages = ['javascript','scala','ruby','typescript','kotlin','swift'];

  constructor(props) {
    super(props);

    this.state = {
      language: this.languages[0],
      loading: true
    };

    this.changeLanguage = this.changeLanguage.bind(this);
  }

  componentDidMount() {
    this.fetchRepos();
  }

  changeLanguage(language) {
    this.setState({language}, () => this.fetchRepos());
  }

  fetchRepos() {
    this.setState({loading: true});
    console.log("chamou fetchRepos com: ",this.state.language);
    GithubApi(this.state.language)
      .then((repos) => {
        this.setState({
            repositories: repos,
            loading: false
        })
      });
  }

  render() {
    return (
      <div>
        <header className="app-header">
          <NavigationMenu languages={this.languages} changeLanguage={this.changeLanguage}/>
          <img src={logo} className="app-logo" alt="logo" />
        </header>
        <div className="app-body">
          <Content repositories={this.state.repositories} loading={this.state.loading}/>
        </div>
      </div>
    );
  }
}

export default App;