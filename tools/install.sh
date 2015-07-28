#!/bin/sh

echo " "
echo "Deteniendo el servicio de Astrobox..."
echo " "
service astrobox stop > /dev/null

echo " "
echo "Sustituyendo los ficheros modificados de Astrobox..."
echo " "
rm -r /AstroBox/*
cp -r ~/DimaNET-master/AstroBox/* /AstroBox

echo " "
echo "Actualizando el sistema..."
echo " "
apt-get update > /dev/null
apt-get upgrade > /dev/null

echo " "
echo "Instalando paquetes necesarios..."
echo " "
apt-get install haproxy isc-dhcp-server nscd network-manager avahi-daemon ntp python-pip python-dev python-gobject python-apt python-numpy python-opencv
apt-get autoremove hostapd

echo " "
echo "Instalando una versión especial de hostapd..."
echo " "
wget https://github.com/jenssegers/RTL8188-hostapd/archive/v2.0.tar.gz
tar -zxvf v2.0.tar.gz
cd RTL8188-hostapd-2.0/hostapd
make > /dev/null
make install > /dev/null
cd ../../
rm v2.0.tar.gz

echo " "
echo "Configurando servicios al inicio..."
echo " "
update-rc.d isc-dhcp-server remove
update-rc.d isc-dhcp-server defaults
update-rc.d hostapd remove
update-rc.d hostapd defaults


echo " "
echo "Moviendo ficheros de configuración a su lugar..."
echo " "
cd ../../
./setConfigs

echo " "
echo "Limpiando la Raspberry..."
echo " "
./makeImage
