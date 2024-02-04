import Head from 'next/head'
import Link from 'next/link'
import ProjectCard from '@/components/ProjectCard'
import NavBar from '@/components/NavBar'
import Card from '@/components/Card'
import TopBar from '@/components/TopBar'
import ImageCarousel from '@/components/ImageCarousel'
import { FadeInBottom } from '@/components/FadeInBottom'
import Contact from '@/components/Contact'
import ArrowInCircle from '@/components/arrow'
// import { IOptions, RecursivePartial } from 'tsparticles';
// import ParticlesParams from '../assets/particlesjs-config.json';
// import Particles from 'react-particles-js';



const images = [
  '/Kai.jpg',
  '/cocoon-app.png',
  '/cocoon.png',
  // Add more image paths
];


export default function Home() {
  return (
    <>
      {/* <Particles
        className="position-absolute width-100% height-100%"
        params={ParticlesParams as RecursivePartial<IOptions>}
      /> */}
      <Head>
        <title>Kai's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopBar />
      <NavBar />
      <div className="container mx-auto px-4">
        {/* <div className="bg-white w-100%">
          <ImageCarousel images={images} />
        </div> */}
      </div>
      <main className="bg-white min-h-screen p-8">
        <section className="text-center">
          <div
            className="circle bg-white rounded-full h-64 w-64 block mx-auto mb-8 animate-rotate-y"
            style={{ backgroundImage: `url('/Kai.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          ></div>
          <h1 className="text-5xl font-bold  mb-20 text-[#062438]">Hello! This is Kai!</h1>
        </section>

        <div className="flex justify-center items-center animate-bounce animate-infinite mb-20">
        <ArrowInCircle />
      </div>

        <section className="mt-10">
          <h2 className="text-7xl font-bold mb-20 text-[#062438] animate-fade-down animate-once">Work.</h2>
          <div className="flex justify-center">
            <FadeInBottom>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
                  <Card
                  href="/cocoon"
                    title="Cocoon"
                    skill=''
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate tristique quam felis..."
                    imageUrl="/cocoonLogo.png"
                  />
                  <Card
                    href="/max"
                    title="Max Verstappen Poster"
                    skill=''
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate tristique quam felis..."
                    imageUrl="/MaxF1.png"
                  />
                  <Card
                  href='/cocoon'
                    title="Cocoon"
                    skill=''
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate tristique quam felis..."
                    imageUrl="/cocoonLogo.png"
                  />
                </div>
            </FadeInBottom>
          </div>

          <div className="mt-20 text-center">
            <Link href="/work">
              <span className="text-indigo-600 hover:text-indigo-900 cursor-pointer">See more</span>
            </Link>
          </div>
        </section>


        <section className="mt-20">
          <h2 className="text-7xl font-bold mb-20 text-[#062438] animate-fade-down animate-once">Case Study.</h2>
          <div className="flex justify-center">
            <FadeInBottom>
              <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
                <Card
                href='/cocoon'
                  title="Cocoon"
                  skill=''
                  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate tristique quam felis..."
                  imageUrl="/cocoon.png"
                />
              </div>
            </FadeInBottom>
          </div>
        </section>

        <section className="mt-32">
          <FadeInBottom>
            <h2 className="text-7xl font-bold mb-6 text-[#062438]">Contact.</h2>
          </FadeInBottom>
          <Contact />
        </section>

      </main>

      <footer className="bg-[#062438] text-center p-6">
        <p className="text-gray-400">© 2024 Kai's Portfolio</p>
      </footer>
    </>
  )
}



