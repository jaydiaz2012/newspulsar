import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [query, setQuery] = useState('');
  const [articles, setArticles] = useState([]);
  const [summary, setSummary] = useState('');
  const [sentiment, setSentiment] = useState(null);

  const fetchNews = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/fetch-news?query=${query}`);
      setArticles(response.data);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  const summarizeArticle = async (text) => {
    try {
      const response = await axios.post('http://localhost:5000/summarize', { text });
      setSummary(response.data[0].summary_text);
    } catch (error) {
      console.error('Error summarizing article:', error);
    }
  };

  const analyzeSentiment = async (text) => {
    try {
      const response = await axios.post('http://localhost:5000/sentiment', { text });
      setSentiment(response.data);
    } catch (error) {
      console.error('Error analyzing sentiment:', error);
    }
  };

  return (
    <div>
      <h1>NewsScan</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter a topic"
      />
      <button onClick={fetchNews}>Fetch News</button>

      <div>
        <h2>Articles</h2>
        {articles.map((article, index) => (
          <div key={index}>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
            <button onClick={() => summarizeArticle(article.content)}>Summarize</button>
            <button onClick={() => analyzeSentiment(article.content)}>Analyze Sentiment</button>
          </div>
        ))}
      </div>

      {summary && (
        <div>
          <h2>Summary</h2>
          <p>{summary}</p>
        </div>
      )}

      {sentiment && (
        <div>
          <h2>Sentiment Analysis</h2>
          <p>Polarity: {sentiment.polarity}</p>
          <p>Subjectivity: {sentiment.subjectivity}</p>
          <p>Sentiment: {sentiment.sentiment}</p>
        </div>
      )}
    </div>
  );
}

export default App;
