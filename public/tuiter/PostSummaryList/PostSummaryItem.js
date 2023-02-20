const PostSummaryItem = (post) => {
    return (`<li class="list-group-item">
                    <div class="row">
                        <div class="col-10">
                            <div class="text-secondary">
                                ${post.topic}
                            </div>
<!--                            <div class="fw-bolder">-->
                                <div class="d-inline fw-bolder">${post.userName}</div>
                                <div class="d-inline"><i class="fa-solid fa-circle-check"></i></div>
                                <div class="d-inline text-secondary">-${post.time}</div>
                                <div class="fw-bolder">${post.title}</div>
                                <div class="text-secondary">${post.tweets} Tweets</div>                              
                        </div>
                        <div class="col-2">
<!--                            <i class="fa-solid fa-ellipsis ms-5 mt-3"></i>-->
                            <img class="float-end rounded" src=${post.image} height="25px" >
                        </div>
                    </div>
                </li>
    `)
}
export default PostSummaryItem;
