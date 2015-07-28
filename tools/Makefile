.SILENT:

all: upgrade-system install-deps set-configs

upgrade-system:
	apt-get update
	apt-get upgrade

install-deps:
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

set-configs:
	./setConfigs

image:
	./makeImage
