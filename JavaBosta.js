const form = document.querySelector("form");
const h2 = document.querySelector("pre");
const Pergunta = document.querySelector("#Pergunta")

const Perguntas = [
"O que é eletroquímica?",
"Qual é a principal função da ponte salina em uma pilha eletroquímica?",
`Em uma pilha eletroquímica funcionando espontaneamente, em qual sentido os elétrons percorrem o circuito externo?`,
`Na eletrólise, o que acontece com os íons positivos (cátions) ao 
chegarem ao cátodo?`]


form.Op1.addEventListener("click", e => {
    if(Perguntas.includes("O que é eletroquímica?")){
       Perguntas.shift();
       Pergunta.innerText = Perguntas[0]
       form.Op1.value = "Impedir a passagem de íons entre as soluções."
       form.Op2.value = "Permitir a movimentação de íons e manter o equilíbrio das cargas elétricas."
       form.Op3.value = "Produzir elétrons para o funcionamento da pilha."
       form.Op4.value = "Aumentar a temperatura das soluções."
       h2.innerText = "";
    }else{
       h2.style.color = "orange";
       h2.style.fontWeight = "bold";
       h2.innerHTML = `❌ Resposta incorreta! Tente novamente e revise o conteúdo estudado.`;

      h2.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    e.preventDefault();
})

form.Op2.addEventListener("click", e => {
    if(Perguntas.includes("Qual é a principal função da ponte salina em uma pilha eletroquímica?") && 
       Perguntas.includes("O que é eletroquímica?") == false){
       
       Perguntas.shift();
       Pergunta.innerText = Perguntas[0]
       form.Op1.value = "Do cátodo para o ânodo"
       form.Op2.value = "Da ponte salina para o cátodo"
       form.Op3.value = "Do ânodo para o cátodo."
       form.Op4.value = "Da solução para a ponte salina, sem passar pelos eletrodos."
       h2.innerText = "";
    }else{
       h2.style.color = "orange";
       h2.innerHTML = `❌ Ops, quase lá!<br>
       Continue tentando, você está aprendendo!<br><br>
       📞 Apoio emocional:<br>
       • Ligue 188 (CVV)<br>
       • CAPS em sua cidade<br>
       • Disque 136 (SUS)<br>`;

      h2.scrollIntoView({ behavior: "smooth", block: "center" });
    }    
    e.preventDefault();
})

form.Op3.addEventListener("click", e => {
    if(Perguntas.includes("Em uma pilha eletroquímica funcionando espontaneamente, em qual sentido os elétrons percorrem o circuito externo?") && 
       Perguntas.includes("Qual é a principal função da ponte salina em uma pilha eletroquímica?") == false){
       
       Perguntas.shift();
       Pergunta.innerText = Perguntas[0]
       form.Op1.value = "Sofrem oxidação, perdendo elétrons."
       form.Op2.value = "Transformam-se em ânions"
       form.Op3.value = "Liberam prótons para a solução"
       form.Op4.value = "Sofrem redução, recebendo elétrons"
       h2.innerText = "";
    }else{
       h2.style.color = "orange";
       h2.innerHTML = `❌ Não foi dessa vez 😅<br>
       Mas cada erro é uma chance de aprender!<br><br>
       📞 Apoio disponível:<br>
       • 188 (CVV – 24h)<br>
       • CAPS em sua cidade<br>
       • 136 (SUS)<br>`;

      h2.scrollIntoView({ behavior: "smooth", block: "center" });
    }  
    e.preventDefault();
})

form.Op4.addEventListener("click", e => {
     if (Perguntas.includes("Em uma pilha eletroquímica funcionando espontaneamente, em qual sentido os elétrons percorrem o circuito externo?") == false){
       h2.style.color = "green";
       h2.innerText = "🎉 Você acertou todas! Continue cuidando de você e apoiando quem precisa.";
       
       Perguntas.unshift("🎉 Parabéns! Você concluiu o quiz!");
       Pergunta.innerText = Perguntas[0]
       h2.innerText = "";
       form.Op1.disabled = true;
       form.Op2.disabled = true;
       form.Op3.disabled = true;
       form.Op4.disabled = true;
     }else{
       h2.style.color = "orange";
       h2.innerHTML = `❌ Essa não está correta.<br>
       Mas não desanime, tente novamente!<br><br>
       📞 Precisa conversar?<br>
       • 188 (CVV)<br>
       • CAPS em sua cidade<br>
       • 136 (SUS)<br>`;

      h2.scrollIntoView({ behavior: "smooth", block: "center" });
     }  
    e.preventDefault();
})