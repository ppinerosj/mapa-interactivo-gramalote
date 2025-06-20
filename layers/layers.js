var wms_layers = [];


        var lyr_Mapabase_0 = new ol.layer.Tile({
            'title': 'Mapa base',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Lmitemunicipal_1 = new ol.format.GeoJSON();
var features_Lmitemunicipal_1 = format_Lmitemunicipal_1.readFeatures(json_Lmitemunicipal_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lmitemunicipal_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lmitemunicipal_1.addFeatures(features_Lmitemunicipal_1);
var lyr_Lmitemunicipal_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lmitemunicipal_1, 
                style: style_Lmitemunicipal_1,
                popuplayertitle: 'Límite municipal',
                interactive: true,
    title: 'Límite municipal<br />\
    <img src="styles/legend/Lmitemunicipal_1_0.png" /> Gramalote<br />\
    <img src="styles/legend/Lmitemunicipal_1_1.png" /> Norte de Santander<br />' });
var format_Drenajes_2 = new ol.format.GeoJSON();
var features_Drenajes_2 = format_Drenajes_2.readFeatures(json_Drenajes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Drenajes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Drenajes_2.addFeatures(features_Drenajes_2);
var lyr_Drenajes_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Drenajes_2, 
                style: style_Drenajes_2,
                popuplayertitle: 'Drenajes',
                interactive: true,
                title: '<img src="styles/legend/Drenajes_2.png" /> Drenajes'
            });
var format_Vas_3 = new ol.format.GeoJSON();
var features_Vas_3 = format_Vas_3.readFeatures(json_Vas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vas_3.addFeatures(features_Vas_3);
var lyr_Vas_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vas_3, 
                style: style_Vas_3,
                popuplayertitle: 'Vías',
                interactive: true,
    title: 'Vías<br />\
    <img src="styles/legend/Vas_3_0.png" /> Despavimentada prin<br />\
    <img src="styles/legend/Vas_3_1.png" /> Despavimentada ter<br />\
    <img src="styles/legend/Vas_3_2.png" /> Pavimentada prin<br />' });
var format_Puntostursticos_4 = new ol.format.GeoJSON();
var features_Puntostursticos_4 = format_Puntostursticos_4.readFeatures(json_Puntostursticos_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puntostursticos_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puntostursticos_4.addFeatures(features_Puntostursticos_4);
var lyr_Puntostursticos_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Puntostursticos_4, 
                style: style_Puntostursticos_4,
                popuplayertitle: 'Puntos turísticos',
                interactive: true,
    title: 'Puntos turísticos<br />\
    <img src="styles/legend/Puntostursticos_4_0.png" /> Alojamiento<br />\
    <img src="styles/legend/Puntostursticos_4_1.png" /> Arqueológico<br />\
    <img src="styles/legend/Puntostursticos_4_2.png" /> Histórico<br />\
    <img src="styles/legend/Puntostursticos_4_3.png" /> Mixto<br />\
    <img src="styles/legend/Puntostursticos_4_4.png" /> Natural<br />\
    <img src="styles/legend/Puntostursticos_4_5.png" /> Religioso<br />\
    <img src="styles/legend/Puntostursticos_4_6.png" /> Restaurante<br />' });

