import { motion } from "framer-motion";

// SVG Components
const BookStackSVG = () => (
  <svg viewBox="0 0 500 500" className="w-full h-auto">
    {/* Book stack base */}
    <rect x="50" y="200" width="300" height="30" rx="2" fill="#4f46e5" />

    {/* Books */}
    <rect x="60" y="170" width="280" height="30" rx="2" fill="#6366f1" />
    <rect x="70" y="140" width="260" height="30" rx="2" fill="#818cf8" />
    <rect x="80" y="110" width="240" height="30" rx="2" fill="#a5b4fc" />
    <rect x="90" y="80" width="220" height="30" rx="2" fill="#c7d2fe" />
    <rect x="100" y="50" width="200" height="30" rx="2" fill="#e0e7ff" />

    {/* Coffee cup */}
    <path
      d="M400,300 C400,250 350,220 320,220 L300,220 C270,220 250,250 250,300 L250,350 C250,370 270,390 300,390 L320,390 C350,390 400,370 400,350 Z"
      fill="#f5f5f5"
    />
    <path
      d="M320,220 L300,220 C270,220 250,250 250,300 L250,350 C250,370 270,390 300,390 L320,390"
      fill="none"
      stroke="#4f46e5"
      strokeWidth="5"
    />
    <ellipse
      cx="310"
      cy="200"
      rx="20"
      ry="10"
      fill="#f5f5f5"
      stroke="#4f46e5"
      strokeWidth="3"
    />
  </svg>
);

const BookCoverSVG = ({ title, color }) => (
  <svg viewBox="0 0 100 150" className="w-full h-auto">
    <rect
      x="5"
      y="5"
      width="90"
      height="140"
      rx="3"
      fill={color}
      stroke="#333"
      strokeWidth="1"
    />
    <text
      x="50"
      y="80"
      textAnchor="middle"
      fill="#333"
      fontSize="12"
      fontFamily="Arial"
    >
      {title}
    </text>
  </svg>
);

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-indigo-900 to-purple-800 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full">
          <pattern
            id="noise"
            x="0"
            y="0"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="100" height="100" fill="#fff" />
            <path d="M0 0h100v100H0z" fill="none" />
            <path d="M0 100h100v100H0z" fill="none" />
            <path d="M100 0h100v100H100z" fill="none" />
            <path d="M100 100h100v100H100z" fill="none" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#noise)" opacity="0.2" />
        </svg>
      </div>

      {/* Content container */}
      <div className="container mx-auto px-4 py-24 md:py-32 lg:py-40 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left column - Text content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Discover Your Next{" "}
                <span className="text-indigo-300">Favorite Book</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
                Explore our curated collection of over 10,000 books across all
                genres. Find your next adventure, learn something new, or get
                lost in a great story.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition duration-300 shadow-md hover:shadow-lg flex items-center justify-center">
                  Browse Collection
                  <svg
                    className="h-5 w-5 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>

                <button className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg transition duration-300 border border-white/20 flex items-center justify-center">
                  <svg
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  Search Books
                </button>
              </div>

              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center">
                  <svg
                    className="h-5 w-5 text-indigo-300 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                  <span>100+ New Arrivals Weekly</span>
                </div>
                <div className="h-4 w-px bg-white/30"></div>
                <div className="flex items-center">
                  <svg
                    className="h-5 w-5 text-indigo-300 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                    />
                  </svg>
                  <span>Free Shipping Over $25</span>
                </div>
              </div>
            </motion.div>

            {/* Right column - SVG content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-xl overflow-hidden shadow-2xl transform rotate-1">
                <div className="bg-indigo-100 p-8">
                  <BookStackSVG />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

                {/* Decorative elements */}
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
                <div className="absolute -top-4 -right-4 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
              </div>

              {/* Floating book cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="absolute -left-8 -bottom-8 bg-white p-3 rounded-lg shadow-xl w-32"
              >
                <BookCoverSVG title="Bestseller" color="#fef3c7" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute -right-8 -top-8 bg-white p-3 rounded-lg shadow-xl w-28"
              >
                <BookCoverSVG title="New Release" color="#dbeafe" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Wave divider at bottom */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-16"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            fill="white"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            fill="white"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            fill="white"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
