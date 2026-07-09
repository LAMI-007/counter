  let count = 0
  const counter = document.querySelector('.display h2').textContent = count
       const display = document.querySelector('.display h2')
       const incrementBtn = document.getElementById('increment')  
         const resetBtn = document.getElementById('reset')
            const substractBtn = document.getElementById('subtract')   
         incrementBtn.addEventListener('click', () => {
            count++
            display.textContent = count })
            resetBtn.addEventListener('click',()=>{
                count=0
                display.textContent=count
            })  

         substractBtn.addEventListener("click",()=>{
            count--
            display.textContent=count
         }
        )   
     