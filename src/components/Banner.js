import read from "../assets/read.svg";

export default function Banner() {
  const goToBooks = () => {
    const booksCollection = document.querySelector("#books");
    if (booksCollection) {
      const currentScrollValue = window.scrollY;
      const rectForBooks = booksCollection.getBoundingClientRect().top;
      window.scrollTo({
        top: rectForBooks + currentScrollValue,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="bg-white pt-48">
      <div className="max-w-7xl mx-auto py-3 px-4 sm:px-6">
        <div className="bg-light-brown flex flex-col lg:flex-row items-center justify-between rounded-lg overflow-hidden shadow-md">
          <div className="flex flex-col justify-center items-start lg:pl-20 mt-8 lg:mt-0">
            <h1 className="text-2xl sm:text-5xl font-bold mb-4 text-dark-indigo">
              Build your library
            </h1>
            <p className="mb-4 text-md-gray">
              Buy two selected books and get <br /> one for free
            </p>
            <button
              type="button"
              className="bg-orange hover:bg-light-purple px-5 py-2 text-white rounded-md shadow-md hover:shadow-none"
              onClick={goToBooks}
            >
              View all
            </button>
          </div>
          <div className="flex-1 flex items-center justify-end h-64 lg:h-96">
            <img
              src={read}
              className="object-cover h-64 lg:h-full mt-8 lg:mt-0"
              alt="time to read"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
