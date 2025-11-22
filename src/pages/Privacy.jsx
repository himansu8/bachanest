import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Simple Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-primary flex items-center justify-center">
                <span className="text-white font-bold text-xl">👪</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                BachaNest
              </span>
            </Link>
            <Link
              to="/"
              className="px-6 py-2 bg-gradient-primary text-white rounded-full font-medium hover:shadow-glow transition-all duration-300"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Privacy Policy
            </span>
          </h1>
          <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="space-y-8 text-foreground leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="text-muted-foreground">
                BachaNest ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains
                how we collect, use, disclose, and safeguard your information when you use our mobile application and services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
              <p className="text-muted-foreground mb-4">We collect several types of information:</p>

              <h3 className="text-xl font-semibold mb-2 mt-4">Personal Information</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Name, email address, and phone number</li>
                <li>Profile information (age, gender, preferences)</li>
                <li>Account credentials</li>
              </ul>

              <h3 className="text-xl font-semibold mb-2 mt-4">Usage Data</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Device information (type, operating system, unique device identifiers)</li>
                <li>Location data (with your permission)</li>
                <li>App usage statistics and interactions</li>
                <li>Search queries and browsing history within the app</li>
              </ul>

              <h3 className="text-xl font-semibold mb-2 mt-4">Content Data</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Messages and communications</li>
                <li>Photos and media files you upload</li>
                <li>Reviews and feedback</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Enable parental controls and safety features</li>
                <li>Personalize your experience</li>
                <li>Send you notifications and updates</li>
                <li>Process transactions and payments</li>
                <li>Prevent fraud and abuse</li>
                <li>Comply with legal obligations</li>
                <li>Analyze usage patterns to improve our app</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Children's Privacy</h2>
              <p className="text-muted-foreground">
                We take children's privacy seriously. BachaNest includes features specifically designed for children under 13,
                but always under parental supervision and with parental consent. We do not knowingly collect personal information
                from children without verifiable parental consent. Parents have the right to review, delete, or refuse further
                collection of their child's personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Information Sharing</h2>
              <p className="text-muted-foreground mb-4">We may share your information with:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li><strong>Service Providers:</strong> Third-party companies that help us operate our services</li>
                <li><strong>Business Partners:</strong> Verified local businesses you interact with through the app</li>
                <li><strong>Legal Authorities:</strong> When required by law or to protect our rights</li>
                <li><strong>With Your Consent:</strong> When you explicitly authorize us to share information</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                We do not sell your personal information to third parties for their marketing purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Data Security</h2>
              <p className="text-muted-foreground">
                We implement industry-standard security measures to protect your information, including encryption,
                secure servers, and regular security audits. However, no method of transmission over the internet is 100% secure,
                and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Your Rights & Choices</h2>
              <p className="text-muted-foreground mb-4">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Access, update, or delete your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Disable location services</li>
                <li>Request a copy of your data</li>
                <li>Object to processing of your personal data</li>
                <li>Lodge a complaint with a supervisory authority</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Parental Controls</h2>
              <p className="text-muted-foreground">
                Parents have full control over their children's accounts and can monitor activity, set time limits,
                restrict content, and manage privacy settings. Parents can also request deletion of their child's account and data at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Data Retention</h2>
              <p className="text-muted-foreground">
                We retain your information for as long as necessary to provide our services and fulfill the purposes outlined
                in this Privacy Policy. When you delete your account, we will delete or anonymize your personal information
                within 30 days, except where we are required to retain it for legal purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. International Data Transfers</h2>
              <p className="text-muted-foreground">
                Your information may be transferred to and maintained on servers located outside of your country.
                By using BachaNest, you consent to this transfer. We ensure appropriate safeguards are in place
                to protect your information in accordance with this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">11. Changes to This Policy</h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page and updating the "Last updated" date. Continued use of the app after changes
                constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">12. Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
                <br />
                <strong className="text-foreground">Email:</strong> privacy@BachaNest.com
                <br />
                <strong className="text-foreground">Phone:</strong> +1 (555) 123-4567
                <br />
                <strong className="text-foreground">Address:</strong> 123 Family Street, Safety City, SC 12345
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
