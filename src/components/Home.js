import React from 'react'
import HeroImage from "../assets/heroImage.jpg";
import { Link } from 'react-scroll'


const Home = () => {
    return (
        <div name="home" className=' px-6 md:px-0 h-full w-full bg-gradient-to-b from-black to-gray-800 text-white md:h-screen'>

            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>

                <div className='flex flex-col justify-center h-full my-5'>
                    <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a Full Stack Web Developer</h2>
                    <p className=' text-gray-500 py-4 max-w-md '>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus error reprehenderit obcaecati id sunt, iusto incidunt sint ad eos accusantium, soluta minima. Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, consequatur unde.
                    </p>
                    <div>
                        <button className='px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white w-fit rounded-md flex items-center my-2 '>
                            <Link to="portfolio" smooth duration={500}> Portfolio</Link>

                        </button>
                    </div>
                </div>
                <div>
                    <img src={HeroImage} alt="myPicture" className="rounded-2xl mx-auto w-3/4 md:w-full " />
                </div>
            </div>
        </div>
    )
}

export default Home