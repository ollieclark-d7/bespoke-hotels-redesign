<div class="container">
    <div class="member-sign-up">
        <div class="row">
            <div class="padding-20-0">
                <div class="row d-flex">

                    <div class="col-md-6 flex-align">
                        <h3>Become a member</h3>
                        <p>Keep up to date, manage your orders, track offers and competitions, save your favourite
                            hotels and get exclusive offers and updates.</p>
                    </div>

                    <div class="col-md-6">
                        <form action="" id="newsletter_form" method="POST">

                            <div id="success" class="status" style="display: none;">
                                <p>Thanks for signing up! We'll be in touch with some great offers soon.</p>
                            </div>

                            <div id="fail" class="status" style="display: none;">
                                <p>Your submission failed.</p>
                            </div>

                            <div id="form-fields">

                                <div class="row">

                                    <div class="col-md-6">
                                        <label for="first-name"><span class="sr-only">Enter your first
                                                name</span></label>
                                        <input name="first-name" id="first-name" type="text" placeholder="First Name"
                                            required="">
                                    </div>

                                    <div class="col-md-6">
                                        <label for="last-name"><span class="sr-only">Enter your last
                                                name</span></label>
                                        <input name="last-name" id="last-name" type="text" placeholder="Last Name"
                                            required="">
                                    </div>

                                </div>

                                <div class="row">
                                    <div class="col-md-12">
                                        <label for="email"><span class="sr-only">Enter your email
                                                address</span></label>
                                        <input name="email" id="email" type="email" placeholder="Email Address"
                                            required="">
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-12">
                                        <input type="checkbox" name="privacy" value="1" required="">
                                        <label>I have read and agree to the <a
                                                href="https://bespokehotels.com/pages/index/privacy">terms and
                                                conditions</a> of signup</label>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="recaptcha-container">

                                            <div class="recaptcha" id="input-recaptcha">
                                                <label for="recatptcha" class="sr-only">Please tick the Google
                                                    reCaptcha to confirm you are not a bot.</label>
                                                <div class="g-recaptcha"
                                                    data-sitekey="6LfSGlkUAAAAAMq1RQmxxFwY1dzl5xfVJ77uyzXb"
                                                    data-expired-callback="disableBtn" data-callback="enableBtn">
                                                    <div style="width: 304px; height: 78px;">
                                                        <div><iframe title="reCAPTCHA"
                                                                src="https://www.google.com/recaptcha/api2/anchor?ar=1&amp;k=6LfSGlkUAAAAAMq1RQmxxFwY1dzl5xfVJ77uyzXb&amp;co=aHR0cHM6Ly9iZXNwb2tlaG90ZWxzLmNvbTo0NDM.&amp;hl=en&amp;v=539Evs44yecoSf-lkJBQzKKj&amp;size=normal&amp;cb=psz41dy6loc"
                                                                width="304" height="78" role="presentation"
                                                                name="a-7nb89sqntacz" frameborder="0" scrolling="no"
                                                                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation allow-modals allow-popups-to-escape-sandbox"></iframe>
                                                        </div><textarea id="g-recaptcha-response"
                                                            name="g-recaptcha-response" class="g-recaptcha-response"
                                                            style="width: 250px; height: 40px; border: 1px solid rgb(193, 193, 193); margin: 10px 25px; padding: 0px; resize: none; display: none;"></textarea>
                                                    </div><iframe style="display: none;"></iframe>
                                                </div>
                                            </div>

                                            <div>
                                                <button type="submit" id="email-submit" disabled=""
                                                    class="mainButton emailButton red-button recaptchasubmit submit">Sign
                                                    Up</button>
                                            </div>

                                        </div><!-- /.recatpcha-container -->
                                    </div>
                                </div>

                            </div>

                        </form>
                    </div>

                </div>
            </div>
        </div>
    </div>
</div>