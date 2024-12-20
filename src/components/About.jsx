import Headshot from "../assets/headshot/Headshot.jpg";
console.log('Headshot', Headshot);
export default function About() {
    return (
        <section className="my-5"> 
            <h1 className="text-center pt-5"> Certified Junior Developer</h1>
            <img src={Headshot} alt="Parisa's Headshot" className="img-fluid mx-auto d-block"/>
            <br>

            </br>
            <p>
                Hi I am Parisa! Thanks for taking time out of your day to come and check me out, I'm very flattered. 
                I am a junior Fullstack Developer (M.E.R.N) fresh out of school. Attending, University of California, 
                Berkeley's program. I have about 20 years of working in some form of the technology realm, and I have 
                to admit, I love it. A little about myself, I am a critical thinker, very diligent, motivated, compassionate, 
                and the list goes on. I've created this application to test out my new skills. Let me know what you think 
                by visiting the "Contact" page in the nav.
            </p>
        </section>
    )
}