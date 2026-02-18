import React from 'react'
import SpectaclesImg from '../../assets/spectacles/spectacles.png';
import SpectaclesPaper from "../../assets/spectacles/paper.pdf"

export default function Spectacles() {
  return (
    <div className='flex w-full h-full align-center'>
      <div className='h-screen w-[50vw] bg-black relative'>
        <div className='w-full h-full flex justify-center items-center'>
          <img
            src={SpectaclesImg}
            className='w-[30vw] z-2'></img>
        </div>
      </div>

      <div className='min-h-screen h-full w-[50vw] bg-white relative'>
        <div className='left-1/8 top-4  h-[50vh] absolute z-2 flex gap-4'>
            <div className='w-[15vw]'>
              <h1 className='font-inter font-bold uppercase text-lg'>Order Up!</h1>
              <h1 className='font-inter text-m'>Henry Li</h1>
              <h1 className='font-inter italic text-xs'>Produced by Snapchat Spectacles</h1>
            </div>
          </div>

        <div className='left-1/5 top-1/6 h-[50vh] absolute z-2 flex gap-4'>
          <div className='w-[35vw]'>
            <h1 className='font-inter italic text-sm'>Not another “new way to see the world,”—just your eyes and your Spectacles, with see through lenses that always keep you connected to the people and things around you.</h1>
          </div>

        </div>

        <div className='left-1/8 top-1/2 -translate-y-1/3 h-[50vh] absolute z-2 flex gap-4'>
            <div className='w-[18vw]'>
              <h1 className='font-inter font-bold text-m w-[50%]'>WHAT IS ORDER UP?</h1>
              <p className='font-garamond text-s text-start mt-4'>
                Order Up! is an augmented reality game I developed in an independent work seminar
                at Princeton. The game is inspired by games such as Overcooked!, Diner Dash, and Family Style.
              </p>
              <p className='font-garamond text-s text-start mt-4'>The goal of this seminar was to study the use of an augmented reality application in a colocated, social environment.</p>
            </div>
          </div>

        <div className='right-1/8 top-1/2 -translate-y-1/3 h-[50vh] absolute z-2 flex'>
          <div className='w-[18vw]'>
            <h1 className='font-inter font-bold uppercase text-m'>What was the development process like?</h1>
            <p className='font-garamond text-s text-start mt-4'>Lens Studio was the main method to develop, which was a bit difficult and different compared to Unity. There were a lot more factors to consider like how the Spectacles experience would be, performance, and taking that physical space into account.</p>
            <a className='font-garamond text-s text-start mt-4 text-decoration-line: underline' href={SpectaclesPaper}>Research Paper</a>
          </div>
        </div>
        <div className='w-[10px] bg-black h-[2px] absolute bottom-10 left-1/2 -translate-y-1/2'>
        </div>
      </div>
    </div>

  )
}