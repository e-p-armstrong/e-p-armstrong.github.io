import { useState } from "react"
import Para from "../components/para"
import Article from "../components/article"
import Button from "../components/button"
import LinkButton from "../components/link_button"


export default function CodeProjects () {
    return (
        <><br />
            <div className="grid grid-cols-1 gap-6 lg:mx-6">
                <Article className="relative">
                    <Para className="text-3xl font-semibold">Llama 2 LoRA Finetune: Amadeus</Para>
                    <Para>blah blah demo</Para>
                    <Para>I have since refactored and improved this, and it's coherent and consistent most of the time now. Find the training code here: </Para>
                    <Para>And the model files (ggml, not gguf yet) here:</Para>
                    <br /> <br />
                    <iframe className="lg:w-1/2 h-96 w-full" src="https://www.youtube.com/embed/JS8Gpsp5Dn0?si=dvXCG3FJu27ONMVY" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </Article>
                <Article className="relative">
                    <Para className="text-3xl font-semibold">BLOOMZ-3b LoRA Finetune: Document Title Writer</Para>
                    <Para>blah blah demo</Para>
                    <img src="./bloomz.jpg" alt=""  className="lg:w-1/2 w-full"/>
                </Article>
                <Article className="relative">
                    <Para className="text-3xl font-semibold">Llama 2 LoRA Finetune: Chizuru AI</Para>
                    <Para>blah blah demo</Para>
                    <Para></Para>
                    <iframe className="lg:w-1/2 h-96 w-full"  src="https://www.youtube.com/embed/wQg_KwZ9iAU?si=TVa4XPGQZjw3DR34" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </Article>
                <Article className="relative">
                    <Para className="text-3xl font-semibold">I've also done a bunch of full stack work for Leanpub</Para>
                    <Para className="text-xl">(I'm not just capable of AI)</Para>
                    <Para>But this doesn't really count as a "code example" since I can't share it—because the code belongs to Leanpub. </Para>
                    <Para>I'm just leaving this note here so that you don't think I can only do AI. I just really like AI, is all.</Para>
                    <img src="" alt="" />
                </Article>
            </div>
            <br />
                {/* <Article className="mt-6 mx-6 bg-center">
                    <div className="lg:w-3/4 lg:mx-auto bg-black/50 p-3 rounded-md">
                    <p className="text-2xl font-bold text-center mb-6 text-zinc-200">Jammming: A Full-Blown API-using React App!</p>
                        <p className="text-zinc-200">It was a normal Tuesday afternoon, and Evan was doing what he usually did in his afternoons back then: grind Codecademy. His goal, as usual, was to get 1% closer to completion that day.</p>
                        <p className="italic text-zinc-200">Then he ran into a 99-part practice project. Which demanded he use basically everything he had been learning over the past few sections.</p>
                        <p className="text-zinc-200">Not to be deterred, (I definitely did not briefly panic or anything) I sat down, named my project directory "f***ingbringit", and got to work. It was finished by 5PM Thursday. The app uses the React JavaScript library and the Spotify API to allow a user to search for songs and create playlists with them while not actually on the Spotify app. I'm really, really happy with it. Until I worked at Leanpub for a month and built actual production code, this was the coolest code thing I had done.</p>
                        <p className="text-zinc-200">Note: there may still be a bug or two to iron out (for instance, the first time you search the page might reload and do nothing, but the second and following times will work fine). Also, the default values are Humanity Endures in-jokes which are not actual songs, so don't try to add those to playlists.</p>
                        <div className="flex gap-6 w-fit mx-auto my-5">
                                <LinkButton href="https://evancanintoreact.surge.sh/" target="_blank">View on the Web</LinkButton>
                                <LinkButton href="https://github.com/e-p-armstrong/Jammming" target="_blank">GitHub Repo</LinkButton>
                        </div>
                    </div>
                </Article> */}
                <br />
                <Article className="m-6">
                    <Para className="text-2xl text-center">To see the latest in Evan Engineering, feel free to visit my GitHub Account!</Para>
                    <LinkButton href="https://github.com/e-p-armstrong" target="_blank" className="mx-auto my-6">Click me!</LinkButton>
                </Article>
                <br />
                <Para  className="mb-12 px-12 text-center text-sm font-semibold">Fun note: this site displays differently depending on whether your computer is in dark mode or not. Try switching modes!</Para>
        </>
        )
}