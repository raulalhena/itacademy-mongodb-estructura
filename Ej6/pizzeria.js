db = db.getSiblingDB("pizzeria");

db.provincias.drop();
db.provincias.insertMany([
{"_id":ObjectId("607fff3084282bbcd33f01c8"),"nombre":"Barcelona","localidades":[{"_id":ObjectId("607fff3084282bbcd33f01c2"),"nombre":"Barcelona"},{"_id":ObjectId("607fff3084282bbcd33f01c3"),"nombre":"Hospitalet de Llobregat"},{"_id":ObjectId("607fff3084282bbcd33f01c4"),"nombre":"Santa Coloma de Gramanet"}]},
{"_id":ObjectId("607fff3084282bbcd33f01c9"),"nombre":"Málaga","localidades":[{"_id":ObjectId("607fff3084282bbcd33f01c5"),"nombre":"Málaga"},{"_id":ObjectId("607fff3084282bbcd33f01c6"),"nombre":"Marbella"},{"_id":ObjectId("607fff3084282bbcd33f01c7"),"nombre":"Torremolinos"}]}
]);

db.clientes.drop();
db.clientes.insertMany([
{"_id":ObjectId("608000e684282bbcd33f01ca"),"nombre":"c1","apellido1":"ca1","apellido2":"ca2","telefono":"67848754","direccion":{"calle":"cc1","numero":"25","piso":"2a 5a","codigo_postal":"08099","localidad_id":ObjectId("607fff3084282bbcd33f01c2")}},
{"_id":ObjectId("608000e684282bbcd33f01cb"),"nombre":"c2","apellido1":"ca2","apellido2":"ca2","telefono":"847584792","direccion":{"calle":"cc2","numero":"890","piso":"bajos","codigo_postal":"29848","localidad_id":ObjectId("607fff3084282bbcd33f01c6")}}
]);

db.tiendas.drop();
db.tiendas.insertMany([
{"_id":ObjectId("608001d684282bbcd33f01cd"),"direccion":"c/tienda1 s/n","codigo_postal":"08448","localidad_id":ObjectId("607fff3084282bbcd33f01c3"),"empleados":{"_id":ObjectId("608001d684282bbcd33f01cc"),"nombre":"e1","apellido1":"ea1","apellido2":"ae1","nif":"48475483T","telefono":"887847544","puesto_trabajo":"Repartidor"}},
{"_id":ObjectId("6080041a84282bbcd33f01d0"),"direccion":"c/t2","codigo_postal":"29847","localidad_id":ObjectId("607fff3084282bbcd33f01c6"),"empleados":[{"_id":ObjectId("6080041a84282bbcd33f01ce"),"nombre":"e2","apellido1":"ea2","apellido2":"ae2","nif":"99900344U","telefono":"789020343","puesto_trabajo":"Cocinero"},{"_id":ObjectId("6080041a84282bbcd33f01cf"),"nombre":"e3","apellido1":"ae3","apellido2":"ae3","nif":"23912455R","telefono":"789840924","puesto_trabajo":"Repartidor"}]}
]);

db.productos.drop();
db.productos.insertMany([
{"_id":ObjectId("608006ce7cb7af2293d1878b"),"nombre":"King Burguer","tipo":"Hamburguesa","descripcion":"Hamburguesa completa de vaca","imagen":"king_burguer.webp","precio":10.85},
{"_id":ObjectId("608006ce7cb7af2293d1878c"),"nombre":"Napolitana","tipo":"Pizza","descripcion":"Napolitana clásica","imagen":"napolitana.webp","precio":11.5,"categoria_pizza":"Clásicas"},
{"_id":ObjectId("608006ce7cb7af2293d1878d"),"nombre":"Refresco kiwi","tipo":"Bebida","descripcion":"Refresco de kiwi sin gas","imagen":"referesco_kiwi.webp","precio":1.45}
]);

db.categoria_pizza.drop();
db.categoria_pizza.insertMany([
{"_id":ObjectId("60800b9584282bbcd33f01d2"),"nombre":"Clásicas","pizzas":[{"pizza_id":ObjectId("608006ce7cb7af2293d1878c")}]}
]);

db.pedidos.drop();
db.pedidios.insertMany([
{"_id":ObjectId("60800b2184282bbcd33f01d1"),"cliente_id":ObjectId("608000e684282bbcd33f01cb"),"fecha":{"$date":"2021-04-21T11:23:13.375Z"},"tipo":"Reparto","productos":[{"producto_id":ObjectId("608006ce7cb7af2293d1878b"),"cantidad":2.0,"precio_total":21.7},{"producto_id":ObjectId("608006ce7cb7af2293d1878d"),"cantidad":2.0,"precio_total":2.9}],"reparto":{"empleado_id":ObjectId("6080041a84282bbcd33f01ce"),"fecha_entrega":{"$date":"2021-04-21T11:23:13.375Z"}}}
]);