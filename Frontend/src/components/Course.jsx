import { useState,useEffect } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";

function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data.filter((data) => data.category !== "free"));
      } catch (error) {
        console.log("Error: ", error);
      }
    };
    getBook();
  }, []);

  return (
    <>
      <div className="container px-4 mx-auto max-w-screen-2xl md:px-20">
        <div className="items-center justify-center pt-6 mt-20 text-3xl text-center">
          <h1 className="text-2xl md:text-4xl">
            {" "}
            We&apos;re delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-12 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repellendus similique saepe sint maxime placeat, iure et suscipit
            fugit dignissimos qui beatae non rerum optio a porro nisi illum,
            impedit, error nesciunt. Distinctio tempora eos, ullam perferendis
            inventore possimus repellat dicta quidem ipsam quo, id velit, at
            totam beatae. Impedit, voluptatum?
          </p>
          <Link to="/">
            <button className="w-20 px-4 py-2 mt-6 text-xl text-white duration-300 bg-pink-500 rounded-md hover:bg-pink-700">
              Back
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-1 mt-12 md:grid-cols-4">
          {book.map((item) => (
            <Cards item={item} key={item.id} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
