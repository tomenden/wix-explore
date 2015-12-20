const data = {
    sites: [
        {
            id: 1,
            name: 'French Knot Studios',
            description: "Unique event and wedding designing. Working on every details and creating a truly special reflection the couple's love story through both design and impeccable styling aesthetic.",
            url: 'http://contact8568.wix.com/ingrid/',
            thumbnailUrl: 'https://static.wixstatic.com/media/85a3c2_555a5ce71bb04161b7262b112087b8bc.jpg/v1/fit/w_600,h_336,q_90/85a3c2_555a5ce71bb04161b7262b112087b8bc.jpg',
            authorUserName: 'Audrey Wagner King',
            authorDescription: 'Las Vegas, Nevada',
            avatarUrl: 'https://lh3.googleusercontent.com/-cTI_uaKUWCA/AAAAAAAAAAI/AAAAAAAAAAA/pogz1BqguqY/photo.jpg',
            likes: ['tzabarco', 'tome'],
            tags: ['Event', 'Style', 'Wedding'],
            views: 10,
            comments: [],
            originalTemplateUrl: 'http://static.wixstatic.com/media/0afa896116374df0bb2647ae25eed07a.jpg',
            category: 'Design'

        },
        {
            id: 2,
            name: 'OPERA D\'ARTE',
            description: 'A cool site',
            url: 'http://www.operadartebridal.com/',
            thumbnailUrl: 'https://static.wixstatic.com/media/85a3c2_21c59e15905b42469f290edc38b14c13.jpg/v1/fit/w_600,h_336,q_90/85a3c2_21c59e15905b42469f290edc38b14c13.jpg',
            authorUserName: 'operadarte',
            avatarUrl: 'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png',
            likes: ['tzabarco', 'tome'],
            views: 9,
            comments: [],
            originalTemplateUrl: '',
            category: 'Photography'
        },
        {
            id: 3,
            name: 'DEAR PAPERIE',
            description: 'DEAR PAPERIE',
            url: 'http://www.dearpaperie.com/',
            thumbnailUrl: 'https://static.wixstatic.com/media/85a3c2_0c9942e231ca401780fff043f2a874ee.jpg/v1/fit/w_600,h_336,q_90/85a3c2_0c9942e231ca401780fff043f2a874ee.jpg',
            authorUserName: 'thefoxdendesign',
            avatarUrl: 'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png',
            likes: ['tzabarco', 'tome'],
            views: 8,
            comments: [],
            originalTemplateUrl: '',
            category: 'Business'
        },
        {
            id: 4,
            name: 'FRENCH KNOT STUDIOS',
            description: 'A cool site',
            url: 'http://www.frenchknotstudios.com/',
            thumbnailUrl: 'https://static.wixstatic.com/media/85a3c2_b8de7ff3e7f5463cb6fa11f6464a3017.jpg/v1/fit/w_600,h_336,q_90/85a3c2_b8de7ff3e7f5463cb6fa11f6464a3017.jpg',
            authorUserName: 'rinzinzin',
            avatarUrl: 'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png',
            likes: ['tzabarco', 'tome'],
            views: 7,
            comments: [],
            originalTemplateUrl: '',
            category: 'Business'
        },
        {
            id: 5,
            name: 'CAYOS COCHINOS',
            description: 'A cool site',
            url: 'http://www.turtlebayecoresort.com/',
            thumbnailUrl: 'https://static.wixstatic.com/media/85a3c2_76d86bbc121a484580cc97268143c25d.jpg/v1/fit/w_600,h_336,q_90/85a3c2_76d86bbc121a484580cc97268143c25d.jpg',
            authorUserName: 'rinzinzin',
            avatarUrl: 'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png',
            likes: ['tzabarco', 'tome'],
            views: 6,
            comments: [],
            originalTemplateUrl: '',
            category: 'Accommodation'
        },
        {
            id: 6,
            name: 'Phyllis & Hazel',
            description: 'A cool site',
            url: 'http://www.phyllisandhazel.com/',
            thumbnailUrl: 'https://static.wixstatic.com/media/85a3c2_e8e2fa19567b4c7ea95d5052a74af150.jpg/v1/fit/w_600,h_336,q_90/85a3c2_e8e2fa19567b4c7ea95d5052a74af150.jpg',
            authorUserName: 'rinzinzin',
            avatarUrl: 'https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png',
            likes: [],
            views: 5,
            comments: [],
            originalTemplateUrl: '',
            category: 'Food'
        }
    ],
    users: [
        {
            id: 1,
            authorUserName: 'Audrey Wagner King',
            authorDescription: 'Las Vegas, Nevada',
            avatarUrl: 'https://lh3.googleusercontent.com/-cTI_uaKUWCA/AAAAAAAAAAI/AAAAAAAAAAA/pogz1BqguqY/photo.jpg',
            followers: ['tzabarco', 'tome'],
            following: ['tzabarco', 'tome'],
            sites: ['siteid#3256', 'siteid#3256']

        },
        {
            id: 2,
            authorUserName: 'Tzabar Cohen',
            authorDescription: 'Tel aviv, Israel',
            avatarUrl: 'https://lh3.googleusercontent.com/-cTI_uaKUWCA/AAAAAAAAAAI/AAAAAAAAAAA/pogz1BqguqY/photo.jpg',
            followers: ['tzabarco', 'tome'],
            following: ['tzabarco', 'tome'],
            sites: ['siteid#3256', 'siteid#3256']

        }
    ],

    filter: 'SHOW_ALL',
    visibleCount: 1
};


