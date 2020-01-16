<template>
  <q-page class="page pre-formatted">
    <div class="q-pa-md page_container">
      <span class="page_upper">
        <Slideshow></Slideshow>
        <div class="what_row row justify-between items-start q-col-gutter-xl">
          <div
            class="col-xs-12 col-sm-6 col-md-6 col-lg-6 description_box whatIsLinuxBox"
            @mouseover="showWhatIsLinux(true)"
          >
            <transition
              appear
              enter-active-class="animated fadeIn slow"
              leave-active-class="animated fadeIn slow"
            >
              <div>
                <h5>{{ $t('explanations.what_is_linux_header') }}</h5>
                <p><span v-html="$t('explanations.what_is_linux')"/>
                  <span class="hidden" id="what_is_linux">{{ $t('explanations.what_is_linux_hidden') }}</span>
                </p>
              </div>
            </transition>
          </div>
          <div
            class="col-xs-12 col-sm-6 col-md-6 col-lg-6 description_box whatIsWebsiteBox"
            @mouseover="showWhatIsWebsite(true)"
          >
            <transition
              appear
              enter-active-class="animated fadeIn slow"
              leave-active-class="animated fadeIn slow"
            ><div id="whatIsWebsiteBoxContent">
                <h5>{{ $t('explanations.what_is_website_header') }}</h5>
                <p><span v-html="$t('explanations.what_is_website')"/>
                  <span class="hidden" id="what_is_website">{{ $t('explanations.what_is_website_hidden') }}
                  </span>
                </p>
              </div>
            </transition>
          </div>
        </div>
      </span>

      <div class="row why_how_row_top"></div>
      <div class="row why_how_row justify-between items-start q-col-gutter-xl">
        <div class="col-xs-6 col-sm-6 col-md-6 why_how_row_2">
          <h5 class="why_how">{{ $t('explanations.why') }}</h5>
          <q-icon
            name="keyboard_arrow_down"
            class="arrow_down"
            id="scroll_arrow"
            @click="scrollToElement2('why')"
          />
        </div>
        <div class="col-xs-6 col-sm-6 why_how_row_3">
          <h5 class="why_how">{{ $t('explanations.how') }}</h5>
          <q-icon
            name="keyboard_arrow_down"
            class="arrow_down"
            @click="scrollToElement2('how')"
          />
        </div>
      </div>
    </div>

    <div class="col-xs-12 col-sm-12" id="why">
      <h5>{{ $t('explanations.reasons_header') }}</h5>
      <p>{{ $t('explanations.reasons_subheader') }}</p>
      <Reason
        class="reasons perma_hidden2"
        v-for="reason in reasons"
        :key="reason.id"
        :reason="reason"
      />
    </div>

    <div class="col-xs-12 col-sm-12" id="how">
      <h5>{{ $t('explanations.wizard_header') }}</h5>
      <p>{{ $t('explanations.wizard_subheader') }}</p>
      <q-tab-panels
        v-model="panel"
        animated
        infinite
        id="options_panel"
        ref="options_panel_1"
        class="bg-transparent text-white"
      >
        <q-tab-panel name="user_os">
          <div class="options_container_container" id="user_os_options">
            <div class="row justify-between items-start q-col-gutter-xl">
              <div class="col options_container">
                <p>{{ $t('explanations.wizard_current_os') }}</p>
                <q-option-group
                  v-model="user_os"
                  :options="options_user_os"
                  @input="options_user_os_changed"
                  color="primary"
                />
                <q-icon
                  style="vertical-align: center; horizontal-align:right; top:30%; right:0px; position:absolute; font-size:30pt"
                  class="arrow_right"
                  v-if="hasOptionsArrowBackBeenClicked === true"
                  name="keyboard_arrow_right"
                  @click="jumpForward()"
                />
              </div>
            </div>
          </div>
        </q-tab-panel>

        <q-tab-panel name="user_type">
          <div class="options_container_container" id="user_type_options">
            <div class="row justify-between items-start q-col-gutter-xl">
              <div
                class="steps_selection_buttons options_container"
                v-if="user_os !== ''"
              >
                <q-icon
                  style="vertical-align: center; horizontal-align:left;top:30%;left:0px;position:absolute;"
                  name="keyboard_arrow_left"
                  class="arrow_left"
                  @click="jumpBack()"
                />
                <p>{{ $t('explanations.wizard_user_type') }}</p>
                <q-option-group
                  v-model="user_type"
                  :options="options_user_type"
                  @input="options_user_type_changed"
                  color="primary"
                />
              </div>
            </div>
          </div>
        </q-tab-panel>

        <!-- TODO remove strange intro animation -->
        <!-- TODO make q-tab-panels swipeable but this panel unswipeable -->
        <q-tab-panel name="setup_wizard">
          <div
            id="setup_wizard_left_side"
          >
            <q-icon
              style="vertical-align: center; horizontal-align:left;top:30%;left:0px;position:absolute;"
              name="keyboard_arrow_left"
              class="arrow_left"
              @click="jumpBack()"
            />
          </div>
          <SetupWizard :user_type="user_type" :user_os="user_os"></SetupWizard>
          <div v-if="user_type === '' || user_os === ''">
            <p>{{ $t('explanations.wizard_select_first_message') }}</p>
          </div>
        </q-tab-panel>
      </q-tab-panels>
    </div>
    <div
      style="margin: auto; padding-bottom: 20px; background-color: #245f5e;"
    >
      <table style="margin: auto;"><tr>
        <td>
      <q-icon
        name="ion-logo-github"
        class="logo_icon"
        @click="openUrl('https://github.com/mYnDstrEAm/Switch2Linux')"
        style="cursor: pointer;"
      ></q-icon></td><td>
      <q-icon
        name="ion-logo-reddit"
        class="logo_icon"
        @click="openUrl('https://www.reddit.com/search?q=Switch2Linux&restrict_sr=')"
        style="cursor: pointer;"
      ></q-icon></td><td>
      <q-icon
        name="ion-logo-twitter"
        class="logo_icon"
        @click="openUrl('https://twitter.com/hashtag/Switch2Linux')"
        style="cursor: pointer;"
      ></q-icon></td><td>
      <div style="position: absolute; right: 0px; text-align: right; padding-right: 10px; cursor: pointer;"><p @click="showImageSources()">Image sources</p></div></td>
      </tr>
      </table>
    </div>
    <SocialFeed></SocialFeed>
  </q-page>
