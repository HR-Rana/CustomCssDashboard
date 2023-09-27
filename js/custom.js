

// Dashboard page 


 const ctx = document.getElementById('myChart');

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [32, 89, 53, 75, 50, 83],
                    borderWidth: 1
                }]
            },
            options: {
                animations: {
                    tension: {
                        duration: 1000,
                        easing: 'linear',
                        from: 1,
                        to: 0,
                        loop: true
                    }
                },
                scales: {
                    y: {
                        min: 0,
                        max: 100
                    }
                }
            }
        });

        const views = document.getElementById('New-clients');

        new Chart(views, {
            type: 'bar',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [32, 89, 53, 75, 50, 83],
                    borderWidth: 1
                }]
            },
            options: {
                animations: {
                    tension: {
                        duration: 1000,
                        easing: 'linear',
                        from: 1,
                        to: 0,
                        loop: true
                    }
                },
                scales: {
                    y: {
                        min: 0,
                        max: 100
                    }
                }
            }
        });
        const Earning = document.getElementById('Week-Earning');

        new Chart(Earning, {
            type: 'doughnut',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [32, 89, 53, 75, 50, 83],
                    borderWidth: 1
                }]
            },
            options: {
                animations: {
                    tension: {
                        duration: 1000,
                        easing: 'linear',
                        from: 1,
                        to: 0,
                        loop: true
                    }
                },
                scales: {
                    y: {
                        min: 0,
                        max: 100
                    }
                }
            }
        });
        const visitor = document.getElementById('Revenue');

        new Chart(visitor, {
            type: 'polarArea',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [32, 89, 53, 75, 50, 83],
                    borderWidth: 1
                }]
            },
            options: {
                animations: {
                    tension: {
                        duration: 1000,
                        easing: 'linear',
                        from: 1,
                        to: 0,
                        loop: true
                    }
                },
                scales: {
                    y: {
                        min: 0,
                        max: 100
                    }
                }
            }
        });
        const pro = document.getElementById('Progress');

        new Chart(pro, {
            type: 'line',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [32, 89, 53, 75, 50, 83],
                    borderWidth: 1
                }]
            },
            options: {
                animations: {
                    tension: {
                        duration: 1000,
                        easing: 'linear',
                        from: 1,
                        to: 0,
                        loop: true
                    }
                },
                scales: {
                    y: {
                        min: 0,
                        max: 100
                    }
                }
            }
        });










        // Notifications Delet


        function RemoveNotification(){
        const notificationBox = document.querySelector(".notificaton-box");
         const notificatons2 = document.querySelectorAll(".alert-box");
            notificationBox.style.display="none"
            notificationBox.style.transition=".5s";
            if (notificatons2.length <= 0) {
                const p = document.createElement("p");
            p.innerText = "there are no Notifications..!";
            p.style.color='gray';
            notificatons2.push(p)
            }else{
                console.log("some data are available....")
            }
           

        };  


        function 