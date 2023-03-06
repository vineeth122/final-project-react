
const PostItem = (post) => {
    return (`    
    <li class="list-group-item">
    <div class="row">
          <div class="col-1">
               <img class="float-start rounded-pill wd-width me-2 border border-solid border-white" src="${post.image}">
            </div>
           <div class="float-start col me-4 pe-2">
                <div class="text-white fw-bolder d-inline">${post.userName}</div>
                <div class="d-inline"><i class="fa-solid fa-circle-check"></i></div>
                <div class="d-inline text-secondary">.${post.time}</div>
                <div class="text-white">${post.body}</div>
            </div> 
        <div class="row">
<!--         <div class="col"></div>-->
          <div class="ms-4 col  mt-3">
          <div class="rounded border border-solid border-light">
               <img class="w-100" src="${post.postimage}">
                <div class="text-white mt-0">${post.title}</div>
                <div class="text-secondary">${post.subtitle}</div>
                <div class="d-inline text-secondary"><i class="fa-solid fa-paperclip"></i></div>
                 <div class="d-inline text-secondary">${post.link}</div>
           </div>
                   <div class="d-flex justify-content-between">
                      <div class="p-2 bd-highlight"><i class="fa-solid fa-comment me-2"></i>${post.comment}</div>
                      <div class="p-2 bd-highlight"><i class="fa-solid fa-retweet me-2"></i>${post.retweet}</div>
                      <div class="p-2 bd-highlight"><i class="fa-regular fa-heart me-2"></i>${post.like}</div>
                      <div class="p-2 bd-highlight"><i class="fa-solid fa-arrow-up-from-bracket me-2"></i></div>
                    </div>
           </div>
            </div>
        </div>
        </li>`)
}


export default PostItem;