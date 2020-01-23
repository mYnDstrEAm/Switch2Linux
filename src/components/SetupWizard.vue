<template>
  <div
    class="q-pa-md"
    id="stepper_module"
  >
    <q-stepper
      id="setup_wizard"
      v-model="step"
      vertical
      color="primary"
      animated
    >
      <q-icon name="fullscreen" class="fullscreen_btn" @click="fullscreen()" />

      <q-step
        :name="1"
        title="Select current operating system"
        prefix="1"
        :done="step > 1"
      >
      <p>{{ $t('explanations.wizard_current_os') }}</p>
      <div class="options_container_container">
        <div class="options_container">
          <q-option-group
            v-model="user_os"
            :options="options_user_os"
            color="primary"
          />
        </div>
      </div>
        <q-stepper-navigation>
          <q-btn @click="increaseStep()" color="primary" label="Continue" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="2"
        title="Select user type"
        prefix="2"
        :done="step > 2"
      >
        <p>{{ $t('explanations.wizard_user_type') }}</p>
        <div class="options_container_container">
          <div class="options_container">
            <q-option-group
              v-model="user_type"
              :options="options_user_type"
              color="primary"
            />
          </div>
        </div>
        <q-stepper-navigation>
          <q-btn @click="increaseStep()" color="primary" label="Continue" />
          <q-btn
            flat
            @click="decreaseStep()"
            color="primary"
            label="Back"
            class="q-ml-sm"
          />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="3"
        title="Select distribution and desktop environment"
        prefix="3"
        :done="step > 3"
      >
        <p>First you have to choose a linux "distribution" and a "desktop environment" to use with that distribution.</p>
      <div class="expandableInfoContainer">
        <q-expansion-item
        dense
        dense-toggle
        expand-separator
        label="What is a Linux distribution?"
        class="expandableInfo"
      >
        <q-card>
          <q-card-section>
          A Linux distribution is a specific GNU/Linux operating system that
          bundles various software with the Linux kernel and GNU software. Many
          such distributions exist and this page will recommend the most
          prospectful, used and user-friendly ones and help you decide which one
          to pick.
          </q-card-section>
        </q-card>
      </q-expansion-item>
      </div>
      <div class="expandableInfoContainer">
        <q-expansion-item
        dense
        dense-toggle
        expand-separator
        label="What is a desktop environment?"
        class="expandableInfo"
      >
        <q-card>
          <q-card-section>
          Each distribution is used with a "desktop environment" which is
          software for the graphical user interface like windows, icons and
          related functionalities. Many such desktop environments exist and this
          page will again recommend the most prospectful, used and user-friendly
          ones.
          </q-card-section>
        </q-card>
      </q-expansion-item>
      </div>
        <div id="distributionContainer">
          <p>Select GNU/Linux distribution:</p>
          <q-table
            :data="distributions"
            :columns="columns"
            row-key="name"
            selection="single"
            :selected.sync="selection_distro2"
            hide-header
            hide-bottom
            class="distributionsTable">
            <template v-slot:body="props">
              <q-tr :props="props" :class="{ disabledTableRow: props.row.enabled === false }">
                <q-td key="logo" :props="props" style="width: 100px;"><q-img
                  style="vertical-align: middle !important; text-align: left; width: 100px; height: 100px;"
                  :src="props.row.logo"/>
                </q-td>
                <q-td key="name" :props="props" style="text-align: left; width: 100px; font-weight: bold;">{{ props.row.name }}</q-td>
                <q-td key="description" :props="props" style="text-align: left; white-space: normal;"><span v-html="props.row.description"></span></q-td>
                <q-td key="website" :props="props" style="text-align: right; width: 100px;">
                  <a target="_blank" rel="noopener noreferrer" :href="props.row.website" style="color: white; padding-right: 20px;">Website</a>
                </q-td>
                <q-td auto-width style="text-align: right; width: 150px;">
                  <q-btn color="primary" label="Select" @click="selectDistro(props)" :disable="props.row.enabled === false"/>
                </q-td>
              </q-tr>
            </template>
          </q-table>
        </div>

        <div id="desktopEnvironmentContainer">
          <p>Select desktop environment:</p>
          <q-table
            :data="desktopEnvironments"
            :columns="columns"
            row-key="name"
            selection="single"
            :selected.sync="selection_de2"
            hide-header
            hide-bottom
            class="desktopEnvironmentsTable">
            <template v-slot:body="props">
              <q-tr :props="props" :class="{ disabledTableRow: props.row.enabled === false }">
                <q-td key="logo" :props="props" style="width: 100px;"><q-img
                  style="vertical-align: middle !important; text-align: left; width: 100px; height: 100px;"
                  :src="props.row.logo"/>
                </q-td>
                <q-td key="name" :props="props" style="text-align: left; width: 100px; font-weight: bold;">{{ props.row.name }}</q-td>
                <q-td key="description" :props="props" style="text-align: left; white-space: normal">{{ props.row.description }}</q-td>
                <q-td key="website" :props="props" style="text-align: right; width: 100px;">
                  <a target="_blank" rel="noopener noreferrer" :href="props.row.website" style="color: white; padding-right: 20px;">Website</a>
                </q-td>
                <q-td auto-width style="text-align: right; width: 150px;">
                  <q-btn color="primary" label="Select" @click="selectDe(props)" :disable="props.row.enabled === false"/>
                </q-td>
              </q-tr>
            </template>
          </q-table>
        </div>

        <q-stepper-navigation>
          <q-btn @click="increaseStep()" color="primary" label="Continue" :disable="(selection_distro === '' || selection_de === '')" />
          <q-btn
            flat
            @click="decreaseStep()"
            color="primary"
            label="Back"
            class="q-ml-sm"
          />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="4"
        title="Download iso & burn to DVD"
        prefix="4"
        :done="step > 4">
        <!-- you can also copy it to USB stick -->
        <ul style="text-align: left;">
          <li v-if="selection_distro === 'kdeneon'">Download the .iso file of your selected distribution (KDE neon): <a target="_blank" rel="noopener noreferrer" href="https://neon.kde.org/download" style="color: white; font-weight: bold;">here</a> by clicking on the button "User Edition Live/Install Image" on the left.</li>
          <li>Insert an empty DVD into your DVD reader.</li>
          <li v-if="user_os === 'Windows'">Right click the downloaded .iso file and select Burn disc image. Select the DVD drive and check "Verify disc after burning". Then press Burn and wait for it to finish.</li>
          <li v-if="user_os === 'macOS'">Double click the disc, then drag the downloaded .iso file into the disc's window, choose File > Burn and wait for it to finish</li>
          <li>Use a waterproof pencil to label the DVD with the name of your dsitribution and the version number which is in the .iso's filename</li>
        </ul>
        <q-stepper-navigation>
          <q-btn @click="increaseStep()" color="primary" label="Continue"/>
          <q-btn
            flat
            @click="decreaseStep()"
            color="primary"
            label="Back"
            class="q-ml-sm"
          />
        </q-stepper-navigation>
      </q-step>

      <q-step :name="5" title="Backup your data" prefix="5" :done="step > 5">
        <ul>
          <li>Do a complete backup of all your data or all the data you want to keep.</li>
          <li>Don't just copy your files but use a backup program for this. An external hard drive is probably the most convenient storage device for the backup, but you could also use another internal hard drive or something else that has large enough storage space.</li>
          <li>It's best to disconnect the storage device before you install GNU/Linux so you don't accidentally overwrite it.</li>
          <li>GNU/Linux doesn't work with all filesystems of storage devices so you might have to change the filesystem of the storage device before you do the backup. This will erase all the data on the storage device. You can do this with the program <a target="_blank" rel="noopener noreferrer" href="https://gparted.org/download.php" style="color: white; font-weight: bold;">GParted</a>. For example select your connected external hard drive and change the filesystem to "NTFS" which also works on GNU/Linux.</li>
          <div v-if="user_os === 'Windows'">
            <li>If you don't have a backup program already download and install <a target="_blank" rel="noopener noreferrer" href="https://www.uranium-backup.com/uranium-backup-free-download/" style="color: white; font-weight: bold;">Uranium Backup Free</a></li>
            <li>Do a Full Backup of all the data you don't want to lose as described in <a target="_blank" rel="noopener noreferrer" href="https://www.uranium-backup.com/tutorials/configuring-a-files-and-folders-backup/" style="color: white; font-weight: bold;">this tutorial for Uranium Backup</a>. For this simply check "This PC" so that everything is selected when selecting the files to backup.</li>
            <li>You might also lose all passwords saved in your browser and other things stored in apps. You can also save the licenses to software you bought by running for example <a target="_blank" rel="noopener noreferrer" href="https://www.abelssoft.de/en/windows/helpers/mykeyfinderAbelsoft" style="color: white; font-weight: bold;">MyKeyFinder Free</a>. You should do this if you plan to use Windows 10 if you don't like GNU/Linux or on another computer.</li>
          </div>
          <div v-if="user_os === 'macOS'">
            <li>Backup all your data using Apple's TimeMachine.</li>
            <li>You might lose all passwords saved in your browser and other things stored in apps.</li>
          </div>
          <li>You might also want to backup data on storage devices which have a filesystem that don't work with GNU/Linux. For example usb sticks. But most likely they will work under GNU/Linux. If it is a FAT32 filesystem there might be problems with long filenames. NTFS filesystems work perfectly fine. Ext2, Ext3, and Ext4 filesystems only work properly on GNU/Linux. You can change the filesystem with GParted but will lose all data on the device.</li>
          <li v-if="user_os === 'Windows'">Windows programs like .exe files won't work in GNU/Linux by default. But you usually can make them work by using a program called \"Wine\".</li>
          <li v-if="user_os === 'macOS'">macOS programs won't work in GNU/Linux.</li>
          <li>Before you continue verify that the backup worked correctly and that you have backedup all important data: go through some of the folders, check if the filesize of the entire backup is as large as the folders you backedup and check if the backup program had errors.</li>
        </ul>
        <q-stepper-navigation>
          <q-btn @click="increaseStep()" color="primary" label="Continue"/>
          <q-btn
            flat
            @click="decreaseStep()"
            color="primary"
            label="Back"
            class="q-ml-sm"
          />
        </q-stepper-navigation>
      </q-step>

      <q-step :name="6" title="Install GNU/Linux" prefix="6" :done="step > 6">
        <ul>
          <li>To install GNU/Linux from DVD you need to make your computer start the DVD before it starts {{user_os}}. This is called booting from DVD.</li>
          <li>To do this insert the DVD with GNU/Linux that you burned earlier into your disc drive. Then check that you really didn't forget to backup anything and shut your computer off.</li>
          <li>Now disconnect all storage devices except the internal hard drive that you want to install GNU/Linux on.</li>
          <li>Turn the computer on again. To make it boot from the DVD you need to change the boot order so that booting from DVD has the highest priority. To change this setting you need to press a key immediately after turning the computer on. This key is different for different computers but usually it's F2, F12 or Del. If it's not one of those you should look for the key in the texts that get displayed when you start your computer.</li>
          <li>If it displays "Press any key to boot from CD or DVD" you should press any key</li>
          <li>Once KDE neon has started click on "Install neon user" in the upper left</li>
          <li>Go through the installation wizard. <a target="_blank" rel="noopener noreferrer" href="https://youtu.be/y4OWeQZD8h4?t=107" style="color: white;">Here is a video of how</a>.</li>
          <li>The installation wizard is mostly self-explanatory and you can also skip some steps like connecting to your WiFi. Once you complete step "Disk Setup" data on the selected hard drive will be lost. This is why it is important that you have backedup everything and that you don't select the wrong hard drive. It is recommended to select "Guided - use entire disk and set up encrypted LVM" because this allows you to protect your data with a password which you then have to enter every time you start (boot) your computer.</li>
          <li>In step "User Info" select "Require my password to log in" and select a password that's not too short and simple. Make sure you remember your password/s for example by writing it down somewhere.</li>
        </ul>
        <q-stepper-navigation>
          <q-btn @click="increaseStep()" color="primary" label="Continue"/>
          <q-btn
            flat
            @click="decreaseStep()"
            color="primary"
            label="Back"
            class="q-ml-sm"
          />
        </q-stepper-navigation>
      </q-step>

      <q-step :name="7" title="Install drivers and updates" prefix="7" :done="step > 7">
        <p>You might have to enter your password before making changes</p>
        <ul>
          <li>Connect to your WLAN or LAN if you aren't yet by clicking the WiFi icon in bottom right, selecting your WLAN and entering your password. You can configure the connection by clicking the button in the upper right of the box.</li>
          <li>Once you're connected to your WLAN install the latest updates if you haven't yet by clicking the button in the bottom left > Software Center > Updates > Install</li>
          <li>Connect other hardware to your computer if it isn't connected yet like your printer or your graphics card.</li>
          <li>To get your printer to work click on the button in the bottom left and enter "printer" in the search field > Print Settings.</li>
        </ul>
        <q-stepper-navigation>
          <q-btn @click="increaseStep()" color="primary" label="Continue"/>
          <q-btn
            flat
            @click="decreaseStep()"
            color="primary"
            label="Back"
            class="q-ml-sm"
          />
        </q-stepper-navigation>
      </q-step>

      <q-step :name="8" title="Install needed software" prefix="8" :done="step > 8">
        <ul>
          <li>Replace software you used that only runs on {{user_os}} or if there's no alternative use <span v-if="user_os === 'Windows'">Wine or </span>a virtual machine.</li>
          <li>Common software can be found by swiping the card <span @click="scrollToElement('reason_1')" style="text-decoration: underline;">here</span>.</li>
          <li>If you can't find an alternative for some software you could also try sites like <a target="_blank" rel="noopener noreferrer" href="https://alternativeto.net/" style="color: white;">AlternativeTo</a> to find free software alternatives that run on GNU/Linux.</li>
          <span v-if="user_os === 'Windows'"><li>If you still need some software that only runs on Windows you can simply use Wine to run it. <a target="_blank" rel="noopener noreferrer" href="https://itsfoss.com/use-windows-applications-linux/" style="color: white;">Here is how to install and use Wine.</a></li></span>
          <li>As a last option you can create a virtual machine with {{user_os}} within Linux to use {{user_os}}-programs: <div class="expandableInfoContainer">
              <q-expansion-item
              dense
              dense-toggle
              expand-separator
              label="How to use a virtual machine"
              class="expandableInfo"
              style="text-align: left;"
            >
              <q-card>
                <q-card-section>For this install the program "aqemu" (alternatively VirtualBox works too), start it, click the green plus button on the left and press next in all steps but make sure to select the most appropriate OS-type template, and a disk size that's large enough (usually 30GB). Once the virtual machine has been prepared, click on it, select Media and select Add CD-ROM. Then select an .iso file for {{user_os}} or insert the DVD and select the DVD. Then also increase the memory to a few gigabytes under VM > Memory. Then press apply and start the virtual machine by right click > Start. Install {{user_os}} in the virtual machine. That won't delete any data on your hard drive because the machine is only virtual. Once it's installed you can install software within the virtual machine and use it within the virtual machine. You can share files via Folder Sharing, via the Internet or via .iso files.
                </q-card-section>
              </q-card>
            </q-expansion-item>
            </div>
          </li>
          <li>If you play computer games not all of them might work on GNU/Linux. To play games on GNU/Linux use <a target="_blank" rel="noopener noreferrer" href="https://lutris.net/" style="color: white;">Lutris</a>, <a target="_blank" rel="noopener noreferrer" href="https://www.protondb.com/" style="color: white;">ProtonDB</a> and/or <a target="_blank" rel="noopener noreferrer" href="https://steamcommunity.com/linux/" style="color: white;">Steam for Linux</a><br/>You can also play console games with emulators. For example PlayStation2 games with <a target="_blank" rel="noopener noreferrer" href="https://pcsx2.net/download/releases/linux.html" style="color: white;">PCSX2</a>.<br/>And there are also some games that were made for GNU/Linux. You can install many of those with your software manager the same way you can install any other software. One such game is <a target="_blank" rel="noopener noreferrer" href="https://supertuxkart.net/Main_Page" style="color: white;">SuperTuxKart</a>.</li>
          <li>Your software manager in KDE neon is <a target="_blank" rel="noopener noreferrer" href=https://userbase.kde.org/Discover style="color: white;">Discover</a>. But it doesn't yet work with packages so you also have a second software-manager "Apper". You can open them by entering the name in the search after pressing the button in the bottom left. To install something simply enter the name in the search bar of the software manager, press install and enter your password. The software manager is also used to do updates for all of your software.</li>
          <li>Never run software as root. Apps should be installed via your software manager only except if it's not available in the "repositories" it has configured.</li>
        </ul>
        <q-stepper-navigation>
          <q-btn @click="increaseStep()" color="primary" label="Continue"/>
          <q-btn
            flat
            @click="decreaseStep()"
            color="primary"
            label="Back"
            class="q-ml-sm"
          />
        </q-stepper-navigation>
      </q-step>
      <q-step :name="9" title="Configure your system" prefix="9" :done="step > 9">
        <ul>
          <li>Most settings can be found under System Settings after pressing the button in the bottom left.</li>
          <li>To change KDE to dark mode select Workspace Theme > Breeze Dark, Colors > Breeze Dark, Icons > Breeze Dark, Application Style > Widget Style > Breeze</li>
          <li>Under Desktop Behaviour check Double click to open files and folders.</li>
          <li>Disable notification sounds because they can be too loud by going to Notifications, selecting one Event source after another and clicking the button "Disable sounds for all of these events" at the bottom.</li>
          <li>Under Accessibility > make sure "Use system bell", "Use customized bell" and "Use visual bell" are disabled.</li>
          <li>It's important that you know how to open the Terminal if you ever need to enter a command: press the button in the bottom left and enter "terminal" in the search. For KDE the Terminal is Konsole by default. You can enter commands here. Make sure you don't enter dangerous commands because they could delete data. Commands without "sudo" in them are unlikely to be dangerous. One exemplary command is "sudo apt-get update && sudo apt-get upgrade" which is an alternative way to update all your software at once.</li>
          <li>You can also configure updates to be done automatically so you don't need to them every time.</li>
          <li>You probably need to configure some software such as adding spellchecking for your language for LibreOffice.</li>
          <li>The Firefox AddOn <a target="_blank" rel="noopener noreferrer" href="https://addons.mozilla.org/en-US/firefox/addon/plasma-integration/" style="color: white;">Plasma Integration</a> better integrates the browser into KDE. For example it shows browser notifications within KDE.</li>
          <li>To view your files press the bottom left button and click on File Manager</li>
          <li>Connect the devices you stored your backups on and copy them to your hard drive. On the left side of your file manager "Dolphin" you can find folders for various types of content. You can add shortcuts there by right click > Add entry.</li>
        </ul>
        <q-stepper-navigation>
          <q-btn @click="increaseStep()" color="primary" label="Finish"/>
          <q-btn
            flat
            @click="decreaseStep()"
            color="primary"
            label="Back"
            class="q-ml-sm"
          />
        </q-stepper-navigation>
      </q-step>
      <q-step :name="10" title="Finish" prefix="10">
        <p>Congratulations for switching to GNU/Linux!</p>
        <q-btn flat style="background-color: #027BE3 !important; margin-top: 15px; margin-bottom: 15px;">
          <a
            href="https://twitter.com/intent/tweet?text=I'm%20switching%20to%20Linux%20&button_hashtag=Switch2Linux"
            class="twitter-hashtag-button"
            data-show-count="false"
            style="color: white; text-decoration: none;"
          >Tweet about it</a>
        </q-btn>

        <p>If you need help you can find help in places such as <span @click="scrollToElement('reason_13')" style="text-decoration: underline; cursor: pointer;">these</span> (swipe card).</p>
        <q-stepper-navigation>
          <q-btn
            flat
            @click="decreaseStep()"
            color="primary"
            label="Back"
            class="q-ml-sm"
          />
        </q-stepper-navigation>
      </q-step>
    </q-stepper>
  </div>
