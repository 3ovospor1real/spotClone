const greeting = document.querySelector('#greeting');
const date = new Date();
let hour = date.getHours()

if(hour >= 6 & hour < 12) {
    greeting.innerHTML = 'Bom dia'
} else if (hour >= 12 & hour < 18) {
    greeting.innerHTML = 'Boa tarde'
} else {
    greeting.innerHTML = 'Boa noite'
}