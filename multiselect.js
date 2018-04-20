function checkall()
{
	var countResult=<%=totalResults%>;
	var frm=document.dispatchForm;
	if(frm.allprds.checked==true)
	{
		if (countResult==1){
			frm.sparePartItems.checked=true;
		}else{
			for(i=0;i<frm.sparePartItems.length;i++){
				frm.sparePartItems[i].checked=true;
                                frm.sparePartItems[i].disabled = true;   
                        }
		}
	}  
	else
	{
		if (countResult==1){
			frm.sparePartItems.checked=false;
		}else{
			for(i=0;i<frm.sparePartItems.length;i++){
				frm.sparePartItems[i].checked=false;
                        }
		}
	}	
        $(".checkAllClass").attr("disabled","disabled");
        selectSpareParts();  
        
}  