function showAlert() {
    let searchQuery = document.querySelector('#search').value;
  
    if (searchQuery) {
      alert("Search Query: " + searchQuery);
    }
  }
  function showMessage() {
    let myMessage = "hello there stranger!";
    alert(myMessage);
  }