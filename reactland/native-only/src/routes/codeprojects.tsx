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
                    <Para className="text-3xl font-semibold">Llama 2 LoRA Finetune: MythoMakise</Para>
                    <Para>My most impressive model fine-tuning so far, this Llama 2 LoRA (trained on top of the popular Llama 2 merge, MythoMax) allows for a chatbot that authentically recreates the speaking style of a character from the narrative-heavy game "Steins;Gate". Immense work went into the dataset of this model: instead of using isolated pairs of dialogue, I made a custom algorithm to group conversations that were useful as training data; I used GPT-4 to generate "scenarios" that described each scene, to give the model context on what kind of scene it was acting in; finally, every single conversation was rewritten by GPT-4 to include characters' *actions*, without which some dialogue simply didn't make sense. All of these changes were then formatted into "character cards" to create a dataset of over 1300 high-quality training examples. All this iterative work was done under the principle that a task has to fundamentally make sense for a model to be able to do it well—a principle I believe is somewhat validated by the dramatic increase in quality each change brought.</Para>
                    <Para>You can see a demo of an alpha version of the model below, on YouTube; I have since refactored and improved the model from its state, and it's coherent and consistent most of the time now. Find the training code here: <a href="https://github.com/e-p-armstrong/amadeus" className="italic text-cyan-200 underline">https://github.com/e-p-armstrong/amadeus</a></Para>
                    <Para>The model files (ggml q4_km quants) here: <a href="https://huggingface.co/Heralax/MythoMakise-13b-quants" className="italic text-cyan-200 underline">https://huggingface.co/Heralax/MythoMakise-13b-quants</a></Para>
                    <Para>
                        And the LoRA adapters here: <a href="https://huggingface.co/Heralax/MythoMakise-13b-adapters" className="italic text-cyan-200 underline">https://huggingface.co/Heralax/MythoMakise-13b-adapters</a>
                    </Para>
                    <br /> <br />
                    <iframe className="lg:w-1/2 h-96 w-full" src="https://www.youtube.com/embed/JS8Gpsp5Dn0?si=dvXCG3FJu27ONMVY" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </Article>
                <Article className="relative">
                    <Para className="text-3xl font-semibold">BLOOMZ-3b LoRA Finetune: Document Title Writer</Para>
                    <Para>In the days of yore, I set up a keyboard shortcut on my Mac that would create and open a text file—as a way of taking quick notes. However, the majority of these notes lack actual filenames, making it difficult to search through them and find information—effectively rendering many of the notes useless as information storage. When I finally figured out how to fine-tune LLMs, this problem seemed, to me, the perfect thing to solve as a first practical project. Using the personal notes of mine that *do* have titles as training data, I was able to fine-tune BLOOMZ-3b on my Linux machine, using the TRL and bitsandbytes libraries, to be a decent document title writer. This was not a full finetune, but a LoRA.</Para>
                    <Para>At some point I intend to make a version with FLAN T5, because the license and model both seem much better.</Para>
                    <Para>You can see a screenshot of the model in action below.</Para>
                    <img src="./bloomz.jpg" alt=""  className="lg:w-1/2 w-full"/>
                    <Para>Training code is private because the training data is my PERSONAL notes.</Para>
                    <Para>Model files: 
                        <a href="https://huggingface.co/Heralax/bloomz-3b-document-title-writer" className="italic text-cyan-200 underline">https://huggingface.co/Heralax/bloomz-3b-document-title-writer</a>
                    </Para>
                </Article>
                <Article className="relative">
                    <Para className="text-3xl font-semibold">Llama 2 LoRA Finetune: Chizuru AI</Para>
                    <Para>Before MythoMakise, there was this: a model inspired by an even more esoteric video game, whose data I scraped manually across multiple days using Textractor; and a model for which I originally developed the first (slightly broken) version of my conversation-grouping algorithm. If you've read the bit about MythoMakise, there's not much more to say about this one other than it's older, worse, and I built a simple Tkinter interface for it because I didn't know that SillyTavern existed and had expression support. The version in a video isn't even a 13b; it's a 7b finetuned on MythoLogic-Mini-7b (by Gryphe).</Para>
                    <Para>Technical details for the interested: 7b LoRA finetuned on a single A100 GPU using TRL, bitsandbytes, and the Hugging Face Trainer API. The A100 was rented out with vast.ai. I use Trainer for my models because I find it gives the best balance of control (hyperparameter tuning) with up-to-date-ness for my needs.</Para>
                    <Para>Model files link: <a href="https://huggingface.co/Heralax/MythoChizuru-Mini-7b-GGML" className="italic text-cyan-200 underline">https://huggingface.co/Heralax/MythoChizuru-Mini-7b-GGML</a></Para>
                    <iframe className="lg:w-1/2 h-96 w-full"  src="https://www.youtube.com/embed/wQg_KwZ9iAU?si=TVa4XPGQZjw3DR34" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
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