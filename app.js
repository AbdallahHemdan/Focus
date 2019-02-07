function AddNewItem() {
    let item = document.getElementById('input').value;
    let Unorderedlist = document.getElementById('List');

    let ListItem = document.createElement("li");

    ListItem.appendChild(document.createTextNode("- " + item));

    Unorderedlist.appendChild(ListItem);

    document.getElementById("input").value = "";

    ListItem.onclick = RemoveItem;
}


document.body.onkeyup = function (e) {
    //13 ==> The Code Of Enter Key
    if (e.keyCode == 13) {
        AddNewItem();
    }
}

// Function To Remove The List Item On The Click over The List Item
function RemoveItem(e){
    e.target.parentElement.removeChild(e.target);
}
