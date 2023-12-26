const btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
    if (btn.classList.toString().indexOf("state-default") == -1) return;
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