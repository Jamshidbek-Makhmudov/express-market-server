
Date.prototype.dateformat = function(format) {

   var year = this.getFullYear();
   var month = this.getMonth() < 9 ? "0" + (this.getMonth() + 1) : (this.getMonth() + 1); // getMonth() is zero-based
   var day  = this.getDate() < 10 ? "0" + this.getDate() : this.getDate();
   var hour = this.getHours() < 10 ? "0" + this.getHours() : this.getHours();
   var min = this.getMinutes() < 10 ? "0" + this.getMinutes() : this.getMinutes();
   var second = this.getSeconds() < 10 ? "0" + this.getSeconds() : this.getSeconds();

   var strDate = format.replace("yyyy",year).replace("mm",month).replace("dd",day).replace("hh",hour).replace("mi",min).replace("ss",second);

   return strDate;
}

function deleteAgreeText2Config(AGREE_TEXT2_SEQ) {

	 //if(confirm("삭제 하시겠습니까?")) {
	 if(confirm(qq175[lang_code])) {
		location.href="process_agree_config2.php?AGREE_TEXT2_SEQ="+AGREE_TEXT2_SEQ+"&mode=delete";
	 }
				
}

function deleteAgreeText3Config(LANG) {

	 //if(confirm("삭제 하시겠습니까?")) {
	 if(confirm(qq175[lang_code])) {
		location.href="process_agree_config3.php?LANG="+LANG+"&mode=delete";
	 }
				
}

function inputAgreeCheck2(frm) {
	
	var idiv = frm.mode.value;

	var p_header_tag  = getPreviewHtml("ifrm_personal_header");
	var p_contents_tag = getPreviewHtml("ifrm_personal_contents");
	var p_bottom_tag = getPreviewHtml("ifrm_personal_bottom");

	var s_header_tag  = getPreviewHtml("ifrm_solution_header");
	var s_contents_tag = getPreviewHtml("ifrm_solution_contents");
	var s_bottom_tag = getPreviewHtml("ifrm_solution_bottom");

	var scu_header_tag  = getPreviewHtml("ifrm_security_header");
	var scu_contents_tag = getPreviewHtml("ifrm_security_contents");
	var scu_bottom_tag = getPreviewHtml("ifrm_security_bottom");

	//s_contents_tag = s_contents_tag.replace(/deleted/gi, "ddddddd"); 

	//base64 encoding해서 데이터 전송
	p_header_tag = btoa(unescape(encodeURIComponent(p_header_tag)));
	p_contents_tag = btoa(unescape(encodeURIComponent(p_contents_tag)));
	p_bottom_tag = btoa(unescape(encodeURIComponent(p_bottom_tag)));

	s_header_tag = btoa(unescape(encodeURIComponent(s_header_tag)));
	s_contents_tag = btoa(unescape(encodeURIComponent(s_contents_tag)));
	s_bottom_tag = btoa(unescape(encodeURIComponent(s_bottom_tag)));

	
	scu_header_tag = btoa(unescape(encodeURIComponent(scu_header_tag)));
	scu_contents_tag = btoa(unescape(encodeURIComponent(scu_contents_tag)));
	scu_bottom_tag = btoa(unescape(encodeURIComponent(scu_bottom_tag)));

	$("#TITLE_HTML_PERSONAL").val(p_header_tag);
	$("#CONTENTS_HTML_PERSONAL").val(p_contents_tag);
	$("#BOTTOM_HTML_PERSONAL").val(p_bottom_tag);

	$("#TITLE_HTML_SOLUTION").val(s_header_tag);
	$("#CONTENTS_HTML_SOLUTION").val(s_contents_tag);
	$("#BOTTOM_HTML_SOLUTION").val(s_bottom_tag);

	$("#TITLE_HTML_SECURITY").val(scu_header_tag);
	$("#CONTENTS_HTML_SECURITY").val(scu_contents_tag);
	$("#BOTTOM_HTML_SECURITY").val(scu_bottom_tag);

	
	if(idiv == 'insert') {
		
		//if(!confirm("신규등록하시겠습니까?")) {
		if(!confirm(qnewregister[lang_code])) {
			return false;
		}
	} else if(idiv == 'update') {
		//alert("a");
		//alert(lang_code);
		
		//if(!confirm("수정하시겠습니까?")) {
		if(!confirm(qupdate[lang_code])) {
			return false;
		}

	}
	if(idiv == "update") {
		if(frm.AGREE_TEXT2_SEQ.value==""){
			//alert("수정할 그룹이 선택되지 않았습니다.");
			alert(qq181[lang_code]);
			return false;
		}
		
	}
	
	
	frm.submit();
	
}

function inputAgreeCheck21(frm) {
	
	var idiv = frm.mode.value;
	var temp = $("input[name='TEMPLATE_SECURITY']:checked").val();
	var temp2 = $("input[name='TEMPLATE_SECURITY2']:checked").val();

	var p_header_tag  = getPreviewHtml("ifrm_personal_header");
	var p_contents_tag = getPreviewHtml("ifrm_personal_contents");
	var p_bottom_tag = getPreviewHtml("ifrm_personal_bottom");

	var s_header_tag  = getPreviewHtml("ifrm_solution_header");
	var s_contents_tag = getPreviewHtml("ifrm_solution_contents");
	var s_bottom_tag = getPreviewHtml("ifrm_solution_bottom");

	var scu_header_tag  = getPreviewHtml("ifrm_security_header_"+temp);
	var scu_contents_tag = getPreviewHtml("ifrm_security_contents_"+temp);
	var scu_bottom_tag = getPreviewHtml("ifrm_security_bottom_"+temp);

	var scu_header_tag2  = getPreviewHtml("ifrm_security2_header_"+temp2);
	var scu_contents_tag2 = getPreviewHtml("ifrm_security2_contents_"+temp2);
	var scu_bottom_tag2 = getPreviewHtml("ifrm_security2_bottom_"+temp2);

	//s_contents_tag = s_contents_tag.replace(/deleted/gi, "ddddddd"); 

	//base64 encoding해서 데이터 전송
	p_header_tag = btoa(unescape(encodeURIComponent(p_header_tag)));
	p_contents_tag = btoa(unescape(encodeURIComponent(p_contents_tag)));
	p_bottom_tag = btoa(unescape(encodeURIComponent(p_bottom_tag)));

	s_header_tag = btoa(unescape(encodeURIComponent(s_header_tag)));
	s_contents_tag = btoa(unescape(encodeURIComponent(s_contents_tag)));
	s_bottom_tag = btoa(unescape(encodeURIComponent(s_bottom_tag)));

	
	scu_header_tag = btoa(unescape(encodeURIComponent(scu_header_tag)));
	scu_contents_tag = btoa(unescape(encodeURIComponent(scu_contents_tag)));
	scu_bottom_tag = btoa(unescape(encodeURIComponent(scu_bottom_tag)));

	scu_header_tag2 = btoa(unescape(encodeURIComponent(scu_header_tag2)));
	scu_contents_tag2 = btoa(unescape(encodeURIComponent(scu_contents_tag2)));
	scu_bottom_tag2 = btoa(unescape(encodeURIComponent(scu_bottom_tag2)));

	$("#TITLE_HTML_PERSONAL").val(p_header_tag);
	$("#CONTENTS_HTML_PERSONAL").val(p_contents_tag);
	$("#BOTTOM_HTML_PERSONAL").val(p_bottom_tag);

	$("#TITLE_HTML_SOLUTION").val(s_header_tag);
	$("#CONTENTS_HTML_SOLUTION").val(s_contents_tag);
	$("#BOTTOM_HTML_SOLUTION").val(s_bottom_tag);

	$("#TITLE_HTML_SECURITY").val(scu_header_tag);
	$("#CONTENTS_HTML_SECURITY").val(scu_contents_tag);
	$("#BOTTOM_HTML_SECURITY").val(scu_bottom_tag);

	$("#TITLE_HTML_SECURITY2").val(scu_header_tag2);
	$("#CONTENTS_HTML_SECURITY2").val(scu_contents_tag2);
	$("#BOTTOM_HTML_SECURITY2").val(scu_bottom_tag2);


	if(idiv == 'insert') {
		
		//if(!confirm("신규등록하시겠습니까?")) {
		if(!confirm(qnewregister[lang_code])) {
			return false;
		}
	} else if(idiv == 'update') {
		//alert("a");
		//alert(lang_code);
		
		//if(!confirm("수정하시겠습니까?")) {
		if(!confirm(qupdate[lang_code])) {
			return false;
		}

	}
	if(idiv == "update") {
		if(frm.AGREE_TEXT2_SEQ.value==""){
			//alert("수정할 그룹이 선택되지 않았습니다.");
			alert(qq181[lang_code]);
			return false;
		}
		
	}
	
	
	frm.submit();
	
}

