import React from 'react';

export default function GithubApi(language) {
    const baseUrl = `https://api.github.com/search/repositories?q=language:${language}&sort=stars&order=desc`

    const dados = fetch(baseUrl)
        .then(res => res.json())
        .then(data => data.items);

    return (dados);
}
