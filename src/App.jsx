import React from "react";
import { BsFacebook } from "react-icons/bs";
import Card from "./components/Card";

function App() {
  return (
    <>
      <main className="max-w-[1366px]">
        <nav className="flex justify-between shadow-md items-center px-5 py-4 p-1">
          <h1 className="logo text-4xl font-medium">Siam</h1>
          <ul className="flex gap-3 items-center">
            <li className="bg-gradient-to-r shadow-md from-cyan-500 to-cyan-300 ml-5 rounded-lg px-7 cursor-pointer text-white py-[0.5rem]">
              Resume
            </li>
          </ul>
        </nav>
        <section className="p-1">
          <div className="text-center py-8 flex flex-col items-center justify-center">
            <h2 className="text-5xl md:text-6xl lg:text-8xl lg:my-3 font-extrabold text-cyan-500 py-3">
              Ohiduzzaman Siam
            </h2>
            <h2 className="text-2xl font-bold py-2 pt-1 text-gray-800">
              Developer and Designer
            </h2>
            <p className="leading-7 px-5 py-2 text-gray-500 max-w-[500px]">
              I am very easy to work with because I am good at communication. I
              always dedicate myself completely to the task for 100% job
              satisfaction.
            </p>
            <BsFacebook
              size={50}
              className="mt-2 text-blue-600 rounded-full shadow-lg cursor-pointer"
              onClick={() => {
                window.location.href =
                  "https://www.facebook.com/ohiduzzaman.siam.7";
              }}
            />
          </div>
          <div className="w-56 mx-auto rounded-full bg-gradient-to-b from-cyan-500 shadow-lg flex justify-center">
            <img
              src="https://cdn3d.iconscout.com/3d/premium/thumb/man-using-virtual-reality-5064277-4222067.png"
              alt="User Image"
            />
          </div>
        </section>
        <section className="my-6 p-2 px-4 md:text-center">
          <h1 className="text-3xl font-bold mb-3 md:mb-4 lg:mb-6">
            <span className="text-cyan-500">Services</span> that I offer:
          </h1>
          <p className="leading-6 px-2 text-gray-500 my-2 text-left md:text-center max-w-[500px] mx-auto">
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est odio
              dignissimos eos facilis atque ea consequatur voluptatibus
              aspernatur delectus error.
            </li>
          </p>
          <p className="leading-6 px-2 text-gray-500 my-2 text-left md:text-center max-w-[500px] mx-auto">
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est odio
              dignissimos eos facilis atque ea consequatur voluptatibus
              aspernatur delectus error.
            </li>
          </p>
          <p className="leading-6 px-2 text-gray-500 my-2 text-left md:text-center max-w-[500px] mx-auto">
            <li>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est odio
              dignissimos eos facilis atque ea consequatur voluptatibus
              aspernatur delectus error.
            </li>
          </p>
          <div className="cards mt-5 px-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            <Card img="/design-shapes-4119262-3420366.png" />
            <Card img="/design-shapes-4119262-3420366.png" />
            <Card img="/design-shapes-4119262-3420366.png" />
          </div>
        </section>
      </main>
      <footer className="mt-7">
        <main className="bg-gradient-to-r from-cyan-500 to-cyan-400 py-8 text-white flex flex-col justify-between items-center">
          <h2 className="text-2xl font-bold">Ohiduzzaman Siam</h2>
          <h1 className="font-bold">mdsiamss10@gmail.com</h1>
        </main>
      </footer>
    </>
  );
}

export default App;