function inputAgreeCheck3(frm) {
	
	var idiv = frm.mode.value;

	var p_header_tag  = getPreviewHtml("ifrm_personal_header");
	var p_contents_tag = getPreviewHtml("ifrm_personal_contents");
	var p_bottom_tag = getPreviewHtml("ifrm_personal_bottom");

	var s_header_tag  = getPreviewHtml("ifrm_solution_header");
	var s_contents_tag = getPreviewHtml("ifrm_solution_contents");
	var s_bottom_tag = getPreviewHtml("ifrm_solution_bottom");

//	s_contents_tag = s_contents_tag.replace(/deleted/gi, "ddddddd"); 

//	base64 encoding해서 데이터 전송
	p_header_tag = btoa(unescape(encodeURIComponent(p_header_tag)));
	p_contents_tag = btoa(unescape(encodeURIComponent(p_contents_tag)));
	p_bottom_tag = btoa(unescape(encodeURIComponent(p_bottom_tag)));
	s_header_tag = btoa(unescape(encodeURIComponent(s_header_tag)));
	s_contents_tag = btoa(unescape(encodeURIComponent(s_contents_tag)));
	s_bottom_tag = btoa(unescape(encodeURIComponent(s_bottom_tag)));

	$("#TITLE_HTML_PERSONAL").val(p_header_tag);
	$("#CONTENTS_HTML_PERSONAL").val(p_contents_tag);
	$("#BOTTOM_HTML_PERSONAL").val(p_bottom_tag);
	$("#TITLE_HTML_SOLUTION").val(s_header_tag);
	$("#CONTENTS_HTML_SOLUTION").val(s_contents_tag);
	$("#BOTTOM_HTML_SOLUTION").val(s_bottom_tag);
	
	
	$("#agree_visit_wrapper div[name='visit_terms']").each(function(){
		
		var ifrmTitleID = $(this).find("iframe[name='ifrm_visit_title']").attr("id");
		var ifrmContentsID = $(this).find("iframe[name='ifrm_visit_contents']").attr("id");
		
		var v_title_tag = getPreviewHtml(ifrmTitleID);
		var v_contents_tag = getPreviewHtml(ifrmContentsID);


//		base64 encoding해서 데이터 전송
		v_title_tag = btoa(unescape(encodeURIComponent(v_title_tag)));
		v_contents_tag = btoa(unescape(encodeURIComponent(v_contents_tag)));


		$(this).find("input[name='TITLE_TEXT_VISIT[]']").val(v_title_tag);
		$(this).find("input[name='CONTENTS_TEXT_VISIT[]']").val(v_contents_tag);


		
	});
	
	
	if(idiv == 'insert') {
		
		//if(!confirm("신규등록하시겠습니까?")) {
		if(!confirm(qnewregister[lang_code])) {
			return false;
		}
	} else if(idiv == 'update') {
		//alert("a");
		//alert(lang_code);
		
		//if(!confirm("수정하시겠습니까?")) {
		if(!confirm(qupdate[lang_code])) {
			return false;
		}

	}
	
	frm.submit();
	
}

function deleteGroup2(group_seq,return_url) {

	 //if(confirm("삭제 하시겠습니까?")) {
	 if(confirm(qq175[lang_code])) {
		location.href="process_group.php?group_seq="+group_seq+"&mode=delete&return_url="+return_url;
	 }
				
}

function deleteCompany2(com_seq, method,policy_gubun,return_url) {

	 //if(confirm("삭제 하시겠습니까?")) {
	 if(confirm(qq175[lang_code])) {
		if(method == "TOTAL") {
			location.href="process_company.php?com_seq="+com_seq+"&mode=totaldelete&policy_gubun="+policy_gubun+"&return_url="+return_url;
		} else {
			location.href="process_company.php?com_seq="+com_seq+"&mode=delete&policy_gubun="+policy_gubun+"&return_url="+return_url;
		}
	 }
				
}
function resetLoginAttempt(admin_seq){

	$.post(
		SITE_NAME+'/login_attempt_reset.php',
		{ 'admin_seq':admin_seq},
		function(data) {
			if(data=='1'){
				alert(qq157[lang_code]);
			}else{
				alert('error');
			}
		},
		'text'
	);
}

function advanceReqRecoverytab(takeout_seq, page, dpt_id, dpt_name) {


		$.post(
			'./advance_req_recovery_tab.php',
			{'takeout_seq':takeout_seq, 
			 'page':page, 
			 'm_dpt_id':dpt_id, 
			 'm_dpt_name':dpt_name },
			function(data) {
				$('#advanceReqRecoverytab').html(data);
				$('#advanceReqRecoverytab').show('blind');
			},
			'text'
		);
		
}

function excelAdvanceDown(takeout_seq, user_key, email, flag){
	if(flag != "") {
		$('#viewLoading').css('position', 'absolute');
		$('#viewLoading').css('left', $('#'+flag).offset().left);
		$('#viewLoading').css('top', $('#'+flag).offset().top);
		$('#viewLoading').css('width', $('#'+flag).css('width'));
		$('#viewLoading').css('height', $('#'+flag).css('height'));
		$('#viewLoading').fadeIn(500);
	}

	var url = "./advance_req_recovery_excel.php?takeout_seq="+takeout_seq+"&user_key="+user_key+"&email="+email;
	document.location = url;
	if(flag != "") {
		$('#viewLoading').fadeOut(500);
	}
}
function setPreviewInit(previewID,strHtml,callback){

	document.getElementById(previewID).contentWindow.onload = function(){

		setPreview(previewID,strHtml,callback);

    };

}
function setPreview(previewID,strHtml,callback){

	var text = $(strHtml).text()? $(strHtml).text() : strHtml;

	if(text=="") strHtml = "<br>";

	$("#"+previewID).contents().find("body").html("<DIV>"+strHtml+"</DIV>");
	
	resizePreview(previewID);

	if(typeof callback === 'function'){

		callback();
	}
}

function viewAgrmt(AgrmtId){

	var vwAgrmt = document.getElementById(AgrmtId);

	$("#agrmt_tab_on li span").text($(vwAgrmt).text());

	$("#agrmt_tab li").removeClass("open");
	$("#agrmt_tab li a").css("color","#636363");

	$(vwAgrmt).parent().addClass("open");
	$(vwAgrmt).css("color","#3B9EBD");

	if(AgrmtId=='tabPersonal'){

		$("#agree_personal").show();
		$("#agree_security").hide();
		$("#agree_solution").hide();

	}else if(AgrmtId=='tabSecurity'){

		$("#agree_personal").hide();
		$("#agree_security").show();
		$("#agree_solution").hide();

	}else if(AgrmtId=='tabSolution'){

		$("#agree_personal").hide();
		$("#agree_security").hide();
		$("#agree_solution").show();
	}

	loadData(AgrmtId);
}
function loadEditor(ifrmID){

	$("#active_frame").val(ifrmID);

	var  strHtml = getPreviewHtml(ifrmID);

	var ifrmEditor = document.getElementById("ifrmEditor");
    var _ifrmEditor = ifrmEditor.contentWindow || ifrmEditor.contentDocument ;
 
    _ifrmEditor.setContents(strHtml);


	$("#editor").show();
		
}
function getPreviewHtml(ifrmID){
	
	var strHtml = $("#"+ifrmID).contents().find("DIV").html();
	
	if(strHtml==null) strHtml = "";
		
	return strHtml;
}
function resizePreview(ifrmID){

	var $ifrm = $("#"+ifrmID);

	var max_height = $ifrm.css("max-height").replace(/[^0-9]/g,'');

	var ifrm_height = $ifrm.contents().find("DIV").height();

	if(max_height != ""){
		if(max_height < ifrm_height){
			alert('Maximum height('+max_height+'px) exceeded!');
		}
	}

	$ifrm.height(ifrm_height);

}
function closeEditor(){

	$("#editor").hide();
}


function addVisitTerms(){

	var curr_terms_count = $("#agree_visit_wrapper div[name='visit_terms']").length;

	if(curr_terms_count >= 3){

		alert(qq206[lang_code]);	//약관은 최대 3개까지 추가 가능합니다.
		return false;
	}

	$("#agree_visit_wrapper").append("<div name='visit_terms' >"+$("#visit_terms_pack").html()+"</div>");

	setVisitTerms();

	var idx = $("#agree_visit_wrapper iframe[name='ifrm_visit_title']").length - 1;


	setPreviewInit('ifrm_visit_title_'+idx , _default_visit_title);
	setPreviewInit('ifrm_visit_contents_'+idx , _default_visit_contents);
	
}