lyr_Mapabase_0.setVisible(true);lyr_Lmitemunicipal_1.setVisible(true);lyr_Drenajes_2.setVisible(true);lyr_Vas_3.setVisible(true);lyr_Puntostursticos_4.setVisible(true);
var layersList = [lyr_Mapabase_0,lyr_Lmitemunicipal_1,lyr_Drenajes_2,lyr_Vas_3,lyr_Puntostursticos_4];
lyr_Lmitemunicipal_1.set('fieldAliases', {'DPTO_CCDGO': 'DPTO_CCDGO', 'MPIO_CCDGO': 'MPIO_CCDGO', 'MPIO_CDPMP': 'MPIO_CDPMP', 'DPTO_CNMBR': 'DPTO_CNMBR', 'MPIO_CNMBR': 'MPIO_CNMBR', 'MPIO_CRSLC': 'MPIO_CRSLC', 'MPIO_NAREA': 'MPIO_NAREA', 'MPIO_CSMBL': 'MPIO_CSMBL', 'MPIO_VGNC': 'MPIO_VGNC', 'MPIO_TIPO': 'MPIO_TIPO', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Drenajes_2.set('fieldAliases', {'ESTADO_DRE': 'ESTADO_DRE', 'PROYECTO': 'PROYECTO', 'SYMBOL': 'SYMBOL', 'FECHA': 'FECHA', 'DISPERSION': 'DISPERSION', 'NOMBRE_GEO': 'NOMBRE_GEO', 'PK_CUE': 'PK_CUE', 'RuleID': 'RuleID', 'SHAPE_Leng': 'SHAPE_Leng', 'layer': 'layer', 'path': 'path', });
lyr_Vas_3.set('fieldAliases', {'id': 'id', 'Tipo Vía': 'Tipo Vía', });
lyr_Puntostursticos_4.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', 'Categoría': 'Categoría', 'Descripci': 'Descripci', 'Ubicación': 'Ubicación', 'Foto': 'Foto', });
lyr_Lmitemunicipal_1.set('fieldImages', {'DPTO_CCDGO': 'TextEdit', 'MPIO_CCDGO': 'TextEdit', 'MPIO_CDPMP': 'TextEdit', 'DPTO_CNMBR': 'TextEdit', 'MPIO_CNMBR': 'TextEdit', 'MPIO_CRSLC': 'TextEdit', 'MPIO_NAREA': 'TextEdit', 'MPIO_CSMBL': 'TextEdit', 'MPIO_VGNC': 'Range', 'MPIO_TIPO': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Drenajes_2.set('fieldImages', {'ESTADO_DRE': 'TextEdit', 'PROYECTO': 'TextEdit', 'SYMBOL': 'TextEdit', 'FECHA': 'DateTime', 'DISPERSION': 'TextEdit', 'NOMBRE_GEO': 'TextEdit', 'PK_CUE': 'TextEdit', 'RuleID': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Vas_3.set('fieldImages', {'id': 'TextEdit', 'Tipo Vía': 'TextEdit', });
lyr_Puntostursticos_4.set('fieldImages', {'id': 'TextEdit', 'Nombre': 'TextEdit', 'Categoría': 'TextEdit', 'Descripci': 'TextEdit', 'Ubicación': '', 'Foto': '', });
lyr_Lmitemunicipal_1.set('fieldLabels', {'DPTO_CCDGO': 'no label', 'MPIO_CCDGO': 'no label', 'MPIO_CDPMP': 'no label', 'DPTO_CNMBR': 'no label', 'MPIO_CNMBR': 'no label', 'MPIO_CRSLC': 'no label', 'MPIO_NAREA': 'no label', 'MPIO_CSMBL': 'no label', 'MPIO_VGNC': 'no label', 'MPIO_TIPO': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Drenajes_2.set('fieldLabels', {'ESTADO_DRE': 'no label', 'PROYECTO': 'no label', 'SYMBOL': 'no label', 'FECHA': 'no label', 'DISPERSION': 'no label', 'NOMBRE_GEO': 'no label', 'PK_CUE': 'no label', 'RuleID': 'no label', 'SHAPE_Leng': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Vas_3.set('fieldLabels', {'id': 'no label', 'Tipo Vía': 'no label', });
lyr_Puntostursticos_4.set('fieldLabels', {'id': 'no label', 'Nombre': 'header label - always visible', 'Categoría': 'inline label - visible with data', 'Descripci': 'inline label - visible with data', 'Ubicación': 'inline label - visible with data', 'Foto': 'header label - always visible', });
lyr_Puntostursticos_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});