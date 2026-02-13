'use client';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useState } from 'react';
import { generateClient } from 'aws-amplify/data';
import type { Schema } from '@/amplify/data/resource';

const client = generateClient<Schema>();

export default function App() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleChat = async () => {
    const { data, errors } = await client.queries.askBedrock({ prompt: input });
    if (data) setResponse(data);
    if (errors) console.error(errors);
  };

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main className="flex flex-col items-center p-24">
          <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
            <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
              Welcome, {user?.signInDetails?.loginId}
            </p>
            <button onClick={signOut} className="bg-red-500 text-white px-4 py-2 rounded">Sign Out</button>
          </div>

          <div className="mt-12 w-full max-w-2xl">
            <div className="flex gap-4 mb-8">
              <input 
                className="flex-1 p-2 border rounded text-black"
                value={input} 
                onChange={(e) => setInput(e.target.value)}
                placeholder="GitHubリポジトリについて質問..."
              />
              <button onClick={handleChat} className="bg-blue-600 text-white px-6 py-2 rounded">送信</button>
            </div>
            <div className="p-4 border rounded bg-white min-h-[100px] text-black">
              <strong>AIの回答:</strong>
              <p className="mt-2">{response}</p>
            </div>
          </div>
        </main>
      )}
    </Authenticator>
  );
}
