import Article from "../components/article"
import Para from "../components/para"


export default function Homepage () {
    return (
    <>
        <div className="w-full bg-[url('/images/iconic.jpg')] bg-center bg-no-repeat flex items-center flex-col gap-3 h-half-screen">
            <div className="w-5/6 h-1/2 bg-black/60  m-auto rounded-md flex items-center flex-wrap border-4 border-white/20">
                <h2 className="lg:text-3xl md:text-2xl sm:text-2xl text-xl text-white  mx-auto lg:grow-0 lg:shrink-0 w-3/4 h-fit text-center font-semibold">Author, Programmer, Aspiring World-Conquerer</h2>
            </div>
        </div>
        <div className="w-full h-fit p-5 bg-black/90 bg-center bg-no-repeat flex items-center flex-col gap-3 border-b-2 border-white/20">
            <h3 className="text-white font-bold lg:text-xl md:text-lg sm:text-base w-fit">Here, you can look at what I've done so far.</h3>
        </div>
        {/* Grid goes below this, with portfolio including "I worked at leanpub!" and "I did a bunch of codecademy!" */}
        <div className="grid grid-flow-row md:grid-cols-3 grid-cols-1 p-6 gap-5">
            <Article>
                <Para className="text-xl">Humanity Endures</Para>
                <Para>I'm an author! Once upon a time I was bored, and so I decided to spend the next three years of my life writing a 300,000-word science fiction book. And you know what, I don't think it <i>completely</i> sucks either! Should you have a few weeks to spare you might want to give it a read. (And to answer the inevitable question, I am actually planning another one now. It will take a while though.)</Para>
                <Para>Click on the button below to see its Amazon page:</Para>
                <Para>
                    <a href="https://www.amazon.ca/Humanity-Endures-Evan-Armstrong-ebook/dp/B08CTS49SJ" target="_blank">Click me!</a>
                </Para>
            </Article>
            <Article>
                <Para className="text-xl">Programming Internship</Para>
                <Para>I have practical experience. Beyond just learning how to code with various online tools and offline books, I have worked for over a month writing production React/Remix, GraphQL, and Ruby code for Leanpub, a site which makes it easier for authors to self-publish books. I was assigned to build the new author app for the next version of the site. Over the course of my work term I wrote thousands of lines of production code, merged dozens of PRs, and collaborated with an excellent team in building a real-world product.</Para>

                <Para>(disclaimer: Leanpub is my Dad's company, but connections or not, I definitely pulled my weight and earned my keep)</Para>
            </Article>
            <Article><h2 className="text-white">Coding Projects</h2></Article>
        </div>
    </>)
}