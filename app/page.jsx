'use client'
import { useState } from 'react';
import Image from 'next/image';
import Classes from '../components/Classes';
import Benefits from '../components/Benefits';
import Newsletter from '../components/Newsletter';
import GradientButton from '../components/GradientButton';
import Pricing from '../components/Pricing';
import Socials from '../components/Socials';
import CarouselThumbs from '../components/CarouselThumbs';
import ImageGallery from '../components/ImageGallery';
import Yogi1 from '../public/grid1.jpg';
import Yogi2 from '../public/grid2.jpg';
import Yogi3 from '../public/grid3.jpg';
import Yogi4 from '../public/grid4.jpg';
import Icon1 from '../public/icon1.png';
import Icon2 from '../public/icon2.png';
import Icon3 from '../public/icon3.png';
import Icon4 from '../public/icon4.png';
import Candles from '../public/candles.jpg';
import Beach from '../public/beach.jpg';

const gallery = [
  { id: 1, imgUrl: "/grid1.jpg" },
  { id: 2, imgUrl: "/grid2.jpg" },
  { id: 3, imgUrl: "/grid3.jpg" },
  { id: 4, imgUrl: "/grid4.jpg" },
];

export default function Home() {
  
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <main>
      <section className="grid grid-col xl:grid-cols-2 items-center justify-center px-0 sm:px-4">
          <div className="grid-col-1">
            <div className="max-w-2xl">
              <h1 className="text-center text-4xl font-bold tracking-tight md:text-6xl">
                A bright space that welcomes {' '}
                <span className="bg-gradient-to-r from-rose to-accent bg-clip-text text-transparent">
                your yoga 
                </span>
                {' '}practice
              </h1>
              <p className="text-base md:text-lg">
                We support your yoga journey though tailored classes that cater to any level.
                Visit us for a walk in class to see for yourself!
              </p>
            </div>
            <div className="flex items-center justify-center">
              <GradientButton />
            </div>
          </div>
        <div className="flex justify-center">
          <Image
            src={Yogi1}
            className="slide-top object-cover object-top"
            alt="woman doing yoga"
            width={200}
            height={200}
            priority
            loading="eager"
          />
             <Image
            src={Yogi2}
            className="object-cover object-top"
            alt="woman doing yoga"
            width={200}
            height={200}
            priority
            loading="eager"
          />
             <Image
            src={Yogi3}
            className="slide-bottom object-cover object-top"
            alt="woman doing yoga"
            width={200}
            height={200}
            priority
            loading="eager"
          />         
        </div>
      </section>
      <section className="flex flex-col-reverse" id="about">
        <div className="flex justify-center">
          <Image
            className="object-cover w-full rounded"
            src={Candles}
            width="600"
            heigh="650"
            alt="candles on the floor and green plant"
            loading="lazy"
          />
        </div>
        <div className="w-full flex justify-center items-center">
          <div>
            <h2 className="mb-12 text-3xl font-bold">
              Your yoga journey {' '}
              <br className="hidden md:block" />
              deserves support at every step
            </h2>
            <p>
              Our yoga studio is inclusive to various practice levels and styles. 
              You can choose between classes focused on energizing vinyasas, improved mobility for other sports, inversions play, and yin yoga.
            </p>
            <p>
            In each of these types of classes we offer accessible poses and guidance to accommodate both beginners and more advanced practitioners.
            </p>
            <p>
            Our yoga teachers are dedicated to creating nourishing classes that leave you feeling light and mindfull.
            </p>
          </div>
        </div>
      </section>
      <section className="px-4 max-w-full" id="classes">
        <div className="flex flex-col lg:flex-row">
          <h2 className="font-bold tracking-tight sm:leading-none">
            <span>
              Rejuvenating classes
              <br/>
              that feed your body & mind
            </span>
          </h2>
          <p>
            We believe that at least one of our classes will be your next favorite one.
            Explore our offering and join us at the studio to try them. 
            First class is always free of charge!
          </p>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2">
            <Classes 
            yogi={Yogi1}
            heading="Energizing vinyasa"
            description="Join us for a yoga flow consisting of poses that challenge your balance and strength to leave you feeling the most empowered self.
            This type of class aims to get you out of your mind and into your body observing the breath along the way!"
            />
             <Classes 
            yogi={Yogi2}
            heading="360 mobility"
            description="The physical, mental and spiritual practice of yoga can complement other physical disciplines.
            In this class we help you build up to a healthy level of mobility and stability in your joints so you can move injury-free in your sport of choice."
            />
            <Classes 
            yogi={Yogi3}
            heading="Inversions Play"
            description="A fun and challenging class that will help you overcome fear of inversions and teach you the importance of cultivating patience and sustained practice on and off the mat. 
            We build up gradually to forarm balances and handstands in a safe and sustainable way."
            />
             <Classes 
            yogi={Yogi4}
            heading="Yin the day away"
            description="Oftentimes our packed with activities daily schedules make it difficult to unwind in the evening, not allowing us to have a restful sleep.
            This gentle class helps you release tension in your body and mind."
            />
        </div>
        <div className="text-center pt-16">
          <GradientButton/>
        </div>
      </section>
      <Newsletter />
      <section className="px-[5%] py-[10%]">
          <div className="mb-10">
            <h2>
              Expansive breaths, present moves
            </h2>
            <p>
              We&apos;ve created this gallery to help you get a feel of our wondeful classes, and hopefully, have you in our studio for the next class. 
            </p>
          </div>
      <ImageGallery gallery={gallery} thumbsSwiper={thumbsSwiper} />
      <CarouselThumbs gallery={gallery} setThumbsSwiper={setThumbsSwiper} />
      </section>
      <section>
      <div className="flex flex-col lg:flex-row">
          <h2>
            Uplift your energy, declutter your mind
            <div className="hidden md:block h-1 ml-auto duration-300 origin-left transform bg-accent scale-x-30 group-hover:scale-x-100" />
          </h2>
          <p>
          We&apos;re here to remind you of what less than a hour&apos;s practice can do for your life and to help you stay dedicated to yourself!
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <Benefits 
        icon={Icon1}
        heading="Breathe."
        description="Learning to work with your breath, not against it, is probably the best you can do for your nervous system."
        />
        <Benefits 
        icon={Icon2}
        heading="Move."
        description="Having a consistent asana practice helps you get our of your mind and into your body, resetting energy levels."
        />
        <Benefits 
        icon={Icon3}
        heading="Meditate."
        description="Even ten minutes a day of mediation have possitive long-term effects that spill into all areas of your life."
        />
        <Benefits 
        icon={Icon4}
        heading="Expand."
        description="Yoga gives you tools to release old patterns of attachment and move into a new state of consciousness."  
        />
        </div>
      </section>
      <section className="relative flex items-center justify-center">
          <Image src="/studio.jpg" alt="Studio" width="1600" height="650" loading="lazy" className="object-cover object-center absolute w-full h-full"/>         
          <div className="absolute">
            <h2 className="text-3xl lg:text-5xl">
              We look foward to take part in your yoga journey!
            </h2>
          </div>
      </section>
      <section id="pricing">
        <div className="max-w-xl md:max-w-full">
          <div>
            <h2>
              Quality classes, affordable for everyone
            </h2>
            <p>
              We strive to find the right balance between offering you great value for your money
              while rewarding our yoga teachers for their efforts. Currently, we have two pricing options available, with more coming soon!
            </p>
          </div>
          <div className="grid grid-col lg:grid-cols-2">
            <Pricing
              heading="Single Class"
              price="89"
              benefit1="yoga mat available"
              benefit2="post-class smoothie"
              benefit3="parking available"
              benefit4="discounts for yoga items"
            />
            <Pricing
              heading="Monthly Pass"
              price="749"
              benefit1="all perks in single class"
              benefit2="10 yoga classes"
              benefit3="discounts for events"
              benefit4="access to online classes"
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col lg:flex-row">
        <div>
          <div>
            <p className="bg-rose inline-block font-semibold uppercase rounded-full">
              Brand new
            </p>
            <h2>
              Fresh start weekend {' '}
              <br className="hidden md:block" />
              outdoor yoga classes
            </h2>
            <p>
              Every Saturday, starting at 8AM, we host a special class at JBR beach followed by a vegan brunch at Bombay Bungalow.
              Keep an eye on our social media for changes in schedule or location!
            </p>
            <div className="flex flex-col">
              <div className="flex items-center">
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
            </div>
          </div>      
        </div>
        <div className="flex justify-center h-full">
          <Image
            className="object-cover rounded"
            src={Beach}
            alt="women exercising at the beach"
            width="900"
            heigh="600"
            loading="lazy"
          />
        </div>
      </section>
    </main>
  )
}
