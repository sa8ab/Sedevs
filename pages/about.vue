<template>
  <div>
    <header class="submitHeader">
      <div class="submitHeaderInner sdvInner">
        <div class="introImgCN">
          <img src="../assets/Images/about-city.jpg" alt="intro sedevs" />
        </div>
        <div class="submitH1-container">
          <h1 class="submitH1">Sedevs | About Us</h1>
        </div>
      </div>
    </header>

    <main class="aboutMain">
      <div class="aboutMainInner sdvInner">
        <div class="about-cn">
          <div class="about-items">
            <div class="about">
              <div class="about-main-cn">
                <div class="about-after"></div>
                <div class="about-name-container">
                  <h2 class="about-name">George Asvestas</h2>
                </div>
                <div class="role-container">
                  <div class="role">CEO</div>
                </div>
                <div class="about-about-container">
                  <div class="about-about">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Consectetur, totam corporis. Praesentium quaerat maxime quidem deleniti
                  </div>
                </div>
              </div>
            </div>
            <div class="about about-rightx taend">
              <div class="about-main-cn">
                <div class="about-before"></div>
                <div class="about-name-container">
                  <h2 class="about-name">Hadi Ahmadzadeh</h2>
                </div>
                <div class="role-container">
                  <div class="role">Back-end developer</div>
                </div>
                <div class="about-about-container">
                  <div class="about-about">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Consectetur, totam corporis. Praesentium quaerat maxime quidem deleniti
                  </div>
                </div>
              </div>
            </div>
            <div class="about">
              <div class="about-main-cn">
                <div class="about-after"></div>
                <div class="about-name-container">
                  <h2 class="about-name">Tomislav Nagy</h2>
                </div>
                <div class="role-container">
                  <div class="role">Co-founder</div>
                </div>
                <div class="about-about-container">
                  <div class="about-about">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Consectetur, totam corporis. Praesentium quaerat maxime quidem deleniti
                  </div>
                </div>
              </div>
            </div>

            <!-- <div class="about-items margintop40"> -->
            <div class="about about-rightx taend">
              <div class="about-main-cn">
                <div class="about-before"></div>
                <div class="about-name-container">
                  <h2 class="about-name">Saeed Abbasi</h2>
                </div>
                <div class="role-container">
                  <div class="role">Front-end developer</div>
                </div>
                <div class="about-about-container">
                  <div class="about-about">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Consectetur, totam corporis. Praesentium quaerat maxime quidem deleniti
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- </div> -->
        </div>

        <div class="submit-order-about">
          <div class="submit-about-container">
            <nuxt-link to="/submit" class="submit-about">Send Us you order!</nuxt-link>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { TimelineLite, Power3, Power2, Power0 } from "gsap";
import * as ScrollMagic from "scrollmagic-with-ssr";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import $ from "jquery";
export default {
  mounted() {
    ScrollMagicPluginGsap(ScrollMagic, TimelineLite);

    var moveOnScroll = new TimelineLite();
    var introTimeline = new TimelineLite();
    var controller = new ScrollMagic.Controller();

    var introTimeline = new TimelineLite();
    introTimeline
      .to(".waitForLoad", 1, { y: "-110%", ease: Power3.easeInOut })
      .from(".introImgCN", 1.6, { y: "-100%", ease: Power3.easeInOut }, 0.0);

    moveOnScroll.to(".introImgCN img", 1, { y: 300, ease: Power0.easeNone });
    var introImgScene = new ScrollMagic.Scene({
      triggerElement: "body",
      duration: "100%",
      triggerHook: 0
    })
      .setTween(moveOnScroll)
      .addTo(controller);

    $(".about").each(function() {
      var staggerItems = $(this).find(".about-name, .role, .about-about");
      var aboutTimeline = new TimelineLite();
      aboutTimeline
        .staggerFrom(staggerItems, 1, { y: "100%", ease: Power3.easeOut }, 0.4)
        .fromTo(
          $(this).find(".about-after, .about-before"),
          2,
          { height: 0 },
          { height: "100%", ease: Power2.easeOut },
          0.4
        );

      var aboutItemSene = new ScrollMagic.Scene({
        triggerElement: this.children[0],
        triggerHook: 0.86,
        reverse: false
      })
        .setTween(aboutTimeline)
        .addTo(controller);
    });
  }
};
</script>

<style scoped>
.about-rightx {
  text-align: end;
}
</style>