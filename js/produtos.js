// import { Proportions } from "lucide-react";

let carrinho = []

const produtos = [
  { id:1, nome:"Pistola 9mm", preco:750, categoria:"pt", imagens:["imagens/arma5.png"] },
  { id:2, nome:"Rifle AK-47", preco:2200, categoria:"pt", imagens:["imagens/arma6.png"] },
  { id:3, nome:"Escopeta 12", preco:1800, categoria:"pt", imagens:["imagens/arma1.png"] },
  { id:4, nome:"SMG MP5", preco:1400, categoria:"pt", imagens:["imagens/arma9.png"] },
  { id:5, nome:"SMG MP5", preco:1400, categoria:"pt", imagens:["imagens/arma3.png"] },
  { id:6, nome:"SMG MP5", preco:1400, categoria:"pt", imagens:["imagens/arma.png"] },
  { id:7, nome:"SMG MP5", preco:1400, categoria:"pt", imagens:["imagens/arma7.png"] },
  { id:8, nome:"SMG MP5", preco:1400, categoria:"pt", imagens:["imagens/arma8.png"] },
  { id:9, nome:"SMG MP5", preco:1400, categoria:"pt", imagens:["imagens/arma4.png"] },

  { id:10, nome:"Camisa Night Ops", preco:150, categoria:"pt", imagens:["imagens/a2.png"] },
  { id:11, nome:"Camisa Night Ops", preco:150, categoria:"pt", imagens:["imagens/a3.png"] },
  { id:12, nome:"Camisa Night Ops", preco:150, categoria:"pt", imagens:["imagens/a4.png"] },
  { id:13, nome:"Camisa Night Ops", preco:150, categoria:"pt", imagens:["imagens/a5.png"] },
  { id:14, nome:"Camisa Night Ops", preco:150, categoria:"pt", imagens:["imagens/a7.png"] },
  { id:15, nome:"Camisa Night Ops", preco:150, categoria:"pt", imagens:["imagens/a9.png"] },
  { id:16, nome:"Camisa Night Ops", preco:150, categoria:"pt", imagens:["imagens/a10.png"] },
  { id:17, nome:"Camisa Night Ops", preco:150, categoria:"pt", imagens:["imagens/a11.png"] },
  { id:18, nome:"Camisa Night Ops", preco:150, categoria:"pt", imagens:["imagens/a12.png"] },
  { id:19, nome:"Camisa Night Ops", preco:150, categoria:"pt", imagens:["imagens/a14.png"] },
  { id:20, nome:"Camisa Night Ops", preco:150, categoria:"pt", imagens:["imagens/a15.png"] },
  { id:21, nome:"Camisa Night Ops", preco:150, categoria:"pt", imagens:["imagens/a16.png"] },
  { id:22, nome:"Camisa Night Ops", preco:150, categoria:"pt", imagens:["imagens/a17.png"] },

  // CAR
  { id:23, nome:"Camisa Tática Preta", preco:95, descricao: "Camisa antiga do goat camisa de 2020 " , categoria:"car", imagens:["imagens/camisa.png"] },
  { id:24, nome:"Camisa Urban Cinza", preco:110, descricao: "Camisa antiga do goat camisa de 2021 ", categoria:"car", imagens:["imagens/camisa1.png"] },
  { id:25, nome:"Camisa Militar Verde", preco:130, categoria:"car", imagens:["imagens/camisa2.png"] },
  { id:26, nome:"Camisa Night Ops", preco:150, categoria:"car", imagens:["imagens/camisa3.png"] },
  { id:27, nome:"Camisa Night Ops", preco:150, categoria:"car", imagens:["imagens/camisa4.png"] },
  { id:28, nome:"Camisa Night Ops", preco:150, categoria:"car", imagens:["imagens/camisa5.png"] },
  { id:29, nome:"Camisa Night Ops", preco:150, categoria:"car", imagens:["imagens/camisa6.png"] },
  { id:30, nome:"Camisa Night Ops", preco:150, categoria:"car", imagens:["imagens/camisa7.png"] },
  { id:31, nome:"Camisa Night Ops", preco:150, categoria:"car", imagens:["imagens/camisa8.png"] },

  // COLETE
  { id:32, nome:"Colete Nível I", preco:500, categoria:"colete", imagens:["imagens/colete.png"] },
  { id:33, nome:"Colete Nível II", preco:850, categoria:"colete", imagens:["imagens/colete1.png"] },
  { id:34, nome:"Colete Nível III", preco:1200, categoria:"colete", imagens:["imagens/colete2.png"] },
  { id:35, nome:"Colete Blindado Pro", preco:1800, categoria:"colete", imagens:["imagens/colete3.png"] },
  { id:36, nome:"Colete Blindado Pro", preco:1800, categoria:"colete", imagens:["imagens/colete4.png"] },
  { id:37, nome:"Camisa Night Ops", preco:150, categoria:"colete", imagens:["imagens/c1.png"] },
  { id:38, nome:"Camisa Night Ops", preco:150, categoria:"colete", imagens:["imagens/c2.png"] },
  { id:39, nome:"Camisa Night Ops", preco:150, categoria:"colete", imagens:["imagens/c3.png"] },
  { id:40, nome:"Camisa Night Ops", preco:150, categoria:"colete", imagens:["imagens/c4.png"] },
  { id:41, nome:"Camisa Night Ops", preco:150, categoria:"colete", imagens:["imagens/c5.png"] },

  // CALÇA
  { id:42, nome:"Calça Nível I", preco:500, categoria:"calca", imagens:["imagens/ca1.png"] },
  { id:43, nome:"Calça Nível II", preco:850, categoria:"calca", imagens:["imagens/ca2.png"] },
  { id:44, nome:"Calça Nível III", preco:1200, categoria:"calca", imagens:["imagens/ca3.png"] },
  { id:45, nome:"Calça Blindada Pro", preco:1800, categoria:"calca", imagens:["imagens/ca4.png"] },
  { id:46, nome:"Calça Blindada Pro", preco:1800, categoria:"calca", imagens:["imagens/ca5.png"] },
  { id:47, nome:"Camisa Night Ops", preco:150, categoria:"calca", imagens:["imagens/ca7.png"] },
  { id:48, nome:"Camisa Night Ops", preco:150, categoria:"calca", imagens:["imagens/ca8.png"] },
  { id:49, nome:"Camisa Night Ops", preco:150, categoria:"calca", imagens:["imagens/ca9.png"] },
  { id:50, nome:"Camisa Night Ops", preco:150, categoria:"calca", imagens:["imagens/ca10.png"] },
  { id:51, nome:"Camisa Night Ops", preco:150, categoria:"calca", imagens:["imagens/ca11.png"] },
  { id:52, nome:"Camisa Night Ops", preco:150, categoria:"calca", imagens:["imagens/ca12.png"] },
  { id:53, nome:"Camisa Night Ops", preco:150, categoria:"calca", imagens:["imagens/ca13.png"] },
  { id:54, nome:"Camisa Night Ops", preco:150, categoria:"calca", imagens:["imagens/ca14.png"] },

  // JAQUETA
  { id:55, nome:"Jaqueta Nível I", preco:500, categoria:"jaqueta", imagens:["imagens/j1.png"] },
  { id:56, nome:"Jaqueta Nível II", preco:850, categoria:"jaqueta", imagens:["imagens/j2.png"] },
  { id:57, nome:"Jaqueta Nível III", preco:1200, categoria:"jaqueta", imagens:["imagens/j3.png"] },
  { id:58, nome:"Jaqueta Blindada Pro", preco:1800, categoria:"jaqueta", imagens:["imagens/j4.png"] },
  { id:59, nome:"Jaqueta Blindada Pro", preco:1800, categoria:"jaqueta", imagens:["imagens/j5.png"] },
  { id:60, nome:"Camisa Night Ops", preco:150, categoria:"jaqueta", imagens:["imagens/j6.png"] },
  { id:61, nome:"Camisa Night Ops", preco:150, categoria:"jaqueta", imagens:["imagens/j7.png"] },
  { id:62, nome:"Camisa Night Ops", preco:150, categoria:"jaqueta", imagens:["imagens/j8.png"] },
  { id:63, nome:"Camisa Night Ops", preco:150, categoria:"jaqueta", imagens:["imagens/j9.png"] },
  { id:64, nome:"Camisa Night Ops", preco:150, categoria:"jaqueta", imagens:["imagens/j10.png"] },
  { id:65, nome:"Camisa Night Ops", preco:150, categoria:"jaqueta", imagens:["imagens/j11.png"] },

  // MÁSCARA
  { id:66, nome:"Máscara Nível I", preco:500, categoria:"mascara", imagens:["imagens/m1.png"] },
  { id:67, nome:"Máscara Nível II", preco:850, categoria:"mascara", imagens:["imagens/m2.png"] },
  { id:68, nome:"Máscara Nível III", preco:1200, categoria:"mascara", imagens:["imagens/m3.png"] },
  { id:69, nome:"Máscara Blindada Pro", preco:1800, categoria:"mascara", imagens:["imagens/m4.png"] },
  { id:70, nome:"Máscara Blindada Pro", preco:1800, categoria:"mascara", imagens:["imagens/m5.png"] },
  { id:71, nome:"Camisa Night Ops", preco:150, categoria:"mascara", imagens:["imagens/m6.png"] },
  { id:72, nome:"Camisa Night Ops", preco:150, categoria:"mascara", imagens:["imagens/m7.png"] },
  { id:73, nome:"Camisa Night Ops", preco:150, categoria:"mascara", imagens:["imagens/m9.png"] },
  { id:74, nome:"Camisa Night Ops", preco:150, categoria:"mascara", imagens:["imagens/m10.png"] },
  { id:75, nome:"Camisa Night Ops", preco:150, categoria:"mascara", imagens:["imagens/m11.png"] },
  { id:76, nome:"Camisa Night Ops", preco:150, categoria:"mascara", imagens:["imagens/m12.png"] },
  { id:77, nome:"Camisa Night Ops", preco:150, categoria:"mascara", imagens:["imagens/m13.png"] },
  { id:78, nome:"Camisa Night Ops", preco:150, categoria:"mascara", imagens:["imagens/m14.png"] },

  // LUVA
  { id:79, nome:"Luva Nível I", preco:500, categoria:"luva", imagens:["imagens/l1.png"] },
  { id:80, nome:"Luva Nível II", preco:850, categoria:"luva", imagens:["imagens/l2.png"] },
  { id:81, nome:"Luva Nível III", preco:1200, categoria:"luva", imagens:["imagens/l3.png"] },
  { id:82, nome:"Luva Blindada Pro", preco:1800, categoria:"luva", imagens:["imagens/l4.png"] }
]




