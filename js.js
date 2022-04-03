document.querySelector('.cross').style.display = 'none';// for hiding the offside hamburger


// this is for removing and return nav bar
document.querySelector('.hamburger').addEventListener('click',()=>{
    document.querySelector('.sidebar').classList.toggle('sidebargo');//that's means in sidebarclass remove siderbargo  if not removed either if removed come back them
    // this is for removing and return nav bar

    if(document.querySelector('.sidebar').classList.contains('sidebargo')){ //it means if side bar come than remove sidebar icon and come off side bar icon
       
        document.querySelector('.cross').style.display='none'

        setTimeout(() => {
            // we used set time out function we side bar open or come with menu you can also used without set timeout function
            document.querySelector('.ham').style.display='inline'

        },350); 

    }
    else{

        document.querySelector('.ham').style.display='none';

        setTimeout(() => {
            // we used set time out function we offside bar open or come with menu you can also used without set timeout function
            document.querySelector('.cross').style.display='inline'

        },350);
    }
})

