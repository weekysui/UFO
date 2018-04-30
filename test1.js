let $tbody = document.querySelector("tbody"); 
// let filterData = dataSet;
// let maxEndNum = dataSet.length;
let startNum = 0;
let endNum = 51;
let pageNum = 1;
let pages_length = Math.round((dataSet.length)/50);
console.log(pages_length)

function renderTable(beginNum,stopNum){
    $tbody.innerHTML="";
    // maxEndNum=dataSet.length;
    for(let i=startNum,ii=endNum;i<ii;i++){
        let $row = $tbody.insertRow();
        for (let r=0,rr=Object.keys(dataSet[i]).length;r<rr;r++){
            let $cell = $row.insertCell()
            $cell.innerText=Object.values(dataSet[i])[r];
        }
    }
}
renderTable(startNum,endNum);

let $nextBtn=document.querySelector(".next")
$nextBtn.addEventListener("click",function handleNext(event){
    event.preventDefault();
    if (pageNum <pages_length){
        pageNum+=1;
        startNum+=50;
        endNum+=50;
        renderTable(startNum,endNum)
        if(pageNum>=2){
            $previousBtn.classList.remove('disabled');
            $previousBtn.innerHTML = "<a href=''>Previous 50 Results</a>"
        }
    }
    if(pageNum==pages_length){
        $nextBtn.classList.add("disabled")
        $nextBtn.innerHTML = "<a href=''>End of Results</a>";
    }
    
})
let $previousBtn = document.querySelector("#previous")
$previousBtn.addEventListener("click",function handlePrevious(event){
    event.preventDefault();
    if (pageNum>1){
        $previousBtn.classList.remove('disabled');
        $previousBtn.innerHTML = "<a href=''>Previous 50 Results</a>"
        pageNum-=1;
        startNum-=50;
        endNum-=50;
        renderTable(startNum,endNum)
        if (pageNum<=pages_length){
            $nextBtn.classList.remove("disabled")
            $nextBtn.innerHTML="<a href=''>Next 50 Results</a>"
        }
    }
})
let $lastBtn = document.querySelector(".end");
$lastBtn.addEventListener("click",function handleLast(event){
    event.preventDefault();
    endNum=dataSet.length;
    startNum=endNum-50;
    pageNum=pages_length;
    renderTable(startNum,endNum)
    $nextBtn.classList.add("diabled");
    $nextBtn.innerHTML = "<a href=''>End of Results</a>";
    $previousBtn.classList.remove("disabled")
    $previousBtn.innerHTML = "<a href=''>Previous 50 Results</a>"
})

