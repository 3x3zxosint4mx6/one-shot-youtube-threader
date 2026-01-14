
import React, { useState } from 'react';
import Header from './components/Header';
import PostCard from './components/PostCard';
import { generateXThread } from './services/geminiService';
import { ThreadResult, GenerationStatus } from './types';

const App: React.FC = () => {
  const [url, setUrl] = useState('');
  const [status, setStatus] = useState<GenerationStatus>(GenerationStatus.IDLE);
  const [result, setResult] = useState<ThreadResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    setStatus(GenerationStatus.LOADING);
    setError(null);
    setResult(null);

    try {
      const data = await generateXThread(url);
      setResult(data);
      setStatus(GenerationStatus.SUCCESS);
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
      setStatus(GenerationStatus.ERROR);
    }
  };

  const handleCopyAll = () => {
    if (!result) return;
    const allText = result.posts.map(p => p.content).join('\n\n---\n\n');
    navigator.clipboard.writeText(allText);
    alert('Full thread copied to clipboard!');
  };

  return (
    <div className="min-h-screen pb-20 max-w-2xl mx-auto px-4">
      <Header />

      <main className="mt-10">
        <form onSubmit={handleSubmit} className="mb-12">
          <label className="block text-sm font-medium text-zinc-400 mb-2">
            YouTube Video URL
          </label>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="https://www.youtube.com/watch?v=..."
              className="flex-1 bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-zinc-600"
              required
            />
            <button
              type="submit"
              disabled={status === GenerationStatus.LOADING}
              className={`px-8 py-3 rounded-xl font-semibold transition-all flex items-center justify-center gap-2 ${
                status === GenerationStatus.LOADING
                  ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
                  : 'bg-white text-black hover:bg-zinc-200'
              }`}
            >
              {status === GenerationStatus.LOADING ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-zinc-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Analyzing...
                </>
              ) : (
                'Generate Thread'
              )}
            </button>
          </div>
        </form>

        {status === GenerationStatus.LOADING && (
          <div className="space-y-4 animate-pulse">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-32 bg-zinc-900 rounded-xl border border-zinc-800"></div>
            ))}
          </div>
        )}

        {status === GenerationStatus.ERROR && (
          <div className="bg-red-900/20 border border-red-500/50 text-red-200 p-4 rounded-xl mb-8 flex items-start gap-3">
            <svg className="w-5 h-5 text-red-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p>{error}</p>
          </div>
        )}

        {result && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">Generated Thread</h2>
              <button 
                onClick={handleCopyAll}
                className="text-sm text-blue-400 hover:text-blue-300 transition-colors font-medium"
              >
                Copy Entire Thread
              </button>
            </div>
            
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 mb-8">
              <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Analysis Summary</h3>
              <p className="text-zinc-300 italic">{result.summary}</p>
            </div>

            <div className="space-y-0">
              {result.posts.map((post, idx) => (
                <PostCard 
                  key={post.id} 
                  post={post} 
                  index={idx} 
                  total={result.posts.length} 
                />
              ))}
            </div>

            {result.sources.length > 0 && (
              <div className="mt-12 p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
                <h3 className="text-sm font-bold text-zinc-400 mb-4 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.828a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                  Search Grounding Sources
                </h3>
                <ul className="space-y-2">
                  {result.sources.map((source, i) => (
                    <li key={i}>
                      <a 
                        href={source.uri} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline text-sm block truncate"
                      >
                        {source.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {status === GenerationStatus.IDLE && !result && (
          <div className="text-center py-20 opacity-30 select-none">
            <svg className="w-20 h-20 mx-auto mb-4 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <p className="text-lg">Paste a YouTube URL to get started</p>
          </div>
        )}
      </main>

      <footer className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-md border-t border-zinc-800 py-3">
        <div className="max-w-2xl mx-auto px-4 flex justify-between items-center text-[10px] text-zinc-500 uppercase tracking-widest">
          <span>Powered by Gemini 3 Pro</span>
          <span>Google Search Grounding Enabled</span>
        </div>
      </footer>
    </div>
  );
};

export default App;