function removeVisitTerms(obj){

	var curr_terms_count = $("#agree_visit_wrapper div[name='visit_terms']").length;

	if(curr_terms_count == 1){
		return false;
	}

	var terms_index = $("button[name='removeTermsBtn']").index(obj);

	$("#agree_visit_wrapper div[name='visit_terms']:eq("+terms_index+")").remove();

	setVisitTerms();

}

function setVisitTerms(){

	//set id 
	$("#agree_visit_wrapper div[name='visit_terms']").each(function(idx){


		var o_v_title = $(this).find("div[name='visit_title']");
		var o_ifrm_v_title = $(this).find("iframe[name='ifrm_visit_title']");
		var o_v_contents = $(this).find("div[name='visit_contents']");
		var o_ifrm_v_contents = $(this).find("iframe[name='ifrm_visit_contents']");

		$(o_v_title).attr("id","visit_title_"+idx);
		$(o_ifrm_v_title).attr("id","ifrm_visit_title_"+idx);

		$(o_v_contents).attr("id","visit_contents_"+idx);
		$(o_ifrm_v_contents).attr("id","ifrm_visit_contents_"+idx);

	});

	//set event 
	$("#agree_visit_wrapper iframe").each(function(){

		var ifrmID = this.id;

		$("#"+ifrmID).contents().click(function(){
			loadEditor(ifrmID);
		});

	});
	
	//resize
	var height = $("#agree_visit_wrapper").height();

	var terms_count = $("#agree_visit_wrapper div[name='visit_terms']").length;

	var terms_height = parseInt(height/terms_count);

	var title_height = 50;

	var contents_height = terms_height - title_height;

	$("#agree_visit_wrapper").find("div[name='visit_contents']").height(contents_height);
	

}
function excelVisitListDown(param, flag){
	if(flag != "") {
		$('#viewLoading').css('position', 'absolute');
		$('#viewLoading').css('left', $('#'+flag).offset().left);
		$('#viewLoading').css('top', $('#'+flag).offset().top);
		$('#viewLoading').css('width', $('#'+flag).css('width'));
		$('#viewLoading').css('height', $('#'+flag).css('height'));
		$('#viewLoading').fadeIn(500);
	}
	document.location = "./visitor_inoutlist_excel.php?"+param;
	if(flag != "") {
		$('#viewLoading').fadeOut(500);
	}
}
function pdfVisitListDown(param, flag){
	if(flag != "") {
		$('#viewLoading').css('position', 'absolute');
		$('#viewLoading').css('left', $('#'+flag).offset().left);
		$('#viewLoading').css('top', $('#'+flag).offset().top);
		$('#viewLoading').css('width', $('#'+flag).css('width'));
		$('#viewLoading').css('height', $('#'+flag).css('height'));
		$('#viewLoading').fadeIn(500);
	}
	document.location = "./visitor_inoutlist_pdf.php?"+param;
	if(flag != "") {
		$('#viewLoading').fadeOut(500);
	}
}
function excelVisitorDown(param, flag){
	if(flag != "") {
		$('#viewLoading').css('position', 'absolute');
		$('#viewLoading').css('left', $('#'+flag).offset().left);
		$('#viewLoading').css('top', $('#'+flag).offset().top);
		$('#viewLoading').css('width', $('#'+flag).css('width'));
		$('#viewLoading').css('height', $('#'+flag).css('height'));
		$('#viewLoading').fadeIn(500);
	}
	document.location = "./visitor_excel.php?"+param;
	if(flag != "") {
		$('#viewLoading').fadeOut(500);
	}
}

function procInoutEdit(){

	var idate = $("#in_date").val().replace(/[^0-9]/g,'')+$("#in_hour").val()+$("#in_min").val()+"00";
	var odate = $("#out_date").val().replace(/[^0-9]/g,'')+$("#out_hour").val()+$("#out_min").val()+"00";

	if(checkVaildDate(idate)==false){
		alert(qq123[lang_code]);
		$("#in_hour").focus();
		return false;
	}

	if(odate != "00"){
		if(checkVaildDate(odate)==false){
			alert(qq123[lang_code]);
			$("#out_hour").focus();
			return false;
		}
	}

	if(checkDayValidate('in_date','out_date')==false){
		return false;
	}

	$.post(
		'process_visit_info.php',
		$("#frmEdit").serialize(),
		function(data) {

			alert(data);

			if(data != "Failed"){
				location.reload(true);
			}

		},
		'text'
	);

}

function setTimeNow(obj){

	if(obj.checked){

		var date = new Date().toISOString().substr(0,10);
		var hour = new Date().getHours();
		var min = new Date().getMinutes();

		if(hour < 10) hour = "0"+hour;
		if(min < 10) min = "0"+min;

		$("#out_date").val(date);
		$("#out_hour").val(hour);
		$("#out_min").val(min);

	}else{
		
		$("#out_date").val("");
		$("#out_hour").val("");
		$("#out_min").val("");

	}
}

function checkVaildDate(str){

	var year = str.substring(0, 4);
	var month = str.substring(4, 6);
	var day = str.substring(6, 8);
	var hour = str.substring(8, 10);
	var minute = str.substring(10, 12);
	var second = str.substring(12, 14);

	if(hour.length != 2 ||  minute.length != 2 || second.length != 2){
		return false;
	}

	if(hour >= 24 || minute >= 60 || second >= 60){
		return false;
	}

	return true;
}
function delOuttime(){

	$("#out_date").val("");
	$("#out_hour").val("");
	$("#out_min").val("");
}
function clearMenuMgt(){

	$("#GRADE_CODE").val('');
	$("#GRADE_NAME").val('');
	$("#CONTENTS").val('');
	$("#LINK").val('');

	$("#old_file_on_kr").val('');
	$("#old_file_off_kr").val('');

	$("#M_IMG_ON_KR").hide();
	$("#M_IMG_ON_CN").hide();
	$("#M_IMG_ON_EN").hide();
	$("#M_IMG_OFF_KR").hide();
	$("#M_IMG_OFF_CN").hide();
	$("#M_IMG_OFF_EN").hide();

	$("#SORT").val('');
	$("#USE_YN").val('');

	$("#GRADE_NAME").removeAttr("readonly").css("background-color","#ffffff");
	

}
function setMenuMgt(mid){

	var m = $("#mn"+mid);

	$("#GRADE_CODE").val(mid);
	$("#GRADE_NAME").val($(m).find("span[name='name']").text());
	$("#CONTENTS").val($(m).find("span[name='desc']").text());
	$("#LINK").val($(m).find("span[name='link']").text());

	$("#GRADE_NAME").attr("readonly",true).css("background-color","#e7e7e7");

	
	if($("#GRADE_GUBUN").length > 0){
		$("#GRADE_GUBUN").val($(m).find("span[name='gubun']").text());
	}
	
	var img_on = $(m).find("span[name='img_on']").text();
	var img_off = $(m).find("span[name='img_off']").text()
	
	if(img_on != ""){
		$("#M_IMG_ON_KR").show();
		$("#M_IMG_ON_CN").show();
		$("#M_IMG_ON_EN").show();
	}

	if(img_off != ""){
		$("#M_IMG_OFF_KR").show();
		$("#M_IMG_OFF_CN").show();
		$("#M_IMG_OFF_EN").show();
	}
	
	$("#old_file_on_kr").val(img_on);
	$("#old_file_off_kr").val(img_off);

	$("#M_IMG_ON_KR").unbind("click").bind("click",function(){window.open('about:blank').location.href = "images/"+img_on });
	$("#M_IMG_OFF_KR").unbind("click").bind("click",function(){window.open('about:blank').location.href = "images/"+img_off });
	$("#M_IMG_ON_CN").unbind("click").bind("click",function(){window.open('about:blank').location.href = "images/cn_"+img_on });
	$("#M_IMG_OFF_CN").unbind("click").bind("click",function(){window.open('about:blank').location.href = "images/cn_"+img_off });
	$("#M_IMG_ON_EN").unbind("click").bind("click",function(){window.open('about:blank').location.href = "images/en_"+img_on });
	$("#M_IMG_OFF_EN").unbind("click").bind("click",function(){window.open('about:blank').location.href = "images/en_"+img_off });
	
	$("#SORT").val($(m).find("span[name='sort']").text());
	$("#USE_YN").val($(m).find("span[name='use_yn']").text());
}

