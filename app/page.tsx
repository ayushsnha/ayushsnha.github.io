/* eslint-disable @next/next/no-img-element */

const techStakList = [
  {
    name: 'HTML5',
    svg: 'html.svg'
  },
  {
    name: 'CSS3',
    svg: 'css.svg'
  },
  {
    name: 'JavaScript',
    svg: 'js.svg'
  },
  {
    name: 'ReactJS',
    svg: 'react.svg'
  },
  {
    name: 'NextJS',
    svg: 'next.svg'
  },
  {
    name: 'React Native',
    svg: 'react-native.svg'
  },
  {
    name: 'NodeJS',
    svg: 'node.svg'
  },
  {
    name: 'ExpressJS',
    svg: 'express.svg'
  },
  {
    name: 'Redux',
    svg: 'redux.svg'
  },
  {
    name: 'Styled Components',
    svg: 'styled-components.svg'
  },
  {
    name: 'Tailwind',
    svg: 'tailwind.svg'
  },
  {
    name: 'Webpack',
    svg: 'webpack.svg'
  },
  {
    name: 'Git',
    svg: 'git.svg'
  },
]

interface techStakListProp {
  name: string;
  svg: string;
}

const renderList = ({ name, svg }: techStakListProp) => (
  <li className="logoli fill-animation" key={name}>
    <abbr title={name}>
      <img className="w-12 h-12" src={`/assets/icons/${svg}`} alt={name} />
    </abbr>
  </li>
)

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-center min-h-[100vh] pt-[6rem] md:pt-[11rem] pb-[2rem] bg-[#F9F9F9]" id="home">
        <div className="px-6">
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center justify-between gap-5 md:gap-[12rem] md:flex-row-reverse">
              <div className="image"></div>
              <div className="flex flex-col items-left justify-center">
                <h1 className="text-4xl font-bold text-gray-800">Hi<span role="img" aria-label="wave">👋🏻</span>,  I&apos;m Ayush Kumar Sinha</h1>
                <p className="text-2xl mt-4 text-gray-600 text-left max-w-lg">A passionate Frontend Developer specializing in ReactJS, React Native, and Next.js.</p>
                <p className="text-xl mt-12 text-[#6C63FF] font-semibold text-center max-w-lg">Based in Ranchi, India 🇮🇳, I&apos;m dedicated to crafting exceptional digital experiences that leave a lasting impact.</p>
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
          <div className="mt-[4rem] md:mt-[8rem] flex flex-col items-center md:flex-row">
            <span className="text-xl text-gray-600 border-b-2 mb-[2rem] border-[#6C63FF] md:mb-[0rem] md:border-b-0 md:border-r-2 md:mr-[3rem] md:pr-8">Tech Stack</span>
            <div className="logoul">
              <ul className="flex justify-center gap-[1rem] flex-wrap">
                {techStakList.map(renderList)}
              </ul>
            </div>
          </div>
        </div>
      </section >
      <section className="px-[2rem] md:px-[7rem] min-h-[60vh] flex flex-col justify-center pb-[2rem]" id="about">
        <div className="flex justify-center">
          <h2 className="text-center border-[#6C63FF] border-b-2 text-xl uppercase w-fit mt-6">About Me</h2>
        </div>
        <div className="flex flex-col h-[100%] items-center justify-center mt-6">
          <div className="flex flex-col items-center gap-4 md:gap-[12rem] md:flex-row">
            <div className="aboutImage w-[30%] min-w-[30%] mt-3"></div>
            <div className="max-w-[80%] md:max-w-[60%]">
              <p className="w-[100%] md:max-w-[80%] text-lg text-gray-600 text-left">
                A Passionate Frontend Developer specializing in ReactJS, React Native, and Next.js with extensive experience in building dynamic and responsive web applications.
                I excel at creating seamless user experiences with modern design principles. With a good foundation in Node.js and MongoDB as well, I am committed to delivering high-quality, performant solutions.
                Let&apos;s <span className="text-hover hover:underline"><a href="#contact">collaborate</a></span> and bring your ideas to life with innovative, user-centric web development.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="md:px-[7rem] px-[2rem]  min-h-[40vh] flex flex-col justify-start bg-[#F9F9F9] pb-[2rem]" id="contact">
        <div className="flex justify-start">
          <h2 className="text-center border-[#6C63FF] border-b-2 text-xl uppercase w-fit mt-6">Contact Me 📞</h2>
        </div>
        <div className="flex flex-col md:flex-row h-[100%] items-center mt-6 gap-[4rem]">
          <div className="flex flex-col w-[100%]">
            <h5 className="text-xl font-semibold">Email</h5>
            <div className="flex items-center flex-col md:flex-row">
              <div className="mail"></div>
              <p className="text-lg text-gray-600 hover:text-hover"><a href="mailto:ayushkumarsinha.work@gmail.com">ayushkumarsinha.work@gmail.com</a></p>
            </div>
          </div>
          <div className="flex flex-col items-start w-[100%]">
            <h5 className="text-xl font-semibold">Location</h5>
            <div className="flex flex-nowrap items-center">
              <div className="location"></div>
              <p className="text-lg text-gray-600 hover:text-hover">Ranchi, India🇮🇳</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
