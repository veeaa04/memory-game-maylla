const body = document.querySelector("body"),
    visualName = document.querySelector(".visual-name"),
    nameText = visualName.querySelector("span"),
    visualList = document.querySelector(".visual-list"),
    visualCard = visualList.querySelectorAll(".visual"),
    charList = document.querySelector(".char-list"),
    charCard = charList.querySelectorAll(".char");

let color = ["#e0b637", "#2b1f25", "#49135d", "#b2cdf7", "#7c53ad"],
    charName = ["aether", "hu tao", "keqing", "ganyu", "raiden"];

    visualCard.forEach((card, index) => {
        card.onclick = () => {
            body.style.background = color[index];
            
            visualCard.forEach((card) => {
                card.classList.remove("active");
            })
            charCard.forEach((card) => {
                card.classList.remove("active");
            })
            card.classList.add("active");
                charCard[index].classList.add("active");
                
            gsap.registerPlugin(TextPlugin);
            gsap.to(nameText, {
                duration: 1,
                text: {
                    value: charName[index]
                },
                ease: "expo.inOut",
            })
        }
    })

    document.addEventListener("mousemove", parallax);
    const imageParallax = document.querySelectorAll(",char img");

    function parallax(event) {
        imageParallax.forEach((img) =>{
            const position = img.getAttribute("value")
            X = (window.innerWidth - event.pageX * position) /200,
            Y = (window.innerHeight - event.pageY * position) /800;
            
            img.style.transform = 'translateX (${x}px) translate(${y}px)';
     })
          
        const position = visualName.getAttribute("value"),
        x = (window.innerWidth - event.pageX * position) / 200,
        Y = (window.innerHeight - event.pageY * position) / 800;

        nameText.style.transform = 'translateX(${x}px) translateY(${y})';
        }
