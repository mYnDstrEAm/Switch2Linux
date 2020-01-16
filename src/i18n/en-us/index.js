export default {
  reasons: [
    {
      title: "It's gratis",
      main_text:
        "It's gratis and always will be and the apps running on it are gratis, too",
      text:
        "You can also just try it out and still switch to another OS later. Unlike for macOS or Windows you don't have to pay anything for the OS - you can use it without charge or recompense.",
      image_src: "statics/reasons_free.png",
      source_background_details: ["GNU/Linux software is made by volunteers, for-profit and non-profit developers and simply anybody with an interest in advancing the common good through code this way.",
        "It is published under licenses that allow use free of charge even for commercial purposes.",
        "Many people see an advantage to the software being free of charge and a lot of money can be saved in larger orders"
    ]
    },
    {
      title: "It's free software",
      main_text:
        "It gives the user the freedom to share, study and modify the software",
      text:
        "Many arguments in favor of GNU/Linux listed here stem from it being free and open source software. It is called free software because the user is free.<br/>And the apps running on GNU/Linux are free software, too. Free software include LibreOffice for office programs, GIMP for image editing, Kdenlive for video editing, Thunderbird for e-mail.<br/><b>Swipe this card to the right see more free software alternatives</b>.",
      image_src: "statics/reasons_foss.png",
      source_background_details: ["<a target=\"_blank\" rel=\"noopener noreferrer\" href=https://www.fsf.org/about/what-is-free-software>What is free software and why is it so important for society? by FSF</a>", "<a href=https://www.wired.com/2013/09/why-free-software-is-more-important-now-than-ever-before/>Why Free Software Is More Important Now Than Ever Before by Angela Watercutter on WIRED</a>", "Recommended software alternatives:"],
      source_background_details_tiles: [
        "Email",
        "Office",
        "PDF reader",
        "File manager",
        "Image viewer",
        "Image editor",
        "Video editor",
        "Media player",
        "CD/DVD burner",
        "Ebook reader",
        "Archiving tool",
        "Browser",
        "IDE",
        "Virtual machine",
        "Remote desktop",
        "Backup",
        "Cleaning"
      ]
    },
    {
      title: "No walled garden and vendor-lock-in",
      main_text: "Personal freedom and independence and fair opportunities for alternatives",
      text: "Windows, macOS and non-free software running on these OS are (or can be) a \"walled garden\" wherein the service provider has control over applications, content, and media, and restricts convenient access to non-approved applicants or content.<br/>Similarly a vendor lock-in makes a customer dependent on a vendor for products and services, unable to use another vendor without substantial switching costs.",
      image_src: "statics/reasons_vendorlockin.png",
      source_background_details: ["<a target=\"_blank\" rel=\"noopener noreferrer\" href=http://www.hbs.edu/faculty/Publication%20Files/09-030.pdf>Opening Platforms: How, When and Why?</a>"]
    },
    {
      title: "Update mechanism and software repository",
      main_text:
        "All software in GNU/Linux is supposed to be managed with a single program",
      text:
        "This allows simple, timely and fast updates, ensures security and provides a great level of convenience for quickly installing and removing software.<br/>For example if you want to test out a new software you only need to enter its name in your software-manager, click on install, enter your password and wait a short time for it to install. Afterwards you can easily uninstall or update it with a click of a button in the same software-management program. You can also configure it to run updates automatically.<br/>Different distributions have different such \"package-managers\" preinstalled. Two examples are \"Apper\" and \"Discover\" (in the screenshot).",
      image_src: "statics/reasons_update.png",
      source_background_details: ["<a target=\"_blank\" rel=\"noopener noreferrer\" href=https://userbase.kde.org/Discover>Intro to Discover by KDE</a>"]
    },
    {
      title: "More secure",
      main_text: "There are multiple reasons for why GNU/Linux is more secure:",
      text: "",
      subpoints: [
        '<b>Open source software is a development-model that can deliver inherently more secure software.</b><br/>Because the code is open to the public and other developers security vulnerabilities can be fixed quickly. Open source software allows more people to check the code. In practice the security also depends on how many developers are actively watching changes to the code and have audited it. But software that is not open source can never reach the level of security of an open source project that is sufficiently watched and maintained. This is mainly because it could contain hidden "backdoors", by which third parties can bypass security mechanisms and intrude the user\'s device, and bugs and because there\'s no dependence on a single company to fix security issues.',
        "<b>GNU/Linux still doesn't have a market share as large as Windows so less malware is designed for it.</b><br/>While GNU/Linux is running on virtually all supercomputers, almost all routers and web servers and is therefore a valuable target for sophisticated malware, the market share of personal computer users - which is the target population of more common malware - is too small for typical, criminal hackers to develop malware for. However, a high level of computer security under GNU/Linux does not depend on the market share being small.",
        "<b>GNU/Linux better protects privacy</b><br/>Details on this in a separate card below.",
        "<b>GNU/Linux has better security designs including its implementation of privileges and its updating-processes.</b><br/>For example it requires the password to be entered for making some changes. And more technologies like sandboxing are already getting picked up by developers to be included in the OS. More details can be found by swiping this card."
      ],
      image_src: "statics/reasons_security.png",
      source_background_details: ["More: <a target=\"_blank\" rel=\"noopener noreferrer\" href=https://www.pcworld.com/article/202452/why_linux_is_more_secure_than_windows.html>Why Linux Is More Secure Than Windows, by Katherine Noyes, PCWorld </a>"]
    },
    {
      title: "Privacy",
      main_text:
        "A high level of privacy is enabled by default by the OS and most applications",
      text: "Because the software is free developers can inspect the open source code and modify it if it contains privacy-violating code or misses features to protect privacy.",
      image_src: "statics/reasons_privacy.png",
      source_background_details: ["<a href=https://www.zdnet.com/article/sick-of-windows-spying-on-you-go-linux/>Sick of Windows spying on you? Go Linux, ZDNet</a>",
      "<a target=\"_blank\" rel=\"noopener noreferrer\" href=https://www.infoworld.com/article/2969704/windows-10-privacy-concerns-may-help-linux.html>Windows 10 privacy concerns may help Linux, Infoworld</a>",
      "<a target=\"_blank\" rel=\"noopener noreferrer\" href=https://www.computerworld.com/article/3163627/if-you-want-privacy-you-need-to-run-linux.html>If you want privacy you need to run Linux, Computerworld</a>",
      "<a target=\"_blank\" rel=\"noopener noreferrer\" href=https://spreadprivacy.com/linux-privacy-tips/>How to Protect Your Privacy on Linux, Short Tutorial by DuckDuckGo</a>"]
    },
    {
      title: "Fosters innovation",
      main_text: "Open source code allows people to easily innovate upon others' work",
      text: "Innovators can study or directly use code of other projects to build new products. They can also extend these projects or modify them to suit their needs or cut costs by using free software. Furthermore innovative hardware can be developed more easily by using GNU/Linux.",
      image_src: "statics/reasons_innovation.png",
      source_background_details: ["<a target=\"_blank\" rel=\"noopener noreferrer\" href=https://opensource.com/business/13/1/impact-open-source-business>Open source boosts entrepreneurship and social good through collaboration by Aseem Sharma on opensource.com</a>",
        "Many innovative devices run GNU/Linux.",
        "A lot of innovative software runs software made for GNU/Linux or free software in general"]
    },
    {
      title: "Also runs on old hardware and mini computers",
      main_text: "A universal operating system for all devices",
      text: "This allows more convergent software that runs on many different devices, broader or additional areas of application, standardization and familiarity. GNU/Linux runs on phones, old laptops, supercomputers and small embedded devices.",
      image_src: "statics/reasons_hardware.png",
      source_background_details: ["This is because the software is free and because it can be lightweight."]
    },
    {
      title: "Independence and sovereignty",
      main_text:
        "By using GNU/Linux you don't depend on a company or its decisions",
      text: "This is especially relevant for nations' federal agencies and businesses.",
      image_src: "statics/reasons_sovereignty.png",
      source_background_details: ["<a target=\"_blank\" rel=\"noopener noreferrer\" href=https://www.zdnet.com/article/microsoft-poses-threat-to-germanys-digital-sovereignty-warns-study/>Microsoft poses threat to Germany's digital sovereignty, warns study, ZDNet</a>"]
    },
    {
      title: "Highly customizable",
      main_text: "Especially KDE is highly customizable and can also be made to look like Windows or macOS",
      text:
        "Swipe this card to see an exemplary guide to reproduce the setup of the screenshot.",
      // Click on a screenshot below to view a tutorial for the set-up or simply follow the guide below which includes customization.
      image_src: "statics/kdeneon_2.jpg",
      source_background_details: ["Guide: 1. <a target=\"_blank\" rel=\"noopener noreferrer\" href=https://store.kde.org/content/show.php/Kvantum?content=166241>Kvantum</a> 2. <a target=\"_blank\" rel=\"noopener noreferrer\" href=https://github.com/PapirusDevelopmentTeam/papirus-icon-theme>Papirus Icons</a> 3. <a target=\"_blank\" rel=\"noopener noreferrer\" href=https://www.techrepublic.com/article/how-to-install-the-latte-dock-on-kde/>Latte Dock</a>"]
    },
    {
      title: "Can look better than Windows and macOS",
      main_text:
        "Especially KDE looks sleek and modern by default",
      text:
        "As KDE/GNU/Linux is highly customizable you can make it look many different ways - more on that in the point above. Depending on your taste and the distribution/DE you choose, it can look better than Windows or macOS even without any customization.",
      image_src: "statics/reasons_looks.png",
      source_background_details: ["A guide for making it look more like Windows will be added above (swipe card)",
        "A guide for making it look more like macOS will be added above (swipe card)"]
    },
    {
      title: "Realizes a free and open society",
      main_text:
        'By using free software you can help realize a society that values collaboration, transparency, participation, freedom, privacy, respect for users, openness, innovation and sovereignty',
      text:
        'Every software project may reflect different values, but these values are mostly inherent to free and open source software. For example if people don\'t like some design-decisions made by a project they could code their preferred approach as an extension or option to it or make a "fork" of the software. A fork is simply a copy of the software that developers modify differently than the original software and distribute it freely under a different name. The Debian project whose distibutions are recommended here also has a "Social Contract" that codifies some values for the project.',
      image_src: "statics/reasons_society.png",
      source_background_details: ["<a target=\"_blank\" rel=\"noopener noreferrer\" href=https://www.debian.org/social_contract>The Debian Social Contract</a>", "<a href=https://fsfe.org/freesoftware/society/society.en.html>Free software, Free Society by FSFE</a>"]
    },
    {
      title: "Changeable source code",
      main_text: "Especially if you are a developer you might occasionally want to change or request a change to some of the software you use",
      text: "This gives users more flexibility and allows for more use-cases and increased efficiency.",
      image_src: "statics/reasons_changeable.png",
      source_background_details: ["Some changes only require running commands in the terminal. Other changes may require downloading the source code, changing it, compiling it and then running and potentially distributing it.",
        "If you want to request a change to a software you need to find the place the source code is hosted and open a new issue for your request. Typical places to do so are GitLab and GitHub. Before making a new issue you should check if it's not available in the options and whether somebody asked about it before."]
    },
    {
      title: "Community support",
      main_text: "There is a huge community of people willing to help you use free software",
      text: "Volunteer-support also cuts maintenance costs. Most problems have already been solved and you only need to use a search engine to find out how. But if you need help there are many sites where people respond to your questions like the StackExchange sites.<br/>Swipe this card to see places where to find help.</b>",
      image_src: "statics/reasons_support.png",
      source_background_details: ["<a href=https://unix.stackexchange.com/>Unix & Linux Stack Exchange - Recommended place to ask about Linux-related things</a>",
        "<a target=\"_blank\" rel=\"noopener noreferrer\" href=https://askubuntu.com/>AskUbuntu Stack Exchange - Questions related to Ubuntu, answers typically also apply to Debian as Ubuntu is based on Debian</a>",
        "<a target=\"_blank\" rel=\"noopener noreferrer\" href=https://superuser.com/>Super User Stack Exchange - More general questions such as about hardware</a>",
        "<a target=\"_blank\" rel=\"noopener noreferrer\" href=https://itsfoss.com/use-windows-applications-linux/>#Linux-Help - One of many live chats where you can find help</a>",
        "<a target=\"_blank\" rel=\"noopener noreferrer\" href=https://kde.org/support/>Support for KDE software</a>"]
    },
    {
      title: "Only few barriers left",
      main_text: "Most reasons for not using GNU/Linux have been resolved by now",
      text:
        'For example it\'s not harder to use than Windows or macOS - sometimes even easier: for instance unlike for Windows many drivers are included in the "kernel" already. Users sometimes can have different difficulties with GNU/Linux such as missing specific programs, familiar layout, problems with gaming or how to install GNU/Linux. But these have been mostly resolved. In the guide below we show you how to make it look like Windows, macOS and better. Only few problems remain for some users - namely, most importantly that some games might not work. Windows-programs like .exe files won\'t work in Linux by default but you usually can make them work with a program called \"<a target=\"_blank\" rel=\"noopener noreferrer\" href=https://itsfoss.com/use-windows-applications-linux/>Wine</a>\". Except for those games as a last option you could run a Windows operating system in a "virtual machine" to get a software to work - it\'s not hard to do and at the bottom of the guide you\'ll be shown how exactly you can set such a thing up if you need to. Other than that hibernation doesn\'t work and switching to GNU/Linux takes some effort.<br/>The usage-share of GNU/Linux is still small but it\'s rising.',
      image_src: "statics/reasons_barrier.png",
      source_background_details: [
        "Fragmentation of GNU/Linux into many different distributions and desktop environments and many different applications could be detrimental to a GNU/Linux as a project. This is partly why this page is so decisive in the recommendations given and e.g. only recommends one software alternative in the first reasons's details instead of multiple ones. Another reason for that is that inexperienced users should not be expected to have to (spend a lot of time) research things like that. This site is about making the switch fast and simple and to improve the GNU/Linux FOSS ecosystem most effectively.",
        "Many Linux users have some kind of elitism by which they don't consider mass-adoption a goal and GUIs, good user experience, marketing and design as uneccesary."
      ]
    }
  ],
  explanations: {
    why: "Why?",
    how: "How?",
    what_is_linux_header: "What is Linux?",
    what_is_linux_hidden:
      'An OS is a set of software that manages computer components and makes them available to apps. "Linux" is only one part of the OS (the "kernel") so a more correct name for the OS is "GNU/Linux".',
    what_is_linux: "It is an operating system, like Windows.<br/>",
    what_is_website_hidden:
      " And Linux is now better than ever - most reasons not to switch have been resolved. It is easy to set up: everybody can do it!",
    what_is_website:
      "It shows you <b>why</b> and <b>how</b> to switch to GNU/Linux.<br/>Windows 7 is getting phased out as support ended on January 14, 2020.",
    what_is_website_header: "What is this website?",
    reasons_header: "Why to switch?",
    reasons_subheader: "What's better than macOS or Windows 10?",
    wizard_header: "How to switch?",
    wizard_subheader:
      "The recommendations and steps of the guide vary depending on what you select in the options",
    wizard_current_os: "Current OS",
    wizard_user_type: "I'm a",
    wizard_select_first_message: "Please first select OS and user type.",
    wizard_options_user_type_personal: "Personal user (inexperienced)",
    wizard_options_user_type_geek: "Geek (experienced)",
    wizard_options_user_type_developer: "Developer",
    wizard_options_user_type_school: "School",
    wizard_options_user_type_administration: "Public administration",
    wizard_options_user_type_business: "Business"
  }
};
