'use client';
import { useState } from "react";
import Link from 'next/link';
import Logo from './Logo';
import NavMenuLink from './NavMenuLink';
import ContactButton from './ContactButton';

export default function Nav () {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    return (
      <div className="">
        <div className="px-4 py-6">
          <div className="relative flex items-center justify-between">
            <Link
              href="/"
              aria-label="Awaken Yoga Studio"
              title="Awaken Yoga Studio"
              className="inline-flex items-center"
            >
              <Logo/>
              <span className="logo-styling">
                Awaken Yoga Studio
              </span>
            </Link>
            <ul className="flex items-center">
              <NavMenuLink 
              link="/#about"
              label="About"
              title="About"
              name="About"
              />
              <NavMenuLink 
              link="/#classes"
              aria-label="Classes"
              title="Classes"
              name="Classes"
              />
              <NavMenuLink 
              link="/#pricing"
              aria-label="Pricing"
              title="Pricing"
              name="Pricing"
              />
            </ul>
            <ul className="items-center bg-accent rounded">
            <ContactButton/>
            </ul>
            <div className="md:hidden">
              <button
                aria-label="Open Menu"
                title="Open Menu"
                className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                onClick={() => setIsMenuOpen(true)}
              >
                <svg className="w-5 text-slate-900" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                  />
                </svg>
              </button>
              {isMenuOpen && (
                <div className="absolute top-0 left-0 w-full">
                  <div className="">
                    <div className="flex items-center justify-between">
                      <div>
                        <Link
                          href="/"
                          aria-label="Awaken Yoga Studio"
                          title="Awaken Yoga Studio"
                          className="inline-flex items-center"
                        >
                        <Logo/>
                          <span className="logo-styling">
                            Awaken Yoga Studio
                          </span>
                        </Link>
                      </div>
                      <div>
                        <button
                          aria-label="Close Menu"
                          title="Close Menu"
                          className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <svg className="w-5 text-slate-900" viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <nav>
                      <ul className="space-y-4">
                      <NavMenuLink 
                        link="/#about"
                        label="About"
                        title="About"
                        name="About"
                        />
                        <NavMenuLink 
                        link="/#classes"
                        aria-label="Classes"
                        title="Classes"
                        name="Classes"
                        />
                        <NavMenuLink 
                        link="/#pricing"
                        aria-label="Pricing"
                        title="Pricing"
                        name="Pricing"
                        />
                        <ContactButton/>
                      </ul>
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };