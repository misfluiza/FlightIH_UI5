sap.ui.define([
    "sap/ui/core/mvc/Controller",
	"sap/ui/core/syncStyleClass",
	'sap/ui/model/json/JSONModel',
    "flightui5ih/formatter/emptyUrlFormatter"
], (Controller, emptyUrlFormatter) => {
    "use strict";

    return Controller.extend("flightui5ih.controller.Main", {
        emptyUrlFormatter: emptyUrlFormatter,

        onInit() {
            var oFlightJSONModel = new sap.ui.model.json.JSONModel();
            var that = this;
            //read the data from Back End (READ_GET_ENTITYSET)
            var oDataModel = this.getOwnerComponent().getModel();
            var sPath = "/FlightIH";
            oDataModel.read(sPath, {
                sorters: [new sap.ui.model.Sorter("Carrname", false)],
                success: function (oresponse) {
                    console.log(oresponse);
                    //attach the data to the model
                    oFlightJSONModel.setData(oresponse.results);
                    //attach the Model to the View
                    that.getView().setModel(oFlightJSONModel, "flightDataModel");
                },
                error: function (oerror) { 
                    console.log("Error")
                },
            });

        },
        onRowPress: function (oEvent) {
            // Get selected context
            var oItem = oEvent.getParameter("listItem");
            var oCtx = oItem.getBindingContext("flightDataModel");

            // Get router instance
            var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

            // Get the ProductID (or any key)
            var sCarrID = oCtx.getProperty("Carrid");

            // Navigate to Detail view with the parameter
            oRouter.navTo("RouteDetail", {
                Carrid: sCarrID
            });
        }
    });
});