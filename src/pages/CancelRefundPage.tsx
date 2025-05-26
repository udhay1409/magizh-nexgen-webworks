
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const CancelRefundPage = () => {
  useEffect(() => {
    document.title = "Cancel & Refund Policy | Magizh NexGen";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-magizh-dark">Cancel & Refund Policy</h1>
          
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-magizh-blue mb-4">1. Overview</h2>
              <p className="text-gray-700 mb-3">
                At Magizh NexGen Technologies, we strive to provide high-quality services and ensure customer satisfaction. 
                This Cancel & Refund Policy outlines the terms and conditions under which cancellations and refunds are processed 
                for our web and mobile application development services.
              </p>
              <p className="text-gray-700">
                Please read this policy carefully before engaging our services. By proceeding with our services, 
                you acknowledge and agree to the terms outlined in this policy.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-magizh-blue mb-4">2. Project Cancellation</h2>
              <h3 className="text-lg font-medium text-magizh-dark mb-2">Client-Initiated Cancellation</h3>
              <p className="text-gray-700 mb-3">
                Clients may cancel their project at any time by providing written notice via email. However, 
                cancellation fees and refund eligibility will depend on the project phase and work completed at 
                the time of cancellation.
              </p>
              
              <h3 className="text-lg font-medium text-magizh-dark mb-2">Company-Initiated Cancellation</h3>
              <p className="text-gray-700">
                We reserve the right to cancel a project if the client fails to provide necessary materials, 
                feedback, or payment as outlined in the service agreement. In such cases, payment for completed 
                work will be required before project termination.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-magizh-blue mb-4">3. Refund Policy</h2>
              <h3 className="text-lg font-medium text-magizh-dark mb-2">Pre-Development Phase</h3>
              <p className="text-gray-700 mb-3">
                If cancellation occurs before any development work has begun (within 48 hours of contract signing), 
                a full refund minus a 5% administrative fee will be processed within 7-10 business days.
              </p>
              
              <h3 className="text-lg font-medium text-magizh-dark mb-2">Development Phase</h3>
              <p className="text-gray-700 mb-3">
                Once development has commenced, refunds will be calculated based on the percentage of work completed:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 mb-3">
                <li>0-25% completion: 70% refund of total project cost</li>
                <li>26-50% completion: 50% refund of total project cost</li>
                <li>51-75% completion: 25% refund of total project cost</li>
                <li>76-100% completion: No refund available</li>
              </ul>
              
              <h3 className="text-lg font-medium text-magizh-dark mb-2">Post-Delivery Phase</h3>
              <p className="text-gray-700">
                Once the final deliverables have been provided and approved by the client, no refunds will be issued. 
                However, we offer a 30-day warranty period for bug fixes and minor adjustments.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-magizh-blue mb-4">4. Non-Refundable Services</h2>
              <p className="text-gray-700 mb-3">
                The following services are non-refundable once delivered:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Domain registration and hosting setup fees</li>
                <li>Third-party software licenses and subscriptions</li>
                <li>Custom design concepts and wireframes (once approved)</li>
                <li>Consultation hours and strategy sessions</li>
                <li>Rush delivery or expedited service fees</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-magizh-blue mb-4">5. Refund Process</h2>
              <h3 className="text-lg font-medium text-magizh-dark mb-2">How to Request a Refund</h3>
              <p className="text-gray-700 mb-3">
                To request a refund, clients must submit a written request via email to our billing department, 
                including the project details, reason for refund, and any supporting documentation.
              </p>
              
              <h3 className="text-lg font-medium text-magizh-dark mb-2">Processing Time</h3>
              <p className="text-gray-700 mb-3">
                Approved refunds will be processed within 10-15 business days from the date of approval. 
                Refunds will be issued to the original payment method used for the transaction.
              </p>
              
              <h3 className="text-lg font-medium text-magizh-dark mb-2">Refund Approval</h3>
              <p className="text-gray-700">
                All refund requests are subject to review and approval. We reserve the right to deny refund 
                requests that do not meet the criteria outlined in this policy.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-magizh-blue mb-4">6. Modification and Scope Changes</h2>
              <p className="text-gray-700 mb-3">
                If significant changes to the project scope are requested after development has begun, 
                additional charges may apply. These changes may also affect the refund eligibility and 
                calculation.
              </p>
              <p className="text-gray-700">
                Minor revisions within the agreed scope are included, but major changes requiring additional 
                development time will be billed separately and are non-refundable once completed.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-magizh-blue mb-4">7. Force Majeure</h2>
              <p className="text-gray-700">
                In cases of force majeure events (natural disasters, government restrictions, etc.) that 
                prevent project completion, we will work with clients to reschedule or provide partial 
                refunds based on work completed. Such situations will be handled on a case-by-case basis.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-magizh-blue mb-4">8. Dispute Resolution</h2>
              <p className="text-gray-700 mb-3">
                If you disagree with our refund decision, you may appeal by providing additional documentation 
                or clarification within 30 days of our initial response. We are committed to resolving disputes 
                fairly and promptly.
              </p>
              <p className="text-gray-700">
                For unresolved disputes, both parties agree to pursue mediation before considering legal action.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-magizh-blue mb-4">9. Contact Information</h2>
              <p className="text-gray-700">
                For questions regarding cancellations, refunds, or this policy, please contact our billing department at:
                <br />
                <strong>Email:</strong> <a href="mailto:info@mntfuture.com" className="text-magizh-blue hover:underline">info@mntfuture.com</a>
                <br />
                <strong>Support:</strong> <a href="mailto:support@mntfuture.com" className="text-magizh-blue hover:underline">support@mntfuture.com</a>
                <br />
                <strong>Phone:</strong> <a href="tel:+918925845077" className="text-magizh-blue hover:underline">+91 8925845077</a> | <a href="tel:+918220947113" className="text-magizh-blue hover:underline">+91 8220947113</a>
                <br />
                <strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM (IST)
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-magizh-blue mb-4">10. Policy Updates</h2>
              <p className="text-gray-700 mb-3">
                We reserve the right to update this Cancel & Refund Policy at any time. Changes will be 
                effective immediately upon posting on our website. Clients will be notified of significant 
                changes via email.
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

export default CancelRefundPage;
