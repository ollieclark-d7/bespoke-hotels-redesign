<?php include 'partials/header-cc.php'; ?>

<?php include 'partials/cc-carousel.php'; ?>

<div class="beigebg pt pb">
    <div class="container container--retain-padding">

        <div class="feature-box">
            <div class="feature-box__image">
                <img src="images/london.jpg" alt="London.">
            </div>
            <div class="feature-box__info">
                <h3 class="border-title">Destinations</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna.</p>
                <form class="feature-box__dropdown">
                    <select>
                        <option>Choose your destination...</option>
                        <option>London</option>
                        <option>London</option>
                        <option>London</option>
                        <option>London</option>
                    </select>
                </form>
            </div>
        </div>

        <div class="feature-box feature-box--right pt">
            <div class="feature-box__image">
                <img src="images/london.jpg" alt="London.">
            </div>
            <div class="feature-box__info" style="background-color: #49484D;">
                <h3 class="border-title">Business &amp; Conference</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna.</p>
                <a href="#" class="feature-box__link">View all <i class="bespoke-arrow-right"></i></a>
            </div>
        </div>

        <div class="border-title pt">
            <h2>Discover more</h2>
        </div>

        <div class="feature-box-carousel pt">

            <!-- Carousel controls -->
            <div class="feature-box-carousel__controls">
                <button class="prev"><?php include('images/chevron-left-thin.svg'); ?><span
                        class="sr-only">Previous</span></button>
                <button class="next"><?php include('images/chevron-right-thin.svg'); ?><span
                        class="sr-only">Next</span></button>
            </div>

            <?php include('partials/carousel/feature-box-carousel.php'); ?>

        </div><!-- /.feature-box-carousel -->


        <div class="border-title pt">
            <h2>Take a break</h2>
        </div>

        <div class="feature-box-carousel pt">

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

<div class="greybg">
    <?php include('partials/newsletter.php'); ?>
</div>

<div class="container">

    <div class="border-title pt">
        <h2>Be sociable</h2>
    </div>

    <?php include('partials/social.php'); ?>
</div>

<div class="container container--retain-padding pb">

    <div class="border-title pt">
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


<?php include 'partials/footer.php'; ?>