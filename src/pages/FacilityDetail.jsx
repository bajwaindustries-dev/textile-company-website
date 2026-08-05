import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { STEPS } from "../data/constants";

export default function FacilityDetail() {
  const { slug } = useParams();
  const facility = STEPS.find((s) => s.slug === slug);

  if (!facility) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="font-serif text-2xl text-onyx mb-2">Facility Not Found</h2>
        <p className="text-stone-600 mb-6">The facility page you are looking for does not exist.</p>
        <Link
          to="/capabilities"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-mustard hover:bg-mustard-deep text-onyx hover:text-canvas font-bold transition-colors uppercase tracking-wider text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Capabilities</span>
        </Link>
      </div>
    );
  }

  const Icon = facility.icon;

  return (
    <div className="py-16 md:py-24 bg-canvas-soft min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <Link
          to="/capabilities"
          className="inline-flex items-center gap-2 text-sm font-bold text-onyx/70 hover:text-mustard-deep transition-colors mb-8 uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Capabilities</span>
        </Link>

        <div className="bg-white p-8 lg:p-14 border border-stone-200">
          <div className="w-16 h-16 bg-onyx flex items-center justify-center mb-6 text-mustard">
            <Icon className="w-8 h-8" />
          </div>

          <h1 className="font-serif text-3xl lg:text-5xl text-onyx mb-4">{facility.title}</h1>

          <p className="text-lg text-stone-600 mb-10 leading-relaxed">{facility.desc}</p>

          <h2 className="font-serif text-lg text-onyx mb-5 pt-6 border-t border-stone-200">
            Key Operational Details & Machinery
          </h2>

          <ul className="space-y-4">
            {facility.details.map((detail) => (
              <li key={detail} className="flex items-start gap-3 text-stone-700 font-medium">
                <CheckCircle2 className="w-5 h-5 text-mustard-deep shrink-0 mt-0.5" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}