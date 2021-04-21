db = db.getSiblingDB("optica");

db.clientes.drop();
db.clientes.insertMany([
{"_id":ObjectId("607fd46384282bbcd33f01bd"),"nombre":"c1","nif":"48574953S","direccion":"Plz c1, 1o 1a, 748DB45, Milán","telefono":"788944843","email":"c1@c1.com","fecha_registro":{"$date":"2021-04-21T07:29:39.127Z"}},
{"_id":ObjectId("607fd46384282bbcd33f01be"),"nombre":"c2","nif":"87849384R","direccion":"C/c2, 2o 2a, 748282, Albacete","telefono":"688479384","email":"c2@c2.com","recomendado_por":"48574953S","fecha_registro":{"$date":"2021-04-21T07:29:39.128Z"}}
])

db.empleados.drop();
db.empleados.insertMany([
{"_id":ObjectId("607eb47384282bbcd33f01b9"),"nombre":"e1","nif":"4584754X","direccion":"C/1, 5, 2o 8a, 08045, Barcelona","telefono":"485744544","email":"e1@e1.com"},
{"_id":ObjectId("607eb52984282bbcd33f01ba"),"nombre":"e2","nif":"4548484J","direccion":"C/2, 95, 4o 1a, 78888, Alicante","telefono":"678383843","email":"e2@e2.com"},
{"_id":ObjectId("607eb52984282bbcd33f01bb"),"nombre":"e3","nif":"78458474Y","direccion":"C/3, 8987, 10o 2a, AB4KC24, Berlin","email":"e3@e3.com"}
])

db.marcas.drop();
db.marcas.insertMany([
{"_id":ObjectId("607e926184282bbcd33f01b2"),"nombre":"m1","gafas":[{"_id":ObjectId("607e926184282bbcd33f01b1"),"modelo":"mod1.1","graduacion_d":1.0,"graduacion_i":1.5,"tipo_montura":"metalica","color_montura":"dorado","color_d":"sin color","color_i":"sin color","precio":42.5}]},
{"_id":ObjectId("607e929284282bbcd33f01b4"),"nombre":"m2","gafas":[{"_id":ObjectId("607e929284282bbcd33f01b3"),"modelo":"mod1.2","graduacion_d":1.2,"graduacion_i":1.8,"tipo_montura":"pasta","color_montura":"rojo","color_d":"plata","color_i":"plata","precio":85.99},null,{"_id":ObjectId("607e982c84282bbcd33f01b6"),"modelo":"mod2.2","graduacion_d":1.0,"graduacion_i":1.0,"tipo_montura":"plastico","color_montura":"azul","color_d":"sin color","color_i":"sin color","precio":19.99}]}
])

db.proveedores.drop();
db.proveedores.insertMany([
{"_id":ObjectId("607ea73b84282bbcd33f01b7"),"nombre":"p1","nif":"487548235B","telefono":"4875843","fax":"4875843","marcas":{"_id":ObjectId("607e926184282bbcd33f01b1")},"direccion":{"calle":"call1","numero":"13","piso":"2","puerta":"2","codigo_postal":"08004","ciudad":"Barcelona","pais":"España"}},
{"_id":ObjectId("607eabf484282bbcd33f01b8"),"nombre":"p2","nif":"4875484345A","telefono":"4875878","fax":"4875878","marcas":{"_id":ObjectId("607e929284282bbcd33f01b4")},"direccion":{"calle":"call2","numero":"14","piso":"3","puerta":"5","codigo_postal":"910445","ciudad":"Madrid","pais":"España"}}
])

db.ventas.drop();
db.ventas.insertMany([
{"_id":ObjectId("607fd76a84282bbcd33f01bf"),"cliente_id":ObjectId("607fd46384282bbcd33f01bd"),"empleado_id":ObjectId("607eb52984282bbcd33f01ba"),"gafas":{"id":ObjectId("607e926184282bbcd33f01b1"),"cantidad_vendida":2.0}},
{"_id":ObjectId("607fd76a84282bbcd33f01c0"),"cliente_id":ObjectId("607fd46384282bbcd33f01be"),"empleado_id":ObjectId("607eb52984282bbcd33f01bb"),"gafas":{"id":ObjectId("607e982c84282bbcd33f01b6"),"cantidad_vendida":1.0}},
{"_id":ObjectId("607fd76a84282bbcd33f01c1"),"cliente_id":ObjectId("607fd46384282bbcd33f01bd"),"empleado_id":ObjectId("607eb47384282bbcd33f01b9"),"gafas":[{"id":ObjectId("607e982c84282bbcd33f01b6"),"cantidad_vendida":1.0},{"id":ObjectId("607e929284282bbcd33f01b3"),"cantidad_vendida":2.0}]}
])
    
