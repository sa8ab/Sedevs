<template>
  <div class="sedevs">
    <div class="waitForLoad">
      <div class="lds-roller">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    <div class="language-container">
      <div class="language-inner">
        <div class="language-list">
          <a href="#" class="language">
            <div class="flagImg">
              <img src="../assets/Images/greece-flag.png" alt="Greece Flag" />
            </div>
            <span class="langName">English</span>
          </a>
          <a href="#" class="language">
            <div class="flagImg">
              <img src="../assets/Images/greece-flag.png" alt="Greece Flag" />
            </div>
            <span class="langName">Greek</span>
          </a>
          <a href="#" class="language">
            <div class="flagImg">
              <img src="../assets/Images/iran-flag.png" alt="Iran Flag" />
            </div>
            <span class="langName">Farsi</span>
          </a>
          <a href="#" class="language">
            <div class="flagImg">
              <img src="../assets/Images/croatia-flag.png" alt="Croatia Flag" />
            </div>
            <span class="langName">Hervatska</span>
          </a>
        </div>
      </div>
    </div>
    <div class="notFooter">
      <nav class="mainNav">
        <div class="navInner sdvInner">
          <div class="navLogoCN">SEDEVS</div>
          <div class="navItemCN">
            <a href="#" class="navItem languageItem">
              <img src="../assets/Images/language.png" alt="Change Langugae" />
            </a>

            <nuxt-link to="/about" class="navItem">About Us</nuxt-link>
            <nuxt-link to="/submit" class="navItem">Submit Order</nuxt-link>
            <nuxt-link to="/" exact class="navItem">Home</nuxt-link>
          </div>
        </div>
      </nav>
      <nav class="menu">
        <div class="menu-container">
          <div class="menu-inner">
            <div class="menu-close-cn">
              <div class="navLogoCN menuNavLogoCN">SEDEVS</div>
              <span class="menu-close">Close</span>
            </div>
            <div class="menu-items">
              <nuxt-link to="/" class="menu-item">Home</nuxt-link>
              <nuxt-link to="/submit" class="menu-item">Submit Order</nuxt-link>
              <nuxt-link to="/about" class="menu-item">About Us</nuxt-link>
              <span class="menu-item menu-item-language">
                <div class="menu-lang-img">
                  <img src="../assets/Images/language.png" alt />
                </div>
              </span>
            </div>
          </div>
        </div>
        <div class="menuInner">
          <div class="navLogoCN">SEDEVS</div>
          <div class="menuAction">Menu</div>
        </div>
      </nav>
      <nuxt />
    </div>
    <footer class="index-footer">
      <div class="footerInner sdvInner">
        <div class="footer-info">
          <div class="for-flex-center">
            <section class="footer-info-section">
              <h4 class="footerh4">
                <!-- <i class="icon ion-md-call"></i> -->
                <span>Phone</span>
              </h4>
              <div class="phone-cn">
                <span class="phone-country">
                  <div class="flag-cn">
                    <img src="../assets/Images/greece-flag.png" alt />
                  </div>
                  <span>Greece</span>
                </span>
                <span class="phone-number">+123456789</span>
              </div>
              <div class="phone-cn">
                <span class="phone-country">
                  <div class="flag-cn">
                    <img src="../assets/Images/iran-flag.png" alt />
                  </div>
                  <span>Iran</span>
                </span>
                <span class="phone-number">+123456789</span>
              </div>
              <div class="phone-cn">
                <span class="phone-country">
                  <div class="flag-cn">
                    <img src="../assets/Images/croatia-flag.png" alt />
                  </div>
                  <span>Croatia</span>
                </span>
                <span class="phone-number">+123456789</span>
              </div>
            </section>
            <section class="footer-info-section">
              <h4 class="footerh4">
                <!-- <i class="icon ion-md-mail"></i> -->
                <span>Email</span>
              </h4>
              <a href="#" class="footer-email">info@sedevs.com</a>
            </section>
          </div>
        </div>

        <div class="footer-social">
          <div class="social-icons">
            <a href="#" class="footer-social-icon">
              <i class="facebook f icon"></i>
            </a>
            <a href="#" class="footer-social-icon">
              <i class="instagram f icon"></i>
            </a>
          </div>
          <div class="footer-rights">
            <span>All rights reserved @2020</span>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { TimelineLite, Power2 } from "gsap";
import $ from "jquery";
export default {
  mounted() {
    var menuTimeline = new TimelineLite({ paused: true });
    menuTimeline
      .from(
        ".menu-close, .menuNavLogoCN",
        0.8,
        { y: "110%", ease: Power2.easeOut },
        0.6
      )
      .staggerFrom(
        ".menu-item",
        0.8,
        { opacity: 0, x: -40, ease: Power2.easeOut },
        0.1,
        0.6
      );
    $(".menuAction").click(function() {
      $(".menu-container").addClass("menuOpen");
      menuTimeline.restart();
    });
    $(".menu-close").click(function() {
      $(".menu-container").removeClass("menuOpen");
    });
    $(".menu-item").click(function() {
      $(".menu-container").removeClass("menuOpen");
    });
    $(document).mouseup(function(e) {
      var container = $(".menu-container");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        $(".menu-container").removeClass("menuOpen");
      }
    });
  }
};
</script>
<style>
</style>
