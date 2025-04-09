// src/pages/Home.js
import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import ContactForm from "../Components/ContactForm";
import ChatSection from "../Components/ChatSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header />
      <main className="max-w-2xl mx-auto p-6">
        <ContactForm />
        <ChatSection />
      </main>
      <Footer />
    </div>
  );
}
