sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
    
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("com.app.table.controller.View1", {
            onInit: function () {
                // const oPerson = {
                //     employee: {
                //         EmployeeName: "Deva",
                //         EmployeeAge: 20,
                //         ContractStarted: new Date(),
                //         Email: "deva.do@gmail.com"
                //     }
                // }
                // const oJsonModel = new JSONModel(oPerson);
                // this.getView().setModel(oJsonModel);
            }
        });
    });
