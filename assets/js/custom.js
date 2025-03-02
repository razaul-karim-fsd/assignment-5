document.getElementById("theme").addEventListener("click", function () {
    const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
    document.body.style.backgroundColor = randomColor;
});

// document.getElementById("something").addEventListener("click", function () {
//     window.location.href = "/main.html";  
// });

const timeElement = document.getElementById('time');
const currentDate = new Date();
const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };
const formattedDate = currentDate.toLocaleDateString('en-US', options);
timeElement.innerText = formattedDate;

const datas = document.querySelectorAll(".data-set");
const itemDataLength = document.getElementById("item-data-length");
const card = document.getElementById("card-lanth");
const task = document.getElementById("task");

let activeButtons = datas.length;
let cardCount = 23;
let completedCount = 0; 

itemDataLength.innerText = activeButtons.toString();
card.innerText = cardCount.toString();

for (let i = 0; i < datas.length; i++) {
    const data = datas[i];
    const button = data.querySelector(".compolet");
    const fasdata = data.querySelector(".fasdata");

    if (!button) {
        console.warn(`Warning: Button not found in task ${i + 1}`);
        continue;
    }

    button.addEventListener("click", function (event) {
        if (event.target.disabled) return;
        event.target.disabled = true; 
        event.target.style.backgroundColor = "gray"; 
        event.target.innerText = "Completed"; 

        activeButtons--;
        itemDataLength.innerText = activeButtons.toString();
        cardCount++;  
        card.innerText = cardCount.toString();
        completedCount++; 

        if (fasdata) {
            const fasdataText = fasdata.innerText;
            const now = new Date();
            const timeString = now.toLocaleTimeString(); 
            const newElem = document.createElement("p");
            newElem.className = "text-xl font-normal block bg-[#F4F7FF] shadow-2xl mb-3 rounded-lg p-4";
            newElem.innerText = `You have Completed The Task  ${fasdataText} at ${timeString}`;

            task.appendChild(newElem);
        } else {
            console.warn(`Warning: fasdata not found in task ${i + 1}`);
        }
        alert("Board Update Successfully");
        if (completedCount === 6) {
            alert("Congrates!!! You have completed all the current task.");
        }
    });
}

document.getElementById("clear").addEventListener("click", function() {
    task.innerHTML = ""; 
});
