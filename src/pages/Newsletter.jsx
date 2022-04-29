import { useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

const Newsletter = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
  });
  const { name, email } = data;

  const handleChange = (e) =>
    setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(process.env.REACT_APP_NOCODE_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([[name, email, new Date().toLocaleString()]]),
      });
      await response.json();
      setData({ ...data, name: "", email: "" });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div classNameName="flex flex-col justify-between h-screen">
      <NavBar />
      {/* Form Start here */}
      <section className="text-gray-400  body-font">
        <div className="container px-5 py-6 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-medium text-2xl lg:text-3xl text-white">
              If you have less time or the amount of picks feels intimidating or
              hard to remember, I can send you one principle every day (based on
              my guess of what principle you might need today).
            </h1>
            <p className="leading-relaxed mt-4">
              My guess is usually right, I'm not sure how.
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0"
          >
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
              Sign Up
            </h2>
            <div className="relative mb-4">
              <label
                for="full-name"
                className="leading-7 text-sm text-gray-600"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label for="email" className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                required
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleChange}
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="text-white bg-slate-800 border-0 py-2 px-8 focus:outline-none hover:bg-slate-900 rounded text-lg">
              Subscribe
            </button>
            {/* <p className="text-xs text-gray-500 mt-3">
              Literally you probably haven't heard of them jean shorts.
            </p> */}
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Newsletter;
