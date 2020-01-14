<template>
  <div v-if="installed">
    <q-btn @click="loadedd()" />
    <slot name="loading" v-if="!ready" />
    <div v-show="ready">
      <slot />
    </div>
  </div>
  <div v-else>
    <q-btn @click="loadedd()" />
    <slot name="loading" />
  </div>
</template>

<script>
// import VueScript2 from "vue-script2";
export default {
  data() {
    return {
      installed: !!window.twttr,
      ready: false
    };
  },
  mounted() {
    console.log("insss");
    this.install();
  },
  methods: {
    install() {
      console.log("inst");
      if (!this.installed) {
        console.log("inst");
        // install
        // console.log(VueScript2);
        // VueScript2.load("https://platform.twitter.com/widgets.js")
        //   .then(() => {
        //     console.log("installing");
        //     this.installed = true;
        //     this.$nextTick(() => {
        //       this.init();
        //       this.$emit("installed");
        //       console.log("installed");
        //     });
        //   })
        //   .catch(err => {
        //     console.error(err);
        //     this.$emit("err", err);
        //   });

        var script = document.createElement("script");
        // var scripts = document.getElementsByTagName("script")[0];
        script.src = "https://platform.twitter.com/widgets.js";
        script.type = "text/javascript";
        // script.onload = () => resolve(src);
        // scripts.parentNode.insertBefore(script, scripts);
        // console.log(scripts.parentNode)
        console.log(document.getElementsByTagName("head")[0]);
        var head = document.getElementsByTagName("head")[0];
        head.appendChild(script);
        console.log(document.getElementsByTagName("head")[0]);
        console.log("installed");
      } else {
        console.log("ini");
        this.init();
      }
    },
    init() {
      this.$nextTick(() => {
        console.log(window);
        window.twttr.widgets
          .load()
          .then(() => {
            console.log("r");
            this.ready = true;
            this.$emit("ready");
          })
          .catch(err => {
            console.log("e");
            console.error(err);
            this.$emit("err", err);
          });
      });
    },
    loadedd() {
      console.log("installed");
      this.init();
      this.$emit("installed");
    }
  }
};
</script>