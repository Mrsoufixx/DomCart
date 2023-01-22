var cartForm = document.querySelector("#cartForm");

var btnLike = document.querySelector("#btn-like");
var num = 0;
btnLike.addEventListener("click", () => {
  var count = document.getElementById("count");
  num++;
  count.innerHTML = num.toString();
});

var btnAdd=document.querySelector('#btn_add')
btnAdd.addEventListener("click",()=>{
 var cardDiv=document.createElement('div')
 cardDiv.innerHTML='<div class="relative">'+'<div class="container">'+
 '<div class="max-w-md w-full bg-gray-900 shadow-lg rounded-xl">'+
     '<div class="flex flex-col">'+
       '<div>'+'<div class="relative h-62 w-full mb-3">'+
           '<div class="absolute flex flex-row top-0 right-0 justify-between align-items p-3">'+
             '<div id="count" class="text-white">0</div>'+
             '<button id="btn-like"class="transition ease-in duration-300 bg-gray-100 hover:text-purple-500 shadow hover:shadow-md text-gray-500 rounded-full w-8 h-8 text-center p-1">'+
               '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"stroke="currentColor">'+
                 '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>'+
             '</button></div><img src="https://images.unsplash.com/photo-1577982787983-e07c6730f2d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2059&q=80" alt="Just a flower" class="w-full object-fill rounded-2xl"/></div>'+
         '<div class="flex-auto justify-evenly px-6 pb-4"><div class="flex flex-wrap"><div class="flex items-center w-full justify-between min-w-0">'+
               '<h2 class="text-lg mr-auto cursor-pointer text-gray-200 hover:text-purple-500 truncate">Lorem ipsum is placeholder text commonly used in thegraphic</h2></div></div>'+

           '<div class="flex space-x-2 text-sm font-medium justify-start">'+
             '<button class="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-purple-500 px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-purple-600">'+
               '<span>Add Cart</span>'+
             '</button>'+
             '<div class="text-xl text-white font-semibold mt-1">240.00MAD</div>'+
           '</div>'+'</div>'+'</div>'+'</div>'+'</div>'+'</div>'+'</div>'
           cartForm.appendChild(cardDiv)
})

















// function countUp() {
//  var txtInvoer = document.getElementById('txt_invoer');
//  var i = parseInt(txtInvoer.value, 10);
//  txtInvoer.value = ++i;
// }
// <input type="text" id="txt_invoer" value="1">
// <button onclick="countUp()">+</button>
// <button onclick="countDown()">-</button>
