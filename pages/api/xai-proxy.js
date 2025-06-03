import axios from 'axios';

export default async function handler(req, res) {
  console.log('xAI Proxy Route Hit:', {
    method: req.method,
    url: req.url,
    headers: req.headers,
    body: req.body,
  });

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    console.log('Handling OPTIONS request');
    res.setHeader('Access-Control-Allow-Origin', 'https://eth2ada.com');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    return res.status(200).end();
  }

  // Only allow POST requests for the actual API call
  if (req.method !== 'POST') {
    console.log('Method not allowed:', req.method);
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    console.log('Forwarding request to xAI API with body:', req.body);
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

    res.setHeader('Access-Control-Allow-Origin', 'https://eth2ada.com');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error proxying request to xAI API:', {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data,
    });
    res.status(error.response?.status || 500).json({
      error: 'Failed to proxy request to xAI API',
      details: error.message,
    });
  }
}
