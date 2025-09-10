import React from "react";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { MapPin, Search, Phone, Home, ShieldCheck, BadgeCheck, FileCheck, Wallet, Building2, Bed, PhoneCall, Star, Bookmark, ArrowRight, CheckCircle2 } from "lucide-react";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Bed as BedIcon , Building2 as Building2Icon, Home as HomeIcon, Store as StoreIcon, Monitor as MonitorIcon, Package as PackageIcon } from "lucide-react";


import { Textarea } from "@/components/ui/textarea";



const FEATURED_LISTINGS = [
  {
    id: "lko-01",
    title: "2BHK • Gomti Nagar",
    city: "Lucknow",
    price: 14500,
    bhk: 2,
    area: "900 sq.ft",
    furnishing: "Semi‑Furnished",
    verified: true,
    moveIn: "Immediate",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop", // replace
    phone: "+919999900001",
  },
  {
    id: "blr-02",
    title: "Studio • Indiranagar",
    city: "Bengaluru",
    price: 18000,
    bhk: 1,
    area: "450 sq.ft",
    furnishing: "Fully Furnished",
    verified: true,
    moveIn: "From 1 Oct",
    image: "https://images.unsplash.com/photo-1597047084897-51e81819a499?q=80&w=1200&auto=format&fit=crop",
    phone: "+919999900002",
  },
  {
    id: "mum-03",
    title: "1RK • Andheri East",
    city: "Mumbai",
    price: 21000,
    bhk: 1,
    area: "380 sq.ft",
    furnishing: "Unfurnished",
    verified: false,
    moveIn: "2 Weeks",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    phone: "+919999900003",
  },
];

const CITIES = ["Lucknow", "Bengaluru", "Mumbai", "Pune", "Delhi NCR", "Hyderabad"];

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: "easeOut" },
};

function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b text-white bg-black/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <a href="#" className="flex items-center gap-2">
          <Home className="h-6 w-6 text-blue-600" aria-hidden />
          <span className="text-lg font-semibold tracking-tight">To‑Let Globe</span>
        </a>
        <nav className="hidden gap-6 text-sm text-white-900 md:flex">
          <a href="#" className="text-white-900">HOME</a>
          <a href="#about" className="hover:text-white-900">About</a>
          <a href="#listingscrousel" className="text-white-900">Listings</a>
          <a href="#contact" className="text-white-900">Contact US</a>
          
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="hidden md:inline-flex">Sign in</Button>
          <Button className="bg-blue-600 hover:bg-blue-700">List your property</Button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
return (
<section className="relative overflow-hidden  text-gray-100">
<div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 py-10 md:grid-cols-2 md:py-16 md:px-6">
<motion.div {...fadeUp}>
<h1 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
Find rentals directly from owners — {" "}
<span className="text-blue-400">zero brokerage</span>.
</h1>
<p className="mt-3 max-w-xl text-base text-gray-400 md:text-lg">
Search verified flats, PGs, and commercial spaces across top cities. Contact owners instantly.
</p>
<SearchBar />
<div className="mt-4 flex items-center gap-4 text-sm text-gray-400">
<div className="flex items-center gap-1">
<ShieldCheck className="h-4 w-4 text-emerald-400" /> Verified owners
</div>
<div className="flex items-center gap-1">
<BadgeCheck className="h-4 w-4 text-blue-400" /> No brokerage
</div>
<div className="flex items-center gap-1">
<FileCheck className="h-4 w-4 text-yellow-400" /> Easy agreements
</div>
</div>
</motion.div>


<motion.div {...fadeUp} className="md:justify-self-end">
<div className="relative">
<img
src="images\livingroom.png"
alt="Modern apartment living room"
className="aspect-[4/3] w-full rounded-2xl object-cover shadow-xl"
loading="lazy"
/>
<div className="absolute bottom-4 left-4 rounded-xl bg-black/70 px-3 py-2 shadow">
<div className="flex items-center gap-2 text-xs text-gray-300">
<MapPin className="h-4 w-4 text-blue-400" /> 20k+ verified listings • 10+ cities
</div>
</div>
</div>
</motion.div>
</div>
</section>
);
}


