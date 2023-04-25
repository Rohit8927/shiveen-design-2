import React from "react";
import contactus from "../Images/contactus.jpg";
import p2 from "../Images/p2.jpg";
import loc from "../Images/loc.png";
import g1 from "../Images/g1.png";
import cal from "../Images/cal.png";
import twitter from "../Images/twitter.png";
import insta from "../Images/insta.jpg";
export default function AboutUs() {
  return (
    <div>
      <>
        <div className="overflow-x-hidden overflow-y-auto relative w-full py-12">
          <div
            className=" bg-[url(./Images/contactus.jpg)] bg-no-repeat bg-cover pt-[19rem] 
       pb-[350px] linear w-full "
          >
            <div className="text-white  text-center text-6xl ">
              <p className=" s1 -mt-16  ">
                GET IN{" "}
                <span className=" s1 font-serif text-emerald-300">TOUCH</span>
              </p>

              <h1 className=" s1 mt-4  font-bold font-serif p-3 ">
                Contact Us
              </h1>
              <h1>We Love to Hear from You!</h1>
            </div>
          </div>

          {/**************************************************hero section 2********************************************/}

          <section className="relative ">
            <div
              className=" w-10/12   flex flex-col flex-wrap lg:flex-row 
            justify-between items-center mx-auto mt-12 "
            >
              {/****image wala part* **8*/}
              <div>
                <img src={p2} className="h-[30rem]  rounded-md w-[25rem] " />
              </div>

              {/******8beech wala part****/}
              <div className="ml-8 space-y-8 mt-2 border-solid border-2 rounded-md border-slate-200 h-[30rem] w-[22rem]">
                <h1 className="text-2xl pt-2 ml-4 font-semibold font-serif ">
                  Let's Discuss About Your Spaces!
                </h1>
                <p className=" ml-4 ">
                  A descriptive paragraph that tells <br /> clients how good you
                  are and proves that you are the <br /> best choice that
                  they’ve made. This paragraph <br /> is also for those who are
                  looking out for a reliable interior design firm.
                </p>

                {/* keypoints */}
                <ul className="space-y-2 ml-4 ">
                  <li className="font-mullish text-black flex space-x-2 ">
                    <svg
                      class="h-7 w-7 text-green-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                    <span className="text-xl font-serif">
                      Free Consultation
                    </span>
                  </li>
                  <li className="font-mullish text-black flex space-x-2">
                    <svg
                      class="h-7 w-7 text-green-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                    <span className="text-xl font-serif">
                      Budget Quotations
                    </span>
                  </li>
                  <li className="font-mullish text-black flex space-x-2">
                    <svg
                      class="h-7 w-7 text-green-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                    <span className="text-xl font-serif">
                      Latest Technologies
                    </span>
                  </li>
                  <li className="font-mullish text-black flex space-x-2">
                    <svg
                      class="h-7 w-7 text-green-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                    <span className="text-xl font-serif">
                      Eco Friendly Constructions
                    </span>
                  </li>
                </ul>
              </div>

              {/*****8forum wala part*******8*/}
              <div className=" flex justify-center items-center mb-5 w-[25rem] mt-12  ">
                <div>
                  <form className="row g-3">
                    <div className="col-12">
                      <input
                        type="email"
                        className="form-control"
                        id="inputEmail4"
                        placeholder="Email"
                      />
                    </div>

                    <div className="col-12">
                      <input
                        type="text"
                        className="form-control"
                        id="input"
                        placeholder="Name"
                      />
                    </div>

                    <div className="col-12">
                      <input
                        type="text"
                        className="form-control"
                        id="inputAddress"
                        placeholder="Phone No."
                      />
                    </div>

                    <div className="col-12  ">
                      <textarea
                        id="inputCity"
                        className="form-control h-64"
                        name="wpforms[fields][2]"
                        placeholder="Message"
                        required=""
                      ></textarea>
                    </div>

                    <div className="col-12 ">
                      <button
                        type="submit"
                        class="btn btn-secondary btn-lg bg-black  "
                      >
                        {" "}
                        <span className="text-white "> Submit</span>{" "}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
               {/* end form wala part */}
          </section>
       

          {/* contact us  */}

          <section className="relative">
            <div className=" w-10/12   flex flex-col lg:flex-row   items-center mx-auto mt-28 ">
              {/* left */}
              <div
                className="space-y-3
"
              >
                <h1 className="font-bold font-serif  text-5xl text-green-500 drop-shadow-md space-y-2">
                  Contact Details
                </h1>
              </div>
              {/* right icons */}
            </div>
          </section>


                {/***************************************cards***************************/}
          <section className="relative">
            <div className="    flex flex-col lg:flex-row space-y-4 justify-between items-center mx-auto mt-20 font-serif ">
              {/* card 1 */}
              <div className="card w-[25rem] h-[15rem]  justify-between  drop-shadow-md hover:drop-shadow-xl relative cursor-pointer mx-auto mt-3  ">
                <img
                  src={cal}
                  className="h-9 w-9 mt-6 text-center ml-6 mx-auto"
                />
                <div className="card-body   mx-auto text-center">
                  <h5 className="card-title font-bold text-2xl">Call Us</h5>
                  <p className="card-text  text-2xl">100 </p>
                </div>
              </div>

              {/* card2 */}
              <div className="card  w-[25rem] h-[15rem]  drop-shadow-md hover:drop-shadow-xl relative cursor-pointer ">
                <img src={g1} className="h-9 w-9 mt-6    mx-auto" alt="..." />
                <div className="card-body   mx-auto mt-4 ">
                  <h5 className="card-title font-extrabold text-2xl  text-center">
                    Gmail us{" "}
                  </h5>
                  <p className="card-text ml-11  font-bold  ">
                    rohitrajput08927@gmail.com
                  </p>
                </div>
              </div>

              {/* crad3 */}
              <div className="card w-[25rem] h-[15rem]   ml-5 rounded  drop-shadow-md hover:drop-shadow-xl relative cursor-pointer">
                <img src={loc} className="h-9 w-9 mt-6    mx-auto " alt="..." />
                <div className="card-body mx-auto text-center ">
                  <h5 className="card-title font-extrabold text-2xl  ">
                    ADDRESS
                  </h5>
                  <p className="card-text text-xl font-bold ">
                    IIT Seelampur <br /> Shastri park Zero pusta <br /> Near
                    Kashmiri Gate{" "}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    </div>
  );
}
