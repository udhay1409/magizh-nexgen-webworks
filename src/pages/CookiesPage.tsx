
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const CookiesPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container mx-auto py-24 px-4 flex-1">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-magizh-dark">Cookie Policy</h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-gray-700">
            <p>
              Last updated: May 20, 2025
            </p>
            
            <h2 className="text-xl font-semibold text-magizh-dark mt-8">Introduction</h2>
            <p>
              Magizh NexGen Technologies ("we", "our", or "us") uses cookies and similar technologies on our website. 
              This Cookie Policy explains what cookies are, how we use them, your choices regarding cookies, and further 
              information about cookies.
            </p>
            
            <h2 className="text-xl font-semibold text-magizh-dark mt-8">What are Cookies?</h2>
            <p>
              Cookies are small text files that are placed on your computer, smartphone, or other device when you visit 
              our website. They are widely used to make websites work more efficiently and provide information to 
              website owners. Cookies help provide a better and more personalized user experience.
            </p>
            
            <h2 className="text-xl font-semibold text-magizh-dark mt-8">How We Use Cookies</h2>
            <p>
              We use cookies for several purposes, including:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly and cannot be disabled in our systems.</li>
              <li><strong>Performance and Analytics Cookies:</strong> These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.</li>
              <li><strong>Functionality Cookies:</strong> These cookies enable the website to provide enhanced functionality and personalization.</li>
              <li><strong>Targeting Cookies:</strong> These cookies may be set through our site by our advertising partners to build a profile of your interests and show you relevant ads on other sites.</li>
            </ul>
            
            <h2 className="text-xl font-semibold text-magizh-dark mt-8">Types of Cookies We Use</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">Session Cookies</h3>
                <p>
                  Session cookies are temporary cookies that are deleted when you close your browser. They are used to remember your 
                  actions during a single browsing session.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium">Persistent Cookies</h3>
                <p>
                  Persistent cookies remain on your device after you close your browser until they expire or you delete them. They help 
                  us remember your preferences for the next time you visit.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium">Third-Party Cookies</h3>
                <p>
                  We also use third-party cookies from services like Google Analytics to help us understand how visitors use our website.
                </p>
              </div>
            </div>
            
            <h2 className="text-xl font-semibold text-magizh-dark mt-8">Your Cookie Choices</h2>
            <p>
              Most web browsers allow some control over cookies through browser settings. You can:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Block all cookies</li>
              <li>Delete cookies when you close your browser</li>
              <li>Allow site-specific cookies</li>
              <li>Allow only first-party cookies</li>
              <li>Browse in a private mode</li>
            </ul>
            <p>
              Please note that restricting cookies may impact your experience on our website, as some features may not function properly.
            </p>
            
            <h2 className="text-xl font-semibold text-magizh-dark mt-8">Managing Cookies</h2>
            <p>
              You can manage cookies through your browser settings. Here are links to instructions for common browsers:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><a href="https://support.google.com/chrome/answer/95647" className="text-magizh-blue hover:underline">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" className="text-magizh-blue hover:underline">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" className="text-magizh-blue hover:underline">Safari</a></li>
              <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" className="text-magizh-blue hover:underline">Microsoft Edge</a></li>
            </ul>
            
            <h2 className="text-xl font-semibold text-magizh-dark mt-8">Updates to This Cookie Policy</h2>
            <p>
              We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our business practices. 
              Any changes will become effective when we post the revised policy on this page with an updated revision date.
            </p>
            
            <h2 className="text-xl font-semibold text-magizh-dark mt-8">Contact Us</h2>
            <p>
              If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
            </p>
            <p>
              <strong>Email:</strong> privacy@magizhtech.com<br />
              <strong>Phone:</strong> +1 (555) 123-4567<br />
              <strong>Address:</strong> 1234 Tech Park, Suite 500, San Francisco, CA 94105
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CookiesPage;
