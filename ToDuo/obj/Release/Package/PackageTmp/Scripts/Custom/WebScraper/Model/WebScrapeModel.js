let baseUrl = document.getElementById('HiddenCurrentUrl').value;


export class WebScraper {
    constructor() {

    }
    getAdventureList() {
        let Adventures = [
            {
                OwnerID: 3,
                Title: 'Coal Creek Falls Trail',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/JwA7L8dgvjv8T_2rE_wohg/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/coal-creek-falls-trail-newcastle?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'Poo Poo Point - Chirico Trail',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/ppRsxGYmhAjscWb2kXSswA/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/poo-poo-point-chirico-trail-issaquah?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'Kerry Park',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/fdeuZczxbloSEUESbmJ3Hw/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/kerry-park-seattle?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'Washington Park Arboretum',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/fhrhAcMjRP5a4yYP5IlhqA/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/washington-park-arboretum-seattle-2?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'Frink Park',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/Uj5GNAbNrnRJwwo5BaToCA/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/frink-park-seattle?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'The Forbes Creek Stairs',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/jAJAy0uTJYEBY0oqeIocYQ/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/the-forbes-creek-stairs-kirkland?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'Hamilton Viewpoint Park',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/X759qHGRZ003PIoSTbS3rA/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/hamilton-viewpoint-park-seattle?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'Golden Gardens Park',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/Yuev1J2vY6ujmqeih86n_g/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/golden-gardens-park-seattle?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'Carkeek Park',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/936HSZxvgnoVXqCj2mVR6w/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/carkeek-park-seattle?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'Gas Works Park',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/yCD8wOEw_MwhHi_-JsDPEQ/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/gas-works-park-seattle-2?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'Green Lake Park',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/X34sXMEWIF_bDgdiDrKthA/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/green-lake-park-seattle?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'Rattlesnake Mountain',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/D4duf8Px5meeKCzu7qhs3w/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/rattlesnake-mountain-issaquah?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'Tiger Mountain Family Nudist Park',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/B01oIt8GrQRezXGM2eA6Bg/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/tiger-mountain-family-nudist-park-issaquah?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'Dickerson Creek Waterfall',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/3GDtGghTOehz3VSUweN8GQ/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/dickerson-creek-waterfall-bremerton?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'Alki Beach Park',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/7XIhbGCiZNzqO3BOTtDr8g/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/alki-beach-park-seattle?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'Elliott Bay Trail',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/KamQPkLG8Ur7Tm3GZVdAQg/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/elliott-bay-trail-seattle?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'Olympic Sculpture Park',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/y-7AfU1oBHNQ58JttXMONg/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/olympic-sculpture-park-seattle?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'Saint Edward State Park',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/c0Fpz5sIBlyAlBcnjAdSCw/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/saint-edward-state-park-kenmore?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'Sammamish River Trail',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/8QYsuenW14kW9m7nNENo0Q/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/sammamish-river-trail-woodinville-2?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'Seward Park',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/Q9hrq2qiA74tm1QdGKildw/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/seward-park-seattle-3?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'Meadowdale Beach Park',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/r1RRyoF8lBk69uxn-4W2LQ/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/meadowdale-beach-park-edmonds?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'Cougar Mountain Regional Wildland Park',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/8ErM6HzyjsYYxdk5WESndg/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/cougar-mountain-regional-wildland-park-issaquah?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'Watershed Preserve',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/KMBoUVO8ykNk6O5CkzE9yQ/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/watershed-preserve-redmond?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'Gnomes Trail',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/LVFP9RQb2hXjdtaBfTXd9A/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/gnomes-trail-maple-valley?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'Volunteer Park',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/jBAnZu7V_IdO5ww5Cfgjdg/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/volunteer-park-seattle?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'Warren G. Magnuson Park',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/tCICGQ_gseqhCUiIn9sDlw/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/warren-g-magnuson-park-seattle?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'Alki Trail',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/oaSakMre7XpLpRVZqB5_Cw/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/alki-trail-seattle?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'Richmond Beach Saltwater Park',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/fuKFMdbzBboZu0-gjFzv2Q/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/richmond-beach-saltwater-park-shoreline?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'Tiger Mountain State Forest',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/fO1eXzJuDCYOUkyBbME3Aw/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/tiger-mountain-state-forest-snoqualmie?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'Alpine Adventures',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/g07RdTN4A95A9UOmBCaRIw/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/alpine-adventures-gold-bar?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'Poo Poo Point',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/ZaN3s1hC5dQ095LOtelD6A/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/poo-poo-point-issaquah?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'Mt. Baker Ridge Viewpoint',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/t6SS4WC-GdZ3mTDEU12UAw/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/mt-baker-ridge-viewpoint-seattle?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'Anderson Point County Park',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/OErEoddmA_UEXzy5DRNigA/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/anderson-point-county-park-olalla?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'O. O. Denny Park',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/1NXE8o_zscpvJ1Zb1iLyhg/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/o-o-denny-park-kirkland?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'Washington Trails Association',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/Z6YIVtPTlKzr7zwP1JCpXw/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/washington-trails-association-seattle?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'Des Moines Creek Trail',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/iF7xhrCIqJfIC_6TFV6bAA/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/des-moines-creek-trail-des-moines-2?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'Hall’s Hill Lookout Point',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/txc6t8exFeoWM1fUStJ9jw/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/halls-hill-lookout-point-bainbridge-island?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'Interlaken Park',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/j7kbDsq_JQEGyxnKCYthwA/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/interlaken-park-seattle?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'Ella Bailey Park',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/UGX9QDa33NfyOerMFi6jWw/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/ella-bailey-park-seattle?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'Mercer Slough Nature Park',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/8xkPGPglgilw4269a8tXvw/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/mercer-slough-nature-park-bellevue?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'Bloedel Reserve',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/mblP95FOExS0GZn1ImLnTA/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/bloedel-reserve-bainbridge-island?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'Ravenna Park',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/xea35rXU272N72qBjvbM3g/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/ravenna-park-seattle?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'Madrona Park',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/TsMRGamOyRNFQS1mkNm80A/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/madrona-park-seattle?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'Waterfront Park',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/-LWo-wNaEh-CyDHDIi5geA/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/waterfront-park-seattle?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'Belvedere Park',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/4NUXJdxlGEXATG3qb2wTsg/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/belvedere-park-seattle?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'Madison Park Beach',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/_aHoONLxq-Bey6_qDOMHCQ/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/madison-park-beach-seattle-2?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'Wilderness Creek Trail- Cougar Mtn.',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/UCFWCWlzY36biAOqry2MDA/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/wilderness-creek-trail-cougar-mtn-issaquah?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'Southwest County Park',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/TGJCUUT6Dd2kOCnAchalGw/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/southwest-county-park-edmonds?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'Illahee State Park',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/I-mzd9f1ILPw2IPuHroV7A/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/illahee-state-park-bremerton?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'Lake Boren Park',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/IYj9R0r__h_KUDiVX1kHJg/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/lake-boren-park-newcastle?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'Back 40 Outfitters',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/iOQnn8vvw_Dj_oVRhERmcg/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/back-40-outfitters-seattle-3?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'Rose Garden at Woodland Park Zoo',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/SaUqGv3kanfUrHVQ2cJPUA/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/rose-garden-at-woodland-park-zoo-seattle?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'Pine Lake Park',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/PvVzOV4ull3O0DVx26BuDg/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/pine-lake-park-sammamish?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'Ed Munro Seahurst Park',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/rccff1A0zTyfKzqjDs3jQQ/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/ed-munro-seahurst-park-burien?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'Saltwater State Park',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/Tr5gCepsWlUOF_RdTwFN4A/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/saltwater-state-park-des-moines?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'Point Robinson Park',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/BLjUG-pQz3nFycUf1zxsbg/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/point-robinson-park-vashon-island?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'Blue Dog Pond Off-Leash Area',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/d5mUO5_hZQfA-Edsc57zmg/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/blue-dog-pond-off-leash-area-seattle?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'Marine View Park',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/G4E3C23yeBU659CrPjCP0g/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/marine-view-park-normandy-park-4?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'Llandover Woods Greenspace',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/_6Kl1PP_lZqroLsWia-eRg/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/llandover-woods-greenspace-seattle?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'Bainbridge Island Japanese American Exclusion Memorial',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/J2eF6jPE_GdZPernpKjr-Q/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/bainbridge-island-japanese-american-exclusion-memorial-bainbridge-island?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'Moss Bay',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/2tl5drx7OBlTHu7pjg3_Uw/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/moss-bay-seattle-2?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'Mt. Baker Park',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/C6FVscxNrA6GZyYH1a5_uA/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/mt-baker-park-seattle?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'North Creek Trail',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/3F312y7jd5wmzYAkPhKleA/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/north-creek-trail-bothell?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'Kayakers Go Coastal',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/ODvPAMT-l9cbEFyASv6CUQ/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/kayakers-go-coastal-tacoma?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'Luther Burbank Park',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/dRaC-VmjUeihRYC0DPEwrQ/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/luther-burbank-park-mercer-island?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'Lincoln Park',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/1YTObVGXC_zI_WMcxGRIQw/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/lincoln-park-seattle?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'Jefferson Park',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/-eaWzDMm2lGyog_6p1ntAg/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/jefferson-park-seattle?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'West Tiger 3',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/ROfvLt8Ayt94O33Ftl00Zg/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/west-tiger-3-issaquah?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'Al Borlin Park',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/DZmsvrsLVLRYMUpwj8eEjg/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/al-borlin-park-monroe?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'Lord Hill Regional Park',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/FUeY5XEHnxrffbT0frSmNw/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/lord-hill-regional-park-snohomish?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'Redmond Powerline Trail',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/DvnORYDqVclejsP9Zs4wUQ/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/redmond-powerline-trail-redmond?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'Bellevue Downtown Park',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/OZDWjHstllAUCn46gIsrGA/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/bellevue-downtown-park-bellevue?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'Ballard Kayak',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/9onqnrb_SbOHCnw50qRqew/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/ballard-kayak-seattle-4?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'Coal Creek Park',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/PZV1Xb5By5mK-aZ9OgL-6w/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/coal-creek-park-bellevue?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'Farrel-McWhirter Farm Park',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/aSFr9mzRsiRtn9iWQQ_-Ig/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/farrel-mcwhirter-farm-park-redmond?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'Olympic Outdoor Center',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/h2en2dZTQltkuzYP7qrq0g/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/olympic-outdoor-center-port-gamble?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'Clark Lake Park',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/dhrka1NGlrUA0fTnhvMFZw/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/clark-lake-park-kent?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'Kitsap Memorial State Park',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/Qi4GQWV1gIf4lbQeKMJfiQ/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/kitsap-memorial-state-park-poulsbo?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'Redondo Beach',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/oi8_FztZLcIB3L0qgog3KA/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/redondo-beach-des-moines?osq=hiking'
            },
            {
                OwnerID: 3,
                Title: 'Beaver Lake Park',
                ImageURL: 'https://s3-media0.fl.yelpcdn.com/bphoto/gDu1bazlRhLAoJT9XaDvqQ/o.jpg',
                Description: 'No Description listed',
                WebsiteUrl: 'https://www.yelp.com/biz/beaver-lake-park-sammamish?osq=hiking'
            }
        ]

        return Adventures;
    }
}