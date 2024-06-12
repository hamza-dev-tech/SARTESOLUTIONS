import React, { useState } from 'react'
import './EmailBox.css'
import {LuMail} from "react-icons/lu"
import { color, motion } from "framer-motion";
import { containerVariants } from '@/src/utils/animation';
import { db } from "../../../Firebase";
import { collection, doc, setDoc } from 'firebase/firestore';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const EmailBox = () => {

  const [email, setEmail] = useState("");

  const handleSubscribe = async () => {
    if (email) {
      try {
        await setDoc(doc(collection(db, "SubscribedEmails"), email), { email });
        toast.success("You successfully subscribed to email promotions!");
        setEmail("")
      } catch (error) {
        if (error.code === "already-exists") {
          toast.error("This email is already registered!");
        } else {
          toast.error("An error occurred. Please try again.");
        }
      }
    } else {
      toast.error("Please enter a valid email address.");
    }
  };


  return (
    <>
      <motion.div
        initial={{
          width: '0.5rem',
          borderRadius: '100%'
        }}
        whileInView={{
          width: '70%',
          borderRadius: '999px',
          transition: {
            type: 'easeOut',
            duration: 1
          }
        }}
        className='emailBox'
      >
        {/* Icon */}
        <motion.div
          variants={containerVariants(0.6)}
          initial="offscreen"
          whileInView={"onscreen"}
          viewport={{
            once: true
          }}
        >
          <LuMail size={30} color='grey' />
        </motion.div>
        {/* Input */}
        <motion.input
          variants={containerVariants(0.7)}
          initial="offscreen"
          whileInView={"onscreen"}
          viewport={{
            once: true
          }}
          type='email'
          placeholder='Enter Your Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Subscribe button */}
        <motion.div
          variants={containerVariants(0.9)}
          initial="offscreen"
          whileInView={"onscreen"}
          viewport={{
            once: true
          }}
          className="subscribe"
          onClick={handleSubscribe}
        >
          Subscribe
        </motion.div>
      </motion.div>
      <ToastContainer />
    </>
  )
}

export default EmailBox
