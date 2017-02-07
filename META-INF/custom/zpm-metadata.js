(function()
{
   var $html = Alfresco.util.encodeHTML,
   $isValueSet = Alfresco.util.isValueSet;

   if (Alfresco.DocumentList)
   {
        YAHOO.Bubbling.fire("registerRenderer",
        {
           propertyName: "ZPM",
           renderer: function edicion_renderer(record, label)
           {
                var jsNode = record.jsNode,
                properties = jsNode.properties,
                html = "";
                var icon_state = "";

                // Get labels 
                var labelEstado     = this.msg("zpm.mystatus") || "Estado";
                var labelPrioridad  = this.msg("zpm.priority") || "Prioridad";
                var labelPorcentaje = this.msg("zpm.percentage") || "Porcentaje";

				// Values of metadata
                var estado     = this.msg(properties["zpm:mystatus"]) || "-";
                var prioridad  = this.msg(properties["zpm:priority"]) || "-";
                var porcentaje = properties["zpm:percentage"] || "-";

                html = '<span class="item">';
		        html = html + ' <b>'+labelEstado+'</b>: ' + estado;
                html = html + ' &nbsp;&nbsp;&nbsp; <b>'+labelPrioridad+'</b>: ' + prioridad;
                html = html + ' &nbsp;&nbsp;&nbsp; <b>'+labelPorcentaje+'</b>: ' + porcentaje;
                //html = html + '&nbsp;&nbsp;&nbsp; <b>Asignar a</b>: ' + asignado;
                html = html + '</span>';
                return html;
           }
        });
   }
})();