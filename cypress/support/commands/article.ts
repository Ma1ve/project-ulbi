import { Article } from '@/entities/Articles';

const defaultArticle = {
    title: 'Python news',
    subtitle: 'Что нового в PYTHON 2014',
    img: 'https://dkrn4sk0rn31v.cloudfront.net/2020/01/07093212/PYTHON.png',
    views: 1022,
    user: {
        id: '1',
        username: 'ILYA',
        avatar: 'https://cdn.comss.net/img/052019/wsl_2.png',
    },
    createdAt: '26.02.2024',
    userId: '1',
    type: ['IT', 'ECONOMICS'],
    blocks: [],
};

export const createArticle = (article?: Article) => {
    return cy
        .request({
            method: 'POST',
            url: 'http://localhost:8000/articles',
            headers: { Authorization: 'asdfasdf' },
            body: article ?? defaultArticle,
        })
        .then((resp) => resp.body);
};

export const removeArticle = (articleId: string = '1') => {
    return cy.request({
        method: 'DELETE',
        url: 'http://localhost:8000/articles/' + articleId,
        headers: { Authorization: 'asdfasdf' },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            createArticle(article?: Article): Chainable<Article>;
            removeArticle(articleId: string): Chainable<void>;
        }
    }
}
