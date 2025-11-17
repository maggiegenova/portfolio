"use client";

import Image from "next/image";
import React from "react";
import linkedinLogo from '../app/images/linkedin.svg';
import githubLogo from '../app/images/github.svg';
import emailLogo from '../app/images/email.svg';


export default function Footer() {
  return (
    <footer className="items-center justify-items-center p-8 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col items-center justify-center gap-4 font-[family-name:var(--font-geist-sans)]">
        <div className="text-base font-semobold sm:text-lg">
          <span className="shapeSun">Maggie G.</span>
        </div>
        <div className="font-medium">Let&apos;s connect!</div>

        <div className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
          <a
            className="socialMediaTabsContainer"
            href="https://www.linkedin.com/in/margarita-genova/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={linkedinLogo.src} alt="LinkedIn logo" width={35} height={35} />
          </a>

          <div className="flex items-center justify-center">
            <a
              className="socialMediaTabsContainer"
              href="mailto:maggiegenova@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image aria-hidden src={emailLogo.src} alt="Email logo" width={40} height={40} />
            </a>
          </div>

          <a
            className="socialMediaTabsContainer"
            href="https://github.com/maggiegenova"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image aria-hidden src={githubLogo.src} alt="GitHub logo" width={35} height={35} />
          </a>
        </div>
      </div>
    </footer>
  );
}
