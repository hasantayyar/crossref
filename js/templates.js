
var Templates = {};

$(function() {
	$("[data-template]").each(function loadTemplate() {
		var template = $(this);
		Templates[template.data("template")] = Handlebars.compile(template.html());
	});
});

Handlebars.registerHelper("ifOr", function(v1, v2, options) {
    return v1 || v2 ? options.fn(this) : options.inverse(this);
});

Handlebars.registerHelper("ifEqual", function(a, b, options) {
    return (a == b) ? options.fn(this) : options.inverse(this);
});

Handlebars.registerHelper("eachProperty", function(context, options) {
    var ret = "";

    for (var prop in context) {
        ret += options.fn({ property: prop, value: context[prop] });
    }

    return ret;
});

Handlebars.registerHelper("pluralise", $.pluralise);
