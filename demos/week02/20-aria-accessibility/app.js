const notifcationArea = document.getElementById('notificationArea')

const notificationButton = document.getElementById('notificationButton')

notificationButton.addEventListener('click', function() {
    notifcationArea.innerText = 'New email!'
})