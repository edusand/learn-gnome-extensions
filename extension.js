const { Gtk } = imports.gi;

const gtk_major_version = Gtk.get_major_version();
const gtk_minor_version = Gtk.get_minor_version();
log(`GTK version is ${gtk_major_version}.${gtk_minor_version}`);

class Extension {
    constructor() {
		log('construct');
    }

    enable() {
		log('enable');
    }

    disable() {
		log('disable');
    }
}

function init() {
	log('custom extension');
    return new Extension();
}