function SearchBar() {
return (
<div className="mt-6 flex w-full max-w-md items-center rounded-xl bg-gray-800 p-2 shadow-lg ring-1 ring-gray-700">
<Search className="ml-2 h-5 w-5 text-gray-400" />
<Input
type="text"
placeholder="Search by location, landmark, or city"
className="ml-2 flex-1 border-0 bg-transparent text-gray-200 placeholder:text-gray-500 focus:ring-0"
/>
<Button className="rounded-xl bg-blue-600 text-white transition hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/30">Search</Button>
</div>
);
}

function ValuePillars() {
  const items = [
    { icon: ShieldCheck, title: "Verified Owners", desc: "Listings screened for authenticity" },
    { icon: BadgeCheck, title: "Zero Brokerage", desc: "Talk directly to owners" },
    { icon: FileCheck, title: "Easy Agreements", desc: "Digital paperwork assistance" },
    { icon: Wallet, title: "Deposit Help", desc: "Flexible options on request" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 md:px-6 ">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        {items.map(({ icon: Icon, title, desc }) => (
          <Card key={title} className="border-slate-200 bg-black">
            <CardContent className="flex items-start gap-3 p-5">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-50">
                <Icon className="h-5 w-5 text-blue-600" />
              </span>
              <div>
                <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
                <p className="mt-1 text-sm text-slate-600">{desc}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}



const services = [
  {
    title: "Paying Guest",
    description:
      "Find budget-friendly and convenient paying guest accommodations for a comfortable stay away from home.",
    icon: <BedIcon size={48} />,
    bg: "bg-teal-200",
  },
  {
    title: "Flat",
    description:
      "Discover a diverse range of apartments for rent, customize to suit your lifestyle and budget.",
    icon: <Building2Icon size={48} />,
    bg: "bg-teal-200",
  },
  {
    title: "House",
    description:
      "Search for your dream home, available for rent or sale, tailored to your lifestyle and preferences.",
    icon: <HomeIcon size={48} />,
    bg: "bg-teal-200",
  },
  {
    title: "Shop",
    description:
      "Browse shops and commercial spaces available for rent or lease, perfect for entrepreneurs and businesses.",
    icon: <StoreIcon size={48} />,
    bg: "bg-teal-200",
  },
  {
    title: "Office",
    description:
      "Find the right office space to match your business needs, from startups to established companies.",
    icon: <MonitorIcon size={48} />,
    bg: "bg-teal-200",
  },
  {
    title: "Warehouse",
    description:
      "Secure warehouses available for storage and logistics, ensuring your business operations run smoothly.",
    icon: <PackageIcon size={48} />,
    bg: "bg-teal-200",
  },
];

const Services = () => {
  return (
    <section className=" text-white py-16 px-6">
      <div className="max-w-6xl mx-auto ">
        <h2 className="text-5xl font-bold mb-4">Services</h2>
        <p className="text-yellow-500 font-semibold mb-12">
          SKIP THE MIDDLEMAN: RENT OR LEASE DIRECTLY ON TO-LET GLOBE
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-gray-100 text-black shadow-lg overflow-hidden hover:scale-105 transform transition"
            >
              <div className="flex justify-center items-center p-6">{service.icon}</div>
              <div className={`${service.bg} p-6`}>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


function ListingCard({ id, title, city, price, bhk, area, furnishing, verified, moveIn, image, phone }) {
  return (
    <Card className="flex-rows group border-slate-200 w-full transition hover:shadow-md bg-black">
      <CardHeader className="p-0">
        <div className="relative">
          <img src={image} alt={`${title} in ${city}`} className="aspect-[4/3] w-full h-80 rounded-t-xl object-cover" loading="lazy" />
          <button aria-label="Save listing" className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-slate-700 shadow">
            <Bookmark className="h-4 w-4" />
          </button>
          {verified && (
            <span className="absolute left-3 top-3 inline-flex items-center gap-1 rounded-full bg-green-600 px-2 py-1 text-xs font-medium text-white">
              <CheckCircle2 className="h-3.5 w-3.5" /> Verified
            </span>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-base font-semibold text-slate-900">{title}</h3>
            <p className="mt-0.5 text-sm text-slate-600">{city} • {area} • {furnishing}</p>
          </div>
          <div className="text-right">
            <div className="text-lg font-semibold text-slate-900">₹{price.toLocaleString("en-IN")}</div>
            <div className="text-xs text-slate-500">per month</div>
          </div>
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-slate-600">
          <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-1"> <Bed className="h-3.5 w-3.5" /> {bhk} BHK </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2 py-1"> <Building2 className="h-3.5 w-3.5" /> {moveIn} </span>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between p-4 pt-0">
        <Button variant="secondary" className="rounded-lg">View details</Button>
        <Button asChild className="rounded-lg bg-blue-600 hover:bg-blue-700">
          <a href={`tel:${phone}`} aria-label={`Call owner for ${title}`}>
            <PhoneCall className="mr-2 h-4 w-4" /> Contact Owner
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}

const listings =[
  {
    id: "lko-01",
    title: "2BHK • Gomti Nagar",
    city: "Lucknow",
    price: 14500,
    bhk: 2,
    area: "900 sq.ft",
    furnishing: "Semi‑Furnished",
    verified: true,
    moveIn: "Immediate",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop", // replace
    phone: "+919999900001",
  },
  {
    id: "blr-02",
    title: "Studio • Indiranagar",
    city: "Bengaluru",
    price: 18000,
    bhk: 1,
    area: "450 sq.ft",
    furnishing: "Fully Furnished",
    verified: true,
    moveIn: "From 1 Oct",
    image: "https://images.unsplash.com/photo-1597047084897-51e81819a499?q=80&w=1200&auto=format&fit=crop",
    phone: "+919999900002",
  },
  {
    id: "mum-03",
    title: "1RK • Andheri East",
    city: "Mumbai",
    price: 21000,
    bhk: 1,
    area: "380 sq.ft",
    furnishing: "Unfurnished",
    verified: false,
    moveIn: "2 Weeks",
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
    phone: "+919999900003",
  },
];

function ListingsCarousel() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? listings.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === listings.length - 1 ? 0 : prev + 1));
  };

  return (
    <div id="listingscrousel" className="relative w-500 max-w-4xl mx-auto">
      {/* Slider wrapper */}
      <div className="overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {listings.map((listing) => (
            <div key={listing.id} className="w-full flex-shrink-0 px-4">
              <ListingCard {...listing} />
            </div>
          ))}
        </div>
      </div>


      <button
        onClick={prevSlide}
        className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-black/60 text-white p-3 rounded-full shadow-md hover:bg-black/80"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

    
      <button
        onClick={nextSlide}
        className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-black/60 text-white p-3 rounded-full shadow-md hover:bg-black/80"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}



function Footer() {
  return (
    <footer className="border-t bg-black text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-10 md:grid-cols-4 md:px-6">
        <div>
          <div className="mb-2 flex items-center gap-2 text-white-900">
            <Home className="h-5 w-5 text-blue-600" /> <span className="font-semibold">To‑Let Globe</span>
          </div>
          <p className="text-sm text-white-600">Rent smarter with verified, no‑broker listings.</p>
        </div>
        <div>
          <div className="mb-2 text-sm font-semibold">Company</div>
          <ul className="space-y-1 text-sm text-white-600">
            <li><a href="#">About</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
          </ul>
        </div>
        <div>
          <div className="mb-2 text-sm font-semibold">Support</div>
          <ul className="space-y-1 text-sm text-white-600">
            <li><a href="#faq">Help Center</a></li>
            <li><a href="#">Safety tips</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div>
          <div className="mb-2 text-sm font-semibold">Contact</div>
          <p className="text-sm text-white-600">+91 99999 00000</p>
          <p className="text-sm text-white-600">hello@toletglobe.in</p>
          <Button variant="outline" className="mt-3"> <Phone className="mr-2 h-4 w-4" /> Call us</Button>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs text-white-500">© {new Date().getFullYear()} To‑Let Globe. All rights reserved.</div>
    </footer>
  );
}

function AboutUs(){
  return (
    <section id="about" className=" text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
      
        <h2 className="text-5xl font-bold text-teal-800 mb-12">About Us</h2>

       
        <div className="flex flex-col lg:flex-row items-center gap-10 mb-16">
          <div className="lg:w-1/2">
            <h3 className="text-3xl font-bold text-yellow-500 mb-4">
              Who We Are
            </h3>
            <p className="text-lg leading-relaxed">
              An Online Platform Where Property Owners And Tenants Can Directly
              Contact Each Other With <span className="font-bold">ZERO Brokerage.</span>
            </p>
          </div>
          <div className="lg:w-1/2">
            <img
              src="https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg"
              alt="Who we are"
              className="rounded-3xl shadow-lg"
            />
          </div>
        </div>

        {/* Our Vision */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10">
          <div className="lg:w-1/2">
            <h3 className="text-3xl font-bold text-yellow-500 mb-4">
              Our Vision
            </h3>
            <p className="text-lg leading-relaxed">
              To Make It Simple For People To Search For And Secure Homes,
              Shops, Offices, And Warehouses Without Any Hassle Or Hidden Costs.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img
              src="https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg"
              alt="Our vision"
              className="rounded-3xl shadow-lg"
            />
          </div>
        </div>
        {/* ourMisson */}
       <div className="flex flex-col lg:flex-row items-center gap-10 mb-16">
          <div className="lg:w-1/2">
            <h3 className="text-3xl font-bold text-yellow-500 mb-4">
              Our Misson
            </h3>
            <p className="text-lg leading-relaxed">
             To Hold To-Let Boards At All Rental Properties Available Nearby.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img
              src="https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg"
              alt="Who we are"
              className="rounded-3xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};



function HiringPartners() {
  const partners = [
    { name: "LinkedIn", logo: "/logos/linkedin.png" },
    { name: "Unstop", logo: "/logos/unstop.png" },
    { name: "Apna", logo: "/logos/apna.png" },
    { name: "Pregrad", logo: "/logos/pregrad.png" },
    { name: "Sunstone", logo: "/logos/sunstone.png" },
  ];

  return (
    <section className="w-full py-10 flex flex-col items-center">
      <h2 className="text-2xl font-semibold text-[#004d40] mb-8">
        Our Hiring Partners
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {partners.map((partner, idx) => (
          <Card
            key={idx}
            className="flex items-center justify-center  shadow-md hover:shadow-lg transition rounded-xl"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="h-10 object-contain"
            />
          </Card>
        ))}
      </div>
    </section>
  );
}

function ContactUs() {
  return (
    <section id="contact" className="relative w-full h-[600px]">
      {/* Background Map */}
      <div className="absolute inset-0">
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.3314746923347!2d80.94267631504591!3d26.8496847831581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3999573a5f7b2365%3A0x6af5adbb31d80145!2sTo-Let%20Globe!5e0!3m2!1sen!2sin!4v1699984662456!5m2!1sen!2sin"
          className="w-full h-full grayscale opacity-80"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative container mx-auto h-full flex flex-col md:flex-row items-center justify-between px-6">
        {/* Left Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 md:mb-0">
          CONTACT US
        </h2>

        {/* Right Form */}
        <div className="bg-black/60 backdrop-blur-sm p-8 rounded-lg w-full md:w-1/3 text-white">
          <h3 className="text-2xl font-bold text-red-400 mb-2">GET IN TOUCH</h3>
          <p className="text-sm mb-6">
            Have some questions? <br /> Feel free to ask them anytime.
          </p>

          <form className="space-y-4">
            <Input type="text" placeholder="Name" className="bg-transparent border-b" />
            <Input type="email" placeholder="Email" className="bg-transparent border-b" />
            <Input type="tel" placeholder="Phone Number" className="bg-transparent border-b" />
            <Textarea placeholder="Message" className="bg-transparent border-b" />

            <Button type="submit" variant="ghost" className="text-white hover:text-red-400 px-0">
              Send Message →
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}



export default function ToLetGlobeLanding() {
  return (
    <div className="flex min-h-screen flex-col bg-white text-slate-900">
      <Header />
      <main className="flex-1 bg-black bg-gradient-to-b from-gray-900 via-gray-800 to-black">
        <div className="pointer-events-none absolute -left-24 top-[-80px] h-64 w-64 rounded-full bg-blue-900 blur-3xl opacity-40" />
        <div className="pointer-events-none absolute -right-24 bottom-[-80px] h-64 w-64 rounded-full bg-emerald-900 blur-3xl opacity-40" />
        <Hero />
        <ValuePillars />
        <Services></Services>
        <AboutUs></AboutUs>
        <HiringPartners></HiringPartners>
        <ListingsCarousel></ListingsCarousel>
        <ContactUs></ContactUs>
        
      </main>
      <Footer className="bg-black"/>
      
      
      
      
      
    </div>
  );
}
