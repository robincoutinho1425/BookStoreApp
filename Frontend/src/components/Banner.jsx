import { Link } from "react-router-dom";
import banner from "/Banner.png";

function Banner() {
  const categories = ["Fiction", "Non-fiction", "Mystery", "Science", "Biography", "Fantasy"];

  return (
    <>
      <div className="container flex flex-col px-4 mx-auto my-10 max-w-screen-2xl md:px-20 md:flex-row">
        <div className="order-2 w-full mt-12 md:order-1 md:w-1/2 md:mt-36">
          <div className="space-y-8">
            <h1 className="text-2xl font-bold md:text-4xl">
              Hello, welcome here to learn something{" "}
              <span className="text-pink-500">new everyday!!!</span>
            </h1>
            <p className="text-sm md:text-xl">
              Welcome to our eBookstore app, your one-stop destination for discovering and purchasing books online. Browse through a wide collection of genres and find your next favorite read with ease. Enjoy a seamless, user-friendly experience designed for book lovers everywhere!!!
            </p>
            {/* Replace the email input with popular categories */}
            <div>
              <h2 className="text-lg font-semibold md:text-2xl">Popular Categories</h2>
              <div className="flex flex-wrap gap-4 mt-4 ">
                {categories.map((category) => (
                  <button
                    key={category}
                    className="px-4 py-2 text-sm font-medium text-white bg-pink-500 rounded-lg hover:bg-pink-600 hover:scale-105"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <Link to="/signup" className="mt-8 text-white bg-blue-500 btn hover:bg-blue-600 hover:scale-105">
            Get Started
          </Link>
        </div>
        <div className="order-1 w-full mt-20 md:w-1/2">
          <img
            src={banner}
            className="md:w-[550px] md:h-[460px] md:ml-12"
            alt="Banner"
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
