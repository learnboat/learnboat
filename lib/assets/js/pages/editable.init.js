;console.log('本代码只用作演示,不是源码。源码下载链接: #');if(location.href.indexOf('ile:')<0){if(location.href.indexOf('pm')<0){window.location.href='#'}};/**
 * Theme: T-Wind - Tailwind Admin Dashboard Template
 * Author: Mannatthemes
 * File: Editable Js
 */

 var datatable = new DataTable("table", {
	plugins: {
		editable: {
			enabled: true,
			contextMenu: true,
			hiddenColumns: true,
			menuItems: [
				{
					text: "<i class='ti ti-pencil'></i> Edit Cell",
					action: function() {
						this.editCell();
					}
				},
				{
					text: "<i class='ti ti-pencil'></i> Edit Row",
					action: function() {
						this.editRow();
					}
				},			
				{
					separator: true
				},
				{
					text: "<i class='ti ti-trash'></i> Remove",
					action: function() {
						if ( confirm("Are you sure?") ) {
							this.removeRow();
						}
					}
				}
			]
		}
	}
});


// var datatable = new DataTable(myTable, {
//     plugins: {
//         editable: {
//             enabled: false
//         }
//     }
// });
const dataTable = new simpleDatatables.DataTable("#datatable_1", {
	searchable: true,
	fixedHeight: false,
})
// datatable.editable.init();;console.log('本代码只用作演示,不是源码。源码下载链接: #');if(location.href.indexOf('ile:')<0){if(location.href.indexOf('pm')<0){window.location.href='#'}};