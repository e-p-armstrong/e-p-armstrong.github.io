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
                <video className="w-full h-[80vh] object-fit hidden md:block" src="video/gh_video_typo_fix.mp4" autoPlay={true} muted loop/>
                <img src="./iconic.jpg" className="w-full h-[80vh] object-cover md:hidden" alt="Artist's impression of the central bulge of the Milky Way" />
                <div className="absolute -translate-x-1/2 top-1/2 left-1/2 z-10 text-white text-center text-5xl font-semibold bg-black bg-opacity-30 p-3">
                    Hacker. AI Developer. Author.
                </div>
            </div>
        <div className="w-full h-fit p-5 bg-neutral-900 dark:bg-zinc-700 bg-center bg-no-repeat flex items-center flex-col gap-3 shadow-lg">
            <h3 className="text-white  font-bold lg:text-xl md:text-lg sm:text-base w-fit">Here you can look at what I've done so far.</h3>
        </div>
        {/* Grid goes below this, with portfolio including "I worked at leanpub!" and "I did a bunch of codecademy!" */}
        <div className="grid grid-flow-row md:grid-cols-3 grid-cols-1 p-6 gap-5">
            <Article className="relative">
                <Para className="text-xl font-semibold">
                    AI Projects
                </Para>
                <Para>
                I've been getting better at programming for years now, but what I'm most proud of is that in the last 12 months, I've gotten really good at AI. In addition to my growing number of practical, self-initiated projects in the field, I've also completed a good number of online courses on the subject, ranging from the theoretical (Imperial College Linear Algebra Course), to the practical (Coursera Machine Learning Specialization). Right now, I'm working on fine-tuning Llama 2 (the open-source competitor to GPT) to match the writing style/tone of fictional characters, and even real people.
                </Para>
                <Para>
                    Click the button below to see my Hugging Face account! (Hugging Face is basically GitHub for AI models)
                </Para>
                <br />
                <br />
                <LinkButton href="https://huggingface.co/Heralax" target="_blank" className="absolute bottom-3">Click me!</LinkButton>
            </Article>
            <Article className="relative">
                <Para className="text-xl font-semibold">Programming Job Experience</Para>
                <Para>This is the obligatory "I'm not a complete newb" section. I have worked for two summers at Leanpub (an online ebook self-publishing platform). The first summer was as a mainly frontend developer, and the second was as an AI specialist (and occasional fullstack developer). I've done the prompt engineering for four AI services (powered by GPT-4); I've worked with AWS lambdas and OpenAI API code; I've written more React/Remix forms than I care to remember; and I've even used GraphQL and Rails. I've worked with an excellent team, I've worked with real code, and I've already made a lot of the annoying mistakes that new employees make, so you won't have to worry about many of those if you're thinking of hiring me.</Para>
            </Article>
            <Article className="relative">
                <Para className="text-xl font-semibold">Humanity Endures</Para>
                <Para>Fun fact: I'm also the author of a 300,000-word science fiction novel. I started the project when I was very young in order to get more familiar with shipping large projects, and because I thought I was decent at writing. It took three years to complete, and despite its flaws, I'm proud of it. No, I don't have time to write a sequel right now, and yes, that means the cliffhanger will be unresolved for at least a decade. Sorry.</Para>
                <Para>Click on the button below to see its Amazon page (if you like unanswered questions):</Para>
                {/* The below brs are a hack to make the button not display inside the text on medium screen sizes */}
                <br className="md:hidden"/>
                <br className="md:hidden"/>
                <LinkButton href="https://www.amazon.ca/Humanity-Endures-Evan-Armstrong-ebook/dp/B08CTS49SJ" target="_blank" className="absolute bottom-3">Click me!</LinkButton>
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