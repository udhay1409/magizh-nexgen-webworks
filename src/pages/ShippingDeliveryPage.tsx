
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ShippingDeliveryPage = () => {
  useEffect(() => {
    document.title = "Shipping & Delivery Policy | Magizh NexGen";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-magizh-dark">Shipping & Delivery Policy</h1>
          
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-magizh-blue mb-4">1. Overview</h2>
              <p className="text-gray-700 mb-3">
                At Magizh NexGen Technologies, we specialize in delivering digital services including web applications, 
                mobile applications, and software solutions. This policy outlines our delivery methods, timelines, 
                and terms for all our digital services.
              </p>
              <p className="text-gray-700">
                As a technology service provider, our "shipping" refers to the digital delivery of completed 
                projects, source code, documentation, and related digital assets to our clients.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-magizh-blue mb-4">2. Digital Delivery Methods</h2>
              <h3 className="text-lg font-medium text-magizh-dark mb-2">Primary Delivery Channels</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>Secure cloud-based repositories (GitHub, GitLab)</li>
                <li>Dedicated client portals for project access</li>
                <li>Live deployment on client's preferred hosting platform</li>
                <li>Encrypted file transfer for sensitive documents</li>
                <li>Video demonstrations and training sessions</li>
                <li>Documentation and user manuals via secure download links</li>
              </ul>
              
              <h3 className="text-lg font-medium text-magizh-dark mb-2">Delivery Formats</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Complete source code with proper documentation</li>
                <li>Executable applications ready for deployment</li>
                <li>Database schemas and migration scripts</li>
                <li>API documentation and integration guides</li>
                <li>User training materials and videos</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-magizh-blue mb-4">3. Delivery Timeline</h2>
              <h3 className="text-lg font-medium text-magizh-dark mb-2">Standard Project Timelines</h3>
              <div className="space-y-3 text-gray-700">
                <p><strong>Simple Websites:</strong> 5-10 business days</p>
                <p><strong>Complex Web Applications:</strong> 15-30 business days</p>
                <p><strong>Mobile Applications:</strong> 20-45 business days</p>
                <p><strong>Enterprise Solutions:</strong> 30-90 business days</p>
                <p><strong>Custom Software:</strong> Timeline varies based on complexity</p>
              </div>
              
              <h3 className="text-lg font-medium text-magizh-dark mb-2 mt-4">Milestone-Based Delivery</h3>
              <p className="text-gray-700 mb-3">
                For larger projects, we deliver work in phases:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Initial wireframes and design concepts (Week 1-2)</li>
                <li>Prototype or MVP delivery (25-50% completion)</li>
                <li>Beta version for testing (75% completion)</li>
                <li>Final delivery with complete documentation</li>
                <li>Post-delivery support and bug fixes</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-magizh-blue mb-4">4. Delivery Requirements</h2>
              <h3 className="text-lg font-medium text-magizh-dark mb-2">Client Responsibilities</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                <li>Provide timely feedback on deliverables</li>
                <li>Supply necessary content, images, and materials</li>
                <li>Approve design mockups and wireframes promptly</li>
                <li>Ensure access to required third-party services</li>
                <li>Test delivered components within agreed timeframes</li>
              </ul>
              
              <h3 className="text-lg font-medium text-magizh-dark mb-2">Our Commitments</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Deliver projects according to agreed specifications</li>
                <li>Provide comprehensive documentation</li>
                <li>Ensure secure and reliable delivery methods</li>
                <li>Offer post-delivery support for 30 days</li>
                <li>Maintain backup copies of all deliverables</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-magizh-blue mb-4">5. Expedited Delivery</h2>
              <p className="text-gray-700 mb-3">
                We offer rush delivery services for urgent projects with the following conditions:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-3">
                <li>Additional charges apply (typically 25-50% of project cost)</li>
                <li>Project scope must be clearly defined and limited</li>
                <li>Client must be available for immediate feedback</li>
                <li>Timeline reduction typically 30-50% of standard delivery time</li>
              </ul>
              <p className="text-gray-700">
                Rush delivery requests must be agreed upon before project commencement and 
                are subject to our team's availability.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-magizh-blue mb-4">6. Delivery Confirmation</h2>
              <h3 className="text-lg font-medium text-magizh-dark mb-2">Acceptance Process</h3>
              <p className="text-gray-700 mb-3">
                Upon delivery, clients have a testing period to review and approve the deliverables:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-3">
                <li>7 days for simple websites and applications</li>
                <li>14 days for complex web applications</li>
                <li>21 days for mobile applications and enterprise solutions</li>
              </ul>
              
              <h3 className="text-lg font-medium text-magizh-dark mb-2">Post-Delivery Support</h3>
              <p className="text-gray-700">
                After final acceptance, we provide 30 days of complimentary support for bug fixes 
                and minor adjustments that fall within the original project scope.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibent text-magizh-blue mb-4">7. Delivery Delays</h2>
              <h3 className="text-lg font-medium text-magizh-dark mb-2">Common Causes</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-3">
                <li>Delayed client feedback or approvals</li>
                <li>Changes in project scope or requirements</li>
                <li>Technical dependencies on third-party services</li>
                <li>Force majeure events (natural disasters, etc.)</li>
              </ul>
              
              <h3 className="text-lg font-medium text-magizh-dark mb-2">Our Response to Delays</h3>
              <p className="text-gray-700">
                In case of delays from our end, we will notify clients immediately and provide 
                a revised timeline. We may offer partial deliveries or compensation depending 
                on the circumstances and impact on the client's business.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-magizh-blue mb-4">8. Intellectual Property & Source Code</h2>
              <p className="text-gray-700 mb-3">
                Upon full payment, clients receive:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-3">
                <li>Complete ownership of custom-developed code</li>
                <li>All project files and documentation</li>
                <li>Rights to modify and distribute the delivered solution</li>
                <li>Access to any custom APIs or integrations developed</li>
              </ul>
              <p className="text-gray-700">
                Third-party libraries and components remain under their respective licenses.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-magizh-blue mb-4">9. Data Security & Privacy</h2>
              <p className="text-gray-700 mb-3">
                We ensure secure delivery through:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Encrypted file transfers and secure repositories</li>
                <li>Access controls and authentication</li>
                <li>Confidentiality agreements for all team members</li>
                <li>Secure deletion of temporary files after delivery</li>
                <li>Compliance with data protection regulations</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-magizh-blue mb-4">10. Contact Information</h2>
              <p className="text-gray-700">
                For questions regarding delivery schedules, project status, or this policy, please contact us at:
                <br />
                <strong>Email:</strong> <a href="mailto:info@mntfuture.com" className="text-magizh-blue hover:underline">info@mntfuture.com</a>
                <br />
                <strong>Support:</strong> <a href="mailto:support@mntfuture.com" className="text-magizh-blue hover:underline">support@mntfuture.com</a>
                <br />
                <strong>Phone:</strong> <a href="tel:+918925845077" className="text-magizh-blue hover:underline">+91 8925845077</a> | <a href="tel:+917402075266" className="text-magizh-blue hover:underline">+91 7402075266</a>
                <br />
                <strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM (IST)
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-magizh-blue mb-4">11. Policy Updates</h2>
              <p className="text-gray-700 mb-3">
                We reserve the right to update this Shipping & Delivery Policy at any time. 
                Changes will be effective immediately upon posting on our website. Clients will 
                be notified of significant changes via email.
              </p>
              <p className="text-gray-700">
                Last updated: May 25, 2025
              </p>
            </section>
            
            <section className="border-t pt-6">
              <p className="text-gray-700">
                This policy is part of our overall Terms and Conditions. For complete terms of service, 
                please refer to our 
                <a href="/terms" className="text-magizh-blue ml-1 hover:underline">Terms & Conditions</a> page.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ShippingDeliveryPage;
