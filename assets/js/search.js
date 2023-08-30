function handleSearch() {
    const searchKeyword = document.getElementById("searchText").value.toLowerCase();
    const items = document.querySelectorAll(".col-lg-3");
    
    // Cria um array para armazenar os itens correspondentes à pesquisa
    const matchingItems = [];
    
    items.forEach(item => {
      const itemName = item.querySelector("h4").textContent.toLowerCase();
      if (itemName.includes(searchKeyword)) {
        matchingItems.push(item);
      } else {
        item.style.opacity = "0"; // Aplica o efeito de fade
      }
    });

    // Remove os itens correspondentes à pesquisa do contêiner
    matchingItems.forEach(item => {
      item.style.opacity = "1"; // Remove o efeito de fade
      item.parentNode.prepend(item); // Move o item para o topo
    });
}

document.getElementById("searchText").addEventListener("input", handleSearch);
