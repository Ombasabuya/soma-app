import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
function Home() {
  return (
    <>
      <Navbar />
      <div
        className="relative bg-contain bg-no-repeat bg-[url('https://trello.com/1/cards/6354e86e18ab1a02e0045e46/attachments/6354f463c9746200bd5a1544/download/pairjpg')]"
        // style={{
        //   backgroundRepeat: "no-repeat",
        //   backgroundImage: `url('https://trello.com/1/cards/6354e86e18ab1a02e0045e46/attachments/6354f463c9746200bd5a1544/download/pairjpg')`,
        // }}
      >
        {/* <div className="w-full" style={{ backgroundImage: `url('https://trello.com/1/cards/6354e86e18ab1a02e0045e46/attachments/6354f463c9746200bd5a1544/download/pairjpg')`, }} >
        <h1 className="text-center pt-8 text-4xl">Automatic student pairing</h1>
        <div className='bg-[#EDF4F9]  w-1/5 pl-8  ml-96 mt-44 '>
          <p>Putting students into random <br></br> pairings takes FOREVER. <br></br> Automatic pairing app is here to save you hours each week! Providing a fun, free, and easy way to create student study pairs.</p>
        </div> */}
        <h1 className="p-8 ml-12 text-4xl font-bold text-[#1D6697]">
          Automatic Pairing
        </h1>
        <div className="flex">
          <div className="p-36 text-2xl w-6/12">
            <h2 className="text-black bg-white border-[#1D6697] border-4 p-4 w-4/5 font-medium rounded-lg shadow-lg text-centre">
              Putting students into learning pairs
              It allows you to automatically put people into pairs and keep
              track of the pairs at just a click of a button. <br></br>
              This gives efficiency in dealing with large number <br></br>
              of people.
            </h2>
          </div>
        </div>


        <div className="contact mt-20">
          <div className="background">
            <div
              style={{
                backgroundImage: `url('https://images.pexels.com/photos/5212350/pexels-photo-5212350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
              }}
            >
              <div className="mx-40">
                <h1 className="text-6xl pb-8 pt-4">Contact us </h1>
                <h3 className="text-2xl pb-4">
                  would like to hear from you
                </h3>
                <div className="bg-[#EDF4F9] border-2 border-[#1D6697] rounded-3xl w-2/3 ">
                  <div className="p-8">
                    <form>
                      <label for="fname">Full Name</label>
                      <br></br>
                      <input
                        type="text"
                        id="fname"
                        className="border-b-2 border-b-[#1D6697] shadow-lg rounded-2xl w-3/4 pl-4 pt-4 pb-4"
                        name="firstname"
                        placeholder="Full name.."
                      />
                      <br></br>
                      <label for="email">Email Address</label>
                      <br></br>
                      <input
                        type="text"
                        id="email"
                        className="border-b-2 border-b-[#1D6697] shadow-lg rounded-2xl w-3/4 pl-4 pt-4 pb-4"
                        name="email"
                        placeholder="Email Address.."
                      />
                      <br></br>
                      <label for="phone">Phone Number</label>
                      <br></br>
                      <input
                        type="text"
                        id="phone"
                        className="border-b-2 border-b-[#1D6697] shadow-lg rounded-2xl w-3/4 pl-4 pt-4 pb-4"
                        name="phone "
                        placeholder="Phone Number.."
                      />
                      <br></br>
                      <label for="message">Message</label>
                      <br></br>
                      <textarea
                        id="message"
                        className="border-b-2 border-b-[#1D6697] shadow-lg rounded-2xl w-3/4 pl-4 pt-4 pb-4"
                        name="message"
                        placeholder="Write something.."
                      ></textarea>
                      <br></br>
                      <input
                        type="submit"
                        className="bg-[#1D6697] shadow-lg text-white rounded-2xl pr-4 pl-4 pt-4 pb-4 justify-center"
                        value="Send Message"
                      />
                      <br></br>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
