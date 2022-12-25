import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import tailwind from '../assets/tailwind.png'
import javascript from '../assets/javascript.png'
import reactjs from '../assets/reactjs.png'
import nodejs from '../assets/nodejs.png'
import expressjs from '../assets/expressjs.png'
import mongodb from '../assets/mongodb.png'
import github from '../assets/github.png'


const Experience = () => {

    const skills = [
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: tailwind,
            title: 'Tailwind',
            style: 'shadow-sky-400'
        },
        {
            id: 4,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 5,
            src: reactjs,
            title: 'ReactJS',
            style: 'shadow-sky-800'
        },
        {
            id: 6,
            src: nodejs,
            title: 'NodeJS',
            style: 'shadow-green-800'
        },
        {
            id: 7,
            src: expressjs,
            title: 'ExpressJS',
            style: 'shadow-gray-700'
        },
        {
            id: 8,
            src: mongodb,
            title: 'MongoDB',
            style: 'shadow-yellow-900'
        },
        {
            id: 9,
            src: github,
            title: 'Github',
            style: 'shadow-gray-400'
        },

    ]

    return (
        <div name='experience' className="bg-gradient-to-b from-gray-800 to-black w-full h-full  ">
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
                <div>
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">Experience</p>
                    <p className='my-6'>These are the technology I've worked with.</p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 px-12 py-8 sm:px-0 text-center ">
                    {
                        skills.map(({ id, src, title, style }) => (
                            <div key={id} className={`shadow-md rounded-lg duration-200 hover:scale-105 py-2 ${style}`} >
                                <img src={src} alt="" className="w-20 mx-auto" />
                                <p className='mt-4'>{title}</p>
                            </div>
                        ))
                    }
                </div>

            </div>

        </div >
    )
}

export default Experience