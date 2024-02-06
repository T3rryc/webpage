document.getElementById("newItem").addEventListener("keydown", function(event) {
    if (event.key === 'Enter') {
        addItem();
    }
});

function addItem() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("newItem").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);

    if (inputValue === '') {
        alert("You must write something!");
    } else {
        document.getElementById("myList").appendChild(li);
    }
    document.getElementById("newItem").value = "";
}