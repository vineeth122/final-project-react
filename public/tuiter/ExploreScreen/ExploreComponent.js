import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
                       <div class="row">
            <div class="col-xxl-10 col-xl-10  col-lg-10 col-md-10 col-sm-10 position-relative">
                <input type="search" class="form-control rounded-pill ps-5 pb-2 w-100 bg-white" placeholder="Search Tuiter"/>
                <span class="position-absolute wd-search-tuiter">
                    <i class="fa-solid fa-magnifying-glass"></i>
                </span>
            </div>
                <div class="col-xxl col-xl col-lg col-md col-sm ps-4 mt-1">
                    <i class="fa-solid fa-gear  h4 mt-1 wd-gear"></i>
                </div>
            </div>
            <div class="nav-fill">
            <ul class="nav nav-tabs mt-1">
                <li class="nav-item">
                    <a class="nav-link fw-bolder text-white active" href="../for-you.html">For you</a>                    
                </li>
                <li class="nav-item">
                    <a class="nav-link text-secondary" href="../trending.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-secondary" href="../news.html">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-secondary" href="../sports.html">Sports</a>
                </li>
                <li class="d-none d-md-block nav-item">
                    <a class="nav-link text-secondary" href="../entertainment.html">Entertainment</a>
                </li>
            </ul>
                </div>
            <div class="position-relative">
                <img src="../../images/starship.png" class="w-100 mt-1">
<!--                <h4 class="wd-positionleft text-white ms-2">Tennis Tournament . LIVE</h4>-->
                <h3 class="position-absolute bottom-0 left-0 text-white fw-bolder ms-2">SpaceX's Starship</h3>
            </div>
            <ul class="list-group">
                ${PostSummaryList()}
            </ul>
    `);
}

export default ExploreComponent;