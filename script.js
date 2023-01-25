let products = [

    {
      id: 1,
      name: 'SAC A DOS 50L',
      image: "sac-a-dos.png",
      price :'999',
      like: 0,
      qte: 0,
    },
    {
      id: 1,
      name: 'VESTE HIVER IMPERMÉABLE',
      image: "veste-chaude.png",
      price :'429',
      like: 0,
      qte: 0,
    },
    {
      id: 1,
      name: 'PANTALON CARGO',
      image: "pantalon-cargo.png",
      price :'499',
      like: 0,
      qte: 0,
    },
    {
      id: 1,
      name: 'CHAUSSURE RANDONNEE',
      image: "chaussures.png",
      price :'459',
      like: 0,
      qte: 0,
    },
]

var cartForm = document.querySelector("#cartForm");
cartForm.setAttribute("class","mt-28 w-9/12")



// grand card (card shopping)



var row = document.createElement("div")
cartForm.appendChild(row);
row.setAttribute("class"," flex flex-col bg-gray-200 p-2 rounded-tl-2xl rounded-br-2xl p-8")

// head
let headDiv =document.createElement("div")
row.appendChild(headDiv)
headDiv.setAttribute("class","flex justify-between")

var deleteHead = document.createElement("div")
deleteHead.innerHTML='Image'
headDiv.appendChild(deleteHead).innerHTML=" "
deleteHead.setAttribute("class","w-1/12 ")

var imgHead = document.createElement("div")
imgHead.innerHTML='Image'
headDiv.appendChild(imgHead)
imgHead.setAttribute("class","w-2/12 ")

var titleHead = document.createElement("div")
titleHead.innerHTML='Nom Produit'
headDiv.appendChild(titleHead)
titleHead.setAttribute("class","w-3/12 ")

var priceUnitHead = document.createElement("div")
priceUnitHead.innerHTML='Prix unitaire'
headDiv.appendChild(priceUnitHead)

var numberHead = document.createElement("div")
numberHead.innerHTML='Nombre'
headDiv.appendChild(numberHead)

var priceTotalehead = document.createElement("div")
priceTotalehead.innerHTML='Prix Totale'
headDiv.appendChild(priceTotalehead)


products.map(productItem =>{
  var product = document.createElement("div")
  row.appendChild(product);
  product.setAttribute("class"," flex flex-row justify-between bgrow mb-4 p-4 h-40 items-center rounded-tl-2xl rounded-br-2xl")

  let deleteIcone = document.createElement("i")
product.appendChild(deleteIcone)
deleteIcone.setAttribute("class","flex self-center justify-self-center fa-regular fa-trash-can fa-lg color2 colorhover3 cursor-pointer w-1/12")
deleteIcone.addEventListener('click',()=>{
  if(window.confirm("mn nytek !!")){
    row.removeChild(product)
  }
  
})

let imgProductDiv = document.createElement("div")
product.appendChild(imgProductDiv)
imgProductDiv.setAttribute("src",productItem.image)
imgProductDiv.setAttribute("class","w-2/12 ")

let imgProduct = document.createElement("img")
imgProductDiv.appendChild(imgProduct)
imgProduct.setAttribute("src",productItem.image)
imgProduct.setAttribute("class"," filter hover:drop-shadow-2xl w-36 justify-self-center")
// imgProduct.classList.add(["grid-cols-2"])

let nameProduct = document.createElement("h1")
product.appendChild(nameProduct).innerHTML=productItem.name
nameProduct.setAttribute("class","text-lg text-black mx-2 w-3/12 justify-self-center")

let priceProduct = document.createElement("h1")
product.appendChild(priceProduct).innerHTML=productItem.price+'MAD'
priceProduct.setAttribute("class","text-lg text-black mx-2 w-1/12")

// Count
let count= document.createElement("div")
product.appendChild(count)
count.setAttribute("class","flex flex-row justify-evenly items-center mx-2 w-2/12")


let countDown = document.createElement("i")
count.appendChild(countDown)
countDown.setAttribute("class","fa-solid fa-minus cursor-pointer mx-2 w-4/12")
countDown.addEventListener("click",()=>{
  if (qteProduct.innerHTML<=1) {
    return 
  }
  qteProduct.innerHTML=--productItem.qte;
  var totale= productItem.price*productItem.qte;
  totalePriceUnitaire.innerHTML=totale;
  let totalPrice =0 
  totalPrice += totale;
})

let qteProduct = document.createElement("span")
count.appendChild(qteProduct).innerHTML=productItem.qte
qteProduct.setAttribute("class","text-lg text-black mx-2 w-4/12")

let countUp = document.createElement("i")
count.appendChild(countUp)
countUp.setAttribute("class","fa-solid fa-minus cursor-pointer fa-solid fa-plus mx-2 w-4/12")
countUp.addEventListener("click",()=>{
  qteProduct.innerHTML=++productItem.qte
  let totale= productItem.price*productItem.qte
  totalePriceUnitaire.innerHTML=totale
})

//totale price unitaire
let totalePriceUnitaire = document.createElement("span")
product.appendChild(totalePriceUnitaire).innerHTML='0'
totalePriceUnitaire.setAttribute("class"," mx-2 w-2/12")

//heart
let heart = document.createElement("i")
product.appendChild(heart)
heart.setAttribute("class","fa-regular fa-heart fa-xl color2 colorhover3 cursor-pointer mx-2 w-1/12 ")

heart.addEventListener("click",()=>{
heart.classList.toggle(["fa-solid"])

})

} )

