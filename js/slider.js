const d = document,
url = ["./photo1.jfif","./photo2.jfif","./photo3.jpg","./photo4.jfif"];
let $img = d.querySelectorAll(".photo");
const $prev = d.querySelector(".prev"),
$next = d.querySelector(".next");

d.addEventListener("click", (e)=>{
    if(e.target === $next){
        $img.forEach((img) =>{
            const src = img.getAttribute("src");
            let index = url.indexOf(src);
            if(index === 0){
                index = url.length-1;
                img.setAttribute("src", url[index])
            }else{
                img.setAttribute("src", url[index-1])
            }
        })
    }
    if(e.target === $prev){

        $img.forEach((img) =>{
            const src = img.getAttribute("src");
            let index = url.indexOf(src);
            if(index === url.length-1){
                index=0;
                img.setAttribute("src", url[index])
            }
            else{
                img.setAttribute("src", url[index+1])
            }
            
        })
    }
})
