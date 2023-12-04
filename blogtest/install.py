
from frappe.core.api.file import create_new_folder


def after_install():
	create_new_folder("Page Uploads", "Home")
