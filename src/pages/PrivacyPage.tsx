
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PrivacyPage = () => {
  useEffect(() => {
    document.title = "Privacy Policy | Magizh NexGen";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-magizh-dark">Privacy Policy</h1>
          
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-magizh-blue mb-4">1. Introduction</h2>
              <p className="text-gray-700 mb-3">
                At Magizh NexGen Technologies, we take your privacy seriously. This Privacy Policy explains how we collect, 
                use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p className="text-gray-700">
                Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, 
                please do not access the site or use our services.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-magizh-blue mb-4">2. Information We Collect</h2>
              <h3 className="text-lg font-medium text-magizh-dark mb-2">Personal Data</h3>
              <p className="text-gray-700 mb-3">
                We may collect personal identification information from users in various ways, including, but not limited to, 
                when users visit our site, register on the site, fill out a form, and in connection with other activities, 
                services, features, or resources we make available. Users may be asked for, as appropriate, name, email address, 
                phone number, company name, and other relevant information.
              </p>
              
              <h3 className="text-lg font-medium text-magizh-dark mb-2">Non-Personal Data</h3>
              <p className="text-gray-700">
                We may collect non-personal identification information about users whenever they interact with our site. 
                Non-personal identification information may include the browser name, the type of computer, and technical 
                information about users' means of connection to our site, such as the operating system and the Internet 
                service providers utilized and other similar information.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-magizh-blue mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-700 mb-3">
                We may use the information we collect from you in the following ways:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-3">
                <li>To personalize your experience and to deliver content and product offerings relevant to your interests</li>
                <li>To improve our website in order to better serve you</li>
                <li>To allow us to better service you in responding to your customer service requests</li>
                <li>To administer promotions, surveys, or other site features</li>
                <li>To send periodic emails regarding your projects or other products and services</li>
                <li>To follow up with you after correspondence (email or phone inquiries)</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-magizh-blue mb-4">4. Protection of Your Information</h2>
              <p className="text-gray-700 mb-3">
                We adopt appropriate data collection, storage, and processing practices and security measures to protect 
                against unauthorized access, alteration, disclosure, or destruction of your personal information, username, 
                password, transaction information, and data stored on our site.
              </p>
              <p className="text-gray-700">
                Sensitive and private data exchange between the site and its users happens over an SSL secured communication 
                channel and is encrypted and protected with digital signatures.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-magizh-blue mb-4">5. Sharing Your Personal Information</h2>
              <p className="text-gray-700 mb-3">
                We do not sell, trade, or rent users' personal identification information to others. We may share generic 
                aggregated demographic information not linked to any personal identification information regarding visitors 
                and users with our business partners, trusted affiliates, and advertisers for the purposes outlined above.
              </p>
              <p className="text-gray-700">
                We may use third-party service providers to help us operate our business and the site or administer 
                activities on our behalf, such as sending out newsletters or surveys. We may share your information with 
                these third parties for those limited purposes.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-magizh-blue mb-4">6. Third-Party Websites</h2>
              <p className="text-gray-700">
                Users may find advertising or other content on our site that link to the sites and services of our partners, 
                suppliers, advertisers, sponsors, licensors, and other third parties. We do not control the content or links 
                that appear on these sites and are not responsible for the practices employed by websites linked to or from 
                our site. In addition, these sites or services, including their content and links, may be constantly changing. 
                These sites and services may have their own privacy policies and customer service policies. Browsing and 
                interaction on any other website, including websites which have a link to our site, is subject to that 
                website's own terms and policies.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-magizh-blue mb-4">7. Cookies</h2>
              <p className="text-gray-700 mb-3">
                Our site may use "cookies" to enhance user experience. User's web browser places cookies on their hard drive 
                for record-keeping purposes and sometimes to track information about them. Users may choose to set their web 
                browser to refuse cookies, or to alert you when cookies are being sent. If they do so, note that some parts 
                of the site may not function properly.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-magizh-blue mb-4">8. Your Rights</h2>
              <p className="text-gray-700 mb-3">
                If you are a resident of the European Economic Area (EEA), you have certain data protection rights. We aim to 
                take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Information.
              </p>
              <p className="text-gray-700">
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Access and receive a copy of the personal data we hold about you</li>
                <li>Rectify any personal data held about you that is inaccurate</li>
                <li>Request the deletion of personal data held about you</li>
                <li>Object to the processing of your personal data for marketing purposes</li>
                <li>Request that we restrict the processing of your personal information</li>
                <li>Request the transfer of your personal data to you or a third party</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-magizh-blue mb-4">9. Changes to This Privacy Policy</h2>
              <p className="text-gray-700 mb-3">
                Magizh NexGen Technologies has the discretion to update this privacy policy at any time. When we do, we will 
                revise the updated date at the bottom of this page. We encourage users to frequently check this page for 
                any changes to stay informed about how we are helping to protect the personal information we collect. 
              </p>
              <p className="text-gray-700">
                Last updated: May 20, 2025
              </p>
            </section>
            
            <section className="border-t pt-6">
              <p className="text-gray-700">
                If you have any questions about this Privacy Policy, please contact us at:
                <a href="mailto:privacy@magizhnexgen.com" className="text-magizh-blue ml-1 hover:underline">
                  privacy@magizhnexgen.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPage;
