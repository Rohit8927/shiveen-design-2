import React from "react";
import photo1 from "../Images/photo1.jpg";
import twitter from "../Images/twitter.png";
import insta from "../Images/insta.jpg";
import contractor from "../Images/contractor.png";
export default function AboutUs() {
  return (
    <div>
      <>
        {/* mid text part */}
        <div className="overflow-x-hidden overflow-y-auto relative w-full">
          <div
            className=" bg-[url(./Images/bg2.jpg)] bg-no-repeat bg-cover pt-[10rem] opacity
       pb-[350px] linear   "
          >
            <div className=" text-center text-white mx-auto font-serif ">
              <h3 className="font-bold  mb-5 text-6xl mt-5 s1">
                A FEW WORDS ABOUT
              </h3>
              <div className="space-y-2">
                <h1 className="text-7xl s1 ">Our Firm</h1>
                <h2 className="font-bold text-5xl mt-4 s1">
                  Award Winning Interior Design Firm{" "}
                </h2>
              </div>
            </div>
          </div>
          {/* hero section */}
          <section className=" relative">
            <div
              className=" w-10/12 max-w-[1080px]  flex flex-col lg:flex-row 
            justify-between items-center mx-auto mt-10 py-12 flex-col-reverse "
            >
              {/* left part */}
              <div className="space-y-3 max-w-[50%]">
                <div className="space-y-1.5 mt-[3rem]">
                  <div className="font-bold text-orange-500 text-2xl">
                    INTERIOR DESIGNER.
                  </div>
                  <h2 className=" font-extrabold text-5xl">PRAVEEN KUMAR</h2>
                </div>

                <p className="">
                  Totam cillum molestie a dolore alias diamlorem corrupti.
                  Exercitationem iure. <br /> Risus maxime mollis molestias
                  exercitation nascetur non repudiandae sit <br /> voluptates
                  velit praesentium! Netus natus dicta nibh condimentum porta
                  congue platea cras lacinia pretium, <br /> explicabo qui
                  praesent duis minima hendrerit. Voluptas illum duis voluptas
                  dignissimos saepe suspendisse veritati.
                  <br /> Maxime suscipit odit nihil, adipiscing odio ipsa mollit
                  sagittis nostra egestas pariatur porttitor feugiat cras class
                  porttitor.
                </p>

                <div className="  ">
                  <span className="font-bold ">Get In Touch</span>
                  {/* icons */}
                  <div className="flex flex-row  mt-3 space-x-5 s2  h-16 w-25 rounded-md   cursor-pointer ">
                    <a href="https://twitter.com/home">
                      {" "}
                      <img
                        src={twitter}
                        className="h-10 lg:w-10   cursor-pointer bg-none drop-shadow-2xl hover:drop-shadow-xl mt-2"
                      />
                    </a>
                    <a href="https://www.instagram.com/rohit_rajput2201/">
                      {" "}
                      <img
                        src={insta}
                        className="h-10 w-10 cursor-pointer drop-shadow-2xl hover:drop-shadow-xl mt-2 "
                      />
                    </a>
                  </div>
                </div>
              </div>
              {/* right part */}
              <img
                src={photo1}
                className=" h-full w-[25rem] mr-8 rounded drop-shadow-2xl hover:drop-shadow-xl relative
                  md:max-w-[400px] lg:max-w-[600px] md:block lg:block "
              />
            </div>
          </section>
        </div>
      </>
    </div>
  );
}
