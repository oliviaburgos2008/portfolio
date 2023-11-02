import Aos from "aos"
import { useEffect } from "react"

const Contact = () => {
  useEffect(()=> {
    Aos.init({duration: 750})
  },[])

  return (

    <div id="Contact" className="p-4  lg:p-20 flex flex-col items-center justify-center">
      <h1 data-aos="fade-left" className="text-[52px] font-semibold mb-20 leading-normal uppercase
      text-blue-500">Contact me</h1>
      <form action="" className="flex flex-col gap-2 lg:w-1/2">
        <div className="lg:flex gap-9">
          <input className="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4 border-2 border-blue-800 b_glow text-xl text-slate-500" placeholder="Enter Your Name " type="text" />
          <input className="w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4 border-2 border-blue-800 b_glow text-xl text-slate-500" placeholder="Enter Your Email " type="text" />
        </div>
        <textarea className="w-full my-3 rounded-lg bg-slate-800 p-4 border-2 border-blue-800 b_glow text-xl text-slate-500" placeholder="Write Your Message... " name="" id="" cols="30" rows="10"></textarea>
        <button className="neno-button shadow-xl hover:shadow-blue-800/50 text-white border-2 border-blue-800 bg-blue-800 hover:bg-slate-900 rounded-lg py-4 px-8 my-6 uppercase relative  overflow-hidden b_glow text-xl text-bold" type="submit">Submit</button>
      </form>
    </div>
  )
}
export default Contact