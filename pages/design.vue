<template>
  <div class="des">
    <header class="submitHeader">
      <div class="submitHeaderInner sdvInner">
        <div class="introImgCN">
          <img src="../assets/Images/about-city.jpg" alt />
        </div>
        <div class="submitH1-container">
          <h1 class="submitH1">SEDEVS | Web Design</h1>
        </div>
      </div>
    </header>
    <main class="designMain">
      <div class="designMainInner sdvInner">
        <div class="designs">
          <div class="design">
            <div class="design-name-container">
              <div class="design-name">Web Design</div>
              <div class="design-name-after"></div>
            </div>
            <div class="design-content-container">
              <h2 class="design-content">
                We design beautiful, stylish, artistic websites with responsive design and best
                compatibility between all browsers, including secure and dynamic content which you can
                add, edit, remove and customize every single line on the website
                through provided CMS (Contens Management System)
              </h2>
            </div>
          </div>
          <div class="design">
            <div class="design-name-container">
              <div class="design-name">Server-side Service</div>
              <div class="design-name-after"></div>
            </div>
            <div class="design-content-container">
              <p class="design-content">
                Our websites are not what they only seem. We offer extensive backend service with custom
                coding to anything you need done. We can create custom forms for support or various
                coding combinations for all your needs.
              </p>
            </div>
          </div>
          <div class="design">
            <div class="design-name-container">
              <div class="design-name">Payment methods</div>
              <div class="design-name-after"></div>
            </div>
            <div class="design-content-container">
              <p class="design-content">
                We offer loads of ways to be payed for your convenience. We accept bank wire, paypal,
                and all major cryptocurrencies. Please contact us for more info.
              </p>
            </div>
          </div>
          <div class="design">
            <div class="design-name-container">
              <div class="design-name">Client support</div>
              <div class="design-name-after"></div>
            </div>
            <div class="design-content-container">
              <p class="design-content">
                Just Because your website was delivered doesn't mean it is done. We offer 15 days of
                free support to iron bugs, or change something that is going to make the website like
                the way you dreamt about it. We also offer a payed service of updating your website
                in desired timeframes that we will agree upon.
              </p>
            </div>
          </div>
        </div>

        <div class="submit-order-about submit-added-to-design">
          <div class="submit-about-container">
            <nuxt-link to="/submit" class="submit-about">Send Us you order!</nuxt-link>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { TimelineLite, Power3, Power0, Power2 } from "gsap";
import * as ScrollMagic from "scrollmagic-with-ssr";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import $ from "jquery";

export default {
  mounted() {
    ScrollMagicPluginGsap(ScrollMagic, TimelineLite);
    var introTimeline = new TimelineLite();
    introTimeline
      .to(".waitForLoad", 1, { y: "-110%", ease: Power3.easeInOut })
      .from(".introImgCN", 1.6, { y: "-100%", ease: Power3.easeInOut }, 0.0);

    //scroll magic
    var moveOnScroll = new TimelineLite();
    var controller = new ScrollMagic.Controller();

    moveOnScroll.to(".introImgCN img", 1, { y: 300, ease: Power0.easeNone });
    var introImgScene = new ScrollMagic.Scene({
      triggerElement: "body",
      duration: "100%",
      triggerHook: 0
    })
      .setTween(moveOnScroll)
      .addTo(controller);

    $(".design").each(function() {
      console.log(this);
      var itemName = $(this).find(".design-name");
      var itemContent = $(this).find(".design-content");
      var designTimeline = new TimelineLite();
      designTimeline
        .from(itemName, 1, { y: "100%", ease: Power3.easeOut }, 0.2)
        .from(itemContent, 2, { autoAlpha: 0, ease: Power3.easeOut }, 0.2)
        .from(
          $(this).find(".design-name-after"),
          2,
          { width: 0, ease: Power2.easeOut },
          0
        );

      var aboutItemSene = new ScrollMagic.Scene({
        triggerElement: this.children[0],
        triggerHook: 0.86,
        reverse: false
      })
        .setTween(designTimeline)
        .addTo(controller);
    });
  }
};
</script>