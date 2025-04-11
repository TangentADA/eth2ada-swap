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
    const response = await axios.post(
      'https://api.x.ai/v1/chat/completions',
      req.body,
      {
        headers: {
          Authorization: `Bearer ${process.env.XAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    res.setHeader('Access-Control-Allow-Origin', 'https://eth2ada-new-b88ae5303633.herokuapp.com');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error proxying request to xAI API:', error);
    res.status(error.response?.status || 500).json({
      error: 'Failed to proxy request to xAI API',
      details: error.message,
    });
  }
}
