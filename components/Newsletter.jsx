'use client'
import { useState, useEffect } from 'react'; 
import Image from 'next/image';
import Heart from '../public/heart.svg';


export default function Newsletter () {
    const [ subscriberEmail, setSubscriberEmail ] = useState('');
    const [ formState, setFormState] = useState(null);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      setIsClient(true);
    }, []);

    const handleSubmit = async (e) => {
        
        e.preventDefault();     
        const form = e.target;
        const formData = new FormData(form);
      
        try {
          await fetch("/", {
            method: "POST",     
            headers: { "Content-Type": "application/x-www-form-urlencoded" },    
            body: new URLSearchParams(formData).toString(),
          });
      
          setFormState("SUCCESS");
        } catch (error) {
          setFormState("ERROR");
          console.error(error);
        }
      };

    return (
        <section className="bg-gradient-to-r from-rose to-accent grid grid-col lg:grid-cols-2">
            <div className=" max-w-2xl text-center">
            <h2>
                Stay up to date with our classes and promos
            </h2>
            <Image
            className="object-cover rounded"
            src={Heart}
            width="60"
            height="60"
            alt="heart"
            loading="lazy"
          />
            </div>
            {isClient && (
            <div className="max-w-2xl grid place-items-center">
              <p>
                  Would you like to receieve news from your favorite instructors and classes?
                  Join our mailing list for personalized updates and promos!
              </p>
              {formState === null && ( <form 
              name="signup"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
              className="flex flex-col justify-center lg:justify-start">
              <input type="hidden" name="form-name" value="signup" />
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  type="email"
                    id="email"                  
                    name="email"
                    autoComplete="email"
                    value={subscriberEmail}
                    placeholder="Your email address"
                    required={true}
                    onChange={(e) => setSubscriberEmail(e.target.value)}
                    className="w-full rounded-md border-gray-200"
                />
              </div>
                <button
                  type="submit"
                  aria-label="Sumbit"
                  title="Submit"
                  className="flex w-full items-center justify-center"
                  >
                  Sign Up
                </button>
              </form> )}
              {formState === "SUCCESS" && (
                <div>
                  <p>Subscription submitted successfully!</p>
                </div>
              )}

              {formState === "ERROR" && (
                <div>
                  <p>There was an error submitting your details. Please try again later.</p>
                </div>
              )} 
            </div>)}
        </section>
    );
}
 