</template>

<script>
import { reasons } from "../statics/reasons.js";
import styles from "../assets/styles/main.sass";
import Reason from "../components/Reason.vue";
import { i18n } from "../boot/i18n.js";
import SetupWizard from "../components/SetupWizard.vue";
import Slideshow from "../components/Slideshow.vue";
import SocialFeed from "../components/SocialFeed.vue";
import { scroll } from "quasar";
const { getScrollTarget, setScrollPosition } = scroll;
import languages from "quasar/lang/index.json";
const availableTranslations = ["de-de", "en-us"];
const appLanguages = languages.filter(lang =>
  availableTranslations.includes(lang.isoName)
);

export default {
  name: "PageIndex",
  mounted() {
    //setlang
    var language = window.navigator.userLanguage || window.navigator.language;
    if (availableTranslations.includes(language)) {
      //.isoName)
      this.lang = language;
    }

    window.addEventListener("resize", this.init);
    window.addEventListener("scroll", this.checkPosition);
    window.addEventListener("DOMContentLoaded", this.checkPosition);
    this.animationDone = false;
    this.isWhyHowExpanded = false;
    this.init();
  },
  data() {
    return {
      user_type: "",
      user_os: "",
      panel: "user_os",
      lang: this.$q.lang.isoName,
      animationDone: false,
      userHasScrolled: false,
      isWhyHowExpanded: false,
      isSetupWizardFullscreen: false,
      hasOptionsArrowBackBeenClicked: false,
      elements: [],
      windowHeight: 0,
      options_user_os: [
        {
          label: "Windows",
          value: "Windows"
        },
        {
          label: "macOS",
          value: "macOS"
        }
      ],
      options_user_type: [
        {
          label: i18n.t("explanations.wizard_options_user_type_personal"),
          value: "Personal user (inexperienced)"
        },
        {
          label: i18n.t("explanations.wizard_options_user_type_geek"),
          value: "Geek (experienced)"
        },
        {
          label: i18n.t("explanations.wizard_options_user_type_developer"),
          value: "Developer"
        },
        {
          label: i18n.t("explanations.wizard_options_user_type_school"),
          value: "School"
        },
        {
          label: i18n.t("explanations.wizard_options_user_type_administration"),
          value: "Public administration"
        },
        {
          label: i18n.t("explanations.wizard_options_user_type_business"),
          value: "Business"
        }
      ],
      reasons: reasons
    };
  },
  components: {
    Reason,
    SocialFeed,
    SetupWizard,
    Slideshow
  },
  methods: {
    scrollToElement(el) {
      let ell = document.getElementById(el);
      let target = getScrollTarget(ell);
      let offset = ell.offsetTop;
      let duration = 200;
      setScrollPosition(target, offset, duration);
    },
    scrollToElement2(el2) {
      let ell = document.getElementById(el2);
      ell.scrollIntoView();
    },

    init() {
      this.elements = document.querySelectorAll(".hidden");
      this.windowHeight = window.innerHeight;
      this.checkPosition();
    },
    checkPosition() {
      // this.showWhatIsLinux(false);
      // this.showWhatIsWebsite(false);
      if (!this.animationDone) {
        for (var i = 0; i < this.elements.length; i++) {
          var element = this.elements[i];
          var positionFromTop = this.elements[i].getBoundingClientRect().top;
          if (positionFromTop - this.windowHeight <= 0 && this.userHasScrolled) {
            element.classList.add("animated", "bounceInUp", "slow");
            element.classList.remove("hidden");
            this.animationDone = true;
          }
        }
      }
      this.userHasScrolled = true;
      let elll = document.getElementsByClassName("reasons");
      for (var i = 0; i < elll.length; i++) {
        if (
          document.documentElement.scrollTop + this.windowHeight >
          elll[i].offsetTop + elll[i].offsetHeight - elll[i].clientHeight * 0.45
        ) {
          if (
            this.reasons[i].special !== undefined &&
            this.reasons[i].special !== null &&
            this.reasons[i].special === true
          )
            elll[i].classList.add("animated", "slideInUp", "slow");
          else if (
            this.reasons[i].slide !== undefined &&
            this.reasons[i].slide !== null &&
            this.reasons[i].slide.indexOf("right") < 0
          )
            elll[i].classList.add("animated", "zoomIn", "slow");
          else elll[i].classList.add("animated", "zoomIn", "slow");
          elll[i].classList.remove("perma_hidden2");
        }
      }
    },
    showWhatIsLinux(isMouseOver) {
      let el = document.getElementById("what_is_linux");
      el.classList.add("animated", "fadeIn", "slow");
      el.classList.remove("hidden");
      if (isMouseOver) {
        let ell = document.getElementById("scroll_arrow");
        let offset = ell.offsetTop;
        let scrollPixels = offset - window.pageYOffset;
        let x = offset + 36 - (window.pageYOffset + window.innerHeight);
        if (x > 0) window.scrollBy(0, x);
      }
    },
    showWhatIsWebsite(isMouseOver) {
      let el = document.getElementById("what_is_website");
      el.classList.add("animated", "fadeIn", "slow");
      el.classList.remove("hidden");

      // let el3 = document.getElementById("to_hide");
      // el3.classList.add("perma_hidden");
      if (isMouseOver) {
        let ell = document.getElementById("scroll_arrow");
        let offset = ell.offsetTop;
        let scrollPixels = offset - window.pageYOffset;
        let x = offset + 36 - (window.pageYOffset + window.innerHeight);
        if (x > 0) window.scrollBy(0, x);
      }
    },
    options_user_type_changed(value) {
      this.panel = "setup_wizard";
    },
    options_user_os_changed(value) {
      this.panel = "user_type";
    },
    jumpBack() {
      this.$refs.options_panel_1.previous();
      this.hasOptionsArrowBackBeenClicked = true;
    },
    jumpForward() {
      this.$refs.options_panel_1.next();
    },
    openUrl(url) {
      window.open(url, "_blank");
    },
    showImageSources () {
      this.$q.dialog({
        dark: true,
        title: '<p>Image sources</p>',
        html: true,
        message:
          '<ul><li><strong>Reason \"It\'s gratis\"</strong>: <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://svgsilh.com/image/2073604.html\" style=\"color: white;\">1</a> <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://pxhere.com/en/photo/1453371\" style=\"color: white;\">2</a></li>' +
          '<li><strong>Reason \"It\'s free software\"</strong>: <a target="_blank" rel="noopener noreferrer" href="https://commons.wikimedia.org/wiki/File:Free_and_open-source_software_logo_(2009).svg" style="color: white;">1</a></li>' +
          '<li><strong>Reason \"Realizes a free and open society\"</strong>: <a target="_blank" rel="noopener noreferrer" href="https://pixabay.com/pt/illustrations/globo-global-terra-planeta-mundo-689407/" style="color: white;">1</a> <a target="_blank" rel="noopener noreferrer" href="https://svgsilh.com/de/image/147015.html" style="color: white;">2</a> <a target="_blank" rel="noopener noreferrer" href="https://pixabay.com/de/illustrations/puzzle-puzzleteil-spiel-puzzeln-1318349/" style="color: white;">3</a></li>' +
          '<li><strong>Reason \"More secure\"</strong>: <a target="_blank" rel="noopener noreferrer" href="https://pixabay.com/fr/illustrations/de-s%C3%A9curit%C3%A9-bouclier-protection-3482962/" style="color: white;">1</a> <a target="_blank" rel="noopener noreferrer" href="https://openclipart.org/detail/215819/linux%20avatar" style="color: white;">2</a></li>' +
          '<li><strong>Reason \"Fosters innovation\"</strong>: <a target="_blank" rel="noopener noreferrer" href="https://pixabay.com/illustrations/business-idea-innovation-creative-3420279/" style="color: white;">1</a></li>' +
          '<li><strong>Reason \"Also runs on old hardware and mini computers\"</strong>: <a target="_blank" rel="noopener noreferrer" href="https://community.kde.org/File:Mascot_konqi-app-hardware.png" style="color: white;">1</a></li>' +
          '<li><strong>Reason \"No walled garden and vendor-lock-in\"</strong>: <a target="_blank" rel="noopener noreferrer" href="https://commons.wikimedia.org/wiki/File:Ic_lock_open_48px.svg" style="color: white;">1</a></li>' +
          '<li><strong>Reason \"Privacy\"</strong>: <a target="_blank" rel="noopener noreferrer" href="https://rally.stopwatching.us/resources.html" style="color: white;">1</a></li>' +
          '<li><strong>Reason \"Independence and sovereignty\"</strong>: <a target="_blank" rel="noopener noreferrer" href="https://pixabay.com/de/illustrations/computer-vergr%C3%B6%C3%9Fern-glas-laptop-3710284/" style="color: white;">1</a></li>' +
          '<li><strong>Reason \"Update mechanism and software repository\"</strong>: <a target="_blank" rel="noopener noreferrer" href="https://userbase.kde.org/Discover#How_to_use_Discover" style="color: white;">1</a></li>' +
          '<li><strong>Reason \"Can look better than Windows and macOS\"</strong>: <a target="_blank" rel="noopener noreferrer" href="https://commons.wikimedia.org/wiki/File:Neon-logo.svg" style="color: white;">1</a></li>' +
          '<li><strong>Reason \"Changeable source code\"</strong>: <a target="_blank" rel="noopener noreferrer" href="https://pxhere.com/en/photo/1451251" style="color: white;">1</a></li>' +
          '<li><strong>Reason \"Community support\"</strong>: <a target="_blank" rel="noopener noreferrer" href="https://commons.wikimedia.org/wiki/File:Editors_and_community_support.png" style="color: white;">1</a></li>' +
          '<li><strong>Reason \"Only few barriers left\"</strong>: <a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/Usage_share_of_operating_systems#Desktop_and_laptop_computers" style="color: white;">1</a></li>' +
          '<li><strong>Logos</strong>: <a target="_blank" rel="noopener noreferrer" href="https://commons.wikimedia.org/wiki/File:Debian-OpenLogo.svg" style="color: white;">Debian</a> <a target="_blank" rel="noopener noreferrer" href="https://commons.wikimedia.org/wiki/File:Neon-logo.svg" style="color: white;">KDE neon</a> <a target="_blank" rel="noopener noreferrer" href="https://commons.wikimedia.org/wiki/File:Kubuntu_logo.svg" style="color: white;">Kubuntu</a> <a target="_blank" rel="noopener noreferrer" href="https://commons.wikimedia.org/wiki/File:KDE_logo.svg" style="color: white;">KDE</a> <a target="_blank" rel="noopener noreferrer" href="https://en.wikipedia.org/wiki/File:Gnomelogo.svg" style="color: white;">GNOME</a></li>' +
          '<li><strong>Screenshots</strong>: <a target="_blank" rel="noopener noreferrer" href="https://www.reddit.com/r/unixporn/comments/b62mqc/kde_neon_mountains/" style="color: white;">1 by reddit user u/MrChrobok</a> <a target="_blank" rel="noopener noreferrer" href="https://commons.wikimedia.org/wiki/File:Kde-neon-5.14.png" style="color: white;">2 by Wikipedia User Ulexer Miner</a> <a target="_blank" rel="noopener noreferrer" href="https://dot.kde.org/2020/01/15/moving-windows-7-plasma-do-it-easy-way" style="color: white;">3 by KDE, David Cahalane</a>' +
          '<li>The reddit user will be contacted and more Screenshots will be added. The images have been modified.</li>' +
          '</ul>'
      }).onOk(() => {})
    }
  },
  watch: {
    user_os: function(val) {},
    user_type: function(val) {
      this.$nextTick(() => {
        this.scrollToElement2("stepper_module");
      });
    },
    lang(lang) {
      // dynamic import, so loading on demand only
      import(
        /* webpackInclude: /(de|en-us)\.js$/ */
        `quasar/lang/${lang}`
      ).then(lang => {
        this.$q.lang.set(lang.default);
      });
    }
  },
  created() {
    this.langOptions = appLanguages.map(lang => ({
      label: lang.nativeName,
      value: lang.isoName
    }));
  }
};
</script>