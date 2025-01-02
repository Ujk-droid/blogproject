import React from 'react';
import Link from "next/link";
import { CiFacebook } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-white text-center pt-6 py-8">
      <div className="px-4 mx-auto max-w-screen-lg">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center sm:text-left">
          <div className="sm:col-span-2">
            <Link
              href="/"
              aria-label="Go Home"
              title="UJK Bloges"
              className="text-[#2E5077] font-serif font-bold text-3xl tracking-wide"
            >
              UJK Bloges
            </Link>
            <p className="text-[#2E5077] font-serif mt-4">Everything Related to Programming</p>
            <p className="text-[#2E5077] font-serif mt-4">UiUx ,And full stake Developer</p>
          </div>

          <div>
            <h3 className="font-bold text-xl text-[#2E5077] font-serif mb-4">Contact</h3>
            <div className="space-y-2">
              <div className="flex flex-col">
                <p className="text-sm">Mobile No:</p>
                <Link
                  href="tel:03312436713"
                  aria-label="My Mobile Number"
                  title="My mobile Number"
                  className="text-[#2E5077] hover:text-[#1c3046] transition-colors duration-300"
                >
                  03312436713
                </Link>
              </div>
              <div className="flex flex-col">
                <p className="text-sm">Email:</p>
                <Link
                  href="mailto:03312436713aa@gmail.com"
                  aria-label="Email"
                  title="Email"
                  className="text-[#2E5077] hover:text-[#1c3046] transition-colors duration-300"
                >
                  03312436713aa@gmail.com
                </Link>
              </div>
            </div>
          </div>

          <div>
            <p className="text-base font-serif font-bold tracking-wide text-[#2E5077]">
              <span>Developer</span> | <span>Speaker</span> | <span>Writer</span>
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center border-t pt-4">
          <div className="text-sm">All copyright &copy; reserved UJK</div>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <CiFacebook
              className="text-2xl text-[#4d6cc1] hover:text-[#3c538f] transition-colors duration-300"
            />
            <FaLinkedinIn
              className="text-2xl text-[#4d6cc1] hover:text-[#374f8f] transition-colors duration-300"
            />
            <FaInstagram
              className="text-2xl text-[#e73d3d] hover:text-[#823e3e] transition-colors duration-300"
            />
            <FaGithub
              className="text-2xl text-[#2E5077] hover:text-[#1c3046] transition-colors duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
