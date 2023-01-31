var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_DRDSI_UA_Districts_1 = new ol.format.GeoJSON();
var features_DRDSI_UA_Districts_1 = format_DRDSI_UA_Districts_1.readFeatures(json_DRDSI_UA_Districts_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DRDSI_UA_Districts_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRDSI_UA_Districts_1.addFeatures(features_DRDSI_UA_Districts_1);
var lyr_DRDSI_UA_Districts_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DRDSI_UA_Districts_1, 
                style: style_DRDSI_UA_Districts_1,
                interactive: true,
                title: '<img src="styles/legend/DRDSI_UA_Districts_1.png" /> DRDSI_UA_Districts'
            });
var format_DRDSI_UA_Village_Councils_2 = new ol.format.GeoJSON();
var features_DRDSI_UA_Village_Councils_2 = format_DRDSI_UA_Village_Councils_2.readFeatures(json_DRDSI_UA_Village_Councils_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DRDSI_UA_Village_Councils_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRDSI_UA_Village_Councils_2.addFeatures(features_DRDSI_UA_Village_Councils_2);
var lyr_DRDSI_UA_Village_Councils_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DRDSI_UA_Village_Councils_2, 
                style: style_DRDSI_UA_Village_Councils_2,
                interactive: true,
                title: '<img src="styles/legend/DRDSI_UA_Village_Councils_2.png" /> DRDSI_UA_Village_Councils'
            });
var format_DRDSI_UA_Settlements_3 = new ol.format.GeoJSON();
var features_DRDSI_UA_Settlements_3 = format_DRDSI_UA_Settlements_3.readFeatures(json_DRDSI_UA_Settlements_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DRDSI_UA_Settlements_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRDSI_UA_Settlements_3.addFeatures(features_DRDSI_UA_Settlements_3);
var lyr_DRDSI_UA_Settlements_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_DRDSI_UA_Settlements_3, 
                style: style_DRDSI_UA_Settlements_3,
                interactive: true,
                title: '<img src="styles/legend/DRDSI_UA_Settlements_3.png" /> DRDSI_UA_Settlements'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_DRDSI_UA_Districts_1.setVisible(true);lyr_DRDSI_UA_Village_Councils_2.setVisible(true);lyr_DRDSI_UA_Settlements_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_DRDSI_UA_Districts_1,lyr_DRDSI_UA_Village_Councils_2,lyr_DRDSI_UA_Settlements_3];
lyr_DRDSI_UA_Districts_1.set('fieldAliases', {'UkrName': 'UkrName', 'RusName': 'RusName', 'EngName': 'EngName', 'KOATUU': 'KOATUU', 'CodeTopo': 'CodeTopo', });
lyr_DRDSI_UA_Village_Councils_2.set('fieldAliases', {'ID': 'ID', 'UkrName': 'UkrName', 'RusName': 'RusName', 'EngName': 'EngName', 'KOATUU': 'KOATUU', 'CenterName': 'CenterName', 'CenterKOAT': 'CenterKOAT', 'CodeTopo': 'CodeTopo', });
lyr_DRDSI_UA_Settlements_3.set('fieldAliases', {'UkrName': 'UkrName', 'RusName': 'RusName', 'EngName': 'EngName', 'SettlType': 'SettlType', 'CodeTopo': 'CodeTopo', 'District': 'District', 'KOATUU': 'KOATUU', });
lyr_DRDSI_UA_Districts_1.set('fieldImages', {'UkrName': '', 'RusName': '', 'EngName': '', 'KOATUU': '', 'CodeTopo': '', });
lyr_DRDSI_UA_Village_Councils_2.set('fieldImages', {'ID': '', 'UkrName': '', 'RusName': '', 'EngName': '', 'KOATUU': '', 'CenterName': '', 'CenterKOAT': '', 'CodeTopo': '', });
lyr_DRDSI_UA_Settlements_3.set('fieldImages', {'UkrName': '', 'RusName': '', 'EngName': '', 'SettlType': '', 'CodeTopo': '', 'District': '', 'KOATUU': '', });
lyr_DRDSI_UA_Districts_1.set('fieldLabels', {'UkrName': 'no label', 'RusName': 'no label', 'EngName': 'no label', 'KOATUU': 'no label', 'CodeTopo': 'no label', });
lyr_DRDSI_UA_Village_Councils_2.set('fieldLabels', {'ID': 'no label', 'UkrName': 'no label', 'RusName': 'no label', 'EngName': 'no label', 'KOATUU': 'no label', 'CenterName': 'no label', 'CenterKOAT': 'no label', 'CodeTopo': 'no label', });
lyr_DRDSI_UA_Settlements_3.set('fieldLabels', {'UkrName': 'no label', 'RusName': 'no label', 'EngName': 'no label', 'SettlType': 'no label', 'CodeTopo': 'no label', 'District': 'no label', 'KOATUU': 'no label', });
lyr_DRDSI_UA_Settlements_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});