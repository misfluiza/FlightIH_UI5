sap.ui.define([
    "sap/ui/core/mvc/Controller",
	"sap/ui/core/syncStyleClass",
	'sap/ui/model/json/JSONModel'
], (Controller) => {
    "use strict";

    return Controller.extend("flightui5ih.controller.Detail", {
        onInit() {
            var oFlightJSONModel = new sap.ui.model.json.JSONModel();
            var that = this;
            //read the data from Back End (READ_GET_ENTITYSET)
            var oDataModel = this.getOwnerComponent().getModel();
            var sPath = "/FlightDetails";
            oDataModel.read(sPath, {
                success: function (oresponse) {
                    console.log(oresponse);
                    //attach the data to the model
                    oFlightJSONModel.setData(oresponse.results);
                    //attach the Model to the View
                    that.getView().setModel(oFlightJSONModel, "flightdetailDataModel");
                },
                error: function (oerror) {
                    console.log(oerror)
                    console.log("Error")
                },
            });

        }
    });
});