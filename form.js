var getData = function () {
  var name = document.getElementById("name").value;
  var mail = document.getElementById("mail").value;
  var company = document.getElementById("company").value;
  var msg = document.getElementById("msg").value;
  var expresion = /\w+@\w+\.+[a-z]/;
  if (name === "" || mail === "" || company === "" || msg === "") {
    swal({
      title: "Faltan datos",
      text: "Completa los datos por favor.",
      icon: "warning",
      button: "OK",
    });
    return false;
  } else {
    if (name.length > 50) {
      swal({
        title: "Nombre incorrecto",
        text: "Ingresa tu nombre completo por favor.",
        icon: "warning",
        button: "OK",
      });
      return false;
    } else {
      if (name.length < 15) {
        swal({
          title: "Nombre incorrecto",
          text: "Ingresa tu nombre completo por favor.",
          icon: "warning",
          button: "OK",
        });
        return false;
      } else {
        if (mail.length > 100) {
          swal({
            title: "Correo inválido largo",
            text: "El correo es muy largo.",
            icon: "warning",
            button: "OK",
          });
          return false;
        } else {
          if (!expresion.test(mail)) {
            swal({
              title: "Correo inválido",
              text: "Ingresa nuevamente el correo por favor.",
              icon: "warning",
              button: "OK",
            });
            return false;
          } else {
            if (msg.length < 15) {
              swal({
                title: "Mensaje inválido",
                text: "Escribe un poco más de lo que te interesa por favor.",
                icon: "warning",
                button: "OK",
              });
              return false;
            } else {
              console.log("Los datos enviados han sido:");
              console.log("Nombre: ", name);
              console.log("E-mail: ", mail);
              console.log("Compañía: ", company);
              console.log("Mensaje: ", msg);
              document.getElementById("name").value = "";
              document.getElementById("mail").value = "";
              document.getElementById("company").value = "";
              document.getElementById("msg").value = "";
              swal({
                title: "Datos enviados",
                text: "Muchas gracias, en breve nos contactaremos.",
                icon: "success",
                button: "OK",
              });
            }
          }
        }
      }
    }
  }
};

window.addEventListener("load", mostrar_cat1);
function mostrar_cat1() {
  var x = document.getElementById("alertacat1info");
  var btndoc = document.getElementById("alertacat1doc");
  var btn = document.getElementById("btn-cat1");
  if (x.style.display === "none") {
    x.style.display = "block";
    btndoc.style.display = "block";
    btn.value = "Menos información";
  } else {
    x.style.display = "none";
    btndoc.style.display = "none";
    btn.value = "Más información";
  }
}

window.addEventListener("load", mostrar_cat2);
function mostrar_cat2() {
  var x = document.getElementById("alertacat2info");
  var btndoc = document.getElementById("alertacat2doc");
  var btn = document.getElementById("btn-cat2");
  if (x.style.display === "none") {
    x.style.display = "block";
    btndoc.style.display = "block";
    btn.value = "Menos información";
  } else {
    x.style.display = "none";
    btndoc.style.display = "none";
    btn.value = "Más información";
  }
}

window.addEventListener("load", mostrar_cat3);
function mostrar_cat3() {
  var x = document.getElementById("alertacat3info");
  var btndoc = document.getElementById("alertacat3doc");
  var btn = document.getElementById("btn-cat3");
  if (x.style.display === "none") {
    x.style.display = "block";
    btndoc.style.display = "block";
    btn.value = "Menos información";
  } else {
    x.style.display = "none";
    btndoc.style.display = "none";
    btn.value = "Más información";
  }
}
