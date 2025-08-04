  const form = document.getElementById("contact-form");
  const response = document.getElementById("form-response");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent page reload

    const formData = new FormData(form);

    fetch(form.action, {
      method: "POST",
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(responseData => {
      response.innerText = "✅ Message sent successfully!";
      form.reset();
    }).catch(error => {
      response.innerText = "❌ Failed to send. Please try again.";
      console.error(error);
    });
  });