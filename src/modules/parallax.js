const homeBackground = document.querySelector("#home-bg");


export const parallaxBg = () => {
    window.addEventListener("mousemove", function(e) {
        const xPos = (e.clientX / window.innerWidth - 0.5) * 2;  // -1 to 1
        const yPos = (e.clientY / window.innerHeight - 0.5) * 2; // -1 to 1

        homeBackground.style.transform = `translate(${xPos * 20}px, ${yPos * 20}px)`;
    });
}
