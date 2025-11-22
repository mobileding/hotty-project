'use client';

import { useState } from 'react';
import { Upload, Zap, Crown } from 'lucide-react';

export default function Home() {
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setLoading(true);
      // Simulate API call to /api/transform
      setTimeout(() => {
        setResult({ score: 7.4, enhanced: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD...' }); // Placeholder
        setLoading(false);
      }, 3000);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-pink-500 to-black text-white flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8">Hotty AI</h1>
      <p className="text-xl mb-8">Upload your selfie → Get your hotness score + glow-up in seconds 🔥</p>
      
      <div className="bg-white/10 rounded-2xl p-8 w-full max-w-md">
        <label htmlFor="file-upload" className="cursor-pointer flex flex-col items-center p-6 border-2 border-dashed border-white/30 rounded-lg">
          <Upload className="w-12 h-12 mb-4" />
          <span>Drag or click to upload selfie</span>
          <input id="file-upload" type="file" accept="image/*" onChange={handleUpload} className="hidden" />
        </label>
        
        {loading && <div className="mt-4 text-center">Scanning... <Zap className="inline w-5 h-5 animate-spin" /></div>}
        {result && (
          <div className="mt-4">
            <h2 className="text-2xl">You scored {result.score}/10 → Glow-up to 9.8!</h2>
            <img src={result.enhanced} alt="Enhanced" className="mt-4 rounded-lg w-full" />
            <button className="mt-4 w-full bg-yellow-500 text-black py-2 rounded">Upgrade to Pro</button>
          </div>
        )}
      </div>
      
      <div className="mt-8 flex space-x-4">
        <button className="flex items-center space-x-2 bg-purple-600 px-4 py-2 rounded">
          <Crown className="w-4 h-4" />
          <span>Go Pro</span>
        </button>
      </div>
    </main>
  );
}
