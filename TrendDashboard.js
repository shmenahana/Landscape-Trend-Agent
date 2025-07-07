
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const mockTrends = [
  {
    platform: 'TikTok',
    videoUrl: 'https://www.tiktok.com/@example/video/1234567890',
    views: '2.3M',
    likes: '320K',
    caption: 'Watch this insane backyard makeover!',
    hook: 'They ruined the backyard until this',
    script: "You're looking at a disaster... but watch how it becomes a dream yard in just 3 days!",
    hashtags: ['#retainingwall', '#patiomakeover', '#lawnlife'],
  },
  {
    platform: 'YouTube Shorts',
    videoUrl: 'https://youtube.com/shorts/example123',
    views: '1.8M',
    likes: '210K',
    caption: 'DIY fire pit install for $200!',
    hook: 'Backyard firepit in 5 steps',
    script: 'This is how you transform your lawn into a fire-lit escape — for under $200!',
    hashtags: ['#DIYlandscaping', '#firepit', '#backyardgoals'],
  }
];

export default function TrendDashboard() {
  const [keyword, setKeyword] = useState('');
  const [trends, setTrends] = useState(mockTrends);

  const handleSearch = () => {
    // Will later call backend to fetch real trends
    console.log(`Searching for trends about: ${keyword}`);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">🌿 Viral Landscaping Content Agent</h1>
      <div className="flex gap-2 mb-6">
        <Input
          placeholder="Enter a landscaping topic (e.g. retaining wall)"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
        <Button onClick={handleSearch}>Find Trends</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {trends.map((trend, index) => (
          <Card key={index} className="rounded-2xl shadow-md">
            <CardContent className="p-4 space-y-2">
              <p className="text-sm text-muted-foreground">Platform: {trend.platform}</p>
              <a href={trend.videoUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                View Video
              </a>
              <p><strong>Views:</strong> {trend.views} | <strong>Likes:</strong> {trend.likes}</p>
              <p><strong>Hook:</strong> {trend.hook}</p>
              <p><strong>Caption:</strong> {trend.caption}</p>
              <p><strong>Script:</strong> {trend.script}</p>
              <p><strong>Hashtags:</strong> {trend.hashtags.join(' ')}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
