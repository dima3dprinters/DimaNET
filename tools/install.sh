#!/bin/sh

cd ~/DimaNET-master/tools
sudo make upgrade-system install-deps
cd RTL8188-hostapd-2.0/hostapd
make 
sudo make install
echo " "
echo "Configurando servicios al inicio..."
echo " "
update-rc.d isc-dhcp-server remove
update-rc.d isc-dhcp-server defaults
update-rc.d hostapd remove
update-rc.d hostapd defaults
cd ~/DimaNET-master/tools
sudo make set-configs image
