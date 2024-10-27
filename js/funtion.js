function getInputValueId(id){
    return parseFloat(document.getElementById(id).value);


}

function getToFixed(value){
  let newValue = value.toFixed(2)
  return newValue
}
function showError(id) {
    document.getElementById(id).classList.remove("hidden");
  }
function showAdd(id) {
    document.getElementById(id).classList.add("hidden");
  }




