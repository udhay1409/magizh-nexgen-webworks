
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const TermsPage = () => {
  useEffect(() => {
    document.title = "Terms & Conditions | Magizh NexGen";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-magizh-dark">Terms and Conditions</h1>
          
          <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-magizh-blue mb-4">1. Introduction</h2>
              <p className="text-gray-700 mb-3">
                Welcome to Magizh NexGen Technologies. These terms and conditions govern your use of our website 
                and services. By accessing or using our services, you agree to be bound by these terms. 
                If you disagree with any part of these terms, please do not use our services.
              </p>
              <p className="text-gray-700">
                These terms apply to all visitors, users, and clients who access or use our services.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-magizh-blue mb-4">2. Services</h2>
              <p className="text-gray-700 mb-3">
                Magizh NexGen Technologies provides web and mobile application development, cloud solutions, 
                and IT consulting services. All services are provided on an "as is" basis and we make no 
                warranties regarding the services provided.
              </p>
              <p className="text-gray-700">
                We reserve the right to modify, suspend, or discontinue any part of our services at any time 
                without notice.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-magizh-blue mb-4">3. Intellectual Property</h2>
              <p className="text-gray-700 mb-3">
                All content on this website, including but not limited to text, graphics, logos, images, and 
                software, is the property of Magizh NexGen Technologies and is protected by intellectual 
                property laws.
              </p>
              <p className="text-gray-700">
                Unless otherwise specified, you are not permitted to copy, modify, distribute, or use our 
                intellectual property without our explicit written consent.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-magizh-blue mb-4">4. Client Obligations</h2>
              <p className="text-gray-700 mb-3">
                As a client, you agree to provide all necessary information, materials, and approvals in a 
                timely manner to ensure the completion of your project. You also agree to review and provide 
                feedback on deliverables within the timeframe specified in your agreement.
              </p>
              <p className="text-gray-700">
                You are responsible for ensuring that any content you provide does not infringe on the rights 
                of third parties and complies with all applicable laws and regulations.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-magizh-blue mb-4">5. Payment and Billing</h2>
              <p className="text-gray-700 mb-3">
                Payment terms are specified in your service agreement. Unless otherwise stated, invoices are 
                due within 30 days of issuance. Late payments may incur additional fees.
              </p>
              <p className="text-gray-700">
                We reserve the right to suspend services if payment is not received according to the agreed terms.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-magizh-blue mb-4">6. Confidentiality</h2>
              <p className="text-gray-700 mb-3">
                We respect the confidentiality of your information and will not disclose it to third parties 
                except as required by law or as necessary to provide our services.
              </p>
              <p className="text-gray-700">
                You agree to keep confidential any proprietary information you receive from us during the course 
                of our business relationship.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-magizh-blue mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-700 mb-3">
                To the maximum extent permitted by law, Magizh NexGen Technologies shall not be liable for any 
                indirect, incidental, special, consequential, or punitive damages, including loss of profits, 
                data, or business opportunities.
              </p>
              <p className="text-gray-700">
                Our total liability for any claims arising from our services shall not exceed the amount paid 
                by you for the specific service that gave rise to the claim.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-magizh-blue mb-4">8. Termination</h2>
              <p className="text-gray-700 mb-3">
                Either party may terminate the service agreement as specified in the contract. Upon termination, 
                you are obligated to pay for all services rendered up to the termination date.
              </p>
              <p className="text-gray-700">
                We reserve the right to terminate or suspend your access to our services immediately if you 
                breach these terms and conditions.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-magizh-blue mb-4">9. Governing Law</h2>
              <p className="text-gray-700">
                These terms and conditions are governed by and construed in accordance with the laws of the 
                jurisdiction where Magizh NexGen Technologies is registered. Any disputes arising from these 
                terms shall be resolved in the courts of that jurisdiction.
              </p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold text-magizh-blue mb-4">10. Changes to Terms</h2>
              <p className="text-gray-700 mb-3">
                We reserve the right to modify these terms and conditions at any time. Changes will be effective 
                immediately upon posting on our website. Your continued use of our services after any changes 
                indicates your acceptance of the updated terms.
              </p>
              <p className="text-gray-700">
                Last updated: May 20, 2025
              </p>
            </section>
            
            <section className="border-t pt-6">
              <p className="text-gray-700">
                If you have any questions about these Terms and Conditions, please contact us at:
                <a href="mailto:legal@magizhnexgen.com" className="text-magizh-blue ml-1 hover:underline">
                  legal@magizhnexgen.com
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

export default TermsPage;
