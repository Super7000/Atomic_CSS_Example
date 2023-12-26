let btn = document.querySelector(".btn");
document.querySelector(".btn.state-default").addEventListener("click", () => {
    try {
        btn.classList.remove("state-default");
        btn.classList.add("state-loading");
        setTimeout(() => {
            btn.classList.remove("state-loading");
            btn.classList.add("state-disable");
        }, 2000)
    } catch (err) {
        console.log("An Error Occured: " + err);
    }
})