import react from 'react'
import { motion } from "framer-motion";
const HeyText = () => {
    return (
       <div>
        <h3 className="text-center text-lg font-normal my-4 max-w-lg mx-auto">

Hey!
        </h3>
        <h2 className="text-center text-4xl font-normal">I'm Maggie.</h2>
        <div className='text-center text-base my-12 max-w-lg mx-auto'>
        {/* <span className="shapeHandWritting justify-items-right"> */}
        <motion.div
  className="shapeHandwriting absolute right-[-40px] top-0 w-20 h-20"
  animate={{ y: [0, -8, 0], rotate: [0, 2, 0] }}
  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
/>
        <div>Designer with front-end experience, who likes to create experiences that are impactful, meaningful and intuitive.</div>
        <div className='my-6 max-w-lg mx-auto'>I’m empathetic, a data-driver decision-maker, and a collaborative communicator who aims to design for more human and empathetic world.</div>
        {/* </span> */}
        </div>
       </div> 
    )
}
export default HeyText