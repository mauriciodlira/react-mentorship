import React from 'react';
import Loading from './Loading';
import './Content.css';
import Repository from './Repository';

export default class Content extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        console.log("content props:", this.props);
        if(this.props.repositories !== undefined && this.props.loading === false) {
            const repositories = this.props.repositories.map((repo) => (
                <li key={repo.id}>
                    <Repository repository={repo} />
                    <div className="repository-divider"/>
                </li>
            ));
            return (<ul className="repositories-list">{repositories}</ul>);
        } else return (<Loading />);
    }
}