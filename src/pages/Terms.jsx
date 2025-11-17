import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
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
                FamilyGuard
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
              Terms & Conditions
            </span>
          </h1>
          <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="space-y-8 text-foreground leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using FamilyGuard, you accept and agree to be bound by the terms and provision of this agreement. 
                If you do not agree to these terms, please do not use our service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Use License</h2>
              <p className="text-muted-foreground mb-4">
                Permission is granted to temporarily download one copy of FamilyGuard for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Attempt to decompile or reverse engineer any software contained in FamilyGuard</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. User Accounts</h2>
              <p className="text-muted-foreground">
                When you create an account with us, you must provide accurate, complete, and current information. 
                Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Parental Responsibility</h2>
              <p className="text-muted-foreground">
                Parents and guardians are responsible for monitoring their children's use of FamilyGuard. 
                While we provide parental control tools, ultimate responsibility for children's online safety rests with parents and guardians.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Privacy & Data Protection</h2>
              <p className="text-muted-foreground">
                Your use of FamilyGuard is also governed by our Privacy Policy. Please review our Privacy Policy, 
                which also governs the site and informs users of our data collection practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Prohibited Conduct</h2>
              <p className="text-muted-foreground mb-4">You agree not to:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Use the service for any illegal purpose</li>
                <li>Harass, abuse, or harm another person</li>
                <li>Impersonate or attempt to impersonate another user</li>
                <li>Upload or transmit viruses or malicious code</li>
                <li>Collect or track personal information of others</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Content Guidelines</h2>
              <p className="text-muted-foreground">
                Users are responsible for the content they post. We reserve the right to remove any content that violates 
                our community guidelines or these Terms of Service without prior notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                In no event shall FamilyGuard or its suppliers be liable for any damages (including, without limitation, 
                damages for loss of data or profit) arising out of the use or inability to use FamilyGuard.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Modifications</h2>
              <p className="text-muted-foreground">
                FamilyGuard may revise these terms of service at any time without notice. By using this app, 
                you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">10. Contact Information</h2>
              <p className="text-muted-foreground">
                If you have any questions about these Terms, please contact us at:
                <br />
                <strong className="text-foreground">Email:</strong> legal@familyguard.com
                <br />
                <strong className="text-foreground">Phone:</strong> +1 (555) 123-4567
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