function carregarProdutoIndividual() {
  const box = document.getElementById("produtos");
  if (!box) return; // se não estiver na página card.html, não roda

  const id = new URLSearchParams(window.location.search).get("id");
  const p = produtos.find(x => x.id == id);

  if (!p) {
    box.innerHTML = "<p>Produto não encontrado.</p>";
    return;
  }

  box.innerHTML = `
  <div class="cartao border- mt-40 flex flex-col   w-full    lg:gap-x-10  lg: px-6 lg:px-0 ">
    <div class="w-full border-  flex-col lg:flex-row gap-x-6 flex">
    
     <div class="  lg:w-[33%] border-  h-[%]   flex lg: flex-col   ">
       <div class="imagem-principal h-full  border-[#2345ab] border-2 rounded-xl  ">
         <img src="${p.imagens}" alt="${p.nome}" class="w-full h-full  overflow-y-auto rounded-xl  ">
        </div>
     </div> 
  
    <div class="detalhe text-white mt-5 lg:mt-0  w-full mx- lg:w-[30%]   mx- flex flex-col pl- border- ">
    <p class="text-gray-500">
     Entrega Automática •</p>
    <h1 class="text-[40px] text-white">${p.nome}</h1>
    
    
    <hr class="pb-5 border-[#213e87]"></hr>
   
    
    
    <p class="text-2xl">R$ ${p.preco.toFixed(2)}</p>

    <button id="add" class="btn mt-10 lg:mt-auto border-2 border-transparent  hover:border-2 hover:border-[#5996db] p-5 rounded-xl bg-blue-500 w-full" onclick="adicionarAoCarrinho(${p.id})">
      Comprar
    </button>
    </div>
  
 <div class="bg-blue-900 bg-opacity-20 border-2  mt-4 lg:mt-0 mb-10 border-blue-800 rounded-xl p-4  lg:w-[35%]  h-32 backdrop-blur-sm">
   <h3 class="flex items-center text-sm font-bold text-blue-400 mb-2"><i class="fas fa-bolt mr-2"></i>Entrega Automática
   </h3>
   <p class="text-gray-400 text-xs leading-relaxed">
   A entrega é feita instantaneamente após a confirmação do pagamento. Seu software estará disponível em até 10 segundos.
    </p>
 </div>
 
    

  </div>
  
  <div class="descricao flex flex-col max-w-7xl mt-14 mx- pb-10  border- ">
    <h2 class="text-2xl font-bold mb-4">Descrição do Produto</h2>
    <div class="border-2 h- lg:h- rounded-lg px-10 pb-4    bg-[#090c13] border-gray-500/40 bg-opacity-20 backdrop-blur-sm">
    <div class="p-4 text-gray-300  mt- leading-relaxed">
       <p class="text-[24px]  pb-7"> ${p.nome}</p>
        <hr class="pb-7 border-[#213e87]"></hr>
      <p>
      ${p.nome} ${p.descricao}
      </p>
      
      <p class="mt-10 flex items-center gap-x-3 text-[24px] text-yellow-400">
        <i class="text-white w-5 h-5" data-lucide="triangle-alert"></i> Avisos Importantes
      </p>
      <ul class="list-disc list-inside mt-4">
        <li>Essa assinatura não possui Bypass..</li>
        <li>Certifique-se de ler os termos de uso antes de utilizar o software.</li>
        <li>O suporte técnico está disponível apenas durante o horário comercial.</li>
      </ul>
      <p class="mt-10 flex items-center gap-x-3 text-[24px] text-yellow-400"><i class="text-white w-5 h-5" data-lucide="shield-check"></i> 
      Segurança e Privacidade
      </p>
      <p class="mt-4">
      A segurança dos seus dados é nossa prioridade. ${p.nome} utiliza criptografia avançada para proteger suas informações pessoais e garantir uma experiência segura.
      </p>
      

      
      </div>

      </div>
   </div>

  

  `;

  lucide.createIcons();
}




