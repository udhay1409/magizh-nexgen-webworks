
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Globe, 
  Smartphone, 
  Shield, 
  Search, 
  Zap, 
  CheckCircle, 
  AlertTriangle, 
  XCircle,
  Clock,
  FileText,
  Link
} from 'lucide-react';

const TechnicalSEOChecker = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);

  const runTechnicalAudit = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalysisComplete(true);
    }, 2000);
  };

  // Mock technical SEO data
  const technicalData = {
    performance: {
      score: 85,
      metrics: [
        { name: 'Page Load Speed', value: '2.3s', status: 'good', target: '< 3s' },
        { name: 'First Contentful Paint', value: '1.2s', status: 'good', target: '< 1.8s' },
        { name: 'Largest Contentful Paint', value: '2.8s', status: 'good', target: '< 2.5s' },
        { name: 'Cumulative Layout Shift', value: '0.05', status: 'good', target: '< 0.1' },
        { name: 'Time to Interactive', value: '3.1s', status: 'warning', target: '< 3s' }
      ]
    },
    mobile: {
      score: 92,
      checks: [
        { name: 'Mobile-Friendly Test', status: 'pass', description: 'Page is mobile-friendly' },
        { name: 'Responsive Design', status: 'pass', description: 'Adapts to different screen sizes' },
        { name: 'Touch Elements Size', status: 'pass', description: 'Touch targets are appropriately sized' },
        { name: 'Font Size', status: 'pass', description: 'Text is readable on mobile' },
        { name: 'Viewport Configuration', status: 'pass', description: 'Viewport meta tag is properly configured' }
      ]
    },
    security: {
      score: 78,
      checks: [
        { name: 'HTTPS Certificate', status: 'pass', description: 'SSL certificate is valid and active' },
        { name: 'Mixed Content', status: 'pass', description: 'No insecure content found' },
        { name: 'Security Headers', status: 'warning', description: 'Some security headers missing' },
        { name: 'Content Security Policy', status: 'fail', description: 'CSP not implemented' },
        { name: 'HSTS Header', status: 'warning', description: 'HSTS header not found' }
      ]
    },
    crawlability: {
      score: 88,
      checks: [
        { name: 'Robots.txt', status: 'pass', description: 'Valid robots.txt file found' },
        { name: 'XML Sitemap', status: 'warning', description: 'Sitemap not found or not submitted' },
        { name: 'URL Structure', status: 'pass', description: 'Clean, SEO-friendly URLs' },
        { name: 'Internal Linking', status: 'pass', description: 'Good internal link structure' },
        { name: 'Broken Links', status: 'pass', description: 'No broken internal links detected' },
        { name: 'Canonical Tags', status: 'pass', description: 'Canonical URLs properly implemented' }
      ]
    },
    structure: {
      score: 82,
      checks: [
        { name: 'Schema Markup', status: 'warning', description: 'Limited structured data implementation' },
        { name: 'HTML Validation', status: 'pass', description: 'Valid HTML markup' },
        { name: 'Meta Tags', status: 'pass', description: 'Essential meta tags present' },
        { name: 'Heading Structure', status: 'pass', description: 'Proper heading hierarchy (H1-H6)' },
        { name: 'Image Alt Text', status: 'warning', description: 'Some images missing alt attributes' },
        { name: 'Open Graph Tags', status: 'pass', description: 'Social media tags implemented' }
      ]
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pass':
      case 'good':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'warning':
        return <AlertTriangle className="h-4 w-4 text-yellow-500" />;
      case 'fail':
        return <XCircle className="h-4 w-4 text-red-500" />;
      default:
        return <AlertTriangle className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pass':
      case 'good':
        return 'default';
      case 'warning':
        return 'secondary';
      case 'fail':
        return 'destructive';
      default:
        return 'secondary';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Technical SEO Audit</CardTitle>
          <CardDescription>
            Comprehensive technical analysis of your website's SEO health
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button 
            onClick={runTechnicalAudit} 
            disabled={isAnalyzing}
            className="w-full"
          >
            {isAnalyzing ? (
              <>
                <Search className="h-4 w-4 animate-spin mr-2" />
                Running Technical Audit...
              </>
            ) : (
              <>
                <Globe className="h-4 w-4 mr-2" />
                Run Technical SEO Audit
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {analysisComplete && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <Card>
              <CardContent className="p-4 text-center">
                <Zap className="h-8 w-8 mx-auto mb-2 text-blue-500" />
                <div className={`text-2xl font-bold ${getScoreColor(technicalData.performance.score)}`}>
                  {technicalData.performance.score}
                </div>
                <p className="text-sm text-gray-500">Performance</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <Smartphone className="h-8 w-8 mx-auto mb-2 text-green-500" />
                <div className={`text-2xl font-bold ${getScoreColor(technicalData.mobile.score)}`}>
                  {technicalData.mobile.score}
                </div>
                <p className="text-sm text-gray-500">Mobile</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <Shield className="h-8 w-8 mx-auto mb-2 text-purple-500" />
                <div className={`text-2xl font-bold ${getScoreColor(technicalData.security.score)}`}>
                  {technicalData.security.score}
                </div>
                <p className="text-sm text-gray-500">Security</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <Search className="h-8 w-8 mx-auto mb-2 text-orange-500" />
                <div className={`text-2xl font-bold ${getScoreColor(technicalData.crawlability.score)}`}>
                  {technicalData.crawlability.score}
                </div>
                <p className="text-sm text-gray-500">Crawlability</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <FileText className="h-8 w-8 mx-auto mb-2 text-indigo-500" />
                <div className={`text-2xl font-bold ${getScoreColor(technicalData.structure.score)}`}>
                  {technicalData.structure.score}
                </div>
                <p className="text-sm text-gray-500">Structure</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="performance" className="space-y-4">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="performance">Performance</TabsTrigger>
              <TabsTrigger value="mobile">Mobile</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="crawlability">Crawlability</TabsTrigger>
              <TabsTrigger value="structure">Structure</TabsTrigger>
            </TabsList>

            <TabsContent value="performance">
              <Card>
                <CardHeader>
                  <CardTitle>Performance Metrics</CardTitle>
                  <CardDescription>Core Web Vitals and page speed analysis</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {technicalData.performance.metrics.map((metric, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        {getStatusIcon(metric.status)}
                        <div>
                          <p className="font-medium">{metric.name}</p>
                          <p className="text-sm text-gray-500">Target: {metric.target}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant={getStatusColor(metric.status)}>
                          {metric.value}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="mobile">
              <Card>
                <CardHeader>
                  <CardTitle>Mobile Optimization</CardTitle>
                  <CardDescription>Mobile-friendliness and responsive design checks</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {technicalData.mobile.checks.map((check, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        {getStatusIcon(check.status)}
                        <div>
                          <p className="font-medium">{check.name}</p>
                          <p className="text-sm text-gray-500">{check.description}</p>
                        </div>
                      </div>
                      <Badge variant={getStatusColor(check.status)}>
                        {check.status}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="security">
              <Card>
                <CardHeader>
                  <CardTitle>Security Analysis</CardTitle>
                  <CardDescription>HTTPS, security headers, and vulnerability checks</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {technicalData.security.checks.map((check, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        {getStatusIcon(check.status)}
                        <div>
                          <p className="font-medium">{check.name}</p>
                          <p className="text-sm text-gray-500">{check.description}</p>
                        </div>
                      </div>
                      <Badge variant={getStatusColor(check.status)}>
                        {check.status}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="crawlability">
              <Card>
                <CardHeader>
                  <CardTitle>Crawlability & Indexing</CardTitle>
                  <CardDescription>Search engine accessibility and indexing checks</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {technicalData.crawlability.checks.map((check, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        {getStatusIcon(check.status)}
                        <div>
                          <p className="font-medium">{check.name}</p>
                          <p className="text-sm text-gray-500">{check.description}</p>
                        </div>
                      </div>
                      <Badge variant={getStatusColor(check.status)}>
                        {check.status}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="structure">
              <Card>
                <CardHeader>
                  <CardTitle>HTML Structure & Markup</CardTitle>
                  <CardDescription>Code quality, structured data, and markup validation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {technicalData.structure.checks.map((check, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        {getStatusIcon(check.status)}
                        <div>
                          <p className="font-medium">{check.name}</p>
                          <p className="text-sm text-gray-500">{check.description}</p>
                        </div>
                      </div>
                      <Badge variant={getStatusColor(check.status)}>
                        {check.status}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </>
      )}
    </div>
  );
};

export default TechnicalSEOChecker;
