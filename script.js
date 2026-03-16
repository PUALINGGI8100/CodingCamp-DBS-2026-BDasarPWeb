document.onreadystatechange = ()=> {

    if(document.readyState==="complete"){

        const btn = document.querySelector("#nav-control");
        const targetVisible = document.querySelector("#anchor-wrapper");

        // handle navigation menu visibility
        const liSwitch = ()=>{
            if(targetVisible.classList.contains("hide")){
                targetVisible.classList.remove("hide");
                return;
            }
            targetVisible.classList.add("hide");
        }
        // handle btn classlists
        const btnSwitch = ()=>{
            if(btn.classList.contains("close")){
                btn.classList.replace("close", "open");
                return;
            }
            btn.classList.replace("open", "close");
        }

        btn.addEventListener("click", ()=>{
            btnSwitch();
            liSwitch();
        });

    }

}