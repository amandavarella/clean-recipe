function remove_enters(text){
    return text.replace(/\n/g," ");
  }
  
  function add_enters_when_dot(text){
    return text.replace(/\./g,".\n");
  }
  
  function clean_text(text){
    let output = add_enters_when_dot(remove_enters(text));
    document.getElementById("txt_output").value=output;
  }
  
  