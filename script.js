function go(){

    let html = document.getElementById('html').value;
    let css = document.getElementById('css').value;
    let javascript = document.getElementById('js').value;
    let output = document.getElementById('output');


    output.contentDocument.body.innerHTML =html + '<style>'+css+ '</style>';
    output.contentWindow.eval(javascript);
   
  }