let totalePrice=document.createElement("span")


// const add_product = products.map(a => {
//   return `
//   <div
//         class="">
//           <div class="max-w-md w-full shadow-lg rounded-tl-2xl rounded-br-2xl ">
//             <div class="flex flex-col">
//               <div>
//                 <div class="relative h-62 w-full mb-3">
//                   <div class="absolute flex flex-row top-0 right-0 justify-between items-center space-x-2 p-3">
//                     <div id="count" style="color: #EDEFEE;">0</div>
//                     <button id="btn-like"
//                       class="transition ease-in duration-300 bg-gray-100 brunHover shadow hover:shadow-md text-gray-500 rounded-full w-8 h-8 text-center p-1"
//                     >
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         class="h-6 w-6"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                       >
//                         <path
//                           stroke-linecap="round"
//                           stroke-linejoin="round"
//                           stroke-width="2"
//                           d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
//                         />
//                       </svg>
//                     </button>
//                   </div>
//                   <img
//                     src="${a.image}"
//                     alt="Just a flower"
//                     class="w-full object-fill rounded-2xl"
//                   />
//                 </div>
//                 <div class="flex-auto justify-evenly px-4 pb-4 colorbrun">
//                   <div class="flex flex-wrap">
//                     <div
//                       class="flex items-center w-full justify-between min-w-0"
//                     >
//                       <h2
//                         class="text-md font-extrabold mr-auto cursor-pointer brunHover truncate mb-3"
//                       >
//                         ${a.name}
//                       </h2>
//                     </div>
//                   </div>

//                   <div class="flex space-x-2 text-sm font-medium justify-between items-center">
//                     <button style="background-color: #d08856;color: #EDEFEE;"
//                       class="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0  px-3 py-2 hover:shadow-xl tracking-wider rounded-tl-md rounded-br-md hoveraddcart"
//                     >
//                       <span>Add Cart</span>
//                     </button>
//                     <div class="text-sm colorBrun font-semibold mt-1 colorbrun pr-1">
//                       ${a.price}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//       </div>
//       <div
//           class="relative"
//         >
//           <div class="container">
//             <div class="max-w-md w-full overflow-hidden shadow-lg rounded-xl" >
//               <button id="btn_add">
//                 <i class="fa-solid fa-plus fa-2xl"></i>
//               </button>
              
//           </div>
//         </div>
//       </div>
//   `
// }).join('') 



// cartForm.innerHTML = add_product

// var btnLike = document.querySelector("#btn-like");
// var num = 0;
// btnLike.addEventListener("click", () => {
//   btnLike.style.background = '#d08856'
//   btnLike.style.color = '#EDEFEE'
//   var count = document.getElementById("count");
//   num++;
//   count.innerHTML = num;
// });








{/* <div id="large-modal" tabindex="-1" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full">
      <div class="relative w-full h-full max-w-4xl md:h-auto">
          
          <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
         
              <div class="flex items-center justify-between p-5 border-b rounded-t dark:border-gray-600">
                  <h3 class="text-xl font-medium text-gray-900 dark:text-white">
                      My Cart
                  </h3>
                  <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="large-modal">
                      <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                      <span class="sr-only">Close modal</span>
                  </button>
              </div>
             
              <div class="p-6 space-y-6">
                  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                      With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                  </p>
                  <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                      The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                  </p>
              </div>
              
              <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                  <button data-modal-hide="large-modal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
              </div>
          </div>
      </div>
  </div> */}










// function countUp() {
//  var txtInvoer = document.getElementById('txt_invoer');
//  var i = parseInt(txtInvoer.value, 10);
//  txtInvoer.value = ++i;
// }
// <input type="text" id="txt_invoer" value="1">
// <button onclick="countUp()">+</button>
// <button onclick="countDown()">-</button>
