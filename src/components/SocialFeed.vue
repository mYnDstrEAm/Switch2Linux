<template>
  <div>
    <div id="rss">
      <div v-if="items.length > 0 && isSocialFeedExpanded === false">
        <q-carousel
          class="qcarousel2"
          animated
          v-model="slide"
          swipeable
          infinite
          autoplay
          transition-prev="slide-right"
          transition-next="slide-left"
        >
          <q-carousel-slide
            class="slide_item"
            :name="item.title"
            v-for="item in items"
            :key="item.guid"
          >
            <!-- :href="item.link" -->
            <!--if item.categories[0] !== null it's a subreddit-->
            <div
              style="border: 1px solid orange"
              v-if="
                item.feed_name === 'reddit' &&
                  item.categories[0] !== undefined &&
                  item.categories[0] !== null
              "
            >
              <p>{{ item.title }}</p>
              <!-- <div v-html="item.content"></div> -->
              <!-- <p style="color:black;">{{ item.title }}</p> -->
              <a :href="item.link" style="padding:0px !important; margin: 0px;"
                >{{ item.author }} on /r/{{ item.categories[0] }}</a
              >
              <p style="font-size: 8pt; opacity: 0.7;text-align:left;">
                ({{ dateFormat1(item.pubDate) }})
              </p>
            </div>

            <div
              style="border: 1px solid blue"
              v-else-if="item.feed_name === 'twitter'"
            >
              <div v-html="item.content"></div>
              <!--item.thumbnail--><!--item.enclosure.link--><!--:href="item.link"-->
            </div>
          </q-carousel-slide>
        </q-carousel>
        <div
          style="width: 100%; height: auto; background-color: #245f5e; horizontal-align: center; text-align: center;"
        >
          <q-icon
            name="keyboard_arrow_down"
            class="arrow_down_2"
            @click="expandSocialFeed()"
          />
        </div>
      </div>

      <div v-if="items.length > 0 && isSocialFeedExpanded === true">
        <div
          style="width: 100%; height: auto; background-color: #245f5e; horizontal-align: center; text-align: center;"
        >
          <q-icon
            name="keyboard_arrow_up"
            class="arrow_up_2"
            @click="collapseSocialFeed()"
          />
        </div>
        <q-list style="background-color: #245f5e;">
          <q-item v-for="item in items" :key="item.guid" :href="item.link">
            <q-item-section>
              <div
                class="reddit_post"
                style="border: 1px solid orange"
                v-if="item.feed_name === 'reddit'"
              >
                <p>{{ item.title }}</p>
                <a
                  :href="item.link"
                  style="padding:0px !important; margin: 0px;"
                  >{{ item.author }} on /r/{{ item.categories[0] }}</a
                >
                <p style="font-size: 8pt; opacity: 0.7;text-align:left;">
                  ({{ dateFormat1(item.pubDate) }})
                </p>
              </div>
              <div
                class="tweet"
                style="border: 1px solid blue"
                v-else-if="item.feed_name === 'twitter'"
              >
                <!-- <p style="color:black;">{{ item.title }}</p>
                <a :href="item.link"
                  >{{ item.author }} at {{ dateFormat1(item.pubDate) }}</a
                > -->
                <div v-html="item.content"></div>
              </div>
              <!-- {{ item.title }} -->
              <!-- <a :href="item.feed.link" :title="item.feed.description">
              {{ item.feed.title }}
            </a> -->
            </q-item-section>
            <!-- <v-list-tile-content :title="item.title">
            <v-list-tile-sub-title class="text--primary">{{
              item.title
            }}</v-list-tile-sub-title>
            <v-list-tile-title class="caption text--secondary">
              <v-layout>
                <v-flex>
                  {{
                    new Date(item.pubDate).toLocaleDateString(
                      $t("locale"),
                      timeOptions
                    )
                  }}
                </v-flex>
                <v-flex class="text-xs-right">
                  <a :href="item.feed.link" :title="item.feed.description">
                    {{ item.feed.title }}
                  </a>
                </v-flex>
              </v-layout>
            </v-list-tile-title>
          </v-list-tile-content> -->
          </q-item>
        </q-list>
        <!-- <q-card v-else>
        <q-linear-progress v-if="loading" indeterminate />
        <div v-else class="text-xs-center">
          <q-icon name="rss_feed" />
          <h2 v-t="'RSS.empty'" class="subheading" />
        </div>
      </q-card> -->
      </div>
    </div>
    <!-- <div>
      <q-input v-model="newFeed" placeholder="e.g. https://example.com/rss" />
      <q-btn v-t="'add'" flat @click="addFeed(newFeed)" />
    </div> -->
  </div>
</template>

<script>
import axios from "axios";
import dateFormat from "dateformat";

const API = "https://api.rss2json.com/v1/api.json?rss_url=";

export default {
  name: "SocialFeed",
  // props: {
  //   settings: {
  //     type: Object,
  //     required: true
  //   }
  // },
  data() {
    return {
      slide: "",
      items: [],
      loading: true,
      isSocialFeedExpanded: false,
      settings: {
        feeds: [
          // {
          //   name: "twitter",
          //   url: "https://rss.app/feeds/oH6SRHkSliQLXCmk.xml"
          // },
          // {
          //   name: "reddit",
          //   url: "https://www.reddit.com/search.xml?q=Twitter&sort=new"
          // }
        ]
      },
      newFeed: ""
    };
  },
  mounted() {
    this.items = [];
    // if (this.VALID_CACHE && !this.loading) {
    //   this.$emit("init", false);
    //   return;
    // }
    this.loadFeeds();
  },
  methods: {
    fetch(url) {
      let x = this.$axios
        .get(`${API}${encodeURIComponent(url)}`)
        .then(res => res.data);
      // console.log(x);
      return x;
    },
    addFeed(url) {
      if (url.trim().length === 0) return;
      this.newFeed = "";
      this.settings.feeds.push(url);
      this.loadFeeds();
    },
    removeFeed(idx) {
      this.settings.feeds.splice(idx, 1);
    },
    loadFeeds() {
      this.settings.feeds.forEach(feed => {
        Promise.resolve(this.fetch(feed.url))
          .then(feeds => {
            if (!feeds) throw new Error("Unexpected response from API");
            feeds.items.forEach(item => {
              item.feed_name = feed.name;
            });
            this.items = this.items
              .concat(feeds.items)
              .filter(item => {
                return (
                  (item.feed_name === "reddit" &&
                    item.item.categories[0] !== undefined &&
                    item.categories[0] !== null) ||
                  item.feed_name === "twitter"
                );
              })
              .sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate));
            // TODO sort by likes and upvotes (not in rss feed) or preselect tweets
          })
          .finally(() => {
            this.loading = false;
          })
          .catch(err => this.$emit("Error: ", err));
      });
    },
    expandSocialFeed() {
      this.isSocialFeedExpanded = true;
    },
    collapseSocialFeed() {
      this.isSocialFeedExpanded = false;
    },
    dateFormat1(item_pubDate) {
      return dateFormat(new Date(item_pubDate), "UTC:h:MM TT Z - d mmm yyyy");
    }
  }
};
</script>
