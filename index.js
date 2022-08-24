
const openBtn=document.querySelector('button');
const closeBtn=document.querySelector('.fa-times');
const modal=document.querySelector('.modal');

/*-------------code to display the subscribe page starts here---------- */
const openModal=()=>{
    modal.style.display='grid';
} 
openBtn.addEventListener('click',openModal);
/*-------------code to display the subscribe page end here---------- */
/*-------------code to close the subscribe page starts here---------- */
const closeModal=()=>{
    modal.style.display='none';
}
closeBtn.addEventListener('click',closeModal)
/*-------------code to close the subscribe page ends here---------- */
/*-------------code to close the subscribe page when you click outside the page---------- */
modal.addEventListener('click',(e)=>{
    if(e.target.classList.contains('modal')){
        closeModal();
    }
})
/*-------------code to close the subscribe page when you click outside the page---------- */

/*-------------thank you message--------------*/
const form =document.querySelector('form')
const card =document.querySelector('.card');
 
const submitForm=()=>{
    card.innerHTML="<h2>Thank You for Subscribing</h2>"
    setTimeout(() => { 
        closeModal();

    }, 3000);
}
form.addEventListener('submit',submitForm)