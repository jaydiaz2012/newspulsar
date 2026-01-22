# NewsPulsar

NewsPulsar is a web application that allows users to fetch news articles, summarize them, and perform sentiment analysis. The app is built with a Flask backend and a React frontend.

## Features
- **Fetch News**: Retrieve news articles based on a search query using a news API.
- **Summarize Articles**: Generate concise summaries of news articles using NLP.
- **Sentiment Analysis**: Analyze the sentiment of articles (positive, negative, or neutral).

## Technologies Used
### Backend
- **Flask**: Python web framework for building the backend.
- **TextBlob**: Library for sentiment analysis.
- **Transformers**: NLP library for summarization.
- **Requests**: For making HTTP requests to the news API.

### Frontend
- **React**: JavaScript library for building the user interface.
- **Axios**: For making HTTP requests to the backend.

## Installation
### Backend
1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install the required Python packages:
   ```bash
   pip install -r requirements.txt
   ```
3. Run the Flask app:
   ```bash
   python app.py
   ```

### Frontend
1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install the required Node.js packages:
   ```bash
   npm install
   ```
3. Start the React app:
   ```bash
   npm start
   ```

## Usage
1. Open the frontend in your browser (usually at `http://localhost:3000`).
2. Enter a topic to search for news articles.
3. View the fetched articles and use the buttons to summarize or analyze sentiment.

## API Endpoints
### Backend
- **GET `/fetch-news`**: Fetch news articles based on a query parameter.
- **POST `/summarize`**: Summarize a given text.
- **POST `/sentiment`**: Perform sentiment analysis on a given text.

## Future Enhancements
- Add user authentication.
- Support multiple languages for summarization and sentiment analysis.
- Improve the UI/UX design.

## License
This project is licensed under the MIT License.
