function remove_enters(text){
    return text.replace(/\n/g," ");
  }
  
  function add_enters_when_dot(text){
    return text.replace(/\./g,".\n");
  }

  function break_on_numbers(text){
    return text.replace(/(([0-9]+)*\/*[0-9]+\s)/g,'\n$1').replace(/^\n/,"");
  }
  
  function clean_text(text){
    let output = break_on_numbers(add_enters_when_dot(remove_enters(text)));
    document.getElementById("txt_output").value=output;
  }
  
  function clear_fields(input, output){
    input.value="";
    output.value="";
  }