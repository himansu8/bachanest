/* About.jsx – Real react-icons (no emojis) */
import {
  HiShieldCheck,
  HiGlobe,
  HiBookOpen,
  HiUserGroup,
  HiLockClosed,
  HiCheckCircle,
  HiDeviceMobile,
  HiStar,
  HiUsers,
} from "react-icons/hi";

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                About FamilyGuard
              </span>
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                FamilyGuard is more than just an app—it's a comprehensive digital ecosystem designed to empower parents 
                and protect children in today's connected world.
              </p>
              <p>
                We understand the challenges modern families face: from ensuring online safety to finding trusted local 
                services, from educational resources to community engagement. That's why we've built an all-in-one platform 
                that addresses every aspect of family life.
              </p>
              <p>
                Our mission is to create a safe, supportive community where parents can confidently navigate the digital 
                landscape while giving children the freedom to learn, explore, and grow. With robust parental controls, 
                verified business listings, educational content, and secure communication tools, we're redefining what it 
                means to be a connected family.
              </p>
              <p>
                Built-in features like contests, donations, e-commerce, and kids' education make FamilyGuard the ultimate 
                hub for modern parenting—combining safety, discovery, learning, and community in one powerful platform.
              </p>
            </div>

            {/* Key Points */}
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-gradient-primary flex items-center justify-center text-xl text-white">
                  <HiShieldCheck />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Safety First</h4>
                  <p className="text-sm text-muted-foreground">Comprehensive parental controls</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-gradient-primary flex items-center justify-center text-xl text-white">
                  <HiGlobe />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Local Discovery</h4>
                  <p className="text-sm text-muted-foreground">Find verified businesses nearby</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-gradient-primary flex items-center justify-center text-xl text-white">
                  <HiBookOpen />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Education Hub</h4>
                  <p className="text-sm text-muted-foreground">Age-appropriate learning content</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-10 h-10 flex-shrink-0 rounded-lg bg-gradient-primary flex items-center justify-center text-xl text-white">
                  <HiUserGroup />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Community</h4>
                  <p className="text-sm text-muted-foreground">Connect with other families</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Visual Element */}
          <div className="relative animate-scale-in">
            <div className="relative bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-12 backdrop-blur-sm border border-border">
              <div className="grid grid-cols-2 gap-6">
                {/* Stat Cards */}
                <div className="bg-white rounded-2xl p-6 shadow-soft text-center">
                  <div className="text-4xl mb-2">
                    <HiLockClosed className="inline-block" />
                  </div>
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Secure</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-soft text-center">
                  <div className="text-4xl mb-2">
                    <HiCheckCircle className="inline-block" />
                  </div>
                  <div className="text-2xl font-bold text-secondary">Verified</div>
                  <div className="text-sm text-muted-foreground">Businesses</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-soft text-center">
                  <div className="text-4xl mb-2">
                    <HiDeviceMobile className="inline-block" />
                  </div>
                  <div className="text-2xl font-bold text-accent">24/7</div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-soft text-center">
                  <div className="text-4xl mb-2">
                    <HiStar className="inline-block" />
                  </div>
                  <div className="text-2xl font-bold text-primary">4.9★</div>
                  <div className="text-sm text-muted-foreground">Rating</div>
                </div>
              </div>

              {/* Center Badge */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-8 shadow-glow">
                <div className="text-6xl animate-float">
                  <HiUsers />
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;