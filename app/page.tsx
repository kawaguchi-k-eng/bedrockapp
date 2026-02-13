'use client';
import { useState } from 'react';
import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '@/amplify/data/resource';
import outputs from '@/amplify_outputs.json';

Amplify.configure(outputs);
const client = generateClient<Schema>();

export default function App() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const askBedrock = async () => {
    setLoading(true);
    try {
      const { data, errors } = await client.queries.chat({ content: input });
      if (errors) throw errors;
      setResponse(data || '返答がありませんでした。');
    } catch (e) {
      console.error(e);
      setResponse('エラーが発生しました。');
    }
    setLoading(false);
  };

  return (
    <main style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Bedrock Chat App</h1>
      <textarea 
        value={input} 
        onChange={(e) => setInput(e.target.value)}
        placeholder="AIに質問してみよう"
        style={{ width: '100%', height: '100px', marginBottom: '10px', color: 'black' }}
      />
      <button 
        onClick={askBedrock} 
        disabled={loading}
        style={{ padding: '10px 20px', cursor: 'pointer' }}
      >
        {loading ? '考え中...' : '送信'}
      </button>
      <div style={{ marginTop: '20px', whiteSpace: 'pre-wrap', borderTop: '1px solid #ccc', paddingTop: '20px' }}>
        <strong>AIの回答:</strong>
        <p>{response}</p>
      </div>
    </main>
  );
}
