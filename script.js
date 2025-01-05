function submitForm() {
    const form = document.getElementById('form');
    
    const formData = new FormData(form);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
    console.log('Form Data:', data);

    alert("Съобщението е изпратено!");
  }
  