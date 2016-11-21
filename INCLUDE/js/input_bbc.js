function set_filter(){
	$("#period_bbc").datepicker();
    
}


function set_header(){

    set_filter();
}


function add_bbc(){

	
}


function set_jqgrid(){


            var data = {};

           

            var generaterow = function (i) {
                var row = {};
                var productindex = '';
                var price = '';
                var quantity = '';

                row["tanggal"] = '';
                row["blok"] =  '';
                row["namablok"] = '';
                row["nobaris"] = '';
                row["totalpokok"] = '';
                row["nopokok"] = '';
                row["normal"] = '';
                row["jantan"] = '';
                row["istirahat"] = '';
                row["totalsensus"] = '';
                row["bln2"] = '';
                row["bln3"] = '';
                row["bln3"] = '';
                row["bln4"] = '';

                return row;
            }

            /*for (var i = 0; i < 10; i++) {
                var row = generaterow(i);
                data[i] = row;
            }*/

            var source =
            {
                localdata: data,
                datatype: "local",
                datafields:
                [
                    { name: 'tanggal', type: 'date' },
                    { name: 'blok', type: 'string' },
                    { name: 'namablok', type: 'string' },
                    { name: 'nobaris', type: 'number' },
                    { name: 'totalpokok', type: 'number' },
                    { name: 'nopokok', type: 'number' },
                    { name: 'normal', type: 'number' },
                    { name: 'jantan', type: 'number' },
                    { name: 'istirahat', type: 'number' },
                    { name: 'totalsensus', type: 'number' },
                    { name: 'bln2', type: 'number' },
                    { name: 'bln3', type: 'number' },
                    { name: 'bln4', type: 'number' },
                    { name: 'bln5', type: 'number' },
                ],
                addrow: function (rowid, rowdata, position, commit) {
                    // synchronize with the server - send insert command
                    // call commit with parameter true if the synchronization with the server is successful 
                    //and with parameter false if the synchronization failed.
                    // you can pass additional argument to the commit callback which represents the new ID if it is generated from a DB.
                    commit(true);
                },
                deleterow: function (rowid, commit) {
                    // synchronize with the server - send delete command
                    // call commit with parameter true if the synchronization with the server is successful 
                    //and with parameter false if the synchronization failed.
                    commit(true);
                },
                updaterow: function (rowid, newdata, commit) {
                    // synchronize with the server - send update command
                    // call commit with parameter true if the synchronization with the server is successful 
                    // and with parameter false if the synchronization failed.
                    commit(true);
                }
            };

            var dataAdapter = new $.jqx.dataAdapter(source);

            // initialize jqxGrid
            $("#jqxgrid").jqxGrid(
            {
                width: '800',
                height : '350',
                source: dataAdapter,
                showtoolbar: true,
                editable: true,

                rendertoolbar: function (toolbar) {
                    var me = this;
                    var container = $("<div style='margin: 5px;'></div>");
                    toolbar.append(container);
                    container.append('<input id="addrowbutton" type="button" value="Add New Row" />');
                   // container.append('<input style="margin-left: 5px;" id="addmultiplerowsbutton" type="button" value="Add Multiple New Rows" />');
                    container.append('<input style="margin-left: 5px;" id="deleterowbutton" type="button" value="Delete Selected Row" />');
                   // container.append('<input style="margin-left: 5px;" id="updaterowbutton" type="button" value="Update Selected Row" />');
                    $("#addrowbutton").jqxButton();
                  //  $("#addmultiplerowsbutton").jqxButton();
                    $("#deleterowbutton").jqxButton();
                   // $("#updaterowbutton").jqxButton();
                    // update row.
                    $("#updaterowbutton").on('click', function () {
                        var datarow = generaterow();
                        var selectedrowindex = $("#jqxgrid").jqxGrid('getselectedrowindex');
                        var rowscount = $("#jqxgrid").jqxGrid('getdatainformation').rowscount;
                        if (selectedrowindex >= 0 && selectedrowindex < rowscount) {
                            var id = $("#jqxgrid").jqxGrid('getrowid', selectedrowindex);
                            var commit = $("#jqxgrid").jqxGrid('updaterow', id, datarow);
                            $("#jqxgrid").jqxGrid('ensurerowvisible', selectedrowindex);
                        }
                    });

                    // create new row.
                    $("#addrowbutton").on('click', function () {
                        var datarow = generaterow();
                        var commit = $("#jqxgrid").jqxGrid('addrow', null, datarow);
                    });

                    // create new rows.
                    $("#addmultiplerowsbutton").on('click', function () {
                        $("#jqxgrid").jqxGrid('beginupdate');
                        for (var i = 0; i < 10; i++) {
                            var datarow = generaterow();
                            var commit = $("#jqxgrid").jqxGrid('addrow', null, datarow);
                        }
                        $("#jqxgrid").jqxGrid('endupdate');
                    });

                    // delete row.
                    $("#deleterowbutton").on('click', function () {
                        var selectedrowindex = $("#jqxgrid").jqxGrid('getselectedrowindex');
                        var rowscount = $("#jqxgrid").jqxGrid('getdatainformation').rowscount;
                        if (selectedrowindex >= 0 && selectedrowindex < rowscount) {
                            var id = $("#jqxgrid").jqxGrid('getrowid', selectedrowindex);
                            var commit = $("#jqxgrid").jqxGrid('deleterow', id);
                        }
                    });
                },
                columns: [
                  { text: 'Tanggal', datafield: 'tanggal', width: 200 },
                  { text: 'Blok', datafield: 'blok', width: 200 },
                  { text: 'Nama Blok', datafield: 'namablok', width: 180 },
                  { text: 'No Baris', datafield: 'nobaris', width: 80, cellsalign: 'right' },
                  { text: 'Total Pokok', datafield: 'totalpokok', width: 90, cellsalign: 'right', cellsformat: 'c2' },
                  { text: 'No Pokok', datafield: 'nopokok',  cellsalign: 'right', cellsformat: 'c2' },
                  { text: 'Normal',   columngroup: 'Pokoksensus', datafield: 'normal',  cellsalign: 'right', cellsformat: 'c2' },
                  { text: 'Jantan',   columngroup: 'Pokoksensus',  datafield: 'jantan',  cellsalign: 'right', cellsformat: 'c2' },
                  { text: 'Istirahat', columngroup: 'Pokoksensus',  datafield: 'istirahat',  cellsalign: 'right', cellsformat: 'c2' },
                  { text: 'Jumlah Pokok Disensus', datafield: 'totalsensus',  cellsalign: 'right', cellsformat: 'c2' },
                  { text: '2 Bulan', columngroup: 'JumlahPokok', datafield: 'bln2',  cellsalign: 'right', cellsformat: 'c2' },
                  { text: '3 Bulan', columngroup: 'JumlahPokok', datafield: 'bln3',  cellsalign: 'right', cellsformat: 'c2' },
                  { text: '4 Bulan', columngroup: 'JumlahPokok', datafield: 'bln4',  cellsalign: 'right', cellsformat: 'c2' },
                  { text: '5 Bulan', columngroup: 'JumlahPokok', datafield: 'bln5',  cellsalign: 'right', cellsformat: 'c2' }
                ],
                columngroups: [
                     { text: 'Pokok Disensus', align: 'center', name: 'Pokoksensus' },
                     { text: 'Jumlah Pokok Disensus', align: 'center', name: 'JumlahPokok' },
                ]
            }); 
            $("#jqxgrid").jqxGrid('autoresizecolumns');

           $("#jqxgrid").on('cellbeginedit', function (event) {
                var args = event.args;
                $("#cellbegineditevent").text("Event Type: cellbeginedit, Column: " + args.datafield + ", Row: " + (1 + args.rowindex) + ", Value: " + args.value);
            });


     
}


