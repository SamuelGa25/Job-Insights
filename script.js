

document.getElementById('signinForm').addEventListener('submit', function(event) {

    event.preventDefault(); // Prevent form submission
    
    // Get user input
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    
    // Perform validation (you can add more robust validation)
    if (email === 'example@example.com' && password === 'password') {
      // Redirect user to dashboard or any other page after successful sign-in
      window.location.href = 'dashboard.html';
    } else {
      // Display error message if sign-in fails
      document.getElementById('errorMessage').textContent = 'Invalid email or password';
    }

  });


  //create an account
  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  
  // Function to send email notification
  async function sendEmailNotification(email) {
    const msg = {
      to: email,
      from: 'your@email.com', // Replace with your email address
      subject: 'Welcome to Job Insights!',
      text: 'Thank you for creating an account with Job Insights. We look forward to helping you with your job search.',
      // You can also include HTML content for richer email formatting
    };
    try {
      await sgMail.send(msg);
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  }
  
  // Call the sendEmailNotification function when a new account is created
  // Example: sendEmailNotification(newUser.email);
  
  