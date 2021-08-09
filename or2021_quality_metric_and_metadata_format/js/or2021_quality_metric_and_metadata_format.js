
var qualityCheck = (object) => (object.title.toLowerCase().indexOf("good") > -1);

P.implementService("example:metadata:write-store-object-below-xml-cursor", function(item, cursor) {
    cursor.element("title").text(item.title).up().
        element("output_type").text(item.firstType().loadObjectTitleMaybe()).up().
        element("output_quality").text(qualityCheck(item) ? "Good" : "Not good").up();
});

P.implementService("std:action_panel:category:hres:repository_item", function(display, builder) {
    builder.panel(5).element(0, {
        title: "Quality Assessment",
        innerText: qualityCheck(display.object) ? "Output is good" : "Output is not good"
    });
});