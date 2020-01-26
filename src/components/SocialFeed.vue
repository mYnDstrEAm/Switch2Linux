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
            <div
              style="border: 1px solid orange"
              v-if="
                item.feed_name === 'reddit' &&
                  item.categories[0] !== undefined &&
                  item.categories[0] !== null
              "
            >
              <p>{{ item.title }}</p>
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
                <div v-html="item.content"></div>
              </div>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import dateFormat from "dateformat";
import styles from "../assets/styles/social_feed.sass";

const API = "https://api.rss2json.com/v1/api.json?rss_url=";

export default {
  name: "SocialFeed",
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
          //   url: "..."
          // },
          // {
          //   name: "reddit",
          //   url: "https://www.reddit.com/search.xml?q=Switch2Linux&sort=new"
          // }
        ]
      },
      newFeed: ""
    };
  },
  mounted() {
    this.items = [];
    this.loadFeeds();
  },
  methods: {
    fetch(url) {
      let x = this.$axios
        .get(`${API}${encodeURIComponent(url)}`)
        .then(res => res.data);
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
