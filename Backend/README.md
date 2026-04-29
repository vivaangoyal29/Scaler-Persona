# Persona-Based AI Chatbot - Scaler

A working persona-based AI chatbot featuring three Scaler personalities: **Anshuman Singh**, **Abhimanyu Saxena**, and **Kshitij Mishra**. Built with Node.js, Express, and Google Gemini API.

## Features

✨ **Three Distinct Personas** - Each with carefully researched system prompts capturing their unique voice and values  
💬 **Real-time Chat** - Instant responses from the Gemini API  
🔄 **Persona Switching** - Switch between personalities and reset conversation  
💡 **Smart Suggestion Chips** - Pre-built questions for quick interaction  
⌨️ **Typing Indicator** - Visual feedback while API processes  
📱 **Fully Responsive** - Works seamlessly on mobile and desktop  
🛡️ **Secure** - API key stored in environment variables, never hardcoded

## Setup Instructions

### Prerequisites
- Node.js 16+
- Google Gemini API key (get it free from [AI Studio](https://aistudio.google.com/app/apikey))

### Installation

1. **Clone and navigate**
   ```bash
   cd Prompt-Implementation
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment**
   ```bash
   cp .env.example .env
   ```
   Add your Gemini API key to `.env`:
   ```
   GEMINI_API_KEY=your_api_key_here
   PORT=3000
   ```

4. **Run the server**
   ```bash
   npm start
   ```
   or for development with auto-reload:
   ```bash
   npm run dev
   ```

5. **Open in browser**
   Navigate to `http://localhost:3000`

## Project Structure

```
├── index.js              # Express server & API endpoints
├── prompts.js            # System prompts for all three personas
├── package.json          # Dependencies and scripts
├── .env.example          # Environment template
├── .gitignore            # Git ignore rules
├── public/
│   └── index.html        # Frontend chat interface
├── README.md             # This file
├── prompts.md            # Detailed prompt documentation
└── reflection.md         # Project reflection & learnings
```

## API Endpoint

**POST** `/api/chat`

Request body:
```json
{
  "message": "What makes a great engineer?",
  "personaId": "anshuman"
}
```

Response:
```json
{
  "response": "Money compounds, but so do skills...",
  "persona": "Anshuman Singh"
}
```

## Personas

### Anshuman Singh
- **Role**: Co-founder & CTO, Scaler
- **Style**: Calm, structured, thoughtful
- **Topics**: Career growth, engineering excellence, tech + business
- **Tone**: "Money compounds, but so do skills. The real question is — which path makes you harder to replace?"

### Abhimanyu Saxena
- **Role**: Co-founder, Scaler Academy
- **Style**: Energetic, casual, builder-focused
- **Topics**: Startups, building, tech leverage
- **Tone**: "Stop consuming. Start building. Break things. Fix them. Repeat. LFG."

### Kshitij Mishra
- **Role**: Educator & Tech Lead, Scaler
- **Style**: Calm, witty, clarity-focused
- **Topics**: System design, concepts, teaching
- **Tone**: "Think of it like traffic flow — you're not eliminating congestion, you're distributing it better."

## Screenshots

### Main Chat Interface
- Persona tabs at top for easy switching
- Clean message bubbles (user blue, bot gray)
- Quick-start suggestion chips
- Real-time typing indicator

### Features in Action
- Persona-specific responses reflecting their unique voice
- Conversation resets when switching personas
- Error handling with user-friendly messages
- Fully mobile-responsive design

## Deployment

Ready to deploy to:
- **Vercel**: `vercel deploy`
- **Netlify**: Connect your GitHub repo
- **Railway**: `railway up`
- **Heroku**: `git push heroku main`

Remember to set the `GEMINI_API_KEY` environment variable on your deployment platform.

## Error Handling

The app gracefully handles:
- Missing or invalid API key → User-friendly error message
- Network failures → Retry prompt
- Invalid persona ID → Server-side validation
- Empty messages → Client-side prevention

## Documentation

- **prompts.md** - Deep dive into each system prompt with reasoning
- **reflection.md** - Lessons learned and the GIGO principle

## License

ISC
