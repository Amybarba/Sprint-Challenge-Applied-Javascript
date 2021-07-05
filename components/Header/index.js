// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

// function header() {

// const div = document.createElement('div')
// div.className = 'header'

// const headDate = document.getElementsByClassName("header-container");
//   const paperDate = document.createElement("span");
// paperDate.textContent = "SMarch 28, 2019";
// div.appendChild(paperDate);


// const headerElement = document.getElementsByClassName("header-container");
//   const paperTitle = document.createElement("h1");
// paperTitle.textContent = "Lamda Times";
// console.log(headerElement);
//   div.appendChild(paperTitle);
//   console.log(headerElement);

  

// const headTemp = document.getElementsByClassName("header-container");
//   const paperTemp = document.createElement("span");
// paperTemp.textContent = "98°";
// div.appendChild(paperTemp);

// headerElement[0].appendChild(div)
// }
// header();

function header(){

    const headDate = document.getElementsByClassName("header-container");
    const headerElement = document.getElementsByClassName("header-container");
    const headTemp = document.getElementsByClassName("header-container");
    
    
       //create elements
    
    const div = document.createElement('div')   
    const paperDate = document.createElement("span");
    const paperTitle = document.createElement("h1");
    const paperTemp = document.createElement("span");
       
       //assign classes
    
    div.className = 'header'
    
       //assign content
    
    paperDate.textContent = "SMarch 28, 2019";
    paperTitle.textContent = "Lamda Times";
    paperTemp.textContent = "98°";
    
    
       //connect elements

    div.appendChild(paperDate);
    div.appendChild(paperTitle);
    div.appendChild(paperTemp);
    
    headerElement[0].appendChild(div)
    }
    header();


