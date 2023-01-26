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
var sum=0;
var cartForm = document.querySelector("#cartForm");
cartForm.setAttribute("class","mb-12 mt-28 w-9/12 shadow-2xl ")



// grand card (card shopping)



var row = document.createElement("div")
cartForm.appendChild(row);
row.setAttribute("class"," flex flex-col bg-gray-200 p-2 rounded-tl-2xl rounded-br-2xl p-8 colorbrun")

// head
let headDiv =document.createElement("div")
row.appendChild(headDiv)
headDiv.setAttribute("class","flex justify-between mb-8")

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
titleHead.setAttribute("class","w-2/12 ")

var priceUnitHead = document.createElement("div")
priceUnitHead.innerHTML='Prix unitaire'
headDiv.appendChild(priceUnitHead)
priceUnitHead.setAttribute("class","w-2/12 ")

var numberHead = document.createElement("div")
numberHead.innerHTML='Nombre'
headDiv.appendChild(numberHead)
numberHead.setAttribute("class","w-1/12 ")

var priceTotalehead = document.createElement("div")
priceTotalehead.innerHTML='Prix Totale'
headDiv.appendChild(priceTotalehead)
priceTotalehead.setAttribute("class","w-2/12 ")

var heartHead = document.createElement("div")
heartHead.innerHTML=''
headDiv.appendChild(heartHead)
heartHead.setAttribute("class","w-1/12 ")


products.map(productItem =>{
  var product = document.createElement("div")
  row.appendChild(product);
  product.setAttribute("class"," flex flex-row justify-between bgrow mb-4 p-4 h-40 items-center rounded-tl-2xl rounded-br-2xl")

  let deleteIcone = document.createElement("i")
product.appendChild(deleteIcone)
deleteIcone.setAttribute("class","flex fa-regular fa-trash-can fa-lg color2 colorhover3 cursor-pointer w-1/12 colorbrun ")
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
  totalePriceUnitaire.innerHTML=totale+"MAD";
  //sum -= totale;
  totalePrice.innerHTML=getTotal()
})

let qteProduct = document.createElement("span")
count.appendChild(qteProduct).innerHTML=productItem.qte
qteProduct.setAttribute("class","text-lg text-black mx-2 w-4/12")

let countUp = document.createElement("i")
count.appendChild(countUp)
countUp.setAttribute("class","bgcursor-pointer fa-solid fa-plus mx-2 w-4/12")
countUp.addEventListener("click",()=>{
  qteProduct.innerHTML=++productItem.qte
  let totale= productItem.price*productItem.qte
  totalePriceUnitaire.innerHTML=totale+"MAD";
  //sum += totale;
  totalePrice.innerHTML=getTotal()
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
row.appendChild(totalePrice).innerHTML=0
totalePrice.setAttribute("class","w-full p-2 text-xl flex justify-center")

const getTotal = ()=>products.reduce((sum,product)=>sum+=product.price*product.qte,0)



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