const sites_data_from_firebase = [
    {
        id: 0,
        name: 'French Knot Studios',
        description: "Unique event and wedding designing. Working on every details and creating a truly special reflection the couple's love story through both design and impeccable styling aesthetic.",
        url: 'http://contact8568.wix.com/ingrid/',
        thumbnailUrl: 'https://static.wixstatic.com/media/85a3c2_555a5ce71bb04161b7262b112087b8bc.jpg/v1/fit/w_600,h_336,q_90/85a3c2_555a5ce71bb04161b7262b112087b8bc.jpg',
        authorUserName: 'Audrey Wagner King',
        authorDescription: 'Las Vegas, Nevada',
        avatarUrl: 'https://lh3.googleusercontent.com/-cTI_uaKUWCA/AAAAAAAAAAI/AAAAAAAAAAA/pogz1BqguqY/photo.jpg',
        likes: ['tzabarco', 'tome'],
        views: 10,
        comments: [],
        originalTemplateUrl: 'http://static.wixstatic.com/media/0afa896116374df0bb2647ae25eed07a.jpg',
        category: 'Design'

    },
    {
        "authorUserName": "Audrey Wagner King",
        "avatarUrl": "https://dl.dropboxusercontent.com/u/14072206/wix/Wix%20Inspire/Users/Test-new-mobile_0021_Layer-Comp-22.png",
        "category": "Events",
        "description": "Unique event and wedding designing. Working on every details and creating a truly special reflection the couple's love story through both design and impeccable styling aesthetic.",
        "id": 1,
        "likes": [
            "tzabarco",
            "tzabarco1",
            "tzabarco2",
            "tzabarco3",
            "tzabarco4",
            "tzabarco5",
            "tzabarco6",
            "tzabarco7",
            "tzabarco8",
            "tzabarco9",
            "tzabarco10",
            "tzabarco11"
        ],
        "tags": [
            "Colorful",
            "Bright",
            "Romantic"
        ],
        "name": "French Knot Studios",
        "originalTemplateUrl": "http://www.wix.com/website-template/view/html/1591",
        "thumbnailUrl": "https://dl.dropboxusercontent.com/u/14072206/wix/Wix%20Inspire/web_0010_01.jpg",
        "url": "http://www.frenchknotstudios.com/",
        "views": 10
    },
    {
        "authorUserName": "Ingrid",
        "avatarUrl": "https://dl.dropboxusercontent.com/u/14072206/wix/Wix%20Inspire/Users/Test-new-mobile_0018_Layer-Comp-19.png",
        "category": "All",
        "description": "The NDC wants greater clarity within the center. The opening of the permanent space \"ENDC\" raises awareness and immerse the public only in contemporary dance. Support and stabilize this dance in general. Manifest and build this project together!",
        "id": 2,
        "likes": [
            "tzabarco",
            "tome",
            "tome1",
            "tome2",
            "tome3"
        ],
        "tags": [
            "B&W",
            "Background Image",
            "Artistic",
            "Parallax"
        ],
        "name": "Centre National de Danse - Pantin",
        "originalTemplateUrl": "http://www.wix.com/website-template/view/html/627",
        "thumbnailUrl": "https://dl.dropboxusercontent.com/u/14072206/wix/Wix%20Inspire/web_0007_04.jpg",
        "url": "http://contact8568.wix.com/ingrid/",
        "views": 7
    },
    {
        "authorUserName": "operadarte",
        "avatarUrl": "",
        "category": "Online Store",
        "description": "Opera D'Arte Bridal brings to brides a new concept of bridal dresses and fashion to the area of Miami. ",
        "id": 3,
        "likes": [
            "tzabarco",
            "tome"
        ],
        "tags": [
            "Modern",
            "Romantic"
        ],
        "name": "Opera D'Arte Bridal ",
        "originalTemplateUrl": "http://www.wix.com/website-template/view/html/1730",
        "thumbnailUrl": "https://dl.dropboxusercontent.com/u/14072206/wix/Wix%20Inspire/web_0006_05.jpg",
        "url": "http://www.operadartebridal.com/",
        "views": 6
    },
    {
        "authorUserName": "Dogan Koslu",
        "avatarUrl": "https://dl.dropboxusercontent.com/u/14072206/wix/Wix%20Inspire/Users/Test-new-mobile_0016_Layer-Comp-17.png",
        "category": "Business",
        "description": "Tangerine Apps is a combination of the best of both worlds, providing top notch entertainment and enterprise apps in today's mobile world. ",
        "id": 4,
        "likes": [
            "Shusha2",
            "Shusha3",
            "Shusha4",
            "Shusha5",
            "Shusha6",
            "Shusha7",
            "Shusha8",
            "Shusha9",
            "Shusha10"
        ],
        "tags": [
            "Colorful",
            "Fun",
            "Video Background"
        ],
        "name": "Tangerine Apps",
        "originalTemplateUrl": "http://www.wix.com/website-template/view/html/1732",
        "thumbnailUrl": "https://dl.dropboxusercontent.com/u/14072206/wix/Wix%20Inspire/tangerine.jpg",
        "url": "http://tangerineapps.wix.com/tangerine-apps",
        "views": 1
    },
    {
        "authorUserName": "Asi Harari",
        "avatarUrl": "https://dl.dropboxusercontent.com/u/14072206/wix/Wix%20Inspire/Users/Test-new-mobile_0013_Layer-Comp-14.png",
        "category": "Online Store",
        "description": "Visual art, at its base, is a form of an unmediated and silent dialogue between the artwork and the observer. Hence, typography prints, which inundate our visual world over the last decade are simply pure propaganda.",
        "id": 5,
        "likes": [
            "Shusha10",
            "Shusha11",
            "Shusha1",
            "Shusha2",
            "Shusha3",
            "Shusha4"
        ],
        "tags": [
            "Minimal",
            "Clean"
        ],
        "name": "Asi Harari",
        "originalTemplateUrl": "http://www.wix.com/website-template/view/html/726",
        "thumbnailUrl": "https://dl.dropboxusercontent.com/u/14072206/wix/Wix%20Inspire/frames.jpg",
        "url": "http://www.asiharari.com/",
        "views": 18
    },
    {
        "authorUserName": "Turtle Bay",
        "avatarUrl": "https://dl.dropboxusercontent.com/u/14072206/wix/Wix%20Inspire/Users/Test-new-mobile_0019_Layer-Comp-20.png",
        "category": "Accomodation",
        "description": "We are fortunate to be the exclusive Resort in the Cayos Cochinos archipelago, and we do not take this responsibility lightly.",
        "id": 6,
        "likes": [
            "tzabarco",
            "tome",
            "Shusha"
        ],
        "tags": [
            "Colorful",
            "Modern",
            "Parallax",
            "Scroll"
        ],
        "name": "Turtle Bay Eco Resort",
        "originalTemplateUrl": "http://www.wix.com/website-template/view/html/1730",
        "thumbnailUrl": "https://dl.dropboxusercontent.com/u/14072206/wix/Wix%20Inspire/web_0005.jpg",
        "url": "http://www.turtlebayecoresort.com",
        "views": 5
    },
    {
        "authorUserName": "ByTess",
        "avatarUrl": "https://dl.dropboxusercontent.com/u/14072206/wix/Wix%20Inspire/Users/Test-new-mobile_0009_Layer-Comp-10.png",
        "category": "Online Store",
        "description": "FIROUZÈ  is a Dutch brand of luxurious lingerie and refine bodywear founded by Firouzè Akhbari.",
        "id": 7,
        "likes": [
            "tzabarco",
            "tome",
            "Shusha",
            "Shusha1",
            "Shusha2",
            "Shusha3",
            "Shusha4",
            "Shusha5",
            "Shusha6",
            "Shusha7",
            "Shusha8",
            "Shusha9",
            "Shusha10"
        ],
        "tags": [
            "B&W",
            "Clean",
            "Video Background"
        ],
        "name": "FIROUZÈ",
        "originalTemplateUrl": "http://www.wix.com/website-template/view/html/1721",
        "thumbnailUrl": "https://dl.dropboxusercontent.com/u/14072206/wix/Wix%20Inspire/Design_lingerie.jpg",
        "url": "http://www.firouzeakhbari.com/",
        "views": 19
    },
    {
        "authorUserName": "Demi Watson",
        "avatarUrl": "https://dl.dropboxusercontent.com/u/14072206/wix/Wix%20Inspire/Users/Test-new-mobile_0006_Layer-Comp-7.png",
        "category": "Design",
        "description": "Here at Moss Botanic Design, we craft bespoke terrariums. Our philosophy is one of relative minimalism. They say less is more. Using only the finest locally sourced materials, we let imagination guide our process. Each tiny garden is 100% unique. No two the same. ",
        "id": 8,
        "likes": [
            "Shusha8",
            "Shusha5",
            "Shusha9",
            "Shusha10",
            "Shusha11",
            "Shusha1",
            "Shusha2",
            "Shusha3",
            "Shusha4"
        ],
        "tags": [
            "Minimal",
            "Clean"
        ],
        "name": "Moss Botanic Design",
        "originalTemplateUrl": "http://www.wix.com/website-template/view/html/1592",
        "thumbnailUrl": "https://dl.dropboxusercontent.com/u/14072206/wix/Wix%20Inspire/Botanic_design.jpg",
        "url": "http://www.mossbotanicdesign.com/",
        "views": 5
    },
    {
        "authorUserName": "Madeleine Etter",
        "avatarUrl": "https://dl.dropboxusercontent.com/u/14072206/wix/Wix%20Inspire/Users/Test-new-mobile_0007_Layer-Comp-8.png",
        "category": "Online Store",
        "description": "While designs tend to be quirky and a little twisted, it’s equally important that the pieces be wearable and interchangeable. Phyllis + Hazel strives to create jewelry that will stand the test of time, while maintaining a distinctly handmade and artful quality.",
        "id": 9,
        "likes": [
            "tzabarco",
            "tzabarco1",
            "tzabarco2"
        ],
        "tags": [
            "Clean",
            "Minimal",
            "Classic"
        ],
        "name": "Phyllis & Hazel",
        "originalTemplateUrl": "http://www.wix.com/website-template/view/html/1631",
        "thumbnailUrl": "https://dl.dropboxusercontent.com/u/14072206/wix/Wix%20Inspire/web_0009_02.jpg",
        "url": "http://www.phyllisandhazel.com/",
        "views": 9
    },
    {
        "authorUserName": "Kuppa",
        "avatarUrl": "https://dl.dropboxusercontent.com/u/14072206/wix/Wix%20Inspire/Users/men1.png",
        "category": "Restaurant",
        "description": "We’re constantly working to explore exciting and exotic new varieties of coffee.  We work closely with a number of reputable roasteries, including Notes, Square Mile, Origins, and others to bring you the most exquisite beans from around the world.",
        "id": 10,
        "likes": [
            "tzabarco",
            "tome",
            "Shusha",
            "Shusha1",
            "Shusha2",
            "Shusha3"
        ],
        "tags": [
            "Parallax",
            "Video Background",
            "Modern"
        ],
        "name": "Kuppa",
        "originalTemplateUrl": "http://www.wix.com/website-template/view/html/1702",
        "thumbnailUrl": "https://dl.dropboxusercontent.com/u/14072206/wix/Wix%20Inspire/Kuppa.jpg",
        "url": "http://www.kuppacoffee.uk/",
        "views": 17
    },
    {
        "authorUserName": "Seven Grams Caffé",
        "avatarUrl": "",
        "category": "Restaurant",
        "description": "Our greatest passions in life are fragrant espressos and decadent baked goods, and we’ve had enough with high-quality coffee places that offer lackluster, outsourced pastries, and high-end bakeries that offer burnt, sub-par brews. So we decided to do something about it.",
        "id": 11,
        "likes": [
            "Shusha10",
            "Shusha11",
            "Shusha1",
            "Shusha2",
            "Shusha3",
            "Shusha4",
            "Shusha5",
            "Shusha6"
        ],
        "tags": [
            "Modern",
            "Image Background",
            "Colorful"
        ],
        "name": "Seven Grams",
        "originalTemplateUrl": "http://www.wix.com/website-template/view/html/1266",
        "thumbnailUrl": "https://dl.dropboxusercontent.com/u/14072206/wix/Wix%20Inspire/web_0001_10.jpg",
        "url": "http://www.sevengramscaffe.com/",
        "views": 3
    },
    {
        "authorUserName": "Tina Libby",
        "avatarUrl": "https://dl.dropboxusercontent.com/u/14072206/wix/Wix%20Inspire/Users/Test-new-mobile_0014_Layer-Comp-15.png",
        "category": "Online Store",
        "description": "We offer custom calligraphy, bespoke paper goods, editorial support, bookbinding, branding and logo design.",
        "id": 12,
        "likes": [
            "tzabarco",
            "tome"
        ],
        "tags": [
            "Colorful",
            "Artistic",
            "Dark",
            "Modern",
            "Parallax"
        ],
        "name": "Dear Paperie",
        "originalTemplateUrl": "http://www.wix.com/website-template/view/html/1724",
        "thumbnailUrl": "https://dl.dropboxusercontent.com/u/14072206/wix/Wix%20Inspire/flowers.jpg",
        "url": "http://www.dearpaperie.com/",
        "views": 8
    },
    {
        "authorUserName": "Larissa Rios",
        "avatarUrl": "https://dl.dropboxusercontent.com/u/14072206/wix/Wix%20Inspire/Users/Test-new-mobile_0000_Layer-Comp-2.png",
        "category": "Design",
        "description": "Working as a freelancer in web design for two years. I build beautiful and intelligent websites and logos, besides producing content for social networks.",
        "id": 13,
        "likes": [
            "tzabarco",
            "tome",
            "Shusha",
            "Shusha1"
        ],
        "tags": [
            "Colorful",
            "Clean",
            "Scroll"
        ],
        "name": "Larissa Rios - Web Design",
        "originalTemplateUrl": "http://www.wix.com/website-template/view/html/726",
        "thumbnailUrl": "https://dl.dropboxusercontent.com/u/14072206/wix/Wix%20Inspire/web_0000_11.jpg",
        "url": "http://www.larissarios.com/",
        "views": 23
    },
    {
        "authorUserName": "Sierra Rich",
        "avatarUrl": "https://dl.dropboxusercontent.com/u/14072206/wix/Wix%20Inspire/Users/Test-new-mobile_0002_Layer-Comp-4.png",
        "category": "Business",
        "description": "For years, Sierra has been utilizing her knowledge in the health and fitness industry to help better the lives of those around her. She spent many years in Michigan and Colorado as a gymnastic instructor before moving to Phoeniz, AZ. ",
        "id": 14,
        "likes": [
            "tzabarco",
            "tome",
            "Shusha",
            "Shusha1",
            "Shusha2",
            "Shusha3"
        ],
        "tags": [
            "Colorful",
            "Scroll"
        ],
        "name": "The Body Movement",
        "originalTemplateUrl": "http://www.wix.com/website-template/view/html/1704",
        "thumbnailUrl": "https://dl.dropboxusercontent.com/u/14072206/wix/Wix%20Inspire/The-body.jpg",
        "url": "http://www.sierrarich.com/",
        "views": 8
    },
    {
        "authorUserName": "PHUSI",
        "avatarUrl": "",
        "category": "Online Store",
        "description": "The craze of 2015 is the ridiculously addictive and fun Self Balancing Electric Scooters. The portable transportation device is very intuitive and reacts to the sway of your body. ",
        "id": 15,
        "likes": [
            "Shusha5",
            "Shusha6",
            "Shusha7",
            "Shusha8",
            "Shusha9",
            "Shusha10"
        ],
        "tags": [
            "Fun",
            "Video Background"
        ],
        "name": "PHUSI SCOOTER",
        "originalTemplateUrl": "http://www.wix.com/website-template/view/html/1702",
        "thumbnailUrl": "https://dl.dropboxusercontent.com/u/14072206/wix/Wix%20Inspire/Scooter.jpg",
        "url": "http://www.phusi.co.uk/",
        "views": 13
    },
    {
        "authorUserName": "Kfir Galatia-Azulay",
        "avatarUrl": "https://dl.dropboxusercontent.com/u/14072206/wix/Wix%20Inspire/Users/Test-new-mobile_0017_Layer-Comp-18.png",
        "category": "Design",
        "description": "The K.O.T Project is a young and fresh studio for architecture and interior Design, That specialize in projects of all sizes.",
        "id": 16,
        "likes": [
            "Shusha5",
            "Shusha6",
            "Shusha7",
            "Shusha8",
            "Shusha9",
            "Shusha10",
            "Shusha11"
        ],
        "tags": [
            "Minimal",
            "Clean"
        ],
        "name": "The K.O.T Project",
        "originalTemplateUrl": "http://www.wix.com/website-template/view/html/1730",
        "thumbnailUrl": "https://dl.dropboxusercontent.com/u/14072206/wix/Wix%20Inspire/web_0003_08.jpg",
        "url": "http://www.kotproject.com/",
        "views": 7
    },
    {
        "authorUserName": "Nicola Youd",
        "avatarUrl": "https://dl.dropboxusercontent.com/u/14072206/wix/Wix%20Inspire/Users/women%201.png",
        "category": "Design",
        "description": "Paper Moon is a design studio based in South London, founded by Nicola Youd in 2012. A brand born out of a love of creating through the mediums of drawing, printing and collecting - mixed in with a passion for Scandinavian and Mid-Century design. ",
        "id": 17,
        "likes": [
            "Shusha8",
            "Shusha9",
            "Shusha10",
            "Shusha11"
        ],
        "tags": [
            "Minimal",
            "Clean",
            "Illustration"
        ],
        "name": "Paper Moon",
        "originalTemplateUrl": "http://www.wix.com/website-template/view/html/1730",
        "thumbnailUrl": "https://dl.dropboxusercontent.com/u/14072206/wix/Wix%20Inspire/Paper_moon.jpg",
        "url": "http://www.papermoonillustration.com/",
        "views": 20
    },
    {
        "authorUserName": "Sarya Nadina Fark",
        "avatarUrl": "https://dl.dropboxusercontent.com/u/14072206/wix/Wix%20Inspire/Users/women%201.png",
        "category": "Photography",
        "description": "Here you will find several photos on topics lifestyle, food, deco and animals. ",
        "id": 18,
        "likes": [
            "Shusha8",
            "Shusha9",
            "Shusha10",
            "Shusha11",
            "Shusha1",
            "Shusha2",
            "Shusha3",
            "Shusha4"
        ],
        "tags": [
            "Minimal",
            "Clean"
        ],
        "name": "Sarya Nadina Fark - Fotografie",
        "originalTemplateUrl": "http://www.wix.com/website-template/view/html/729",
        "thumbnailUrl": "https://dl.dropboxusercontent.com/u/14072206/wix/Wix%20Inspire/Food_graphy.jpg",
        "url": "http://www.snapshot-fotography.com/",
        "views": 4
    },
    {
        "authorUserName": "Daily Smoothie Club",
        "avatarUrl": "",
        "category": "Restaurant",
        "description": "Daily Smoothie Club was created to bring everyone a more convienient way to keep healthy with a tropical boost everyday. Our ingredients are fresh, organic and delicious. ",
        "id": 19,
        "likes": [
            "Shusha10",
            "Shusha11",
            "Shusha1",
            "Shusha2",
            "Shusha3",
            "Shusha4",
            "Shusha",
            "Shusha5",
            "Shusha6",
            "Shusha7",
            "Shusha8",
            "Shusha9"
        ],
        "tags": [
            "Modern",
            "Video Background",
            "Colorful"
        ],
        "name": "Daily Smoothie Club",
        "originalTemplateUrl": "http://www.wix.com/website-template/view/html/1732",
        "thumbnailUrl": "https://dl.dropboxusercontent.com/u/14072206/wix/Wix%20Inspire/web_0004_07.jpg",
        "url": "http://www.dailysmoothieclub.com/",
        "views": 19
    },
    {
        "authorUserName": "KIZ Musique",
        "avatarUrl": "",
        "category": "Music",
        "description": "--",
        "id": 20,
        "likes": [
            "Shusha2",
            "Shusha3",
            "Shusha4",
            "Shusha",
            "Shusha5",
            "Shusha6",
            "Shusha7",
            "Shusha8",
            "Shusha9"
        ],
        "tags": [
            "Modern",
            "Clean"
        ],
        "name": "KIZ Musique",
        "originalTemplateUrl": "http://www.wix.com/website-template/view/html/1730",
        "thumbnailUrl": "https://dl.dropboxusercontent.com/u/14072206/wix/Wix%20Inspire/web_0002_09.jpg",
        "url": "http://www.kizmusique.com/",
        "views": 13
    },
    {
        "authorUserName": "Horus Capital",
        "avatarUrl": "https://dl.dropboxusercontent.com/u/14072206/wix/Wix%20Inspire/Users/Test-new-mobile_0004_Layer-Comp-5.png",
        "category": "Business",
        "description": "We are a private equity and alternative asset management firm based in London and operating across Europe, managing significant assets on behalf of private and institutional investors.",
        "id": 21,
        "likes": [
            "Shusha10",
            "Shusha11",
            "Shusha12",
            "Shusha1",
            "Shusha2",
            "Shusha3",
            "Shusha4",
            "Shusha",
            "Shusha5",
            "Shusha6",
            "Shusha7",
            "Shusha8",
            "Shusha9"
        ],
        "tags": [
            "Modern",
            "Clean"
        ],
        "name": "Horus Capital",
        "originalTemplateUrl": "http://www.wix.com/website-template/view/html/1723",
        "thumbnailUrl": "https://dl.dropboxusercontent.com/u/14072206/wix/Wix%20Inspire/Capital.jpg",
        "url": "http://www.horuscapital.co.uk/",
        "views": 25
    }
];
export default data;