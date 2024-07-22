"use client"

import React from 'react'
import "./CardList.css"
import Pagination from '../pagination/Pagination'
import { motion } from "framer-motion";
import {
  
  titleVaraints,
} from "@/src/utils/animation";
import Image from "next/image";
import Link from "next/link";
import Card from '../card/Card';
const CardList = () => {
  return (
    <div className="card-wrapper">
    <div className="container">
      <div className="card-container">
        <div className="card">
        <motion.span
              initial="offscreen"
              whileInView={"onscreen"}
              variants={titleVaraints}
              className="title"
            >
              Recent Posts
            </motion.span>
            <div className="posts">
              <Card />
              <Card />
            </div>
        </div>
        <Pagination />
    </div>
    </div>
    </div>
  )
}

export default CardList
