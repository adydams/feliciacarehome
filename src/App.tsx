import { Button } from "./components/ui/button";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Input } from "./components/ui/input";
import { Label } from "./components/ui/label";
//import { Badge } from "./components/ui/badge";
import {
  Phone,
  // Mail, MapPin,
  Star,
  CheckCircle,
  Users,
  Award,
  Clock, //Search, Facebook, Instagram, Twitter,
  Heart,
} from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Minnesota",
      rating: 5,
      text: "Our caregivers are more than just helpers — they’re compassionate companions dedicated to supporting your loved one with dignity, respect, and kindness.",
    },
    {
      name: "David Thompson",
      location: "Birmingham",
      rating: 5,
      text: "Each caregiver is carefully selected, professionally trained, and committed to making a positive difference in the lives of those they serve.",
    },
    {
      name: "Emma Wilson",
      location: "Atlanta",
      rating: 5,
      text: "Outstanding service! They accommodated our specific requirements and delivered beyond expectations.",
    },
  ];
  const services = [
    {
  title: "Elderly Care",
  description:
    "Dedicated support for seniors to help them live comfortably and independently at home.",
  features: [
    "Assistance with daily activities",
    "Mobility support",
    "Meal planning & preparation",
    "Companionship & social interaction",
  ],
},
{
  title: "Care Giving Services",
  description:
    "Compassionate and professional in-home care for the elderly, disabled, and those in need of daily assistance.",
  features: [
    "Personal hygiene support",
    "Meal preparation & feeding",
    "Medication reminders",
    "Companionship & emotional support",
  ],
},
{
  title: "Disability Support",
  description:
    "Personalized care services tailored to individuals with physical or mental disabilities.",
  features: [
    "Personal care & hygiene",
    "Transportation assistance",
    "Therapy & exercise support",
    "Household management",
  ],
},
{
  title: "Post-Hospital Care",
  description:
    "Reliable short-term care to aid recovery and reduce hospital readmission risks.",
  features: [
    "Medication management",
    "Wound care support",
    "Physiotherapy assistance",
    "Monitoring & reporting recovery progress",
  ],
}

  ];
  const benefits = [
    "Free Evaluation",
    "Professional, Caring Staff",
    "Cost-Effective Alternative",
    "Independence and Comfort",
    "Feel Safer in Their Own Home",
    "Peace of Mind for Families",
    "Full Range of Care Services",
  ];
  const carouselImages = [
    {
      url: "https://media.istockphoto.com/id/2156555384/photo/female-caregiver-and-senior-woman-in-wheelchair-holding-dandelion-picking-wild-flowers-nurse.webp?a=1&b=1&s=612x612&w=0&k=20&c=zWYLSepFKggRzwJuJC60UF65uHi-Nwf6DidFtY6r6xQ=",
      title: "PROFESSIONAL SERVICES",
      subtitle: "YOU CAN TRUST US",
    },
   
    {
      url: "https://images.unsplash.com/photo-1658314755707-1fbdf7c40145?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyZWdpdmVyfGVufDB8fDB8fHww",
      title: "FELICIACARES",
      subtitle: "WE TRULY CARE",
    },
     {
      url: "https://plus.unsplash.com/premium_photo-1663036976879-4baf18adfd5b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2FyZWdpdmVyfGVufDB8fDB8fHww",
      title: "CARE GIVER EXPERTS",
      subtitle: "Trusted Across the US",
    }
  ];
  // const testimonial =
  //   "When my mother's health declined, we wanted her to stay at home but knew she needed help.\n\nChoosing home care was the best decision we made. From the start, the team was compassionate and professional, taking time to understand her needs.\n\nThe caregiver they provided was incredible—more than just a helper, she was a companion. She assisted with meals, personal care, and medication reminders while offering companionship and emotional support.";
  // const testimonial1 =
  //   "\n\nMost importantly, she ensured my mother's safety, helping her move around and organizing the home to reduce fall risks.\n\nKnowing she had someone watching over her gave us peace of mind.\n\nOver time, my mother's mood improved, and she looked forward to her caregiver's visits.\n\nHome care allowed her to maintain her independence while receiving the care she needed.\n\nIf you're considering home care for a loved one, I highly recommend it. It brought comfort, dignity, and quality of life.";

  return (
    <div className="min-h-screen bg-white">
      {/* Top Contact Bar */}
      <div className="bg-slate-600 text-white py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <span className="flex items-center">
                <span className="mr-2">Get Pricing & Schedule Tour</span>
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="flex items-center">
                <Phone className="h-4 w-4 mr-1" />
                (800) 564-0684
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-slate-600 rounded-full flex items-center justify-center mr-3">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <h1 className="text-3xl font-bold text-slate-600">
                    FeliCares
                  </h1>
                </div>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="text-gray-700 hover:text-slate-600 transition-colors font-medium"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-slate-600 transition-colors font-medium"
              >
                About Us
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-slate-600 transition-colors font-medium"
              >
                Care Services
              </a>
              <a
                href="#caregivers"
                className="text-gray-700 hover:text-slate-600 transition-colors font-medium"
              >
                Our Caregivers
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-slate-600 transition-colors font-medium"
              >
                Contact Us
              </a>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-slate-600"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#home"
                className="block px-3 py-2 text-gray-700 hover:text-slate-600"
              >
                Home
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-gray-700 hover:text-slate-600"
              >
                About Us
              </a>
              <a
                href="#services"
                className="block px-3 py-2 text-gray-700 hover:text-slate-600"
              >
                Care Services
              </a>
              <a
                href="#caregivers"
                className="block px-3 py-2 text-gray-700 hover:text-slate-600"
              >
                Our Caregivers
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-gray-700 hover:text-slate-600"
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </nav>

    <section id="home" className="bg-gray-50 py-12 md:py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      {/* Text + Image Block */}
      <div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-light text-slate-600 mb-2">
          Home Care
        </h1>
        <p className="text-xl sm:text-2xl text-gray-500 mb-6">
          United State, US
        </p>

        <div className="flex flex-col md:flex-row items-start md:items-center mb-8 gap-6">
          <img
            src="https://media.istockphoto.com/id/809822820/photo/caring-comes-naturally-to-her.webp?a=1&b=1&s=612x612&w=0&k=20&c=qLieyrG-nFTBRN-1Vk6Fz1WcJNwD4NBKuFbcauA03JQ="
            alt="Professional caregiver with elderly client"
            className="w-full md:w-80 h-64 object-cover rounded-lg shadow-lg"
          />
          <div className="w-full">
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-center text-gray-600 text-sm sm:text-base"
                >
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-center">
              <div className="flex items-center bg-white p-3 rounded-lg shadow">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <span className="ml-2 text-gray-600 font-medium text-sm sm:text-base">
                  4.8 Google Rating
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Form Block */}
      <div>
        <Card className="bg-slate-600 text-white shadow-lg">
          <CardHeader>
            <CardTitle className="text-white text-lg md:text-xl">
              * Required Fields
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { id: "firstName", label: "First Name *" },
              { id: "lastName", label: "Last Name *" },
              { id: "phone", label: "Phone *" },
              { id: "email", label: "Email *", type: "email" },
              { id: "zipCode", label: "Desired Zip Code" },
            ].map(({ id, label, type }) => (
              <div key={id}>
                <Label htmlFor={id} className="text-white">
                  {label}
                </Label>
                <Input
                  id={id}
                  type={type || "text"}
                  className="bg-white text-black"
                />
              </div>
            ))}

            <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold">
              Request Free Info
            </Button>

            <p className="text-xs text-gray-300 leading-relaxed">
              By clicking Request Free Info, you agree to our Terms of Use and
              Privacy Policy. You also consent to receive texts and calls, which
              may be autodialed, from us and our partner providers; however,
              your consent is not a condition to using our service.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  </div>
