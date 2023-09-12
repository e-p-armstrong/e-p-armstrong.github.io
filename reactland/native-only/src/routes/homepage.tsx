import Article from "../components/article"
import Para from "../components/para"
import LinkButton from "../components/link_button"
import Anchor from "../components/anchor"
import { Link } from "react-router-dom"

export default function Homepage () {
    return (
    <>
        {/* <div className="w-full bg-[url('/images/iconic.jpg')] bg-center bg-cover bg-no-repeat flex items-center flex-col gap-3 h-half-screen">
            <div className="w-5/6 h-1/2 bg-black/60  m-auto rounded-md flex items-center flex-wrap shadow-md">
                <h2 className="lg:text-3xl md:text-2xl sm:text-2xl text-xl text-white  mx-auto lg:grow-0 lg:shrink-0 w-3/4 h-fit text-center font-semibold">Author, Programmer, Aspiring World-Conquerer</h2>
            </div>
        </div> */}
        <div className="w-full h-[80vh] bg-black/80 relative shadow-xl "> {/* Tints the video */}
                <video className="w-full h-[80vh] object-cover hidden md:block" src="video/gh_video_text_centered.mp4" autoPlay={true} muted loop/> {/* Test image curtesy of Video by kinchan_kinchan from https://pixabay.com//?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=video&amp;utm_content=103888" Pixabay */}
                <img src="./iconic.jpg" className="w-full h-[80vh] object-cover md:hidden" alt="Artist's impression of the central bulge of the Milky Way" />
                <div className="absolute -translate-x-1/2 top-1/2 left-1/2 z-10 text-white text-center text-5xl font-semibold bg-black bg-opacity-30 p-3">
                    Hacker. Machine Learner. Author.
                </div>
            </div>
        <div className="w-full h-fit p-5 bg-neutral-900 dark:bg-zinc-700 bg-center bg-no-repeat flex items-center flex-col gap-3 shadow-lg">
            <h3 className="text-white  font-bold lg:text-xl md:text-lg sm:text-base w-fit">Here, you can look at what I've done so far.</h3>
        </div>
        {/* Grid goes below this, with portfolio including "I worked at leanpub!" and "I did a bunch of codecademy!" */}
        <div className="grid grid-flow-row md:grid-cols-3 grid-cols-1 p-6 gap-5">
            <Article className="relative">
                <Para className="text-xl font-semibold">Humanity Endures</Para>
                <Para>I'm an author! Once upon a time I was bored, and so I decided to spend the next three years of my life writing a 300,000-word science fiction book. And you know what, I don't think it <i>completely</i> sucks either! Should you have a few weeks to spare you might want to give it a read. (And to answer the inevitable question, I am actually planning another one now. It will take a while though.)</Para>
                <Para>Click on the button below to see its Amazon page:</Para>
                {/* The below brs are a hack to make the button not display inside the text on medium screen sizes */}
                <br className="md:hidden"/>
                <br className="md:hidden"/>
                <LinkButton href="https://www.amazon.ca/Humanity-Endures-Evan-Armstrong-ebook/dp/B08CTS49SJ" target="_blank" className="absolute bottom-3">Click me!</LinkButton>
            </Article>
            <Article className="relative">
                <Para className="text-xl font-semibold">Programming Internship</Para>
                <Para>I have practical experience. Beyond just learning how to code with various online tools and offline books, I have worked for over a month writing production React/Remix, GraphQL, and Ruby code for Leanpub, a site which makes it easier for authors to self-publish books. I was assigned to build the new author app for the next version of the site. Over the course of my work term I wrote thousands of lines of production code, merged dozens of PRs, and collaborated with an excellent team in building a real-world product.</Para>

                <Para>(disclaimer: Leanpub is my Dad's company, but connections or not, I definitely pulled my weight and earned my keep)</Para>
            </Article>
            <Article className="relative">
                <Para className="text-xl font-semibold">
                    Coding Projects
                </Para>
                <Para>
                    I've been learning to code on-and-off for much of my life, and I've been truly committed to it ever since I finished my book. From learning some Haskell (by completing roughly half of the <Anchor href="https://haskellbook.com/">Haskellbook</Anchor>) to Python with <Anchor href="https://learnpythonthehardway.org/python3/">Learn Python the Hard Way</Anchor> to Codecademy's "Full Stack Engineer" course, I've a fair bit of educational stuff. And the moment I learned how to GitHub I started putting everything I made there. Right now most of the projects are metaphorical peanuts, but there are a few cool things, like a React app that uses the Spotify API to build playlists. And as time goes on, I will build more things.
                </Para>
                <Para>
                    Right now, most things are either small functions that I quickly hacked together to answer real-world questions, or stuff I built after being prompted to do so by various code books or courses.
                </Para>
                <Para>
                    Click the button below to see my GitHub!
                </Para>
                <br />
                <br />
                <LinkButton href="https://github.com/e-p-armstrong" target="_blank" className="absolute bottom-3">Click me!</LinkButton>
            </Article>
        </div>
        <br />
        {/* <Article className="mt-6 w-11/12 mx-auto">
            <Para className="text-2xl text-center font-semibold">The Distinguished Individual of the [Arbitrary Timeframe]</Para>
            <div className="text-center mb-12">
                <hr className="inline-block w-1/12 pb-1 mr-2 dark:border-white border-black"/>
                <Para className="inline">Where I pick a badass of the world and honor them in my corner of the internet</Para>
                <hr className="inline-block w-1/12 pb-1 ml-2 dark:border-white border-black"/>
            </div>
            <div>

            </div>
            <img src="./queenie.jpg" alt="The Late Queen of England, Elizabeth II" className="shadow-md rounded-md mx-auto" />
            <Para className="text-center mx-auto w-fit font-semibold text-xl mt-2">Elizabeth II. God Save the Queen.</Para>
        </Article> */}
        <br />
        <br />
    </>)
}