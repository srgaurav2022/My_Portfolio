import React from 'react'

const About = () => {
    return (
        <div name="about" className='h-full w-full md:h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>
                <p className='text-xl mt-20'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique, fugit pariatur! Illo eaque nihil sit suscipit totam porro culpa nulla ipsa? Dolor praesentium similique dolorem, sint suscipit soluta consequuntur, dolorum esse excepturi maiores ut, dolores quam eius neque. Adipisci molestias, officia ex minima facere, sunt assumenda officiis natus eligendi unde asperiores nostrum labore quisquam sapiente!
                </p>
                <br />
                <p className='text-xl'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae odit dolor inventore esse quasi quam vitae expedita sunt distinctio, nobis possimus illum, eligendi voluptate voluptatum magni! Veritatis necessitatibus dolorum sit ipsam mollitia consequatur hic nihil sequi, dolores asperiores, amet ratione dignissimos nam! Fuga tempore ipsam, error fugit est at eligendi voluptate tempora inventore velit tenetur?
                </p>
            </div>
        </div>
    )
}

export default About