function processMenuMgt(proc, grade_code) {

	if(proc=='DEL'){
		$("#GRADE_CODE").val(grade_code);

		//alert_str = "삭제";
		alert_str = qq111[lang_code];
	}else{

		grade_code = $("#GRADE_CODE").val();

		if(grade_code == "") {
			//alert_str = "등록";
			alert_str = qq109[lang_code];
			proc = "REG";
		} else {
			//alert_str = "수정";
			alert_str = qq110[lang_code];
			proc = "EDIT";
		}
	}

	$("#proc").val(proc);

	if(!confirm(""+alert_str+" " + qq150[lang_code])) {
		return false;
	}


	var form = $('#frmMenu')[0];
	 var data = new FormData(form);
				
	$.ajax({
			type: "POST",
			enctype: 'multipart/form-data',
			url: "process_mgt_menu.php",
			data: data,
			processData: false,
			contentType: false,
			cache: false,
			timeout: 600000,
			success: function (data) {

				alert(data);
				location.reload(true);

			},
			error: function (e) {
				
			   //alert(e.responseText);
			   alert("error");

			}
		});

}

function ScanBarcode(obj){
	
	var event = window.event || e;

	if(event.keyCode=="13"){ 

		var barcode = $(obj).val();

		if(isNaN(barcode)) return false;

		location.href= "./visit_info.php?barcode="+barcode;

	}
}


function editVisitorInfo() {

	var user_name = $("#user_name").val();

	if(user_name == "") {
		//alert("사용자이름이 항목값이 올바르게 입력되지 않았습니다. 확인 바랍니다.");
		alert(qq142[lang_code]);
		return false;
	}
	
	$.post(
		'process_visitor_info.php',
		$("#frmUser").serialize(),
		function(data) {
			alert(data.msg);
			if(data.status){
				location.reload(true);
			}
		},
		'json'
	);

}
function chgGraphVisit(type,  flag, pos){

	var v_user_seq = $("#chart_v_user_seq").val();
	var mgr_name = $("#chart_mgr_name").val();
	var mgr_dept = $("#chart_mgr_dept").val();
	var company = $("#chart_company").val();


//	alert(v_user_seq+"/"+mgr_name+"/"+mgr_dept+"/"+company);
	
	$.post(
				'./pop_visit_chart.php',
				{	
					'v_user_seq':v_user_seq
					, 'manager_name' : mgr_name
					, 'manager_department' : mgr_dept
					, 'company_name' : company
					, 'type' : type
					, 'pos' : pos
				 },
				function(data) {
					$("#"+flag).html(data);
				},
				'html'
			);
}

function popPrintTicket(v_user_list_seq){
	
	var url = "./pop_visit_ticket.php?v_user_list_seq="+v_user_list_seq;

	popupOpen(url,'Visit Ticket',410,600);
}
function generateBarcode(oBarcode,display_value){

	var value = oBarcode.value;
	var btype = oBarcode.btype;
	var renderer = oBarcode.renderer;

	var quietZone = false;

	var settings = {
	  output:renderer,
	  bgColor: oBarcode.settings.bgcolor,
	  color: oBarcode.settings.color,
	  barWidth: oBarcode.settings.barWidth,
	  barHeight: oBarcode.settings.barHeight,
	  moduleSize: 0,
	  posX: 0,
	  posY: 0,
	  showHRI:display_value,
	  addQuietZone: 1
	};

	$("#"+oBarcode.id).barcode(value, btype, settings);
}

