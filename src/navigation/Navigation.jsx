import React from 'react';
import './Navigation.css';

export default function Navigation(props) {

    const links = props.languages.map((lang) => (
            <li className="nav-item" key={lang} onClick={() => props.changeLanguage(lang)}>{lang}</li>
    ));

    return(<ul className="navbar">{links}</ul>);
}