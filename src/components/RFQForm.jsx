import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Upload, MessageCircle, Mail, Phone, MapPin, Send, ArrowRight } from "lucide-react";
import SectionHeading from "./ui/SectionHeading";
import { CATEGORIES } from "../data/constants";

function FormInput({ label, name, value, onChange, type = "text" }) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs font-bold text-onyx/70 mb-2 uppercase tracking-wider">
        {label}
      </label>
      <input
        id={name}
        required
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full px-1 py-3 bg-transparent border-b-2 border-stone-300 focus:outline-none focus:border-mustard text-sm transition-colors"
      />
    </div>
  );
}

function FormTextarea({ label, name, value, onChange }) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs font-bold text-onyx/70 mb-2 uppercase tracking-wider">
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        rows={4}
        className="w-full px-1 py-3 bg-transparent border-b-2 border-stone-300 focus:outline-none focus:border-mustard text-sm resize-none transition-colors"
      />
    </div>
  );
}

export default function RFQForm() {
  const [step, setStep] = useState(1);
  const totalSteps = 3;
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    product: "",
    moq: "",
    message: "",
    file: null,
  });
  const [submitted, setSubmitted] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleFile = (file) => file && setFormData({ ...formData, file });

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    if (e.dataTransfer.files[0]) handleFile(e.dataTransfer.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-canvas-soft">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <SectionHeading
          tag="Request A Quote"
          title="Start Your Sourcing Journey"
          subtitle="Tell us about your product needs and our team will respond with pricing, lead times, and MOQ options within 24 hours."
        />

        <div className="grid lg:grid-cols-5 gap-8 mt-16">
          {/* Sidebar */}
          <div className="lg:col-span-2 bg-onyx p-8 text-canvas flex flex-col justify-between">
            <div>
              <h3 className="font-serif text-2xl mb-4">Talk to Our Sourcing Team</h3>
              <p className="text-stone-400 mb-8 leading-relaxed text-sm">
                Get a response within 24 hours from our dedicated export sourcing managers.
              </p>
              <div className="space-y-4 text-sm">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-mustard shrink-0" /> export@bajwaindustries.com
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-mustard shrink-0" /> +92 300 0000000
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-mustard shrink-0" /> Faisalabad, Pakistan
                </div>
              </div>
            </div>
            <a
              href="https://wa.me/923078267545"
              target="_blank"
              rel="noreferrer"
              className="mt-10 flex items-center justify-center gap-2 bg-mustard hover:bg-mustard-deep text-onyx hover:text-canvas py-4 font-bold transition-colors text-sm uppercase tracking-wider"
            >
              <MessageCircle className="w-5 h-5" /> Talk on WhatsApp
            </a>
          </div>

          {/* Form */}
          <div className="lg:col-span-3 bg-white p-8 border border-stone-200 min-h-[480px] flex flex-col">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex-1 flex flex-col items-center justify-center text-center py-10"
              >
                <CheckCircle2 className="w-16 h-16 text-mustard-deep mb-4" />
                <h3 className="font-serif text-xl text-onyx mb-2">RFQ Submitted Successfully!</h3>
                <p className="text-stone-500 max-w-sm">
                  Thank you, {formData.name || "there"}. Our sourcing team will reach out within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setStep(1);
                    setFormData({ name: "", company: "", email: "", product: "", moq: "", message: "", file: null });
                  }}
                  className="mt-6 text-mustard-deep font-bold text-sm hover:underline uppercase tracking-wide"
                >
                  Submit another request
                </button>
              </motion.div>
            ) : (
              <>
                <div className="flex items-center gap-2 mb-8">
                  {[1, 2, 3].map((s) => (
                    <div
                      key={s}
                      className={`h-1 flex-1 transition-colors duration-300 ${
                        s <= step ? "bg-mustard" : "bg-stone-200"
                      }`}
                    />
                  ))}
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col flex-1">
                  <div className="flex-1">
                    <AnimatePresence mode="wait">
                      {step === 1 && (
                        <motion.div
                          key="s1"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-6"
                        >
                          <FormInput label="Full Name" name="name" value={formData.name} onChange={handleChange} />
                          <FormInput label="Company Name" name="company" value={formData.company} onChange={handleChange} />
                          <FormInput label="Business Email" name="email" type="email" value={formData.email} onChange={handleChange} />
                        </motion.div>
                      )}

                      {step === 2 && (
                        <motion.div
                          key="s2"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-6"
                        >
                          <div>
                            <label className="block text-xs font-bold text-onyx/70 mb-2 uppercase tracking-wider">
                              Target Product / Fabric Type
                            </label>
                            <select
                              name="product"
                              value={formData.product}
                              onChange={handleChange}
                              className="w-full px-1 py-3 bg-transparent border-b-2 border-stone-300 focus:outline-none focus:border-mustard text-sm"
                            >
                              <option value="">Select Product Category</option>
                              {CATEGORIES.map((c) => (
                                <option key={c} value={c}>
                                  {c}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-onyx/70 mb-2 uppercase tracking-wider">
                              Estimated Order Volume (MOQ)
                            </label>
                            <select
                              name="moq"
                              value={formData.moq}
                              onChange={handleChange}
                              className="w-full px-1 py-3 bg-transparent border-b-2 border-stone-300 focus:outline-none focus:border-mustard text-sm"
                            >
                              <option value="">Select Volume Range</option>
                              <option>1,000 – 5,000 pcs</option>
                              <option>5,000 – 20,000 pcs</option>
                              <option>20,000 – 50,000 pcs</option>
                              <option>50,000+ pcs</option>
                            </select>
                          </div>
                          <FormTextarea label="Message" name="message" value={formData.message} onChange={handleChange} />
                        </motion.div>
                      )}

                      {step === 3 && (
                        <motion.div
                          key="s3"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          <label className="block text-xs font-bold text-onyx/70 mb-3 uppercase tracking-wider">
                            Upload Spec Sheet / Tech Pack
                          </label>
                          <div
                            onDragOver={(e) => {
                              e.preventDefault();
                              setDragActive(true);
                            }}
                            onDragLeave={() => setDragActive(false)}
                            onDrop={handleDrop}
                            className={`border-2 border-dashed p-10 text-center transition-colors ${
                              dragActive ? "border-mustard bg-mustard/5" : "border-stone-300"
                            }`}
                          >
                            <Upload className="w-8 h-8 mx-auto text-stone-400 mb-3" />
                            <p className="text-stone-500 text-sm mb-3">
                              {formData.file ? formData.file.name : "Drag & drop your file here, or browse"}
                            </p>
                            <input
                              type="file"
                              id="file-upload"
                              className="hidden"
                              onChange={(e) => handleFile(e.target.files[0])}
                            />
                            <label
                              htmlFor="file-upload"
                              className="inline-block cursor-pointer text-mustard-deep font-bold text-sm hover:underline uppercase tracking-wide"
                            >
                              Browse Files
                            </label>
                          </div>

                          <div className="bg-canvas-soft p-4 mt-6 text-xs text-stone-600 leading-relaxed">
                            <span className="font-bold text-onyx">Review: </span>
                            {formData.name || "—"} at {formData.company || "—"} · Product: {formData.product || "—"} ·
                            MOQ: {formData.moq || "—"}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="flex justify-between mt-8 pt-4">
                    {step > 1 ? (
                      <button
                        type="button"
                        onClick={() => setStep(step - 1)}
                        className="px-6 py-3 border-2 border-onyx font-bold text-onyx hover:bg-onyx hover:text-canvas transition-colors text-xs uppercase tracking-wider"
                      >
                        Back
                      </button>
                    ) : (
                      <span />
                    )}

                    {step < totalSteps ? (
                      <button
                        type="button"
                        onClick={() => setStep(step + 1)}
                        className="px-6 py-3 bg-onyx hover:bg-mustard hover:text-onyx text-canvas font-bold flex items-center gap-2 transition-colors text-xs uppercase tracking-wider"
                      >
                        Next <ArrowRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="px-6 py-3 bg-mustard hover:bg-mustard-deep text-onyx hover:text-canvas font-bold flex items-center gap-2 transition-colors text-xs uppercase tracking-wider"
                      >
                        Submit RFQ <Send className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}