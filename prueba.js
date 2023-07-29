$.ajax({
    url: 'http://localhost:3004/hola',
    dataType: 'json',
    success: function(data) {
      console.log(data);
    }
  })