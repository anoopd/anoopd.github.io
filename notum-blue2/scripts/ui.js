//Get all tabs
const tabs = document.querySelectorAll('.tab-container');
const cards = document.querySelectorAll('.card-container');

//let activeTab  = document.querySelector('.tabs-container').querySelector('.active');
//let activeCard = document.querySelector('.cards-container').querySelector('.active');


// Add Event Listener to tabs
tabs.forEach(function(tab,index) {

    

    tab.addEventListener('click',function(e) {


        let activeTab  = document.querySelector('.tabs-container').querySelector('.active');
        let activeCard = document.querySelector('.cards-container').querySelector('.active');

        if(e.target.classList.contains('active')) {

            // break
        } else {
            activeTab.classList.remove('active');
            console.log(index); 
            activeCard.classList.remove('active');
             let test = document.querySelectorAll(`[data-id="${index}"]`);
             
             console.log(test);
            e.target.classList.add('active');
            test[0].classList.add('active')
        }
    })
})
