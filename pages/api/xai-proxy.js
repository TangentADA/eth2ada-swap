import axios from 'axios';

export default async function handler(req, res) {
  // Only allow POST requests (to match your existing API call)
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Forward the request to the xAI API
    const response = await axios.post(
      'https://api.x.ai/v1/chat/completions', // Use the correct endpoint
      req.body, // Pass the request body (your prompt, etc.)
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_XAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    // Add CORS headers to the response
    res.setHeader('Access-Control-Allow-Origin', 'https://eth2ada-new-b88ae5303633.herokuapp.com');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // Send the xAI API response back to the client
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error proxying request to xAI API:', error);
    res.status(error.response?.status || 500).json({
      error: 'Failed to proxy request to xAI API',
      details: error.message,
    });
  }
}
