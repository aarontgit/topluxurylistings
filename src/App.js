import React from "react";
import "./index.css";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="bg-gray-900 text-white p-6 text-center">
        <h1 className="text-3xl font-bold">Sell Your Home Fast & Stress-Free</h1>
        <p className="mt-2 text-lg">List with confidence. No pressure, no gimmicks.</p>
      </header>

      <main className="max-w-2xl mx-auto p-6">
        <section className="bg-gray-100 rounded-2xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Get a Free Home Valuation</h2>
          <form
            action="https://script.google.com/macros/s/AKfycbxM5qdKnuTp7hn8eXcApIfy29B6EMFUHRtqPSruj34OfMfq9IOkbcCj_E-Qv10ojp4G/exec"
            method="POST"
            target="hidden_iframe"
            onSubmit={() => alert("✅ Form submitted! We’ll be in touch soon.")}
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full p-3 rounded border border-gray-300"
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Property Address"
              className="w-full p-3 rounded border border-gray-300"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="w-full p-3 rounded border border-gray-300"
              required
            />
            <textarea
              name="notes"
              placeholder="Tell us anything else (optional)"
              className="w-full p-3 rounded border border-gray-300"
            />
            <div className="flex items-center">
              <input type="checkbox" className="mr-2" required />
              <label className="text-sm text-gray-600">
                I agree to receive texts or calls from this business about selling my home.
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700 transition"
            >
              Get My Free Consultation
            </button>
            <iframe name="hidden_iframe" style={{ display: "none" }} />
          </form>
        </section>

        <section className="mt-12 text-center">
          <h3 className="text-lg font-medium mb-2">Prefer to chat?</h3>
          <p>
            Text <strong>HOME</strong> to <strong>(305) 979-1513</strong>
          </p>
        </section>
      </main>

      <footer className="mt-12 p-6 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Top Luxury Real Estate Listings. All rights reserved.
      </footer>
    </div>
  );
}