</section>


      {/* Services Section */}
      {/* <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Amenities and Services
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="text-gray-600">
                {service}
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center text-sm text-gray-500 max-w-4xl mx-auto">
            <p className="mb-4">
              FeliCares is not affiliated with the communities on our site and does not guarantee the completeness or accuracy of pricing, photos, living or care available, services or amenities. All phone calls and form submissions are handled by our trusted partner A Place for Mom.
            </p>
            
            <p className="mb-4">
              Families and their loved ones are encouraged to do the following before deciding on a community:
            </p>
            
            <ul className="text-left space-y-2 mb-4">
              <li>
                <strong>Schedule a tour and visit the physical location</strong> to make sure community description is accurate. 
                Confirm with community manager that living and services required for you or your loved one's unique needs and budget are met.
              </li>
              <li>
                <strong>Check with state government websites</strong> for additional licensing and information.
              </li>
              <li>
                If there is any information that is inaccurate or needs to be updated, please contact FeliCares.
              </li>
            </ul>
            
            <p>
              FeliCares uses the term "assisted living" or "personal care" to inform users that a community provides assistance with some Activities of Daily Living (ADL's). It may not meet your state's legal definition required for that level of care.
            </p>
          </div>
        </div>
      </section> */}

      {/* Caregiver Training Section */}
      <section className="py-20 bg-slate-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                PROFESSIONAL CAREGIVER TRAINING
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Join the FeliCares team and make a difference in people's lives.
                Our comprehensive training program prepares you to provide
                exceptional care with compassion and professionalism.
              </p>

              <div className="flex items-center space-x-8 mb-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center mr-3">
                    <Users className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Instructors</div>
                    <div className="font-semibold">Certified Professionals</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center mr-3">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Certification</div>
                    <div className="font-semibold">Accredited Programs</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professional caregiver training"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Care Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From personal care to specialized support, we offer comprehensive
              caregiving solutions tailored to your family's unique needs across
              the UK.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-teal-600">
                    {service.title}
                  </CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose FeliCares?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                With years of experience providing compassionate care across the
                United Kingdom, FeliCares has built a reputation for excellence,
                reliability, and genuine care for our clients and their
                families.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <Users className="h-8 w-8 text-teal-600 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Certified Caregivers
                    </h3>
                    <p className="text-gray-600 text-sm">
                      All our caregivers are trained, certified, and background
                      checked professionals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Heart className="h-8 w-8 text-teal-600 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Compassionate Care
                    </h3>
                    <p className="text-gray-600 text-sm">
                      We treat every client with dignity, respect, and genuine
                      compassion.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-8 w-8 text-teal-600 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      24/7 Availability
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Round-the-clock care services to meet your family's needs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-8 w-8 text-teal-600 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">
                      Personalized Plans
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Customized care plans tailored to individual needs and
                      preferences.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professional caregiver with elderly client"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Families Say
            </h2>
            <p className="text-xl text-gray-600">
              Hear from the families who trust FeliCares with their loved ones'
              care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonial.location}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-300 text-white">
  <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
    
    {/* Static Image */}
    <div className="h-[500px]">
      <img
        src="https://media.istockphoto.com/id/2192217274/photo/care-and-companionship.webp?a=1&b=1&s=612x612&w=0&k=20&c=aO2wWPVEaJo_8pgXpRzrogd6AzF68LTC9T07J-_MZ_M="
        alt="Professional caregiver with elderly client"
        className="w-full h-full object-cover rounded-lg shadow-lg"
      />
    </div>

    {/* Carousel */}
    <div className="h-[500px] relative">
      <Carousel
        showThumbs={false}
        showStatus={false}
        autoPlay
        infiniteLoop
        interval={5000}
        stopOnHover={false}
        emulateTouch
        showArrows
      >
        {carouselImages.map((image, index) => (
          <div key={index} className="relative h-[500px]">
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-full object-cover rounded opacity-40"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white px-4">
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2 text-center leading-snug">
                {image.title}
              </h1>
              <p className="text-sm sm:text-lg md:text-2xl font-light text-center max-w-2xl">
                {image.subtitle}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>

  </div>
</section>


      {/* Footer */}
      <footer className="bg-slate-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-3">
                  <Heart className="h-6 w-6 text-slate-600" />
                </div>
                <h3 className="text-2xl font-bold">FeliCares</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Compassionate care services across the United Kingdom. Your
                family's well-being is our commitment.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">COMPANY</h4>
              <ul className="space-y-2 text-gray-300">
                <li>About Us</li>
                <li>Our Caregivers</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Care Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Personal Care</li>
                <li>Companion Care</li>
                <li>Respite Care</li>
                <li>Specialized Care</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <p>Phone: (800) 564-0684</p>
                <p>Email: care@felicares.co.us</p>
                <p>Serving all of the United State</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-300">
            <p>
              &copy; 2024 FeliCares. All rights reserved. | Privacy Policy |
              Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
