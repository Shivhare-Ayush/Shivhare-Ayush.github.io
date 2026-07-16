//import React from 'react';
import { SiMedium } from 'react-icons/si';
import ArticleCard from './ArticleCard';

const articles = [
  {
    title: 'Your First Article Title',
    excerpt: 'A short excerpt that hooks the reader — two or three sentences summarising what the article covers and why it matters.',
    date: 'July 2026',
    tags: ['Career', 'Engineering'],
    platforms: [
      {
        name: 'Medium',
        icon: SiMedium,
        url: 'https://medium.com/@ayush-shivhare',
      },
    ],
  },
];

function Writing() {
  return (
    <div className="space-y-4">
      {articles.map((article, index) => (
        <ArticleCard key={index} {...article} />
      ))}
    </div>
  );
}

export default Writing;
