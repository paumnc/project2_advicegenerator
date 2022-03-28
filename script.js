const number = document.querySelector(".number");
const advice = document.querySelector(".advice");
const circle = document.querySelector(".circle")

async function randomAdvice() {
try {
    const random = await fetch("https://api.adviceslip.com/advice");
    console.log(random)
    const adviceGenerated = await random.json();
    console.log(adviceGenerated)
    number.textContent = `#${adviceGenerated.slip.id}`;
    advice.textContent = `"${adviceGenerated.slip.advice}"`;

    } catch(e) {
        console.log(e)
    }
}
randomAdvice();

circle.addEventListener("click", () => { randomAdvice() });

