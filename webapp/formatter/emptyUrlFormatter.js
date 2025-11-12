sap.ui.define([], function () {
    "use strict";
    return {
        formatEmptyUrl: function (model) {
            if (!model.Url) return model.Url;
            
            return "www." + model.Carrname + ".com"
        },
    };
});