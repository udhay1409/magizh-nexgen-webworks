
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Search, TrendingUp, TrendingDown, Minus } from 'lucide-react';

const KeywordVolumeChecker = () => {
  const [keyword, setKeyword] = useState('');
  const [keywords, setKeywords] = useState<string[]>([]);
  const [results, setResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Mock keyword data - in a real app, this would come from an API like Google Keyword Planner, SEMrush, etc.
  const mockKeywordData = {
    'web development': { volume: 33100, difficulty: 'High', cpc: '$8.50', trend: 'up' },
    'mobile app development': { volume: 22200, difficulty: 'Medium', cpc: '$12.30', trend: 'up' },
    'custom software development': { volume: 1900, difficulty: 'Low', cpc: '$15.60', trend: 'stable' },
    'react development': { volume: 18100, difficulty: 'Medium', cpc: '$6.70', trend: 'up' },
    'website design': { volume: 49500, difficulty: 'High', cpc: '$5.20', trend: 'down' },
    'ui ux design': { volume: 40500, difficulty: 'Medium', cpc: '$7.80', trend: 'up' },
    'ecommerce development': { volume: 8100, difficulty: 'Medium', cpc: '$9.40', trend: 'stable' },
    'healthcare software': { volume: 2400, difficulty: 'Low', cpc: '$18.90', trend: 'up' },
    'fintech development': { volume: 1600, difficulty: 'Low', cpc: '$22.50', trend: 'up' },
    'education technology': { volume: 3300, difficulty: 'Low', cpc: '$8.70', trend: 'stable' }
  };

  const addKeyword = () => {
    if (keyword.trim() && !keywords.includes(keyword.trim().toLowerCase())) {
      setKeywords([...keywords, keyword.trim().toLowerCase()]);
      setKeyword('');
    }
  };

  const removeKeyword = (keywordToRemove: string) => {
    setKeywords(keywords.filter(k => k !== keywordToRemove));
    setResults(results.filter(r => r.keyword !== keywordToRemove));
  };

  const checkVolumes = async () => {
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const newResults = keywords.map(kw => {
        const data = mockKeywordData[kw as keyof typeof mockKeywordData];
        return {
          keyword: kw,
          volume: data ? data.volume : Math.floor(Math.random() * 10000) + 100,
          difficulty: data ? data.difficulty : ['Low', 'Medium', 'High'][Math.floor(Math.random() * 3)],
          cpc: data ? data.cpc : `$${(Math.random() * 20 + 1).toFixed(2)}`,
          trend: data ? data.trend : ['up', 'down', 'stable'][Math.floor(Math.random() * 3)]
        };
      });
      setResults(newResults);
      setIsLoading(false);
    }, 1500);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Low': return 'default';
      case 'Medium': return 'secondary';
      case 'High': return 'destructive';
      default: return 'secondary';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="h-4 w-4 text-green-500" />;
      case 'down': return <TrendingDown className="h-4 w-4 text-red-500" />;
      case 'stable': return <Minus className="h-4 w-4 text-gray-500" />;
      default: return <Minus className="h-4 w-4 text-gray-500" />;
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Keyword Volume Checker</CardTitle>
          <CardDescription>Research keyword search volumes and competition levels</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input
              placeholder="Enter keyword (e.g., web development)"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addKeyword()}
              className="flex-1"
            />
            <Button onClick={addKeyword} disabled={!keyword.trim()}>
              Add
            </Button>
          </div>

          {keywords.length > 0 && (
            <div className="space-y-2">
              <p className="text-sm font-medium">Keywords to check:</p>
              <div className="flex flex-wrap gap-2">
                {keywords.map((kw) => (
                  <Badge key={kw} variant="outline" className="cursor-pointer" onClick={() => removeKeyword(kw)}>
                    {kw} ×
                  </Badge>
                ))}
              </div>
              <Button 
                onClick={checkVolumes} 
                disabled={isLoading || keywords.length === 0}
                className="w-full"
              >
                {isLoading ? (
                  <>
                    <Search className="h-4 w-4 animate-spin mr-2" />
                    Checking Volumes...
                  </>
                ) : (
                  <>
                    <Search className="h-4 w-4 mr-2" />
                    Check Keyword Volumes
                  </>
                )}
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {results.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Keyword Analysis Results</CardTitle>
            <CardDescription>Search volume and competition data for your keywords</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Keyword</TableHead>
                  <TableHead>Monthly Volume</TableHead>
                  <TableHead>Difficulty</TableHead>
                  <TableHead>CPC</TableHead>
                  <TableHead>Trend</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {results.map((result) => (
                  <TableRow key={result.keyword}>
                    <TableCell className="font-medium">{result.keyword}</TableCell>
                    <TableCell>{result.volume.toLocaleString()}</TableCell>
                    <TableCell>
                      <Badge variant={getDifficultyColor(result.difficulty)}>
                        {result.difficulty}
                      </Badge>
                    </TableCell>
                    <TableCell>{result.cpc}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        {getTrendIcon(result.trend)}
                        <span className="capitalize text-sm">{result.trend}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Button size="sm" variant="outline" onClick={() => removeKeyword(result.keyword)}>
                        Remove
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Keyword Research Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-medium mb-2">Volume Ranges:</h4>
              <ul className="space-y-1 text-gray-600">
                <li>• High: 10,000+ searches/month</li>
                <li>• Medium: 1,000-10,000 searches/month</li>
                <li>• Low: Under 1,000 searches/month</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Difficulty Levels:</h4>
              <ul className="space-y-1 text-gray-600">
                <li>• Low: Easier to rank for</li>
                <li>• Medium: Moderate competition</li>
                <li>• High: Very competitive</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default KeywordVolumeChecker;
