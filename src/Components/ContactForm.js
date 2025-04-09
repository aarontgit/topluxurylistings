import React, { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    notes: "",
    consent: false,
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    const phoneRegex = /^\(?\d{3}\)?[-\s.]?\d{3}[-\s.]?\d{4}$/;
    const addressRegex = /\d+\s+([a-zA-Z]+|[a-zA-Z]+\s[a-zA-Z]+)/;

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.address.trim() || !addressRegex.test(formData.address))
      newErrors.address = "Enter a valid address.";
    if (!phoneRegex.test(formData.phone))
      newErrors.phone = "Enter a valid phone number.";
    if (!formData.consent) newErrors.consent = "Consent is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    if (!validate()) {
      e.preventDefault();
    } else {
      alert("✅ Form submitted! We’ll be in touch soon.");
    }
  };

  return (
    <section className="bg-gray-100 rounded-2xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Get a Free Home Valuation</h2>
      <form
        action="https://script.google.com/macros/s/AKfycbxM5qdKnuTp7hn8eXcApIfy29B6EMFUHRtqPSruj34OfMfq9IOkbcCj_E-Qv10ojp4G/exec"
        method="POST"
        target="hidden_iframe"
        onSubmit={handleSubmit}
        className="space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="w-full p-3 rounded border border-gray-300"
          value={formData.name}
          onChange={handleChange}
          required
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

        <input
          type="text"
          name="address"
          placeholder="Property Address"
          className="w-full p-3 rounded border border-gray-300"
          value={formData.address}
          onChange={handleChange}
          required
        />
        {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          className="w-full p-3 rounded border border-gray-300"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

        <textarea
          name="notes"
          placeholder="Tell us anything else (optional)"
          className="w-full p-3 rounded border border-gray-300"
          value={formData.notes}
          onChange={handleChange}
        />

        <div className="flex items-center">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="mr-2"
            required
          />
          <label className="text-sm text-gray-600">
            I agree to receive texts or calls from this business about selling my home.
          </label>
        </div>
        {errors.consent && <p className="text-red-500 text-sm">{errors.consent}</p>}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded font-semibold hover:bg-blue-700 transition"
        >
          Get My Free Consultation
        </button>
        <iframe name="hidden_iframe" style={{ display: "none" }} />
      </form>
    </section>
  );
}
