import axios from 'axios';

export default async function handler(req, res) {
  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', 'https://eth2ada-new-b88ae5303633.herokuapp.com');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    return res.status(200).end();
  }

  // Only allow POST requests for the actual API call
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Validate the API key
    const apiKey = process.env.XAI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: 'XAI_API_KEY is not configured on the server' });
    }

    // Validate request body
    const { model, messages, max_tokens } = req.body;
    if (!model || !messages || !Array.isArray(messages)) {
      return res.status(400).json({ error: 'Invalid request body: model and messages are required' });
    }

    // Forward the request to the xAI API
    const response = await axios.post(
      'https://api.x.ai/v1/chat/completions',
      {
        model: model || 'grok',
        messages: messages,
        max_tokens: max_tokens || 500,
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
      }
    );

    res.setHeader('Access-Control-Allow-Origin', 'https://eth2ada-new-b88ae5303633.herokuapp.com');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error proxying request to xAI API:', error.response?.data || error.message);
    res.status(error.response?.status || 500).json({
      error: 'Failed to proxy request to xAI API',
      details: error.response?.data?.error?.message || error.message,
    });
  }
}
