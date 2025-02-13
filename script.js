document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
  
    // In a real-world scenario, you would send this data to a server
    alert(`Thank you for your message, ${name}! We will get back to you at ${email}.`);
    
    // Clear the form
    document.getElementById('contact-form').reset();
  });
  