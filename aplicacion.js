function iniciarSesion()
{
          var obj = $('#datos').serializeJSON();
          var jsonString = JSON.stringify(obj);
          $('#resProcess').modal('show');
          $.ajax({
              type: "POST",
              url: "https://cors-anywhere.herokuapp.com/http://app.fussionmd.com/app/app-01-01.php",
              data: jsonString,
              contentType: "application/json; charset=utf-8",
              dataType: "json",
              success: function(data){
                  $('#resProcess').modal('hide');
                  if(data.exito==1)
                  {
                      localStorage.setItem("codigousuario", data.codigousuario);
                      localStorage.setItem("codigopromotoria", data.codigopromotoria);
                      localStorage.setItem("codigotienda", data.codigotienda);
                      localStorage.setItem("tiposimagenes", data.tiposimagenes);
                      localStorage.setItem("productos", data.productos);
                      localStorage.setItem("correo", data.correo);
                      localStorage.setItem("password", data.password);
                       window.location="index.html";
                  }
                  else
                  {
                          document.getElementById('divErrores').innerHTML = "<div class=\"alert alert-danger\"><strong>"+data.error+"</div>";
                                $('#resError').modal('show');
                            setTimeout(function(){
                                $('#resError').modal('hide');
                          },2000);
                          //alert("Error al procesar la solicitud.\n<-Valide la siguiente informacion->\n\n"+mensaje);
                         
                  }
              },
              failure: function(errMsg) {
                  alert('Error al enviar los datos.');
              }
          });
            
      
        }

function reiniciarSesion()
{
          var obj = $('#datos').serializeJSON();
          var jsonString = JSON.stringify(obj);
    
            localStorage.removeItem("codigousuario");
            localStorage.removeItem("codigopromotoria");
            localStorage.removeItem("codigotienda");
            localStorage.removeItem("tiposimagenes");
            localStorage.removeItem("productos");
            localStorage.removeItem("correo");
            localStorage.removeItem("password");
          
          $.ajax({
              type: "POST",
              url: "https://cors-anywhere.herokuapp.com/http://app.fussionmd.com/app/app-01-01.php",
              data: jsonString,
              contentType: "application/json; charset=utf-8",
              dataType: "json",
              success: function(data){
                 
                  
                      localStorage.setItem("codigousuario", data.codigousuario);
                      localStorage.setItem("codigopromotoria", data.codigopromotoria);
                      localStorage.setItem("codigotienda", data.codigotienda);
                      localStorage.setItem("tiposimagenes", data.tiposimagenes);
                      localStorage.setItem("productos", data.productos);
                      localStorage.setItem("correo", data.correo);
                      localStorage.setItem("password", data.password);
                      window.location="index.html";
                  
              },
              failure: function(errMsg) {
                  alert('Error al enviar los datos.');
              }
          });
            
      
        }

function validarSesion()
{
    if(localStorage.getItem("codigousuario"))
       {
            var eCodUsuario = localStorage.getItem("codigousuario");
        if(parseInt(eCodUsuario)<1)
            { window.location="login.html"; }
        var eCodPromotoria = localStorage.getItem("codigopromotoria");
        if(localStorage.getItem("codigopromotoria")>0)
        {
            
        }
        else
        {
            alert("Sin promotorias para el dia de hoy!"); window.location="login.html"; 
        }
    }   
    else
        {
            window.location="login.html"; 
        }
    
}

function cargarObjetos()
{
    document.getElementById('eCodUsuario').value = localStorage.getItem("codigousuario");
    document.getElementById('eCodPromotoria').value = localStorage.getItem("codigopromotoria");
    if(document.getElementById('tdTienda'))
        {
    document.getElementById('tdTienda').innerHTML = localStorage.getItem("codigotienda");
        }
    if(document.getElementById('tdTiposImagenes'))
        {
    document.getElementById('tdTiposImagenes').innerHTML = 
    localStorage.getItem("tiposimagenes");
        }
    if(document.getElementById('tdProductos'))
        {
    document.getElementById('tdProductos').innerHTML = 
    localStorage.getItem("productos");
        }
}

function cerrarSesion()
{
    if(confirm("Cerrar sesion?"))
        {
            localStorage.removeItem("codigousuario");
            localStorage.removeItem("codigopromotoria");
            localStorage.removeItem("codigotienda");
            localStorage.removeItem("tiposimagenes");
            localStorage.removeItem("productos");
            localStorage.removeItem("correo");
            localStorage.removeItem("password");
            window.location="login.html"; 
        }
}

