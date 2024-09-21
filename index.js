const btnEls = document.querySelectorAll(".btn")
const answers = document.querySelectorAll(".answer")

btnEls.forEach((btn, btnIndex)=>{
    btn.addEventListener("click", ()=>{
        answers.forEach((answer, answerindex)=>{
            if (btnIndex==answerindex){
                answer.classList.toggle("display")
                btn.classList.toggle("active")
            }else {
            answer.classList.remove("display")
            // btn.classList.remove("active")
        }
        })
    })
})