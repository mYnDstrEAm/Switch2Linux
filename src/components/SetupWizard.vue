<template>
  <div
    class="q-pa-md"
    id="stepper_module"
  >
    <q-stepper
      id="setup_wizard"
      v-model="step"
      ref="stepper"
      vertical
      header-nav
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
        <q-btn v-if="step < 10" @click="wizardStepForward()" color="primary" :label="step === 9 ? 'Finish' : 'Continue'" />
        <q-btn v-if="step > 1" flat color="primary" @click="wizardStepBack()" label="Back" class="q-ml-sm" />
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
          <q-btn v-if="step < 10" @click="wizardStepForward()" color="primary" :label="step === 9 ? 'Finish' : 'Continue'" />
          <q-btn v-if="step > 1" flat color="primary" @click="wizardStepBack()" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="3"
        title="Select distribution and desktop environment"
        prefix="3"
        :done="step > 3"
      >
        <p>First you have to choose a GNU/Linux "distribution" and a "desktop environment" to use with that distribution.</p>
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
          A Linux distribution is a specific GNU/Linux operating system that bundles various software with the Linux kernel and GNU software.
          Many such distributions exist and this page will recommend the most prospectful, used and user-friendly ones and help you decide which one to pick.
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
          Each distribution is used with a "desktop environment" which is software for the graphical user interface.
          The graphical user interface is what the user sees on the screen and interacts with: like windows, icons and related functionalities.
          Many such desktop environments exist and this page will, again, recommend the most prospectful, used and user-friendly ones.
          The desktop environments you can choose depends on the distribution you choose. You have to select a desktop environment from the distribution's options during its installation.
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
                <q-td key="logo" :props="props" style="width: 10vw; min-width: 40px; max-width: 100px;"><q-img
                  native-context-menu
                  style="vertical-align: middle !important; text-align: left;"
                  :src="props.row.logo"/>
                </q-td>
                <q-td key="name" :props="props" style="text-align: left; width: 100px; font-weight: bold;">{{ props.row.name }}</q-td>
                <q-td key="description" :props="props" style="text-align: left; white-space: normal; min-width: 300px;"><span v-html="props.row.description"></span></q-td>
                <q-td key="website" :props="props" style="text-align: right;">
                  <a target="_blank" rel="noopener noreferrer" :href="props.row.website" style="color: white; padding-right: 20px;">Website</a>
                </q-td>
                <q-td auto-width style="text-align: right;">
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
                <q-td key="logo" :props="props" style="width: 10vw; min-width: 40px; max-width: 100px;"><q-img
                  native-context-menu
                  style="vertical-align: middle !important; text-align: left;"
                  :src="props.row.logo"/>
                </q-td>
                <q-td key="name" :props="props" style="text-align: left; width: 100px; font-weight: bold;">{{ props.row.name }}</q-td>
                <q-td key="description" :props="props" style="text-align: left; white-space: normal; min-width: 300px;"><span v-html="props.row.description"></span></q-td>
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
          <q-btn v-if="step < 10" @click="wizardStepForward()" color="primary" :label="step === 9 ? 'Finish' : 'Continue'" />
          <q-btn v-if="step > 1" flat color="primary" @click="wizardStepBack()" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step
        :name="4"
        title="Download iso & burn to DVD"
        prefix="4"
        :done="step > 4">
        <ul style="text-align: left;">
          <li v-if="user_os === 'Windows'">Instead of a DVD you can also use an usb flash drive with "Rufus": <a target="_blank" rel="noopener noreferrer" href="https://www.howtogeek.com/howto/linux/create-a-bootable-ubuntu-usb-flash-drive-the-easy-way/" style="color: white; font-weight: bold;">here's how</a>.</li>
          <li v-if="user_os === 'macOS'">Instead of a DVD you can also use an usb flash drive: <a target="_blank" rel="noopener noreferrer" href="https://tutorials.ubuntu.com/tutorial/tutorial-create-a-usb-stick-on-macos#0" style="color: white; font-weight: bold;">here's how</a>. Just use the .iso file you downloaded earlier and not the Ubuntu .iso. It should work the same for distributions other than Ubuntu.</li>
          <li>Download the .iso file of your selected distribution (KDE neon): <a target="_blank" rel="noopener noreferrer" href="https://neon.kde.org/download" style="color: white; font-weight: bold;">here</a> by clicking on the button "User Edition Live/Install Image" on the left.</li>
          <li>Insert an empty DVD into your DVD reader.</li>
          <li v-if="user_os === 'Windows'">Right click the downloaded .iso file in your Downloads folder and select Burn disc image. Select the DVD drive and check "Verify disc after burning". Then press Burn and wait for it to finish.</li>
          <li v-if="user_os === 'macOS'">Double click the disc, then drag the downloaded .iso file into the disc's window, choose File > Burn and wait for it to finish</li>
          <li>Use a waterproof pencil to label the DVD with the name of your distribution and the version number which is in the .iso's filename</li>
        </ul>
        <q-stepper-navigation>
          <q-btn v-if="step < 10" @click="wizardStepForward()" color="primary" :label="step === 9 ? 'Finish' : 'Continue'" />
          <q-btn v-if="step > 1" flat color="primary" @click="wizardStepBack()" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step :name="5" title="Backup your data" prefix="5" :done="step > 5">
        <ul>
          <li>Do a complete backup of all your data or all the data you want to keep.</li>
          <li>Don't just copy your files but use a backup program for this. Simply copying over files is better than nothing but you should still use a proper backup program (or command) for reasons explained <a target="_blank" rel="noopener noreferrer" href="https://askleo.com/cant_i_just_copy_everything_instead_of_using_a_backup_program/" style="color: white; font-weight: bold;">here</a>.</li>
          <li>An external hard drive is probably the most convenient storage device for the backup, but you could also use another internal hard drive or something else that has large enough storage space.</li>
          <li>It's best to disconnect the storage device before you install GNU/Linux so you don't accidentally overwrite it.</li>
          <li>GNU/Linux doesn't work with all file systems of storage devices so you might have to change the file system of the storage device before you do the backup. This will erase all the data on the storage device. You can do this with the program <a target="_blank" rel="noopener noreferrer" href="https://gparted.org/download.php" style="color: white; font-weight: bold;">GParted</a>. For example select your connected external hard drive and change the file system to "NTFS" which also works on GNU/Linux.</li>
          <div v-if="user_os === 'Windows'">
            <li>If you don't have a backup program already download and install <a target="_blank" rel="noopener noreferrer" href="https://www.uranium-backup.com/uranium-backup-free-download/" style="color: white; font-weight: bold;">Uranium Backup Free</a></li>
            <li>Do a Full Backup of all the data you don't want to lose as described in <a target="_blank" rel="noopener noreferrer" href="https://www.uranium-backup.com/tutorials/configuring-a-files-and-folders-backup/" style="color: white; font-weight: bold;">this tutorial for Uranium Backup</a>. For this simply check "This PC" so that everything is selected when selecting the files to backup.</li>
            <li>You might also lose all passwords saved in your browser and other things stored in apps. You can also save the licenses to software you bought by running for example <a target="_blank" rel="noopener noreferrer" href="https://www.abelssoft.de/en/windows/helpers/mykeyfinderAbelsoft" style="color: white; font-weight: bold;">MyKeyFinder Free</a>. You should do this if you plan to use Windows 10 if you don't like GNU/Linux or on another computer.</li>
          </div>
          <div v-if="user_os === 'macOS'">
            <li>Backup all your data using Apple's TimeMachine.</li>
            <li>You might lose all passwords saved in your browser and other things stored in apps.</li>
          </div>
          <li>You might also want to backup data on storage devices which have a file system that don't work with GNU/Linux. For example usb sticks. But most likely they will work under GNU/Linux. If it is a FAT32 file system there might be problems with long filenames. NTFS file systems work perfectly fine. Ext2, Ext3, and Ext4 file systems only work properly on GNU/Linux. You can change the file system with GParted but will lose all data on the device.</li>
          <li v-if="user_os === 'Windows'">Windows programs like .exe files won't work in GNU/Linux by default. But you usually can make them work by using a program called "Wine".</li>
          <li v-if="user_os === 'macOS'">macOS programs won't work in GNU/Linux.</li>
          <li>Before you continue verify that the backup worked correctly and that you have backed up all important data: go through some of the folders, check if the file size of the entire backup is as large as the folders you backed up and check if the backup program had errors.</li>
        </ul>
        <q-stepper-navigation>
          <q-btn v-if="step < 10" @click="wizardStepForward()" color="primary" :label="step === 9 ? 'Finish' : 'Continue'" />
          <q-btn v-if="step > 1" flat color="primary" @click="wizardStepBack()" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step :name="6" title="Install GNU/Linux" prefix="6" :done="step > 6">
        <ul>
          <span v-if="user_type === 'Business'"><li>To make sure everything runs fine after roll-out you can test the installation and most things that needs to be working with either a Lice-CD or a virtual machine prior to the roll-out.</li></span>
          <li>It's not recommended to dual-boot Windows and GNU/Linux: many things can go wrong, it unnecessarily makes things more complicated and if you need to run Windows you can do so in a virtual machine. If you still want to have Windows installed somewhere for example to play some games you could install it on a separate hard drive or partition and later make sure it's below the one where GNU/Linux installed on in the boot order (explained in later steps). If you do so don't forget to first disconnect all other drives so that you won't accidentally install it on the wrong partition.</li>
          <!--TODO also include this step for inexperienced users somehow?-->
          <span v-if="user_type !== 'Personal user (inexperienced)'"><li>If you aren't using a prebuilt computer or replaced the hard drive yourself you might want to partition the drive as GPT if it isn't yet. GPT is the successor of MBR, is more robust, supports volumes larger than 2 TB and allows for more partitions. GPT can only be used with UEFI. UEFI is the successor of BIOS and older mainboards might not support it. Go into the BIOS/UEFI settings like described in the steps below and set the <i>boot mode</i> to <i>UEFI only</i> before starting from DVD to install a GNU/Linux - the installer will do the rest so you don't need to partition the drive with GPT yourself. In short you should use GPT and UEFI if possible and whether or not you can do so depends on the mainboard you currently use. If you decide to replace your mainboard you need to make sure your other components - most importantly RAM, CPU and graphics card - are compatible with it.</li></span>
          <li>To install GNU/Linux from DVD you need to make your computer start the DVD before it starts {{user_os}}. This is called booting from DVD.</li>
          <li>To do this insert the DVD with GNU/Linux that you burned earlier into your disc drive. Then check that you really didn't forget to backup anything and shut your computer off.</li>
          <li>Now disconnect all storage devices except the internal hard drive that you want to install GNU/Linux on.</li>
          <li>Turn the computer on again. To make it boot from the DVD you need to change the boot order so that booting from DVD has the highest priority. To change this setting you need to press a key immediately after turning the computer on. This key is different for different computers but usually it's F2, F12 or Del. If it's not one of those you should look for the key in the texts that get displayed when you start your computer.</li>
          <li>If it displays "Press any key to boot from CD or DVD" you should press any key</li>
          <li>If this does not work you may have to change some BIOS/UEFI settings. You can enter the BIOS or UEFI menu by pressing the key displayed right after starting your computer (likely F2, F12 or Del). You may have to disable <i>Secure Boot</i> or a setting like <i>"Windows 7 Installation"</i>.</li>
          <li>Once KDE neon has started click on "Install neon user" in the upper left</li>
          <li>Go through the installation wizard. <a target="_blank" rel="noopener noreferrer" href="https://youtu.be/y4OWeQZD8h4?t=107" style="color: white;">Here is a video of how</a>.</li>
          <li>The installation wizard is mostly self-explanatory and you can also skip some steps like connecting to your WiFi. Once you complete step "Disk Setup" data on the selected hard drive will be lost. This is why it is important that you have backed up everything and that you don't select the wrong hard drive. It is recommended to select "Guided - use entire disk and set up encrypted LVM" because this allows you to protect your data with a password which you then have to enter every time you start (boot) your computer.</li>
          <li>If the installer asks you for a user password and a root password for security purposes leave the root password empty so it won't a login as root.</li>
          <li>In step "User Info" select "Require my password to log in" and select a password that's not too short and simple. Make sure you remember your password/s for example by writing it down somewhere.</li>
        </ul>
        <q-stepper-navigation>
          <q-btn v-if="step < 10" @click="wizardStepForward()" color="primary" :label="step === 9 ? 'Finish' : 'Continue'" />
          <q-btn v-if="step > 1" flat color="primary" @click="wizardStepBack()" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step :name="7" title="Install drivers and updates" prefix="7" :done="step > 7">
        <p>You might have to enter your password before making changes</p>
        <ul>
          <li v-if="selection_distro === 'debian'">For the installation of drivers under Debian you likely need to enable contrib and non-free package sources in your package-manager except if you bought your hardware with the intention of running only free software drivers. They are disabled by default because Debian users don't want to install non-free software. You can remove these package sources after you installed your drivers. To do this open the following file with your text editor: <i>/etc/apt/sources.list</i> and in all places where it says <i>stable main</i> also add <i> contrib non-free</i> behind it and save the file (enter your password when it asks you to). Then in your package manager (for example Apper) click on update and you should be able to find your drivers there by searching. A common driver is <i>firmware-iwlwifi</i> for WLAN.</li>
          <li>Connect to your WLAN or LAN if you aren't yet by clicking the WiFi icon in bottom right, selecting your WLAN and entering your password. You can configure the connection by clicking the button in the upper right of the box.</li>
          <li>Once you're connected to your WLAN install the latest updates if you haven't yet by clicking the button in the bottom left > Software Center > Updates > Install. If you want to make sure that this works properly or in the case something doesn't work press the button in the bottom left, enter "Terminal" in the search, open the "Konsole", enter this command: <em>sudo apt-get update && sudo apt-get upgrade</em>, press enter and enter your password</li>
          <li>Connect other hardware to your computer if it isn't connected yet like your printer or your graphics card.</li>
          <li>To get your printer to work click on the button in the bottom left and enter "printer" in the search field > Print Settings. If this does not work go <a target="_blank" rel="noopener noreferrer" href="https://www.howtogeek.com/215235/how-to-install-printer-drivers-on-linux/" style="color: white;">here</a> In short: you could try getting the printer to work by opening <em>localhost:631</em> in the browser (just enter it into the address bar at the top) and adding it there or by installing drivers from the manufacturer's homepage for the printer. If this does not work you have two options: get a printer that is guaranteed to work with GNU/Linux or <span @click="scrollToElement('reason_13')" style="text-decoration: underline; cursor: pointer;">ask for help</span>.</li>
          <li>If you have a graphics card you might need to install drivers for it.<span v-if="selection_distro === 'kdeneon'"> Press the button in the bottom left, enter "Terminal" in the search, open the "Konsole", enter this command: <em>sudo apt-get install kubuntu-driver-manager && sudo ubuntu-drivers autoinstall</em> and enter your password. Restart once it finished.</span></li>
        </ul>
        <q-stepper-navigation>
          <q-btn v-if="step < 10" @click="wizardStepForward()" color="primary" :label="step === 9 ? 'Finish' : 'Continue'" />
          <q-btn v-if="step > 1" flat color="primary" @click="wizardStepBack()" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </q-step>

      <q-step :name="8" title="Install needed software" prefix="8" :done="step > 8">
        <ul>
          <li>Replace software you used that only runs on {{user_os}} or if there's no alternative use <span v-if="user_os === 'Windows'">Wine or </span>a virtual machine.</li>
          <li>Common software can be found by swiping the card <span @click="scrollToElement('reason_1')" style="text-decoration: underline;">here</span>.</li>
          <span v-if="user_type === 'Developer'"><li>For most developers it is recommended to install Visual Studio Code (VSCodium) as your IDE. You might also be interested in QtCreator for developing cross-platform Qt apps.</li></span>
          <li>If you can't find an alternative for some software you could also try sites like <a target="_blank" rel="noopener noreferrer" href="https://alternativeto.net/" style="color: white;">AlternativeTo</a> to find free software alternatives that run on GNU/Linux.</li>
          <li>Even if a software does not run under GNU/Linux there's often a web app version of it that you can use within your browser (Firefox)</li>
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
                <q-card-section>For this install the program "aqemu" (alternatively VirtualBox works too), start it, click the green plus button on the left and press next in all steps but make sure to select the most appropriate OS-type template, and a disk size that's large enough (usually 30GB). Once the virtual machine has been prepared, click on it, select Media and select Add CD-ROM. Then select an .iso file for {{user_os}} or insert the DVD and select the DVD. Then also increase the memory to a few gigabytes under VM > Memory. Then press apply and start the virtual machine by right click > Start. Install {{user_os}} in the virtual machine. That won't delete any data on your hard drive because the machine is only virtual. Once it's installed you can install software within the virtual machine and use it within the virtual machine. You can share files via Folder Sharing, via the Internet or via .iso files.</q-card-section>
              </q-card>
            </q-expansion-item>
            </div>
          </li>
          <li>If you play computer games not all of them might work on GNU/Linux. To play games on GNU/Linux use <a target="_blank" rel="noopener noreferrer" href="https://lutris.net/" style="color: white;">Lutris</a> (<a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=oHDkeQ9eDrc" style="color: white;">video</a>). With Lutris you can install and start games for Wine, console emulators like Dolphin or <a target="_blank" rel="noopener noreferrer" href="https://pcsx2.net/download/releases/linux.html" style="color: white;">PCSX2</a> for PlayStation 2 and use <a target="_blank" rel="noopener noreferrer" href="https://www.protondb.com/" style="color: white;">ProtonDB</a> and <a target="_blank" rel="noopener noreferrer" href="https://steamcommunity.com/linux/" style="color: white;">Steam for Linux</a>. (You can also use those separately but Lutris makes things easy and allows you to organize all your games from a single place.)<br/>And there are also some games that were made for GNU/Linux. You can install many of those with your software manager the same way you can install any other software. One such game is <a target="_blank" rel="noopener noreferrer" href="https://supertuxkart.net/Main_Page" style="color: white;">SuperTuxKart</a>.</li>
          <li>Your software manager in KDE neon is <a target="_blank" rel="noopener noreferrer" href=https://userbase.kde.org/Discover style="color: white;">Discover</a>. But it doesn't yet work with packages so you also have a second software-manager "Apper". You can open them by entering the name in the search after pressing the button in the bottom left. To install something simply enter the name in the search bar of the software manager, press install and enter your password. The software manager is also used to do updates for all of your software.</li>
          <li>Never run software as root. Apps should be installed via your software manager only except if it's not available in the "repositories" it has configured.</li>
        </ul>
        <q-stepper-navigation>
          <q-btn v-if="step < 10" @click="wizardStepForward()" color="primary" :label="step === 9 ? 'Finish' : 'Continue'" />
          <q-btn v-if="step > 1" flat color="primary" @click="wizardStepBack()" label="Back" class="q-ml-sm" />
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
          <li>You can also configure updates to be done automatically so you don't need to do them every time.</li>
          <li>You probably need to configure some software such as adding spellchecking for your language for LibreOffice.</li>
          <li>The Firefox AddOn <a target="_blank" rel="noopener noreferrer" href="https://addons.mozilla.org/en-US/firefox/addon/plasma-integration/" style="color: white;">Plasma Integration</a> better integrates the browser into KDE. For example it shows browser notifications within KDE.</li>
          <li>To view your files press the bottom left button and click on File Manager</li>
          <li>Connect the devices you stored your backups on and copy them to your hard drive. On the left side of your file manager "Dolphin" you can find folders for various types of content. You can add shortcuts there by right click > Add entry.</li>
          <li>To configure your system to look like Windows or macOS or like in other screenshots swipe <span @click="scrollToElement('reason_9')" style="text-decoration: underline; cursor: pointer;">this card</span>.</li>
          <span v-if="user_type === 'Developer' || user_type === 'Geek (experienced)' || user_type === 'Business' || user_type === 'School' || user_type === 'Public administration'"><li>If you're looking for a firewall use nftables. Likely at some point an easy to use and fully working GUI for it will be build. As antivirus install rkhunter and ClamAV.</li></span>
        </ul>
        <q-stepper-navigation>
          <q-btn v-if="step < 10" @click="wizardStepForward()" color="primary" :label="step === 9 ? 'Finish' : 'Continue'" />
          <q-btn v-if="step > 1" flat color="primary" @click="wizardStepBack()" label="Back" class="q-ml-sm" />
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

        <div class="expandableInfoContainer">
          <q-expansion-item
          dense
          dense-toggle
          expand-separator
          label="Show places to find help"
          class="expandableInfo"
          >
          <q-card>
            <q-card-section class="placesToGetHelpBox">
              <!-- TODO: add useful commands box? -->
              Before you ask a question try to search the web if somebody has solved your problem already.<br/>Often answers can then be found on a StackExchange site. If you don't find an answer post a new question and give a good title and tags.<br/>If you don't know what to search for or only need a very short info or a very quick answer ask in a Live Chat.
              <ul v-if="user_type !== 'Personal (inexperienced)'">
                <li v-if="selection_distro === 'ubuntu'"><a target="_blank" rel="noopener noreferrer" href=https://askubuntu.com/>AskUbuntu Stack Exchange<br/>Questions related to Ubuntu</a></li>
                <li><a target="_blank" rel="noopener noreferrer" href=https://unix.stackexchange.com/>Unix & Linux Stack Exchange<br/>Recommended place to ask about Linux-related things</a></li>
                <li v-if="selection_distro === 'debian'"><a target="_blank" rel="noopener noreferrer" href=irc://irc.debian.org/debian/>#Debian IRC<br/>Live chat for help with Debian</a></li>
                <li v-if="selection_distro !== 'ubuntu'"><a target="_blank" rel="noopener noreferrer" href=https://askubuntu.com/>AskUbuntu Stack Exchange<br/>Questions related to Ubuntu, answers typically also apply to Debian as Ubuntu is based on Debian</a></li>
                <li><a target="_blank" rel="noopener noreferrer" href=https://superuser.com/>Super User Stack Exchange<br/>More general questions such as about hardware</a></li>
                <li v-if="selection_de === 'kde'"><a target="_blank" rel="noopener noreferrer" href=https://kde.org/support/>Support for KDE software</a></li>
                <li :class="{ unrecommendedHelpPlace: user_type === ('Geek (experienced)' || user_type === 'Developer') }"><a target="_blank" rel="noopener noreferrer" href=https://itsfoss.com/use-windows-applications-linux/>#Linux-Help<br/>One of many live chats where you can find help</a></li>
                <li :class="{ unrecommendedHelpPlace: user_type === ('Geek (experienced)' || user_type === 'Developer') }"><a target="_blank" rel="noopener noreferrer" href=https://www.reddit.com/r/linux4noobs/>/r/Linux4Noobs<br/>Reddit page for Linux questions</a></li>
                <li :class="{ unrecommendedHelpPlace: user_type === ('Geek (experienced)' || user_type === 'Developer') }"><a target="_blank" rel="noopener noreferrer" href=https://www.reddit.com/r/linuxquestions//>/r/LinuxQuestions<br/>Reddit page for Linux questions</a></li>
                <li class="specialHelpPlace"><a target="_blank" rel="noopener noreferrer" href=https://www.reddit.com/r/linux_gaming/wiki/index#wiki_getting_tech_support>Gaming: /r/linux_gaming<br/>Help for getting a game/gaming to work (try to use Lutris install scripts!)</a></li>
                <li class="specialHelpPlace"><a target="_blank" rel="noopener noreferrer" href=https://www.gamingonlinux.com/irc/>Gaming: GamingOnLinux IRC<br/>Live-chat help for getting a game/gaming to work (try to use Lutris install scripts!)</a></li>
              </ul>
              <ul v-if="user_type === 'Personal (inexperienced)'">
                <li v-if="selection_distro === 'debian'"><a target="_blank" rel="noopener noreferrer" href=irc://irc.debian.org/debian/>#Debian IRC<br/>Live chat for help with Debian</a></li>
                <li><a target="_blank" rel="noopener noreferrer" href=https://itsfoss.com/use-windows-applications-linux/>#Linux-Help<br/>One of many live chats where you can find help</a></li>
                <li><a target="_blank" rel="noopener noreferrer" href=https://www.reddit.com/r/linux4noobs/>/r/Linux4Noobs<br/>Reddit page for Linux questions</a></li>
                <li><a target="_blank" rel="noopener noreferrer" href=https://www.reddit.com/r/linuxquestions//>/r/LinuxQuestions<br/>Reddit page for Linux questions</a></li>
                <li class="unrecommendedHelpPlace"><a target="_blank" rel="noopener noreferrer" href=https://unix.stackexchange.com/>Unix & Linux Stack Exchange<br/>Recommended place to ask about Linux-related things - but you should only ask questions that have not been asked before (search the web thoroughly)</a></li>
                <li class="unrecommendedHelpPlace"><a target="_blank" rel="noopener noreferrer" href=https://askubuntu.com/>AskUbuntu Stack Exchange<br/>Questions related to Ubuntu, answers typically also apply to Debian as Ubuntu is based on Debian - only ask questions that have not been asked before (search the web thoroughly)</a></li>
                <li class="unrecommendedHelpPlace"><a target="_blank" rel="noopener noreferrer" href=https://superuser.com/>Super User Stack Exchange<br/>More general questions such as about hardware - only ask questions that have not been asked before (search the web thoroughly)</a></li>
                <li class="unrecommendedHelpPlace" v-if="selection_de === 'kde'"><a target="_blank" rel="noopener noreferrer" href=https://kde.org/support/>Support for KDE software</a></li>
                <li class="specialHelpPlace"><a target="_blank" rel="noopener noreferrer" href=https://www.reddit.com/r/linux_gaming/wiki/index#wiki_getting_tech_support>Gaming: /r/linux_gaming<br/>Help for getting a game/gaming to work (try to use Lutris install scripts!)</a></li>
                <li class="specialHelpPlace"><a target="_blank" rel="noopener noreferrer" href=https://www.gamingonlinux.com/irc/>Gaming: GamingOnLinux IRC<br/>Live-chat help for getting a game/gaming to work (try to use Lutris install scripts!)</a></li>
              </ul>
              Not for asking questions:
              <ul>
                <li v-if="selection_distro === 'debian'"><a target="_blank" rel="noopener noreferrer" href=https://www.debian.org/releases/stable/amd64/index.en.html/>Debian Documentation: Installation Guide</a></li>
                <li v-if="selection_distro === 'debian'"><a target="_blank" rel="noopener noreferrer" href=https://www.debian.org/doc/manuals/debian-faq//>Debian Documentation: FAQ</a></li>
                <li v-if="selection_de === 'kde' || selection_de === ''"><a target="_blank" rel="noopener noreferrer" href=https://docs.kde.org//>KDE Documentation</a></li>
                <li v-if="user_type !== 'Personal (inexperienced)'">If you need help for a command enter <i>man command</i> in the terminal (Konsole)</li>
              </ul>
            </q-card-section>
          </q-card>
        </q-expansion-item>
      </div>
        <!-- <p>If you need help you can find help in places such as <span @click="scrollToElement('reason_13')" style="text-decoration: underline; cursor: pointer;">these</span> (swipe card).</p> -->
      <template v-slot:navigation>
        <q-stepper-navigation>
          <q-btn v-if="step < 10" @click="wizardStepForward()" color="primary" :label="step === 9 ? 'Finish' : 'Continue'" />
          <q-btn v-if="step > 1" flat color="primary" @click="wizardStepBack()" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </template>
      </q-step>
    </q-stepper>
  </div>
</template>

<script>
import { i18n } from "../boot/i18n.js";
import styles from "../assets/styles/setup_wizard.sass";

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
          description: 'Strict guidelines make sure that it remains 100% free open source software, it\'s run by a large community and it\'s the distribution used most on servers. It is a very old, established and stable distribution upon which many other distributions, like Ubuntu, are based. Contributors to it adhere to a Social Contract that codifies the moral agenda of the project. However it\'s not easy for beginners yet. If you use it as a beginner you should be okay with at least running a few commands using the terminal directly after installation. Debian calls itself the "universal operating system" which makes its high goals clear. More reasons to use it <a target="_blank" rel="noopener noreferrer" href="https://www.debian.org/intro/why_debian" style="color: white; font-weight: bold;">here</a>.',
          enabled: true,
          website: 'https://www.debian.org/',
          selectionKey: 'debian'
        },
        {
          logo: 'statics/logos_kdeneon_small.png',
          name: 'KDE neon',
          description: 'Easy to use, looks modern and great, "the latest and greatest of KDE community software packaged on a rock-solid base". KDE neon is based on Ubuntu which is based on Debian. Video showcasing it <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=TXWUyUUx3ZE" style="color: white; font-weight: bold;">here</a>',
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
        },
        {
          logo: 'statics/logos_linuxmint.png',
          name: 'Linux Mint',
          description: '',
          enabled: false,
          website: 'https://linuxmint.com/',
          selectionKey: 'linuxmint'
        },
        {
          logo: 'statics/logos_ubuntu.png',
          name: 'Ubuntu',
          description: '',
          enabled: false,
          website: 'https://ubuntu.com/',
          selectionKey: 'ubuntu'
        }
      ],
      desktopEnvironments: [
        {
          logo: 'statics/logos_kde.png',
          name: 'KDE',
          description: '"Simple by default, Powerful when needed", highly customizable, widgets, looks beautiful and modern, a lot of apps that share same look and feel, a lot of similarity with Windows, phone integration with KDE Connect and more.',
          enabled: true,
          website: 'https://kde.org/',
          selectionKey: 'kde'
        },
        {
          logo: 'statics/logos_gnome.png',
          name: 'GNOME',
          description: '"An easy and elegant way to use your computer, GNOME is designed to put you in control and get things done." Does not have a taskbar or a start menu in the bottom left. Might have some advantages for touchscreens including tablets but KDE could improve in that area. It is used by many because it\'s the desktop environment of the popular distribution Ubuntu. But it is recommended to use KDE even if you use a touchscreen so that you don\'t have to change your desktop environment later on. GNOME is a good alternative to KDE but unless you know exactly what you\'re doing it\'s recommended to use KDE. More reasons for that doing so <a target="_blank" rel="noopener noreferrer" href="https://www.makeuseof.com/tag/why-kde-better-gnome/" style="color: white; font-weight: bold;">here</a>.',
          enabled: false,
          website: 'https://www.gnome.org/',
          selectionKey: 'gnome'
        },
        {
          logo: 'statics/logos_xfce.png',
          name: 'XFCE',
          description: 'Xfce aims to be fast and lightweight while still being visually appealing and easy to use. Unless you plan to install it on a system with very, very low resources it\'s not recommended. If you\'re using a workstation computer that isn\'t 20+ years old this likely isn\'t a good choice for you. For example it looks very outdated.',
          enabled: false,
          website: 'https://xfce.org/',
          selectionKey: 'xfce'
        },
        {
          logo: 'statics/logos_cinnamon.png',
          name: 'Cinnamon',
          description: 'Based upon GNOME and is used by Linux Mint. Unlike GNOME it looks very similar to Windows. But this isn\'t a good reason to use it instead of KDE.',
          enabled: false,
          website: 'https://cinnamon-spices.linuxmint.com/',
          selectionKey: 'cinnamon'
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
    },
    wizardStepBack(){
      this.$refs.stepper.previous();
      let elements = document.getElementsByClassName("q-stepper__tab--active");
      elements[0].parentElement.previousElementSibling.scrollIntoView();
    },
    wizardStepForward(){
      this.$refs.stepper.next();
      let elements = document.getElementsByClassName("q-stepper__tab--active");
      elements[0].scrollIntoView();
      // TODO make it select the correct header element - .nextElementSibling doesn't work nor does:
      //let elements = document.getElementsByClassName("q-stepper__label");
      //elements[this.step-1].scrollIntoView();
      // or this:
      // let x = elements[0].parentElement.nextElementSibling;
      // let y = x.getElementsByClassName("q-stepper__tab--navigation");//q-stepper__tab--active
      // y[0].scrollIntoView();
    }
  },
  watch : {
    user_os: function(val) {},// TODO
    user_type:function(val) {
      if (val === "Geek (experienced)" || val === "Developer") {
        this.distributions = [
        {
          logo: 'statics/logos_debian_small.png',
          name: 'Debian',
          description: 'Strict guidelines make sure that it remains 100% free open source software, it\'s run by a large community and it\'s the distribution used most on servers. It is a very old, established and stable distribution upon which many other distributions, like Ubuntu, are based. Contributors to it adhere to a Social Contract that codifies the moral agenda of the project. However it\'s not easy for beginners yet. If you use it as a beginner you should be okay with at least running a few commands using the terminal directly after installation. Debian calls itself the "universal operating system" which makes its high goals clear. More reasons to use it <a target="_blank" rel="noopener noreferrer" href="https://www.debian.org/intro/why_debian" style="color: white; font-weight: bold;">here</a>.',
          enabled: true,
          website: 'https://www.debian.org/',
          selectionKey: 'debian'
        },
        {
          logo: 'statics/logos_kdeneon_small.png',
          name: 'KDE neon',
          description: 'Easy to use, looks modern and great, "the latest and greatest of KDE community software packaged on a rock-solid base". KDE neon is based on Ubuntu which is based on Debian. Video showcasing it <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=TXWUyUUx3ZE" style="color: white; font-weight: bold;">here</a>',
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
        },
        {
          logo: 'statics/logos_linuxmint.png',
          name: 'Linux Mint',
          description: 'Not recommended',
          enabled: false,
          website: 'https://linuxmint.com/',
          selectionKey: 'linuxmint'
        },
        {
          logo: 'statics/logos_ubuntu.png',
          name: 'Ubuntu',
          description: 'Not recommended',
          enabled: false,
          website: 'https://ubuntu.com/',
          selectionKey: 'ubuntu'
        }
        ]
      }
      else if (val === "School") {
        this.distributions = [
        {
          logo: 'statics/logos_debian_small.png',
          name: 'Debian Edu/Skolelinux',
          description: 'Strict guidelines make sure that it remains 100% free open source software, it\'s run by a large community and it\'s the distribution used most on servers. It is a very old, established and stable distribution upon which many other distributions, like Ubuntu, are based. Contributors to it adhere to a Social Contract that codifies the moral agenda of the project. However the main distribution (not Skolelinux) isn\'t easy for beginners yet. Debian calls itself the "universal operating system" which makes its high goals clear. More reasons to use it <a target="_blank" rel="noopener noreferrer" href="https://www.debian.org/intro/why_debian" style="color: white; font-weight: bold;">here</a>.<br/>Debian Edu/Skolelinux is an operating system intended for educational use. Skolelinux\'s literal translation is \"school linux\". It has been created as an overall free software computer solution designed to fit to schools\' resources and needs, and is currently being developed by a large and growing international community. More info about it <a target="_blank" rel="noopener noreferrer" href="https://wiki.debian.org/DebianEdu/Introduction" style="color: white; font-weight: bold;">here</a>.',
          enabled: true,
          website: 'https://www.debian.org/',
          selectionKey: 'debian'
        },
        {
          logo: 'statics/logos_kdeneon_small.png',
          name: 'KDE neon',
          description: 'Easy to use, looks modern and great, "the latest and greatest of KDE community software packaged on a rock-solid base". KDE neon is based on Ubuntu which is based on Debian. Video showcasing it <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=TXWUyUUx3ZE" style="color: white; font-weight: bold;">here</a>',
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
        },
        {
          logo: 'statics/logos_linuxmint.png',
          name: 'Linux Mint',
          description: '',
          enabled: false,
          website: 'https://linuxmint.com/',
          selectionKey: 'linuxmint'
        },
        {
          logo: 'statics/logos_ubuntu.png',
          name: 'Ubuntu',
          description: '',
          enabled: false,
          website: 'https://ubuntu.com/',
          selectionKey: 'ubuntu'
        }
        ]
      } else {
        this.distributions = [
        {
          logo: 'statics/logos_kdeneon_small.png',
          name: 'KDE neon',
          description: 'Easy to use, looks modern and great, "the latest and greatest of KDE community software packaged on a rock-solid base". KDE neon is based on Ubuntu which is based on Debian. Video showcasing it <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=TXWUyUUx3ZE" style="color: white; font-weight: bold;">here</a>',
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
        },
        {
          logo: 'statics/logos_debian_small.png',
          name: 'Debian',
          description: 'Strict guidelines make sure that it remains 100% free open source software, it\'s run by a large community and it\'s the distribution used most on servers. It is a very old, established and stable distribution upon which many other distributions, like Ubuntu, are based. Contributors to it adhere to a Social Contract that codifies the moral agenda of the project. However it\'s not easy for beginners yet. If you use it as a beginner you should be okay with at least running a few commands using the terminal directly after installation. Debian calls itself the "universal operating system" which makes its high goals clear. More reasons to use it <a target="_blank" rel="noopener noreferrer" href="https://www.debian.org/intro/why_debian" style="color: white; font-weight: bold;">here</a>.',
          enabled: true,
          website: 'https://www.debian.org/',
          selectionKey: 'debian'
        },
        {
          logo: 'statics/logos_linuxmint.png',
          name: 'Linux Mint',
          description: '',
          enabled: false,
          website: 'https://linuxmint.com/',
          selectionKey: 'linuxmint'
        },
        {
          logo: 'statics/logos_ubuntu.png',
          name: 'Ubuntu',
          description: '',
          enabled: false,
          website: 'https://ubuntu.com/',
          selectionKey: 'ubuntu'
        }
      ]
      }
    }
  }
};
</script>
