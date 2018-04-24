import React from 'react';

export default class Repository extends React.Component {

    render(){
        const repo = this.props.repository;
        return (
            <div>
                <h3 className="repository-title">{repo.name}</h3>
                <strong>Stargazers: </strong>{repo.stargazers_count}<br/>
                <strong>Watchers: </strong>{repo.watchers_count}<br/>
                <strong>Proprietário: </strong><a href={repo.owner.html_url}>{repo.owner.login}</a><br/>
                <strong>View on GitHub: </strong><a href={repo.html_url}>{repo.full_name}</a><br/>
            </div>
        )
    }
}