const WhoToFollowListItem = (who) => {
    return(`
       <li class="list-group-item bg-light border-0">
                    <div class="row">
                        <div class="col-xxl-2 mt-1 mb-2 col-xl-2 col-lg-3 ">
                            <img src="../../images/${who.avatarIcon}" class="float-start w-100 rounded-circle">
                        </div>

                        <div class="col-xxl-6  col-xl-5 col-lg-9 position-relative">

                            <div class="fw-bolder float-start position-absolute start-0" >
                                <div class="d-inline">${who.userName}</div>
                                <div class="d-inline"><i class="fa-solid fa-circle-check"></i></div>
<!--                                <div class="col-xxl-11">Northeastern U.</div>-->
<!--                                <div class="col-1">Z</div>-->
                            </div>
                            <br>
                            <div class="float-start position-absolute start-0">${who.handle}</div>
<!--                            <p class="h5 fw-bolder">Java</p>-->
<!--                            <p>@Java</p>-->

                        </div>

                        <div class="col-xxl mt-2 col-xl col-lg">
                            <span class="float-end">
                                <button type="button" class="btn btn-primary rounded-pill w-100 h-75 bg-dark fw-bolder bottom-50">Follow</button>
                            </span>
                        </div>
                    </div>
                </li>`);
}

export default WhoToFollowListItem;