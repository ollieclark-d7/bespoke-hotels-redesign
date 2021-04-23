<?php include 'partials/header-no-nav.php'; ?>

<div class="cc-brand">

    <div class="home-hero home-hero--minisite">

        <div class="js-home-hero">
            <div class="home-hero__slide">
                <img src="images/weddings.jpg" alt="Weddings.">
            </div>

            <div class="home-hero__slide">
                <img src="images/st-george-hotel.jpg" alt="St. George Hotel.">

            </div>

        </div>

        <div class="home-hero__dots container container--retain-padding">
            <a href="#" class="book-now-button" id="expand-booking-options">
                <span class="closed">Book Now</span>
                <span class="open hidden">Close</span>
            </a>
        </div>
    </div>

    <div class="pt pt--small">
        <div class="container container--retain-padding">

            <div class="ms-info">
                <div class="ms-info__title">
                    <div class="star-rating">
                        <span class="star-rating__star"></span>
                        <span class="star-rating__star"></span>
                        <span class="star-rating__star"></span>
                        <span class="star-rating__star"></span>
                    </div>
                    <h1>The St George Hotel</h1>
                    <span class="location">United Kingdom, Harrogate</span>
                </div>

                <div class="ms-info__logo">
                    <img src="images/coast-country-logo-colour.png" alt="Coast & Country.">
                </div>

                <!-- Optional logo here -->
            </div>

            <div class="ms-features">
                <div class="ms-features__item">
                    <i><?php include('images/wedding-rings.svg'); ?></i>
                    <span>Weddings</span>
                </div>
                <div class="ms-features__item">
                    <i><?php include('images/pets.svg'); ?></i>
                    <span>Pet Friendly</span>
                </div>
                <div class="ms-features__item">
                    <i><?php include('images/spa.svg'); ?></i>
                    <span>Spa</span>
                </div>
                <div class="ms-features__item">
                    <i><?php include('images/meeting.svg'); ?></i>
                    <span>Meetings</span>
                </div>
                <div class="ms-features__item">
                    <i><?php include('images/pool.svg'); ?></i>
                    <span>Pool</span>
                </div>
            </div>

        </div>
    </div>

    <div class="hamburger-container">
        <div class="container container--retain-padding">
            <button class="hamburger hamburger--slider js-ms-hamburger" type="button">
                <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                </span>
            </button>
            <p>View Menu</p>
        </div>
    </div>

    <div>
        <div class="container container--retain-padding">

            <nav class="ms-menu">
                <ul class="ms-menu__list">
                    <li><a href="minisite-cc.php">Overview</a></li>
                    <li><a href="#">Bedrooms</a></li>
                    <li><a href="#">Dining</a></li>
                    <li><a href="#">Meetings</a></li>
                    <li class="active"><a href="#">Weddings</a></li>
                    <li><a href="#">Spa</a></li>
                    <li><a href="#">Facilities</a></li>
                    <li><a href="#">Gift Vouchers</a></li>
                    <li><a href="#">Breaks</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>

            <div class="cms-content">
                <div class="ms-content ms-content--flex pt pt--small">
                    <h2>Your Wedding at the St George Hotel</h2>
                    <a href="#" class="button button--teal button--long">Check Availability</a>
                </div>

                <div class="ms-content pt pt--small">
                    <p>The St George Hotel, in its prime position on Parliament Hill in the famous heritage town of
                        Harrogate
                        has 90 bedrooms, restaurant, bar, library and terrace. It is within walking distance of the
                        famous
                        Turkish Baths, Betty’s Tea Rooms, the boutiques, galleries and cafés of the Montpellier Quarter,
                        the
                        Theatre, the Valley Gardens and the Royal Pump Room Museum.</p>

                    <p>As well as all of Harrogate’s wonderful visitor attractions, the St George Hotel is also
                        perfectly
                        placed
                        for days out in the Yorkshire Dales, so do bring your walking boots and get ready for fresh air
                        and
                        some
                        of Britain’s finest views!</p>
                </div>

                <div class="ms-buttons pt pt--small">
                    <a href="#" class="ms-buttons__item">Wedding brochure</a>
                    <a href="#" class="ms-buttons__item">Intimate wedding package</a>
                    <a href="#" class="ms-buttons__item">Seasonal wedding package</a>
                </div>
            </div>

            <div class="feature-box pt">
                <div class="feature-box__image">
                    <img src="images/london.jpg" alt="London.">
                </div>
                <div class="feature-box__info" style="background-color: #87BDB2;">
                    <h3 class="border-title">Stay</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore magna.</p>
                    <a href="#" class="feature-box__link">View all <i class="bespoke-arrow-right"></i></a>
                </div>
            </div>

            <div class="pt pt--small">
                <div class="feature-box-carousel pt">

                    <!-- Carousel controls -->
                    <div class="feature-box-carousel__controls">
                        <button class="prev"><?php include('images/chevron-left-thin.svg'); ?><span
                                class="sr-only">Previous</span></button>
                        <button class="next"><?php include('images/chevron-right-thin.svg'); ?><span
                                class="sr-only">Next</span></button>
                    </div>

                    <div class="js-feature-box-carousel">

                        <!-- Slides begin -->
                        <div class="feature-box feature-box--slide">
                            <div class="feature-box__image">
                                <img src="images/london.jpg" alt="London.">
                            </div>
                            <div class="feature-box__info" style="background-color: #7495B0;">
                                <h3 class="border-title">Pamper</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt..
                                </p>
                                <a href="#" class="feature-box__link">View all <i class="bespoke-arrow-right"></i></a>
                            </div>
                        </div>

                        <div class="feature-box feature-box--slide feature-box--slide-alt">
                            <div class="feature-box__image">
                                <img src="images/london.jpg" alt="London.">
                            </div>
                            <div class="feature-box__info" style="background-color: #C2A04A;">
                                <h3 class="border-title">Celebrate</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt.
                                </p>
                                <a href="#" class="feature-box__link">View all <i class="bespoke-arrow-right"></i></a>
                            </div>
                        </div>
                        <!-- Slides END -->

                    </div><!-- /.js-feature-box-carousel -->

                </div><!-- /.feature-box-carousel -->
            </div>


            <div class="border-title pt">
                <h2>Take a break</h2>
            </div>

            <div class="feature-box-carousel pt pb">

                <!-- Carousel controls -->
                <div class="feature-box-carousel__controls slick-controls">
                    <button class="prev"><?php include('images/chevron-left-thin.svg'); ?><span
                            class="sr-only">Previous</span></button>
                    <button class="next"><?php include('images/chevron-right-thin.svg'); ?><span
                            class="sr-only">Next</span></button>
                </div>

                <?php include('partials/carousel/feature-box-carousel.php'); ?>

            </div><!-- /.feature-box-carousel -->

        </div><!-- /.container -->
    </div><!-- /.beigebg -->

    <div class="bg-light pb pb--small">
        <div class="container pb pt">

            <div class="border-title">
                <h2>Awards</h2>
            </div>

            <div class="awards-carousel pt pt--small">

                <!-- Carousel controls -->
                <div class="slick-controls">
                    <button class="prev"><?php include('images/chevron-left-thin.svg'); ?><span
                            class="sr-only">Previous</span></button>
                    <button class="next"><?php include('images/chevron-right-thin.svg'); ?><span
                            class="sr-only">Next</span></button>
                </div>

                <div class="js-awards-carousel">

                    <?php include('partials/carousel/awards-slides.php'); ?>

                </div>

            </div>
        </div>
    </div>

    <div class="container container--retain-padding pt pb">

        <div class="border-title">
            <h2>Recently viewed</h2>
        </div>

        <div class="recently-viewed-carousel pt pt--small">

            <!-- Carousel controls -->
            <div class="slick-controls">
                <button class="prev"><?php include('images/chevron-left-thin.svg'); ?><span
                        class="sr-only">Previous</span></button>
                <button class="next"><?php include('images/chevron-right-thin.svg'); ?><span
                        class="sr-only">Next</span></button>
            </div>

            <div class="js-recently-viewed">

                <?php include('partials/carousel/recently-viewed-slides.php'); ?>

            </div>

        </div><!-- /.feature-box-carousel -->

    </div>

</div>

<?php include 'partials/footer.php'; ?>