import React from 'react'
import Navbar from './Navbar'
import BG from "../assets/Hero-img.jpg"
import Footer from './Footer'
import ContactUs from './ContactUs'
const About = () => {
  return (
    <>
      <div className='bg-black h-full' id="#about">
        <div className='mt- text-white'>
          <div className='text-[60px] text-center'>
            ABOUT ANIME WORLD
          </div>
          <br />
          <div className='flex gap-4'>
            <div className='w-[50%] p-8'>
              Anime (Japanese: アニメ, IPA: [aꜜɲime] ⓘ) is hand-drawn and computer-generated animation originating from Japan. Outside Japan and in English, anime refers specifically to animation produced in Japan.[1] However, in Japan and Japanese, anime (a term derived from a shortening of the English word animation) describes all animated works, regardless of style or origin. Many works of animation with a similar style to Japanese animation are also produced outside Japan. Video games sometimes also feature themes and art styles that are sometimes labelled as anime.

              The earliest commercial Japanese animation dates to 1917. A characteristic art style emerged in the 1960s with the works of cartoonist Osamu Tezuka and spread in following decades, developing a large domestic audience. Anime is distributed theatrically, through television broadcasts, directly to home media, and over the Internet. In addition to original works, anime are often adaptations of Japanese comics (manga), light novels, or video games. It is classified into numerous genres targeting various broad and niche audiences.[2]

              Anime is a diverse medium with distinctive production methods that have adapted in response to emergent technologies. It combines graphic art, characterization, cinematography, and other forms of imaginative and individualistic techniques.[3] Compared to Western animation, anime production generally focuses less on movement, and more on the detail of settings and use of "camera effects", such as panning, zooming, and angle shots.[3] Diverse art styles are used, and character proportions and features can be quite varied, with a common characteristic feature being large and emotive eyes.[4]

              The anime industry consists of over 430 production companies, including major studios such as Studio Ghibli, Kyoto Animation, Sunrise, Bones, Ufotable, MAPPA, Wit Studio, CoMix Wave Films, Production I.G, and Toei Animation. Since the 1980s, the medium has also seen widespread international success with the rise of foreign dubbed, subtitled programming, and since the 2010s due to the rise of streaming services and a widening demographic embrace of anime culture, both within Japan and worldwide.[5] As of 2016, Japanese animation accounted for 60% of the world's animated television shows.[6]

              Anime is an art form, specifically animation, that includes all genres found in cinema, but it can be mistakenly classified as a genre.[7] In Japanese, the term anime is used as a blanket term to refer to all forms of animation from around the world. In English, anime (/ˈænəˌmeɪ/) is more restrictively used to denote a "Japanese-style animated film or television entertainment" or as "a style of animation created in Japan".[8]
            </div>
            <div className=''>
              <img src={BG} alt="" className='h-[400px] p-2 mt-6' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About