const Product = require('../app/api/models/products')

const mongoose = require('mongoose');

const uri = process.env.ATLAS_URI;
mongoose.connect(`openUri(${uri})`, { useNewUrlParser: true, useCreateIndex: true });

const products = 
    new Product({name: "Travis Scott x Air Jordan 1 Retro High OG 'Mocha'", img_url: "https://image.goat.com/crop/750/attachments/product_template_additional_pictures/images/018/783/118/original/488879_01.jpg.jpeg", description: "The Travis Scott x Air Jordan 1 Retro High features a new look on the iconic silhouette, thanks to an oversized backward-facing Swoosh on the lateral side. A traditionally oriented Swoosh graces the medial side of the upper, which is built with a blend of white leather and brown suede. Additional unique details include a double-layer construction on the collar and Scott’s crudely drawn face logo embossed on the heel."}),
    new Product({name: "Air Fear Of God Raid 'Black'", img_url: "https://image.goat.com/crop/750/attachments/product_template_additional_pictures/images/021/545/556/original/489359_01.jpg.jpeg", description: "Nike and frequent collaborator Fear Of God designer, Jerry Lorenzo, joined forces once again for the Air Fear Of God Raid 'Black' sneaker. Released in May 2019, the uniquely designed silhouette is inspired by one of Lorenzo’s favorite Nike designs, the Air Raid. Outfitted with a cross strap suede and textile upper above; below, its equipped with a double stacked Zoom Air unit in heel for a retro, yet futuristic finish."}),
    new Product({name: "OFF-WHITE x Air Jordan 1 Retro High OG 'UNC'", img_url: "https://image.goat.com/crop/750/attachments/product_template_additional_pictures/images/012/219/525/original/335047_01.jpg.jpeg", description: "Inspired by Michael Jordan’s alma mater, the Off-White x Air Jordan 1 Retro High OG ‘UNC’ carries a classic two-tone composition, filtered through Virgil Abloh’s unique design prism. The process involves taking a white leather base with dark powder blue overlays and adding embellishments that convey an expressive, handmade quality. They include detached Wings, a floating Swoosh, and lines of text on the medial-side quarter panel delineating the taxonomy of the shoe."}),
    new Product({name: "Travis Scott x Air Jordan 4 Retro 'Cactus Jack'", img_url: "https://image.goat.com/crop/750/attachments/product_template_additional_pictures/images/012/478/528/original/365514_01.jpg.jpeg", description: "Music artist Travis Scott hails from Houston, where the Oilers used to take the field in red, white and blue uniforms. The Travis Scott x Air Jordan 4 Retro 'Cactus Jack' colorway pays tribute to the city’s bygone football team with a Durabuck leather upper dressed in University Blue and a Varsity Red insole. The black lace cage and a heel panel feature a light blue speckle pattern. Cactus Jack branding appears on the left heel in Varsity Red, with a matching Jumpman logo on the right."}),
    new Product({name: "Air Jordan 1 Retro High OG 'Bred Toe'", img_url: "https://image.goat.com/crop/750/attachments/product_template_additional_pictures/images/010/222/921/original/144690_01.jpg.jpeg", description: "Arriving in stores in February 2018, the Air Jordan 1 Retro High OG ‘Bred Toe’ is a new spin on a classic design. The Chicago Bulls-inspired colorway combines elements of the ‘Bred’ and ‘Black Toe’ editions of the Air Jordan 1, executed on a premium leather build. The high-top features a black Swoosh on the white quarter panel, along with contrasting pops of red on the toe box, heel, collar, and outsole. The shoe stays true to its OG 1985 roots with Nike Air branding on the tongue tag and sockliner."}),
    new Product({name: "Air Jordan 1 Retro High OG 'Shadow' 2018", img_url: "https://image.goat.com/crop/750/attachments/product_template_additional_pictures/images/011/120/009/original/218099_01.jpg.jpeg", description: "This Nike Air Jordan 1 Retro High OG 'Shadow' 2018 is a retro re-release of an original 1985 colorway. The shoe features a black and medium grey leather upper with a white midsole and black outsole. It also features OG Nike Air branding on the tongue and the Wings logo on the ankle collar. It was last retroed in 2013, and a low-top version dropped in 2015."}),
    new Product({name: "Travis Scott x Air Force 1 'Sail'", img_url: "https://image.goat.com/crop/750/attachments/product_template_additional_pictures/images/013/832/094/original/306892_01.jpg.jpeg", description: "The ‘Sail’ colorway of Travis Scott’s Air Force 1 represents the Houston rapper’s second collaboration with Nike on the classic silhouette. Aside from swapping out the all-white finish of its predecessor with slightly darker Sail, the new model is mostly unchanged. Tonal canvas construction is accented with removable Swooshes and tongue patches, while the shiny lace jewels give a nod to Scott’s signature grill."}),
    new Product({name: "OFF-WHITE x Air VaporMax 'Part 2'", img_url: "https://image.goat.com/crop/750/attachments/product_template_additional_pictures/images/010/564/076/original/303229_01.jpg.jpeg", description: "The April 2018 version of Virgil Abloh’s all-white Air VaporMax is mostly unchanged from the original pair from ‘The Ten.’ Stripped of color, the performance runner brings raw materials and unique details to the forefront, including an exposed-foam tongue, translucent Swoosh and off-white suede eyestay. Printed above the clear VaporMax unit, the quotation ‘AIR’ print on the lateral side takes on an extra meta dimension."}),
    new Product({name: "BAPE X FCRB TEAM HOODIE", img_url: "https://cdn.shopify.com/s/files/1/0214/3706/products/001PPF231901_BLK_A_1024x1024.jpg?v553287763", description: "Cut and Sewn BAPE X FCRB Team Hoodie - Mens - Black"}),
    new Product({name: "Atmos x Air Jordan x Air Max 1 'Elephant'", img_url: "https://image.goat.com/crop/750/attachments/product_template_pictures/images/002/949/553/original/923093_001.png.png", description: "Back in 2006, Japanese retailer atmos partnered up with Nike for an exclusive colorway that infused the classic Air Max 1 silhouette with unique features. To celebrate the 10-year anniversary of the collaboration, they re-released the original colorway. The atmos x Air Jordan x Air Max 1 'Elephant' features a white-based upper with black suede overlays on the side, forefoot, and heel. The sneaker also boasts the iconic elephant print along the mudguard and ankle collar, Clear Jade details on the branding, and a partially encapsulated Air unit in the midsole. A Jumpman logo can be found underneath the translucent sole."}),
    new Product({name: "Air Jordan 4 Retro OG 'Bred' 2019", img_url: "https://image.goat.com/crop/750/attachments/product_template_additional_pictures/images/020/806/492/original/461782_01.jpg.jpeg", description: "The 2019 edition of the Air Jordan 4 ‘Bred’ celebrates the 30th anniversary of the classic silhouette, appearing in the same colorway that Michael Jordan wore when he sank ‘The Shot’ during the first round of the 1989 NBA playoffs. It’s rendered in a build that’s faithful to the original, complete with a black nubuck upper, visible Air Sole cushioning underfoot and Nike Air branding on the heel."}),
    new Product({name: "Yeezy Boost 700 'Wave Runner'", img_url: "https://image.goat.com/crop/750/attachments/product_template_additional_pictures/images/014/507/858/original/195483_01.jpg.jpeg", description: "This inaugural colorway of Kanye West’s Yeezy Wave Runner 700 launched in November 2017, following a public debut earlier in the year as part of the Yeezy Season 5 runway show. The sneaker’s retro-inspired lines worked in tandem with a chunky silhouette reminiscent of an earlier era. A mesh base is finished in grey on the quarter panels and bright blue and teal on the forefoot. Suede overlays arrive on the toe and heel accented grey leather eyestays. Other details include neon green laces, a bulky white midsole, and pops of black and bright orange."}),
    new Product({name: "Air Jordan 1 Retro High OG 'Shattered Backboard Away'", img_url: "https://image.goat.com/crop/750/attachments/product_template_additional_pictures/images/008/491/815/original/70878_01.jpg.jpeg", description: "In 1985 on a Nike Europe tour, Michael Jordan shattered a backboard when throwing down a monstrous dunk while wearing an orange, black, and white uniform. Commemorating the moment and uniform, a 2015 Air Jordan 1 'Shattered Backboard' (aka 'Shattered Backboard' 1.0) sneaker was released. Shortly after in the Fall of 2016, an Air Jordan 1 'Shattered Backboard Away' (aka 'Reverse' and 'Shattered Backboard 2.0') was released. This sneaker keeps the black laces and Nike branding, but swaps out the orange toe box and black around the toe and tongue for white."}),
    new Product({name: "Fragment Design x Air Jordan 1 Retro High OG 'Fragment'", img_url: "https://image.goat.com/crop/750/attachments/product_template_additional_pictures/images/008/488/331/original/14957_01.jpg.jpeg", description: "The Nike Fragment Design x Air Jordan 1 Retro High OG is the first collaboration between Hiroshi Fujiwara's Fragment Design and Brand Jordan. One of the most coveted Air Jordan 1 colorwanew ys everd{, the design combines the OG black-toe color blocking with royal blue accents. Released in limited quantities in December 2014, the design also includes Nike Air branding on the tongue and a Fragment Design logo at the heel."}),
    new Product({name: "Sean Wotherspoon x Air Max 1/97 'Sean Wotherspoon'", img_url: "https://image.goat.com/crop/750/attachments/product_template_additional_pictures/images/011/255/124/original/329483_01.jpg.jpeg", description: "Released for Air Max Day in 2018, this Sean Wotherspoon designed hybrid won the ‘Vote Forward’ campaign. This new creation combines the upper of an Air Max 97 with an Air Max 1 sole. The shoe features a retro-inspired multicolored corduroy upper with corduroy pull tabs, Velcro tongue patches, and an Infrared Air unit."})
]

const done = 0;
for(let i = 0; i < products.length; i++){
    products[i].save(function(err, result) {
        done++;
        if(done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}

