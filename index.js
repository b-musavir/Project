document.getElementById("login").addEventListener("click", function(event) {
    event.preventDefault(); 
    
    // Get the entered email and password
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    // Check if the entered email and password match your desired credentials
    if (email == "admin1@gmail.com"  && password == "admin1") 
    {
        window.location.href = "my_company.html"; // Redirect to the Home.html page
    }
    else if (email == "admin2@gmail.com"  && password == "admin2") 
    {
        window.location.href = "my_company.html"; // Redirect to the Home.html page
    }
     else {
        alert("Invalid email or password"); // Show an error message if the credentials are incorrect
    }
});
