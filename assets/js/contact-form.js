document.getElementById('customContactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('customName').value;
    const email = document.getElementById('customEmail').value;
    const subject = document.getElementById('customSubject').value;
    const message = document.getElementById('customMessage').value;

    const text = `نام: ${name}%0Aایمیل: ${email}%0Aموضوع: ${subject}%0Aپیام: ${message}`;

    const token = '7802167147:AAGprsKkm44swo-1J0Ec_N7TCtxeiaBdSSg'; // توکن ربات خود را اینجا قرار دهید
    const chatId = '827125220'; // شناسه چت خود را اینجا قرار دهید

    // استفاده از متد GET
    fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${text}`, {
        method: 'GET'
    })
    .then(response => response.json())
    .then(data => {
        console.log('Response:', data);
        if (data.ok) {
            document.querySelector('.customFormMessage').innerText = 'پیام شما با موفقیت ارسال شد!';
        } else {
            document.querySelector('.customFormMessage').innerText = 'خطا در ارسال پیام: ' + data.description;
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.querySelector('.customFormMessage').innerText = 'خطا در ارتباط با سرور.';
    });
});
