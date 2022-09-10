import Article from "../components/article"


export default function Homepage () {
    return (
        <>
    <div className="w-full h-1/2 bg-[url('/images/iconic.jpg')] bg-center bg-no-repeat flex items-center flex-col gap-3">
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
            <h3>Humanity Endures</h3>
            <p>I'm an author! Once upon a time I was bored, and so I decided to spend the next three years of my life writing a 300,000-word science fiction book. And you know what, I don't think it <i>completely</i> sucks either! Should you have a few weeks to spare you might want to give it a read. (And to answer the inevitable question, I am actually planning another one now.)</p>
            <p>Click on the button below to see its Amazon page:</p>
            <a href="https://www.amazon.ca/Humanity-Endures-Evan-Armstrong-ebook/dp/B08CTS49SJ" target="_blank">Click me!</a>
        </Article>
        <Article><h2 className="text-white">Test</h2></Article>
        <Article><h2 className="text-white">Test</h2></Article>
    </div>
        </>)
}