function printTicket(area_id){

	var initBody = document.body.innerHTML;
	
	window.onbeforeprint = function(){
		document.body.innerHTML = document.getElementById(area_id).innerHTML;
	}
	window.onafterprint = function(){
		document.body.innerHTML = initBody;
	}
	window.print(); 


}
function popupOpen(url,name,width,height){

//	if(popup !=null && !popup.closed){	//팝업이 떠 있는 경우.
//		popup.close();
//	}

	popup =  window.open(url,name,"width="+width+",height="+height+",resizable=no, scrollbars=no, status=no;");
	popup.focus();

}
function filedownload(){

	var file_seq = 
		$("input[name='select_checkbox']:checked").map(function(idx){
			return this.value;
		}).get().join(",");

	var down_gubun = file_seq == ""? "popchangefileall" : "popchangefileselect";

	document.downfileFrm.file_seq.value = file_seq;
	document.downfileFrm.DOWN_GUBUN.value = down_gubun;
	document.downfileFrm.method = "GET";	//post전송시 https 접속시 파일다운로드가 정상적으로 안되는 현상..
	document.downfileFrm.submit();

}
function mailfiledownload(){

	var file_seq = 
		$("input[name='select_checkbox']:checked").map(function(idx){
			return this.value;
		}).get().join(",");

	var down_gubun = file_seq == ""? "mailtabAll" : "mailtabSelect";

	document.downfileFrm.file_seq.value = file_seq;
	document.downfileFrm.DOWN_GUBUN.value = down_gubun;
	document.downfileFrm.method = "GET";	//post전송시 https 접속시 파일다운로드가 정상적으로 안되는 현상..
	document.downfileFrm.submit();

}
function reqfiledownload(){

	var file_seq = 
		$("input[name='select_checkbox']:checked").map(function(idx){
			return this.value;
		}).get().join(",");

	var down_gubun = file_seq == ""? "advancetabAll" : "advancetabSelect";

	document.downfileFrm.file_seq.value = file_seq;
	document.downfileFrm.DOWN_GUBUN.value = down_gubun;
	document.downfileFrm.method = "GET";	//post전송시 https 접속시 파일다운로드가 정상적으로 안되는 현상..
	document.downfileFrm.submit();

}
function onSelect02(){

	var checked = $("#select_tmp").prop("checked");

	$("input[name='select_checkbox']").prop("checked",checked);
}
function excelRefVisitListDown(param, flag){
	if(flag != "") {
		$('#viewLoading').css('position', 'absolute');
		$('#viewLoading').css('left', $('#'+flag).offset().left);
		$('#viewLoading').css('top', $('#'+flag).offset().top);
		$('#viewLoading').css('width', $('#'+flag).css('width'));
		$('#viewLoading').css('height', $('#'+flag).css('height'));
		$('#viewLoading').fadeIn(500);
	}
	document.location = "./visitlist_excel.php?"+param;
	if(flag != "") {
		$('#viewLoading').fadeOut(500);
	}
}
function checkDayValidate2(sd, ed,reset) {

	if(reset=="") reset = "Y";

	if(document.getElementById(sd).value != "" && document.getElementById(ed).value != ""){

		if(document.getElementById(sd).value > document.getElementById(ed).value) {
			//시작일이 종료일 보다 큽니다. 날짜를 다시 지정해 주세요
			alert(qq208[lang_code]);
			if(reset=="Y"){
				document.getElementById(sd).value = "";
				document.getElementById(ed).value = "";
			}
			return false;
		}
	}
	
}
//qq182[lang_code]
function inputReport10CheckSEMES(frm, div, pos){
	if(frm.subject.value==""){
		//alert("제목을 입력하세요");
		alert("제목을 입력하세요");
		frm.subject.focus();
		return false;
	}
	if(frm.persion.value==""){
		//alert("보고자를 입력하세요");
		alert("보고자를 입력하세요");
		frm.persion.focus();
		return false;
	}
	if(frm.rdate.value==""){
		//alert("보고일자를 입력하세요");
		alert("보고일자를 입력하세요");
		frm.rdate.focus();
		return false;
	}
	if(frm.sdate.value==""){
		//alert("시작일을 입력하세요");
		alert("시작일을 입력하세요");
		frm.sdate.focus();
		return false;
	}
	if(frm.edate.value==""){
		//alert("종료일을 입력하세요");
		alert("종료일을 입력하세요");
		frm.edate.focus();
		return false;
	}

	var graphm  = frm.graphm; 
	var chk = graphm.checked; 
	
	if(chk) {
		graphm = graphm.value; 
	} else {
		graphm = 'N'; 
	}

	var graphd  = frm.graphd; 
	chk = graphd.checked; 
	
	if(chk) {
		graphd = graphd.value; 
	} else {
		graphd = 'N'; 
	}

	
	var graphh  =  frm.graphh; 
	chk = graphh.checked; 
	

	if(chk) {
		graphh = graphh.value; 
	} else {
		graphh = 'N'; 
	}
	
	//graphh = 'N'; 

	var graphw  = frm.graphw; 
	chk = graphw.checked; 
	
	if(chk) {
		graphw = graphw.value; 
	} else {
		graphw = 'N'; 
	}

	var ggateCheckinout  = frm.ggateCheckinout; 
	chk = ggateCheckinout.checked; 
	
	if(chk) {
		ggateCheckinout = ggateCheckinout.value; 
	} else {
		ggateCheckinout = 'N'; 
	}

	var gVisitorCheckinout  = frm.gVisitorCheckinout; 
	chk = gVisitorCheckinout.checked; 
	
	if(chk) {
		gVisitorCheckinout = gVisitorCheckinout.value; 
	} else {
		gVisitorCheckinout = 'N'; 
	}

	var gVisitor  = frm.gVisitor; 
	chk = gVisitor.checked; 
	
	if(chk) {
		gVisitor = gVisitor.value; 
	} else {
		gVisitor = 'N'; 
	}

	
	if(div == "left") {
		frm.display_flag.value = "Y";
		
		$.post(
			'./report10_tab.php',
			{ 'subject':frm.subject.value,
				'persion':frm.persion.value,
				'rdate':frm.rdate.value,
				'sdate':frm.sdate.value,
				'edate':frm.edate.value,
				'graphm':graphm,
				'graphd':graphd,
				'graphh':graphh,
				'graphw':graphw,
				'ggateCheckinout':ggateCheckinout,
				'gVisitorCheckinout':gVisitorCheckinout,
				'gVisitor':gVisitor,
				'display_flag':'Y',
				'div':div,
				'pos':pos
			 },
			function(data) {
				$('#reportTab').html(data);
				$('#reportTab').show('blind');
			},
			'html'
		);
	} else if(div == "pop") {
		
		frm.display_flag.value = "Y";
		frm.div.value = "popup";

//		IE11에서 팝업창으로 폼 전송시 탭으로 전송되는 문제 발생 --> URL 파라미터 방식을 사용해 데이터 전송

		var param = 'subject='+encodeURI(encodeURIComponent(frm.subject.value))+
				'&persion='+encodeURI(encodeURIComponent(frm.persion.value))+
				'&rdate='+frm.rdate.value+
				'&sdate='+frm.sdate.value+
				'&edate='+frm.edate.value+
				'&graphm='+graphm+
				'&graphd='+graphd+
				'&graphh='+graphh+
				'&graphw='+graphw+
				'&ggateCheckinout='+ggateCheckinout+
				'&gVisitorCheckinout='+gVisitorCheckinout+
				'&gVisitor='+gVisitor+
				'&display_flag='+frm.display_flag.value+
				'&div='+frm.div.value+
				'&pos='+pos+
				'&graphw='+graphw+
				'&graphh='+graphh+
				'&graphd='+graphd


		window.open('report10_tab.php?'+param , 'report','top=10px, left=100px, width=1100, height=960, menubar=no,toolbar=no,location=no,status=no,resizable=yes,scrollbars=yes').focus();

	}else if(div == "excel") {
		frm.display_flag.value = "Y";
		frm.target="report";
		frm.action = "report10_tab_excel.php";
		document.frm.submit();
	}
}
function inputReport10Check(frm, div){
	if(frm.subject.value==""){
		//alert("제목을 입력하세요.");
		alert(qq126[lang_code]);
		frm.subject.focus();
		return false;
	}
	if(frm.persion.value==""){
		//alert("보고자를 입력하세요.");
		alert(qq127[lang_code]);
		frm.persion.focus();
		return false;
	}
	if(frm.rdate.value==""){
		//alert("보고일자를 입력하세요.");
		alert(qq128[lang_code]);
		frm.rdate.focus();
		return false;
	}
	if(frm.sdate.value==""){
		//alert("시작일을 입력하세요.");
		alert(qq129[lang_code]);
		frm.sdate.focus();
		return false;
	}
	if(frm.edate.value==""){
		//alert("종료일을 입력하세요.");
		alert(qq130[lang_code]);
		frm.edate.focus();
		return false;
	}

	var graphm  = frm.graphm; 
	var chk = graphm.checked; 
	
	if(chk) {
		graphm = graphm.value; 
	} else {
		graphm = 'N'; 
	}

	var graphd  = frm.graphd; 
	chk = graphd.checked; 
	
	if(chk) {
		graphd = graphd.value; 
	} else {
		graphd = 'N'; 
	}

	var graphh  =  frm.graphh; 
	chk = graphh.checked; 
	
	if(chk) {
		graphh = graphh.value; 
	} else {
		graphh = 'N'; 
	}

	var graphw  = frm.graphw; 
	chk = graphw.checked; 
	
	if(chk) {
		graphw = graphw.value; 
	} else {
		graphw = 'N'; 
	}

	var ggateCheckinout  = frm.ggateCheckinout; 
	chk = ggateCheckinout.checked; 
	
	if(chk) {
		ggateCheckinout = ggateCheckinout.value; 
	} else {
		ggateCheckinout = 'N'; 
	}

	var gVisitorCheckinout  = frm.gVisitorCheckinout; 
	chk = gVisitorCheckinout.checked; 
	
	if(chk) {
		gVisitorCheckinout = gVisitorCheckinout.value; 
	} else {
		gVisitorCheckinout = 'N'; 
	}

	var gVisitor  = frm.gVisitor; 
	chk = gVisitor.checked; 
	
	if(chk) {
		gVisitor = gVisitor.value; 
	} else {
		gVisitor = 'N'; 
	}

	

	if(div == "left") {
		frm.display_flag.value = "N";
		$('#reportTab').hide();
		$.post(
			'./report_tab.php',
			{ 'subject':frm.subject.value,
				'persion':frm.persion.value,
				'rdate':frm.rdate.value,
				'sdate':frm.sdate.value,
				'edate':frm.edate.value,
				'graphm':graphm,
				'graphd':graphd,
				'graphh':graphh,
				'graphw':graphw,
				'ggateCheckinout':ggateCheckinout,
				'gVisitorCheckinout':gVisitorCheckinout,
				'gVisitor':gVisitor
			 },
			function(data) {
				$('#reportTab').html(data);
				$('#reportTab').show('clip');
			},
			'html'
		);
	} else if(div == "pop") {
		frm.display_flag.value = "Y";
		frm.action = "report10_tab.php";
		window.open('' , 'report','top=10px, left=100px, width=990, height=960, menubar=no,toolbar=no,location=no,status=no,resizable=yes,scrollbars=yes').focus();
		frm.target="report";
		document.frm.submit();

	}else if(div == "excel") {
		frm.display_flag.value = "Y";
		frm.target="report";
		frm.action = "report10_tab_excel.php";
		document.frm.submit();
	}
}
function enterSubmit(frm){
	
	var e = window.event;

	var searchopt = $("#searchopt").val();


	if(searchopt != ""){
	 if (e.keyCode == 13) {
		frm.submit();
	 }
	}
}
function checkAgreeTemplate(obj){

	var temp = $(obj).val();

	viewAgrmt('tabSecurity');

	$("#agree_security div[name='temp']").hide();
	$("#agree_security_"+temp).show();
}

function userVisitInfoDelete(visit_info_seq){

	if(visit_info_seq == ""){
		//alert("정보가 잘못 되었습니다. 페이지를 Refresh 한 후 다시 시도해보세요.");
		alert(qq120[lang_code]);
	}else{
		
		var alertStr = qq212[lang_code];

		if(confirm(alertStr)){

			$.post(
				'./user_visitinfo_delete.php',
				{ 
					'visit_info_seq':visit_info_seq
				 },
				function(data) {
					alert(data);
					location.reload(true);
				},
				'text'
			);

		}
	}
}

function notAllowedApp() {

	var seq = $("#app_seq").val();
	var proc = (seq=="") ? "REG" : "EDIT";
	$("#proc").val(proc);

	var app_name = $("#app_name").val();

	if(proc =="REG"){

		alert_str = qq109[lang_code];

	}else if(proc=="EDIT"){

		alert_str = qq110[lang_code];
		
		if(seq==""){
			
			//프로그램을 선택하세요.
			alert(qq213[lang_code]);
			return false;

		}

	}

	if(app_name==""){
			
		alert(qq214[lang_code]);
		$("#app_name").focus();
		return false;
	}
	
	
	if(confirm(""+alert_str+" " + qq150[lang_code])) {
		$.post(
					'./process_not_allowed_app.php',
					$("#frm").serialize(),
					function(data) {
						alert(data);
						location.reload(true);

					},
					'text'
				);
	}
}

function notAllowedAppDelete(seq){

	$("#app_seq").val(seq);
	$("#proc").val('DEL');

	if(seq==""){
			
		//프로그램을 선택하세요.
		alert(qq213[lang_code]);
		return false;

	}

	var alert_str = qq111[lang_code];

	if(confirm(""+alert_str+" " + qq150[lang_code])) {
		$.post(
					'./process_not_allowed_app.php',
					$("#frm").serialize(),
					function(data) {
						alert(data);
						location.reload(true);

					},
					'text'
				);
	}
}