function consultarArrastres()
{
         var eCodTienda         = document.getElementById('eCodTienda');
         var eCodProducto       = document.getElementById('eCodProducto');
         var eCodPresentacion   = document.getElementById('eCodPresentacion');
          
          if(eCodTienda.value && eCodProducto.value && eCodPresentacion.value)
              {
                var obj = $('#datos').serializeJSON();
                var jsonString = JSON.stringify(obj);
                
                var eInicial = document.getElementById('eInicial');
                
                $.ajax({
                    type: "POST",
                    url: "https://cors-anywhere.herokuapp.com/http://app.fussionmd.com/con/oper-mov-prm.php",
                    data: jsonString,
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function(data){
                        eInicial.value = data.inicial;
                        if(parseInt(eInicial.value)>0)
                            {
                                eInicial.readOnly = true;
                            }
                    },
                    failure: function(errMsg) {
                        alert('Error al enviar los datos.');
                    }
                });
              }
             
          
      }
    
function consultarPresentaciones()
{
         var eCodTienda         = document.getElementById('eCodTienda');
         var eCodProducto       = document.getElementById('eCodProducto');
          
          if(eCodTienda.value && eCodProducto.value)
              {
                var obj = $('#datos').serializeJSON();
                var jsonString = JSON.stringify(obj);
                
                var eCodPresentacion = document.getElementById('eCodPresentacion');
                
                $.ajax({
                    type: "POST",
                    url: "https://cors-anywhere.herokuapp.com/http://app.fussionmd.com/con/prod-pres.php",
                    data: jsonString,
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                    success: function(data){
                        eCodPresentacion.innerHTML = data.tHTML;
                    },
                    failure: function(errMsg) {
                        alert('Error al enviar los datos.');
                    }
                });
              }
             
          
      }

function enviarDatos()
{           
            var obj = $('#datos').serializeJSON();
          var jsonString = JSON.stringify(obj);
          
          $.ajax({
              type: "POST",
              url: "https://cors-anywhere.herokuapp.com/http://app.fussionmd.com/app/app-01-01.php",
              data: jsonString,
              contentType: "application/json; charset=utf-8",
              dataType: "json",
              success: function(data){
                  if(data.exito==1)
                  {
                      alert("Informacion almacenada exitosamente");
                      setTimeout(function(){ window.location="index.html"; }, 500);
                      
                  }
                  else
                      {
                         
                          var mensaje="";
                          for(var i=0;i<data.errores.length;i++)
                     {
                         mensaje += "-"+data.errores[i]+"\n";
                     }
                          alert("Error al procesar la solicitud.\n<-Valide la siguiente informacion->\n\n"+mensaje);
                         
                      }
              },
              failure: function(errMsg) {
                  alert('Error al enviar los datos.');
              }
          });    
        }

function consultarDatos()
{           
            var obj = $('#datos').serializeJSON();
          var jsonString = JSON.stringify(obj);
          
          $.ajax({
              type: "POST",
              url: "https://cors-anywhere.herokuapp.com/http://app.fussionmd.com/app/app-01-01.php",
              data: jsonString,
              contentType: "application/json; charset=utf-8",
              dataType: "json",
              success: function(data){
                  document.getElementById('divXHR').innerHTML = data.tHTML;
              },
              failure: function(errMsg) {
                  alert('Error al enviar los datos.');
              }
          });    
        }

function guardarImagen(indice) 
{
  var preview = document.getElementById('imgArchivo'+indice);
  var file    = document.getElementById('tArchivo'+indice).files[0];
  var reader  = new FileReader();

  reader.onloadend = function () {
    preview.value = reader.result;
      indice++;
      agregarFilaArchivo(indice);
  }

  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.value = "";
  }
}

function agregarFilaArchivo(indice)
{
        var x = document.getElementById("imagenes").rows.length;
        
        
        var eCodProducto = document.getElementById('imgArchivo'+indice);
        if(eCodProducto)
            {}
        else
        {
           
    var table = document.getElementById("imagenes");
    var row = table.insertRow(x);
    row.id="img"+(indice);
    row.innerHTML = '<label for="tArchivo'+indice+'" class="form-control btn btn-info"><i class="fas fa-camera"></i> Tomar/subir Foto</label><input type="file" id="tArchivo'+indice+'" onchange="guardarImagen(\''+indice+'\')" accept="image/*;capture=camera" capture="camera"><input type="hidden" id="imgArchivo'+indice+'" name="fotos['+indice+'][tArchivo]">';
        }
        
    }