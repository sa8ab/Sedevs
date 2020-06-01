<template>
  <div class="index">
    <header class="intro">
      <div class="introInner">
        <div class="introImgCN">
          <img src="../assets/Images/Ocean Ice.jpg" alt="Sedevs Intro Hero Image" />
        </div>
        <div class="introCN">
          <div class="introCNInner">
            <h1 class="introH1">SEDEVS</h1>
            <h2 class="introH2">We Create What YOU Need</h2>
          </div>
        </div>
        <div class="introEmpty"></div>
      </div>
    </header>
    <section class="scrollForMore">
      <i class="icon ion-ios-arrow-down"></i>
    </section>

    <section class="extra">
      <div class="extra-inner sdvInner">
        <div class="extra-item main-extra-item">
          <h2 class="extra-item-name">
            Web Design
            <span class="extra-name-after"></span>
          </h2>
          <div class="extra-item-detail">
            We design beautiful, stylish, artistic websites with responsive
            design and best compatibility between all browsers, including
            secure and dynamic content which will be accesible through
            customizable CMS (Contens Management System)
          </div>
          <nuxt-link to="/design" class="extra-more">Read More...</nuxt-link>
        </div>
        <div class="extra-item extra-item-rev">
          <h2 class="extra-item-name">
            Secure backend
            <span class="extra-name-after"></span>
          </h2>
          <div class="extra-item-detail">
            Our websites are not what they only seem. We offer extensive
            backend service with custom coding to anything you need done. We
            can create custom forms for support or various coding combinations
            for all your needs.
          </div>
        </div>
      </div>
    </section>

    <main class="recentCN">
      <div class="recentInner sdvInner">
        <div class="recentTitle">
          <div class="recentTitleInner">
            <span>Portfolio</span>
            <div class="recentTitleAfter"></div>
          </div>
        </div>
        <div class="recentItems">
          <div class="recent">
            <div class="recentItemInner">
              <div class="recentImgCN">
                <img src="../assets/Images/raceroms.jpg" alt="Sedevs raceroms.com" />
              </div>
              <div class="overRecentConstant"></div>
              <a href="https://raceroms.com/" class="overRecent">
                <div class="orName">Raceroms</div>
                <div class="orVisit">Visit website</div>
              </a>
            </div>
          </div>
          <div class="recent">
            <div class="recentItemInner">
              <div class="recentImgCN">
                <img src="../assets/Images/chronus.jpg" alt="Sedevs chrouns.gr" />
              </div>
              <div class="overRecentConstant"></div>
              <a href="http://chronus.gr/" class="overRecent">
                <div class="orName">Chronus</div>
                <div class="orVisit">Visit website</div>
              </a>
            </div>
          </div>
          <div class="recent">
            <div class="recentItemInner">
              <div class="recentImgCN">
                <img src="../assets/Images/Ocean Ice.jpg" alt />
              </div>
              <div class="overRecentConstant"></div>
              <a href="#" class="overRecent">
                <div class="orName">CrypticMag</div>
                <div class="orVisit">Visit website</div>
              </a>
            </div>
          </div>
          <div class="recent">
            <div class="recentItemInner">
              <div class="lastItemTitle">Your Website</div>
              <a href="./submit.html" class="overRecent overRecentLast">
                <div class="orName">Order Now</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>

    <section class="aboutInMain">
      <div class="aboutSectionInner sdvInner">
        <div class="aboutTitle">
          <a href="./about.html" class="aboutTitleInner">
            <span>About Us</span>
            <div class="aboutTitleAfter"></div>
          </a>
        </div>
        <div class="aboutSectonContent">
          <div class="about-text">
            We design beautiful, stylish, artistic websites with responsive
            design and best compatibility between all browsers, including
            secure and dynamic content which will be accesible through
            customizable CMS (Contens Management System)
          </div>
          <nuxt-link to="/about" class="extra-more about-more">Read More...</nuxt-link>
        </div>
      </div>
    </section>

    <section class="us">
      <div class="usBackground">
        <img src="../assets/Images/us.jpg" alt />
      </div>
      <div class="usShape"></div>
      <div class="usInner sdvInner">
        <div class="usTitle">
          <nuxt-link to="/about" class="usTitleInner">
            <span>Leave your website to Us</span>
            <div class="usTitleAfter"></div>
          </nuxt-link>
        </div>
        <div class="usContent">
          <div class="us-text">One step away from becoming our welcomed customer</div>
          <nuxt-link to="/submit" class="extra-more us-more">Fill the form</nuxt-link>
        </div>
      </div>
    </section>

    <div class="ws"></div>
  </div>
</template>

<script>
import { TimelineLite, Power3, Power0 } from "gsap";
import * as ScrollMagic from "scrollmagic-with-ssr";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

export default {
  mounted() {
    ScrollMagicPluginGsap(ScrollMagic, TimelineLite);
    var introTimeline = new TimelineLite();
    introTimeline
      .to(".waitForLoad", 1, { y: "-110%", ease: Power3.easeInOut })
      // .staggerFrom(".navItem", 1, { opacity: 0, x: 100 }, 0.1, 0.4)
      // .from(".menuAction", 1, { opacity: 0, x: 100 }, 0.4)
      // .from(".navLogoCN", 1, { opacity: 0, x: -100 }, 0.4)
      .from(".introImgCN", 1.6, { y: "-100%", ease: Power3.easeInOut }, 0.0);

    //scroll magic
    var moveOnScroll = new TimelineLite();
    var extra = new TimelineLite();
    var recent = new TimelineLite();
    var recentItems = new TimelineLite();
    var controller = new ScrollMagic.Controller();

    moveOnScroll.to(".introImgCN img", 1, { y: 300, ease: Power0.easeNone });
    var introImgScene = new ScrollMagic.Scene({
      triggerElement: "body",
      duration: "100%",
      triggerHook: 0
    })
      .setTween(moveOnScroll)
      .addTo(controller);

    extra
      .staggerFrom(".main-extra-item > *", 0.8, { opacity: 0, x: -100 }, 0.1)
      .staggerFrom(".extra-item-rev > *", 0.8, { opacity: 0, x: 100 }, 0.2, 0.4)
      .from(".extra-name-after", 2, { width: 0 }, 0.4);
    var extraScene = new ScrollMagic.Scene({
      triggerElement: ".extra",
      triggerHook: 0.7,
      // duration: 80,
      reverse: false
    })
      .setTween(extra)
      .addTo(controller);

    recent
      .from(".recentTitleAfter", 0.8, { width: 0 })
      .from(
        ".recentTitleInner > span",
        0.8,
        { y: 60, ease: Power3.easeOut },
        0.4
      );
    var recentScene = new ScrollMagic.Scene({
      triggerElement: ".recentInner",
      triggerHook: 0.8,
      reverse: false
    })
      .setTween(recent)
      .addTo(controller);

    function myFunction(x) {
      if (x.matches) {
        // If media query matches
        recentItems.staggerFrom(".recent", 0.8, { x: "-100%" }, 0.1);
      } else {
        recentItems.staggerFrom(".recent", 0.8, { y: "-100%" }, 0.1);
      }
    }
    var x = window.matchMedia("(max-width: 1080px)");
    myFunction(x); // Call listener function at run time
    x.addListener(myFunction); // Attach listener function on state changes
    var recentItemsScene = new ScrollMagic.Scene({
      triggerElement: ".recentInner",
      triggerHook: 0.5,
      reverse: false
    })
      .setTween(recentItems)
      .addTo(controller);
  },
  beforeDestroy() {
    // controller.destroy(reset);
    // controller = null;
  }
};
</script>