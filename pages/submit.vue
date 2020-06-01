<template>
  <div>
    <header class="submitHeader">
      <div class="submitHeaderInner sdvInner">
        <div class="introImgCN">
          <img src="../assets/Images/Ocean Ice.jpg" alt />
        </div>
        <div class="submitH1-container">
          <h1 class="submitH1">Send Project Details To Sedevs</h1>
        </div>
      </div>
    </header>
    <main class="submitMain">
      <div class="mainInner sdvInner">
        <div class="form-container">
          <div class="form-info">
            <div class="left-appear form-appear"></div>
            <div class="top-appear form-appear"></div>
            <div class="form-info-inner">
              <div class="form-info-items">
                <div class="info-item">
                  <i class="icon ion-md-checkmark"></i>
                  <h2 class="info-text">
                    Whenever you contact us, we will email you back in less than 24 hours, if you
                    can not see our response, please check your spam folder
                  </h2>
                </div>
                <div class="info-item">
                  <i class="icon ion-md-checkmark"></i>
                  <p class="info-text">For more info please contact one of the ways below</p>
                </div>
                <div class="info-item contact-info-container">
                  <section class="footer-info-section marginRight">
                    <h4 class="footerh4">
                      <!-- <i class="icon ion-md-call"></i> -->
                      <span>phone</span>
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
            </div>
          </div>
          <div class="form">
            <div class="bottom-appear form-appear"></div>
            <form @submit.prevent="formSubmit" class="form-inner">
              <section class="form-section">
                <div class="form-section-name">Personal Information</div>
                <div class="form-item-basic">
                  <vs-input :state="iName ? 'danger' : null" v-model="name" placeholder="Name">
                    <template #icon>
                      <i class="user icon outline"></i>
                    </template>
                    <template v-if="iName" #message-danger>Required</template>
                  </vs-input>
                </div>
                <div class="form-item-basic">
                  <vs-input v-model="email" placeholder="Email">
                    <template #icon>
                      <i class="envelope icon outline"></i>
                    </template>
                  </vs-input>
                </div>
              </section>
              <section class="form-section">
                <div class="form-section-name">Website Information</div>

                <div class="form-item-basic">
                  <vs-input v-model="webname" placeholder="Name of your website">
                    <template #icon>
                      <i class="globe icon"></i>
                    </template>
                  </vs-input>
                </div>

                <div class="form-item-basic">
                  <vs-input v-model="pnum" placeholder="Estimated number of pages">
                    <template #icon>
                      <i class="list ol icon"></i>
                    </template>
                  </vs-input>
                </div>
                <div class="check">
                  <vs-checkbox val="responsive" color="#039eb0" v-model="options">Responsive design</vs-checkbox>
                </div>
                <div class="check">
                  <vs-checkbox val="Plugin" color="#039eb0" v-model="options">Include plugins</vs-checkbox>
                </div>

                <vs-checkbox
                  val="e_commerce"
                  color="#039eb0"
                  v-model="options"
                >It is an E-commerce/Shopping website</vs-checkbox>
                <vs-checkbox
                  val="logo"
                  color="#039eb0"
                  v-model="options"
                >Sedevs will design the logo for the website</vs-checkbox>

                <div class="check">
                  <vs-checkbox val="cms" color="#039eb0" v-model="options">
                    I want Content Management System for my
                    website
                  </vs-checkbox>
                </div>

                <div class="check">
                  <vs-checkbox val="animation" color="#039eb0" v-model="options">Include animations</vs-checkbox>
                </div>

                <vs-checkbox
                  val="hosting"
                  color="#039eb0"
                  v-model="options"
                >Sedevs will do the hosting for you</vs-checkbox>

                <div class="more-detail-cn">
                  <span class="more-detail">Tell us more about your website</span>
                  <textarea class="more-detail-textarea"></textarea>
                </div>
                <vs-button
                  ref="submitButton"
                  shadow
                  transparent
                  class="submit-form"
                  animation-type="vertical"
                >
                  Send
                  <template #animate v-if="!submitting">
                    <i class="icon paper plane outline"></i>
                  </template>
                </vs-button>
              </section>
            </form>
          </div>
        </div>
      </div>

      <div class="ws"></div>
    </main>
  </div>
</template>

<script>
import { TimelineLite, Power3, Power0 } from "gsap";
import * as ScrollMagic from "scrollmagic-with-ssr";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";

export default {
  data() {
    return {
      name: "",
      email: "",
      webname: "",
      pnum: "",
      iName: false,
      iEmail: false,
      iWebname: false,
      iPnum: false,
      options: [],
      submitting: false
    };
  },
  methods: {
    formSubmit() {
      // console.log(this.$refs.formSubmit)
      this.submitting = true;
      this.$vs.loading({
        // target: this.$refs.submitButton,
        background: "white",
        color: "#039eb0",
        type: "corners"
      });
      console.log("submitting");
    }
  },
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
  }
};
</script>

<style scoped>
.check {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.info {
  color: white;
  background: var(--dark);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-radius: 40px;
}
</style>