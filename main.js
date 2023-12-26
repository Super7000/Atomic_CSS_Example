const btn = document.querySelector(".btn");
const inpContainer = document.querySelectorAll(".input-container");

btn.addEventListener("click", () => {
    if (btn.classList.toString().indexOf("state-default") == -1) return;
    try {
        btn.classList.remove("state-default");
        btn.classList.add("state-loading");

        //making input boxs disable
        inpContainer.forEach((e) => {
            e.classList.remove("state-default");
            e.classList.add("state-disable");
            e.querySelector("input").disabled = true;
        })

        setTimeout(() => {
            btn.classList.remove("state-loading");
            btn.classList.add("state-disable");
        }, 2000)
    } catch (err) {
        console.log("An Error Occured: " + err);
    }
})



inpContainer.forEach((e)=>{
    e.addEventListener("mousemove",()=>{
        e.querySelector("input").focus();
    })
})