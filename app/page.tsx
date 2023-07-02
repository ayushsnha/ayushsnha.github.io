/* eslint-disable @next/next/no-img-element */

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[70vh] pt-[6rem] md:pt-[1rem]">
      <div className="px-6">
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-between gap-5 md:gap-[12rem] md:flex-row-reverse">
            <div className="image"></div>
            <div className="flex flex-col items-left justify-center">
              <h1 className="text-4xl font-bold text-gray-800">Hi, I&apos;m Ayush Kumar Sinha<span role="img" aria-label="wave">👋🏻</span></h1>
              <p className="text-xl mt-4 text-gray-600 text-left max-w-lg">A passionate Frontend Developer specializing in ReactJS, React Native, and Next.js.</p>
              <p className="text-lg mt-12 text-[#6C63FF] font-semibold text-center max-w-lg">Based in Ranchi, India 🇮🇳, I&apos;m dedicated to crafting exceptional digital experiences that leave a lasting impact.</p>
              <div className=" mt-5">
                <ul className="flex justify-center gap-2">
                  <li className="cursor-pointer">
                    <a href="https://www.linkedin.com/in/ayushsnha" target="_blank">
                      <img className="w-10 h-10 transition-transform transform hover:scale-110 hover:rotate-12" src="/assets/icons/linkedin.svg" alt="linkedin" />
                    </a>
                  </li>
                  <li className="cursor-pointer">
                    <a href="https://github.com/ayushsnha" target="_blank">
                      <img className="w-10 h-10 transition-transform transform hover:scale-110 hover:rotate-12" src='/assets/icons/github.svg' alt={'github'} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
