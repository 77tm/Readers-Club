window.onload=function(){

    function showList() {                                           //show/hide books
        var moreLi = document.getElementById("show-more");
        var btnText = document.getElementById("show-btn");
      
        if (moreLi.style.display === "none") {
          moreLi.style.display = "inline";
          btnText.innerHTML = "Show less";
        } else {
          moreLi.style.display = "none";
          btnText.innerHTML = "Show more";
        }
    }

    let showBtn = document.getElementById("show-btn");
    showBtn.addEventListener('click', showList);

// ...      ...     ...     ...     ...

    let addBookBtn = document.getElementById('add-btn');            //add a book to the list
    let inputField = document.getElementById('input-field');
    let bookList = document.getElementById('show-more');

    addBookBtn.addEventListener('click', function(){

        if(inputField.value == "" || inputField.value == " "){
            alert("You must enter something")
        }else{
            var listElement = document.createElement('li');
            listElement.innerText = inputField.value;
            bookList.appendChild(listElement);
            inputField.value = "";
        }
    })
}