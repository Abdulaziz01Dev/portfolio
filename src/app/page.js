'use client';
import 'boxicons/css/boxicons.min.css';
import Hero from "@/Layouts/Hero";
import AboutMe from "@/Layouts/AboutMe";
import "./globals.css";
import MySkills from "@/Layouts/Skills";
import React from "react";
import 'aos/dist/aos.css'       // AOS CSS

import { useEffect } from 'react'
import AOS from 'aos'

export default function Home() {
  useEffect(() => {
    AOS.init({
      // optionlarni shu yerda yozishingiz mumkin, masalan:
      duration: 1000,
    })
  }, [])

  return (
    <div>
      <Hero />
        <AboutMe />
        <MySkills />
    </div>
  );
}
