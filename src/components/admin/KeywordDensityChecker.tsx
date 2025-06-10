
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { Search, FileText, AlertTriangle, CheckCircle } from 'lucide-react';

const KeywordDensityChecker = () => {
  const [selectedPage, setSelectedPage] = useState('home');
  const [customKeyword, setCustomKeyword] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // Mock page content for analysis
  const pageContent = {
    home: `Magizh NexGen Technologies specializes in custom web development and mobile app development for all major industries. Our web development services include responsive website design, e-commerce development, and progressive web applications. We provide mobile app development for iOS and Android platforms. Our technology solutions help businesses grow through innovative software development and digital transformation.`,
    about: `Magizh NexGen Technologies is a leading technology company focused on delivering innovative software solutions. Our team of experienced developers specializes in web development, mobile app development, and custom software development. We serve clients across various industries including healthcare, finance, and education.`,
    services: `Our comprehensive services include web development, mobile app development, UI/UX design, and custom software development. Web development services cover responsive design, e-commerce platforms, and content management systems. Mobile app development includes native iOS and Android applications as well as cross-platform solutions.`,
    contact: `Contact Magizh NexGen Technologies for your web development and mobile app development needs. Get in touch with our team to discuss your technology requirements and receive a custom quote for your project.`,
    industries: `Magizh NexGen Technologies serves multiple industries with specialized technology solutions. Our healthcare technology solutions include patient management systems and telemedicine platforms. We develop fintech solutions for financial institutions and educational technology platforms for learning organizations.`
  };

  const pages = [
    { id: 'home', name: 'Home Page', url: '/' },
    { id: 'about', name: 'About Us', url: '/about' },
    { id: 'services', name: 'Services', url: '/services' },
    { id: 'contact', name: 'Contact', url: '/contact' },
    { id: 'industries', name: 'Industries', url: '/industries' },
  ];

  const analyzeKeywordDensity = () => {
    setIsAnalyzing(true);
    
    setTimeout(() => {
      const content = pageContent[selectedPage as keyof typeof pageContent];
      const words = content.toLowerCase().split(/\s+/);
      const totalWords = words.length;
      
      // Common keywords to analyze + custom keyword
      const keywordsToAnalyze = [
        'web development',
        'mobile app development',
        'technology',
        'software development',
        'magizh',
        'solutions',
        'services',
        'custom',
        ...(customKeyword ? [customKeyword.toLowerCase()] : [])
      ];

      const keywordResults = keywordsToAnalyze.map(keyword => {
        const keywordWords = keyword.split(' ');
        let count = 0;
        
        if (keywordWords.length === 1) {
          // Single word
          count = words.filter(word => word === keyword).length;
        } else {
          // Multi-word phrase
          for (let i = 0; i <= words.length - keywordWords.length; i++) {
            const phrase = words.slice(i, i + keywordWords.length).join(' ');
            if (phrase === keyword) count++;
          }
        }
        
        const density = ((count / totalWords) * 100);
        
        return {
          keyword,
          count,
          density: density.toFixed(2),
          status: density > 3 ? 'high' : density > 1 ? 'good' : 'low',
          recommendation: density > 3 ? 'Reduce usage' : density < 0.5 ? 'Consider adding more' : 'Optimal'
        };
      }).filter(result => result.count > 0);

      setResults(keywordResults);
      setIsAnalyzing(false);
    }, 1500);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'good': return 'default';
      case 'high': return 'destructive';
      case 'low': return 'secondary';
      default: return 'secondary';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'good': return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'high': return <AlertTriangle className="h-4 w-4 text-red-500" />;
      case 'low': return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      default: return <AlertTriangle className="h-4 w-4 text-gray-500" />;
    }
  };

  const getDensityProgress = (density: string) => {
    const value = parseFloat(density);
    return Math.min(value * 20, 100); // Scale for progress bar (5% = 100%)
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Keyword Density Checker</CardTitle>
          <CardDescription>Analyze keyword frequency and density on your pages</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Select Page</label>
              <Select value={selectedPage} onValueChange={setSelectedPage}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a page to analyze" />
                </SelectTrigger>
                <SelectContent>
                  {pages.map((page) => (
                    <SelectItem key={page.id} value={page.id}>
                      {page.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="text-sm font-medium mb-2 block">Custom Keyword (Optional)</label>
              <Input
                placeholder="Enter additional keyword to analyze"
                value={customKeyword}
                onChange={(e) => setCustomKeyword(e.target.value)}
              />
            </div>
          </div>

          <Button 
            onClick={analyzeKeywordDensity} 
            disabled={isAnalyzing}
            className="w-full"
          >
            {isAnalyzing ? (
              <>
                <Search className="h-4 w-4 animate-spin mr-2" />
                Analyzing Content...
              </>
            ) : (
              <>
                <FileText className="h-4 w-4 mr-2" />
                Analyze Keyword Density
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {results.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Keyword Density Analysis Results</CardTitle>
            <CardDescription>
              Keyword frequency analysis for {pages.find(p => p.id === selectedPage)?.name}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Keyword</TableHead>
                  <TableHead>Count</TableHead>
                  <TableHead>Density</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Recommendation</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {results.map((result, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{result.keyword}</TableCell>
                    <TableCell>{result.count}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Progress 
                          value={getDensityProgress(result.density)} 
                          className="w-16 h-2"
                        />
                        {result.density}%
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={getStatusColor(result.status)} className="flex items-center gap-1 w-fit">
                        {getStatusIcon(result.status)}
                        {result.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-gray-600">
                      {result.recommendation}
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
          <CardTitle>Keyword Density Guidelines</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <h4 className="font-medium mb-2 text-green-600">Optimal (1-3%)</h4>
              <ul className="space-y-1 text-gray-600">
                <li>• Natural keyword usage</li>
                <li>• Good for SEO ranking</li>
                <li>• Maintains readability</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2 text-yellow-600">Low (0-1%)</h4>
              <ul className="space-y-1 text-gray-600">
                <li>• May miss SEO opportunities</li>
                <li>• Consider adding more instances</li>
                <li>• Use in headings and content</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2 text-red-600">High (3%+)</h4>
              <ul className="space-y-1 text-gray-600">
                <li>• Risk of keyword stuffing</li>
                <li>• May hurt SEO rankings</li>
                <li>• Reduce keyword frequency</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default KeywordDensityChecker;
