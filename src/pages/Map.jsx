"use client";
import React from "react";

const Map = () => {
  return (
    <section className="px-10 sm:px-10 md:px-20 lg:px-32 font-funnel text-white w-full">
      <p className="text-sm font-funnel text-center pt-20 pb-10">FIND US</p>
      <hr className="border-0.5 border-white/20 w-full mb-6" />

      <div className="w-full overflow-hidden rounded-2xl border border-white/20 bg-white/5 backdrop-blur-sm">
        <div
          className="w-full h-[300px] md:h-[400px]"
          onMouseEnter={() => document.body.classList.add("cursor-auto")}
          onMouseLeave={() => document.body.classList.remove("cursor-auto")}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31081.172563393953!2d80.1939557!3d13.153153199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5264a10c856599%3A0xac3348f41097ba7f!2sVelammal%20Engineering%20College!5e0!3m2!1sen!2sin!4v1751536308530!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Velammal Engineering College"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Map;
