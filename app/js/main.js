const dropdown_icon = document.querySelector("#drop_icon");
const dropdown_menue = document.querySelector("#drop_menue");
dropdown_icon.addEventListener("click", function(){
    if(dropdown_icon.classList.contains("rotate")){
        dropdown_icon.classList.remove("rotate");
    }
    else{
        dropdown_icon.classList.add("rotate");
    }
    if(dropdown_menue.classList.contains("hidden")){
        dropdown_menue.classList.remove("hidden");
    }
    else{
        dropdown_menue.classList.add("hidden");
    }
});