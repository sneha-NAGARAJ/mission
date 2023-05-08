
    function element(k) {
        document.getElementById("sendvalue").value +=k;
        
    }

    function findresult() {
      var result = eval(sendvalue.value)
      sendvalue.value = result;
    }
    
    function finish() {
      sendvalue.value =sendvalue.value.slice(0,0)
      
    }

    
    
    


















