let currentTab = "formacao";
function changeTab(page) {
    /*Decidi por ter uma variável com a aba atual e só alterar ela, para facilitar a alteração do botão também
    Uma outra opção seria document.getElementById("div_id").style.display = "none"; para cada div
    Uma terceira opção seria usar querySelectorAll("main div"), aqui pode ser exagero já que são apenas 4 divs, mas evita repetição de código*/
    document.getElementById(currentTab).style.display = "none";
    document.getElementById(currentTab + "Btn").classList.remove("active");
    
    currentTab = page;
    document.getElementById(page).style.display = "";
    document.getElementById(page + "Btn").classList.add("active");
}

document.querySelector("form").addEventListener('submit', function(event) {
    event.preventDefault();
});