carregarProdutoIndividual();





function adicionarAoCarrinho(id) {
  const produto = produtos.find(p => p.id === id)
  const item = carrinho.find(p => p.id === id);

  if (item) {
    item.pp++;
  } else {
     carrinho.push({ id: produto.id, nome: produto.nome, preco: produto.preco , pp: 1, imagem: produto.imagens[0],})
  }
  




  mostraCarrinho();
  abrirCarriho();
}


function mostraCarrinho() {
  const mostra = document.getElementById("carrinho");

  if (carrinho.length === 0) {
    mostra.innerHTML = `<p class="vazio">🛒 Seu carrinho está vazio</p>`;
    document.getElementById("total").innerText = "Total: R$ 0,00";
    return;
  }

  mostra.innerHTML = carrinho.map(p => `
  <div class="item" style="display:flex; align-items:center; justify-content:space-between; padding:10px; border-bottom:1px solid #444; gap:10px;">
  
  <img src="${p.imagem}" alt="${p.nome}" style="width:60px; height:60px; object-fit:cover; border-radius:8px;">

  <div style="flex:1; display:flex; flex-direction:column; justify-content:center;">
    <span style="font-weight:bold; color:#fff; font-size:14px;">${p.nome}</span>
    
  </div>

  <span style="font-size:14px; color:#fff;">x${p.pp}</span>
  <span style="font-weight:bold; color:#00bfff;">R$ ${(p.preco * p.pp).toFixed(2)}</span>

  <button onclick="removerDoCarrinho(${p.id}) " style="background:#ff4d4f; border:none; padding:6px 10px; border-radius:6px; color:#fff; cursor:pointer;">
    -
  </button>

</div>

`).join("");


  const total = carrinho.reduce((total, p) => total + p.preco * p.pp, 0);
  document.getElementById("total").innerText = "Total: R$ " + total.toFixed(2);
  
}
function removerDoCarrinho(id) {
  const item = carrinho.find(p => p.id === id );

  if (!item) return;

  if (item.pp > 1) {
    item.pp--;
  } else {
    carrinho = carrinho.filter(p => !(p.id === id));
  }

  mostraCarrinho();
}



const toggle = document.getElementById("toggle");
const menuCarrinho = document.getElementById("menuCarrinho");
const overlay = document.getElementById("overlay");
const fecha = document.getElementById("fechar");

function abrirCarriho() {
  menuCarrinho.classList.add("ativo");
  overlay.style.display = "block";
}

toggle.addEventListener("click", (e) => {
  e.stopPropagation();
  menuCarrinho.classList.toggle("ativo");
  overlay.style.display = menuCarrinho.classList.contains("ativo") ? "block" : "none";
});

fecha.addEventListener("click", () => {
  menuCarrinho.classList.remove("ativo");
  overlay.style.display = "none";
});

document.addEventListener("click", (e) => {
  if (!e.target.closest("#menuCarrinho") && !e.target.closest("#add")) {
    menuCarrinho.classList.remove("ativo");
    overlay.style.display = "none";
  }
})


menuCarrinho.addEventListener("click", (e) => e.stopPropagation());






mostraCarrinho();
