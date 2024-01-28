import { socialMedia } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section id="contact" className="bg-dark-1 w-full h-full">
      <div className="section-container min-h-full">
        <div className="section-content_wrapper gap-3 lg:flex-row">
          <div className="flex flex-col flex-1">
            <span className="setion-title-underline mb-10">
              <span className="relative section-title text-4xl">
                Ġet în Ťouch.
              </span>
            </span>

            <p className="italic">
              Ready for a coding adventure?. Shoot me a message via email or hit
              me up on social media – can't wait to create something cool
              together!
            </p>
          </div>

          <div className="lg:w-1/3 w-full">
            <div className="flex flex-col justify-start items-end lg:items-center">
              <p className="hidden lg:flex special-font-logo text-secondary text-7xl -rotate-3">
                Shafi.
              </p>

              <p className="font-medium mt-10">
                {`\{ `}
                <Link
                  href="mailto: shafiwalsher@gmail.com"
                  target="_blank"
                  className="underline decoration-wavy decoration-gray-1"
                >
                  shafiwalsher@gmail.com
                </Link>
                {` \}`}
              </p>

              <div className="mt-3 flex gap-6">
                {socialMedia.map((item) => (
                  <Link
                    key={item.alt}
                    href={item.href}
                    className="cursor-pointer"
                    target="_blank"
                  >
                    <Image
                      key={item.alt}
                      src={item.src}
                      alt={item.alt}
                      width={36}
                      height={36}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
