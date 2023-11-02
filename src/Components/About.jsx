
import img from '../assets/profile.png'

const About = () => {
  return (
  
      
    <div id='About' className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg-text-start flex lg:flex-row 
      flex-col justify-between lg:gap-28 items-center">

<img
        data-aos="fade-up"
        src={img}
        width={290}
        height={290}
        className="rounded border-2 p-1 border-x-blue-400 
        img_glow"
        alt=""
      />

      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start
       items-center text-white">
        <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-8 leading-normal text-blue-500 uppercase">
           About me 
        </h1>
        <p data-aos="fade-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, amet!
          Quam repellat tempora nostrum nulla sint maxime quae ex eos rem minima
          magni voluptate odio dolor alias, modi atque dolorum.
        </p>
        <div className="flex items-center justify-center">
          <div className="flex space-x-2">
            <button className="neno-button shadow-xl hover:shadow-blue-800/50
             text-white border-2 hover:bg-blue-800 border-blue-800 rounded-lg
             py-4 px-8 uppercase relative overflow-hidden">Resume</button>

          
          </div>
        </div>
      </div>
      
    </div>

    
     
  )
}
export default About