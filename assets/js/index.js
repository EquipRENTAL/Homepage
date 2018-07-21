const browse = [{
    name: "Camping Tents",
    imgName: "chefsden.jpg",
    description: "Tent Info",
    technologies: "Camping"
},
{
    name: "Coolers",
    imgName: "knockout.jpg",
    description: "Cooler Info",
    technologies: "Camping"
},
{
    name: "Portable Grills",
    imgName: "scrapoogle.jpg",
    description: "Grill Info",
    technologies: "Cookware"
},
{
    name: "Foldable Chairs",
    imgName: "freight-sys.jpg",
    description: "Chair Info",
    technologies: "Camping"
}
];



const logos = [{
    name: "Camping Gear",
    img: "daves_logo_lighter.png"
},
{
    name: "Cookware",
    img: "jam.png"
},
{
    name: "Tables and Chairs",
    img: "Material Memories.jpg"
},
{
    name: "Water Sports",
    img: "rhe.png"
},
];


const skills = ["EquipRENT is so AWESOME!", "I get to try things without having to buy things.", "My stuff doesn't have to collect dust anymore. Instead I get to collect money!"];

const imageLocationBrowse = "./assets/img/browse/";
const imageLocationLogos = "./assets/img/logos/";


$(document).ready(function() {

$(window).scroll(function () {
    $(".info-section").css("opacity", 1 - $(window).scrollTop() / 250);
    $(".links-section").css("opacity", 1 - $(window).scrollTop() / 250);
    $(".headline").css("opacity", 1 - $(window).scrollTop() / 250);
  });

for (let i = 0; i <  browse.length ; i++) {

    let name = browse[i].name;
    let imgName = browse[i].imgName;
    let description = browse[i].description;
    let technologies = browse[i].technologies;

    let mainDiv = $("<div>");

    let imgDiv = $("<div>");
    let imgTag = $("<img>");
    let imgATag = $("<a>");
    imgTag.attr("src", imageLocationWebsite + imgName);
    imgATag.attr("href", link).attr("target", "_blank");
    imgATag.append(imgTag);
    imgDiv.append(imgATag);

    let nameDiv = $("<div>");
    let nameHTag = $("<h3>");
    nameHTag.text(name);
    nameDiv.append(nameHTag).addClass("webapp-name");

    let linksDiv = $("<div>");
    let linkATag = $("<a>");
    linkATag.attr("href", link).text(link).attr("target", "_blank");
    linksDiv.append(linkATag).addClass("link-div");

    let gitDiv = $("<div>");
    let gitATag = $("<a>");
    gitATag.attr("href", github).text(github).attr("target", "_blank");
    gitDiv.append(gitATag).addClass("link-div");

    let descriptionDiv = $("<div>");
    let descPTag = $("<p>");
    descPTag.text(description);
    descriptionDiv.append(descPTag).addClass("description-div");

    let techDiv = $("<div>");
    let techPTag = $("<p>");
    techPTag.text(technologies);
    techDiv.append(techPTag).addClass("description-div");


    $(mainDiv).append(imgDiv, nameDiv, linksDiv, gitDiv, descriptionDiv, techDiv);
    $("#browse-area").append(mainDiv);

}

for(let i = 0; i < logos.length; i++) {

    let mainDiv = $("<div>");

    let name = logos[i].name;
    let imgName = logos[i].img;

    let imgDiv = $("<div>");
    let imgTag = $("<img>");
    imgTag.attr("src", imageLocationLogos + imgName);
    imgDiv.append(imgTag);

    let nameDiv = $("<div>");
    let nameHTag = $("<h4>");
    nameHTag.text(name);
    nameDiv.append(nameHTag).addClass("description-div");

    $(mainDiv).append(nameDiv, imgDiv);
    $("#logos-area").append(mainDiv);


}

for (let i = 0; i < skills.length; i++){
    let ulTag = $("<ul>");
    let liTag = $("<li>");
    liTag.text(skills[i]);
    ulTag.append(liTag);
    $("#skills-area").append(ulTag);
}




});