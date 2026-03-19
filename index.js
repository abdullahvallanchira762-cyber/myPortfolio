 const menuLinks = document.querySelectorAll(".top a");
  const menuToggle = document.getElementById("menu-toggle");

  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      menuToggle.checked = false; //After user click the menu contents it will close menu
    });
  });

//script for Mail box..
function sendMail() {
  var mailbox = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_wl85tif";
  const templateID = "template_3780jik";

    emailjs.send(serviceID, templateID, mailbox)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message sent successfully.Thank you!")

    })
    .catch(err=>console.log(err));

}