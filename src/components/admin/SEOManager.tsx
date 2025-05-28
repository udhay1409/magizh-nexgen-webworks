import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Search, TrendingUp, AlertCircle, CheckCircle, Eye, BarChart } from 'lucide-react';
import KeywordVolumeChecker from './KeywordVolumeChecker';

const SEOManager = () => {
  const [selectedPage, setSelectedPage] = useState('home');

  // Mock SEO data for different pages
  const pages = [
    { id: 'home', name: 'Home Page', url: '/', status: 'optimized' },
    { id: 'about', name: 'About Us', url: '/about', status: 'needs-work' },
    { id: 'services', name: 'Services', url: '/services', status: 'optimized' },
    { id: 'contact', name: 'Contact', url: '/contact', status: 'warning' },
    { id: 'industries', name: 'Industries', url: '/industries', status: 'optimized' },
  ];

  const seoData = {
    home: {
      title: 'Magizh NexGen Technologies | Web & Mobile App Development',
      description: 'Magizh NexGen Technologies specializes in custom web & mobile application development for all major industries.',
      keywords: 'web development, mobile app development, custom software, technology solutions',
      canonical: 'https://magizh.com/',
      ogImage: '/lovable-uploads/bc719e5a-3c3d-4395-b379-2546328d4f3f.png',
      score: 85
    },
    about: {
      title: 'About Magizh NexGen Technologies | Our Story',
      description: 'Learn about our journey, team, and commitment to delivering innovative technology solutions.',
      keywords: 'about magizh, technology company, software development team',
      canonical: 'https://magizh.com/about',
      ogImage: '/lovable-uploads/bc719e5a-3c3d-4395-b379-2546328d4f3f.png',
      score: 72
    },
    services: {
      title: 'Web & Mobile Development Services | Magizh NexGen',
      description: 'Comprehensive web development, mobile app development, and custom software solutions.',
      keywords: 'web development services, mobile app development, custom software development',
      canonical: 'https://magizh.com/services',
      ogImage: '/lovable-uploads/bc719e5a-3c3d-4395-b379-2546328d4f3f.png',
      score: 88
    },
    contact: {
      title: 'Contact Magizh NexGen Technologies',
      description: 'Get in touch with our team for your next technology project.',
      keywords: 'contact magizh, get quote, technology consultation',
      canonical: 'https://magizh.com/contact',
      ogImage: '/lovable-uploads/bc719e5a-3c3d-4395-b379-2546328d4f3f.png',
      score: 65
    },
    industries: {
      title: 'Industry Solutions | Magizh NexGen Technologies',
      description: 'Specialized technology solutions for healthcare, finance, education, and more industries.',
      keywords: 'industry solutions, healthcare technology, fintech, education technology',
      canonical: 'https://magizh.com/industries',
      ogImage: '/lovable-uploads/bc719e5a-3c3d-4395-b379-2546328d4f3f.png',
      score: 82
    }
  };

  const currentPageData = seoData[selectedPage as keyof typeof seoData];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'optimized': return 'default';
      case 'needs-work': return 'destructive';
      case 'warning': return 'secondary';
      default: return 'secondary';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'optimized': return <CheckCircle className="h-4 w-4" />;
      case 'needs-work': return <AlertCircle className="h-4 w-4" />;
      case 'warning': return <AlertCircle className="h-4 w-4" />;
      default: return <AlertCircle className="h-4 w-4" />;
    }
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="pages" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="pages" className="flex items-center gap-2">
            <Search className="h-4 w-4" />
            Page SEO
          </TabsTrigger>
          <TabsTrigger value="keywords" className="flex items-center gap-2">
            <BarChart className="h-4 w-4" />
            Keywords
          </TabsTrigger>
          <TabsTrigger value="analytics" className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            Analytics
          </TabsTrigger>
          <TabsTrigger value="console" className="flex items-center gap-2">
            <Eye className="h-4 w-4" />
            Search Console
          </TabsTrigger>
        </TabsList>

        <TabsContent value="pages" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Pages Overview</CardTitle>
                <CardDescription>SEO status for all pages</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {pages.map((page) => (
                    <div
                      key={page.id}
                      className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                        selectedPage === page.id ? 'bg-primary/10 border-primary' : 'hover:bg-gray-50'
                      }`}
                      onClick={() => setSelectedPage(page.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{page.name}</p>
                          <p className="text-sm text-gray-500">{page.url}</p>
                        </div>
                        <Badge variant={getStatusColor(page.status)} className="flex items-center gap-1">
                          {getStatusIcon(page.status)}
                          {page.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>SEO Settings - {pages.find(p => p.id === selectedPage)?.name}</CardTitle>
                <CardDescription>Optimize meta tags and SEO elements</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium">SEO Score</span>
                  <Badge variant={currentPageData.score >= 80 ? 'default' : 'secondary'}>
                    {currentPageData.score}/100
                  </Badge>
                </div>

                <div>
                  <label className="text-sm font-medium">Title Tag</label>
                  <Input defaultValue={currentPageData.title} className="mt-1" />
                  <p className="text-xs text-gray-500 mt-1">
                    {currentPageData.title.length}/60 characters
                  </p>
                </div>

                <div>
                  <label className="text-sm font-medium">Meta Description</label>
                  <Textarea defaultValue={currentPageData.description} className="mt-1" />
                  <p className="text-xs text-gray-500 mt-1">
                    {currentPageData.description.length}/160 characters
                  </p>
                </div>

                <div>
                  <label className="text-sm font-medium">Keywords</label>
                  <Input defaultValue={currentPageData.keywords} className="mt-1" />
                </div>

                <div>
                  <label className="text-sm font-medium">Canonical URL</label>
                  <Input defaultValue={currentPageData.canonical} className="mt-1" />
                </div>

                <div>
                  <label className="text-sm font-medium">OG Image URL</label>
                  <Input defaultValue={currentPageData.ogImage} className="mt-1" />
                </div>

                <Button>Save SEO Settings</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="keywords" className="space-y-6">
          <KeywordVolumeChecker />
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Google Analytics Setup</CardTitle>
              <CardDescription>Configure Google Analytics tracking</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">Google Analytics ID</label>
                <Input placeholder="G-XXXXXXXXXX" className="mt-1" />
              </div>

              <div>
                <label className="text-sm font-medium">Google Tag Manager ID</label>
                <Input placeholder="GTM-XXXXXXX" className="mt-1" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <Card>
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold">1,245</div>
                    <p className="text-sm text-gray-500">Page Views (30 days)</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold">892</div>
                    <p className="text-sm text-gray-500">Unique Visitors</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold">2:34</div>
                    <p className="text-sm text-gray-500">Avg. Session Duration</p>
                  </CardContent>
                </Card>
              </div>

              <Button>Save Analytics Settings</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="console" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Google Search Console</CardTitle>
              <CardDescription>Monitor search performance and indexing</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">Search Console Property URL</label>
                <Input defaultValue="https://magizh.com" className="mt-1" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
                <Card>
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold">2,456</div>
                    <p className="text-sm text-gray-500">Total Clicks</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold">12,890</div>
                    <p className="text-sm text-gray-500">Total Impressions</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold">19.1%</div>
                    <p className="text-sm text-gray-500">CTR</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="text-2xl font-bold">5.8</div>
                    <p className="text-sm text-gray-500">Avg. Position</p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Top Search Queries</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Query</TableHead>
                        <TableHead>Clicks</TableHead>
                        <TableHead>Impressions</TableHead>
                        <TableHead>CTR</TableHead>
                        <TableHead>Position</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>web development company</TableCell>
                        <TableCell>245</TableCell>
                        <TableCell>1,890</TableCell>
                        <TableCell>13.0%</TableCell>
                        <TableCell>4.2</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>mobile app development</TableCell>
                        <TableCell>189</TableCell>
                        <TableCell>1,456</TableCell>
                        <TableCell>13.0%</TableCell>
                        <TableCell>5.1</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>custom software development</TableCell>
                        <TableCell>156</TableCell>
                        <TableCell>987</TableCell>
                        <TableCell>15.8%</TableCell>
                        <TableCell>3.8</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>

              <Button>Connect Search Console</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SEOManager;
