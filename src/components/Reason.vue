<template>
  <q-tab-panels
    v-model="panel"
    animated
    swipeable
    infinite
    ref="reason_panels"
    class="bg-transparent text-white reason_panels"
    style="overflow: visible; white-space: normal;"
    :id="'reason_' + reason.id"
  >
    <q-tab-panel name="bla" class="reason_panel">
      <div class="reason_box">
        <div
          v-if="
            (reason.image !== null && reason.image.location === 'top') ||
              isWindowSmallBool
          "
          class="row"
        >
          <div class="col-12 reason reason_img_container_topdown">
            <q-img
              class="reason_img reason_img_topdown"
              :src="reason.image.src"
              contain
            />
          </div>
        </div>

        <div class="row" style="vertical-align: middle;">
          <div
            v-if="
              reason.image !== null &&
                reason.image.location === 'left' &&
                !isWindowSmallBool
            "
            class="col-xs-12 col-sm-3 col-md-3 col-lg-2 col-xl-2 reason_img_container_left"
          >
            <q-img
              style="vertical-align: middle !important;"
              :src="reason.image.src"
            />
          </div>
          <div
            style="white-space: pre-wrap"
            :class="{
              'col-sm-12 col-md-12':
                reason.image === null ||
                (reason.image !== null &&
                  (reason.image.location === 'bottom' ||
                    reason.image.location === 'top')),
              'reason_left col-sm-9 col-md-9 col-lg-10 col-xl-10':
                reason.image !== null && reason.image.location === 'left',
              'reason_right col-sm-9 col-md-9 col-lg-10 col-xl-10':
                reason.image !== null && reason.image.location === 'right',
              'reason col-xs-12 col-sm-12 col-md-12': reason.image === null,
              'reason col-xs-12': reason.image !== null
            }"
          >
            <div>
              <h4>{{ reason.reason_title }}</h4>
              <h6>{{ reason.reason_main_text }}</h6>
              <p v-if="reason.reason_text">
                <span v-html="reason.reason_text" />
              </p>
              <div class="reason_subpoints_container"
                v-if="
                  reason.reason_subpoints !== undefined &&
                    reason.reason_subpoints !== null
                "
              >
                <ul class="reason_subpoints">
                  <li
                    class="reason_subpoint"
                    v-for="(reason_subpoint, index) in reason.reason_subpoints"
                    :key="index"
                  >
                    <span v-html="reason_subpoint" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            style="vertical-align: middle !important;"
            v-if="
              reason.image !== null &&
                reason.image.location === 'right' &&
                !isWindowSmallBool
            "
            class="col-xs-12 col-sm-3 col-md-3 col-lg-2 col-xl-2 reason_img_container_right"
          >
            <div style="padding-right: 20px;">
              <q-img
                style="vertical-align: middle !important;"
                :src="reason.image.src"
              />
            </div>
          </div>
        </div>

        <div
          v-if="
            reason.image !== null &&
              reason.image.location === 'bottom' &&
              !isWindowSmallBool
          "
          class="row"
        >
          <div class="col-12 reason reason_img_container_topdown">
            <q-img
              class="reason_img reason_img_topdown"
              :src="reason.image.src"
              contain
            />
          </div>
        </div>
        <q-icon
          name="keyboard_arrow_right"
          class="arrow_right"
          @click="slidePanel()"
        />
      </div>
    </q-tab-panel>
    <q-tab-panel name="bla2" style="overflow: visible;"
      ><div class="reason_box" style="min-height: 400px;overflow: visible;">
        <ul>
          <li
            class="source_background_detail"
            v-for="source_background_detail in reason.source_background_details"
            :key="source_background_detail"
          >
            <span v-html="source_background_detail" />
          </li>
        </ul>
        <div
          class="q-pa-md row items-start q-gutter-md"
          style="overflow: visible;"
          v-if="
            reason.source_background_details_tiles !== undefined &&
              reason.source_background_details_tiles !== null &&
              reason.source_background_details_tiles.length > 0
          "
        >
          <q-card
            v-for="source_background_details_tile in reason.source_background_details_tiles"
            :key="source_background_details_tile.title"
            class="my-card text-white tooltip"
            style="background-color: #2B2B2B;overflow: visible;"
          >
            <span
              class="tooltiptext"
              v-if="
                source_background_details_tile.previous !== undefined &&
                  source_background_details_tile.previous !== null &&
                  source_background_details_tile.previous.length > 0
              "
              ><p>Replaces:</p>
              <p
                v-for="source_background_details_tile_previous in source_background_details_tile.previous"
                :key="source_background_details_tile_previous"
              >
                {{ source_background_details_tile_previous }}
              </p></span
            >
            <a
              :href="source_background_details_tile.link"
              style="color:white; text-decoration: none;"
            >
              <q-card-section
                style="word-wrap: normal; padding-bottom: 3px; padding-top: 3px; text-align: center;"
              >
                <q-icon
                  :name="source_background_details_tile.icon"
                  style="font-size:20pt; text-align: center;"
                />
                <div>{{ source_background_details_tile.title }}</div>
              </q-card-section>
              <q-separator dark inset />
              <q-card-section
                style="word-wrap: normal; padding-bottom: 3px; padding-top: 3px;"
              >
                <div>
                  <div>{{ source_background_details_tile.content }}</div>
                </div>
              </q-card-section>
            </a>
          </q-card>
        </div>
        <q-icon
          name="keyboard_arrow_right"
          class="arrow_right"
          @click="slidePanel()"
        />
      </div>
    </q-tab-panel>
  </q-tab-panels>
</template>

<script>
export default {
  name: "Reason",
  props: {
    reason: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      panel: "bla",
      isWindowSmallBool: false
    };
  },
  mounted() {
    this.isWindowSmall();
    window.addEventListener("resize", this.isWindowSmall);
    // https://stackoverflow.com/questions/15702867/html-tooltip-position-relative-to-mouse-pointer
    var tooltips = document.getElementsByClassName("tooltiptext");
    window.onmousemove = function(e) {
      var x = e.clientX - 40 + "px",
        y = e.clientY - 40 + "px";
      for (var i = 0; i < tooltips.length; i++) {
        tooltips[i].style.top = y;
        tooltips[i].style.left = x;
      }
    };
  },
  methods: {
    slidePanel() {
      this.$refs.reason_panels.next();
    },
    isWindowSmall() {
      this.isWindowSmallBool = window.innerWidth < 600;
      return window.innerWidth < 600;
    }
  }
};
</script>
