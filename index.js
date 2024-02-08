let boxes = document.querySelectorAll('.container button');
let h3=document.querySelector('h3')
let count = 0;
let arr1 = [];

document.querySelector('.btn').addEventListener('click',()=>{
    arr1=[]
    Array.from(boxes).forEach(box=>{
        box.innerText=''
    })
    h3.innerText=''
})

Array.from(boxes).forEach((box, index) => {
    box.addEventListener('click', (e) => {
        if (!isGameOver()) {
            if (count % 2 === 0) {
                e.target.innerText = 'O';
                arr1[index] = 'O';
            } else {
                e.target.innerText = 'X';
                arr1[index] = 'X';
            }
            count++;
            if (msg=isGameOver()) {
                 h3.innerText=`${msg} is winner`   
            }
        }
    });
});

function isGameOver() {
    const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6]              
    ];

    
    for (let condition of winConditions) {
        const [a, b, c] = condition;
        if (arr1[a] && arr1[a] === arr1[b] && arr1[a] === arr1[c]) {
            return arr1[a];
        }
    }
    return false;
}