function setNotAllowedProcess(app_seq) {

	var dt = $("#dt_"+app_seq);
	var app_name = dt.find("span[name='app_name']").text();
	var app_detail = dt.find("span[name='app_detail']").text();
	var use_yn = dt.find("span[name='use_yn']").text();
	var gubun = dt.find("span[name='gubun']").text();
	
	var gubun_code = ''
	if(gubun=='Program'){
		gubun_code = 'APP';
	}else if(gubun=='Process'){
		gubun_code = 'PROCESS';
	}else if(gubun=='Hash'){
		gubun_code = 'HASH';
	}
	
	$("#app_seq").val(app_seq);
	$("#app_name").val(app_name);
	$("#app_detail").val(app_detail);
	$("#use_flag").val(use_yn);

	$("input[name='gubun'][value='"+gubun_code+"']").prop("checked", true);

}
function clearNotAllowedProcess(){

	$("#frm").find("input:text").val("");
	$("#use_flag option:eq(0)").prop("selected",true);
	$("input[name='gubun'][value='APP']").prop("checked", true);
}

function mgtAppProcess() {

	var seq = $("#app_seq").val();
	var proc = (seq=="") ? "REG" : "EDIT";
	$("#proc").val(proc);

	var app_name = $("#app_name").val();

	if(proc =="REG"){

		alert_str = qq109[lang_code];


	}else if(proc=="EDIT"){

		alert_str = qq110[lang_code];
		
		if(seq==""){
			
			//프로그램을 선택하세요.
			alert(qq213[lang_code]);
			return false;

		}
	}

	if(app_name==""){
		
		$("#app_name").focus();
		alert(qq214[lang_code]);
		return false;
	}
	
	
	if(confirm(""+alert_str+" " + qq150[lang_code])) {
		$.post(
					'./process_mgt_application.php',
					$("#frm").serialize(),
					function(data) {
						alert(data);
						location.reload(true);

					},
					'text'
				);
	}
}

function mgtAppProcessDelete(seq){

	$("#app_seq").val(seq);
	$("#proc").val('DEL');

	if(seq==""){
			
		//프로그램을 선택하세요.
		alert(qq213[lang_code]);
		return false;

	}

	var alert_str = qq111[lang_code];

	if(confirm(""+alert_str+" " + qq150[lang_code])) {
		$.post(
					'./process_mgt_application.php',
					$("#frm").serialize(),
					function(data) {
						alert(data);
						location.reload(true);

					},
					'text'
				);
	}
}

function setMgtAppProcess(app_seq) {

	var dt = $("#dt_"+app_seq);
	var app_name = dt.find("span[name='app_name']").text();
	var publisher = dt.find("span[name='publisher']").text();
	var app_version = dt.find("span[name='app_version']").text();
	var app_detail = dt.find("span[name='app_detail']").text();
	var use_yn = dt.find("span[name='use_yn']").text();

	$("#app_seq").val(app_seq);
	$("#app_name").val(app_name);
	$("#publisher").val(publisher);
	$("#app_version").val(app_version);
	$("#app_detail").val(app_detail);
	$("#use_flag").val(use_yn);

}
function clearMgtAppProcess(){

	$("#frm").find("input").val("");
}

function submitNotice(frm, flag){
	
	var uploadFile = $('#upche_file').val();
	
	if(uploadFile > ''){

		var ext = uploadFile.split('.').pop().toLowerCase();
		var allowfile = new Array('gif','png','jpg','jpeg','doc','docx','xls','xlsx','hwp','pdf','zip');
		
		if($.inArray(ext, allowfile) == -1) {
		  alert(qq216[lang_code]+"\n"+qq217[lang_code]+":"+allowfile.toString());
		  $("#upche_file").val(""); 
		  return;
		}

	}
	sub_function(frm,flag);
	
}
function retryApproval(){

	var cnt = $("input[name='cbx']:checked").length;

	if(cnt==0){
		alert(qq218[lang_code]);
		return;
	}

	var takout_seqs = 
		$("input[name='cbx']:checked").map(function(idx){
			return this.value;
		}).get().join(",");

	$.post(
		'process_approval.php',
		{ 'takout_seqs':takout_seqs
		 },
		function(data) {
			alert(data.msg);
			if(data.status){
				location.reload(true);
			}
		},
		'json'
	);


}
function addRowCardInfo(){

	//수정모드 입력란 추가 불가
	if($("#VISIT_CARD_SEQ").val()!=""){
		alert("Edit Mode : " +qq219[lang_code]);
		return;
	}

	var target = $("#inputBox");
	
	var item = $("#inputBox tr:eq(0)").html();

	var cnt = $("#input_cnt").val();

	for(var i = 0 ; i < cnt  ; i++){
		
		$(target).append("<tr>"+item+"</tr>");
		$(target).find("tr:last").find("input").val("");
	}
}
function removeRowCardInfo(){
	
	var target = $("#inputBox");

	var cnt = $("#input_cnt").val();

	for(var i = 0 ; i < cnt  ; i++){

		if(target.find("tr").length==1) break;
		
		$(target).find("tr:last").remove();
	}
}
function clearVisitCard(){

	$("#VISIT_CARD_SEQ").val("");
	$("#inputBox").find("input").val("");
}
function processVisitCard(){

	var vaild;
	var proc = $("#VISIT_CARD_SEQ").val()=="" ? "REG" : "EDIT";
	
	$("#proc").val(proc);
		
	$("#inputBox tr").each(function(){
		
		var retVal;

		var uid = $(this).find("input[name='UID[]']").val();
		var cid = $(this).find("input[name='CID[]']").val();

		if(uid != "" && cid != "") {
			vaild = 'OK';
			return false;
		}

	});

	if(vaild !='OK'){
		alert(qq220[lang_code]);
		return;
	}

	$.post(
		'./process_mgt_visitcard.php',
		$("#frm").serialize(),
		function(data) {
			alert(data.msg);
			if(data.status){
				location.reload(true);
			}
		},
		'json'
	);
}
function deleteVisitCard(VISIT_CARD_SEQ){

	if(!confirm(qq175[lang_code])) {
		return false;
	}

	$("#proc").val("DELETE");

	$("#VISIT_CARD_SEQ").val(VISIT_CARD_SEQ);

	$.post(
		'./process_mgt_visitcard.php',
		$("#frm").serialize(),
		function(data) {
			alert(data.msg);
			if(data.status){
				location.reload(true);
			}
		},
		'json'
	);
}
function checkDeleteVisitCard(){

	var VISIT_CARD_SEQ = $(".cbxCard:checked").map(function(){
		
		return this.value;

	}).get().join(",");

	if(VISIT_CARD_SEQ==""){
		alert(qq221[lang_code]);
		return;
	}
	
	deleteVisitCard(VISIT_CARD_SEQ);
	
}
function editVisitCard(VISIT_CARD_SEQ,UID,CID){

	$("#inputBox tr:gt(0)").remove();

	$("#VISIT_CARD_SEQ").val(VISIT_CARD_SEQ);
	$("input[name='UID[]']").val(UID);
	$("input[name='CID[]']").val(CID);

}

function mgtFileHiderAppProcess() {

	var seq = $("#app_seq").val();
	var proc = (seq=="") ? "REG" : "EDIT";
	$("#proc").val(proc);

	var app_name = $("#app_name").val();

	if(proc =="REG"){

		alert_str = qq109[lang_code];


	}else if(proc=="EDIT"){

		alert_str = qq110[lang_code];
		
		if(seq==""){
			
			//프로그램을 선택하세요.
			alert(qq213[lang_code]);
			return false;

		}
	}

	if(app_name==""){
		
		$("#app_name").focus();
		alert(qq214[lang_code]);
		return false;
	}
	
	
	if(confirm(""+alert_str+" " + qq150[lang_code])) {
		$.post(
					'./process_mgt_file_hider_app.php',
					$("#frm").serialize(),
					function(data) {
						alert(data);
						location.reload(true);

					},
					'text'
				);
	}
}
function mgtFileHiderAppProcessDelete(seq){

	$("#app_seq").val(seq);
	$("#proc").val('DEL');

	if(seq==""){
			
		//프로그램을 선택하세요.
		alert(qq213[lang_code]);
		return false;

	}

	var alert_str = qq111[lang_code];

	if(confirm(""+alert_str+" " + qq150[lang_code])) {
		$.post(
					'./process_mgt_file_hider_app.php',
					$("#frm").serialize(),
					function(data) {
						alert(data);
						location.reload(true);

					},
					'text'
				);
	}
}

