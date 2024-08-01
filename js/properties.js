let allProperties = [
    {
        property_name: "C21MALL",
        property_url: "/C21MALL.html",
        property_img: "/img/properties/C21/Images/main.jfif",
        property_address: "94-104, Vijay Nagar, Scheme 54 PU4, Indore, Madhya Pradesh 452010",
        featured_amenities: ["Entertainment Galore", "Financial Convenience", "Food for Every Mood"],
        opening_years: 2010,
        is_featured: true
    },
    {
        property_name: "C21 BUSINESS PARK",
        property_url: "/c21businesspark.html",
        property_img: "/img/properties/C21 Business Park/Images/main.jpg",
        property_address: "Pushp Vihar Colony, Scheme No 131, Indore, Madhya Pradesh 452010",
        featured_amenities: ["Prime Location", "Park & Thrive", "Go Green"],
        opening_years: 2019,
        is_featured: true
    },
    {
        property_name: "C21 ESTATE",
        property_url: "/C21ESTATE.html",
        property_img: "/img/properties/C21 Estate/Images/main.jfif",
        property_address: "QV4X+7R5, Scheme 54 PU4, Indore, Madhya Pradesh 452010",
        featured_amenities: ["Family Fun", "Connect & Celebrate", "Comfort & Safety"],
        opening_years: 2005,
        is_featured: false
    },
    {
        property_name: "AMBER GARDEN",
        property_url: "/AMBERGARDEN.html",
        property_img: "/img/properties/Ambar Garden/Images/main.jpg",
        property_address: "Indore Bypass Rd, Near Best Price Flipkart Wholesale, Hare Krishna Vihar, Nipania, Indore, Madhya Pradesh 452010",
        featured_amenities: ["Indore's premier venue", "Valet Services", "Catering Services"],
        opening_years: 1985,
        is_featured: true
    },
    {
        property_name: "MALHAR MEGA MALL",
        property_url: "/MalharMegaMall.html",
        property_img: "/img/properties/Malhar mega mall/Images/main.jfif",
        property_address: "299A PO, Scheme No.54, Vijay Nagar, Indore, Madhya Pradesh 452010",
        featured_amenities: ["Multiplex Cinema", "Sit-down Resturants", "ATM & Banking Services"],
        opening_years: 2009,
        is_featured: false
    },
    {
        property_name: "REDISSON",
        property_url: "/Redisson.html",
        property_img: "/img/properties/Redisson/Images/main.jpg",
        property_address: "12, Ring Rd, Scheme No 171, Indore, Madhya Pradesh 452010",
        featured_amenities: ["Entertainment at Your Fingertips", "Peace of Mind", "Coffee Connoisseur or Tea Time"],
        opening_years: 1960,
        is_featured: false
    },
    {
        property_name: "SHERATON",
        property_url: "/Sheraton.html",
        property_img: "/img/properties/Sheraton/Images/main.jfif",
        property_address: "Bypass Road, Omaxe City 1, Mayakhedi, Indore, Madhya Pradesh 452016",
        featured_amenities: ["Diverse Delights", "Meetings Made Easy", "Let Us Plan Your Event"],
        opening_years: 2010,
        is_featured: false
    },
    {
        property_name: "BEST PRICE",
        property_url: "/BestPrice.html",
        property_img: "/img/properties/Best price/Images/main.jpg",
        property_address: "Hare Krishna Vihar, Nipania, Indore, Madhya Pradesh 452010",
        featured_amenities: ["Wide Range of Products", "Membership Benefit", "Quality Assurance"],
        opening_years: 2010,
        is_featured: false
    },
    {
        property_name: "TI MALL",
        property_url: "/TIMALL.html",
        property_img: "/img/properties/TGB (The Grand Bhagwati Surat)/Images/main.jpg",
        property_address: "Classic Centre, Opposite Treasure Island, Race Course Road, Indore, Madhya Pradesh 452001",
        featured_amenities: ["Retail Riches", "Fine Dining Delights", "Financial Freedom"],
        opening_years: 2005,
        is_featured: false
    },
    {
        property_name: "TBG SURAT",
        property_url: "/TBGSURAT.html",
        property_img: "/img/properties/TGB (The Grand Bhagwati Surat)/Images/main.jpg",
        property_address: "Magdalla Circle, Dumas Road, Surat-395007",
        featured_amenities: ["Business Productivity", "Spacious banquet halls", "Laundry and dry-cleaning services"],
        opening_years: 1989,
        is_featured: false
    }
];

let propertyHtml = "";
let featuredHtml = "";
let recentHtml = "";

for (let index = 0; index < allProperties.length; index++) {
    const element = allProperties[index];
    let amineties = '';
    element.featured_amenities.forEach(el => {
        amineties += `
        <li>
            - ${el}
        </li>
    `});
    console.log(amineties)
    propertyHtml += `
        <div class="col-lg-4 col-md-6 col-sm-12" >
            <div class="property-box">
                <div class="property-thumbnail">
                    <a href="${element.property_url}" class="property-img">
                        <img class="d-block w-100" src="${element.property_img}" alt="properties">
                    </a>
                </div>
                <div class="detail">
                    <h1 class="title">
                        <a href="${element.property_url}">${element.property_name}</a>
                    </h1>
                    <div class="location">
                        <a href="${element.property_url}">
                            <i class="fa fa-map-marker"></i>${element.property_address}
                        </a>
                    </div>
                    <ul class="">
                        ${
                            amineties
                        }
                    </ul>
                </div>
                <div class="footer clearfix">
                    <div class="pull-right">
                        <a><i class="flaticon-time"></i> ${element.opening_years}</a>
                    </div>
                </div>
            </div>
        </div>
    `;
    if(element.is_featured){
        featuredHtml += `
            <div class="slick-slide-item">
                    <div class="property-box-3">
                        <div class="property-thumbnail">
                            <a href="${element.property_url}" class="property-img">
                                <img class="d-block w-100" src="${element.property_img}" alt="properties">
                                <div class="facilities-list">
                                    <ul>
                                        ${amineties}
                                    </ul>
                                </div>
                            </a>
                        </div>
                        <div class="details">
                            <div class="top">
                                <h1 class="title">
                                    <a href="${element.property_url}">${element.property_name}</a>
                                </h1>
                                <div class="location">
                                    <a href="${element.property_url}" tabindex="0">
                                        <i class="fa fa-map-marker"></i>${element.property_address}
                                    </a>
                                </div>
                            </div>
                            <!-- <div class="footer clearfix">
                                <div class="pull-left days">
                                    <p><i class="flaticon-time"></i> ${element.opening_years}</p>
                                </div>
                            </div> -->
                        </div>
                    </div>
                </div>
        `
    }
    if(element.opening_years >= 2010) {
        recentHtml += `
            <div class="slick-slide-item">
                    <div class="property-box-5">
                        <div class="property-photo">
                            <img class="img-fluid" src="${element.property_img}" alt="properties">
                        </div>
                        <div class="detail">
                            <div class="heading">
                                <h3>
                                    <a href="${element.property_url}">${element.property_name}</a>
                                </h3>
                                <div class="location">
                                    <a href="${element.property_url}">
                                        <i class="fa fa-map-marker"></i>${element.property_address}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        `
    }
    
}

$("#properties-section").html(propertyHtml);
$("#featured-properties").html(featuredHtml);
$("#recently-properties").html(recentHtml);