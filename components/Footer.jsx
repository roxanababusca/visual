import Link from 'next/link';
import Socials from '../components/Socials';
import Logo from '../components/Logo';
import FooterContacts from './FooterContacts';

export default function Footer () {
    return (
      <div className="bg-gray-200">
        <div className="mb-8">
          <div className="pb-8">
            <Link
              href="/"
              role="link"
              aria-label="Go home"
              title="Awaken Yoga Studio"
              className="inline-flex items-center"
            >
            <Logo/>
              <h2 className="logo-styling">
                Awaken Yoga Studio
              </h2>
            </Link>
            <p className="text-sm md:text-base text-slate-800">
              Join our classes and get to meet our beautiful community of yogis.
            </p>
          </div>
          <div className="grid grid-col md:grid-cols-2">
          <div >
            <h3 className="text-xl font-bold">
              Contact us
            </h3>
            <ul>
            <FooterContacts
            name="Phone:"
            link="tel:850-123-5021"
            label="Our phone"
            title="Our phone"
            content="+971 55 777 1111"
            />
            <FooterContacts
            name="Email:"
            link="mailto:contact@awakenyogastudio.ae"
            label="Our email"
            title="Our email"
            content="info@awakenyogastudio.ae"
            />
            <FooterContacts
            name="Address:"
            link="https://www.google.com/maps"
            label="Our address"
            title="Our address"
            content="31 Lovely Street, JLT, Dubai"
            />
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3 text-left">
              Social
            </h3>
            <div className="flex items-center space-x-4">
                <Socials
                link="/"
                socialHandle="Visit our Facebook page"
                icon="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                />
                <Socials 
                link="/"
                socialHandle="Visit our Instagram page"
                icon="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                />
            </div>
            <p className="mt-4 text-sm md:text-base text-slate-800">
              Connect with us for the latest news, events, classes and promos!
            </p>
          </div>
          </div>
        </div>
        <div className="flex flex-col justify-between lg:flex-row">
          <p>
            ©Copyright 2023 devroxana. All rights reserved.
          </p>
          <ul className="flex flex-col sm:flex-row">
            <li>
              <Link
                href="/"
                className="text-sm text-slate-800 transition-colors duration-300 hover:text-accent/75"
              >
                F.A.Q
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-sm text-slate-800 transition-colors duration-300 hover:text-accent/75"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-sm text-slate-800 transition-colors duration-300 hover:text-accent/75"
              >
                Terms &amp; Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  };