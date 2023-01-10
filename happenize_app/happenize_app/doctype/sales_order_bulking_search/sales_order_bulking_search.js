// Copyright (c) 2023, Ahmed Abd El-Sattar and contributors
// For license information, please see license.txt

frappe.ui.form.on('Sales Order Bulking Search', {
	refresh: function(frm) {
		get_sales_orders(frm)
		download_template(frm)
	}
});
frappe.ui.form.on('Sales Order Details', {
	open: function(frm,cdt,cdn) {
		const row = locals[cdt][cdn]
		frappe.set_route(`Form/Sales Order/${row.sales_order}`)
	}
});
function get_sales_orders(frm){
	if(!frm.is_new() && frm.doc.excel_sheet)
	frm.add_custom_button('Get Sales Orders',()=>{
		frm.call('get_sales_orders')
	}).addClass('primary')
}
function download_template(frm){
	frm.add_custom_button('Donwload Template',()=>{
		let method = "/api/method/frappe.core.doctype.data_import.data_import.download_template"
		open_url_post(method, {
			doctype: "Sales Order",
			export_records: "5_records",
			file_type:"Excel",
			export_fields: {
				"Sales Order": [
					"name"
				],
			},
		});
	})
}