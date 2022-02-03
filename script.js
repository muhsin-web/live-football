function openMenu(){
    document.getElementById('sidemenu').style.marginLeft = "0";
    document.getElementById('main').style.marginLeft = "250px";
    document.getElementById('expand_pro').style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0, 0.2)";
}

function closeMenu(){
    document.getElementById('sidemenu').style.marginLeft = "-250px";
    document.getElementById('main').style.marginLeft = "0";
    document.body.style.backgroundColor = "#fff";
    document.getElementById('expand_pro').style.marginLeft = "0";
}

// openMenu();

const commentBtn = document.querySelectorAll('#btn_comment');
const comment = document.querySelectorAll('#comment');
const toggler = document.querySelector('.toggle_menu');
const menu = document.querySelector('.head_2.menu');
const modalToggle = document.querySelector('.toggle-modal');
const modal = document.querySelector('.modal');
const chatModal = document.querySelector('.chat_modal');
const navLinks = document.querySelectorAll('.nav_link');
const clickNote = document.querySelector('.click-note');
const clickChat = document.querySelector('.click-chat');
const clickGroup = document.querySelector('.click-group');
const allChat = document.getElementById('all-chat');
const allNote = document.getElementById('all-note');
const allGroup = document.getElementById('all-group');

// EVENT HANDLERS-----------------

//  -------SHOW AMD HIDE COMMENTS-------
commentBtn.forEach(function(com, id){
    com.addEventListener('click', function(){
        comment[id].classList.toggle('show');
        console.log('hello')
    })
})

// NAV BAR TOGGLER--------------
toggler.addEventListener('click', function(){
    menu.classList.toggle('show_2')
})

// DROP DOWN MODAL----------------
modalToggle.addEventListener('click', function(){
  document.querySelector('.toggle-modal i').classList.toggle('bx-chevron-up');
    modal.classList.toggle('show_3')
})

// -------CHAT POP UP MODAL-----------
document.querySelector('body').addEventListener('click', function(){
    chatModal.classList.add('close')
})

clickNote.addEventListener('click', (e)=>{
  e.preventDefault();
  allNote.classList.toggle('hidden')
  allChat.classList.add('hidden')
  allGroup.classList.add('hidden')
})

clickChat.addEventListener('click', (e)=>{
  e.preventDefault();
  allChat.classList.toggle('hidden')
  allNote.classList.add('hidden')
  allGroup.classList.add('hidden')
})

clickGroup.addEventListener('click', (e)=>{
  e.preventDefault();
  allGroup.classList.toggle('hidden')
  allNote.classList.add('hidden')
  allChat.classList.add('hidden')
})

// ------ACTIVE LINK TOGGLER-----------

// navLinks.forEach(function(nav, id){
//   nav.addEventListener('click', function(e){
//     e.preventDefault();
//     console.log(id);
//     nav.classList.remove('active');
//     nav.classList.add('active')
//   })
// })


//  ################## LIVESCORE PAGE JS ###########
const liveMoreBtn = document.querySelectorAll('.goals');
const moreSec = document.querySelectorAll('.more-details');
// TOGGLE MORE DETAILS SECTION BTTON CONTROLLER #######
console.log(moreSec[1])
liveMoreBtn.forEach(function(btn, id){
  btn.addEventListener('click', (e)=>{
  e.preventDefault();
  console.log(id)
  moreSec[id].classList.toggle('hidden')
  moreSec[id].classList.toggle('show-more');
})
})
// ------SLICK CONTROLLERT FOR STORIES--------------
$(document).ready(function(){
  $('.responsive').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true
        }
      }
    ]
  });
          
});
