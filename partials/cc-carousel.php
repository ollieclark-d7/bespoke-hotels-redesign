<div class="home-hero home-hero--cc">

    <div class="js-home-hero">
        <div class="home-hero__slide">
            <img src="images/coast-country-demo.jpg" alt=".">
            <div class="home-hero__overlay">
                <h2>Enjoy a Winter Escape at the<br>Talbot in charming Surrey</h2>
                <p>From just £99 per room including Voucher to spend on your choice of Food & Drinks during your stay
                </p>
                <a class="home-hero__link" href="#">Find out more <i class="bespoke-arrow-right"></i></a>
            </div>
        </div>

        <div class="home-hero__slide">
            <img src="images/coast-country-demo.jpg" alt=".">
            <div class="home-hero__overlay">
                <h2>Enjoy a Winter Escape at the<br>Talbot in charming Surrey</h2>
                <p>From just £99 per room including Voucher to spend on your choice of Food & Drinks during your stay
                </p>
                <a class="home-hero__link" href="#">Find out more <i class="bespoke-arrow-right"></i></a>
            </div>
        </div>
    </div>

    <div class="booking-options">
        <div class="row">
            <div class="col-lg-6 col-md-10 col-xs-12 justify-content-center">


                <script>
                jQuery(function() {

                    jQuery("#inline_datepicker").datepicker({
                        minDate: 0,
                        dateFormat: 'dd/mm/yy',
                        onSelect: onDateChange
                    });

                    function onDateChange(dateText) {
                        $('.arrival').val(dateText);
                        setDeeplink();
                    }

                });
                </script>

                <form action="/search" method="POST" id="search_form">
                    <div class="booking-engine bg-none">

                        <div class="booking-title">
                            <h1>Your journey starts here</h1>
                            <p class="booking-title__phone">
                                <small>Central Reservations</small>
                                0330 094 5919
                            </p>
                        </div>
                        <input type="hidden" name="booking_id" id="booking_id">
                        <input type="hidden" name="chain_id" id="chain_id">
                        <input type="hidden" name="hotel_id" id="hotel_id">
                        <input type="hidden" name="theme_id" id="theme_id">
                        <input type="hidden" name="search_type" id="search_type" value="free_text">

                        <input type="hidden" name="search_id" id="search_id" value="">

                        <input type="hidden" name="tether" id="tether" value="false">

                        <div class="search-options">

                            <div class="padding-0-20 search-outer">

                                <div class="icon">
                                    <span class="glyphicon glyphicon-search"></span>
                                </div>

                                <label for="area">
                                    <span class="sr-only">Where do you want to visit?</span>
                                </label>

                                <input class="area autocomplete ui-autocomplete-input" name="search_term" id="area"
                                    type="text" maxlength="200" value="" placeholder="Search by hotel or destination"
                                    autocomplete="off">


                            </div>

                            <button type="submit" class="new-search-button" id="search-button">Search</button>

                            <a href="#" class="booking-button" id="expand-booking-options">
                                <span class="closed">Book Now</span>
                                <span class="open hidden">Close</span>
                            </a>

                        </div>

                        <div class="row hidden" id="availability-search">

                            <div class="col-md-6 col-sm-6 padding-20-0 datepicker-container">

                                <p>Check In Date</p>

                                <label for="arrival"><span class="sr-only">When?</span></label>
                                <div id="inline_datepicker" class="hasDatepicker">
                                    <div class="ui-datepicker-inline ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"
                                        style="display: block;">
                                        <div
                                            class="ui-datepicker-header ui-widget-header ui-helper-clearfix ui-corner-all">
                                            <a class="ui-datepicker-prev ui-corner-all ui-state-disabled"
                                                title="Prev"><span
                                                    class="ui-icon ui-icon-circle-triangle-w">Prev</span></a><a
                                                class="ui-datepicker-next ui-corner-all" data-handler="next"
                                                data-event="click" title="Next"><span
                                                    class="ui-icon ui-icon-circle-triangle-e">Next</span></a>
                                            <div class="ui-datepicker-title"><span
                                                    class="ui-datepicker-month">April</span>&nbsp;<span
                                                    class="ui-datepicker-year">2021</span></div>
                                        </div>
                                        <table class="ui-datepicker-calendar">
                                            <thead>
                                                <tr>
                                                    <th scope="col" class="ui-datepicker-week-end"><span
                                                            title="Sunday">Su</span></th>
                                                    <th scope="col"><span title="Monday">Mo</span></th>
                                                    <th scope="col"><span title="Tuesday">Tu</span></th>
                                                    <th scope="col"><span title="Wednesday">We</span></th>
                                                    <th scope="col"><span title="Thursday">Th</span></th>
                                                    <th scope="col"><span title="Friday">Fr</span></th>
                                                    <th scope="col" class="ui-datepicker-week-end"><span
                                                            title="Saturday">Sa</span></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td
                                                        class=" ui-datepicker-week-end ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">
                                                        &nbsp;</td>
                                                    <td
                                                        class=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">
                                                        &nbsp;</td>
                                                    <td
                                                        class=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">
                                                        &nbsp;</td>
                                                    <td
                                                        class=" ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">
                                                        &nbsp;</td>
                                                    <td class=" ui-datepicker-unselectable ui-state-disabled ">
                                                        <span class="ui-state-default">1</span>
                                                    </td>
                                                    <td class=" ui-datepicker-unselectable ui-state-disabled ">
                                                        <span class="ui-state-default">2</span>
                                                    </td>
                                                    <td
                                                        class=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled ">
                                                        <span class="ui-state-default">3</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td
                                                        class=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled ">
                                                        <span class="ui-state-default">4</span>
                                                    </td>
                                                    <td class=" ui-datepicker-unselectable ui-state-disabled ">
                                                        <span class="ui-state-default">5</span>
                                                    </td>
                                                    <td class=" ui-datepicker-unselectable ui-state-disabled ">
                                                        <span class="ui-state-default">6</span>
                                                    </td>
                                                    <td class=" ui-datepicker-unselectable ui-state-disabled ">
                                                        <span class="ui-state-default">7</span>
                                                    </td>
                                                    <td class=" ui-datepicker-unselectable ui-state-disabled ">
                                                        <span class="ui-state-default">8</span>
                                                    </td>
                                                    <td class=" ui-datepicker-unselectable ui-state-disabled ">
                                                        <span class="ui-state-default">9</span>
                                                    </td>
                                                    <td
                                                        class=" ui-datepicker-week-end ui-datepicker-unselectable ui-state-disabled ">
                                                        <span class="ui-state-default">10</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class=" ui-datepicker-week-end ui-datepicker-days-cell-over  ui-datepicker-current-day ui-datepicker-today"
                                                        data-handler="selectDay" data-event="click" data-month="3"
                                                        data-year="2021"><a
                                                            class="ui-state-default ui-state-highlight ui-state-active ui-state-hover"
                                                            href="#">11</a></td>
                                                    <td class=" " data-handler="selectDay" data-event="click"
                                                        data-month="3" data-year="2021"><a class="ui-state-default"
                                                            href="#">12</a></td>
                                                    <td class=" " data-handler="selectDay" data-event="click"
                                                        data-month="3" data-year="2021"><a class="ui-state-default"
                                                            href="#">13</a></td>
                                                    <td class=" " data-handler="selectDay" data-event="click"
                                                        data-month="3" data-year="2021"><a class="ui-state-default"
                                                            href="#">14</a></td>
                                                    <td class=" " data-handler="selectDay" data-event="click"
                                                        data-month="3" data-year="2021"><a class="ui-state-default"
                                                            href="#">15</a></td>
                                                    <td class=" " data-handler="selectDay" data-event="click"
                                                        data-month="3" data-year="2021"><a class="ui-state-default"
                                                            href="#">16</a></td>
                                                    <td class=" ui-datepicker-week-end " data-handler="selectDay"
                                                        data-event="click" data-month="3" data-year="2021"><a
                                                            class="ui-state-default" href="#">17</a></td>
                                                </tr>
                                                <tr>
                                                    <td class=" ui-datepicker-week-end " data-handler="selectDay"
                                                        data-event="click" data-month="3" data-year="2021"><a
                                                            class="ui-state-default" href="#">18</a></td>
                                                    <td class=" " data-handler="selectDay" data-event="click"
                                                        data-month="3" data-year="2021"><a class="ui-state-default"
                                                            href="#">19</a></td>
                                                    <td class=" " data-handler="selectDay" data-event="click"
                                                        data-month="3" data-year="2021"><a class="ui-state-default"
                                                            href="#">20</a></td>
                                                    <td class=" " data-handler="selectDay" data-event="click"
                                                        data-month="3" data-year="2021"><a class="ui-state-default"
                                                            href="#">21</a></td>
                                                    <td class=" " data-handler="selectDay" data-event="click"
                                                        data-month="3" data-year="2021"><a class="ui-state-default"
                                                            href="#">22</a></td>
                                                    <td class=" " data-handler="selectDay" data-event="click"
                                                        data-month="3" data-year="2021"><a class="ui-state-default"
                                                            href="#">23</a></td>
                                                    <td class=" ui-datepicker-week-end " data-handler="selectDay"
                                                        data-event="click" data-month="3" data-year="2021"><a
                                                            class="ui-state-default" href="#">24</a></td>
                                                </tr>
                                                <tr>
                                                    <td class=" ui-datepicker-week-end " data-handler="selectDay"
                                                        data-event="click" data-month="3" data-year="2021"><a
                                                            class="ui-state-default" href="#">25</a></td>
                                                    <td class=" " data-handler="selectDay" data-event="click"
                                                        data-month="3" data-year="2021"><a class="ui-state-default"
                                                            href="#">26</a></td>
                                                    <td class=" " data-handler="selectDay" data-event="click"
                                                        data-month="3" data-year="2021"><a class="ui-state-default"
                                                            href="#">27</a></td>
                                                    <td class=" " data-handler="selectDay" data-event="click"
                                                        data-month="3" data-year="2021"><a class="ui-state-default"
                                                            href="#">28</a></td>
                                                    <td class=" " data-handler="selectDay" data-event="click"
                                                        data-month="3" data-year="2021"><a class="ui-state-default"
                                                            href="#">29</a></td>
                                                    <td class=" " data-handler="selectDay" data-event="click"
                                                        data-month="3" data-year="2021"><a class="ui-state-default"
                                                            href="#">30</a></td>
                                                    <td
                                                        class=" ui-datepicker-week-end ui-datepicker-other-month ui-datepicker-unselectable ui-state-disabled">
                                                        &nbsp;</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <input type="hidden" name="arrival" id="arrival" class="med datepicker arrival"
                                    maxlength="10" value="">

                            </div>

                            <div class="col-md-6 col-sm-6 padding-20-0">
                                <div class="row">
                                    <div class="col-md-6 col-xs-6">

                                        <p>Nights</p>

                                        <label for="nights"><span class="sr-only">How many nights do you wish to
                                                stay for?</span></label>
                                        <input name="nights" id="nights" type="number" maxlength="2" value="1">

                                        <p>Adults</p>

                                        <label for="adults"><span class="sr-only">How many Adults are
                                                staying?</span></label>

                                        <div class="select-dropdown">

                                            <div class="icon"><i class="bespoke-down-open"></i></div>

                                            <select class="adults" id="adults" name="adults">
                                                <option value="1">1 adult</option>
                                                <option value="2">2 adults</option>
                                                <option value="3">3 adults</option>
                                                <option value="4">4 adults</option>
                                                <option value="5">5 adults</option>
                                                <option value="6">6 adults</option>
                                            </select>
                                        </div>

                                    </div>

                                    <div class="col-md-6 col-xs-6">

                                        <p>Children</p>

                                        <label for="children"><span class="sr-only">How many Children are
                                                staying?</span></label>

                                        <div class="select-dropdown">

                                            <div class="icon"><i class="bespoke-down-open"></i></div>

                                            <select class="children" id="children" name="children">

                                                <option value="0" selected="">0 children</option>

                                                <option value="1">1 child</option>
                                                <option value="2">2 children</option>
                                                <option value="3">3 children</option>
                                                <option value="4">4 children</option>
                                                <option value="5">5 children</option>
                                                <option value="6">6 children</option>
                                            </select>

                                        </div>

                                        <p>Promotional Code</p>

                                        <label for="identifier"><span class="sr-only">Enter your Promotion
                                                Codes</span></label>
                                        <input name="identifier" id="identifier" type="text" placeholder="Promo Code">

                                    </div>

                                    <a href="#" class="booking-button" id="booking-button">Book Now</a>

                                </div>
                            </div>
                        </div>

                    </div>
                </form>

                <script>
                $('.js-clear-search').on('click', function(event) {
                    event.preventDefault();
                    $('input[name="search_term"]').val('');
                    $.ajax('/search/clear');
                    $(this).remove();
                });
                </script>
            </div>
        </div>
    </div>
</div>