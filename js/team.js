let allTeam = [
    {
        name: "Shri Karan Singh Chhabra",
        detail_url: "/karan_chhabra.html",
        role: "Key Member",
        image: "/img/avatar/avatar-8.jpg"
    },
    {
        name: "Ms. Riya Chhabra",
        detail_url: "/riya_chhabra.html",
        role: null,
        image: "/img/avatar/avatar-6.jpg"
    },
    {
        name: "Mr. Gurjeet Singh Chhabra",
        detail_url: "/gurjeet_chhabra.html",
        role: "Director",
        image: "/img/avatar/avatar-7.jpg"
    },
];

let teamHtml = "";

for (let index = 0; index < allTeam.length; index++) {
    const element = allTeam[index];
   
    teamHtml += `
        <div class="col-lg-3 col-md-6 col-sm-6">
            <div class="team-1">
                <div class="team-photo">
                    <a href="${element.detail_url}">
                        <img src="${element.image}" alt="agent-2" class="img-fluid">
                    </a>
                </div>
                <div class="team-details">
                    <h5><a href="${element.detail_url}">${element.name}</a></h5>
                    <p> ${element.role == null ? "" : element.role }</p>
                    <ul class="social-list clearfix">
                        <li><a href="#" class="facebook"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="#" class="twitter"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="#" class="instagram"><i class="fa fa-instagram"></i></a></li>
                        <li><a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    `;
    
}

$("#team-section").html(teamHtml);