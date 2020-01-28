import { i18n } from "../boot/i18n.js";

var id = -1;

export var reasons = [
  {
    id: (id = id + 1),
    reason_title: i18n.t(`reasons[${id}].title`),
    reason_main_text: i18n.t(`reasons[${id}].main_text`),
    reason_text: i18n.t(`reasons[${id}].text`),
    image: {
      location: "left",
      src: i18n.t(`reasons[${id}].image_src`)
    },
    slide: [""],
    source_background_details: i18n.t(
      `reasons[${id}].source_background_details`
    ),
    visible: false
  },
  {
    id: (id = id + 1),
    reason_title: i18n.t(`reasons[${id}].title`),
    reason_main_text: i18n.t(`reasons[${id}].main_text`),
    reason_text: i18n.t(`reasons[${id}].text`),
    image: {
      location: "right",
      src: i18n.t(`reasons[${id}].image_src`)
    },
    slide: ["right"],
    visible: false,
    source_background_details: i18n.t(
      `reasons[${id}].source_background_details`
    ),
    source_background_details_tiles: [
      {
        title: i18n.t(`reasons[${id}].source_background_details_tiles[0]`),
        icon: "email",
        image: "statics/apps/icon_thunderbird.png",
        previous: ["Outlook"],
        content: "Thunderbird",
        link: "https://www.thunderbird.net/en-US/"
      },
      {
        title: i18n.t(`reasons[${id}].source_background_details_tiles[1]`),
        icon: "work",
        image: "statics/apps/icon_libreoffice.png",
        previous: ["Microsoft Office"],
        content: "LibreOffice",
        link: "https://www.libreoffice.org/"
      },
      {
        title: i18n.t(`reasons[${id}].source_background_details_tiles[2]`),
        icon: "picture_as_pdf",
        image: "statics/apps/icon_okular.png",
        previous: ["Adobe Reader"],
        content: "Okular",
        link: "https://okular.kde.org/download.php"
      },
      {
        title: i18n.t(`reasons[${id}].source_background_details_tiles[3]`),
        icon: "folder",
        image: "statics/apps/icon_dolphin.png",
        previous: ["Windows Explorer"],
        content: "Dolphin",
        link: "https://kde.org/applications/system/org.kde.dolphin"
      },
      {
        title: i18n.t(`reasons[${id}].source_background_details_tiles[4]`),
        icon: "image",
        image: "statics/apps/icon_gwenview.png",
        content: "Gwenview",
        link: "https://userbase.kde.org/Gwenview"
      },
      {
        title: i18n.t(`reasons[${id}].source_background_details_tiles[5]`),
        icon: "photo_size_select_large",
        image: "statics/apps/icon_gimp.png",
        previous: ["Photoshop"],
        content: "GIMP",
        link: "https://www.gimp.org/"
      },
      {
        title: i18n.t(`reasons[${id}].source_background_details_tiles[6]`),
        icon: "movie",
        image: "statics/apps/icon_kdenlive.png",
        content: "Kdenlive",
        link: "https://kdenlive.org/en/"
      },
      {
        title: i18n.t(`reasons[${id}].source_background_details_tiles[7]`),
        icon: "play_circle_outline",
        image: "statics/apps/icon_mpv.png",
        content: "MPV",
        link: "https://mpv.io/"
      },
      {
        title: i18n.t(`reasons[${id}].source_background_details_tiles[8]`),
        icon: "album",
        image: "statics/apps/icon_k3b.png",
        content: "K3b",
        link: "https://userbase.kde.org/K3b"
      },
      {
        title: i18n.t(`reasons[${id}].source_background_details_tiles[9]`),
        icon: "ebooks",
        image: "statics/apps/icon_calibre.png",
        content: "Calibre",
        link: "https://calibre-ebook.com/"
      },
      {
        title: i18n.t(`reasons[${id}].source_background_details_tiles[10]`),
        icon: "archive",
        image: "statics/apps/icon_ark.png",
        previous: ["WinRar", "7zip"],
        content: "Ark",
        link: "https://kde.org/applications/utilities/org.kde.ark"
      },
      {
        title: i18n.t(`reasons[${id}].source_background_details_tiles[11]`),
        icon: "web",
        image: "statics/apps/icon_firefox.png",
        previous: "",
        content: "Firefox",
        link: "https://www.mozilla.org/en-US/firefox/linux/"
      },
      {
        title: i18n.t(`reasons[${id}].source_background_details_tiles[12]`),
        icon: "code",
        image: "statics/apps/icon_visualstudiocode.png",
        content: "Visual Studio Code",
        link: "https://vscodium.com/"
      },
      {
        title: i18n.t(`reasons[${id}].source_background_details_tiles[13]`),
        icon: "devices_other",
        image: "statics/apps/icon_aqemu.png",
        content: "aQEMU/QEMU/KVM",
        link: "https://github.com/tobimensch/aqemu"
      },
      {
        title: i18n.t(`reasons[${id}].source_background_details_tiles[14]`),
        icon: "computer",
        image: "statics/apps/icon_remmina.png",
        content: "Remmina",
        link: "https://remmina.org/"
      },
      {
        title: i18n.t(`reasons[${id}].source_background_details_tiles[15]`),
        icon: "settings_backup_restore",
        image: "statics/apps/icon_backintime.png",
        content: "Back In Time",
        link: "https://backintime.readthedocs.io/en/latest/"
      }
      // {
      //   title: i18n.t(`reasons[${id}].source_background_details_tiles[15]`),
      //   icon: "settings_backup_restore",
      //   image: null,
      //   content: "BleachBit",
      //   link: ""
      // },
      // {
      //   title: Virus scanner,
      //   icon: "",
      //   image: null,
      //   content: "ClamAV",
      //   link: ""
      // }
      // Software management discover/apper/..
    ],
    source_background_details_slideshow: [
      { name: "Thunderbird", subtitle: "Replaces Outlook", src: "statics/apps/screenshot_thunderbird.png" },
      { name: "LibreOffice", subtitle: "Replaces Microsoft Office (Word, Excel, ...)", src: "statics/apps/screenshot_libreoffice.png" },
      { name: "Kdenlive", subtitle: "Easy to use video editor", src: "statics/apps/screenshot_kdenlive.png" },
      { name: "GIMP", subtitle: "Replaces Photoshop", src: "statics/apps/screenshot_gimp.jpg" }
    ]
  },
  {
    id: (id = id + 1),
    reason_title: i18n.t(`reasons[${id}].title`),
    reason_main_text: i18n.t(`reasons[${id}].main_text`),
    reason_text: i18n.t(`reasons[${id}].text`),
    image: {
      location: "left",
      src: i18n.t(`reasons[${id}].image_src`)
    },
    slide: [""],
    source_background_details: i18n.t(`reasons[${id}].source_background_details`),
    visible: false
  },
  {
    id: (id = id + 1),
    reason_title: i18n.t(`reasons[${id}].title`),
    reason_main_text: i18n.t(`reasons[${id}].main_text`),
    reason_text: i18n.t(`reasons[${id}].text`),
    image: {
      location: "right",
      src: i18n.t(`reasons[${id}].image_src`)
    },
    slide: ["right"],
    source_background_details: i18n.t(`reasons[${id}].source_background_details`),
    visible: false
  },
  {
    id: (id = id + 1),
    reason_title: i18n.t(`reasons[${id}].title`),
    reason_main_text: i18n.t(`reasons[${id}].main_text`),
    reason_text: i18n.t(`reasons[${id}].text`),
    reason_subpoints: i18n.t(`reasons[${id}].subpoints`),
    image: {
      location: "left",
      src: i18n.t(`reasons[${id}].image_src`)
    },
    slide: [""],
    source_background_details: i18n.t(`reasons[${id}].source_background_details`),
    visible: false
  },
  {
    id: (id = id + 1),
    reason_title: i18n.t(`reasons[${id}].title`),
    reason_main_text: i18n.t(`reasons[${id}].main_text`),
    reason_text: i18n.t(`reasons[${id}].text`),
    image: {
      location: "right",
      src: i18n.t(`reasons[${id}].image_src`)
    },
    slide: ["right"],
    source_background_details: i18n.t(`reasons[${id}].source_background_details`),
    visible: false
  },
  {
    id: (id = id + 1),
    reason_title: i18n.t(`reasons[${id}].title`),
    reason_main_text: i18n.t(`reasons[${id}].main_text`),
    reason_text: i18n.t(`reasons[${id}].text`),
    image: {
      location: "left",
      src: i18n.t(`reasons[${id}].image_src`)
    },
    slide: [""],
    source_background_details: i18n.t(`reasons[${id}].source_background_details`),
    visible: false
  },
  {
    id: (id = id + 1),
    reason_title: i18n.t(`reasons[${id}].title`),
    reason_main_text: i18n.t(`reasons[${id}].main_text`),
    reason_text: i18n.t(`reasons[${id}].text`),
    image: {
      location: "right",
      src: i18n.t(`reasons[${id}].image_src`)
    },
    slide: ["right"],
    source_background_details: i18n.t(`reasons[${id}].source_background_details`),
    visible: false
  },
  {
    id: (id = id + 1),
    reason_title: i18n.t(`reasons[${id}].title`),
    reason_main_text: i18n.t(`reasons[${id}].main_text`),
    reason_text: i18n.t(`reasons[${id}].text`),
    image: {
      location: "left",
      src: i18n.t(`reasons[${id}].image_src`)
    },
    slide: [""],
    source_background_details: i18n.t(`reasons[${id}].source_background_details`),
    visible: false
  },
  {
    id: (id = id + 1),
    reason_title: i18n.t(`reasons[${id}].title`),
    reason_main_text: i18n.t(`reasons[${id}].main_text`),
    reason_text: i18n.t(`reasons[${id}].text`),
    image: {
      location: "bottom",
      src: i18n.t(`reasons[${id}].image_src`)
    },
    slide: ["right"],
    source_background_details: i18n.t(`reasons[${id}].source_background_details`),
    visible: false
  },
  {
    id: (id = id + 1),
    reason_title: i18n.t(`reasons[${id}].title`),
    reason_main_text: i18n.t(`reasons[${id}].main_text`),
    reason_text: i18n.t(`reasons[${id}].text`),
    image: {
      location: "right",
      src: i18n.t(`reasons[${id}].image_src`)
    },
    slide: [""],
    source_background_details: i18n.t(`reasons[${id}].source_background_details`),
    visible: false
  },
  {
    id: (id = id + 1),
    reason_title: i18n.t(`reasons[${id}].title`),
    reason_main_text: i18n.t(`reasons[${id}].main_text`),
    reason_text: i18n.t(`reasons[${id}].text`),
    image: {
      location: "left",
      src: i18n.t(`reasons[${id}].image_src`)
    },
    slide: ["right"],
    source_background_details: i18n.t(`reasons[${id}].source_background_details`),
    visible: false
  },
  {
    id: (id = id + 1),
    reason_title: i18n.t(`reasons[${id}].title`),
    reason_main_text: i18n.t(`reasons[${id}].main_text`),
    reason_text: i18n.t(`reasons[${id}].text`),
    image: {
      location: "right",
      src: i18n.t(`reasons[${id}].image_src`)
    },
    slide: [""],
    source_background_details: i18n.t(`reasons[${id}].source_background_details`),
    visible: false
  },
  {
    id: (id = id + 1),
    reason_title: i18n.t(`reasons[${id}].title`),
    reason_main_text: i18n.t(`reasons[${id}].main_text`),
    reason_text: i18n.t(`reasons[${id}].text`),
    image: {
      location: "left",
      src: i18n.t(`reasons[${id}].image_src`)
    },
    slide: ["right"],
    source_background_details: i18n.t(`reasons[${id}].source_background_details`),
    visible: false
  },
  {
    id: (id = id + 1),
    reason_title: i18n.t(`reasons[${id}].title`),
    reason_main_text: i18n.t(`reasons[${id}].main_text`),
    reason_text: i18n.t(`reasons[${id}].text`),
    reason_subpoints: i18n.t(`reasons[${id}].subpoints`),
    image: {
      location: "bottom",
      src: i18n.t(`reasons[${id}].image_src`)
    },
    special: true,
    slide: [""],
    source_background_details: i18n.t(`reasons[${id}].source_background_details`),
    visible: false
  }
];
