// ========= artikel ===========
async function getUsers() {
  let url = 'https://api.pulo.dev/v1/contents';
  try {
      let res = await fetch(url)
      .then(res => res.json());
      return await res.data;
      // console.log(res.data)
  } catch (error) {
      console.log(error);
  }
}

async function renderUsers() {
  let users = await getUsers();
  let html = '';
  users.forEach(result => {
      let htmlSegment = showContent(result);
      html += htmlSegment;
  });

  let container = document.querySelector('.show-content');
  container.innerHTML = html;
}

renderUsers();

function showContent(result) {
  return `<div class="card mt-3">
  <div class="card-body">
    <a href="${result.url}" class="link-primary fs-5">${result.title} </a>
    <p class="fw-light">oleh: ${result.contributor || result.owner}</p>
  </div>
</div>`
}

// const container = document.querySelector('.container');

// const URL = 'https://api.pulo.dev/v1/contents'

// // get the images

// async function loadImages(numImages = 10){
//   let i=0;
//     while(i < numImages){
//     await fetch(URL)
//     .then(response=>response.json())
//     .then(data =>{
//     const result = data.data; 
//     console.log(result)
    
//     let html = showContent(result);
//     let container = document.querySelector('.show-content');
//     container.innerHTML = html;
//     })
//     i++;
//     }   
//     }

// loadImages();



// listen for scroll event and load more images if we reach the bottom of window
// window.addEventListener('scroll',()=>{
//     console.log("scrolled", window.scrollY) //scrolled from top
//     console.log(window.innerHeight) //visible part of screen
//     if(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight){
//         loadImages();
//     }
// })
