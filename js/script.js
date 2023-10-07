// Parse data from JSON file to JS
let data = JSON.parse(tasks);

// Pushing header content to HTML elements

let header = document.getElementById("header");
header.innerHTML = `
<nav class="navbar navbar-expand-lg bg-primary">
        <div class="container-fluid">
          <i class="fa-solid fa-list-check p-2"></i>
          <a class="navbar-brand" href="#">TaskManager</a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Tasks</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Settings</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      `;


// Pushing main section content to HTML elements

let results = document.getElementById("results");
data.forEach(data => {
    results.innerHTML += `
    <div class="card p-0 shadow-lg transformx">
    <span class="badge text-bg-primary">Task</span>
    <img
      src="${data.img}"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body">
      <h5 class="card-title text-center">${data.taskName}</h5>
      <p class="card-text text-center">
        ${data.description}
      </p>
      <hr />

      <div>
        <i class="fa-solid fa-triangle-exclamation"></i>
        <span>Priority level:<span class="num p-1">${data.importance}</span> </span>
      </div>
      <div>
        <i class="fa-solid fa-calendar-days"></i>
        <span>Deadline:<span>${data.deadLine}</span></span>
      </div>
      <hr />

      <div class="d-flex justify-content-around">
        <button class="btn btn-danger btn-sm" type="button">
          Delete
        </button>
       
        <button class="btn btn-success btn-sm myBtn" type="button">
          Importance<i class="fa-solid fa-circle-up"></i>
        </button>
      </div>
    </div>
  </div>
  `;
});

// Creating a function and eventlistener for each button

// Incrase button with function
const myBtn = document.querySelectorAll(".myBtn");
myBtn.forEach((btn , i) => {
    btn.addEventListener("click", function(){
        incrase (i);
    });
       
});

    function incrase (level) {
       if (data[level].importance < 5) {
        data[level].importance++;
        document.querySelectorAll(".num")[level].innerText = data[level].importance;
        applyBackgroundColor(level);
       }
    }
// Creating a function for background color of priorty level

    function applyBackgroundColor(level) {
        const numStyle = document.querySelectorAll(".num")[level];
        numStyle.classList.add("bg-success");
        if (data[level].importance === 1) {
            numStyle.classList.add("bg-success");
        } else if (data[level].importance >= 2 && data[level].importance <= 3) {
            numStyle.classList.remove("bg-success");
            numStyle.classList.add("bg-warning");
        } else if (data[level].importance >= 4) {
            numStyle.classList.remove("bg-warning");
            numStyle.classList.add("bg-danger");
        }
    } 
 
    const numStyleIni = document.querySelectorAll(".num");
    numStyleIni.forEach((numElement, index) => {
        applyBackgroundColor(index);
    }); 




// Sort function for sort by priorty button 


    document.getElementById("sort").addEventListener("click", function(){
        let sort = data.sort((a, b) => b.importance - a.importance);
        document.getElementById("results").innerHTML = ""; 
        sort.forEach((data,index) => {
            document.getElementById("results").innerHTML += `
            <div class="card p-0 shadow-lg transformx">
            <span class="badge text-bg-primary">Task</span>
            <img
              src="${data.img}"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title text-center">${data.taskName}</h5>
              <p class="card-text">
                ${data.description}
              </p>
              <hr />
        
              <div>
                <i class="fa-solid fa-triangle-exclamation"></i>
                <span>Priority level:<span class="num p-1">${data.importance}</span> </span>
              </div>
              <div>
                <i class="fa-solid fa-calendar-days"></i>
                <span>Deadline:<span>${data.deadLine}</span></span>
              </div>
              <hr />
        
              <div class="d-flex justify-content-around">
                <button class="btn btn-danger btn-sm" type="button">
                 Delete
                </button>
             
                <button class="btn btn-success btn-sm myBtn" type="button">
                  Importance<i class="fa-solid fa-circle-up"></i>
                </button>
              </div>
            </div>
          </div>
          `;
         
          applyBackgroundColor(index);

      

        });

        results.querySelectorAll(".myBtn").forEach((btn, index) => {
            btn.addEventListener("click", function () {
                incrase(index);
            });
        });

    });

    // Added footer content to HTML structure

    let footer = document.getElementById("footer");
    footer.innerHTML = `
    <div class="d-flex justify-content-center">
    <span><i class="fa-brands fa-facebook fs-4 p-2 navbar-brand"></i></span>
    <span><i class="fa-brands fa-linkedin fs-4 p-2 navbar-brand"></i></span>
    <span><i class="fa-brands fa-github fs-4 p-2 navbar-brand"></i></span>
    </div>
    <p class="d-flex justify-content-center text-white m-0">
    &copy; Patrik Majcher 2023
    </p>
    `;
