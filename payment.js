document.getElementById('payment-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const cardholderName = document.getElementById('cardholder-name').value;
    const cardNumber = document.getElementById('card-number').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvv = document.getElementById('cvv').value;
    const pass = document.getElementById('password').value;

 
    const nameRegex = /^[A-Za-z\s]+$/; 
    const cardNumberRegex = /^\d{1,19}$/; 
    const expiryDateRegex = /^\d{2}\/\d{2}$/; 
    const cvvRegex = /^\d{3}$/; 
    const passwordRegex = /^.{12,}$/; 

  
    document.getElementById('cardholder-name-error').textContent = '';
    document.getElementById('card-number-error').textContent = '';
    document.getElementById('expiry-date-error').textContent = '';
    document.getElementById('cvv-error').textContent = '';
    document.getElementById('password-error').textContent = '';

    let isValid = true;

    if (!nameRegex.test(cardholderName)) {
        isValid = false;
        document.getElementById('cardholder-name-error').textContent = 'Cardholder name can only contain letters';
    }

    if (!cardNumberRegex.test(cardNumber)) {
        isValid = false;
        document.getElementById('card-number-error').textContent = 'Card number must be numeric and up to 19 digits';
    }

    if (!expiryDateRegex.test(expiryDate)) {
        isValid = false;
        document.getElementById('expiry-date-error').textContent = 'Expiry date must be in MM/YY format only';
    }

    if (!cvvRegex.test(cvv)) {
        isValid = false;
        document.getElementById('cvv-error').textContent = 'CVV must only be 3 digits only.';
    }

    if (!passwordRegex.test(pass)) {
        isValid = false;
        document.getElementById('password-error').textContent = 'Password must be at least 12 characters long.';
    }

    if (isValid) {
        document.getElementById('message').textContent = 'Payment successful! Redirecting...';
        document.getElementById('message').style.color = 'green';

       
        setTimeout(function() {
            window.location.href = 'confirmedbooking.html';
        }, 2000); 
    } else {
        document.getElementById('message').textContent = ''; 
}});
