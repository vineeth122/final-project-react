import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
// import PostSummaryList from "../PostSummaryList/index.js";
import ExploreComponent from "../ExploreScreen/ExploreComponent.js";
function exploreComponent() {
    $('#wd-explore').append(`
       <div class="container pt-1">
    <div class="row">
        <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2">
            ${NavigationSidebar({'export':true})}
        </div>
   
        <div class="col-xxl-6 col-xl-6 col-lg-7 col-md col-sm">
           ${ExploreComponent()}
        </div>
        
        <div class="d-none d-lg-block  col-xxl  col-xl col-lg mt-1 wd-width">
            ${WhoToFollowList()}

        </div>
    </div>

</div>
   `);
}
$(exploreComponent);