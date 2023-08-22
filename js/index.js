


var nameInput = document.getElementById('SiteName');
var urlInput = document.getElementById('UrlName');

var submit = document.getElementById('button');



var myalert = document.getElementById('myalert');








var bookContainer = [];






if(localStorage.getItem("books") != null){

    bookContainer = JSON.parse( localStorage.getItem("books"));
    displayBook(bookContainer);

}










function validation(){
    var rejex = /^www\.[A-z]{1,9}\.[a-z]{3}$/;
    return rejex.test(urlInput.value)== true;
    
}

function closealert(){
    myalert.classList.replace('d-block', 'd-none')
}





function addBook(){

    if (validation() == true){
    var book = {
        name: nameInput.value,
        url: urlInput.value,
    }

    bookContainer.push(book);
    localStorage.setItem("books", JSON.stringify(bookContainer));


    displayBook();
    clearForm()
    
}
else{
    myalert.classList.replace('d-none', 'd-block');
}
}







function displayBook(){

    var cartona = ``;

    for(var i=0; i<bookContainer.length; i++ ){

        cartona += `
        <tr>

            <td>${i}</td>
            <td>${bookContainer[i].name}</td>
            <td><a href="${bookContainer[i].url}"><button class="btn btn-visit"><i class="fa-solid fa-eye pe-2"></i>visit</button></a></td>
            <td><button onclick="deleteBook(${i})" class="btn btn-delete"><i class="fa-solid fa-trash-can pe-2"></i>Delete</button></td>
                    
        </tr>
        `
    }

    document.getElementById('tableData').innerHTML= cartona;



}


function clearForm(){
    nameInput.value = "";
    urlInput.value = "";
}


function deleteBook(index){

    bookContainer.splice(index, 1);
    localStorage.setItem("books", JSON.stringify(bookContainer)); 
    displayBook(bookContainer);

}

