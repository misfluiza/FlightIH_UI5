sap.ui.define([
    "sap/ui/model/type/Time",
    "sap/ui/core/format/DateFormat",
], function (Time, DateFormat) {
    "use strict";
    return {
        formatTableDates: function (oDate) {
            console.log(oDate)
            if (!oDate) {
                return "";
            }
            // Convert to JS Date if needed
            var date = new Date(oDate);
            // Format to DD.MM.YYYY (or whatever you prefer)
            var day = String(date.getDate()).padStart(2, "0");
            var month = String(date.getMonth() + 1).padStart(2, "0");
            var year = date.getFullYear();
            return day + "." + month + "." + year;
        },
        formatImage: function(Carrid) {
            // Handle missing value
            if (!Carrid) {
                return "img/default_logo.png";
            }

            // Switch case for image selection
            switch (Carrid) {
                case "LH":
                    return "img/lufthansa.png";
                case "AC":
                    return "img/Logo_airberlin.svg.png";
                default:
                    return "img/default_logo.png";
            }
        }
    };
});