const gear = [{
    name: "Camping Tents",
    imgName: "campTent.jpg",
    link: "",
    description: "Tent Info",
    technologies: "Camping"
},
{
    name: "Coolers",
    imgName: "cooler.jpg",
    link: "",
    description: "Cooler Info",
    technologies: "Camping"
},
{
    name: "Portable Grills",
    imgName: "portableBBQ.jpg",
    link: "",
    description: "Grill Info",
    technologies: "Cookware"
},
{
    name: "Foldable Chairs",
    imgName: "foldingChair.jpg",
    link: "",
    description: "Chair Info",
    technologies: "Camping"
}
];

//"EquipRENT is so AWESOME!" -Satisfied Customer', '"I get to try things without having to buy things." -Thrill Seeker', '"My stuff does not have to collect dust anymore. Instead I get to collect money!" -Money Maker;


const imageLocationGear = "./assets/img/gear/";


$(document).ready(function() {

    $(window).scroll(function () {
        $(".info-section").css("opacity", 1 - $(window).scrollTop() / 250);
        $(".links-section").css("opacity", 1 - $(window).scrollTop() / 250);
        $(".headline").css("opacity", 1 - $(window).scrollTop() / 250);
      });

    for (let i = 0; i <  gear.length ; i++) {

        let name = gear[i].name;
        let imgName = gear[i].imgName;
        let link = gear[i].link;
        let description = gear[i].description;
        let technologies = gear[i].technologies;

        let mainDiv = $("<div>");

        let imgDiv = $("<div>");
        let imgTag = $("<img>");
        let imgATag = $("<a>");
        imgTag.attr("src", imageLocationGear + imgName);
        imgATag.attr("href", link).attr("target", "_blank");
        imgATag.append(imgTag);
        imgDiv.append(imgATag);

        let nameDiv = $("<div>");
        let nameHTag = $("<h3>");
        nameHTag.text(name);
        nameDiv.append(nameHTag).addClass("gear-name");

        let linksDiv = $("<div>");
        let linkATag = $("<a>");
        linkATag.attr("href", link).text(link).attr("target", "_blank");
        linksDiv.append(linkATag).addClass("link-div");

        let descriptionDiv = $("<div>");
        let descPTag = $("<p>");
        descPTag.text(description);
        descriptionDiv.append(descPTag).addClass("description-div");

        let techDiv = $("<div>");
        let techPTag = $("<p>");
        techPTag.text(technologies);
        techDiv.append(techPTag).addClass("description-div");


        $(mainDiv).append(imgDiv, nameDiv, linksDiv, descriptionDiv, techDiv);
        $("#gear-area").append(mainDiv);

    }


});