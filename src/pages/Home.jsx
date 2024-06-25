import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Checkin from '../components/Checkin';
import ContactThingsToDo from '../components/ContactThingsToDo';
import Hours from '../components/Hours';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
        <Navbar parent={'home'}/>
        <Hero />
        <Checkin />
        <ContactThingsToDo />
        <Hours />
        <Footer parent={'home'}/>
    </>
  );
}