</template>

<script>
import { i18n } from "../boot/i18n.js";

export default {
  name: "SetupWizard",
  data() {
    return {
      step: 1,
      isSetupWizardFullscreen: false,
      user_type: "Personal user (inexperienced)",
      user_os: "Windows",
      selection_distro2: [],
      selection_distro: '',
      selection_de2: [],
      selection_de: '',
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
      columns: [
        {
          name: 'logo',
          align: 'center',
          required: true,
          label: 'logo',
          field: 'logo',
          align: 'left',
          sortable: false
        },
        {
          name: 'name',
          align: 'center',
          required: true,
          label: 'name',
          field: 'name',
          align: 'left',
          sortable: false
        },
        {
          name: 'description',
          align: 'center',
          required: true,
          label: 'description',
          field: 'description',
          align: 'left',
          sortable: false
        },
        {
          name: 'website',
          align: 'center',
          required: true,
          label: 'website',
          field: 'website',
          align: 'left',
          sortable: false
        },
        {
          name: 'selectionKey',
          align: 'center',
          required: true,
          label: 'selectionKey',
          field: 'selectionKey',
          align: 'left',
          sortable: false
        },
        {
          name: 'enabled',
          align: 'center',
          required: true,
          label: 'enabled',
          field: 'enabled',
          align: 'left',
          sortable: false
        }
      ],
      distributions: [
        {
          logo: 'statics/logos_debian_small.png',
          name: 'Debian',
          description: '100% FOSS, run by a large community, very stable and the distribution used on most servers. However not easy for beginners yet. Debian calls itself the "universal operating system" which makes its high goals clear. More reasons to use it <a target="_blank" rel="noopener noreferrer" href="https://www.debian.org/intro/why_debian" style="color: white; font-weight: bold;">here</a>.',
          enabled: true,
          website: 'https://www.debian.org/',
          selectionKey: 'debian'
        },
        {
          logo: 'statics/logos_kdeneon_small.png',
          name: 'KDE neon',
          description: 'Easy to use, looks modern and great, "the latest and greatest of KDE community software packaged on a rock-solid base". Video showcasing it <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=TXWUyUUx3ZE" style="color: white; font-weight: bold;">here</a>',
          enabled: true,
          website: 'https://neon.kde.org/',
          selectionKey: 'kdeneon'
        },
        {
          logo: 'statics/logos_kubuntu_small.png',
          name: 'Kubuntu',
          description: 'Similar to KDE neon but "Kubuntu maintains stable releases and LTS version of Ubuntu while KDE neon focuses on updating developer editions of KDE applications without maintaining stable releases of Ubuntu unless the root user actively chooses to upgrade their systems". In short in KDE neon you\'ll have newer KDE applications while in Kubuntu you\'ll have newer Ubuntu software by default',
          enabled: false,
          website: 'https://kubuntu.org/',
          selectionKey: 'kubuntu'
        }
      ],
      desktopEnvironments: [
        {
          logo: 'statics/logos_kde.png',
          name: 'KDE',
          description: '"Simple by default, Powerful when needed", highly customizable, modern UI, phone integration and more',
          enabled: true,
          website: 'https://kde.org/',
          selectionKey: 'kde'
        },
        {
          logo: 'statics/logos_gnome.png',
          name: 'GNOME',
          description: '"An easy and elegant way to use your computer, GNOME is designed to put you in control and get things done."',
          enabled: false,
          website: 'https://www.gnome.org/',
          selectionKey: 'gnome'
        }
      ]
    };
  },
  methods: {
    fullscreen() {
      let el = document.getElementById("setup_wizard");
      if (this.isSetupWizardFullscreen === false) {
        el.classList.add("setup_wizard_fullscreen");
        this.isSetupWizardFullscreen = true;
      } else {
        el.classList.remove("setup_wizard_fullscreen");
        this.isSetupWizardFullscreen = false;
      }
    },
    selectDistro(props) {
      this.selection_distro = props.row.selectionKey;
      this.selection_distro2 = [props.row.selectionKey];
      props.selected = true;
      if (props.row.selectionKey === "kdeneon" || props.row.selectionKey === "kubuntu") {
        this.selection_de = "kde";
        this.selection_de2 = ["kde"];
      } else {
        this.selection_de = "";
        this.selection_de2 = [];
      }
    },
    selectDe(props) {
      this.selection_de = props.row.selectionKey;
      this.selection_de2 = [props.row.selectionKey];
      props.selected = true;
    },
    scrollToElement(el){
      let ell = document.getElementById(el);
      ell.scrollIntoView();
    },
    increaseStep(){
      this.step = this.step + 1;
    },
    decreaseStep(){
      this.step = this.step - 1;
    }
  },
  watch : {
    user_os: function(val) {},// Todo
    user_type:function(val) {
      if (val === "Geek (experienced)") {
        this.distributions = [
          {
            logo: 'statics/logos_debian_small.png',
            name: 'Debian',
            description: 'bla',
            enabled: true,
            website: '',
            selectionKey: 'debian'
          },
          {
            logo: 'statics/logos_kdeneon_small.png',
            name: 'KDE neon',
            description: 'bla',
            enabled: true,
            website: '',
            selectionKey: 'kdeneon'
          },
          {
            logo: 'statics/logos_kubuntu_small.png',
            name: 'Kubuntu',
            description: 'bla',
            enabled: false,
            website: '',
            selectionKey: 'kubuntu'
          }
        ]
      } else {
        this.distributions = [
        {
          logo: 'statics/logos_kdeneon_small.png',
          name: 'KDE neon',
          description: 'bla',
          enabled: true,
          website: '',
          selectionKey: 'kdeneon'
        },
        {
          logo: 'statics/logos_kubuntu_small.png',
          name: 'Kubuntu',
          description: 'bla',
          enabled: false,
          website: '',
          selectionKey: 'kubuntu'
        },
        {
          logo: 'statics/logos_debian_small.png',
          name: 'Debian',
          description: 'Not recommended for inexperienced users yet',
          enabled: true,
          website: '',
          selectionKey: 'debian'
        }
      ]
      }
    }
  }
};
</script>
