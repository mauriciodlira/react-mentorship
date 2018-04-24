import React from 'react';
import Loading from './Loading';
import './Content.css';

export default class Content extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        console.log("content props:", this.props);
        if(this.props.repositories !== undefined && this.props.loading === false) {
            const repositories = this.props.repositories.map((repo) => (
                <li key={repo.id}>
                    <h3 className="repository-title">{repo.name}</h3>
                    <strong>Stargazers: </strong>{repo.stargazers_count}<br/>
                    <strong>Watchers: </strong>{repo.watchers_count}<br/>
                    <strong>Proprietário: </strong><a href={repo.owner.html_url}>{repo.owner.login}</a><br/>
                    <strong>View on GitHub: </strong><a href={repo.html_url}>{repo.full_name}</a><br/>
                    <div className="repository-divider"/>
                </li>
            ));
            return (<ul className="repositories-list">{repositories}</ul>);
        } else return (<Loading />);
    }
}