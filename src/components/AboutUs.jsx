import { motion } from "framer-motion";
const BookOpenIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
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
);

const CheckCircleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const AboutUs = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50 text-blac;">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-indigo-900 mb-4">
            Our Literary Journey
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
        </div>

        <div className=" rounded-2xl shadow-xl overflow-hidden max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="p-10 md:p-12"
            >
              <div className="flex items-center mb-6">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <BookOpenIcon className="h-6 w-6 text-indigo-700" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Pages & Prose
                </h3>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                Since our founding in 2020, Pages & Prose has evolved from a
                humble neighborhood bookshop into a vibrant digital haven for
                bibliophiles. We're passionate about connecting readers with
                stories that challenge perspectives and spark imagination.
              </p>

              <div className="space-y-6">
                <div className="flex">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Curated Collections
                    </h4>
                    <p className="text-gray-600">
                      Our expert team handpicks each title, from emerging
                      authors to celebrated classics, ensuring quality across
                      every genre.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Community Focused
                    </h4>
                    <p className="text-gray-600">
                      We host virtual author talks, monthly reading challenges,
                      and book club discussions to keep the literary
                      conversation alive.
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      Sustainable Reading
                    </h4>
                    <p className="text-gray-600">
                      Committed to eco-friendly practices, we partner with
                      publishers who use recycled materials and support
                      reforestation initiatives.
                    </p>
                  </div>
                </div>
              </div>

              <button className="mt-8 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-black border font-medium rounded-lg transition duration-300 shadow-md hover:shadow-lg">
                Meet Our Team
              </button>
            </motion.div>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative min-h-96 lg:min-h-full"
            >
              <img
                src="https://images.unsplash.com/photo-1589998059171-988d887df646?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Cozy bookstore interior with shelves of books"
                className="w-full h-full object-cover absolute inset-0"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <p className=" text-sm italic">
                  "A reader lives a thousand lives before he dies. The man who
                  never reads lives only one."
                  <span className="block mt-1 font-medium">
                    — George R.R. Martin
                  </span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Additional Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 text-center max-w-6xl mx-auto">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-md"
          >
            <h3 className="text-5xl font-bold text-indigo-600 mb-2">10K+</h3>
            <p className="text-gray-600">Books in our collection</p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-md"
          >
            <h3 className="text-5xl font-bold text-indigo-600 mb-2">500+</h3>
            <p className="text-gray-600">Authors supported</p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-xl shadow-md"
          >
            <h3 className="text-5xl font-bold text-indigo-600 mb-2">100+</h3>
            <p className="text-gray-600">Community events yearly</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
