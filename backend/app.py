from flask import Flask, request, jsonify
import requests
from textblob import TextBlob
from transformers import pipeline

app = Flask(__name__)

# Initialize summarization pipeline
summarizer = pipeline("summarization")

@app.route('/fetch-news', methods=['GET'])
def fetch_news():
    api_key = "YOUR_NEWS_API_KEY"  # Replace with your NewsAPI key
    query = request.args.get('query', 'technology')
    url = f'https://newsapi.org/v2/everything?q={query}&apiKey={api_key}'

    response = requests.get(url)
    if response.status_code == 200:
        articles = response.json().get('articles', [])
        return jsonify(articles)
    else:
        return jsonify({"error": "Failed to fetch news"}), 500

@app.route('/summarize', methods=['POST'])
def summarize():
    data = request.json
    text = data.get('text', '')

    if not text:
        return jsonify({"error": "No text provided"}), 400

    summary = summarizer(text, max_length=130, min_length=30, do_sample=False)
    return jsonify(summary)

@app.route('/sentiment', methods=['POST'])
def sentiment():
    data = request.json
    text = data.get('text', '')

    if not text:
        return jsonify({"error": "No text provided"}), 400

    analysis = TextBlob(text)
    sentiment = {
        "polarity": analysis.polarity,
        "subjectivity": analysis.subjectivity,
        "sentiment": "positive" if analysis.polarity > 0 else "negative" if analysis.polarity < 0 else "neutral"
    }
    return jsonify(sentiment)

if __name__ == '__main__':
    app.run(debug=True)
