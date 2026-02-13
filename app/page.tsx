'use client';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useState } from 'react';
import { Amplify } from 'aws-amplify';
// 以下のファイルはAmplifyがビルド時に自動生成しようとしますが、
// 手動構成の場合は一旦、最小限のインポートに留めます。

export default function App() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleChat = async () => {
    // ここは後ほど権限設定が終わってから本格的に実装します
    setResponse("送信されました（バックエンド接続準備中）: " + input);
  };

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main className="flex flex-col items-center p-24 text-black bg-white min-h-screen">
          <div className="w-full max-w-5xl flex justify-between items-center mb-8">
            <h1 className="text-xl font-bold">AI Assistant</h1>
            <div className="flex items-center gap-4">
              <span>{user?.signInDetails?.loginId}</span>
              <button onClick={signOut} className="bg-red-500 text-white px-4 py-2 rounded text-sm">Sign Out</button>
            </div>
          </div>

          <div className="w-full max-w-2xl bg-gray-50 p-6 rounded-lg shadow">
            <div className="flex gap-2 mb-4">
              <input 
                className="flex-1 p-2 border rounded"
                value={input} 
                onChange={(e) => setInput(e.target.value)}
                placeholder="質問を入力..."
              />
              <button onClick={handleChat} className="bg-blue-600 text-white px-4 py-2 rounded">送信</button>
            </div>
            <div className="p-4 border rounded bg-white min-h-[100px]">
              <strong>AIの回答:</strong>
              <p className="mt-2">{response}</p>
            </div>
          </div>
        </main>
      )}
    </Authenticator>
  );
}
