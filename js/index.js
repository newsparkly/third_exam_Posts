var elBox = document.querySelector('.all-wrapper');

function render (parameter) {
    for(let i = 0; i < parameter.length; i++)  {
        let indeksOfUser = parameter[i];
        let nameOfUser = indeksOfUser.user.name;
        let userName1 = indeksOfUser.user.username;
        let imgUser = indeksOfUser.user.website;
        let titleUser = indeksOfUser.title;
        let textUser = indeksOfUser.body;
        let userEmail = indeksOfUser.user.email;
        let userNum = indeksOfUser.user.phone;
        
        let conatiner = document.createElement('div');
        var userBox = `<div class="bg-transparent flex-column rounded-2 border mt-5 p-2 text-start user">
        <div class="d-flex">
        <img class="rounded-circle" src="${imgUser}" alt="User's img" width="50" height="50">
        <div class="flex-column namewraper">
        <h4 class="m-0 fs-5 fw-bold ms-3 text-light">${nameOfUser}</h4>
        <p class="m-0 fs-6 ms-3 text-primary">${userName1}</p>
        </div>
        <a class="e-mail" target="blank" href="https://www.${userEmail}"><img src="/images/email.png" alt="e-mail" width="40" height="40"></a>
        <a class="e-mail" href="tel:${userNum}"><img src="/images/phone-call.png" alt="tel" width="40" height="40"></a>
        </div>
        <h3 class="mt-3 fs-4 text-light">${titleUser}</h3>
        <p class="text-light text-opacity-75">${textUser}</p>
        <button class="learn-more" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample${i}"
        aria-expanded="false" aria-controls="collapseExample">
        <span class="circle" aria-hidden="true">
        <span class="icon arrow"></span>
        </span>
        <span class="button-text">Comments</span>
        </button>
        <div class="collapse js-collaper" id="collapseExample${i}">
        </div>
        </div>`
        
        conatiner.innerHTML = userBox;
        elBox.appendChild(conatiner);
        
        let collapseWrapper = document.querySelectorAll(`.js-collaper`)[i];
        for (let j = 0; j < parameter[i].comments.length; j++) {
            let indexOfUser = parameter[i].comments[j];
            let cammnetName = indexOfUser.name;
            let commentEmail = indexOfUser.email;
            let commnetText = indexOfUser.body;
            
            let collapseDiv = document.createElement('div');
            
            let collapseContent = `<div class="collapse-wrapper comment-contenter my-3">
            <h2 class="collapse-title fs-5 m-0 text-info">${cammnetName}</h2>
            <p class="m-0 mb-2 text-primary username-comment">${commentEmail}</p>
            <p class="collapse-text text-opacity-75">${commnetText}</p>
            </div>`;
            
            collapseDiv.innerHTML = collapseContent;
            collapseWrapper.appendChild(collapseDiv);
        }
    }
}
render (posts);