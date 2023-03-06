import NavigationSidebar from "../NavigationSidebar/index.js";
// import WhoToFollowList from "../WhoToFollowList/index.js";
import PostSummaryList from "../PostSummaryList/index.js";
import PostItemList  from "../PostList/index.js";
function exploreComponent() {
    $('#wd-explore').append(`
       <div class="container pt-1">
    <div class="row">
        <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2">
            ${NavigationSidebar({'home':true})}
        </div>
   
        <div class="col-xxl-6 col-xl-6 col-lg-7 col-md col-sm">
         ${PostItemList()}
        </div>
        
        
        <div class="d-none d-lg-block  col-xxl  col-xl col-lg mt-3 wd-width">
            ${PostSummaryList()}

        </div>
    </div>

</div>
   `);
}
$(exploreComponent);