function setMgtFileHiderAppProcess(app_seq) {

	var dt = $("#dt_"+app_seq);
	var app_name = dt.find("span[name='app_name']").text();
	var service_name = dt.find("span[name='service_name']").text();
	var file_name = dt.find("span[name='file_name']").text();
	var start_type = dt.find("span[name='start_type']").text();
	var stop_type = dt.find("span[name='stop_type']").text();
	var service_type = dt.find("span[name='service_type']").text();

	$("#app_seq").val(app_seq);
	$("#app_name").val(app_name);
	$("#service_name").val(service_name);
	$("#file_name").val(file_name);
	$("#start_type").val(start_type);
	$("#stop_type").val(stop_type);
	$("#service_type").val(service_type);

}
function clearMgtFileHiderAppProcess(){

	$("#frm").find("input").val("");
}
function checkRelValidate(sd, ed) {

	if(document.getElementById(sd).value == "") {
		//시작일을 설정하세요
		alert(qq207[lang_code]);
		return false;
	}else if(document.getElementById(sd).value != "" && document.getElementById(ed).value != ""){

		if(document.getElementById(sd).value > document.getElementById(ed).value) {
			//시작일이 종료일 보다 큽니다. 날짜를 다시 지정해 주세요
			alert(qq208[lang_code]);	
			document.getElementById(ed).value = "";
			return false;
		}
	}

	
	var start = new Date($("#"+sd).val());
	var end = new Date($("#"+ed).val());

	var diffDate = (end - start) / (1000 * 60 * 60 * 24);
	var days = Math.round(diffDate)+1;

	$("#rel_days").val(days);
	
}
function setRelDate(elem){

	elem.value = elem.value.replace(/[^0-9]/g,'');

	var days = $(elem).val();

	if(days==""){
		days = 0;
	}else{
		days -= 1;
	}

	var date = new Date($("#rel_start_date").val());
	date.setDate(date.getDate() + days);

	var end_date = $.datepicker.formatDate('yy-mm-dd', date);
 	$("#rel_end_date").val(end_date);

}
function addRowAddMail(){

	var target = $("#tblAddMail");
	
	var item = $("#tblAddMail tr:eq(0)").html();

	var cnt = $("#input_cnt").val();

	for(var i = 0 ; i < cnt  ; i++){
		
		$(target).append("<tr>"+item+"</tr>");
		$(target).find("tr:last").find("input").val("");
		$(target).find("tr:last").find("select").val("Y").prop("selected",true);
	}
}
function removeRowAddMail(){
	
	var target = $("#tblAddMail");

	var cnt = $("#input_cnt").val();

	for(var i = 0 ; i < cnt  ; i++){

		if(target.find("tr").length==1) break;
		
		$(target).find("tr:last").remove();
	}
}
function checkBlankData(id){

	var str = $("#"+id).val();

	if(str==""){
		alert(qq223[lang_code]);
		$("#"+id).focus();
		return false;
	}
	return true;
}
function checkBlankDataName(id,name){

	var str = $("#"+id).val();

	var tag_name = $("#"+id).prop('tagName');

	if(str==""){

		var alert_msg = tag_name=="SELECT" ? qq224[lang_code] : qq223[lang_code];

		alert(alert_msg+" - "+name);
		
		$("#"+id).focus();
		return false;
	}
	return true;
}
function checkBlankDataName2(id){

	var str = $("#"+id).val();

	var name = getLabelName(id);

	var tag_name = $("#"+id).prop('tagName');
	
	if(name=="" && tag_name =="SELECT"){
		name = $("#"+id+" option[value='']").text();
	}
	
	if(str==""){
		
		var alert_msg = tag_name=="SELECT" ? qq224[lang_code] : qq223[lang_code];

		alert(alert_msg+" - "+name);
		
		$("#"+id).focus();
		return false;
	}
	return true;
}

function getLabelName(id){
	
	 var label = $("label[for='"+id+"']").text();
	 return label;
}

function chgGraphVist(type, v_user_seq, email, flag, pos){

	$.post(
				'./pop_visit_inout_list_tab.php',
				{ 'v_user_seq':v_user_seq, 'email':email, 'type' : type, 'pos' : pos
				 },
				function(data) {
					$("#"+flag).html(data);
				},
				'html'
			);
}
function selectWindowsprogram(wo_check_seq){

	var elem = $(".wo_check_"+wo_check_seq);

	var program_type = $(elem).find("span[name='program_type']").text();
	var license_family = $(elem).find("span[name='license_family']").text();
	var ver_major = $(elem).find("span[name='ver_major']").text();
	var ver_minor = $(elem).find("span[name='ver_minor']").text();
	var ver_build = $(elem).find("span[name='ver_build']").text();
	var check_type = $(elem).find("span[name='check_type']").text();
	var work_type = $(elem).find("span[name='work_type']").text();
	var desc = $(elem).find("span[name='desc']").text();
	var use_yn = $(elem).find("span[name='use_yn']").text();
	var user_dpt_type = $(elem).find("span[name='user_dpt_type']").text();

	$("#wo_check_seq").val(wo_check_seq);
	$("#program_type").val(program_type);
	$("#license_family").val(license_family);
	$("#ver_major").val(ver_major);
	$("#ver_minor").val(ver_minor);
	$("#ver_build").val(ver_build);
	$("#check_type").val(check_type);
	$("#work_type").val(work_type);
	$("#desc").val(desc);
	$("#w_use_yn").val(use_yn);
	$("#user_dpt_type").val(user_dpt_type);
}
function processWindowsprogram(){

	var wo_check_seq = $("#wo_check_seq").val();
	var proc = wo_check_seq=="" ? "REG" : "EDIT";
	
	$("#proc").val(proc);

	if(!checkBlankDataName2('program_type')) return false;
	if(!checkBlankDataName2('license_family')) return false;
	if(!checkBlankDataName2('ver_major')) return false;
	if(!checkBlankDataName2('ver_minor')) return false;
	if(!checkBlankDataName2('ver_build')) return false;
	if(!checkBlankDataName2('user_dpt_type')) return false;

	$.post(
		'./process_windows_program.php',
		$("#frmWO").serialize(),
		function(data) {
			alert(data);
			location.reload(true);
		},
		'text'
	);
}
function processWindowsprogramDelete(wo_check_seq){

	if(!confirm(qq175[lang_code])) return false;

	$.post(
		'./process_windows_program.php',
		{
			"wo_check_seq" : wo_check_seq,
			"proc" : "DEL"
		},
		function(data) {
			alert(data);
			location.reload(true);
		},
		'text'
	);
}
function clearForm(frm){
	
	$(frm).find("input").val('');
	$(frm).find("select").each(function(){
		$(this).find("option:eq(0)").prop("selected",true);
	});
}
function onlyNumber(elem){

	//onkeyup="onlyNumber(this)";

	var num = $(elem).val().replace(/[^0-9]/g, "");
	 $(elem).val(num);
}
function processCodeConfig(){

	$.post(
		'./process_code_config.php',
		{
			"CODE_DIV"	: $("#CODE_DIV").val()
			,"CODE_NAME" : $("#CODE_NAME").val()
		},
		function(data) {
			alert(data);
		},
		'text'
	);
}
function checkAgreeType(){
	
	var value = $("#selSignPadYn").val();

	if(value=="K"){
		$("#wrapperAGREE_SECURITY_CNT").show();
		$("#wrapperPHOTO_YN").hide();
	}else{
		$("#wrapperAGREE_SECURITY_CNT").hide();
		$("#wrapperPHOTO_YN").show();
	}
}
function excelLinkVisitorListDown(param, flag){
	if(flag != "") {
		$('#viewLoading').css('position', 'absolute');
		$('#viewLoading').css('left', $('#'+flag).offset().left);
		$('#viewLoading').css('top', $('#'+flag).offset().top);
		$('#viewLoading').css('width', $('#'+flag).css('width'));
		$('#viewLoading').css('height', $('#'+flag).css('height'));
		$('#viewLoading').fadeIn(500);
	}
	document.location = "./link_visitor_list_excel.php?"+param;
	if(flag != "") {
		$('#viewLoading').fadeOut(500);
	}
}

