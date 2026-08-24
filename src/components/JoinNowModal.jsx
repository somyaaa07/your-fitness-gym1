import { useState } from "react";
import { createPortal } from "react-dom";
import { X, Send, Dumbbell } from "lucide-react";

const interestOptions = [
  "Basic Membership",
  "Premium Membership",
  "Ultimate Membership",
  "Personal Training",
  "Free Trial / Tour",
];

export default function JoinNowModal({ open, onClose }) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    interest: interestOptions[0],
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((f) => ({
      ...f,
      [e.target.name]: e.target.value,
    }));

    if (error) {
      setError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSubmitted(false);

    try {
      const response = await fetch(
        "https://yourfitnessclubs.com/join_now.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: form.name.trim(),
            phone: form.phone.trim(),
            email: form.email.trim(),
            interest: form.interest,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.message || "Failed to submit your enquiry."
        );
      }

      setSubmitted(true);

      setForm({
        name: "",
        phone: "",
        email: "",
        interest: interestOptions[0],
      });

      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 2500);
    } catch (error) {
      console.error("Join Now API Error:", error);

      setError(
        error.message ||
          "Something went wrong. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-surface border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full border border-white/15 text-body hover:border-primary hover:text-primary transition-colors duration-300"
        >
          <X size={18} />
        </button>

        {/* Icon */}
        <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/15 border border-primary/50 text-primary mb-4">
          <Dumbbell size={22} strokeWidth={1.75} />
        </div>

        {/* Heading */}
        <h2 className="font-teko text-3xl sm:text-4xl font-semibold uppercase text-heading leading-none mb-2">
          Join <span className="text-primary">Your Fitness Club</span>
        </h2>

        <p className="font-inter text-sm text-body mb-6">
          Limited slots available — upto 50% off on select
          memberships. Fill this form and our team will call you
          back.
        </p>

        {/* Success */}
        {submitted ? (
          <div className="py-8 text-center">
            <p className="text-primary font-rajdhani font-semibold text-base animate-fadeIn">
              Thank you! Our team will reach out to you shortly.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            {/* Name */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="join-name"
                className="font-rajdhani text-xs font-semibold uppercase tracking-wide text-muted"
              >
                Name
              </label>

              <input
                id="join-name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                disabled={loading}
                className="bg-black/40 border border-white/15 rounded-md px-4 py-3 text-sm text-offwhite font-inter focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
                placeholder="Your name"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="join-phone"
                className="font-rajdhani text-xs font-semibold uppercase tracking-wide text-muted"
              >
                Phone
              </label>

              <input
                id="join-phone"
                name="phone"
                type="tel"
                required
                value={form.phone}
                onChange={handleChange}
                disabled={loading}
                className="bg-black/40 border border-white/15 rounded-md px-4 py-3 text-sm text-offwhite font-inter focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
                placeholder="+91 12345 67890"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="join-email"
                className="font-rajdhani text-xs font-semibold uppercase tracking-wide text-muted"
              >
                Email
              </label>

              <input
                id="join-email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                disabled={loading}
                className="bg-black/40 border border-white/15 rounded-md px-4 py-3 text-sm text-offwhite font-inter focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
                placeholder="you@example.com"
              />
            </div>

            {/* Interest */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="join-interest"
                className="font-rajdhani text-xs font-semibold uppercase tracking-wide text-muted"
              >
                I'm interested in
              </label>

              <select
                id="join-interest"
                name="interest"
                value={form.interest}
                onChange={handleChange}
                disabled={loading}
                className="bg-black/40 border border-white/15 rounded-md px-4 py-3 text-sm text-offwhite font-inter focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
              >
                {interestOptions.map((opt) => (
                  <option
                    key={opt}
                    value={opt}
                    className="bg-surface"
                  >
                    {opt}
                  </option>
                ))}
              </select>
            </div>

            {/* Error */}
            {error && (
              <p className="text-red-400 font-inter text-sm text-center">
                {error}
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="btn-primary justify-center group mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Submitting..." : "Submit"}

              {!loading && (
                <Send
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              )}
            </button>

            {/* Call */}
            <p className="font-inter text-[11px] text-muted text-center">
              Or call us directly at{" "}
              <a
                href="tel:+918750002845"
                className="text-primary hover:underline"
              >
                +918750002845
              </a>
            </p>
          </form>
        )}
      </div>
    </div>,
    document.body
  );
}