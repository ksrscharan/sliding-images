const panels = document.querySelectorAll(".panel")


panels.forEach(panel=>{     //for each panel, do this function  //foreach loop kind of..
    panel.addEventListener("click", function(){     //for each panel, listen to click, when triggered, run this func
        removeActiveClasses()           //removes .active from all panel classed elements
        panel.classList.add("active")   // add active class to that particular element
    })
})

function removeActiveClasses(){     //this func was called  defined to remove active class from all panel classed elements
    panels.forEach(panel=>{         //for all classes   
        panel.classList.remove("active")        //remove active class
    })
}
