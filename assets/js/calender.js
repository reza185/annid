


// سیستم آتشبازی
function createFirework() {
    const firework = document.createElement('div');
    firework.className = 'firework';
    
    // تنظیمات موقعیت و رنگ
    const colors = ['#896EFF', '#120645', '#ffd200', '#ff6600'];
    firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    firework.style.left = `${Math.random() * 100}%`;
    firework.style.top = `${Math.random() * 100}%`;
    
    document.getElementById('calendar').appendChild(firework);
    
    // حذف المان پس از انیمیشن
    setTimeout(() => firework.remove(), 1000);
}

// سیستم بروزرسانی تقویم
function updateCalendar() {
    const now = new Date();
    const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    const daysLeft = lastDay.getDate() - now.getDate();
    const calendar = document.getElementById('calendar');
    const daysLeftElement = document.getElementById('days-left');

    daysLeftElement.textContent = daysLeft;
    if(daysLeft === 0) {
        calendar.classList.add('last-day');
        daysLeftElement.textContent = 'وقتشه ';
        
        // فعالسازی افکتها
        
        const fireworkInterval = setInterval(createFirework, 50);
        setTimeout(() => clearInterval(fireworkInterval), 6000);
        
    } else {
        calendar.classList.remove('last-day');
        daysLeftElement.textContent = daysLeft;
    }
}

// اجرای اولیه و تنظیمات زمانبندی
updateCalendar();
setInterval(updateCalendar, 60000);