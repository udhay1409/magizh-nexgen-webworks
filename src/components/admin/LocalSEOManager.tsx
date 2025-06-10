
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { 
  MapPin, 
  Star, 
  Phone, 
  Globe, 
  Clock, 
  CheckCircle, 
  AlertTriangle, 
  XCircle,
  Search,
  Building2,
  Users,
  MessageSquare
} from 'lucide-react';

const LocalSEOManager = () => {
  const [businessInfo, setBusinessInfo] = useState({
    name: 'Magizh NexGen Technologies',
    address: '123 Tech Street, Silicon Valley, CA 94025',
    phone: '+1 (555) 123-4567',
    website: 'https://magizh.com',
    category: 'Software Development Company',
    description: 'Leading web and mobile app development company specializing in custom software solutions.',
    hours: 'Mon-Fri: 9:00 AM - 6:00 PM'
  });

  const [isUpdating, setIsUpdating] = useState(false);

  // Mock local SEO data
  const localSEOData = {
    googleMyBusiness: {
      status: 'verified',
      rating: 4.8,
      reviews: 47,
      posts: 12,
      photos: 28,
      lastUpdated: '2024-01-15'
    },
    citations: [
      { platform: 'Google My Business', status: 'verified', accuracy: 100, url: 'https://google.com/business' },
      { platform: 'Yelp', status: 'claimed', accuracy: 95, url: 'https://yelp.com/biz/magizh' },
      { platform: 'Yellow Pages', status: 'listed', accuracy: 90, url: 'https://yellowpages.com' },
      { platform: 'Bing Places', status: 'verified', accuracy: 98, url: 'https://bing.com/places' },
      { platform: 'Apple Maps', status: 'pending', accuracy: 85, url: 'https://maps.apple.com' },
      { platform: 'Facebook', status: 'claimed', accuracy: 92, url: 'https://facebook.com/magizh' }
    ],
    localKeywords: [
      { keyword: 'web development company silicon valley', position: 3, volume: 590, difficulty: 'Medium' },
      { keyword: 'mobile app developers california', position: 7, volume: 320, difficulty: 'High' },
      { keyword: 'software development services bay area', position: 5, volume: 210, difficulty: 'Medium' },
      { keyword: 'custom software development near me', position: 12, volume: 150, difficulty: 'Low' }
    ],
    competitors: [
      { name: 'TechCorp Solutions', distance: '2.1 miles', rating: 4.6, reviews: 89 },
      { name: 'Digital Innovators', distance: '3.4 miles', rating: 4.4, reviews: 156 },
      { name: 'Bay Area Tech', distance: '1.8 miles', rating: 4.7, reviews: 203 }
    ]
  };

  const updateBusinessInfo = () => {
    setIsUpdating(true);
    setTimeout(() => {
      setIsUpdating(false);
      console.log('Business information updated');
    }, 1500);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'verified': return 'default';
      case 'claimed': return 'secondary';
      case 'listed': return 'outline';
      case 'pending': return 'destructive';
      default: return 'secondary';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'verified': return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'claimed': return <CheckCircle className="h-4 w-4 text-blue-500" />;
      case 'listed': return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case 'pending': return <XCircle className="h-4 w-4 text-red-500" />;
      default: return <AlertTriangle className="h-4 w-4 text-gray-500" />;
    }
  };

  return (
    <div className="space-y-6">
      <Tabs defaultValue="business" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="business" className="flex items-center gap-2">
            <Building2 className="h-4 w-4" />
            Business Info
          </TabsTrigger>
          <TabsTrigger value="citations" className="flex items-center gap-2">
            <Globe className="h-4 w-4" />
            Citations
          </TabsTrigger>
          <TabsTrigger value="keywords" className="flex items-center gap-2">
            <Search className="h-4 w-4" />
            Local Keywords
          </TabsTrigger>
          <TabsTrigger value="competitors" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            Competitors
          </TabsTrigger>
        </TabsList>

        <TabsContent value="business" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Business Information</CardTitle>
                <CardDescription>Manage your business details across all platforms</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Business Name</label>
                    <Input 
                      value={businessInfo.name}
                      onChange={(e) => setBusinessInfo({...businessInfo, name: e.target.value})}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Category</label>
                    <Select value={businessInfo.category}>
                      <SelectTrigger className="mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Software Development Company">Software Development Company</SelectItem>
                        <SelectItem value="Web Design Agency">Web Design Agency</SelectItem>
                        <SelectItem value="IT Services">IT Services</SelectItem>
                        <SelectItem value="Technology Consultant">Technology Consultant</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium">Address</label>
                  <Input 
                    value={businessInfo.address}
                    onChange={(e) => setBusinessInfo({...businessInfo, address: e.target.value})}
                    className="mt-1"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Phone Number</label>
                    <Input 
                      value={businessInfo.phone}
                      onChange={(e) => setBusinessInfo({...businessInfo, phone: e.target.value})}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium">Website</label>
                    <Input 
                      value={businessInfo.website}
                      onChange={(e) => setBusinessInfo({...businessInfo, website: e.target.value})}
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium">Business Hours</label>
                  <Input 
                    value={businessInfo.hours}
                    onChange={(e) => setBusinessInfo({...businessInfo, hours: e.target.value})}
                    className="mt-1"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Description</label>
                  <Textarea 
                    value={businessInfo.description}
                    onChange={(e) => setBusinessInfo({...businessInfo, description: e.target.value})}
                    className="mt-1"
                    rows={3}
                  />
                </div>

                <Button onClick={updateBusinessInfo} disabled={isUpdating} className="w-full">
                  {isUpdating ? 'Updating...' : 'Update Business Information'}
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Google My Business</CardTitle>
                <CardDescription>Your GMB profile overview</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{localSEOData.googleMyBusiness.rating}</span>
                  </div>
                  <span className="text-sm text-gray-500">
                    ({localSEOData.googleMyBusiness.reviews} reviews)
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-2xl font-bold">{localSEOData.googleMyBusiness.posts}</div>
                    <p className="text-gray-500">Posts</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">{localSEOData.googleMyBusiness.photos}</div>
                    <p className="text-gray-500">Photos</p>
                  </div>
                </div>

                <div>
                  <Badge variant="default" className="flex items-center gap-1 w-fit">
                    <CheckCircle className="h-3 w-3" />
                    Verified
                  </Badge>
                </div>

                <Button variant="outline" className="w-full">
                  <Globe className="h-4 w-4 mr-2" />
                  Manage GMB Profile
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="citations" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Local Citations</CardTitle>
              <CardDescription>Monitor and manage your business listings across platforms</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Platform</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Accuracy</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {localSEOData.citations.map((citation, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{citation.platform}</TableCell>
                      <TableCell>
                        <Badge variant={getStatusColor(citation.status)} className="flex items-center gap-1 w-fit">
                          {getStatusIcon(citation.status)}
                          {citation.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Progress value={citation.accuracy} className="w-16 h-2" />
                          {citation.accuracy}%
                        </div>
                      </TableCell>
                      <TableCell>
                        <Button size="sm" variant="outline" asChild>
                          <a href={citation.url} target="_blank" rel="noopener noreferrer">
                            <Globe className="h-4 w-4 mr-1" />
                            View
                          </a>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="keywords" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Local Keyword Rankings</CardTitle>
              <CardDescription>Track your local search rankings for location-based keywords</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Keyword</TableHead>
                    <TableHead>Position</TableHead>
                    <TableHead>Volume</TableHead>
                    <TableHead>Difficulty</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {localSEOData.localKeywords.map((keyword, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{keyword.keyword}</TableCell>
                      <TableCell>
                        <Badge variant={keyword.position <= 3 ? 'default' : keyword.position <= 10 ? 'secondary' : 'destructive'}>
                          #{keyword.position}
                        </Badge>
                      </TableCell>
                      <TableCell>{keyword.volume}</TableCell>
                      <TableCell>
                        <Badge variant={keyword.difficulty === 'Low' ? 'default' : keyword.difficulty === 'Medium' ? 'secondary' : 'destructive'}>
                          {keyword.difficulty}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="competitors" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Local Competitors</CardTitle>
              <CardDescription>Monitor nearby competitors and their performance</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Business Name</TableHead>
                    <TableHead>Distance</TableHead>
                    <TableHead>Rating</TableHead>
                    <TableHead>Reviews</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {localSEOData.competitors.map((competitor, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{competitor.name}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4 text-gray-400" />
                          {competitor.distance}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          {competitor.rating}
                        </div>
                      </TableCell>
                      <TableCell>{competitor.reviews}</TableCell>
                      <TableCell>
                        <Button size="sm" variant="outline">
                          <Search className="h-4 w-4 mr-1" />
                          Analyze
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LocalSEOManager;
