

window.addEventListener("load",function(){
    document.querySelector(".preloader").classList.add("opacity-0");
    
    setTimeout(function(){
        document.querySelector(".preloader").style.display="none";
    },1000)
})

//portfolio item filter

const filterContainer=document.querySelector(".portfolio_filter"),
      filterBtns=filterContainer.children,
      totalFilterBtn=filterBtns.length,
      portfolioItems=document.querySelectorAll(".portfolio_item"),
      totalPortfolioItem=portfolioItems.length;
        
      for(let i=0; i<totalFilterBtn; i++){
          filterBtns[i].addEventListener("click",function(){
              filterContainer.querySelector(".active").classList.remove("active");
              this.classList.add("active");
              
              const filterValue=this.getAttribute("data-filter");
              for(let k=0; k<totalPortfolioItem; k++){
                  if(filterValue === portfolioItems[k].getAttribute("data-category")){
                      portfolioItems[k].classList.remove("hide");
                      portfolioItems[k].classList.add("show");
                  }
                  else{
                      portfolioItems[k].classList.remove("show");
                      portfolioItems[k].classList.add("hide");
                  }
                  if(filterValue === "all"){
                      portfolioItems[k].classList.remove("hide");
                      portfolioItems[k].classList.add("show");
                  }
              }
          })
      }



//portfolio lightbox

const lightbox=document.querySelector(".lightbox"),
      lightboxImg=lightbox.querySelector(".lightbox_img"),
      lightboxClose=lightbox.querySelector(".lightbox_close"),
      lightboxText=lightbox.querySelector(".caption_text"),
      lightboxCounter=lightbox.querySelector(".caption_counter");
 let itemIndex=0;

for(let i=0; i<totalPortfolioItem; i++){
    portfolioItems[i].addEventListener("click", function(){
        itemIndex=i;
        changeItem();
        toggleLightbox();
    })
}
function nextItem(){
    if(itemIndex === totalPortfolioItem-1){
        itemIndex=0;
    }
    else{
        itemIndex++
    }
    changeItem();
}
function prevItem(){
    if(itemIndex === 0){
        itemIndex=totalPortfolioItem-1
    }
    else{
        itemIndex--;
    }
    changeItem();
}

function toggleLightbox(){
    lightbox.classList.toggle("open");
}
function changeItem(){
    imgSrc=portfolioItems[itemIndex].querySelector(".portfolio_img img").getAttribute("src");
    lightboxImg.src=imgSrc;
    lightboxText.innerHTML=portfolioItems[itemIndex].querySelector("h4").innerHTML;
    lightboxCounter.innerHTML=(itemIndex+1) + " of " + totalPortfolioItem;
}
    
//close lightbox

lightbox.addEventListener("click", function(event){
    if(event.target === lightboxClose || event.target === lightbox){
        toggleLightbox();
    }
})
   


//side_ nav
const nav=document.querySelector(".nav"),
      navList=nav.querySelectorAll("li"),
      totalNavList=navList.length,
      allSection=document.querySelectorAll(".section"),
      totalSection=allSection.length;
    

 for(let i=0; i<totalNavList; i++){
    const a=navList[i].querySelector("a");
    a.addEventListener("click",function(){
        // remove back section class
        for(let i=0; i<totalSection; i++){
        allSection[i].classList.remove("back_section");
    }
        for(let j=0; j<totalNavList; j++){
            if(navList[j].querySelector("a").classList.contains("active")){
                // add back section class
               allSection[j].classList.add("back_section"); 
            }
            navList[j].querySelector("a").classList.remove("active");
        }
        this.classList.add("active");
        showSection(this);
        
        if(window.innerWidth < 1200){
            side_lSectionTogglerBtn();
        }
    })
}

function showSection(element){
    for(let i=0; i<totalSection; i++){
        allSection[i].classList.remove("active");
    }
    
    const target=element.getAttribute("href").split("#")[1];
        document.querySelector("#"+target).classList.add("active")
}


function updateNav(element){
    for(let i=0; i<totalNavList; i++){
        navList[i].querySelector("a").classList.remove("active");
        const target=element.getAttribute("href").split("#")[1];
        
        if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
            navList[i].querySelector("a").classList.add("active");
        }
    }
}

document.querySelector(".hire_me").addEventListener("click",function(){
    showSection(this);
    updateNav(this);
})


const navTogglerBtn=document.querySelector(".nav_toggler"),
      side_l=document.querySelector(".side_l");

navTogglerBtn.addEventListener("click", side_lSectionTogglerBtn)


function side_lSectionTogglerBtn(){
    side_l.classList.toggle("open");
    navTogglerBtn.classList.toggle("open");
     for(let i=0; i<totalSection; i++){
        allSection[i].classList.toggle("open");
    }
}