function setPreABUConfig2(frm, div) {
	
	var usb, lan, ap, bluetooth, cdrom, webcam, serialport, sdcard, cdromreadonly, usbreadonly;
	var u_name, pc_sn, pc_model, email, phone, company_name, manager_name, manager_department, begin_date, end_date, visit_num, visit_num_seq, manager_email;
	var agent_install, COMPLETE_WORK, mode;
	var device_type;

	if(frm.usb.checked) { 	usb = "1";	}else{		usb = frm.usbreadonly.value;	}
	if(frm.lan.checked) { 	lan = "1";	}else{		lan = "0";	}
	if(frm.ap.checked) { 	ap = "1";	}else{		ap = "0";	}
	if(frm.bluetooth.checked) { 	bluetooth = "1";	}else{		bluetooth = "0";	}
	if(frm.cdrom.checked) { 	cdrom = "1";	}else{		cdrom = frm.cdromreadonly.value;	}
	if(frm.webcam.checked) { 	webcam = "1";	}else{		webcam = "0";	}
	if(frm.serialport.checked) { 	serialport = "1";	}else{		serialport = "0";	}
	if(frm.sdcard.checked) { 	sdcard = "1";	}else{		sdcard = "0";	}
	if(frm.agent_install.checked) { 	agent_install = "2";	} else {		agent_install = "0";	}
	if(frm.COMPLETE_WORK.checked) { 	COMPLETE_WORK = "0";	} else {		COMPLETE_WORK = "4";	}

	user_name = frm.user_name.value;
	pc_sn = frm.pc_sn.value;
	pc_model = frm.pc_model.value;
	email = frm.email.value;
	phone = frm.phone.value;
	company_name = frm.company_name.value;
	manager_name = frm.manager_name.value;
	manager_department = frm.manager_department.value;
	begin_date = frm.begin_date.value;
	end_date = frm.end_date.value;
	visit_num = frm.visit_num.value;
	visit_num_seq = frm.visit_num_seq.value;
	manager_email = frm.manager_email.value;
	device_type = frm.device_type.value;
	//mode = frm.mode.value;
	
	if(!isNumber(phone)) {
		alert("Allow only number in [Phone]");
		return false;
	}

	if( getTextLength(user_name) > 99 || getTextLength(pc_sn) > 99 || getTextLength(pc_model) > 99 || getTextLength(company_name) > 99 || getTextLength(manager_name) > 99 || getTextLength(manager_department) > 99 ) {
		alert(qq188[lang_code] + "\r\n (Check the item length.) ");
		return false;
	}

	if(user_name == "" || phone == "" || company_name == "" || manager_name == "" || manager_department == "" || begin_date == "" || end_date == "" || device_type == "") {
		alert(qq188[lang_code]);
		return false;
	}
	
	//alert(agent_install);

	if(phone != "") {

		$.post(
				'./link_visitor_reg_process.php',
				{	'visit_num':visit_num,
					'visit_num_seq':visit_num_seq,
					'u_name':user_name, 
					'pc_sn':pc_sn, 
					'pc_model':pc_model, 
					'email':email, 
					'phone':phone, 
					'company_name': company_name,
					'manager_name':manager_name, 
					'manager_department':manager_department, 
					'begin_date':begin_date, 
					'end_date':end_date, 
					'visit_num':visit_num, 
					'visit_num_seq':visit_num_seq, 
					'manager_email':manager_email,
					'usb': usb, 
					'lan': lan, 
					'ap': ap, 
					'bluetooth':bluetooth , 
					'cdrom': cdrom, 
					'webcam': webcam, 
					'serialport': serialport, 
					'sdcard': sdcard,
					'div':div,
					'agent_install':agent_install,
					'COMPLETE_WORK':COMPLETE_WORK,
					'device_type':device_type,
					'mode':mode
				 },
				function(data) {
					alert(data);

					//if(data.indexOf("Exception") ==-1) location.reload(true);
					if(data.indexOf("Exception") ==-1) location.href="link_visitor_list.php";
				},
				'text'
			);
	}

}
function hideChar(){
		
	var val = $('.cls_screen_unlock_pwd:visible').find("input").val();

	$('.cls_screen_unlock_pwd:hidden').find("input").val(val);

	$('.cls_screen_unlock_pwd').toggle();
}

function confirmEvent(event_name){
	
	if(event_name==""){
		event_name = $(event.target).text();
	}

	var msg = qq229[lang_code].replace("{#}",event_name);

	return confirm(msg);
}

function sendUserReportCheck(mode){

	var user_info_list_seq = 
		$(".cls_cbx_report:checked").map(function(idx){
			return this.value;
		}).get().join(",");

	if(user_info_list_seq==""){
		alert(qq233[lang_code]);
		return false;
	}

	if(!confirmEvent('')){
		return false;
	}

	_sendUserReport(user_info_list_seq,mode);
}
function sendUserReport(user_info_list_seq,mode){

	var btn_name = "";

	if(mode=="R"){
		btn_name = $("#btn_send_mail").text();
	}else if(mode=="C"){
		btn_name = $("#btn_cancel_mail").text();
	}

    if(!confirmEvent(btn_name)){
		return false;
	}

	_sendUserReport(user_info_list_seq,mode);

}
function _sendUserReport(user_info_list_seq,mode){

		$.post(
			'./process_userlist_mail.php',
			{
				"user_info_list_seq" : user_info_list_seq,
				'mode' : mode
			 },
			function(data) {
				
				alert(data.msg);
				
				if(data.status){
					location.reload();
				}
			},
			'json'
		);
}
function checksubmitMyFrm(){

	//비밀번호변경
	if($("#cbx_pwd_change").prop("checked")){

		//비밀번호 생성 규칙
		//1. 자리수는 9자리이상 20자리 이하
		//2. 영문 대문자 소문자 숫자 특수문자 중에서 3가지 이상 조합되어야 함

		//영문 대문자, 소문자, 숫자, 특수문자 중에서 3가지 이상 만족해야 함
		var pw = document.getElementById("admin_pwd").value;
		var empty_str = /[\s]/;
		var pwd_cnt;
		pwd_cnt = 0;
		
		
		//비밀번호에 공백이 들어 갈 수 없음
		if(empty_str.test(pw)){
		  //alert("비밀번호는 공백없이 입력해주세요.");
			alert(qq203[lang_code]);
		  return false;
		}
		
		//alert(document.getElementById("admin_pwd").value.length);
		if(document.getElementById("admin_pwd").value.length > 0 && document.getElementById("admin_pwd").value.length < 9) {
			alert(qq200[lang_code]);
			document.getElementById("admin_pwd").focus();
			return false;
		}
		
		if(document.getElementById("admin_pwd").value.length > 20) {
			alert(qq201[lang_code]);
			document.getElementById("admin_pwd").focus();
			return false;
		}

		
		pwd_cnt = passwordCheck(pw);
		//alert(pwd_cnt);

		if(document.getElementById("admin_pwd").value.length > 0 && pwd_cnt < 3) {
			alert(qq202[lang_code]);
			document.getElementById("admin_pwd").focus();
			return false;
		}
	}
	
	//화면잠금해제비밀번호
	if($("#cbx_screen_pwd_change").prop("checked")){

		var unlock_pw = $('.cls_screen_unlock_pwd:visible').find("input").val();
		$('.cls_screen_unlock_pwd:hidden').find("input").val(unlock_pw);
		
		//화면자금해제 비밀번호 유효성 체크 6~20자리이내,영문,숫자 조합
		if(unlock_pw != ""){
			var reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/;
			if( !reg.test(unlock_pw) ) {
				alert(qq237[lang_code]);
				$('.cls_screen_unlock_pwd:visible').find("input").focus();
				return false;
			}
		}
	}

	return true;
}
function submitMyFrm(){

	if(!checksubmitMyFrm()){
		return false;
	}

	$.post(
			SITE_NAME+'/process_myinfo.php',
			$("#myFrm").serialize(),
			function(result) {
				alert(result);
			},
			'text'
		);
}
function changeReleaseUnit(val){

	var dev_type  = $("#dev_type").val();
	var str_dev_type = $("#dev_type option:selected").text();

	if(val=="d"){	//일단위 발급
		
		$('#calendarWrapper').show();

		$("#dev_type option[value='FILETAKEOUT']").show();
		$("#dev_type option[value='SECURELOCK']").show();
		$("#dev_type option[value='UNINSTALL']").show();
	
	}else{	//시간단위 발급
	
		$('#calendarWrapper').hide();

		if(dev_type=="FILETAKEOUT" || dev_type =="SECURELOCK" || dev_type =="UNINSTALL"){
			alert(str_dev_type+" - "+qq246[lang_code]);
			$("#dev_type option:eq(0)").prop("selected",true);
		}
		
		//시간단위 해제키 발급이 안되는 항목
		$("#dev_type option[value='FILETAKEOUT']").hide();
		$("#dev_type option[value='SECURELOCK']").hide();
		$("#dev_type option[value='UNINSTALL']").hide();
	}

}
-->
