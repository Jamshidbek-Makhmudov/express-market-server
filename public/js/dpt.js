

var SITE_NAME = "/dpt";

//alert(qupdate[lang_code]);
var lang_img = lang_code;
lang_img = lang_img.toLowerCase() ;

if(lang_code == "CN") {
	var pickerOpts = {
			defaultDate: "+1",
			changeMonth: true,
			changeYear: true,
			showButtonPanel: true,
			showOn: "button",
			buttonImage: "/dpt/images/date_icon.gif",
			buttonImageOnly: true,
			closeText: '关闭',
			prevText: '上月',
			nextText: '下个月',
			currentText: '今天',
			monthNames: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
			monthNamesShort: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
			dayNames: ['星期天','星期一','星期二','星期三','星期四','星期五','星期六'],
			dayNamesShort: ['日','月','火','水','木','金','土'],
			dayNamesMin: ['日','月','火','水','木','金','土'],
			weekHeader: 'Wk',
			dateFormat: 'yy-mm-dd',
			firstDay: 0,
			isRTL: false,
			showMonthAfterYear: true,
			yearSuffix: '',
			monthSuffix: '月',
			showAnim: 'clip'
		};

		
	
} else if(lang_code == "EN") {
	var pickerOpts = {
			defaultDate: "+1",
			changeMonth: true,
			changeYear: true,
			showButtonPanel: true,
			showOn: "button",
			buttonImage: "/dpt/images/date_icon.gif",
			buttonImageOnly: true,
			closeText: 'Close',
			prevText: 'Previous Month',
			nextText: 'Next month',
			currentText: 'Today',
			monthNames: ['January','February','March','April','May','June','July','August','September','October','November','December'],
			monthNamesShort: ['January','February','March','April','May','June','July','August','September','October','November','December'],
			dayNames: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
			dayNamesShort: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
			dayNamesMin: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
			weekHeader: 'Wk',
			dateFormat: 'yy-mm-dd',
			firstDay: 0,
			isRTL: false,
			showMonthAfterYear: true,
			yearSuffix: '',
			monthSuffix: 'Mon',
			showAnim: 'clip'
		};
	
} else {
	var pickerOpts = {
			defaultDate: "+1",
			changeMonth: true,
			changeYear: true,
			showButtonPanel: true,
			showOn: "button",
			buttonImage: "/dpt/images/date_icon.gif",
			buttonImageOnly: true,
			closeText: '닫기',
			prevText: '이전달',
			nextText: '다음달',
			currentText: '오늘',
			monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
			monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
			dayNames: ['일요일','월요일','화요일','수요일','목요일','금요일','토요일'],
			dayNamesShort: ['일','월','화','수','목','금','토'],
			dayNamesMin: ['일','월','화','수','목','금','토'],
			weekHeader: 'Wk',
			dateFormat: 'yy-mm-dd',
			firstDay: 0,
			isRTL: false,
			showMonthAfterYear: true,
			yearSuffix: '',
			monthSuffix: '월',
			showAnim: 'clip'
		};

		lang_img = "";
	
}



function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

//var oPopup = window.createPopup();

//폴더 바로 가기 버튼 클릭
function folderpahtlink(path, explorer) {

	//var aaa = oPopup.document.body;
	//aaa.innerHTML = '<OBJECT><OBJECT NAME="X" CLASSID="CLSID=11111111-1111-1111-111111111111" CODEBASE="C:/windows/explorer.exe"><OBJECT>';
	window.open("folderpahtlink.php?path="+ path + "&explorer=" + explorer, "Folder", "height=860px, width=800px");
	//oPopup.show(290,190,200,200,document.body);
	
}

/**
 * 한글포함 문자열 길이를 구한다
 */
function getTextLength(str) {
    var len = 0;
    for (var i = 0; i < str.length; i++) {
        if (escape(str.charAt(i)).length == 6) {
            len++;
        }
        len++;
    }
    return len;
}

function setPreABUConfig(frm, div) {
	
	var usb, lan, ap, bluetooth, cdrom, webcam, serialport, sdcard, cdromreadonly, usbreadonly;
	var u_name, pc_sn, pc_model, email, phone, company_name, manager_name, manager_department, begin_date, end_date, visit_num, visit_num_seq, manager_email;
	var agent_install, COMPLETE_WORK, mode;

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
	//mode = frm.mode.value;
	
	if(div=="LONG" && !isNumber(phone)) {
		alert("Allow only number in [Phone]");
		return false;
	}

	if( getTextLength(user_name) > 99 || getTextLength(pc_sn) > 99 || getTextLength(pc_model) > 99 || getTextLength(company_name) > 99 || getTextLength(manager_name) > 99 || getTextLength(manager_department) > 99 ) {
		alert(qq188[lang_code] + "\r\n (Check the item length.) ");
		return false;
	}

	if(user_name == "" || phone == "" || company_name == "" || manager_name == "" || manager_department == "" || begin_date == "" || end_date == "" || pc_model == "") {
		alert(qq188[lang_code]);
		return false;
	}
	
	//alert(agent_install);

	if(phone != "") {

		$.post(
				'./guest_pre_config.php',
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
					'mode':mode
				 },
				function(data) {
					alert(data);

					if(data.indexOf("Exception") ==-1) location.reload(true);
					//if(data.indexOf("Exception") ==-1) location.href="guest_long_list.php";
				},
				'text'
			);
	}

}


function setPreConfigChk(frm, media) {
	
	if(media == "USB") {		
			if(frm.usb.checked) {
				frm.usbreadonly.value = "0";
				frm.usbreadonly.style.display = "none";
			}else {
				frm.usbreadonly.style.display = "";
				frm.usbreadonly.value = "0";
			}
	}

	if(media == "CDROM") {		
			if(frm.cdrom.checked) {
				frm.cdromreadonly.value = "0";
				frm.cdromreadonly.style.display = "none";
			}else {
				frm.cdromreadonly.value = "0";
				frm.cdromreadonly.style.display = "";
			}
	}
}


function deletePreinfo(pcode) {
	
	if(confirm( qdeletedeletedatarecovernot[lang_code] )) {
		$.post(
				'./guest_pre_config.php',
				{	'preinfo_seq':pcode,
					'mode':'DELETE'
				 },
				function(data) {
					alert(data);
					location.reload(true);
				},
				'text'
			);
	}
}


function changeUserType(obj, layer) {
	var thisStyle = eval("document.all." + layer + ".style")

	if(obj.value == "2") { //출장자
		thisStyle.display = "block";
	} else if(obj.value == "1") { //내방객
		thisStyle.display = "none";
	} else {

	}

}

function changeMachineType(user_key) {
	//alert(1);
	var MACHINE_TYPE = document.getElementById("MACHINE_TYPE").value;
	
	if(user_key != "") {
	
		$.post(
				'./process_machine_type.php',
				{	'user_key':user_key,
					'MACHINE_TYPE':MACHINE_TYPE
				 },
				function(data) {
					
					alert(data);
					location.reload(true);
					
				},
				'text'
			);
	}
	
}



function checkDayValidate(sd, ed) {

	if(document.getElementById(sd).value == "") {
		//시작일을 설정하세요
		alert(qq207[lang_code]);
		return false;
	}else if(document.getElementById(sd).value != "" && document.getElementById(ed).value != ""){

		if(document.getElementById(sd).value > document.getElementById(ed).value) {
			//시작일이 종료일 보다 큽니다. 날짜를 다시 지정해 주세요
			alert(qq208[lang_code]);	
			document.getElementById(sd).value = "";
			document.getElementById(ed).value = "";
			return false;
		}
	}
	
}

//레이어 보이기 안보이기
function viewlayer(opt, layer) {
//	var thisStyle = eval("document.all." + layer + ".style")
//
//	if(opt) {	
//		thisStyle.display = "block";
//	} else {
//		thisStyle.display = "none";
//	}
	
	if(opt) {	
		$("#"+layer).show();
	} else {
		$("#"+layer).hide();
	}
}



function viewToggle(obj) {
	
	if($('#'+obj).css('display') == "none"){
	 $('#'+obj).css('display', '');
	}else{
	 $('#'+obj).css('display', 'none');
	}

}

function viewToggleNotice(obj, obj1, obj2, obj3, obj4) {

	if(obj3 == "" || obj3 == undefined) {
		alert("viewToggleNotice:" + obj3);
	}

	if(obj4 == "" || obj4 == undefined) {
		alert("viewToggleNotice:" + obj4);
	}

	if(obj1 != "") {
		$('#'+obj1).css('display', 'none');
	}
	if(obj2 != "") {
		$('#'+obj2).css('display', 'none');
	}

	if(obj3 != "") {
		$('#'+obj3).css('display', 'none');
	}

	if(obj4 != "") {
		$('#'+obj4).css('display', 'none');
	}

	if(obj != "") {
		$('#'+obj).css('display', '');
	}
}


function boardList() {
	window.open("board_list.php", "BOARD", "height=700px, width=750px, scrollbars=yes, resizable=yes");
}

function aparchRestart() {
	if(confirm("Really it should restart the web server?")) {
		window.open("./batch/aparche.php", "_blank", "height=500px, width=500px");
	}
}

function aparchRestartCheck() {
	window.open("./batch/yesno.php", "_blank", "height=500px, width=500px");
	
}

function aparchRestartGate(ip, http) {
	if(confirm("Really it should restart the web server?")) {
		window.open( http + "://" + ip + "/dpt/batch/aparche.php", "_blank", "height=500px, width=500px");
	}
}


function aparchRestartGateCheck(ip, http) {
	window.open( http + "://" + ip + "/dpt/batch/yesno.php", "_blank", "height=500px, width=500px");
}


function boardWrite(proc , b_seq) {
	
	if(proc == "VIEW") {
		location.href="board_list_view.php?board_seq="+ b_seq;
		//document.location.href="board_view.php?board_seq="+ b_seq;
	}else{
		location.href="board_list_add.php?proc="+proc+"&board_seq="+ b_seq;
		//document.location.href="board_write.php?proc="+proc+"&board_seq="+ b_seq;
	}
}

function boardProcess(proc , b_seq, flag) {

	var chkConfirm = true;

	if(proc=="DEL") {
		
		//if(!confirm("삭제하시겠습니까? 삭제 데이터는 복구 불가능합니다.")) {
		if(!confirm(qdeletedeletedatarecovernot[lang_code])) {
			chkConfirm = false;
		}
	}

	if(chkConfirm) {
		
		$.post(
					'./process_board.php',
					{	'proc':proc,
						'board_seq':b_seq
					 },
					function(data) {
						
						alert(data);
						//self.close();
						if(flag == "") {
							location.reload(true);
						} else {
							location.href="board_list.php";
						}
					},
					'text'
				);
	}
}

function photoProcess(proc , b_seq, flag) {

	var chkConfirm = true;

	if(proc=="DEL") {
		
		//if(!confirm("삭제하시겠습니까? 삭제 데이터는 복구 불가능합니다.")) {
		if(!confirm(qdeletedeletedatarecovernot[lang_code])) {
			chkConfirm = false;
		}
	}

	if(chkConfirm) {
		
		$.post(
					'./process_photo.php',
					{	'proc':proc,
						'AGREE_CONFIGT_SEQ':b_seq
					 },
					function(data) {
						
						alert(data);
						//self.close();
						if(flag == "") {
							location.reload(true);
						} else {
							location.href="photo_list.php";
						}
					},
					'text'
				);
	}
}

function scandataRestore(proc , inout_seq, scan_kind, path) {

	var user_key, user_key_t, chkConfirm;
	user_key= document.frm.user_key.value;
	user_key_t= document.frm.user_key_t.value;

	chkConfirm = true;

	if(proc=="MOVE") { //복원하는 것
		if(user_key == user_key_t) {
			//if(!confirm("복원할 위치는 현재 사용자입니다. 복원하시겠습니까?")) {
			if(!confirm(qq100[lang_code])) {
				chkConfirm = false;
				return;
			}
		} else {
			//if(!confirm("복원할 위치는 \n" + user_key + "  에서 \n" + user_key_t + "\n 사용자로 복원합니다. 복원하시겠습니까?")) {
			if(!confirm("" + user_key + "  ==>  \n" + user_key_t + "\n " + qq101[lang_code])) {
				chkConfirm = false;
				return;
			}
		}
	}

	if(chkConfirm) {
		location.href="./process_copy.php?proc="+proc+"&inout_seq="+inout_seq+"&scan_kind="+scan_kind+"&path="+path+"&user_key="+user_key+"&user_key_t="+user_key_t; 
		/*
		$.post(
					'./process_copy.php',
					{	'proc':proc,
						'inout_seq':inout_seq,
						'scan_kind':scan_kind,
						'path':path,
						'user_key':user_key,
						'user_key_t':user_key_t
					 },
					function(data) {
						
						alert(data);
						
					},
					'text'
				);
				*/
	}
}

function scandataRestoreNew(proc , inout_seq, scan_kind, path, gate_yn, server_ip) {

	var user_key, user_key_t, chkConfirm, msg;
	user_key= document.frm.user_key.value;
	user_key_t= document.frm.user_key_t.value;

	msg = '';

	chkConfirm = true;

	if(proc=="MOVE") { //복원하는 것
		if(user_key == user_key_t) {
			//if(!confirm("복원할 위치는 현재 사용자입니다. 복원하시겠습니까?")) {
			if(!confirm(qq100[lang_code])) {
				chkConfirm = false;
				return;
			}
		} else {
			//if(!confirm("복원할 위치는 \n" + user_key + "  에서 \n" + user_key_t + "\n 사용자로 복원합니다. 복원하시겠습니까?")) {
			if(!confirm("" + user_key + "  ==> \n" + user_key_t + "\n " + qq101[lang_code])) {
				chkConfirm = false;
				return;
			}
		}
	}

	

	if(chkConfirm) {
		/*
		location.href="./process_copy.php?proc="+proc+"&inout_seq="+inout_seq+"&scan_kind="+scan_kind+"&path="+path+"&user_key="+user_key+"&user_key_t="+user_key_t; 
		if(gate_yn == "Y") {
			location.href="./process_copy.php?proc="+proc+"&inout_seq="+inout_seq+"&scan_kind="+scan_kind+"&path="+path+"&user_key="+user_key+"&user_key_t="+user_key_t; 
		}
		*/
		
		if(gate_yn == "N") { //서버가 존재 하지 않을 경우
			location.href="./process_copy.php?proc="+proc+"&inout_seq="+inout_seq+"&scan_kind="+scan_kind+"&path="+path+"&user_key="+user_key+"&user_key_t="+user_key_t; 
			return;
		} else { //서버가 존재할 경우
		
			
			$.post(
					'./process_restore.php',
					{	'proc':proc,
						'inout_seq':inout_seq,
						'scan_kind':scan_kind,
						'path':path,
						'user_key':user_key,
						'user_key_t':user_key_t,
						'gate_yn':gate_yn,
						'server_ip':server_ip
					 },
					function(data) {
						
						alert(data);
						
					},
					'text'
				);

		}
	}
}

function boardProcessPop(proc , b_seq) {

	var chkConfirm = true;

	if(proc=="DEL") {
		
		//if(!confirm("삭제하시겠습니까? 삭제 데이터는 복구 불가능합니다.")) {
		if(!confirm(qdeletedeletedatarecovernot[lang_code])) {
			chkConfirm = false;
		}
	}

	if(chkConfirm) {
		
		$.post(
					'./process_board.php',
					{	'proc':proc,
						'board_seq':b_seq
					 },
					function(data) {
						
						alert(data);
						opener.location.reload(true);
						self.close();
						
					},
					'text'
				);
	}
}

function sendReleaseSms(val) {

	var INOUT_SEQ, REL_SEQ, USER_NAME, RECIEVE_TELNO, SEND_TEXT, ADMIN_SEQ;

	INOUT_SEQ= document.frm.INOUT_SEQ.value;
	REL_SEQ= document.frm.REL_SEQ.value;
	USER_NAME= document.frm.USER_NAME.value;
	RECIEVE_TELNO= document.frm.RECIEVE_TELNO.value;
	SEND_TEXT= document.frm.SEND_TEXT.value;
	ADMIN_SEQ= document.frm.ADMIN_SEQ.value;

	if(USER_NAME == "") {
		alert("User's Name is Empty!!");
		document.frm.USER_NAME.focus();
		return;
	}
	if(RECIEVE_TELNO == "") {
		alert("User's TelePhone Number is Empty!!");
		document.frm.RECIEVE_TELNO.focus();
		return;

	}
	if(SEND_TEXT == "") {
		alert("User's Message is Empty!!");
		document.frm.SEND_TEXT.focus();
		return;
	}
	
	if(confirm('Send OK?')) {
		$.post(
				'./process_send_sms.php',
				{	'proc':val,
					'INOUT_SEQ':INOUT_SEQ,
					'REL_SEQ':REL_SEQ,
					'USER_NAME':USER_NAME,
					'RECIEVE_TELNO':RECIEVE_TELNO,
					'SEND_TEXT':SEND_TEXT,
					'ADMIN_SEQ':ADMIN_SEQ
				 },
				function(data) {
					
					if(data == "sms_comm_ok") {
						alert('success');
					}else{
						alert(data);
					}
					if(val == "dev_rel") {
						opener.location.reload(true);
					}
					self.close();
					
				},
				'text'
			);
	} else {
		return;
	}

	
}


function agree_check(user_key, email) {

	var chkConfirm = true;
	if(chkConfirm) {
		$.post(
					'./process_agree_check.php',
					{	'email':email, 'user_key':user_key
					 },
					function(data) {
						if(data == "DATA_YES") {
							//alert('이미 동의서가 작성되어 있습니다.');
							alert(qq102[lang_code]);
						} else {
							alert(data);
							location.reload(true);
						}
					},
					'text'
				);
	}
}



function memoWrite(proc , seq) {
	
	if(proc == "VIEW") {
		window.open("memo_view.php?memo_seq="+ seq, "BOARD", "height=700px, width=630px, scrollbars=yes, resizable=yes")
	}else{
		window.open("memo_write.php?proc="+proc+"&memo_seq="+ seq, "BOARD", "height=700px, width=630px, scrollbars=yes, resizable=yes")
	}
}

function memoProcess(proc , seq) {

	var chkConfirm = true;

	if(proc=="DEL") {
		
		//if(!confirm("삭제하시겠습니까? 삭제 데이터는 복구 불가능합니다.")) {
		if(!confirm(qdeletedeletedatarecovernot[lang_code])) {
			chkConfirm = false;
		}
	}

	if(chkConfirm) {
		
		$.post(
					'./process_admin_memo.php',
					{	'proc':proc,
						'memo_seq':seq
					 },
					function(data) {
						alert(data);
						location.reload(true);
					},
					'text'
				);
	}
}

function fileExtract(change_file_seq, org_name, url) {
	window.open( url + "/file_extract.php?change_file_seq="+ change_file_seq + "&org_name=" + org_name, "FileEXTR", "height=700px, width=630px, scrollbars=yes, resizable=yes")
}

function indexView(inout_seq) {
	window.open("./indexviewer/index.php?inout_seq="+ inout_seq, "INDEXVIEW", "height=500px, width=900px, scrollbars=yes, resizable=yes")
}


function scanfileCopy(proc, inout_seq, scan_kind, path, gate_ip, site_path, admin_id) {
	var url;
	if(gate_ip == "") {
		url="scan_data_info.php?proc="+ proc + "&path=" + path + "&scan_kind="+scan_kind+"&inout_seq="+inout_seq+"&admin_id="+admin_id+"&gate_yn=N";
	} else {
		url="http://" + gate_ip + "/" + site_path + "/scan_data_info.php?proc="+ proc + "&path=" + path + "&scan_kind="+scan_kind+"&inout_seq="+inout_seq+"&admin_id="+admin_id+"&gate_yn=Y";
	}
	window.open(url, "ScanData", "height=600px, width=920px scrollbars=yes, resizable=yes")
	//window.open("process_copy.php?proc="+ proc + "&path=" + path + "&scan_kind="+scan_kind+"&inout_seq="+inout_seq, "ScanData", "height=500px, width=610px");
	/*
	$.post(
				'./process_copy.php',
				{	'proc':proc,
					'inout_seq':inout_seq,
					'scan_kind':scan_kind,
					'path':path
				 },
				function(data) {
					alert(data);
				},
				'text'
			);
			*/
}

function scanfileCopyNew(proc, inout_seq, scan_kind, path, gate_ip, site_path, admin_id, server_ip, http) {
	var url;

	if(http == "") {
		http = "http://";
	}

	if(gate_ip == "") {
		url="scan_data_info.php?proc="+ proc + "&path=" + path + "&scan_kind="+scan_kind+"&inout_seq="+inout_seq+"&admin_id="+admin_id+"&gate_yn=N";
	} else {
		url= http + "://" + gate_ip + "/" + site_path + "/scan_data_info.php?proc="+ proc + "&path=" + path + "&scan_kind="+scan_kind+"&inout_seq="+inout_seq+"&admin_id="+admin_id+"&gate_yn=Y&server_ip="+server_ip;
	}
	//alert(url);
	window.open(url, "ScanData", "height=600px, width=920px scrollbars=yes, resizable=yes")
	//window.open("process_copy.php?proc="+ proc + "&path=" + path + "&scan_kind="+scan_kind+"&inout_seq="+inout_seq, "ScanData", "height=500px, width=610px");
	/*
	$.post(
				'./process_copy.php',
				{	'proc':proc,
					'inout_seq':inout_seq,
					'scan_kind':scan_kind,
					'path':path
				 },
				function(data) {
					alert(data);
				},
				'text'
			);
			*/
}

//반출입 회수
function submitAnalysisInout(frm){
	


	if(document.getElementById("period_all").checked) {
		//document.getElementById("period").value = "";
	}else{
		//document.getElementById("period").value = "MONTH";
	}

	frm.submit();
}

//반출입 메모창
function inoutMemo(inout_seq) {

	//window.open("inout_memo.php?inout_seq="+inout_seq , "MEMO1", "top=10px, left=100px, height=750px, width=1000px, scrollbars=yes, resizable=yes");
	location.href="inout_memo.php?inout_seq="+inout_seq;
	//window.open("pop_inout_statistic.php?user_key="+user_key+"&email="+email+"&inout_seq="+inout_seq , "PERSON", "top=10px, left=100px, height=950px, width=1024px, ,scrollbars=yes, resizable=yes");
	
	//.location.href= page_url + ;
}

//국가정보 삭제
function transGMT(inout_seq, flag) {

	$('#viewLoading').css('position', 'absolute');
	$('#viewLoading').css('left', $('#'+flag).offset().left);
	$('#viewLoading').css('top', $('#'+flag).offset().top);
	$('#viewLoading').css('width', $('#'+flag).css('width'));
	$('#viewLoading').css('height', $('#'+flag).css('height'));
	$('#viewLoading').fadeIn(500);

	$.post(
				'./process_gmt.php',
				{	'inout_seq':inout_seq
				 },
				function(data) {
					
					if(data == "OK") {
						//alert("처리되었습니다.");
						alert(qq103[lang_code]);
						$('#viewLoading').fadeOut(500);
						location.reload(true);
					} else {
						//alert("잘못된 값이 입력되었습니다.");
						alert(qq104[lang_code]);
						$('#viewLoading').fadeOut(500);
					}
					
				},
				'text'
			);

}

function sub_function(frm, flag) {
	$('#viewLoading').css('position', 'absolute');
	$('#viewLoading').css('left', $('#'+flag).offset().left);
	$('#viewLoading').css('top', $('#'+flag).offset().top);
	$('#viewLoading').css('width', $('#'+flag).css('width'));
	$('#viewLoading').css('height', $('#'+flag).css('height'));
	$('#viewLoading').fadeIn(500);
	frm.submit();
	$('#viewLoading').fadeOut(500);
}

function saveBizTrip(INOUT_SEQ, BIZ_TRIP, USER_TYPE, flag) {
	
	var new_biztrip = document.getElementById("BIZ_TRIP").value;

	$('#viewLoading').css('position', 'absolute');
	$('#viewLoading').css('left', $('#'+flag).offset().left);
	$('#viewLoading').css('top', $('#'+flag).offset().top);
	$('#viewLoading').css('width', $('#'+flag).css('width'));
	$('#viewLoading').css('height', $('#'+flag).css('height'));
	$('#viewLoading').fadeIn(500);
	
	if(USER_TYPE == "2") {
		if(BIZ_TRIP == new_biztrip) {
			//alert("출장 복귀 상태가 동일합니다.");
			alert(qq105[lang_code]);
			$('#viewLoading').fadeOut(500);
			return false;
		}
	} else {
		
		//alert("출장 복귀 상태 변경은 출장자에 한합니다.");
		alert(qq106[lang_code]);
		$('#viewLoading').fadeOut(500);
		return false;
		
	}
	
	//alert(user_name + '///' + company_name +'///' + manager_name +'///' + manager_dept + '///' +etc_memo);
	$.post(
				'./process_user_biztrip.php',
				{ 'INOUT_SEQ':INOUT_SEQ, 'biz_trip':new_biztrip
				 },
				function(data) {
					alert(data);
					$('#viewLoading').fadeOut(500);
					location.reload(true);
				},
				'text'
			);
}



function saveMemo(inout_seq, frm , flag, cur_gate, site_path) {

	var memo="", inout_status="", out_gate_temp, out_gate, gate, url, DEVICE;
	
	$('#viewLoading').css('position', 'absolute');
	$('#viewLoading').css('left', $('#'+flag).offset().left);
	$('#viewLoading').css('top', $('#'+flag).offset().top);
	$('#viewLoading').css('width', $('#'+flag).css('width'));
	$('#viewLoading').css('height', $('#'+flag).css('height'));
	$('#viewLoading').fadeIn(500);
	
	//alert(flag);
	if(flag == "memo") {
		//memo = frm.taMemo.value;
		memo = document.getElementById("taMemo").value;
		 
	} else {
		 //inout_status = frm.inout_status.value;
		 //out_gate = frm.out_gate.value;
		 inout_status = document.getElementById("inout_status").value;
		 //파싱해야 한다.
		 out_gate_temp = document.getElementById("out_gate").value;
		 gate = out_gate_temp.split("|"); 
		 out_gate = gate[0];
		 if(document.getElementById("DEVICE").checked) {
			DEVICE = "Format";
		 } else {
			DEVICE = "WEB";
		 }
		 //alert(DEVICE);
		 //alert(gate[0]);
		 //alert(gate[1]);
	}


	//return;
	//플래그가 out 일 경우는 반출 완료 시키는 것이다. 이 경우는 실제 게이트의 존재 여부를 판단해야 한다.
	//게이트 이름과 게이트 ip가 전달 되어야 한다.

	//cur_gate 와 gate[1]이 동일 한 경우와 그렇지 않은 경우를 판별해야 한다.
	//alert(cur_gate);
	if(flag == 'out') { //게이트가 존재할 경우이면서 flag 값이 out 일경우 게이트 부터 먼저 처리 해 준다.
		$.post(
				SITE_NAME+'/process_memo_remote.php',
				{	'inout_seq':inout_seq, 
					'memo':memo, 
					'inout_status':inout_status,
					'out_gate':out_gate,
					'out_gate_ip':gate[1],
					'site_path':site_path,
					'flag':flag,
					'DEVICE':DEVICE
				 },
				function(data) {
					//alert(data);
					//echo "NO_IP"; //아이피가 존재하지 않는 게이트입니다.
					//echo "NO_INOUT_SEQ"; //잘못된 값이 전달되었습니다.
					//echo "OK";
					
					if(data == "NO_IP") {
						//alert("아이피가 존재하지 않는 게이트입니다.");
						alert(qq107[lang_code]);
						$('#viewLoading').fadeOut(500);
						$('#inout_result1').hide();
						return;
					} else if (data == "NO_INOUT_SEQ") {
						//alert("잘못된 값이 전달되었습니다.");
						alert(qq108[lang_code]);
						$('#viewLoading').fadeOut(500);
						$('#inout_result1').hide();
						return;
					} else if (data == "OK" || data == "OKOK") {
						//alert("처리되었습니다.");
						alert(qq103[lang_code]);
						$('#viewLoading').fadeOut(500);
						$('#inout_result1').hide();
					}  else {
						alert(data);
						$('#viewLoading').fadeOut(500);
						$('#inout_result1').hide();
					}
					
					location.reload(true);

				},
				'text'
			);
		
	} else {
	
		$.post(
					SITE_NAME+'/process_memo.php',
					{	'inout_seq':inout_seq, 
						'memo':memo, 
						'inout_status':inout_status,
						'out_gate':out_gate,
						'flag':flag,
						'DEVICE':DEVICE
					 },
					function(data) {
						
						if(data == "NO_IP") {
							//alert("아이피가 존재하지 않는 게이트입니다.");
							alert(qq107[lang_code]);
							return;
						}
						if(data == "NO_INOUT_SEQ") {
							//alert("잘못된 값이 전달되었습니다.");
							alert(qq108[lang_code]);
							return;
						}
						if(data == "OK") {
							//alert("처리되었습니다");
							alert(qq103[lang_code]);
						}
						$('#viewLoading').fadeOut(500);
						//$('#inout_result1').hide();
					},
					'text'
				);
	}
	
}

/*
function saveProgramDelete(inout_seq, frm, flag, admin_seq) {

	var nac, apc;

	$('#viewLoading').css('position', 'absolute');
	$('#viewLoading').css('left', $('#'+flag).offset().left);
	$('#viewLoading').css('top', $('#'+flag).offset().top);
	$('#viewLoading').css('width', $('#'+flag).css('width'));
	$('#viewLoading').css('height', $('#'+flag).css('height'));
	$('#viewLoading').fadeIn(500);

	if(document.getElementById("NAC").checked) {
	//if(document.frm.NAC
		nac = "NAC";
	}

	if(document.getElementById("APC").checked) {
		apc = "APC";
	}

	if(nac == "" && apc == "") {
		alert("Failed!!!");
	} else {

		$.post(
				'./process_del_prog.php',
				{	'inout_seq':inout_seq, 
					'nac':nac, 
					'apc':apc,
					'admin_seq':admin_seq
				 },
				function(data) {
					//alert(data);
					//echo "NO_IP"; //아이피가 존재하지 않는 게이트입니다.
					//echo "NO_INOUT_SEQ"; //잘못된 값이 전달되었습니다.
					//echo "OK";
					
					if(data == "OK") {
						//alert("처리되었습니다.");
						alert(qq103[lang_code]);
						$('#viewLoading').fadeOut(500);
						$('#inout_result1').hide();

						location.reload(true);

					}  else {
						alert(data);
						$('#viewLoading').fadeOut(500);
						$('#inout_result1').hide();
					}
					
					

				},
				'text'
			);
	}
}
*/


//개인 정보창 "height=960px, width=1100px,scrollbars=yes");
function userCenter(user_key, email, inout_seq, tab_name) {
	
	if(tab_name == "STATISTIC") {
			location.href="pop_inout_statistic.php?user_key="+user_key+"&email="+email+"&inout_seq="+inout_seq ;
	}else if(tab_name == "INOUT") {
			location.href="pop_inout_list.php?user_key="+user_key+"&email="+email+"&inout_seq="+inout_seq;
	}else if(tab_name == "CHANGEFILE") {
			location.href="pop_changefile_list.php?user_key="+user_key+"&email="+email+"&inout_seq="+inout_seq;
	}else if(tab_name == "FAKE") {
			location.href="pop_fake_list.php?user_key="+user_key+"&email="+email+"&inout_seq="+inout_seq+"&policy_black="+inout_seq;
	}else {
			location.href="user_center.php?user_key="+user_key+"&email="+email+"&inout_seq="+inout_seq;
	}
	
}

function managerCenter(manager_name, manager_dept, tab_name) {
	
	if(tab_name == "STATISTIC") {
			location.href="pop_inout_statistic.php?manager_name="+manager_name+"&manager_department="+manager_dept;
	}else if(tab_name == "INOUT") {
			location.href="pop_inout_list.php?manager_name="+manager_name+"&manager_department="+manager_dept;
	}else if(tab_name == "CHANGEFILE") {
			location.href="pop_changefile_list.php?manager_name="+manager_name+"&manager_department="+manager_dept;
	}else if(tab_name == "FAKE") {
			location.href="pop_fake_list.php?manager_name="+manager_name+"&manager_department="+manager_dept;
	}else {
			location.href="manager_center.php?manager_name="+manager_name+"&manager_department="+manager_dept;
	}
	
}

function companyCenter(comp_name, tab_name) {
	
	if(tab_name == "STATISTIC") {
			location.href="pop_inout_statistic.php?company_name="+comp_name;
	}else if(tab_name == "INOUT") {
			location.href="pop_inout_list.php?company_name="+comp_name;
	}else if(tab_name == "CHANGEFILE") {
			location.href="pop_changefile_list.php?company_name="+comp_name;
	}else if(tab_name == "FAKE") {
			location.href="pop_fake_list.php?company_name="+comp_name;
	}else {
			location.href="company_center.php?company_name="+comp_name;
	}

}

//개인 정보창에서 메인창으로 연결
function viewDetailMain(param, page_url) {
	
	//alert(page_url +"?"+param);
	opener.document.location.href= page_url +"?"+ param;
}

//게이트 정보 세팅
function setGate(gw_seq, gw_name, gw_kname, gw_addr, gw_use, bk_use, bk_type, bk_server, bk_drive, bk_folder, bk_delay, bk_rsync, VIRUS_MENT_KR, VIRUS_MENT_EN) {

	
	document.getElementById("gw_seq").value = gw_seq;
	document.getElementById("gw_name").value = gw_name;
	document.getElementById("gw_kname").value = gw_kname;
	document.getElementById("gw_addr").value = gw_addr;
	document.getElementById("gw_use").value = gw_use;

	document.getElementById("backup_use").value = bk_use;
	document.getElementById("backup_type").value = bk_type;
	document.getElementById("backup_server").value = bk_server;
	document.getElementById("backup_drive").value = bk_drive;
	document.getElementById("backup_folder").value = bk_folder;
	document.getElementById("backup_delay").value = bk_delay;
	document.getElementById("backup_rsync").value = bk_rsync;

	document.getElementById("gw_addr_private").value = $(".txt_private_ip_"+gw_seq).text();
	
	VIRUS_MENT_KR = decodeURIComponent(VIRUS_MENT_KR);
	VIRUS_MENT_EN = decodeURIComponent(VIRUS_MENT_EN);

	VIRUS_MENT_KR = VIRUS_MENT_KR.replace(/[+]/gi, " ");
	VIRUS_MENT_EN = VIRUS_MENT_EN.replace(/[+]/gi, " ");
	
	document.getElementById("VIRUS_MENT_KR").value = VIRUS_MENT_KR;

	document.getElementById("VIRUS_MENT_EN").value = VIRUS_MENT_EN;




	
}

//게이트 정보 세팅
function setReject(REJECT_SEQ, REJECT_NAME_KR, REJECT_NAME_EN, REJECT_USE_YN) {

	document.getElementById("REJECT_SEQ").value = REJECT_SEQ;
	document.getElementById("REJECT_NAME_KR").value = REJECT_NAME_KR;
	document.getElementById("REJECT_NAME_EN").value = REJECT_NAME_EN;
	document.getElementById("REJECT_USE_YN").value = REJECT_USE_YN;
}

//게이트 정보 클리어
function clearGate() {

	document.getElementById("gw_seq").value = "";
	document.getElementById("gw_name").value = "";
	document.getElementById("gw_kname").value = "";
	document.getElementById("gw_addr").value = "";
	document.getElementById("gw_use").value = "Y";
	document.getElementById("gw_addr_private").value = "";
}

//반입불가 코드 초기화
function clearReject() {

	document.getElementById("REJECT_SEQ").value = "";
	document.getElementById("REJECT_NAME_KR").value = "";
	document.getElementById("REJECT_NAME_EN").value = "";
	document.getElementById("REJECT_USE_YN").value = "Y";
}

//게이트 정보 처리
function processGate(proc, p_gw_seq, flag) {
	
	var gw_seq, alert_str, gw_name, gw_kname, gw_addr, gw_use,gw_addr_private;
	var bk_use_yn, bk_type, bk_server_path, bk_drive_path, bk_folder_path, bk_del_delay, bk_rsync_alias, VIRUS_MENT_KR, VIRUS_MENT_EN;

	$('#viewLoading').css('position', 'absolute');
	$('#viewLoading').css('left', $('#'+flag).offset().left);
	$('#viewLoading').css('top', $('#'+flag).offset().top);
	$('#viewLoading').css('width', $('#'+flag).css('width'));
	$('#viewLoading').css('height', $('#'+flag).css('height'));
	$('#viewLoading').fadeIn(500);

	
	
	
	if(p_gw_seq == "") {
		gw_seq = document.getElementById("gw_seq").value;
		gw_name = document.getElementById("gw_name").value;
		gw_kname = document.getElementById("gw_kname").value;
		gw_addr = document.getElementById("gw_addr").value;
		gw_addr_private = document.getElementById("gw_addr_private").value;

		bk_use_yn = document.getElementById("backup_use").value;
		bk_type = document.getElementById("backup_type").value;
		bk_server_path = document.getElementById("backup_server").value;
		bk_drive_path = document.getElementById("backup_drive").value;
		bk_folder_path = document.getElementById("backup_folder").value;
		bk_del_delay = document.getElementById("backup_delay").value;
		bk_rsync_alias = document.getElementById("backup_rsync").value;
		
		VIRUS_MENT_KR = document.getElementById("VIRUS_MENT_KR").value;
		VIRUS_MENT_EN = document.getElementById("VIRUS_MENT_EN").value; 

		if(gw_addr == "" || gw_name == "" || gw_kname == "") {
			alert("" + qq104[lang_code] + "");
			$('#viewLoading').fadeOut(500);
			return;
		}


	} else {
		if(proc == "DEL") {
			gw_seq = p_gw_seq;
		} else {
			gw_seq = document.getElementById("gw_seq").value;
			gw_name = document.getElementById("gw_name").value;
			gw_kname = document.getElementById("gw_kname").value;
			gw_addr = document.getElementById("gw_addr").value;
			gw_addr_private = document.getElementById("gw_addr_private").value;

			bk_use_yn = document.getElementById("backup_use").value;
			bk_type = document.getElementById("backup_type").value;
			bk_server_path = document.getElementById("backup_server").value;
			bk_drive_path = document.getElementById("backup_drive").value;
			bk_folder_path = document.getElementById("backup_folder").value;
			bk_del_delay = document.getElementById("backup_delay").value;
			bk_rsync_alias = document.getElementById("backup_rsync").value;

			VIRUS_MENT_KR = document.getElementById("VIRUS_MENT_KR").value;
			VIRUS_MENT_EN = document.getElementById("VIRUS_MENT_EN").value;
			if(gw_addr == "" || gw_name == "" || gw_kname == "") {
				alert("" + qq104[lang_code] + "");
				$('#viewLoading').fadeOut(500);
				return;
			}
		}
	}

	//alert(VIRUS_MENT_KR );
	//return;
	
	gw_use = document.getElementById("gw_use").value;

		
	if(proc =="REG" || proc == "EDIT") {
		if(gw_seq == "") {
			//alert_str = "등록";
			alert_str = qq109[lang_code];
			proc = "REG";
		} else {
			//alert_str = "수정";
			alert_str = qq110[lang_code];
			proc = "EDIT";
		}
	}else{
		//alert_str = "삭제";
		alert_str = qq111[lang_code];
		
	}

	//if(confirm("게이트 정보를 "+alert_str+" 하시겠습니까?")) {
	if(confirm(""+alert_str+" " + qq150[lang_code])) {
		$.post(
					'./process_gate.php',
					{ 'proc':proc, 'gw_seq':gw_seq, 'gw_name':gw_name, 'gw_kname':gw_kname, 'gw_addr' : gw_addr, 'gw_use': gw_use
						, 'bk_use_yn': bk_use_yn, 'bk_type': bk_type, 'bk_server_path': bk_server_path, 'bk_drive_path': bk_drive_path, 'bk_folder_path': bk_folder_path
						, 'bk_del_delay': bk_del_delay, 'bk_rsync_alias': bk_rsync_alias, 'VIRUS_MENT_KR': VIRUS_MENT_KR, 'VIRUS_MENT_EN': VIRUS_MENT_EN, 'gw_addr_private' : gw_addr_private
					 },
					function(data) {
						//$("#dix"+inoutSeq).append("<tr><td colspan='4'>"+data+"</td></tr>");
						$('#viewLoading').fadeOut(500);
						alert(data);
						location.reload(true);
					},
					'text'
				);
	}
}

//게이트 정보 처리
function processReject(proc, del_seq, flag) {
	
	var REJECT_SEQ, alert_str;

	$('#viewLoading').css('position', 'absolute');
	$('#viewLoading').css('left', $('#'+flag).offset().left);
	$('#viewLoading').css('top', $('#'+flag).offset().top);
	$('#viewLoading').css('width', $('#'+flag).css('width'));
	$('#viewLoading').css('height', $('#'+flag).css('height'));
	$('#viewLoading').fadeIn(500);
	
	if(del_seq == "") {
		REJECT_SEQ = document.getElementById("REJECT_SEQ").value;
	}else{
		REJECT_SEQ = del_seq;
	}

	var REJECT_NAME_KR = document.getElementById("REJECT_NAME_KR").value;
	var REJECT_NAME_EN = document.getElementById("REJECT_NAME_EN").value;
	var REJECT_USE_YN = document.getElementById("REJECT_USE_YN").value;

	
	if(proc =="REG" || proc == "EDIT") {
		if(REJECT_SEQ == "") {
			//alert_str = "등록";
			alert_str = qq109[lang_code];
			proc = "REG";
		} else {
			//alert_str = "수정";
			alert_str = qq110[lang_code];
			proc = "EDIT";
		}
	}else{
		//alert_str = "삭제";
		alert_str = qq111[lang_code];
	}

	//if(confirm("반입불가 정보를 "+alert_str+" 하시겠습니까?")) {
	if(confirm(""+alert_str+" " + qq150[lang_code])) {
		$.post(
					'./process_reject.php',
					{ 'proc':proc, 'REJECT_SEQ':REJECT_SEQ, 'REJECT_NAME_KR':REJECT_NAME_KR, 'REJECT_NAME_EN' : REJECT_NAME_EN, 'REJECT_USE_YN': REJECT_USE_YN
					 },
					function(data) {
						//$("#dix"+inoutSeq).append("<tr><td colspan='4'>"+data+"</td></tr>");
						$('#viewLoading').fadeOut(500);
						alert(data);
						location.reload(true);
					},
					'text'
				);
	}
}

//게이트서버 파일 동기화
function processGateSync(gate_ip) {
	
	if(gate_ip == "" ) {
		//alert("게이트 정보가 없습니다.");
		alert(qq112[lang_code]);
		return false;
	}

	$.post(
				'./rsync_gate.php',
				{ 'gate_ip':gate_ip
				 },
				function(data) {
					alert(data);
				},
				'text'
			);
}

//SCAN_DATE 동기화
function scanDataSync(gate_ip, user_key) {
	
	if(gate_ip == "" ) {
		//alert("게이트 정보가 없습니다.");
		alert(qq112[lang_code]);
		return false;
	}

	if(user_key == "" ) {
		//alert("사용자키 값이 없습니다.");
		alert(qq113[lang_code]);
		return false;
	}

	$.post(
				'./rsync_scandata.php',
				{ 'gate_ip':gate_ip,
				  'user_key':user_key
				 },
				function(data) {
					alert(data);
				},
				'text'
			);
}

//ABU 환경처리
function processABU(seq, flag) {
			
			var ap = "0";
			var btooth = "0";
			var usb = "0";
			var usb_readonly = "0";

			var CDROM = "0";
			var IEEE1394 = "0";
			var WEBCAM = "0";
			var SDCARD = "0";
			var LAN = "0";
			var FDD = "0";
			var SERIALPORT = "0";
			var NETDRIVE = "0";
			var SCREEN_LOCK = "0";
			var CHECK_VOLUME_CHANGE = "0";
			var WPD = "1";
			var VOLUME_UNMOUNT = "0";
			var CDROM_READ_ONLY = "0";


			$('#viewLoading').css('position', 'absolute');
			$('#viewLoading').css('left', $('#'+flag).offset().left);
			$('#viewLoading').css('top', $('#'+flag).offset().top);
			$('#viewLoading').css('width', $('#'+flag).css('width'));
			$('#viewLoading').css('height', $('#'+flag).css('height'));
			$('#viewLoading').fadeIn(500);
			
			
			
			//if(document.getElementById("chkAP").checked) ap = "1";
			if(document.getElementById("chkBtooth").checked) btooth = "1";

			//alert(document.getElementById("chkUsb").value);
			usb = document.getElementById("chkUsb").value;

			ap = document.getElementById("chkAP").value;
			 

			if(document.getElementById("chkUsb_readonly").checked) usb_readonly = "1";

			if(document.getElementById("CDROM").checked) CDROM = "1";
			CDROM = document.getElementById("CDROM").value;

			SDCARD = document.getElementById("SDCARD").value;

			if(document.getElementById("IEEE1394").checked) IEEE1394 = "1";
			if(document.getElementById("WEBCAM").checked) WEBCAM = "1";
			//if(document.getElementById("SDCARD").checked) SDCARD = "1";
			if(document.getElementById("LAN").checked) LAN = "1";
			if(document.getElementById("FDD").checked) FDD = "1";
			if(document.getElementById("SERIALPORT").checked) SERIALPORT = "1";
			if(document.getElementById("NETDRIVE").checked) NETDRIVE = "1";
			if(document.getElementById("SCREEN_LOCK").checked) SCREEN_LOCK = "1";
			if(document.getElementById("CHECK_VOLUME_CHANGE").checked) CHECK_VOLUME_CHANGE = "1";
			
			if(document.getElementById("VOLUME_UNMOUNT").checked) VOLUME_UNMOUNT = "1";
			if(document.getElementById("CDROM_READ_ONLY").checked) CDROM_READ_ONLY = "1";

	
			$.post(
				'./process_abu.php',
				{ 'seq':seq, 'ap':ap, 'btooth' : btooth, 'usb' : usb, 'usb_readonly': usb_readonly
				   , 'CDROM': CDROM, 'IEEE1394': IEEE1394, 'WEBCAM': WEBCAM
				   , 'SDCARD': SDCARD, 'LAN': LAN, 'FDD': FDD
				   , 'SERIALPORT': SERIALPORT, 'NETDRIVE': NETDRIVE, 'SCREEN_LOCK': SCREEN_LOCK
				   , 'CHECK_VOLUME_CHANGE': CHECK_VOLUME_CHANGE, 'WPD': WPD, 'VOLUME_UNMOUNT': VOLUME_UNMOUNT
				   , 'CDROM_READ_ONLY': CDROM_READ_ONLY
				 },
				function(data) {
					alert(data);
					$('#viewLoading').fadeOut(500);
					location.reload(true);
				},
				'text'
			);
}

//DPTClient 환경설정
function processPolicy(flag) {
		
			var BootPeVer, LogIDPW, UseCS, UseBT, ScanKind, CompareFile, CompleteWork, RecoverDel, CheckComplete, DeleteExt, SkipFile, AgreeApply, FIApply, RECOVERY_MAIL_YN;
			var VACCINE_USE_YN, VACCINE_TERM, VACCINE_TYPE, WINUPDATE_USE_YN, WINUPDATE_TERM, PHOTO_YN, TRANS_DELETE_YN, WIN_IP_ADDR, OUTER_TRANS_YN, OUTER_SERVER_IP, OUTER_SERVER_PORT, OUTER_SERVER_URL;
			var BACKUP_BASE_DAYS, CHECK_OUT_DAYS, CHECK_IN_XP_YN, VACCINE_PASS_YN, IP_MGMT, VACWIN_TYPE, VACCINE_IMG_YN, WINUPDATE_IMG_YN, USER_DATA_DELETE_DAY, OUT_MGMT_YN, SIGN_PAD_YN;
			var POLICY_IP, POLICY_URL, VACCINE_PATCH_TERM, DIFFER_CHECKOUT_DAYS, DIFFER_COMPLETE_WORK, FTPS_YN, AGENT_DELETE_NAME, AGENT_DELETE_YN, AGENT_KEY, VACCINE_DELETE_YN;
			var NAC_DELETE_YN, NAC_UNINSTALL_PATH, APC_AFTER_ALL_SCAN, TOP_FULL_FORM_FLAG, FTP_PORT, FTPS_PORT, TLS_METHOD;
			var RECOVERY_PASS, OUT_DATE_FLAG, SEND_DEL_VIEW, DPT_WV_VIEW, WINUPDATE_DAY_ONLY;
			var DB_ENCRYPTION_FLAG, DB_ENCRYPTION_KIND, AGENT_INSTALL_METHOD, CAUTION_METHOD, CAUTION_EXEC_METHOD, NPROTECT_DELETE_YN, NPROTECT_KEY;
			var WEB_PROTOCOL, WEB_PORT, CONNECT_URL, CURR_IP, SMS_YN, ERASE_USE_YN, OS_KIND, OTP_YN, PASSWORD_CHANGE_TERM, DPT_MANUAL_PATH;
			var VCS_URL, DOWNLOAD_PATCH_DATE, DOWNLOAD_PATCH_SEQ, APC_VERSION, LINKED_URL, VSS_USE_YN,LOGIN_ATTEMPT_CNT, DUPLICATE_LOGIN_YN, VISITOR_GOV_USE_YN;
			var LOG_PRESERVE_DAYS,DEVICE_LOG_YN,PROGRAM_CHECK_YN,PROGRAM_CHECK_PROCESS_YN,ORG_LINKED_URL,WIN_VER_CHECK_YN,OFFICE_VER_CHECK_YN,LOGIN_SSL_YN;
			var CHECK_OUT_ALARM_DAYS,AGENT_INTERNET_ALLOW_YN,WEBMANAGER_PROTOCOL,WEBMANAGER_PORT,AGREE_SECURITY_CNT,CHECK_OUT_ALARM_STOP_DAYS,USER_INOUT_MAILING_YN;
			
			
			BootPeVer = document.getElementById("selBootPeVer").value;
			LogIDPW = document.getElementById("selLogIDPW").value;
			UseCS = document.getElementById("selUseCS").value;
			UseBT = document.getElementById("selUseBT").value;
			ScanKind = document.getElementById("selScanKind").value;
			CompareFile = document.getElementById("selCompareFile").value;
			CompleteWork = document.getElementById("selCompleteWork").value;
			RecoverDel = document.getElementById("selRecoverDel").value;
			CheckComplete = document.getElementById("selCheckComplete").value;
			DeleteExt = document.getElementById("selDeleteExt").value;
			SkipFile = document.getElementById("selSkipFile").value;
			AgreeApply = document.getElementById("selAgreeApply").value;
			FIApply = document.getElementById("selFIApply").value;
			RECOVERY_MAIL_YN = document.getElementById("RECOVERY_MAIL_YN").value;
			
			VACWIN_TYPE = document.getElementById("VACWIN_TYPE").value;
			VACCINE_USE_YN = document.getElementById("VACCINE_USE_YN").value;
			VACCINE_TERM = document.getElementById("VACCINE_TERM").value;
			VACCINE_TYPE = document.getElementById("VACCINE_TYPE").value;
			VACCINE_IMG_YN = document.getElementById("VACCINE_IMG_YN").value;

			WINUPDATE_USE_YN = document.getElementById("WINUPDATE_USE_YN").value;
			WINUPDATE_TERM = document.getElementById("WINUPDATE_TERM").value;
			WINUPDATE_IMG_YN = document.getElementById("WINUPDATE_IMG_YN").value;

			PHOTO_YN = document.getElementById("PHOTO_YN").value;
			TRANS_DELETE_YN = document.getElementById("TRANS_DELETE_YN").value;
			WIN_IP_ADDR = document.getElementById("WIN_IP_ADDR").value;
			OUTER_TRANS_YN = document.getElementById("OUTER_TRANS_YN").value;
			OUTER_SERVER_IP = document.getElementById("OUTER_SERVER_IP").value;
			OUTER_SERVER_PORT = document.getElementById("OUTER_SERVER_PORT").value;
			OUTER_SERVER_URL = document.getElementById("OUTER_SERVER_URL").value;
			BACKUP_BASE_DAYS = document.getElementById("BACKUP_BASE_DAYS").value;

			CHECK_OUT_DAYS = document.getElementById("CHECK_OUT_DAYS").value;
			CHECK_IN_XP_YN = document.getElementById("CHECK_IN_XP_YN").value;
			VACCINE_PASS_YN = document.getElementById("VACCINE_PASS_YN").value;
			IP_MGMT = document.getElementById("IP_MGMT").value;

			USER_DATA_DELETE_DAY = document.getElementById("USER_DATA_DELETE_DAY").value;
			OUT_MGMT_YN = document.getElementById("OUT_MGMT_YN").value;

			SIGN_PAD_YN = document.getElementById("selSignPadYn").value;
			POLICY_IP = document.getElementById("POLICY_IP").value;
			POLICY_URL = document.getElementById("POLICY_URL").value;

			VACCINE_PATCH_TERM = document.getElementById("VACCINE_PATCH_TERM").value;
			DIFFER_CHECKOUT_DAYS  = document.getElementById("DIFFER_CHECKOUT_DAYS").value; 
			DIFFER_COMPLETE_WORK  = document.getElementById("DIFFER_COMPLETE_WORK").value;
			HIDDEN_PART_CHECK  = document.getElementById("HIDDEN_PART_CHECK").value;
			FTPS_YN  = document.getElementById("FTPS_YN").value;
			FTP_PORT  = document.getElementById("FTP_PORT").value;
			FTPS_PORT  = document.getElementById("FTPS_PORT").value;
			TLS_METHOD = document.getElementById("TLS_METHOD").value;


			AGENT_DELETE_NAME		= document.getElementById("AGENT_DELETE_NAME").value;
			AGENT_DELETE_YN		= document.getElementById("AGENT_DELETE_YN").value;
			AGENT_KEY				= document.getElementById("AGENT_KEY").value; 
			
			if( AGENT_DELETE_NAME.length > 50) {
				alert('Agent name is too long. Please, re-input agent name.');
				return false;
			}

			NPROTECT_DELETE_YN		= document.getElementById("NPROTECT_DELETE_YN").value;
			NPROTECT_KEY				= document.getElementById("NPROTECT_KEY").value; 

			VACCINE_DELETE_YN	= document.getElementById("VACCINE_DELETE_YN").value;
			NAC_DELETE_YN		= document.getElementById("NAC_DELETE_YN").value;
			NAC_UNINSTALL_PATH  = document.getElementById("NAC_UNINSTALL_PATH").value;

			APC_AFTER_ALL_SCAN = document.getElementById("APC_AFTER_ALL_SCAN").value;

			TOP_FULL_FORM_FLAG = document.getElementById("TOP_FULL_FORM_FLAG").value;

			RECOVERY_PASS			= document.getElementById("RECOVERY_PASS").value;
			OUT_DATE_FLAG			= document.getElementById("OUT_DATE_FLAG").value;
			SEND_DEL_VIEW			= document.getElementById("SEND_DEL_VIEW").value;
			DPT_WV_VIEW				= document.getElementById("DPT_WV_VIEW").value;
			DB_ENCRYPTION_FLAG		= document.getElementById("DB_ENCRYPTION_FLAG").value;
			AGENT_INSTALL_METHOD	= document.getElementById("AGENT_INSTALL_METHOD").value;
			CAUTION_METHOD			= document.getElementById("CAUTION_METHOD").value;
			CAUTION_EXEC_METHOD		= document.getElementById("CAUTION_EXEC_METHOD").value;

			WINUPDATE_DAY_ONLY		= document.getElementById("WINUPDATE_DAY_ONLY").value;

			DB_ENCRYPTION_KIND		= document.getElementById("DB_ENCRYPTION_KIND").value;
			
			CURR_IP = document.getElementById("CURR_IP").value;
			WEB_PROTOCOL  = document.getElementById("WEB_PROTOCOL").value;
			WEB_PORT  = document.getElementById("WEB_PORT").value;
			SMS_YN  = document.getElementById("SMS_YN").value;
			ERASE_USE_YN  = document.getElementById("ERASE_USE_YN").value;
			OS_KIND		= document.getElementById("OS_KIND").value;

			OTP_YN = document.getElementById("OTP_YN").value;
			PASSWORD_CHANGE_TERM = document.getElementById("PASSWORD_CHANGE_TERM").value;

			DPT_MANUAL_PATH = document.getElementById("DPT_MANUAL_PATH").value;

			VCS_URL = document.getElementById("VCS_URL").value;
			DOWNLOAD_PATCH_DATE = document.getElementById("DOWNLOAD_PATCH_DATE").value;
			DOWNLOAD_PATCH_SEQ = document.getElementById("DOWNLOAD_PATCH_SEQ").value;
			APC_VERSION = document.getElementById("APC_VERSION").value;
			LINKED_URL = document.getElementById("LINKED_URL").value;
			VSS_USE_YN = document.getElementById("VSS_USE_YN").value;

			LOGIN_ATTEMPT_CNT = document.getElementById("LOGIN_ATTEMPT_CNT").value;
			DUPLICATE_LOGIN_YN = document.getElementById("DUPLICATE_LOGIN_YN").value;

			VISITOR_GOV_USE_YN = document.getElementById("VISITOR_GOV_USE_YN").value;
			LOG_PRESERVE_DAYS = document.getElementById("LOG_PRESERVE_DAYS").value;
			DEVICE_LOG_YN = document.getElementById("DEVICE_LOG_YN").value;
			PROGRAM_CHECK_YN = document.getElementById("PROGRAM_CHECK_YN").value;
			PROGRAM_CHECK_PROCESS_YN = document.getElementById("PROGRAM_CHECK_PROCESS_YN").value;

			ORG_LINKED_URL  = document.getElementById("ORG_LINKED_URL").value;
			
			WIN_VER_CHECK_YN = $("#WIN_VER_CHECK_YN").val();
			OFFICE_VER_CHECK_YN = $("#OFFICE_VER_CHECK_YN").val();

			LOGIN_SSL_YN = $("#LOGIN_SSL_YN").val();

			CHECK_OUT_ALARM_DAYS = $("#CHECK_OUT_ALARM_DAYS").val();
			AGENT_INTERNET_ALLOW_YN = $("#AGENT_INTERNET_ALLOW_YN").val();

			AGENT_INTERNET_PING_IP = $("#AGENT_INTERNET_PING_IP").val();

			WEBMANAGER_PROTOCOL = $("#WEBMANAGER_PROTOCOL").val();
			WEBMANAGER_PORT = $("#WEBMANAGER_PORT").val();


			AGREE_SECURITY_CNT = $("#AGREE_SECURITY_CNT option:selected").val();

			CHECK_OUT_ALARM_STOP_DAYS = $("#CHECK_OUT_ALARM_STOP_DAYS").val();

			USER_INOUT_MAILING_YN = $("#USER_INOUT_MAILING_YN").val();

		
			$('#viewLoading').css('position', 'absolute');
			$('#viewLoading').css('left', $('#'+flag).offset().left);
			$('#viewLoading').css('top', $('#'+flag).offset().top);
			$('#viewLoading').css('width', $('#'+flag).css('width'));
			$('#viewLoading').css('height', $('#'+flag).css('height'));
			$('#viewLoading').fadeIn(500);


			$.post(
				SITE_NAME+'/process_policy.php',
				{ 'BootPeVer':BootPeVer, 'LogIDPW':LogIDPW, 'UseCS' : UseCS, 'UseBT' : UseBT, 'ScanKind' : ScanKind, 'CompareFile' : CompareFile
					, 'CompleteWork' : CompleteWork, 'RecoverDel' : RecoverDel, 'CheckComplete' : CheckComplete, 'DeleteExt' : DeleteExt, 'SkipFile' : SkipFile
					, 'AgreeApply' : AgreeApply, 'FIApply' : FIApply, 'RECOVERY_MAIL_YN' : RECOVERY_MAIL_YN
					, 'VACCINE_USE_YN' : VACCINE_USE_YN, 'VACCINE_TERM' : VACCINE_TERM, 'VACCINE_TYPE' : VACCINE_TYPE, 'WINUPDATE_USE_YN' : WINUPDATE_USE_YN, 'WINUPDATE_TERM' : WINUPDATE_TERM
					, 'PHOTO_YN' : PHOTO_YN, 'TRANS_DELETE_YN' : TRANS_DELETE_YN, 'WIN_IP_ADDR' : WIN_IP_ADDR
					, 'OUTER_TRANS_YN' : OUTER_TRANS_YN, 'OUTER_SERVER_IP' : OUTER_SERVER_IP, 'OUTER_SERVER_PORT' : OUTER_SERVER_PORT, 'OUTER_SERVER_URL' : OUTER_SERVER_URL
					, 'BACKUP_BASE_DAYS' : BACKUP_BASE_DAYS, 'CHECK_OUT_DAYS' : CHECK_OUT_DAYS, 'CHECK_IN_XP_YN' : CHECK_IN_XP_YN, 'VACCINE_PASS_YN' : VACCINE_PASS_YN
					, 'IP_MGMT' : IP_MGMT, 'VACWIN_TYPE' : VACWIN_TYPE, 'VACCINE_IMG_YN' : VACCINE_IMG_YN, 'WINUPDATE_IMG_YN' : WINUPDATE_IMG_YN, 'USER_DATA_DELETE_DAY' : USER_DATA_DELETE_DAY
					, 'OUT_MGMT_YN' : OUT_MGMT_YN, 'SIGN_PAD_YN' : SIGN_PAD_YN, 'POLICY_IP' : POLICY_IP, 'POLICY_URL' : POLICY_URL, 'VACCINE_PATCH_TERM' : VACCINE_PATCH_TERM
					, 'DIFFER_CHECKOUT_DAYS':DIFFER_CHECKOUT_DAYS , 'DIFFER_COMPLETE_WORK': DIFFER_COMPLETE_WORK, 'HIDDEN_PART_CHECK':HIDDEN_PART_CHECK
					, 'FTPS_YN' : FTPS_YN, 'AGENT_DELETE_NAME' : AGENT_DELETE_NAME, 'AGENT_DELETE_YN' : AGENT_DELETE_YN, 'AGENT_KEY' : AGENT_KEY, 'VACCINE_DELETE_YN' : VACCINE_DELETE_YN
					, 'NAC_DELETE_YN' : NAC_DELETE_YN, 'NAC_UNINSTALL_PATH' : NAC_UNINSTALL_PATH, 'APC_AFTER_ALL_SCAN' : APC_AFTER_ALL_SCAN, 'TOP_FULL_FORM_FLAG' : TOP_FULL_FORM_FLAG
					, 'FTP_PORT' : FTP_PORT,  'FTPS_PORT' : FTPS_PORT,  'TLS_METHOD' : TLS_METHOD,  'WINUPDATE_DAY_ONLY' : WINUPDATE_DAY_ONLY
					, 'RECOVERY_PASS' : RECOVERY_PASS,  'OUT_DATE_FLAG' : OUT_DATE_FLAG,  'SEND_DEL_VIEW' : SEND_DEL_VIEW
					, 'DPT_WV_VIEW' : DPT_WV_VIEW,  'DB_ENCRYPTION_FLAG' : DB_ENCRYPTION_FLAG,  'AGENT_INSTALL_METHOD' : AGENT_INSTALL_METHOD
					, 'CAUTION_METHOD' : CAUTION_METHOD,  'CAUTION_EXEC_METHOD' : CAUTION_EXEC_METHOD, 'NPROTECT_DELETE_YN' : NPROTECT_DELETE_YN, 'NPROTECT_KEY' : NPROTECT_KEY
				    , 'DB_ENCRYPTION_KIND': DB_ENCRYPTION_KIND, 'WEB_PROTOCOL': WEB_PROTOCOL, 'WEB_PORT': WEB_PORT, 'SMS_YN': SMS_YN, 'ERASE_USE_YN' : ERASE_USE_YN
					, 'OS_KIND' : OS_KIND , 'OTP_YN' : OTP_YN , 'PASSWORD_CHANGE_TERM' : PASSWORD_CHANGE_TERM , 'DPT_MANUAL_PATH' : DPT_MANUAL_PATH 
					, 'VCS_URL' : VCS_URL, 'DOWNLOAD_PATCH_DATE' : DOWNLOAD_PATCH_DATE, 'DOWNLOAD_PATCH_SEQ' : DOWNLOAD_PATCH_SEQ, 'APC_VERSION' : APC_VERSION
					, 'LINKED_URL' : LINKED_URL, 'VSS_USE_YN' : VSS_USE_YN,'LOGIN_ATTEMPT_CNT' :LOGIN_ATTEMPT_CNT, 'DUPLICATE_LOGIN_YN' :DUPLICATE_LOGIN_YN
					, 'VISITOR_GOV_USE_YN' : VISITOR_GOV_USE_YN, 'LOG_PRESERVE_DAYS' : LOG_PRESERVE_DAYS, 'DEVICE_LOG_YN' : DEVICE_LOG_YN, 'PROGRAM_CHECK_YN' : PROGRAM_CHECK_YN
					, 'PROGRAM_CHECK_PROCESS_YN' : PROGRAM_CHECK_PROCESS_YN, 'ORG_LINKED_URL' : ORG_LINKED_URL, 'WIN_VER_CHECK_YN' : WIN_VER_CHECK_YN, 'OFFICE_VER_CHECK_YN' : OFFICE_VER_CHECK_YN
					, 'LOGIN_SSL_YN' : LOGIN_SSL_YN, 'CHECK_OUT_ALARM_DAYS' : CHECK_OUT_ALARM_DAYS, 'AGENT_INTERNET_ALLOW_YN' : AGENT_INTERNET_ALLOW_YN, 'AGENT_INTERNET_PING_IP' : AGENT_INTERNET_PING_IP
					, 'WEBMANAGER_PROTOCOL' : WEBMANAGER_PROTOCOL, 'WEBMANAGER_PORT' : WEBMANAGER_PORT, 'AGREE_SECURITY_CNT' : AGREE_SECURITY_CNT, 'CHECK_OUT_ALARM_STOP_DAYS' : CHECK_OUT_ALARM_STOP_DAYS
					, 'USER_INOUT_MAILING_YN' : USER_INOUT_MAILING_YN
				 },
				function(data) {
					alert(data);

					$('#viewLoading').fadeOut(500);

					location.reload(true);
					
				},
				'text'
			
			);
}

//DPTClient 환경설정
function procesSMS(flag) {
			var SMS_SEQ, COMPANY_CODE, COMPANY_NAME, SEND_TELNO, SMS_METHOD, SMS_SERVER, SMS_SERVER_PORT, SMS_SERVER_ID, SMS_SERVER_PWD, ADMIN_ID;
			var SMS_SERVER_DB, SMS_SERVER_TABLE1, SMS_SERVER_TABLE2, TEXT_RELEASE_YN, TEXT_RELEASE, TEXT_CHECK_IN_YN, TEXT_CHECK_IN, ETC_BRIEF, WEB_URL;
			
			
			
			SMS_SEQ = document.getElementById("SMS_SEQ").value;
			COMPANY_CODE = document.getElementById("COMPANY_CODE").value;
			COMPANY_NAME = document.getElementById("COMPANY_NAME").value;
			SEND_TELNO = document.getElementById("SEND_TELNO").value;
			SMS_METHOD = document.getElementById("SMS_METHOD").value;
			SMS_SERVER = document.getElementById("SMS_SERVER").value;
			SMS_SERVER_PORT = document.getElementById("SMS_SERVER_PORT").value;
			SMS_SERVER_ID = document.getElementById("SMS_SERVER_ID").value;
			SMS_SERVER_PWD = document.getElementById("SMS_SERVER_PWD").value;
			SMS_SERVER_DB = document.getElementById("SMS_SERVER_DB").value;
			SMS_SERVER_TABLE1 = document.getElementById("SMS_SERVER_TABLE1").value;
			SMS_SERVER_TABLE2 = document.getElementById("SMS_SERVER_TABLE2").value;
			TEXT_RELEASE_YN = document.getElementById("TEXT_RELEASE_YN").value;
			TEXT_RELEASE = document.getElementById("TEXT_RELEASE").value;
			TEXT_CHECK_IN_YN = document.getElementById("TEXT_CHECK_IN_YN").value;
			TEXT_CHECK_IN = document.getElementById("TEXT_CHECK_IN").value;
			ETC_BRIEF = document.getElementById("ETC_BRIEF").value;
			ADMIN_SEQ = document.getElementById("ADMIN_SEQ").value;
			WEB_URL = document.getElementById("WEB_URL").value;

			$('#viewLoading').css('position', 'absolute');
			$('#viewLoading').css('left', $('#'+flag).offset().left);
			$('#viewLoading').css('top', $('#'+flag).offset().top);
			$('#viewLoading').css('width', $('#'+flag).css('width'));
			$('#viewLoading').css('height', $('#'+flag).css('height'));
			$('#viewLoading').fadeIn(500);

			//alert(WEB_URL);
			$.post(
				'./process_sms.php',
				{ 'SMS_SEQ':SMS_SEQ, 'COMPANY_CODE':COMPANY_CODE, 'COMPANY_NAME' : COMPANY_NAME, 'SEND_TELNO' : SEND_TELNO, 'SMS_METHOD' : SMS_METHOD, 'SMS_SERVER' : SMS_SERVER
					, 'SMS_SERVER_PORT' : SMS_SERVER_PORT, 'SMS_SERVER_ID' : SMS_SERVER_ID, 'SMS_SERVER_PWD' : SMS_SERVER_PWD, 'SMS_SERVER_DB' : SMS_SERVER_DB
					, 'SMS_SERVER_TABLE1' : SMS_SERVER_TABLE1, 'SMS_SERVER_TABLE2' : SMS_SERVER_TABLE2
					, 'TEXT_RELEASE_YN' : TEXT_RELEASE_YN, 'TEXT_RELEASE' : TEXT_RELEASE
					, 'TEXT_CHECK_IN_YN' : TEXT_CHECK_IN_YN, 'TEXT_CHECK_IN' : TEXT_CHECK_IN
					, 'ETC_BRIEF' : ETC_BRIEF, 'ADMIN_SEQ' : ADMIN_SEQ, 'WEB_URL' : WEB_URL
				    
				 },
				function(data) {
					alert(data);

					$('#viewLoading').fadeOut(500);

					location.reload(true);
					
				},
				'text'
			
			);
}

//개인별 DPTClient 환경설정
function processUserPolicy(user_info_list_seq) {

			var BootPeVer, LogIDPW, UseCS, UseBT, ScanKind, CompareFile, CompleteWork, RecoverDel, CheckComplete, DeleteExt, SkipFile, begin_date, end_date, FIApply;
			var WINUPDATE_USE_YN, WINUPDATE_TERM, WIN_IP_ADDR, VACCINE_USE_YN, VACCINE_TERM, VACCINE_TYPE, CHECK_OUT_DAYS, CHECK_IN_XP_YN, VACCINE_PASS_YN;
			var VACWIN_TYPE, VACCINE_IMG_YN, WINUPDATE_IMG_YN, VACCINE_PATCH_TERM, DIFFER_CHECKOUT_DAYS, DIFFER_COMPLETE_WORK, HIDDEN_PART_CHECK;
			var TRANS_DELETE_YN, FTPS_YN, AGENT_DELETE_NAME, AGENT_DELETE_YN, VACCINE_DELETE_YN, NAC_DELETE_YN, AGENT_INSTALL_METHOD, WINUPDATE_DAY_ONLY;
			var POLICY_MODIFY_REASON, VSS_USE_YN,WIN_VER_CHECK_YN,OFFICE_VER_CHECK_YN,PROGRAM_CHECK_YN,PROGRAM_CHECK_PROCESS_YN;
			

			BootPeVer = document.getElementById("selBootPeVer").value;
			LogIDPW = document.getElementById("selLogIDPW").value;
			UseCS = document.getElementById("selUseCS").value;
			UseBT = document.getElementById("selUseBT").value;
			ScanKind = document.getElementById("selScanKind").value;
			CompareFile = document.getElementById("selCompareFile").value;
			CompleteWork = document.getElementById("selCompleteWork").value;
			RecoverDel = document.getElementById("selRecoverDel").value;
			CheckComplete = document.getElementById("selCheckComplete").value;
			DeleteExt = document.getElementById("selDeleteExt").value;
			SkipFile = document.getElementById("selSkipFile").value;

			VACWIN_TYPE = document.getElementById("VACWIN_TYPE").value;
			WINUPDATE_USE_YN = document.getElementById("WINUPDATE_USE_YN").value;
			WINUPDATE_TERM = document.getElementById("WINUPDATE_TERM").value;
			WIN_IP_ADDR = document.getElementById("WIN_IP_ADDR").value;
			
			VACCINE_USE_YN = document.getElementById("VACCINE_USE_YN").value;
			VACCINE_TERM = document.getElementById("VACCINE_TERM").value;
			VACCINE_TYPE = document.getElementById("VACCINE_TYPE").value;

			VACCINE_IMG_YN = document.getElementById("VACCINE_IMG_YN").value;
			WINUPDATE_IMG_YN = document.getElementById("WINUPDATE_IMG_YN").value;

			CHECK_OUT_DAYS = document.getElementById("CHECK_OUT_DAYS").value;
			CHECK_IN_XP_YN = document.getElementById("CHECK_IN_XP_YN").value;
			VACCINE_PASS_YN = document.getElementById("VACCINE_PASS_YN").value;

			VACCINE_PATCH_TERM = document.getElementById("VACCINE_PATCH_TERM").value; 
			DIFFER_CHECKOUT_DAYS = document.getElementById("DIFFER_CHECKOUT_DAYS").value;  
			DIFFER_COMPLETE_WORK  = document.getElementById("DIFFER_COMPLETE_WORK").value; 
			HIDDEN_PART_CHECK = document.getElementById("HIDDEN_PART_CHECK").value;
			
			FIApply = document.getElementById("selCheckFI").value;

			TRANS_DELETE_YN = document.getElementById("TRANS_DELETE_YN").value;
			FTPS_YN = document.getElementById("FTPS_YN").value;
			
			AGENT_DELETE_NAME		= document.getElementById("AGENT_DELETE_NAME").value;
			AGENT_DELETE_YN		= document.getElementById("AGENT_DELETE_YN").value;
			VACCINE_DELETE_YN	= document.getElementById("VACCINE_DELETE_YN").value;
			NAC_DELETE_YN		= document.getElementById("NAC_DELETE_YN").value;

			AGENT_INSTALL_METHOD = document.getElementById("AGENT_INSTALL_METHOD").value;

			WINUPDATE_DAY_ONLY	= document.getElementById("WINUPDATE_DAY_ONLY").value;
			
			POLICY_MODIFY_REASON = document.getElementById("POLICY_MODIFY_REASON").value;

			VSS_USE_YN = document.getElementById("VSS_USE_YN").value;
			WIN_VER_CHECK_YN = document.getElementById("WIN_VER_CHECK_YN").value;
			OFFICE_VER_CHECK_YN = document.getElementById("OFFICE_VER_CHECK_YN").value;

			PROGRAM_CHECK_YN = document.getElementById("PROGRAM_CHECK_YN").value;
			PROGRAM_CHECK_PROCESS_YN = document.getElementById("PROGRAM_CHECK_PROCESS_YN").value;

			begin_date = document.getElementById("begin_date").value;
			end_date = document.getElementById("end_date").value;
			//alert(RecoverDel);

			$.post(
				'./process_user_policy.php',
				{ 'BootPeVer':BootPeVer, 'LogIDPW':LogIDPW, 'UseCS' : UseCS, 'UseBT' : UseBT, 'ScanKind' : ScanKind, 'CompareFile' : CompareFile
					, 'CompleteWork' : CompleteWork, 'RecoverDel' : RecoverDel, 'CheckComplete' : CheckComplete, 'DeleteExt' : DeleteExt, 'SkipFile' : SkipFile
					, 'begin_date':begin_date , 'end_date': end_date, 'user_info_list_seq':user_info_list_seq, 'FIApply':FIApply
					, 'WINUPDATE_USE_YN':WINUPDATE_USE_YN, 'WINUPDATE_TERM':WINUPDATE_TERM, 'WIN_IP_ADDR':WIN_IP_ADDR, 'VACCINE_USE_YN':VACCINE_USE_YN, 'VACCINE_TERM':VACCINE_TERM, 'VACCINE_TYPE':VACCINE_TYPE
				    , 'CHECK_OUT_DAYS' : CHECK_OUT_DAYS, 'CHECK_IN_XP_YN' : CHECK_IN_XP_YN, 'VACCINE_PASS_YN' : VACCINE_PASS_YN, 'VACWIN_TYPE':VACWIN_TYPE
					, 'VACCINE_IMG_YN' : VACCINE_IMG_YN, 'WINUPDATE_IMG_YN' : WINUPDATE_IMG_YN, 'VACCINE_PATCH_TERM' : VACCINE_PATCH_TERM
					, 'DIFFER_CHECKOUT_DAYS': DIFFER_CHECKOUT_DAYS , 'DIFFER_COMPLETE_WORK' : DIFFER_COMPLETE_WORK, 'HIDDEN_PART_CHECK' : HIDDEN_PART_CHECK
					, 'TRANS_DELETE_YN': TRANS_DELETE_YN, 'FTPS_YN': FTPS_YN, 'AGENT_DELETE_NAME' : AGENT_DELETE_NAME, 'AGENT_DELETE_YN' : AGENT_DELETE_YN, 'VACCINE_DELETE_YN' : VACCINE_DELETE_YN
					, 'NAC_DELETE_YN' : NAC_DELETE_YN, 'AGENT_INSTALL_METHOD': AGENT_INSTALL_METHOD , 'WINUPDATE_DAY_ONLY': WINUPDATE_DAY_ONLY
				    , 'POLICY_MODIFY_REASON': POLICY_MODIFY_REASON, 'VSS_USE_YN': VSS_USE_YN, 'WIN_VER_CHECK_YN': WIN_VER_CHECK_YN, 'OFFICE_VER_CHECK_YN': OFFICE_VER_CHECK_YN
					, 'PROGRAM_CHECK_YN': PROGRAM_CHECK_YN, 'PROGRAM_CHECK_PROCESS_YN': PROGRAM_CHECK_PROCESS_YN
				 },
				function(data) {
					alert(data);
					location.reload(true);
				},
				'text'
			);
}

//화면 잠금 풀어주기
function permitUnlockScreen(io_val){
		
		
		if(io_val ==""){
			//alert("반.출입 정보가 올바르지 않습니다.");
			alert(qq182[lang_code]);
		}else{

			$.post(
				SITE_NAME+'/process_unlockscreen.php',
				{ 'io_val':io_val
				 },
				function(data) {
					alert(data);
					location.reload(true);
				},
				'text'
			);
		}
}

// 메일 서버 세팅
function processMail(flag, admin_id, remote_addr) {

			var m_seq = document.getElementById("m_seq").value;
			var m_server = document.getElementById("m_server").value;
			var m_id = document.getElementById("m_id").value;
			var m_pwd = document.getElementById("m_pwd").value;
			var m_use = document.getElementById("m_use").value;
			var SMTP_PORT = document.getElementById("SMTP_PORT").value;

			$('#viewLoading').css('position', 'absolute');
			$('#viewLoading').css('left', $('#'+flag).offset().left);
			$('#viewLoading').css('top', $('#'+flag).offset().top);
			$('#viewLoading').css('width', $('#'+flag).css('width'));
			$('#viewLoading').css('height', $('#'+flag).css('height'));
			$('#viewLoading').fadeIn(500);

			
			$.post(
				'./process_mail.php',
				{	'm_seq':m_seq
					, 'm_server':m_server
					, 'm_id' : m_id
					, 'm_pwd' : m_pwd
					, 'm_use': m_use
					, 'SMTP_PORT': SMTP_PORT
					, 'admin_id': admin_id
					, 'remote_addr': remote_addr
				 },
				function(data) {
					alert(data);
					$('#viewLoading').fadeOut(500);
					location.reload(true);
				},
				'text'
			);
}



// 시그너쳐 맵핑 세팅
function setSignature(sign_map_seq, ext_name, file_id, str_name, search_flag, fake_check) {

			document.getElementById("map_seq").value = sign_map_seq;
			document.getElementById("ext_name").value = ext_name;
			document.getElementById("file_id").value = file_id;
			document.getElementById("str_name").value = str_name;
			document.getElementById("search_flag").value = search_flag;
			document.getElementById("fake_check").value = fake_check;
}


//사용자별 반출내역
function getInoutSub(frm, inoutSeq, userKey, eMail, page) {


	var obj = eval(frm);

	var compdate = obj.compdate.value;
	var gw_name = obj.gw_name.value;
	var sopt = obj.searchopt.value;
	var skey = obj.searchkey.value;

	$.post(
				'./outfile1_sub.php',
				{ 'user_key':userKey, 'email':eMail, 'compdate' : compdate, 'gw_name':gw_name, 'inout_seq':inoutSeq, 'page':page
				 },
				function(data) {

					$(".sub_inout").html ("");
					$("#div"+inoutSeq).html(data);

				},
				'text'
			);
}

//노트북 키(별 반출내역
function getUserkeySub(frm, inoutSeq, userKey, eMail, page) {



	var obj = eval(frm);

	var compdate = obj.compdate.value;
	var gw_name = obj.gw_name.value;
	var sopt = obj.searchopt.value;
	var skey = obj.searchkey.value;



	$.post(
				'./outfile2_sub.php',
				{ 'user_key':userKey, 'email':eMail, 'compdate' : compdate, 'gw_name':gw_name, 'inout_seq':inoutSeq, 'page':page
				 },
				function(data) {

					$(".sub_inout").html ("");
					$("#div"+inoutSeq).html(data);

				},
				'text'
			);
}

//체크박스선택 반전
function onSelect01(){
	var iLen = 0;
	iLen = $("input:checkbox").length;
	iLen = iLen - 1;
	if($("#select_tmp").is(':checked') == true) {
		for(i = 0; i < iLen; i++) {
			document.getElementById("select_checkbox"+i).checked = "checked";
		}	
	} else {
		for(i = 0; i < iLen; i++) {
			//if($("#select_checkbox"+i).is(':checked') == true) {
			document.getElementById("select_checkbox"+i).checked = "";
		}	
	}
}


//체크박스선택 반전
function onSelect(form){
	if(form.select_tmp.checked){
		selectAll();
	}else{
		selectEmpty();
	}
}



//체크박스 전체선택
function selectAll(){
	var i; 	
	for(i=0;i<document.forms.length;i++){
		//alert(document.forms[i].id);
		if(document.forms[i].id != null){
			if(document.forms[i].select_checkbox){
				document.forms[i].select_checkbox.checked = true;
			}
		}
	}
	return;
}

//체크박스 선택해제
function selectEmpty(){
	var i;
	for(i=0;i<document.forms.length;i++){
		if(document.forms[i].select_checkbox){
			if(document.forms[i].id != null){
				document.forms[i].select_checkbox.checked = false;
			}
		}
	}
	return;
}

//메일발송
function mailReSend01(mail_log_seq, inout_seq, file_mode, flag, mailaddr){

	var selmail = "", iLen = 0;
	

	

	if(file_mode != "ALL") {
		
		iLen = $("input[name=select_checkbox]:checkbox:checked").length;
		
		if(iLen < 1) {
			//alert("재전송할 메일을 선택하세요.");
			alert(qq114[lang_code]);
			return;
		} else {

			for(i=0;i<iLen;i++){
				selmail = selmail +  $('#file_seq'+i).val() + ",";
			}
		}
	}
	
	if(selmail.length > 0) {
		selmail = selmail.substring(0, selmail.length-1);
	}

	if(file_mode != "ALL" && selmail == ""){
		//alert("재전송할 메일을 선택하세요.");
		
		alert(qq114[lang_code]);
		
	} else {
		//mailaddr = prompt("받는사람 메일을 확인하세요.", mailaddr);
		mailaddr = prompt(qq115[lang_code], mailaddr);
		if(mailaddr != null) {
			//alert(mailaddr);
		
			//if(confirm("선택한 메일을 재전송 하시겠습니까? 메일 전송시 수초의 시간이 걸릴 수 있습니다.")){
			if(confirm(qq116[lang_code])){

				//여기서 기다리는 이미지 보여 주기
				$('#viewLoading').css('position', 'absolute');
				$('#viewLoading').css('left', $('#'+flag).offset().left);
				$('#viewLoading').css('top', $('#'+flag).offset().top);
				$('#viewLoading').css('width', $('#'+flag).css('width'));
				$('#viewLoading').css('height', $('#'+flag).css('height'));
				$('#viewLoading').fadeIn(500);

				
				$.post(
					'./maillog_resend.php',
					{ 'file_seq':selmail, 'mail_log_seq':mail_log_seq, 'inout_seq' : inout_seq, 'file_mode': file_mode, 'mailaddr':mailaddr
					 },
					function(data) {
						$('#viewLoading').fadeOut(500);
						alert(data);
					},
					'text'
				);
			}

		}
	}
	

}
//메일발송
function mailReSend(mail_log_seq, inout_seq, file_mode, flag, mailaddr){

	var selmail = "";
	

	//여기서 기다리는 이미지 보여 주기
	$('#viewLoading').css('position', 'absolute');
	$('#viewLoading').css('left', $('#'+flag).offset().left);
	$('#viewLoading').css('top', $('#'+flag).offset().top);
	$('#viewLoading').css('width', $('#'+flag).css('width'));
	$('#viewLoading').css('height', $('#'+flag).css('height'));
	$('#viewLoading').fadeIn(500);

	if(file_mode != "ALL") {
		for(i=0;i<document.forms.length;i++){
			
			if(document.forms[i].file_seq != null){
				
				if(document.forms[i].select_checkbox){
					if(document.forms[i].select_checkbox.checked)	 {
						selmail = selmail + document.forms[i].file_seq.value + ",";
					}
				}
			}
		}
	}

	if(selmail.length > 0) {
		selmail = selmail.substring(0, selmail.length-1);
	}else{

	}

	if(file_mode != "ALL" && selmail == ""){
		//alert("재전송할 메일을 선택하세요.");
		alert(qq114[lang_code]);
		
	} else {
		//mailaddr = prompt("받는사람 메일을 확인하세요", mailaddr);
		mailaddr = prompt("받는사람 메일을 확인하세요", mailaddr);
		if(mailaddr != null) {
			//alert(mailaddr);
		
			//if(confirm("선택한 메일을 재전송 하시겠습니까? 메일 전송시 수초의 시간이 걸릴 수 있습니다.")){
			if(confirm(qq116[lang_code])){
				//document.location.href= "maillog_resend.php?file_seq="+selmail+"&mail_log_seq="+mail_log_seq+"&inout_seq="+inout_seq;
				//return;
				
				$.post(
					'./maillog_resend.php',
					{ 'file_seq':selmail, 'mail_log_seq':mail_log_seq, 'inout_seq' : inout_seq, 'file_mode': file_mode, 'mailaddr':mailaddr
					 },
					function(data) {
						$('#viewLoading').fadeOut(500);
						alert(data);
					},
					'text'
				);
			}
		}
	}
	$('#viewLoading').fadeOut(500);

}



function fileSignature(gate_ip, site_path, change_file_seq, local_path, url_path, filename, filename2, proc) {

	var file_id, file_sign, file_id_val, file_sign_val;
	
	//여기서 기다리는 이미지 보여 주기
	$('#viewLoading').css('position', 'absolute');
	$('#viewLoading').css('left', $('#file_sign'+change_file_seq).offset().left);
	$('#viewLoading').css('top', $('#file_sign'+change_file_seq).offset().top);
	$('#viewLoading').css('width', $('#file_sign'+change_file_seq).css('width'));
	$('#viewLoading').css('height', $('#file_sign'+change_file_seq).css('height'));
	$('#viewLoading').fadeIn(500);

	//alert(local_path);

	$.getJSON(
		'./rsync_check.php',
		{	'change_file_seq':change_file_seq, 
			'local_path':local_path, 
			'url_path' : url_path, 
			'filename': filename, 
			'filename2': filename2, 
			'proc': proc,
			'gate_ip': gate_ip,
			'site_path': site_path
		 },
		function(data) {
		
			file_id_val = "#file_id" + change_file_seq + "";
			file_sign_val = "#file_sign" + change_file_seq + "";

			//alert(data.FILE_SIGNATURE);
			
			if(data.FILE_SIGNATURE == "NO") {
				//alert('파일이 존재하지 않습니다.');
				alert(qq117[lang_code]);
			} else {
				$(file_id_val).html(data.FILE_ID);
				$(file_sign_val).html(data.FILE_SIGNATURE);
			}		
			
			$('#viewLoading').fadeOut(500);
			
		},
		'text'
	);

}

function fileSignatureNew(gate_ip, site_path, change_file_seq, local_path, url_path, filename, filename2, proc) {

	var  file_sign, file_id_val, file_sign_val;
	//alert(gate_ip);
	
	//여기서 기다리는 이미지 보여 주기
	
	$('#viewLoading').css('position', 'absolute');
	$('#viewLoading').css('left', $('#file_sign'+change_file_seq).offset().left);
	$('#viewLoading').css('top', $('#file_sign'+change_file_seq).offset().top);
	$('#viewLoading').css('width', $('#file_sign'+change_file_seq).css('width'));
	$('#viewLoading').css('height', $('#file_sign'+change_file_seq).css('height'));
	$('#viewLoading').fadeIn(500);
	
	//alert(change_file_seq);

	//alert("change_file_seq="+change_file_seq+"&local_path="+local_path+"&url_path="+url_path+"&filename="+filename+"&filename2="+filename2+"&proc="+proc+"&gate_ip="+gate_ip+"&site_path="+site_path);
	//return;

	$.getJSON(
		SITE_NAME+'/rsync_check.php',
		{	'change_file_seq':change_file_seq, 
			'local_path':local_path, 
			'url_path' : url_path, 
			'filename': filename, 
			'filename2': filename2, 
			'proc': proc,
			'gate_ip': gate_ip,
			'site_path': site_path
		 },
		function(data) {

			//alert(data);
		
			file_sign_val = "#file_sign" + change_file_seq + "";

			
			
			if(data.FILE_SIGNATURE == "NO") {
				//alert('파일이 존재하지 않습니다.');
				alert(qq117[lang_code]);
			} else {
				$(file_sign_val).html(data.FILE_SIGNATURE);
			}		
			
			$('#viewLoading').fadeOut(500);
			
		},
		'text'
	);


}

function fileSearchDB(gate_ip, site_path, SearchdataPath, change_file_seq, local_path, url_path, filename, filename2, proc, http) {

	var file_id, file_sign, file_id_val, search_text;
	var empty = new Array();                       
	//여기서 기다리는 이미지 보여 주기
	/*
	$('#viewLoading').css('position', 'absolute');
	$('#viewLoading').css('left', $('#file_search'+change_file_seq).offset().left);
	$('#viewLoading').css('top', $('#file_search'+change_file_seq).offset().top);
	$('#viewLoading').css('width', $('#file_search'+change_file_seq).css('width'));
	$('#viewLoading').css('height', $('#file_search'+change_file_seq).css('height'));
	$('#viewLoading').fadeIn(500);
	*/

	//alert("change_file_seq="+change_file_seq+"&local_path="+local_path+"&url_path="+url_path+"&filename="+filename+"&filename2="+filename2+"&proc="+proc+"&gate_ip="+gate_ip+"&site_path="+site_path);
	
//	alert(http);
//
//	if(http == "") {
//		http = "http://";
//	}


	
	$.getJSON(
		SITE_NAME+'/rsync_check.php',
		{	'change_file_seq':change_file_seq, 
			'local_path':local_path, 
			'url_path' : url_path, 
			'filename': filename, 
			'filename2': filename2, 
			'proc': proc,
			'gate_ip': gate_ip,
			'site_path': site_path
		 },
		function(data) {
		
			file_id_val = "#file_search" + change_file_seq + "";
			
			//alert(Object.prototype.toString.call(data));
			
			if(data != null){

				if(data.FILE_SEARCH == "NO") {
					alert(data.FILE_FLAG);
				} else {
					if(gate_ip != "") {
						search_text = '<span style="cursor:pointer;" class="Gray_N12_308dcc" onClick="newExport(\'' + http + '://' + gate_ip + SearchdataPath + '/' +  change_file_seq + '.txt\');">(File)</span>';
						search_text = search_text + '<span style="cursor:pointer;" class="Gray_N12_308dcc" onClick="newExport(\''+SITE_NAME+'/search/outfile_list_searchview_db.php?change_file_seq=' +  change_file_seq + '\');">(DB)</span>';
						$(file_id_val).html(search_text);
					} else {
						
						search_text = '<span style="cursor:pointer;" class="Gray_N12_308dcc" onClick="newExport(\'' + SearchdataPath + '/' +  change_file_seq + '.txt\');">(File)</span>';
						search_text = search_text + '<span style="cursor:pointer;" class="Gray_N12_308dcc" onClick="newExport(\''+SITE_NAME+'/search/outfile_list_searchview_db.php?change_file_seq=' +  change_file_seq + '\');">(DB)</span>';
						$(file_id_val).html(search_text);
					}
				}	
			
			}
			
			$('#viewLoading').fadeOut(500);
			
		},
		'text'
	);

}


//메일발송
function mailSend(email, comname, name, chargename, department){

	
	var selfile = "", file_seq="";
	var file_mode = document.getElementById("file_mode").value;

	var i=0;
	
	if(file_mode != "ALL") {
		for(i=0; i < $('#resultFileInfo').find('#select_checkbox').length; i++) {

			if($('#resultFileInfo').find('#select_checkbox')[i].checked) {
				file_seq += $('#resultFileInfo').find('#select_checkbox')[i].value + ",";
				selfile += $('#resultFileInfo').find('#file')[i].value + "|";
			}
		}
	}


	if(file_mode != "ALL" && (selfile == "" || file_seq == "") ){
		//alert("파일을 선택하세요.");
		alert(qq118[lang_code]);
	}else{
		if(file_seq.length > 0) file_seq = file_seq.substring(0, file_seq.length-1);

		window.open("","mailSend","width=546, height=520, left=30, top=30");
		document.fileFrm.filelist.value = selfile;
		document.fileFrm.remail1.value = email;
		document.fileFrm.comname1.value = comname;
		document.fileFrm.name.value = name;
		document.fileFrm.department.value = department;
		document.fileFrm.chargename.value = chargename;
		document.fileFrm.file_seq.value = file_seq;
		
		//alert(document.fileFrm.filelist.value);
		document.fileFrm.target="mailSend";
		document.fileFrm.submit();
	}
}

//메일발송
function mailSendAll(email, comname, name, chargename, department){

	
	document.fileFrm.file_mode.value = "ALL";
	mailSend(email, comname, name, chargename, department);
}

// HTML Export
function htmlExport(gate_ip, change_file_seq, local_path, url_path, filename, http){
	if(http == "") {
		http = "http://";
	}
	//window.open('htmlexport.php?local_path='+local_path+'&filename='+filename , 'htmlExport','top=10px, left=100px, width=990, height=960, menubar=no,toolbar=no,location=no,status=no,resizable=yes,scrollbars=yes').focus();
	//window.open('http://' + gate_ip + '/rsync_check.php?change_file_seq='+ change_file_seq + '&local_path='+local_path+'&url_path='+url_path+'&filename='+filename+'&proc=HTML' , 'htmlExport','top=10px, left=100px, width=990, height=960, menubar=no,toolbar=no,location=no,status=no,resizable=yes,scrollbars=yes').focus();
	if(gate_ip != "")	{
		window.open(http + '://' + gate_ip + '/rsync_check.php?change_file_seq='+ change_file_seq + '&local_path='+local_path+'&url_path='+url_path+'&filename='+filename+'&proc=HTML' , 'htmlExport','top=10px, left=100px, width=990, height=960, menubar=no,toolbar=no,location=no,status=no,resizable=yes,scrollbars=yes').focus();
	} else {
		window.open(SITE_NAME+'/rsync_check.php?change_file_seq='+ change_file_seq + '&local_path='+local_path+'&url_path='+url_path+'&filename='+filename+'&proc=HTML' , 'htmlExport','top=10px, left=100px, width=990, height=960, menubar=no,toolbar=no,location=no,status=no,resizable=yes,scrollbars=yes').focus();
	}
}

//윈도우오픈
function winOpen3(http, gate_ip, port, url_path){
	window.open(http + '://' + gate_ip + port + "/" + url_path , 'win','top=10px, left=100px, width=990, height=400, menubar=no,toolbar=no,location=no,status=yes,resizable=yes,scrollbars=yes').focus();
}

function newExport(url_path){

	
	//alert(url_path);
	//window.open('htmlexport.php?local_path='+local_path+'&filename='+filename , 'htmlExport','top=10px, left=100px, width=990, height=960, menubar=no,toolbar=no,location=no,status=no,resizable=yes,scrollbars=yes').focus();
	window.open(url_path , 'newExport','top=10px, left=100px, width=920, height=960, menubar=no,toolbar=no,location=no,status=no,resizable=yes,scrollbars=yes').focus();
}

function chgGraph(type, user_key, email, flag, pos){

	
	
	$.post(
				'./pop_inout_list_tab.php',
				{ 'user_key':user_key, 'email':email, 'type' : type, 'pos' : pos
				 },
				function(data) {
					$("#"+flag).html(data);
				},
				'html'
			);
}

function chgSearchFile(type_file, flag){
	
	$.post(
				SITE_NAME+'/main_file_tab.php',
				{ 'type_file':type_file
				 },
				function(data) {
					
					$("#"+flag).html(data);
				},
				'html'
			);
}

function chgSearchDisk(type_disk,  flag){
	
	
	$.post(
				'./main_disk_tab.php',
				{ 'type_disk':type_disk
				 },
				function(data) {
					//alert(data);
					$("#"+flag).html(data);
				},
				'html'
			);
}


function chgMainGate(flag, pp_cnt, version_str){
	
	var link_str ;
	//alert(version_str);
	if(version_str >= "5.4") {
		link_str = "main_top_tab_54.php";
	} else {
		link_str = "main_top_tab.php";
	}
	$.post(
				link_str,
				{ 'pp_cnt':pp_cnt
				 },
				function(data) {
					//alert(data);
					$("#"+flag).html(data);
				},
				'html'
			);
	//alert(pp_cnt);
	iCnt = pp_cnt;
}

function chgGateGate(flag, pp_cnt, version_str){
	
	var link_str ;
	link_str = "total_gate_top_tab_54.php";
	
	$.get(
				link_str,
				{ 'pp_cnt':pp_cnt
				 },
				function(data) {
					//alert(data);
					$("#"+flag).html(data);
				},
				'html'
			);
	//alert(pp_cnt);
	iCnt = pp_cnt;
}

function chgMainGateName(flag, pp_cnt,  gw_name, version_str){
	//alert(version_str);
	
	var link_str ;
	
	if(version_str >= "5.4") {
		link_str = "main_top_tab_54.php";
	} else {
		link_str = "main_top_tab.php";
	}
	
	$.get(
				link_str,
				{ 'pp_cnt':pp_cnt,
				  'gw_name':gw_name
				 },
				function(data) {
					//alert(data);
					$("#"+flag).html(data);
				},
				'html'
			);
	//alert(pp_cnt);
	iCnt = pp_cnt;
	
}

function excelUserListDown(param, flag){
	if(flag != "") {
		$('#viewLoading').css('position', 'absolute');
		$('#viewLoading').css('left', $('#'+flag).offset().left);
		$('#viewLoading').css('top', $('#'+flag).offset().top);
		$('#viewLoading').css('width', $('#'+flag).css('width'));
		$('#viewLoading').css('height', $('#'+flag).css('height'));
		$('#viewLoading').fadeIn(500);
	}
	document.location = "./userlist_excel.php?"+param;
	if(flag != "") {
		$('#viewLoading').fadeOut(500);
	}
}

function excelTakeOutDown(param, flag){
	if(flag != "") {
		$('#viewLoading').css('position', 'absolute');
		$('#viewLoading').css('left', $('#'+flag).offset().left);
		$('#viewLoading').css('top', $('#'+flag).offset().top);
		$('#viewLoading').css('width', $('#'+flag).css('width'));
		$('#viewLoading').css('height', $('#'+flag).css('height'));
		$('#viewLoading').fadeIn(500);
	}
	alert("./takeout_excel.php?"+param);
	document.location = "./takeout_excel.php?"+param;
	if(flag != "") {
		$('#viewLoading').fadeOut(500);
	}
}

function excelDown(url, flag){
	//alert(url);
	if(flag != "") {
		$('#viewLoading').css('position', 'absolute');
		$('#viewLoading').css('left', $('#'+flag).offset().left);
		$('#viewLoading').css('top', $('#'+flag).offset().top);
		$('#viewLoading').css('width', $('#'+flag).css('width'));
		$('#viewLoading').css('height', $('#'+flag).css('height'));
		$('#viewLoading').fadeIn(500);
	}
	document.location = url;
	if(flag != "") {
		$('#viewLoading').fadeOut(500);
	}
}

function excelGuestListDown(param, flag){
	if(flag != "") {
		$('#viewLoading').css('position', 'absolute');
		$('#viewLoading').css('left', $('#'+flag).offset().left);
		$('#viewLoading').css('top', $('#'+flag).offset().top);
		$('#viewLoading').css('width', $('#'+flag).css('width'));
		$('#viewLoading').css('height', $('#'+flag).css('height'));
		$('#viewLoading').fadeIn(500);
	}
	document.location = "./guestlist_excel.php?"+param;
	if(flag != "") {
		$('#viewLoading').fadeOut(500);
	}
}

function excelGuestLongDown(param, flag){
	if(flag != "") {
		$('#viewLoading').css('position', 'absolute');
		$('#viewLoading').css('left', $('#'+flag).offset().left);
		$('#viewLoading').css('top', $('#'+flag).offset().top);
		$('#viewLoading').css('width', $('#'+flag).css('width'));
		$('#viewLoading').css('height', $('#'+flag).css('height'));
		$('#viewLoading').fadeIn(500);
	}
	document.location = "./guest_long_list_excel.php?"+param;
	if(flag != "") {
		$('#viewLoading').fadeOut(500);
	}
}

function excelAliveCheck(param, flag){
	if(flag != "") {
		$('#viewLoading').css('position', 'absolute');
		$('#viewLoading').css('left', $('#'+flag).offset().left);
		$('#viewLoading').css('top', $('#'+flag).offset().top);
		$('#viewLoading').css('width', $('#'+flag).css('width'));
		$('#viewLoading').css('height', $('#'+flag).css('height'));
		$('#viewLoading').fadeIn(500);
	}
	document.location = "../alive_excel.php?"+param;
	if(flag != "") {
		$('#viewLoading').fadeOut(500);
	}
}


function imgView(url){
	//document.iImageView.target=url;

//	iImageView.document.URL = url;

	//alert(document.iImageView.target);
	//alert(url);
/*
	$( "#dialog-modal" ).dialog({
			show: "blind",
			hide: "explode",
			height: 800,
			width: 800,
			modal: true,

		});
*/
	window.open(url , 'newImg','top=10px, left=100px, width=735, height=640, menubar=no,toolbar=no,location=no,status=no,resizable=yes,scrollbars=yes').focus();
}

function imgViewOne(change_file_seq, imgurl){
	var url = "./admin_file_imageviewone.php";
	url = url + "?change_file_seq=" + change_file_seq + "&imgurl=" + imgurl;
	window.open(url , 'newoneImg','top=10px, left=100px, width=990, height=960, menubar=no,toolbar=no,location=no,status=no,resizable=yes,scrollbars=yes').focus();
}

function excelMailDown(mail_seq, flag){
	if(flag != "") {
		$('#viewLoading').css('position', 'absolute');
		$('#viewLoading').css('left', $('#'+flag).offset().left);
		$('#viewLoading').css('top', $('#'+flag).offset().top);
		$('#viewLoading').css('width', $('#'+flag).css('width'));
		$('#viewLoading').css('height', $('#'+flag).css('height'));
		$('#viewLoading').fadeIn(500);
	}

	var url = "./maillog_excel.php?mail_seq="+mail_seq;
	document.location = url;
	if(flag != "") {
		$('#viewLoading').fadeOut(500);
	}
}

// 주소록으로 등록
function checkAddBook(name,email,phone,comname){
	
	//if(confirm('주소록으로 등록하시겠습니까?')){
	if(confirm(qq119[lang_code])){
		location.href="addrbook_save.php?USER_NAME="+name+"&EMAIL="+email+"&HP="+phone+"&COMPANY_NAME="+comname+"&refer=user&mode=insert&COMMENTS=내방객";
	}
}

//사용자 정보 검색
function subUserList(searchForm) {
	/*
	if(searchForm.searchkey.value == "") {
		alert("검색어를 입력하세요.");
		searchForm.searchkey.focus();
	} else {
	*/
		searchForm.submit();
	//}
	
}

/*
function openOutfileDetail(params) {
		window.open("outfile_tab_detail.php?"+params , "ODETAIL", "height=960px, width=1100px,scrollbars=yes");
}

//결과파일 상세검색
function goOutfileDetail(schForm) {
		var skey = schForm.searchkey.value;
		var paging = schForm.paging.value;
		var inout_seq = schForm.inout_seq.value;
		var user_key = schForm.user_key.value;
		var orderby = schForm.orderby.value;
		var file_ext = schForm.file_ext.value;

		document.location.href="outfile_tab_detail.php?searchkey="+skey+"&paging="+paging+"&inout_seq="+inout_seq+"&user_key="+user_key+"&orderby="+orderby+"&file_ext="+file_ext;
	
}
*/

function changefileExt(schForm, file_ext) {
	schForm.file_ext.value = file_ext;
	formSubmit(schForm);
}



function userDelete(userkey, email, proc) {
	
	if(userkey == "" || email == ""){
		//alert("정보가 잘못 되었습니다. 페이지를 Refresh 한 후 다시 시도해보세요.");
		alert(qq120[lang_code]);
	}else{
		var alertStr;

		if(proc == "DELETE") {
			//alertStr = "선택한 사용자(내방객) 정보를 삭제하시겠습니까?";
			alertStr = qq121[lang_code];
		}else{ //proc == "RECOVER"
			//alertStr = "선택한 사용자(내방객) 정보를 복구하시겠습니까?";
			alertStr = qq122[lang_code];
		}

		if(confirm(alertStr)){
			//document.location.href= "maillog_resend.php?file_seq="+selmail+"&mail_log_seq="+mail_log_seq+"&inout_seq="+inout_seq;

			$.post(
				'./user_delete.php',
				{ 'user_key':userkey, 'email':email, 'proc': proc
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

function userDeleteNew(USER_INFO_LIST_SEQ, proc) {
	
	if(USER_INFO_LIST_SEQ == ""){
		//alert("정보가 잘못 되었습니다. 페이지를 Refresh 한 후 다시 시도해보세요.");
		alert(qq120[lang_code]);
	}else{
		var alertStr;

		if(proc == "DELETE") {
			//alertStr = "선택한 사용자(내방객) 정보를 삭제하시겠습니까?";
			alertStr = qq121[lang_code];
		}else{ //proc == "RECOVER"
			//alertStr = "선택한 사용자(내방객) 정보를 복구하시겠습니까?";
			alertStr = qq122[lang_code];
		}

		if(confirm(alertStr)){
			//document.location.href= "maillog_resend.php?file_seq="+selmail+"&mail_log_seq="+mail_log_seq+"&inout_seq="+inout_seq;

			$.post(
				'./user_delete.php',
				{ 'USER_INFO_LIST_SEQ':USER_INFO_LIST_SEQ, 'proc': proc
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

//반출입정보검색
function subTakeOut(searchForm) {

	if(searchForm.scandate.value == "" ^ searchForm.compdate.value == "") {
		//alert("날짜 기간을 정확히 입력하세요.");
		alert(qq123[lang_code]);
		searchForm.scandate.focus();
		return false;
	} 

	searchForm.submit();
		
}

//결과파일리스트정보검색
function subOutList(searchForm) {
	/*
	if(searchForm.searchkey.value == "") {
		alert("검색어를 입력하세요.");
		searchForm.searchkey.focus();
	} else {
	*/
		searchForm.submit();
	//}
	
}

//메일로그
function subMaillog(searchForm) {
	/*
	if(searchForm.searchkey.value == "") {
		alert("검색어를 입력하세요.");
		searchForm.searchkey.focus();
	} else {
	*/
		searchForm.submit();
	//}
	
}

//환경설정관리자정보검색
function AdminSearch(searchForm) {
	/*
	if(searchForm.searchkey.value == "") {
		alert("검색어를 입력하세요.");
		searchForm.searchkey.focus();
	} else {
	*/
		searchForm.submit();
	//}
	
}

function AddrSearch(searchForm) {
	/*
	if(searchForm.searchkey.value == "") {
		alert("검색어를 입력하세요.");
		searchForm.searchkey.focus();
	} else {
	*/
		searchForm.submit();
	//}
	
}

function formSubmit(formName) {

		formName.submit();
	
}

function fileView (inout_seq, user_key, email, page, orderby, file_ext) {

		//$('#resultFileInfo').hide();
		var html_str ="	<br/><br/><table class='sub3_table'>" ;
			html_str +=	"<tr>	<th><input type='checkbox' name='select_tmp' id='checkbox' class='sub2_date_bg'  /></th>";
			//html_str +=	"		<th class='no_line'>파일이름</th>";
			html_str +=	"		<th class='no_line'>File Name</th>";
			html_str +=	"		<th>HTML Export</th>";
			html_str +=	"		<th>Size</th>";
			html_str +=	"		<th>Type</th>";
			//html_str +=	"		<th>시그너쳐</th>";
			html_str +=	"		<th>Signature</th>";
			html_str +=	"		<th>File ID</th>";
			//html_str +=	"		<th>내용분석</th>";
			html_str +=	"		<th>" + qq124[lang_code] + "</th>";
			html_str +=	"		<th>Date Modified</th>";
			html_str +=	"	<th>Date Created</th>";
			html_str +=	"</tr>";
			html_str +=	"<tr><td colspan='10'>&nbsp;</td></tr>";
			//html_str +=  "<tr><td align='center' colspan='10'>...... 내역을 불러오고 있습니다. ......</td></tr>";
			html_str +=  "<tr><td align='center' colspan='10'>...... " + qq125[lang_code] + "......</td></tr>";
			html_str +=  "<tr><td colspan='10'>&nbsp;</td></tr></table>";


		var paging = document.getElementById("paging").value; //$('#paging').value;
		
		document.getElementById("inout_seq").value = inout_seq;
		document.getElementById("user_key").value = user_key;
		document.getElementById("email").value = email;
		
		
		$('#resultFileInfo').html(html_str);
		//alert(file_ext);
		$.post(
			'./outfile_tab.php',
			{
				'inout_seq':inout_seq,
				'user_key':user_key,
				'email':email,
				'page':page,
				'paging':paging,
				'orderby':orderby,
				'file_ext':file_ext
			},
			function(data) {
				
				$('#resultFileInfo').html(data);
				$('#resultFileInfo').show('blind');
			},
			'html'
		);
		
}

function pagingFileView() {

	var inout_seq = document.getElementById("inout_seq").value;
	var user_key = document.getElementById("user_key").value;
	var email = document.getElementById("email").value;

	 fileView (inout_seq, user_key, "", "", "", "");
}

var marked_idx;
var marked_row = new Array;

function setPointer(theRow, theRowNum, theAction, theDefaultColor, thePointerColor, theMarkColor)
{

    var theCells = null;

    // 1. Pointer and mark feature are disabled or the browser can't get the
    //    row -> exits
    if ((thePointerColor == '' && theMarkColor == '')
        || typeof(theRow.style) == 'undefined') {
        return false;
    }

    // 2. Gets the current row and exits if the browser can't get it
    if (typeof(document.getElementsByTagName) != 'undefined') {
        theCells = theRow.getElementsByTagName('td');
    }
    else if (typeof(theRow.cells) != 'undefined') {
        theCells = theRow.cells;
    }
    else {
        return false;
    }

    // 3. Gets the current color...
    var rowCellsCnt  = theCells.length;
    var domDetect    = null;
    var currentColor = null;
    var newColor     = null;
    // 3.1 ... with DOM compatible browsers except Opera that does not return
    //         valid values with "getAttribute"
    if (typeof(window.opera) == 'undefined'
        && typeof(theCells[0].getAttribute) != 'undefined') {
        currentColor = theCells[0].getAttribute('bgcolor');
        domDetect    = true;
    }
    // 3.2 ... with other browsers
    else {
        currentColor = theCells[0].style.backgroundColor;
        domDetect    = false;
    } // end 3

    // 4. Defines the new color
    // 4.1 Current color is the default one
    if (currentColor == null || currentColor == '' || currentColor.toLowerCase() == theDefaultColor.toLowerCase()) {

        if (theAction == 'over' && thePointerColor != '') {
            newColor              = thePointerColor;
        }
        else if (theAction == 'click' && theMarkColor != '') {
            newColor              = theMarkColor;
            
            marked_idx = theRowNum;
        }
    }
    // 4.1.2 Current color is the pointer one
    //else if (currentColor.toLowerCase() == thePointerColor.toLowerCase() && (typeof(marked_row[theRowNum]) == 'undefined' || !marked_row[theRowNum])) {  //구글 크롬에서 적용안되 주석 처리
	else if (currentColor.toLowerCase() == thePointerColor.toLowerCase() ) {

        if (theAction == 'out') {
            newColor              = theDefaultColor;
        }
        else if (theAction == 'click' && theMarkColor != '') {
            newColor              = theMarkColor;
            //marked_row[theRowNum] = true;		// 주석처리
            
            //////////////////////////////////////////////////////////// 추가부분
            if(marked_idx){
            	marked_cells = marked_idx.cells;
            	var marked_cnt  = marked_cells.length;
            	for (c = 0; c < marked_cnt; c++) {
                	marked_cells[c].setAttribute('bgcolor', theDefaultColor, 0);
            	} // end for
            }
            marked_idx = theRow;
            ////////////////////////////////////////////////////////////
            
        }
    }
    // 4.1.3 Current color is the marker one
    else if (currentColor.toLowerCase() == theMarkColor.toLowerCase()) {

        if (theAction == 'click') {
            newColor              = (thePointerColor != '')
                                  ? thePointerColor
                                  : theDefaultColor;
            marked_row[theRowNum] = (typeof(marked_row[theRowNum]) == 'undefined' || !marked_row[theRowNum])
                                  ? true
                                  : null;
        }
    } // end 4

    // 5. Sets the new color...
    if (newColor) {
        var c = null;
        // 5.1 ... with DOM compatible browsers except Opera
        if (domDetect) {
            for (c = 0; c < rowCellsCnt; c++) {
                theCells[c].setAttribute('bgcolor', newColor, 0);
            } // end for
        }
        // 5.2 ... with other browsers
        else {
            for (c = 0; c < rowCellsCnt; c++) {
                theCells[c].style.backgroundColor = newColor;
            }
        }
    } // end 5

    return true;
} // end of the 'setPointer()' function

function inputReportCheck(frm, div){
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

	var gpcgateInout  = frm.gpcgateInout; 
	chk = gpcgateInout.checked; 
	
	if(chk) {
		gpcgateInout = gpcgateInout.value; 
	} else {
		gpcgateInout = 'N'; 
	}

	var gUserInout  = frm.gUserInout; 
	chk = gUserInout.checked; 
	
	if(chk) {
		gUserInout = gUserInout.value; 
	} else {
		gUserInout = 'N'; 
	}

	var gUser  = frm.gUser; 
	chk = gUser.checked; 
	
	if(chk) {
		gUser = gUser.value; 
	} else {
		gUser = 'N'; 
	}

	var gIn  = frm.gIn; 
	chk = gIn.checked; 
	
	if(chk) {
		gIn = gIn.value; 
	} else {
		gIn = 'N'; 
	}

	var gOut  = frm.gOut; 
	chk = gOut.checked; 
	
	if(chk) {
		gOut = gOut.value; 
	} else {
		gOut = 'N'; 
	}

	var gMail  = frm.gMail; 
	chk = gMail.checked; 
	
	if(chk) {
		gMail = gMail.value; 
	} else {
		gMail = 'N'; 
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
				'gpcgateInout':gpcgateInout,
				'gUserInout':gUserInout,
				'gUser':gUser,
				'gIn':gIn,
				'gOut':gOut,
				'gMail':gMail
			 },
			function(data) {
				$('#reportTab').html(data);
				$('#reportTab').show('clip');
			},
			'html'
		);
	} else if(div == "pop") {
		frm.display_flag.value = "Y";
		frm.action = "report_tab.php";
		window.open('' , 'report','top=10px, left=100px, width=990, height=960, menubar=no,toolbar=no,location=no,status=no,resizable=yes,scrollbars=yes').focus();
		frm.target="report";
		document.frm.submit();

	}else if(div == "excel") {
		frm.display_flag.value = "Y";
		frm.target="report";
		frm.action = "report_tab_excel.php";
		document.frm.submit();
	}
}


//qq182[lang_code]
function inputReportCheckSEMES(frm, div, pos){
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

	var gpcgateInout  = frm.gpcgateInout; 
	chk = gpcgateInout.checked; 
	
	if(chk) {
		gpcgateInout = gpcgateInout.value; 
	} else {
		gpcgateInout = 'N'; 
	}

	var gUserInout  = frm.gUserInout; 
	chk = gUserInout.checked; 
	
	if(chk) {
		gUserInout = gUserInout.value; 
	} else {
		gUserInout = 'N'; 
	}

	var gUser  = frm.gUser; 
	chk = gUser.checked; 
	
	if(chk) {
		gUser = gUser.value; 
	} else {
		gUser = 'N'; 
	}

	var gIn  = frm.gIn; 
	chk = gIn.checked; 
	
	if(chk) {
		gIn = gIn.value; 
	} else {
		gIn = 'N'; 
	}

	var gOut  = frm.gOut; 
	chk = gOut.checked; 
	
	if(chk) {
		gOut = gOut.value; 
	} else {
		gOut = 'N'; 
	}

	var gMail  = frm.gMail; 
	chk = gMail.checked; 
	
	if(chk) {
		gMail = gMail.value; 
	} else {
		gMail = 'N'; 
	}

	

	if(div == "left") {
		frm.display_flag.value = "Y";
		
		$.post(
			'./report01_tab.php',
			{ 'subject':frm.subject.value,
				'persion':frm.persion.value,
				'rdate':frm.rdate.value,
				'sdate':frm.sdate.value,
				'edate':frm.edate.value,
				'graphm':graphm,
				'graphd':graphd,
				'graphh':graphh,
				'graphw':graphw,
				'gpcgateInout':gpcgateInout,
				'gUserInout':gUserInout,
				'gUser':gUser,
				'gIn':gIn,
				'gOut':gOut,
				'user_type':frm.user_type.value,
				'gMail':gMail,
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
				'&gpcgateInout='+gpcgateInout+
				'&gUserInout='+gUserInout+
				'&gUser='+gUser+
				'&gIn='+gIn+
				'&gOut='+gOut+
				'&user_type='+frm.user_type.value+
				'&gMail='+gMail+
				'&display_flag='+frm.display_flag.value+
				'&div='+frm.div.value+
				'&pos='+pos+
				'&graphw='+graphw+
				'&graphh='+graphh+
				'&graphd='+graphd



//		window.open('about:blank' , 'report','top=10px, left=100px, width=1100, height=960, menubar=no,toolbar=no,location=no,status=no,resizable=yes,scrollbars=yes').focus();
//		frm.action = "report01_tab.php";
//		frm.target="report";
//		document.frm.submit();

		window.open('report01_tab.php?'+param , 'report','top=10px, left=100px, width=1100, height=960, menubar=no,toolbar=no,location=no,status=no,resizable=yes,scrollbars=yes').focus();

	}else if(div == "excel") {
		frm.display_flag.value = "Y";
		frm.target="report";
		frm.action = "report_tab_excel.php";
		document.frm.submit();
	}
}

function passwordCheck(pw) {
	

	var num = /[0-9]/;
    var eng_s = /[a-z]/;
	var eng_l = /[A-Z]/;

    var spe = /[~!@\#$%<>^&*]/;     // 원하는 특수문자 추가 제거

	var pwd_cnt;
	pwd_cnt = 0;

	if (num.test(pw)) {
		pwd_cnt++;
	}
	
	if (eng_s.test(pw)) {
		pwd_cnt++;
	}
	

	if (eng_l.test(pw)) {
		pwd_cnt++;
	}
	
	if (spe.test(pw)) {
		pwd_cnt++;
	}
	
	return pwd_cnt;
}



function inputAdminCheck(frm, ERASE_USE_YN) {

	var idiv = frm.mode.value;
	var processDiv = false;
	var chkPwd = false;
	if(idiv == 'insert') {
		
		//if(!confirm("신규등록하시겠습니까?")) {
		if(!confirm(qnewregister[lang_code])) {
			return false;
			processDiv = false;
		}
	} else if(idiv == 'update') {
		//alert("a");
		//alert(lang_code);
		
		//if(!confirm("수정하시겠습니까?")) {
		if(!confirm(qupdate[lang_code])) {
			return false;
			processDiv = false;
		}

	}
	if(idiv == "update") {
		if(document.getElementById("admin_seq").value==""){
		//if(frm.admin_seq.value==""){
			//alert("수정할 관리자가 선택되지 않았습니다.");
			alert(qadminnotselect[lang_code]);
			return false;
		}
		
	}
	
	if(document.getElementById("admin_id").value==""){
	//if(frm.admin_id.value==""){
		//alert("관리자아이디를 입력하세요.");
		alert(qadminidinput[lang_code]);
		frm.admin_id.focus();
		return false;
	}
	
	if(idiv == "insert") {
		if(document.getElementById("admin_pwd").value==""){
		//if(frm.admin_pwd.value==""){
			//alert("관리자비밀번호를 입력하세요.");
			alert(qadminpasswdinput[lang_code]);
			document.getElementById("admin_pwd").focus();
			return false;
		}
	}
	
	/*
	if(document.getElementById("admin_pwd").value=="" && ERASE_USE_YN == "Y"){
	//if(frm.admin_pwd.value!="") {
		//비밀번호 규칙 검사
		if(document.getElementById("erase_admin_use_yn").value == "Y") {
			chkPwd = checkPasswdValid(document.getElementById("admin_pwd").value, document.getElementById("admin_id").value);
			if(!chkPwd) {
				return false;
			}
		}
	}
	*/


	if(document.getElementById("admin_pwd").value != document.getElementById("admin_pwd1").value){
	//if(frm.admin_pwd.value != frm.admin_pwd1.value){
		//alert("비밀번호가 일치하지 않습니다. 비밀번호를 확인하세요.");
		alert(qpwdnotsamepwdconfirm[lang_code]);
		document.getElementById("admin_pwd").focus();
		return false;
	}

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

	//화면잠금해제 비밀번호
	var screen_unlock_pwd_change = $("#screen_unlock_pwd").is(":visible");

	if(screen_unlock_pwd_change==true){
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
	
	if(document.getElementById("admin_name").value==""){
	//if(frm.admin_name.value==""){
		//alert("이름을 입력하세요.");
		alert(qnameinput[lang_code]);
		document.getElementById("admin_name").focus();
		return false;
	}

	if(document.getElementById("hp").value==""){
	//if(frm.hp.value==""){
		//alert("연락처를 입력하세요.");
		alert(qtelephoneinput[lang_code]);
		document.getElementById("hp").focus();
		return false;
	}
	if(document.getElementById("email").value==""){
	//if(frm.email.value==""){
		//alert("이메일을 입력하세요.");
		alert(qmailinput[lang_code]);
		document.getElementById("email").focus();
		return false;
	}

	if($("input[name='gw_name[]']:checked").length==0){

		alert(qq224[lang_code]+"("+getLabelName('gw_name')+")");
		return false;
	}

	if($("input[name='view_gate_name123']:checked").length==0){

		alert(qq224[lang_code]+"("+getLabelName('view_gate_name123')+")");
		return false;
	}
	

	//if(ERASE_USE_YN == "Y") {
	/*
	if(document.getElementById("erase_use_yn").value=="Y"){
	//if(frm.erase_use_yn.value=="Y"){

		if(document.getElementById("erase_admin_grade").value==""){
		//if(frm.erase_admin_grade.value==""){
			//alert("D.Eraser 관리자 권한을 선택하세요");
			alert(qq190[lang_code]);
			document.getElementById("erase_admin_grade").focus();
			return false;
		}
		
		if(document.getElementById("erase_admin_grade").value != "S"){
		//if(frm.erase_admin_grade.value  != "S"){

			var main_center_seq = $("#erase_main_manage_center option:selected").attr('center_seq');

			if(main_center_seq !=""){

				var check_mange_center = $("input[name='erase_manage_center[]'][value='"+main_center_seq+"']:checked").length;

				if(check_mange_center==0){
					alert(qq191[lang_code]);
					return false;
				}
			}

		}

		//if(document.getElementById("erase_admin_grade").value != "S"){
		if(idiv == "update" && document.getElementById("erase_admin_seq").value==""){
		//if(idiv == "update" && frm.erase_admin_seq.value==""){
			if(document.getElementById("admin_pwd").value == ""){
			//if(frm.admin_pwd.value ==""){
				//alert(D.ERASER 연동을 위해 최초 1회 비밀번호 입력이 필요합니다.)
				alert(qq192[lang_code]);
				document.getElementById("admin_pwd").focus();
				return false;
			}
		}
	}
	
	//}	
	*/
	frm.submit();
	
}


function inputGroupCheck(frm) {
	
	
	var idiv = frm.mode.value;
	var processDiv = false;
	var chkPwd = false;
	if(idiv == 'insert') {
		
		//if(!confirm("신규등록하시겠습니까?")) {
		if(!confirm(qnewregister[lang_code])) {
			return false;
			processDiv = false;
		}
	} else if(idiv == 'update') {
		//alert("a");
		//alert(lang_code);
		
		//if(!confirm("수정하시겠습니까?")) {
		if(!confirm(qupdate[lang_code])) {
			return false;
			processDiv = false;
		}

	}
	if(idiv == "update") {
		if(frm.group_seq.value==""){
			//alert("수정할 그룹이 선택되지 않았습니다.");
			alert(qq176[lang_code]);
			return false;
		}
		
	}
	
	
	if(frm.group_name.value==""){
		//alert("그룹 이름을 입력하세요.");
		alert(qq177[lang_code]);
		frm.group_name.focus();
		return false;
	}
	
	
	
	frm.submit();
	
}

function inputCompanyCheck(frm) {
	
	
	var idiv = frm.mode.value;
	var processDiv = false;
	var chkPwd = false;
	if(idiv == 'insert') {
		
		//if(!confirm("신규등록하시겠습니까?")) {
		if(!confirm(qnewregister[lang_code])) {
			return false;
			processDiv = false;
		}
	} else if(idiv == 'update') {
		//alert("a");
		//alert(lang_code);
		
		//if(!confirm("수정하시겠습니까?")) {
		if(!confirm(qupdate[lang_code])) {
			return false;
			processDiv = false;
		}

	}
	if(idiv == "update") {
		if(frm.com_seq.value==""){
			//alert("수정할 그룹이 선택되지 않았습니다.");
			alert(qq187[lang_code]);
			return false;
		}
		
	}
	
	
	if(frm.com_name.value==""){
		//alert("그룹 이름을 입력하세요.");
		alert(qq177[lang_code]);
		frm.com_name.focus();
		return false;
	}
	
	
	
	frm.submit();
	
}

function inputAgreeCheck(frm) {
	
	
	var idiv = frm.mode.value;
	var processDiv = false;
	var chkPwd = false;
	var EN_CONTENT_SOLUTION = document.getElementById("EN_CONTENT_SOLUTION").value;

	EN_CONTENT_SOLUTION = EN_CONTENT_SOLUTION.replace('deleted', 'dddddddd');
	EN_CONTENT_SOLUTION = EN_CONTENT_SOLUTION.replace('deleted.', 'dddddddd.');
	

	document.getElementById("EN_CONTENT_SOLUTION").value = EN_CONTENT_SOLUTION;
	
	if(idiv == 'insert') {
		
		//if(!confirm("신규등록하시겠습니까?")) {
		if(!confirm(qnewregister[lang_code])) {
			return false;
			processDiv = false;
		}
	} else if(idiv == 'update') {
		//alert("a");
		//alert(lang_code);
		
		//if(!confirm("수정하시겠습니까?")) {
		if(!confirm(qupdate[lang_code])) {
			return false;
			processDiv = false;
		}

	}
	if(idiv == "update") {
		if(frm.AGREE_TEXT_SEQ.value==""){
			//alert("수정할 그룹이 선택되지 않았습니다.");
			alert(qq181[lang_code]);
			return false;
		}
		
	}
	
	
	frm.submit();
	
}

function checkPasswdValid(pwd, id) {
			if(pwd.length < 8) {
				//비밀번호는 최소 8자리 입니다.
				//"The password is at least 8 bytes"
				alert(qq158[lang_code]);
				return false;
			}
			
			var pattern = /((?=^.{8,20}$)((?=.*\d)(?=.*[A-Za-z])|(?=.*\d)(?=.*[^A-Za-z0-9])(?=.*[a-z])|(?=.*[^A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z])|(?=.*\d)(?=.*[A-Z])(?=.*[^A-Za-z0-9]))^.*)/;
			objRegExp =new RegExp(pattern);
			if(!pwd.match(objRegExp)) {
				//비밀번호를 영문 알파벳과 숫자로 조합하여 8자 이상으로 입력하여 주세요!
				//Password is available in English and at least one number  combination at least eight characters
				alert(qq159[lang_code]);
				return false;
			}
			
			if (-1 < pwd.indexOf(id)) {
				//alert("아이디가 포함된 비밀번호는 사용하실 수 없습니다!");
				//Containing the ID can not be used in passwords
				alert(qq160[lang_code]);
				return false;
			}

			return true;

}

function inputAddrCheck(frm) {
	
	
	if(document.getElementById("USER_NAME").value==""){
		//alert("이름을 입력하세요.");
		alert(qnameinput[lang_code]);
		document.getElementById("USER_NAME").focus();
		return false;
	}
		
	if(document.getElementById("EMAIL").value==""){
		//alert("메일을 입력하세요.");
		alert(qmailinput[lang_code]);
		document.getElementById("USER_NAME").focus();
		return false;
	}
	if(document.getElementById("HP").value==""){
		//alert("연락처를 입력하세요.");
		alert(qtelephoneinput[lang_code]);
		document.getElementById("HP").focus();
		return false;
	}
	if(document.getElementById("COMPANY_NAME").value==""){
		//alert("회사명을 입력하세요.");
		alert(qq131[lang_code]);
		document.getElementById("COMPANY_NAME").focus();
		return false;
	}
	if(document.getElementById("EMAIL_ADDRESS_SEQ").value == "") {
		//alert("신규등록합니다.");
		alert(qq132[lang_code]);
		document.getElementById("mode").value = "insert";
	} else {
		//alert("수정합니다.");
		alert(qq133[lang_code]);
		document.getElementById("mode").value = "update";
	}
	$.post(
			'./addrbook_save.php',
			{ 'EMAIL_ADDRESS_SEQ':document.getElementById("EMAIL_ADDRESS_SEQ").value,
				'USER_NAME':document.getElementById("USER_NAME").value,
				'EMAIL':document.getElementById("EMAIL").value,
				'HP':document.getElementById("HP").value,
				'COMPANY_NAME':document.getElementById("COMPANY_NAME").value,
				'COMMENTS':document.getElementById("COMMENTS").value,
				'mode':document.getElementById("mode").value
			 },
			function(data) {
				alert(data);
				location.reload(true);
			},
			'html'
		);
	
}

function updateAddr (frm, EMAIL_ADDRESS_SEQ) {
		$('#addrbookInfo').hide();
		$.post(
			'./addrbook_tab.php',
			{'EMAIL_ADDRESS_SEQ':EMAIL_ADDRESS_SEQ },
			function(data) {
				$('#addrbookInfo').html(data);
				$('#addrbookInfo').show('blind');
			},
			'html'
		);
		
}

function deleteAddr (EMAIL_ADDRESS_SEQ) {
		//if(confirm("삭제하면 복구할 수 없습니다. 삭제하시겠습니까?")) {
		if(confirm(qq134[lang_code])) {
			$.post(
				'./addrbook_delete.php',
				{'EMAIL_ADDRESS_SEQ':EMAIL_ADDRESS_SEQ },
				function(data) {
					if(data == 1) {
						//alert("삭제되었습니다.");
						alert(qq135[lang_code]);
						location.href = "./addrbook.php";
					} else if (data == 0) {
						//alert("삭제하지 못했습니다.");
						alert(qq136[lang_code]);
						location.href = "./addrbook.php";
					}
				},
				'text'
			);
		}
		
}

function cancelAddr(frm) {
	document.getElementById("mode").value = "insert";
	document.getElementById("EMAIL_ADDRESS_SEQ").value = "";
	document.getElementById("USER_NAME").value = "";
	document.getElementById("EMAIL").value = "";
	document.getElementById("HP").value = "";
	document.getElementById("COMPANY_NAME").value = "";
	document.getElementById("COMMENTS").value = "";
}

//function updateAdmin (frm, admin_seq, admin_id,  admin_name, email, hp, mail_header, comments) {
function updateAdmin (frm, admin_seq) {
	
	frm.admin_seq.value = admin_seq;
	frm.submit();

	//location.href="admin_add.php?admin_seq=" + admin_seq;		
}

function mailtab(MAIL_LOG_SEQ, page, dpt_id, dpt_name) {

		
		//$('#mailTab').hide();
		/*
		var html_str ="	<br/><br/><table class='sub3_table'>" ;
			html_str +=	"<tr>	<th class='no_line'>파일이름</th><th>HTML Export</th><th>Size</th><th>Type</th>	<th>시그너쳐</th><th>File ID</th><th>내용분석</th><th>Date Modified</th><th>Date Created</th></tr>";
			html_str +=	"<tr><td colspan='10'>&nbsp;</td></tr>";
			html_str +=  "<tr><td align='center' colspan='10'>...... 내역을 불러오고 있습니다 ......</td></tr>";
			html_str +=  "<tr><td colspan='10'>&nbsp;</td></tr></table>";

		$('#mailTab').html(html_str);
		*/
		$.post(
			'./mail_tab.php',
			{'MAIL_LOG_SEQ':MAIL_LOG_SEQ, 
			 'page':page, 
			 'm_dpt_id':dpt_id, 
			 'm_dpt_name':dpt_name },
			function(data) {
				//$('#mailTab').hide();
				$('#mailTab').html(data);
				$('#mailTab').show('blind');
			},
			'html'
		);
		
}

function deleteAdmin(admin_id) {

	 //if(confirm("삭제 하시겠습니까?")) {
	 if(confirm(qq137[lang_code])) {
		
	
		location.href="admin_save.php?admin_id="+admin_id+"&mode=delete";
	 }
				
}

function deleteGroup(group_seq) {

	 //if(confirm("삭제 하시겠습니까?")) {
	 if(confirm(qq175[lang_code])) {
		location.href="process_group.php?group_seq="+group_seq+"&mode=delete";
	 }
				
}



function deleteCompany(com_seq, method) {

	 //if(confirm("삭제 하시겠습니까?")) {
	 if(confirm(qq175[lang_code])) {
		if(method == "TOTAL") {
			location.href="process_company.php?com_seq="+com_seq+"&mode=totaldelete";
		} else {
			location.href="process_company.php?com_seq="+com_seq+"&mode=delete";
		}
	 }
				
}




function deleteAgreeTextConfig(AGREE_TEXT_SEQ) {

	 //if(confirm("삭제 하시겠습니까?")) {
	 if(confirm(qq175[lang_code])) {
		location.href="process_agree_config.php?AGREE_TEXT_SEQ="+AGREE_TEXT_SEQ+"&mode=delete";
	 }
				
}




function cancelAdmin(frm) {
	
	$(frm).find("input").val("");
	$(frm).find("input[type='checkbox']").prop("checked",false);
	$(frm).find("input[type='radio']").prop("checked",false);
	$(frm).find("select[name='add_mail_use_yn[]']").val('N');

	frm.mode.value = "insert";
	
}

function logout_frm() {
	location.href="/dpt/logout.php";
}

function inputCheck(frm){
	var id, passwd,redirect;
	
	id = document.getElementById("id").value;
	passwd = document.getElementById("passwd").value;

	redirect = $("#redirect").val();

	//if(frm.id.value==""){
	if(id == "") {
		//alert("아이디를 입력하세요.");
		alert(qq138[lang_code]);
		document.getElementById("id").focus();
		//frm.id.focus();
		return false;
	}
	//if(frm.passwd.value==""){
		if(passwd == "") {
		//alert("비밀번호를 입력하세요.");
		alert(qq139[lang_code]);
		//frm.passwd.focus();
		document.getElementById("passwd").focus();
		return false;
	}

	//frm.submit();
	$.post(
				'./logincheck_new.php',
				{ 'id': id,
				  'passwd': passwd,
				  'redirect' : redirect
				 },
				function(data) {
					if(data == "1" || data == "sms_comm_ok") {
						document.location.href=SITE_NAME;
						return true;
					} else if(data == "5") {
						//document.location.href="login_otp.php?id=" + id;
						window.open("login_otp.php?id="+id, "LOGIN", "top=10px, left=100px, height=600px, width=800px, scrollbars=yes");	
	
						return true;
					} else if (data == "8") {
						//아이디가 존재하지 않습니다.
						alert(qq204[lang_code]); 
						return false;
					} else if (data == "9") {
						//비밀번호가 일치하지 않습니다.
						alert(qq204[lang_code]); 
						document.getElementById("passwd").focus();
						return false;
					} else if(data == "10") { //비밀번호 변경 화면으로 이동
//						window.open("login_change_pwd.php?id="+id, "LOGIN", "top=10px, left=100px, height=400px, width=650px, scrollbars=no");
						window.open("login_change_pwd.php", "LOGIN", "top=10px, left=100px, height=400px, width=650px, scrollbars=no");
						
						return true;
					} else if(data.substr(0,3)=="100"){
						var login_attempt_limit_cnt = data.substr(4);
						//로그인 시도 가능횟수를 초과하였습니다. 관리자에게 문의해 주세요.
						alert(qq205[lang_code].replace('#',login_attempt_limit_cnt)); 
						return false;
					} else if(data.substr(0,3)=="200"){	//로그인후 리다렉트 url로 이동
						var redirect_url = data.substr(4);
						document.location.href = redirect_url;
						return true;
					}else if(data.substr(0,3)=="300"){	//웹매니저 접속 포트로 로그인하도록 유도
						alert(qq235[lang_code]);	//올바른 경로가 아닙니다. 다시 접속해 주세요.
						var redirect_url = data.substr(4);
						document.location.href = redirect_url;
						return true;
					} else {
						alert(data);
						return false;
					}
				},
				'text'
			);

	//document.getElementById("frmS").submit();
	return true;
}

function passwdChangeFrom(id) {
	
	if(id != "") {
//		window.open("login_change_pwd.php?id="+id+"&gubun=pwdC", "LOGIN", "top=10px, left=100px, height=400px, width=650px, scrollbars=no");
		window.open(SITE_NAME+"/login_change_pwd.php?gubun=pwdC", "LOGIN", "top=10px, left=100px, height=400px, width=650px, scrollbars=no");
	}
}

function inputCheck_otp(frm){
	var id, otp_code;
	id = document.getElementById("id").value;
	otp_code = document.getElementById("otp_code").value;

	//alert(id);
	//alert(otp_code);
	//if(frm.id.value==""){
	if(id == "") {
		//alert("아이디를 입력하세요.");
		alert(qq138[lang_code]);
		document.getElementById("id").focus();
		//frm.id.focus();
		return false;
	}
	//if(frm.passwd.value==""){
    if(otp_code == "") {
		//alert("OTP_CODE를 입력하세요.");
		alert(qq195[lang_code]);
		//frm.passwd.focus();
		document.getElementById("otp_code").focus();
		return false;
	}
	//frm.submit();
	$.post(
				'./logincheck_otp.php',
				{ 'id':id,'otp_code':otp_code
				 },
				function(data) {
					//alert(data);
					if(data == "1") {	//로그인성공
						opener.location.href="/dpt/";
						self.close();
						return true;
					} else if(data == "8") {	//아이디불일치
						alert(qq138[lang_code]);
						return false;
					} else if(data == "9") {	//비밀번호불일치
						alert(qq196[lang_code]);
						return false;
					} else if(data == "10") {	//비밀번호 변경 화면으로 이동
						window.open("login_change_pwd.php", "LOGIN", "top=10px, left=100px, height=400px, width=650px, scrollbars=no");
						return false;
					} else if(data.substr(0,3)=="100"){
						var login_attempt_limit_cnt = data.substr(4);
						//로그인 시도 가능횟수를 초과하였습니다. 관리자에게 문의해 주세요.
						alert(qq205[lang_code].replace('#',login_attempt_limit_cnt)); 
						return false;
					} else if(data.substr(0,3)=="200"){
						var redirect_url = data.substr(4);
						document.location.href = redirect_url;
						return true;
					} else {
						
						alert(data);
						//alert("Failed !!");
						return false;
					}
				},
				'text'
			);

	//document.getElementById("frmS").submit();
	return true;
}


function loadingBox(sec) {

	document.all["loadbox"].style.display = "";

	setTimeout("document.loadbox.style.display=none", 1000*sec);

	//var loadBox = "<div width='500' height='300' style='background-color:#dddddd'><span align='center'>로딩 중입니다. 잠시만 기다려 주세요.</span></div>";

}

function editUserMail(user_key, org_email) {
	
	var new_email = document.getElementById("email").value;
	
	if(new_email == "") {
		//alert("메일 주소가 올바르게 입력되지 않았습니다.");
		alert(qq140[lang_code]);
		return false;
	}

	if(new_email == org_email) {
		//alert("새로운 메일과 기존 메일이 동일합니다.");
		alert(qq141[lang_code]);
		return false;
	}

	$.post(
				SITE_NAME+'/process_user_mail.php',
				{ 'user_key':user_key,'org_email':org_email,'new_email':new_email
				 },
				function(data) {
					alert(data);
					document.location.href="?user_key="+user_key+"&email="+new_email;
				},
				'text'
			);

}

function editUserMail2(user_key, org_email) {
	
	var new_email = document.getElementById("email").value;
	
	if(new_email == "") {
		//alert("메일 주소가 올바르게 입력되지 않았습니다.");
		alert(qq140[lang_code]);
		return false;
	}

	if(new_email == org_email) {
		//alert("새로운 메일과 기존 메일이 동일합니다.");
		alert(qq141[lang_code]);
		return false;
	}

	$.post(
				SITE_NAME+'/process_user_mail.php',
				{ 'user_key':user_key,'org_email':org_email,'new_email':new_email
				 },
				function(data) {
					alert(data);
				},
				'text'
			);

}

function isNumber(n) {
	//n = n.replace(/,/gi, "");
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function updateExceptUser(div){
	
	var EXCEPTION_USER_SEQ = document.getElementById("EXCEPTION_USER_SEQ").value;
	var EXCEPTION_INOUT_SEQ = document.getElementById("EXCEPTION_INOUT_SEQ").value;
	var NAME = document.getElementById("NAME").value;
	var COMPANY = document.getElementById("COMPANY").value;
	var BIRTH = document.getElementById("BIRTH").value;
	var PHONE = document.getElementById("PHONE").value;
	var MEMO = document.getElementById("MEMO").value;
	//alert(div);
	
	if(EXCEPTION_USER_SEQ == "" && div == "EDIT"){
		alert(qq113[lang_code]);
		return false;
	}else if(NAME == ""){
		alert(qq142[lang_code]);
		return false;
	}else if(COMPANY == ""){
		alert(qq131[lang_code]);
		return false;
	}else if(BIRTH == ""){
		alert(qq166[lang_code]);
		return false;
	}else if(PHONE == ""){
		alert(qtelephoneinput[lang_code]);
		return false;
	}else if(BIRTH.length != 10 ){
		alert(qq167[lang_code]);
		return false;
	}
	
	$.post(
			'./process_except_check.php',
			{ 'div':div
				,'EXCEPTION_INOUT_SEQ':EXCEPTION_INOUT_SEQ
				,'NAME':NAME
				,'COMPANY':COMPANY
				,'BIRTH':BIRTH
				,'PHONE':PHONE
				,'MEMO':MEMO
			 },
			function(data) {
				alert(data);
				if(div == "REG") {
					location.href="./except_drivelist.php";
				} else {
					location.reload(true);
				}
				//document.location.href="?EXCEPTION_USER_SEQ="+EXCEPTION_USER_SEQ+"&EXCEPTION_INOUT_SEQ="+EXCEPTION_INOUT_SEQ;
			},
			'text'
		);
}

function checkinFrm(div) {
	
	var SERIAL_NUM, EXCEPTION_INOUT_SEQ, EXCEPTION_USER_SEQ, DRIVE1_IN, DRIVE2_IN, DRIVE3_IN, DRIVE4_IN, DRIVE5_IN, DRIVE6_IN, INOUT_MEMO;

	var SERIAL_NUM_IN, SERIAL_NUM_OUT, DRIVE1_OUT, DRIVE2_OUT, DRIVE3_OUT, DRIVE4_OUT, DRIVE5_OUT, DRIVE6_OUT, VISIT_START, VISIT_END, COMPANY, PHONE, DEVICE_TYPE;
	
	
	EXCEPTION_INOUT_SEQ = document.getElementById("EXCEPTION_INOUT_SEQ").value;
	EXCEPTION_USER_SEQ = document.getElementById("EXCEPTION_USER_SEQ").value;

	if(EXCEPTION_INOUT_SEQ == "") {
		if(div != "checkinadmin") {
			alert(qq104[lang_code]);
			return false;
		}
	}
	
	if(div == "checkin") { //반입승인일 경우
		
		SERIAL_NUM = document.getElementById("SERIAL_NUM").value;
		DRIVE1_IN = document.getElementById("DRIVE1_IN").value;
		DRIVE2_IN = document.getElementById("DRIVE2_IN").value;
		DRIVE3_IN = document.getElementById("DRIVE3_IN").value;
		DRIVE4_IN = document.getElementById("DRIVE4_IN").value;
		DRIVE5_IN = document.getElementById("DRIVE5_IN").value;
		DRIVE6_IN = document.getElementById("DRIVE6_IN").value;
		INOUT_MEMO = document.getElementById("IN_MEMO").value;

		

		if(SERIAL_NUM == "") {
			
			alert('Input Searial Number');
			return false;
		}

		$.post(
				'./process_except_check.php',
				{ 'div':div,'EXCEPTION_INOUT_SEQ':EXCEPTION_INOUT_SEQ
					,'SERIAL_NUM':SERIAL_NUM,'DRIVE1_IN':DRIVE1_IN,'DRIVE2_IN':DRIVE2_IN,'DRIVE3_IN':DRIVE3_IN,'DRIVE4_IN':DRIVE4_IN
					,'DRIVE5_IN':DRIVE5_IN,'DRIVE6_IN':DRIVE6_IN, 'INOUT_MEMO': INOUT_MEMO
					,'DRIVE5_IN':DRIVE5_IN,'DRIVE6_IN':DRIVE6_IN
				 },
				function(data) {
					alert(data);
					location.reload(true);
					//document.location.href="?EXCEPTION_USER_SEQ="+EXCEPTION_USER_SEQ+"&EXCEPTION_INOUT_SEQ="+EXCEPTION_INOUT_SEQ;
				},
				'text'
			);
	} else if(div == "checkinadmin") { //반입승인일 경우
		
		
		SERIAL_NUM = document.getElementById("SERIAL_NUM").value;
		DRIVE1_IN = document.getElementById("DRIVE1_IN").value;
		DRIVE2_IN = document.getElementById("DRIVE2_IN").value;
		DRIVE3_IN = document.getElementById("DRIVE3_IN").value;
		DRIVE4_IN = document.getElementById("DRIVE4_IN").value;
		DRIVE5_IN = document.getElementById("DRIVE5_IN").value;
		DRIVE6_IN = document.getElementById("DRIVE6_IN").value;
		INOUT_MEMO = document.getElementById("IN_MEMO").value;
		INOUT_MEMO = document.getElementById("IN_MEMO").value;

		DEVICE_TYPE = document.getElementById("DEVICE_TYPE").value;
		
		
		VISIT_START = document.getElementById("VISIT_START").value;
		
		VISIT_END = document.getElementById("VISIT_END").value;
		
		
		PHONE = document.getElementById("PHONE").value;
		
		COMPANY = document.getElementById("COMPANY").value;
		
		

		if(SERIAL_NUM == "") {
			
			alert("Input Searial Number");
			return false;
		}

		

		$.post(
				'./process_except_check.php',
				{ 'div':div,'EXCEPTION_INOUT_SEQ':EXCEPTION_INOUT_SEQ,'EXCEPTION_USER_SEQ':EXCEPTION_USER_SEQ
					,'SERIAL_NUM':SERIAL_NUM,'DRIVE1_IN':DRIVE1_IN,'DRIVE2_IN':DRIVE2_IN,'DRIVE3_IN':DRIVE3_IN,'DRIVE4_IN':DRIVE4_IN,'DRIVE5_IN':DRIVE5_IN,'DRIVE6_IN':DRIVE6_IN
					, 'INOUT_MEMO': INOUT_MEMO, 'VISIT_START': VISIT_START, 'VISIT_END': VISIT_END
					, 'COMPANY': COMPANY, 'PHONE': PHONE, 'DEVICE_TYPE': DEVICE_TYPE
				 },
				function(data) {
					alert(data);
					if(div != "checkinadmin") {
						location.reload(true);
					} else {
						location.href="./except_drivelist.php";
					}
					//document.location.href="?EXCEPTION_USER_SEQ="+EXCEPTION_USER_SEQ+"&EXCEPTION_INOUT_SEQ="+EXCEPTION_INOUT_SEQ;
				},
				'text'
			);

	} else if ( div == "checkout") { //반출일 경우
		//SERIAL_NUM_IN, SERIAL_NUM_OUT, DRIVE1_OUT, DRIVE2_OUT, DRIVE3_OUT, DRIVE4_OUT, DRIVE5_OUT, DRIVE6_OUT
	
		// onClick="javascript:checkinFrm('checkin');"
		SERIAL_NUM_IN = document.getElementById("SERIAL_NUM_IN").value;
		SERIAL_NUM_OUT = document.getElementById("SERIAL_NUM_OUT").value;
		DRIVE1_OUT = document.getElementById("DRIVE1_OUT").value;
		DRIVE2_OUT = document.getElementById("DRIVE2_OUT").value;
		DRIVE3_OUT = document.getElementById("DRIVE3_OUT").value;
		DRIVE4_OUT = document.getElementById("DRIVE4_OUT").value;
		DRIVE5_OUT = document.getElementById("DRIVE5_OUT").value;
		DRIVE6_OUT = document.getElementById("DRIVE6_OUT").value;
		INOUT_MEMO = document.getElementById("OUT_MEMO").value;

		if(SERIAL_NUM_OUT == "") {
			alert('Input Searial Number');
			return false;
		}

		if(SERIAL_NUM_IN != SERIAL_NUM_OUT) {
			alert('The serial number does not match.');
			return false;
		}

		$.post(
				'./process_except_check.php',
				{ 'div':div,'EXCEPTION_INOUT_SEQ':EXCEPTION_INOUT_SEQ,'DRIVE1_OUT':DRIVE1_OUT,'DRIVE2_OUT':DRIVE2_OUT,'DRIVE3_OUT':DRIVE3_OUT,'DRIVE4_OUT':DRIVE4_OUT,'DRIVE5_OUT':DRIVE5_OUT,'DRIVE6_OUT':DRIVE6_OUT, 'INOUT_MEMO':INOUT_MEMO
				 },
				function(data) {
					alert(data);
					location.reload(true);
					//document.location.href="?EXCEPTION_USER_SEQ="+EXCEPTION_USER_SEQ+"&EXCEPTION_INOUT_SEQ="+EXCEPTION_INOUT_SEQ;
				},
				'text'
			);

	} else if(div == "print") {
		//alert("except_print_form.php");
		window.open("except_print_form.php?EXCEPTION_INOUT_SEQ="+EXCEPTION_INOUT_SEQ+"&EXCEPTION_USER_SEQ="+EXCEPTION_USER_SEQ, "PRINT", "top=10px, left=100px, height=1000px, width=900px, scrollbars=yes");	
	}

}

function deleteAgree(user_key, email) {

	/*
	* 함수 호출 페이지 (각 페이지에 호출 파라메타값이 다르므로 작업완료후 rload 처리!!)
	 - user_center.php
	 - inout_memo.php
	*/
	
	var new_email = email;
	var user_info_list_seq = $("#user_info_list_seq").val();

	if(new_email == "") {
		//alert("메일 주소가 올바르게 입력되지 않았습니다.");
		alert(qq140[lang_code]);
		return false;
	}

	$.post(
				'./process_user_agree.php',
				{ 'user_key':user_key, 'email' : new_email , 'user_info_list_seq' : user_info_list_seq
				 },
				function(data) {
					alert(data);
					//document.location.href="?user_key="+user_key+"&email="+new_email;
					document.location.reload(true);
				},
				'text'
			);

}


function editUserInfo(user_key, org_email) {
	
	//user_name, company_name, manager_name, manager_dept, etc_memo
	var user_name = document.getElementById("user_name").value;
	var company_name = document.getElementById("company_name").value;
	var manager_name = document.getElementById("manager_name").value;
	var manager_dept = document.getElementById("manager_dept").value;
	var manager_company = document.getElementById("manager_company").value;
	var etc_memo = document.getElementById("etc_memo").value;
	var passwd = document.getElementById("passwd").value;
	var phone = document.getElementById("phone").value;
	var user_type = document.getElementById("user_type").value;
	var user_inout_mailing_yn = $("#user_inout_mailing_yn").val();

	
	if( document.getElementById("update_type").checked == "1") {
		update_type = "Y";
	} else {
		update_type = "N";
	}
	

	if(user_type == "2") {
		if(user_name == "") {
			//alert("사용자이름이 항목값이 올바르게 입력되지 않았습니다. 확인 바랍니다.");
			alert(qq142[lang_code]);
			return false;
		}
	} else {
		if(user_name == "") {
			//alert("사용자이름이 항목값이 올바르게 입력되지 않았습니다. 확인 바랍니다.");
			alert(qq142[lang_code]);
			return false;
		}
	}
	
	//alert(user_name + '///' + company_name +'///' + manager_name +'///' + manager_dept + '///' + manager_company + '///' +etc_memo);
	$.post(
				'./process_user_info.php',
				{ 'user_key':user_key, 'org_mail':org_email, 'user_name':user_name
					, 'company_name':company_name, 'manager_name':manager_name
					, 'manager_dept':manager_dept, 'manager_company':manager_company
					, 'etc_memo':etc_memo, 'phone':phone
					, 'update_type':update_type 
					, 'user_inout_mailing_yn' : user_inout_mailing_yn
				 },
				function(data) {
					alert(data);
					location.reload(true);
				},
				'text'
			);
}

function editPasswd(user_key, org_email) {
	//user_name, company_name, manager_name, manager_dept, etc_memo
	var passwd = document.getElementById("passwd").value;
	
	if(document.getElementById("chkPwd").checked) {
		if(passwd == "") {
			//alert("비밀번호가 올바르게 입력되지 않았습니다. 확인 바랍니다.");
			alert(qq143[lang_code]);
			return false;
		}
	}else{
		//alert("비밀번호 변경을 먼저 체크하세요.");
		alert(qq144[lang_code]);
		return false;
	}

	//alert(user_key + '///' + org_email +'///' + passwd);

	$.post(
				SITE_NAME+'/process_user_pwd.php',
				{ 'user_key':user_key, 'org_mail':org_email, 'passwd':passwd
				 },
				function(data) {
					alert(data);
					location.reload(true);
				},
				'text'
			);
}

function editABU(user_key, email) {
	//user_name, company_name, manager_name, manager_dept, etc_memo
	var startdate = document.frmUser.startdate.value;
	var enddate = document.frmUser.enddate.value;
	var ap = 0;
	var bl = 0;
	var usb = 0;
	var usb_readonly = 0;

	var CDROM = "0";
	var IEEE1394 = "0";
	var WEBCAM = "0";
	var SDCARD = "0";
	var LAN = "0";
	var FDD = "0";
	var SERIALPORT = "0";
	var NETDRIVE = "0";
	var SCREEN_LOCK = "0";
	var CHECK_VOLUME_CHANGE = "0";
	var WPD = "1";
	var VOLUME_UNMOUNT = "0";
	var CDROM_READ_ONLY = "0";
	var ABU_MODIFY_REASON;
	

	if(startdate == "" || enddate == "") {
		//alert('기간을 지정해 주세요.');
		alert(qq145[lang_code]);
		return false;
	}
	//alert(document.getElementById("A"));
	//if(document.getElementById("A").checked) {
	//	ap = 1;
	//}

	ap = document.getElementById("A").value;

	if(document.getElementById("B").checked) {
		bl = 1;
	}

/*
	if(document.getElementById("U").checked) {
		usb = 1;
	}
*/
	usb = document.getElementById("U").value;


	SDCARD = document.getElementById("SDCARD").value;

	if(document.getElementById("USB_READ_ONLY").checked) {
		usb_readonly = 1;
	}

/*
	if(document.getElementById("CDROM").checked) {
		CDROM = 1;
	}
*/
	CDROM = document.getElementById("CDROM").value;

	if(document.getElementById("IEEE1394").checked) {
		IEEE1394 = 1;
	}
	if(document.getElementById("WEBCAM").checked) {
		WEBCAM = 1;
	}
	
	if(document.getElementById("LAN").checked) {
		LAN = 1;
	}
	if(document.getElementById("FDD").checked) {
		FDD = 1;
	}
	if(document.getElementById("SERIALPORT").checked) {
		SERIALPORT = 1;
	}
	if(document.getElementById("NETDRIVE").checked) {
		NETDRIVE = 1;
	}
	if(document.getElementById("SCREEN_LOCK").checked) {
		SCREEN_LOCK = 1;
	}
	if(document.getElementById("CHECK_VOLUME_CHANGE").checked) {
		CHECK_VOLUME_CHANGE = 1;
	}
	
	if(document.getElementById("VOLUME_UNMOUNT").checked) {
		VOLUME_UNMOUNT = 1;
	}

	if(document.getElementById("CDROM_READ_ONLY").checked) {
		CDROM_READ_ONLY = 1;
	}

	
	ABU_MODIFY_REASON = document.getElementById("ABU_MODIFY_REASON").value;

	
	$.post(
				'./process_user_abu.php',
				{ 
					'user_key':user_key, 
					'email':email, 
					'startdate':startdate,
					'enddate':enddate,
					'ap':ap,
					'usb_readonly':usb_readonly,
					'bl':bl,
					'usb':usb
					, 'CDROM': CDROM, 'IEEE1394': IEEE1394, 'WEBCAM': WEBCAM
				    , 'SDCARD': SDCARD, 'LAN': LAN, 'FDD': FDD
				    , 'SERIALPORT': SERIALPORT, 'NETDRIVE': NETDRIVE, 'SCREEN_LOCK': SCREEN_LOCK
					, 'CHECK_VOLUME_CHANGE': CHECK_VOLUME_CHANGE, 'WPD': WPD, 'VOLUME_UNMOUNT': VOLUME_UNMOUNT
				    , 'CDROM_READ_ONLY': CDROM_READ_ONLY, 'ABU_MODIFY_REASON': ABU_MODIFY_REASON
				 },
				function(data) {
					alert(data);
					location.reload(true);
				},
				'text'
			);
}

function editCompanyABU() {
	frm.submit();
}

function editReject(user_key, email) {
	
	var REJECT_ADMIN_MENO = document.frmUser.REJECT_ADMIN_MENO.value;
	var REJECT_SEQ = document.frmUser.REJECT_SEQ.value;
	
	if(REJECT_SEQ == "") {
		//alert("먼저 반입 불가 사유를 선택해 주세요.");
		alert(qq146[lang_code]);
		return;
	}

	var REJECT_FLAG = 0;
	
	if(document.getElementById("REJECT_FLAG").checked) {
		REJECT_FLAG = 1;
	} else {
		REJECT_FLAG = 0;
	}
	
	$.post(
				'./process_user_reject.php',
				{ 
					'user_key':user_key, 
					'email':email, 
					'REJECT_SEQ':REJECT_SEQ,
					'REJECT_FLAG':REJECT_FLAG,
					'REJECT_ADMIN_MENO':REJECT_ADMIN_MENO
				 },
				function(data) {
					alert(data);
					location.reload(true);
				},
				'text'
			);

}

function editRejectClear(user_key, email) {
	
	
	
	$.post(
				'./process_user_reject_clear.php',
				{ 
					'user_key':user_key, 
					'email':email
				 },
				function(data) {
					alert(data);
					location.reload(true);
				},
				'text'
			);

}

function openJudgement(file_seq, judge) {
	if(judge != "") {
		window.open(SITE_NAME+"/fake_file_judge.php?change_file_seq="+ file_seq + "&judge=" + judge, "JUDGE", "top=10px, left=100px, height=400px, width=541px");	
	} else {
		alert(qq165[lang_code]);
	}
}


function setJudgement(frmJ) {
	
		var judge_seq, chagne_file_seq, judge, memo;
		
		judge_seq = frmJ.judge_seq.value;
		change_file_seq = frmJ.change_file_seq.value;
		judge = frmJ.judge.value;
		memo = frmJ.memo.value;
		

		$.post(
					'./process_fake_judge.php',
					{ 'judge_seq':judge_seq, 'change_file_seq':change_file_seq, 'judge':judge, 'memo':memo
					 },
					function(data) {
						//$("#dix"+inoutSeq).append("<tr><td colspan='4'>"+data+"</td></tr>");
						alert(data);
						self.close();
					},
					'text'
				);
}

//파일 필터링 추가
function addFileFilter(proc, filter_seq, color, condition, value, use_flag) {

	var alert_str, change_use="";
	
	if(value == "" && filter_seq =="") {
		//alert("파일 정보가 없습니다.");
		alert(qq147[lang_code]);
		return false;
	}

	if(proc == "") {
		if(filter_seq == "") {
			proc = "REG";
		}else{
			proc = "EDIT";
		}
	}

	if(proc =="REG" || proc == "EDIT") {
		if(filter_seq == "") {
			proc = "REG";
			//alert_str = "등록";
			alert_str = qq109[lang_code];
		}else{
			proc = "EDIT";
			//alert_str = "수정";
			alert_str = qq110[lang_code];
		}
	}else if(proc == "DEL"){
		//alert_str = "삭제";
		alert_str = qq111[lang_code];
	}else{
		//alert_str = "사용변경";
		alert_str = qq148[lang_code];
	}

	

	//if(confirm("블랙 리스트에 ("+ value + ')' +alert_str+" 하시겠습니까?")) {
	if(confirm("("+ value + ')' +alert_str+" " + qq150[lang_code])) {
		$.post(
					'./process_file_filter.php',
					{ 'proc':proc, 'filter_seq':filter_seq, 'color':color, 'condition' : condition, 'value': value, 'use_flag': use_flag, 'change_use':change_use
					 },
					function(data) {
						//$("#dix"+inoutSeq).append("<tr><td colspan='4'>"+data+"</td></tr>");
						alert(data);
						location.reload(true);
					},
					'text'
				);
	}
}


//파일 필터링
function processFilter(proc, del_seq, change_use) {

	var filter_seq, alert_str;
	
	if(del_seq == "") {
		filter_seq = document.getElementById("filter_seq").value;
	}else{
		filter_seq = del_seq;
	}

	var color = document.getElementById("color").value;
	var condition = document.getElementById("condition").value;
	var value = document.getElementById("value").value;
	var use_flag = document.getElementById("use_flag").value;
	var file_size = document.getElementById("file_size").value;
	if(file_size == "") {
		file_size = 0;
	}

	if(value == "" && filter_seq =="") {
		//alert("파일 필터링 정보가 없습니다.");
		alert(qq151[lang_code]);
		return false;
	}

	if(proc == "") {
		if(filter_seq == "") {
			proc = "REG";
		}else{
			proc = "EDIT";
		}
	}

	if(proc =="REG" || proc == "EDIT") {
		if(filter_seq == "") {
			proc = "REG";
			//alert_str = "등록";
			alert_str = qq109[lang_code];
		} else {
			proc = "EDIT";
			//alert_str = "수정";
			alert_str = qq110[lang_code];
		}
		
	}else if(proc == "DEL"){
		//alert_str = "삭제";
		alert_str = qq111[lang_code];
	}else{
		//alert_str = "사용변경";
		alert_str = qq148[lang_code];
	}


	//if(confirm("파일 필터링 정보를 "+alert_str+" 하시겠습니까?")) {
	if(confirm(""+alert_str+" " + qq150[lang_code])) {
		$.post(
					'./process_file_filter.php',
					{ 'proc':proc, 'filter_seq':filter_seq, 'color':color, 'condition' : condition, 'value': value, 'use_flag': use_flag, 'change_use':change_use, 'file_size':file_size
					 },
					function(data) {
						//$("#dix"+inoutSeq).append("<tr><td colspan='4'>"+data+"</td></tr>");
						alert(data);
						location.reload(true);
						//location.href="./admin_file_filter.php";
					},
					'text'
				);
	}
}

//VAC_PROCESS
function processVaccine(proc, del_seq, change_use) {

	var VAC_SEQ, alert_str;
	
	if(del_seq == "") {
		VAC_SEQ = document.getElementById("VAC_SEQ").value;
	}else{
		VAC_SEQ = del_seq;
	}

	
	var VAC_NAME = document.getElementById("VAC_NAME").value;
	var VERSION = document.getElementById("VERSION").value;
	var USE_YN = document.getElementById("S_USE_YN").value;
	var IMPORTANCE = document.getElementById("IMPORTANCE").value;
	var PROCESS_NAME = document.getElementById("PROCESS_NAME").value;

	var MEMO = document.getElementById("MEMO").value;
	var TILE = document.getElementById("TILE").value;

	var LINK = document.getElementById("LINK").value;
	var MEMO_KR = document.getElementById("MEMO_KR").value;
	var MEMO_EN = document.getElementById("MEMO_EN").value;
	var MEMO_CN = document.getElementById("MEMO_CN").value;


	
	

	/*
	if(VAC_SEQ =="") {
		//alert("파일 필터링 정보가 없습니다.");
		alert("Failed. Missing Data!!");
		return false;
	}
	*/
	if(proc == "") {
		if(VAC_SEQ == "") {
			proc = "REG";
		}else{
			proc = "EDIT";
		}
	}

	if(proc =="REG" || proc == "EDIT") {
		if(VAC_SEQ == "") {
			proc = "REG";
			//alert_str = "등록";
			alert_str = qq109[lang_code];
		} else {
			proc = "EDIT";
			//alert_str = "수정";
			alert_str = qq110[lang_code];
		}
		
	}else if(proc == "DEL"){
		//alert_str = "삭제";
		alert_str = qq111[lang_code];
	}else{
		//alert_str = "사용변경";
		alert_str = qq148[lang_code];
	}

	
	//if(confirm("파일 필터링 정보를 "+alert_str+" 하시겠습니까?")) {
	if(confirm(""+alert_str+" " + qq150[lang_code])) {
		$.post(
					'./process_vaccine.php',
					{ 'proc':proc
						, 'VAC_SEQ':VAC_SEQ
						, 'VAC_NAME':VAC_NAME
						, 'VERSION' : VERSION
						, 'USE_YN': USE_YN
						, 'IMPORTANCE': IMPORTANCE
						, 'PROCESS_NAME':PROCESS_NAME
						, 'MEMO':MEMO
						, 'LINK':LINK
						, 'MEMO_KR':MEMO_KR
						, 'MEMO_EN':MEMO_EN
						, 'MEMO_CN':MEMO_CN
						, 'TILE':TILE
					 },
					function(data) {
						//$("#dix"+inoutSeq).append("<tr><td colspan='4'>"+data+"</td></tr>");
						alert(data);
						location.reload();
					},
					'text'
				);
	}
}

//add Email
function processAddEmail(proc) {

	var MANAGER_NAME1 = document.getElementById("MANAGER_NAME1").value;
	var MANAGER_EMAIL1 = document.getElementById("MANAGER_EMAIL1").value;
	var USE_YN1 = document.getElementById("USE_YN1").value;

	var MANAGER_NAME2 = document.getElementById("MANAGER_NAME2").value;
	var MANAGER_EMAIL2 = document.getElementById("MANAGER_EMAIL2").value;
	var USE_YN2 = document.getElementById("USE_YN2").value;

	var MANAGER_NAME3 = document.getElementById("MANAGER_NAME3").value;
	var MANAGER_EMAIL3 = document.getElementById("MANAGER_EMAIL3").value;
	var USE_YN3 = document.getElementById("USE_YN3").value;
	
	
	$.post(
				'./process_add_mail.php',
				{ 'proc':proc
					, 'MANAGER_NAME1':MANAGER_NAME1
					, 'MANAGER_EMAIL1':MANAGER_EMAIL1
					, 'USE_YN1':USE_YN1
					, 'MANAGER_NAME2':MANAGER_NAME2
					, 'MANAGER_EMAIL2':MANAGER_EMAIL2
					, 'USE_YN2':USE_YN2
					, 'MANAGER_NAME3':MANAGER_NAME3
					, 'MANAGER_EMAIL3':MANAGER_EMAIL3
					, 'USE_YN3':USE_YN3
				 },
				function(data) {
					//$("#dix"+inoutSeq).append("<tr><td colspan='4'>"+data+"</td></tr>");
					alert(data);
					location.reload();
				},
				'text'
			);
	
}

// 시그너쳐 맵핑 처리
function processSignature(proc, file_id_param, ext_name_param) {

			//SIGN_MAP_SEQ ,EXT_NAME ,FILE_ID ,STR_NAME ,SEARCH_FLAG ,CREATE_DATE 
			var map_seq = document.getElementById("map_seq").value;
			var ext_name = document.getElementById("ext_name").value;
			var file_id = document.getElementById("file_id").value;
			var str_name = document.getElementById("str_name").value;
			var search_flag = document.getElementById("search_flag").value;
			var fake_check = document.getElementById("fake_check").value;
			
			
			if(proc == "DEL") {
				file_id = file_id_param;
				ext_name = ext_name_param;
				
				if(file_id == "" || ext_name == "") {
					//alert("삭제할 정보의 일부가 존재하지 않습니다..");
					alert(qq149[lang_code]);
				}
			} else {
								
				if(ext_name == "" || file_id =="" || str_name =="") {
					//alert("시그너쳐 정보가 없습니다.");
					alert(qq152[lang_code]);
					return false;
				}
			}

			if(proc == "") {
				if(file_id_param == "") {
					proc = "REG";
				}else{
					proc = "EDIT";
				}
			}
			
			if(proc =="REG" || proc == "EDIT") {
				if(map_seq == "") {
					proc = "REG";
					//alert_str = "등록";
					alert_str = qq109[lang_code];
				} else {
					proc = "EDIT";
					//alert_str = "수정";
					alert_str = qq110[lang_code];
				}
				
			}else if(proc == "DEL"){
				//alert_str = "삭제";
				alert_str = qq111[lang_code];
				
			}else{
				//alert_str = "사용변경";
				alert_str = qq148[lang_code];
			}


			//if(confirm("시그너쳐 정보를 "+alert_str+" 하시겠습니까?")) {
			if(confirm(""+alert_str+" " + qq150[lang_code])) {

				$.post(
					'./process_sign_map.php',
					{	'proc':proc, 
						'map_seq':map_seq, 
						'ext_name':ext_name, 
						'file_id' : file_id, 
						'str_name' : str_name, 
						'search_flag': search_flag,
						'fake_check': fake_check
					 },
					function(data) {
						//$("#dix"+inoutSeq).append("<tr><td colspan='4'>"+data+"</td></tr>");
						alert(data);
						location.reload(true);
					},
					'text'
				);
			}
}

function processFileid(proc, del_seq, change_use) {

	var sign_id_seq, alert_str, file_id;
	
	if(del_seq == "") {
		sign_id_seq = document.getElementById("sign_id_seq").value;
	}else{
		sign_id_seq = del_seq;
	}
	
	if(proc == "DEL") {
		file_id = del_seq;
	} else {
		file_id = document.getElementById("file_id").value;
	}
	var str_name = document.getElementById("str_name").value;
	var use_flag = document.getElementById("use_flag").value;

	
	if(file_id == "" && sign_id_seq =="") {
		//alert("파일 시그너쳐 정보가 없습니다.");
		alert(qq153[lang_code]);
		return false;
	}

	if(proc == "") {
		if(sign_id_seq == "") {
			proc = "REG";
		}else{
			proc = "EDIT";
		}
	}

	if(proc =="REG" || proc == "EDIT") {
		if(sign_id_seq == "") {
			proc = "REG";
			//alert_str = "등록";
			alert_str = qq109[lang_code];
		}else{
			proc = "EDIT";
			//alert_str = "수정";
			alert_str = qq110[lang_code];
		}
		
	}else if(proc == "DEL"){
		//alert_str = "삭제";
		alert_str = qq111[lang_code];
	}else{
		//alert_str = "사용변경";
		alert_str = qq148[lang_code];
	}

	//alert(file_id);
	//if(confirm("파일 시그너쳐 정보(삭제됨)를 "+alert_str+" 하시겠습니까?")) {
	if(confirm(""+alert_str+" " + qq150[lang_code])) {
		$.post(
					'./process_file_id.php',
					{ 'proc':proc, 'sign_id_seq':sign_id_seq, 'file_id':file_id, 'str_name' : str_name, 'use_yn': use_flag, 'change_use':change_use
					 },
					function(data) {
						alert(data);
						location.reload(true);

					},
					'text'
				);
	}
}

function processAllowedUsb(proc, del_seq, change_use) {

	var ALLOW_USB_SEQ, GUBUN, DISPLAY_NAME, DEVICE_INSTANCE_PATH;
	if(del_seq == "") {
		ALLOW_USB_SEQ = document.getElementById("ALLOW_USB_SEQ").value;
	}else{
		ALLOW_USB_SEQ = del_seq;
	}
	//alert(ALLOW_USB_SEQ);
	if(proc == "DEL") {
		ALLOW_USB_SEQ = del_seq;
	} else {
		ALLOW_USB_SEQ = document.getElementById("ALLOW_USB_SEQ").value;
	}

	//alert(ALLOW_USB_SEQ);

	GUBUN = document.getElementById("GUBUN").value;
	DISPLAY_NAME = document.getElementById("DISPLAY_NAME").value;
	DEVICE_INSTANCE_PATH = document.getElementById("DEVICE_INSTANCE_PATH").value;

	
	if(proc != "DEL") {
		if(DISPLAY_NAME == "" || DEVICE_INSTANCE_PATH == "") {
			//alert("파일 시그너쳐 정보가 없습니다.");
			alert("Not found Allowed Devices.");
			return false;
		}
	}

	if(proc == "") {
		if(ALLOW_USB_SEQ == "") {
			proc = "REG";
		}else{
			proc = "EDIT";
		}

		
	}

	if(proc =="REG" || proc == "EDIT") {
		
		if(GUBUN == "" || DISPLAY_NAME == "" || DEVICE_INSTANCE_PATH == "") {
			alert("Empty values exist.");
			return;
		}

		if(ALLOW_USB_SEQ == "") {
			proc = "REG";
			//alert_str = "등록";
			alert_str = qq109[lang_code];
		}else{
			proc = "EDIT";
			//alert_str = "수정";
			alert_str = qq110[lang_code];
		}


		
	}else if(proc == "DEL"){
		//alert_str = "삭제";
		alert_str = qq111[lang_code];
	}else{
		//alert_str = "사용변경";
		alert_str = qq148[lang_code];
	}


	//alert(file_id);
	//if(confirm("파일 시그너쳐 정보(삭제됨)를 "+alert_str+" 하시겠습니까?")) {
	if(confirm(""+alert_str+" " + qq150[lang_code])) {
		$.post(
					'./process_allow_usb.php',
					{ 'proc':proc, 'ALLOW_USB_SEQ':ALLOW_USB_SEQ, 'GUBUN':GUBUN, 'DISPLAY_NAME':DISPLAY_NAME, 'DEVICE_INSTANCE_PATH' : DEVICE_INSTANCE_PATH, 'change_use':change_use
					 },
					function(data) {
						alert(data);
						location.reload(true);

					},
					'text'
				);
	}
}

function processFileSpecialCare(proc, del_seq, change_use) {

	var specialcare_seq, alert_str, file_id, SIZE_CHECK_YN;
	

	var str_name = document.getElementById("str_name").value;
	var file_id = document.getElementById("file_id").value;
	var ext_name = document.getElementById("ext_name").value;
	var use_yn = document.getElementById("use_yn").value;
	var SIZE_CHECK_YN = document.getElementById("SIZE_CHECK_YN").value;
	var SIZE_MEGA = document.getElementById("SIZE_MEGA").value;

	
	if(del_seq == "") {
		specialcare_seq = document.getElementById("specialcare_seq").value;
	}else{
		specialcare_seq = del_seq;
	}
	
	if(proc =="REG" || proc == "EDIT") {
		if(specialcare_seq == "") {
			proc = "REG";
			//alert_str = "등록";
			alert_str = qq109[lang_code];
		}else{
			proc = "EDIT";
			//alert_str = "수정";
			alert_str = qq110[lang_code];
		}
		
	}else if(proc == "DEL"){
		//alert_str = "삭제";
		alert_str = qq111[lang_code];
	}else{
		//alert_str = "사용변경";
		alert_str = qq148[lang_code];
	}
	
	
	
	if(proc == "DEL") {
		specialcare_seq = del_seq;
	}

	if(proc =="REG") {// 등록일 경우
		
		if(str_name == "" || file_id == "" || ext_name == "" || use_yn == "") {
			//alert("파일 시그너쳐 정보가 없습니다.");
			alert(qq153[lang_code]);
			return false;
		}
	}

	if(proc =="EDIT") {// 등록일 경우
		
		if  (specialcare_seq == ""  || str_name == "" || file_id == "" || ext_name == "" || use_yn == "") {
			//alert("파일 시그너쳐 정보가 없습니다.");
			alert(qq153[lang_code]);
			return false;
		}
	}

	//alert(file_id);
	//if(confirm("파일 시그너쳐 정보(삭제됨)를 "+alert_str+" 하시겠습니까?")) {
	if(confirm(""+alert_str+" " + qq150[lang_code])) {
		$.post(
					'./process_file_specialcare.php',
					{ 'proc':proc, 
			          'specialcare_seq':specialcare_seq
			          , 'file_id':file_id
			          , 'str_name' : str_name
			          , 'use_yn': use_yn
			          , 'ext_name':ext_name
			          , 'SIZE_CHECK_YN':SIZE_CHECK_YN
					  , 'SIZE_MEGA':SIZE_MEGA
					 },
					function(data) {
						alert(data);
						location.reload(true);

					},
					'text'
				);
	}
}

function processKillProcess(proc, process_name, change_use) {

	var process_detail;
	
	
	if(proc == "DEL") {
		process_name = process_name;
	} else if(proc == "EDIT") {
		process_name = document.getElementById("process_name").value;
		process_detail = document.getElementById("process_detail").value;
	} else {
		process_name = document.getElementById("process_name").value;
		process_detail = document.getElementById("process_detail").value;
	}
	var use_flag = document.getElementById("use_flag").value;
	var process_name_org = document.getElementById("process_name_org").value;
	var kill_process_seq = document.getElementById("kill_process_seq").value;
	var div_flag = document.getElementById("div_flag").value;

	if(process_name == "explorer.exe") {
		alert( process_name + qq164[lang_code] );
		return;
	}
	
	
	if(process_name == "" || use_flag =="") {
		//alert("금지 프로그램이 없습니다.");
		alert(qq154[lang_code]);
		return false;
	}

	if(proc == "") {
		//alert("잘못된 값이 입력되었습니다");
		alert(qq104[lang_code]);
		return false;
	}

	if(proc =="REG" || proc == "EDIT") {
		
		if(process_name_org == "") {
			//alert_str = "등록";
			alert_str = qq109[lang_code];
			proc = "REG";
		} else {
			//alert_str = "수정";
			alert_str = qq110[lang_code];
			proc = "EDIT";
		}
	} else if ( proc == "DEL") {
		//alert_str = "삭제";
		alert_str = qq111[lang_code];
	} else {
		//alert_str = "사용변경";
		alert_str = qq148[lang_code];
	}

	
	//if(confirm("금지 프로그램 정보를 "+alert_str+" 하시겠습니까?")) {
	if(confirm(""+alert_str+" " + qq150[lang_code])) {
		$.post(
					'./process_kill_process.php',
					{ 'proc':proc, 'process_name':process_name, 'process_detail':process_detail, 'use_yn': use_flag, 'change_use':change_use, 'process_name_org':process_name_org, 'div':div_flag
					 },
					function(data) {
						alert(data);
						location.reload(true);

					},
					'text'
				);
	}
}

function processDepartmentGw(proc, DEPARTMENT_GW_SEQ, change_use) {

	var gw_name, DEPARTMENT_GW_NAME, DEPARTMENT_GW_ENAME,DEPARTMENT_GW_CNAME,DEPARTMENT_GW_MANAGER, DELETE_YN;
	if(proc == "DEL") {
		DEPARTMENT_GW_SEQ = DEPARTMENT_GW_SEQ;
	}else {
		DEPARTMENT_GW_SEQ = document.getElementById("DEPARTMENT_GW_SEQ").value;
		gw_name = document.getElementById("gw_name").value;
		DEPARTMENT_GW_NAME = document.getElementById("DEPARTMENT_GW_NAME").value;
		DEPARTMENT_GW_ENAME = document.getElementById("DEPARTMENT_GW_ENAME").value;
		DEPARTMENT_GW_CNAME = document.getElementById("DEPARTMENT_GW_CNAME").value;
		DEPARTMENT_GW_MANAGER = document.getElementById("DEPARTMENT_GW_MANAGER").value;
	}
	var DELETE_YN = document.getElementById("DELETE_YN").value;
		
	
	if(DEPARTMENT_GW_SEQ == "" && DELETE_YN =="") {
		//alert("부서가 없습니다.");
		return false;
	}

	if(DEPARTMENT_GW_NAME=="" && DEPARTMENT_GW_ENAME == "" && DEPARTMENT_GW_CNAME ==""){
		alert(qq209[lang_code]);
		return false;
	}

	
	if(proc =="REG" || (proc == "EDIT")) {
		if(DEPARTMENT_GW_SEQ == "") {
			//alert_str = "등록";
			alert_str = qq109[lang_code];
			proc = "REG";
		} else {
			//alert_str = "수정";
			alert_str = qq110[lang_code];
			proc = "EDIT";
		}
	} else if (proc == "DEL"){
		//alert_str = "삭제";
		alert_str = qq111[lang_code];
	} else {
		//alert_str = "사용변경";
		alert_str = qq148[lang_code];
	}

	
	//if(confirm("부서 정보를 "+alert_str+" 하시겠습니까?")) {
	if(confirm(""+alert_str+" " + qq150[lang_code])) {	
		$.post(
					'./process_department_gw.php',
					{ 'proc':proc, 
					    'DEPARTMENT_GW_SEQ':DEPARTMENT_GW_SEQ, 
			            'gw_name':gw_name, 
			            'DEPARTMENT_GW_NAME': DEPARTMENT_GW_NAME, 
						'DEPARTMENT_GW_ENAME': DEPARTMENT_GW_ENAME, 
						'DEPARTMENT_GW_CNAME': DEPARTMENT_GW_CNAME, 
						'DEPARTMENT_GW_MANAGER': DEPARTMENT_GW_MANAGER, 
			            'DELETE_YN':DELETE_YN
					 },
					function(data) {
						alert(data);
						location.reload(true);

					},
					'text'
				);
		
	}
}


function processIPMgMT(proc, IP_MGMT_SEQ, admin_id) {

	var ETC_MEMO, IP_ADDR, ALLOW_ID;
	if(proc == "DEL") {
		IP_MGMT_SEQ = IP_MGMT_SEQ;
	}else {
		IP_MGMT_SEQ = document.getElementById("IP_MGMT_SEQ").value;
		ETC_MEMO = document.getElementById("ETC_MEMO").value;
		IP_ADDR = document.getElementById("IP_ADDR").value;

		if(document.getElementById("ALLOW_ID") != null){
			ALLOW_ID = document.getElementById("ALLOW_ID").value;
		}

		if(IP_ADDR==""){
			checkBlankDataName("IP_ADDR","IP Address");
			return false;
		}
	}
	
	
	if(proc =="REG" || (proc == "EDIT")) {
		if(IP_MGMT_SEQ == "") {
			//alert_str = "등록";
			alert_str = qq109[lang_code];
			proc = "REG";
		} else {
			//alert_str = "수정";
			alert_str = qq110[lang_code];
			proc = "EDIT";
		}
	} else if (proc == "DEL"){
		//alert_str = "삭제";
		alert_str = qq111[lang_code];
	} else {
		//alert_str = "사용변경";
		alert_str = qq148[lang_code];
	}

	
	//if(confirm("부서 정보를 "+alert_str+" 하시겠습니까?")) {
	if(confirm(""+alert_str+" " + qq150[lang_code])) {	
		$.post(
					SITE_NAME+'/process_ip_mgmt.php',
					{ 'proc':proc, 
					    'IP_MGMT_SEQ':IP_MGMT_SEQ, 
			            'ETC_MEMO':ETC_MEMO, 
			            'IP_ADDR': IP_ADDR, 
			            'ALLOW_ID': ALLOW_ID, 
						'ADMIN_ID': admin_id
					 },
					function(data) {
						alert(data);
						location.reload(true);

					},
					'text'
				);
		
	}
}

function processAPMgMT(proc, AP_MGMT_SEQ, admin_id) {

	var ETC_MEMO, AP_SSID;
	if(proc == "DEL") {
		AP_MGMT_SEQ = AP_MGMT_SEQ;
	}else {
		AP_MGMT_SEQ = document.getElementById("AP_MGMT_SEQ").value;
		ETC_MEMO = document.getElementById("ETC_MEMO").value;
		AP_SSID = document.getElementById("AP_SSID").value;
	}
	
	
	if(proc =="REG" || (proc == "EDIT")) {
		if(AP_MGMT_SEQ == "") {
			//alert_str = "등록";
			alert_str = qq109[lang_code];
			proc = "REG";
		} else {
			//alert_str = "수정";
			alert_str = qq110[lang_code];
			proc = "EDIT";
		}
	} else if (proc == "DEL"){
		//alert_str = "삭제";
		alert_str = qq111[lang_code];
	} else {
		//alert_str = "사용변경";
		alert_str = qq148[lang_code];
	}

	
	//if(confirm("부서 정보를 "+alert_str+" 하시겠습니까?")) {
	if(confirm(""+alert_str+" " + qq150[lang_code])) {	
		$.post(
					'./process_ap_mgmt.php',
					{ 'proc':proc, 
					    'AP_MGMT_SEQ':AP_MGMT_SEQ, 
			            'ETC_MEMO':ETC_MEMO, 
			            'AP_SSID': AP_SSID, 
						'ADMIN_ID': admin_id
					 },
					function(data) {
						alert(data);
						location.reload(true);

					},
					'text'
				);
		
	}
}

function processFileMonitoring(proc, FILE_MONITORING_SEQ, change_use) {

	var FILE_EXT, USE_YN, FILE_DESCRIPTION;
	//먼저 5개 이상인지를 검사해서 5개가 넘으면 등록할 수 없도록 한다.
	if(document.getElementById("FILE_MONITORING_CNT").value > 4 && document.getElementById("FILE_MONITORING_SEQ").value == "" ) {
		alert(qq163[lang_code]);
		return;
	}

	if(proc == "DEL") {
		FILE_MONITORING_SEQ = FILE_MONITORING_SEQ;
	}else {
		FILE_MONITORING_SEQ = document.getElementById("FILE_MONITORING_SEQ").value;
		FILE_EXT = document.getElementById("FILE_EXT").value;
		FILE_DESCRIPTION = document.getElementById("FILE_DESCRIPTION").value;
		
	}

	
	var USE_YN = document.getElementById("USE_YN").value;
		
	
	if(FILE_MONITORING_SEQ == "" && USE_YN =="") {
		//alert("모니터링파일정보가 없습니다.");
		alert(qq155[lang_code]);
		return false;
	}

	
	if(proc =="REG" || (proc == "EDIT")) {
		if(FILE_MONITORING_SEQ == "") {
			//alert_str = "등록";
			alert_str = qq109[lang_code];
			proc = "REG";
		} else {
			//alert_str = "수정";
			alert_str = qq110[lang_code];
			proc = "EDIT";
		}
	} else if (proc == "DEL"){
		//alert_str = "삭제";
		alert_str = qq111[lang_code];
	} else {
		//alert_str = "사용변경";
		alert_str = qq148[lang_code];
	}

	
	//if(confirm("모니터링 파일정보를 "+alert_str+" 하시겠습니까?")) {
	if(confirm(""+alert_str+" " + qq150[lang_code])) {	
		$.post(
					'./process_file_monitoring.php',
					{ 'proc':proc, 
					    'FILE_MONITORING_SEQ':FILE_MONITORING_SEQ, 
						'FILE_EXT':FILE_EXT, 
			            'FILE_DESCRIPTION':FILE_DESCRIPTION, 
			            'USE_YN':USE_YN
					 },
					function(data) {
						alert(data);
						location.reload(true);

					},
					'text'
				);
		
	}
}

function delScanData(inout_seq, disk_name, admin_id, disk_seq) {

	
	
	if(disk_seq == "") {
		//alert("잘못된 값이 입력되었습니다.");
		alert(qq104[lang_code]);
		return;
	} else {
		//if(confirm("선택한 드라이브  "+disk_seq+"를(을) 삭제 처리 하시겠습니까?")) {
		if(confirm(""+disk_name+" " + qq156[lang_code])) {
			$.post(
					'./process_disk_delete.php',
					{ 'disk_seq':disk_seq, 'inout_seq':inout_seq, 'disk_name':disk_name, 'admin_id':admin_id
					 },
					function(data) {
						//if(data == "정상적으로 처리되었습니다.") {
						if(data == "OK") {
							alert(qq157[lang_code]);
							location.reload(true);
						} else {
							alert(qq104[lang_code]);
						}

					},
					'text'
				);

		}
	}
		
}

//파일 백업
function openBackup(g_name) {
	window.open("backup_gate.php?gate_name="+ g_name, "BACKUP", "top=300px, left=300px, height=600px, width=800px");
	
	//document.location.href="pop_backup.php?gate_name="+ g_name;
}

function backupGate(gate_name, gate_ip, bk_type, bk_server_path, cur_ip, cnt) {
	
	var backup_base_days, begin_date="", end_date="";

	if(document.getElementById("base").checked){
		if(document.getElementById("base_days").value == "") {
			//alert("백업 기준일이 지정되지 않았습니다. 환경설정에서 백업 기준일을 설정 후 시도하세요.");
			alert(qq170[lang_code]);
			
			return;
		}else{
			backup_base_days = document.getElementById("base_days").value;
		}
	}else if(document.getElementById("period").checked){	
		if(document.getElementById("begin_date").value == "" || document.getElementById("end_date").value == "") {
			//alert("날짜 기간을 입력 해 주세요.");
			alert(qq171[lang_code]);
			return;
		}else{
			begin_date = document.getElementById("begin_date").value;
			end_date = document.getElementById("end_date").value;
		}
	}else {
		//alert("백업 대상 기준을 선택하세요.");
		alert(qq172[lang_code]);
		return;
	}
	
	/*
	if(cnt == 0) {
		alert(qq161[lang_code]);
		return;
	}
	*/

	if(gate_name == "") {
		//alert("잘못된 값이 입력되었습니다.");
		alert(qq104[lang_code]);
		return;
	} else {

		if(confirm(qq162[lang_code]) ){

				var host_server, target_server;

				if(bk_type == "SERVERMOVE") {
						host_server = bk_server_path;
						target_server = gate_ip;
				}else{
						host_server = gate_ip;
				}

				document.getElementById("bk_result").innerHTML = qq173[lang_code] + "\r\n";
				
				callJSONP(host_server, target_server, gate_name, gate_ip, bk_type, backup_base_days, begin_date, end_date);
				/*
				$.ajax({
						type:"POST",
						url : "http://"+host_server+"/dpt/process_backup.php",
						data : "gate_name="+gw_name+"&target_server="+target_server+"&backup_base_days="+backup_base_days+"&begin_date="+begin_date+"&end_date="+end_date,
						dataType : "jsonp",
						jsonpCallback : "myCallback",
						success: function(data) {
							//console.log('성공 - ', data);
							document.getElementById("bk_result").innerHTML += 	"대상 게이트:" + gw_name + "(" + gate_ip + ") - " + bk_type + "\r\n" + "실행서버 : " + host_server + "\r\n" + "메세지:" + data.message + "[" + data.time + "]" + "\r\n ";
							
						},
						error: function(xhr) {
						  //console.log('실패 - ', xhr);
						  document.getElementById("bk_result").innerHTML += "실패 - " + xhr + "\r\n";
						  document.getElementById("bk_result").innerHTML += 	"대상 게이트:" + gw_name + "(" + gate_ip + ") - " + bk_type + "\r\n" + "실행서버 : " + host_server + "\r\n" ;
						}
				});
				*/
		}
	}
}

function callJSONP(host_server, target_server, gate_name, gate_ip, bk_type, backup_base_days, begin_date, end_date) {
				var result = false;
				$.ajax({
						type:"POST",
						url : "http://"+host_server+"/dpt/process_backup.php",
						data : "gate_name="+gate_name+"&target_server="+target_server+"&backup_base_days="+backup_base_days+"&begin_date="+begin_date+"&end_date="+end_date,
						dataType : "jsonp",
						jsonpCallback : "myCallback"+gate_name,
						success: function(data) {
							//console.log('성공 - ', data);
							document.getElementById("bk_result").innerHTML += 	"< Backup(delete) Success >\r\n " + data.message + " [" + data.time + "] \r\n";
							document.getElementById("bk_result").innerHTML += 	"* Target Gate:" + gate_name + "(" + gate_ip + ") - " + bk_type + "\r\n" + "* Executed Server : " + host_server + "\r\n";

							//** Server Move 이면 삭제 루틴 한번 더 실행 **//
							if(bk_type == "SERVERMOVE") {
									//Rsync 전송된 파일 삭제
									$.ajax({
											type:"POST",
											url : "http://"+gate_ip+"/dpt/backup_file_delete.php",
											data : "gate_name="+gate_name+"&target_server="+target_server+"&backup_base_days="+backup_base_days+"&begin_date="+begin_date+"&end_date="+end_date,
											dataType : "jsonp",
											jsonpCallback : "myCallbackDel"+gate_name,
											success: function(data) {
												//console.log('성공 - ', data);
												document.getElementById("bk_result").innerHTML += 	"< Backup(delete) Success >\r\n "+ data.message + " [" + data.time + "] \r\n";
												document.getElementById("bk_result").innerHTML += 	"* Target Gate:" + gate_name + "(" + gate_ip + ") - " + bk_type + "\r\n" + "* Executed Server : " + host_server + "\r\n";
												
											},
											error: function(xhr) {
											  //console.log('실패 - ', xhr);
											  document.getElementById("bk_result").innerHTML += 	"< Backup(delete) Faild > \r\n";
											  document.getElementById("bk_result").innerHTML += 	"* Target Gate:" + gate_name + "(" + gate_ip + ") - " + bk_type + "\r\n" + "* Executed Server : " + host_server + "\r\n" ;
											}
									});
							}
						},
						error: function(xhr) {
						  //console.log('실패 - ', xhr);
						  document.getElementById("bk_result").innerHTML += 	"< Backup(delete) Faild > \r\n";

						  if(bk_type == "SERVERMOVE"){
								document.getElementById("bk_result").innerHTML += 	"- Please check the settings of Rsync backup server. \r\n";
						  }else {
								//document.getElementById("bk_result").innerHTML += 	"- 삭제하거나 이동할 파일 폴더의 존재여부를 확인 바랍니다. \r\n";
								document.getElementById("bk_result").innerHTML += 	"- " + qq174[lang_code] + " \r\n";
						  }
						  document.getElementById("bk_result").innerHTML += 	"* Target Gate:" + gate_name + "(" + gate_ip + ") - " + bk_type + "\r\n" + "* Executed Server : " + host_server + "\r\n" ;
						}
				});
}

//파일 필터링
function setFilter(filter_seq, color, condition, value, use_flag, file_size) {

	document.getElementById("filter_seq").value = filter_seq;

	document.getElementById("color").value = color;
	document.getElementById("condition").value = condition;
	document.getElementById("value").value = value;
	document.getElementById("use_flag").value = use_flag;
	document.getElementById("file_size").value = file_size;

	if(color =="WHITE") {
		//document.getElementById("use_flag").disabled = true;
		document.getElementById("color").disabled = true;
	}
}

//DPT_VACCINE 
function setVaccine(VAC_SEQ, VAC_NAME, VERSION, IMPORTANCE, USE_YN, MEMO, PROCESS_NAME, TILE, LINK, MEMO_KR, MEMO_EN, MEMO_CN) {

	//alert(VAC_SEQ);
	document.getElementById("VAC_SEQ").value = VAC_SEQ;
	document.getElementById("VAC_NAME").value = VAC_NAME;
	document.getElementById("VERSION").value = VERSION;
	document.getElementById("S_USE_YN").value = USE_YN;
	document.getElementById("MEMO").value = MEMO;
	document.getElementById("PROCESS_NAME").value = PROCESS_NAME;
	document.getElementById("IMPORTANCE").value = IMPORTANCE;
	document.getElementById("TILE").value = TILE;
	
	document.getElementById("LINK").value = LINK;
	document.getElementById("MEMO_KR").value = MEMO_KR;
	document.getElementById("MEMO_EN").value = MEMO_EN;
	document.getElementById("MEMO_CN").value = MEMO_CN;
	
}

//금지프로세스
function setKillProcess(kill_process_seq, process_name, process_detail, use_yn,div) {

	document.getElementById("kill_process_seq").value = kill_process_seq;
	document.getElementById("process_name").value = process_name;
	document.getElementById("process_detail").value = process_detail;
	document.getElementById("process_name_org").value = process_name;
	document.getElementById("use_flag").value = use_yn;
	document.getElementById("div_flag").value = div;

	
}

//('<?php echo $DEPARTMENT_GW_SEQ; ?>',  '<?php echo $P_GW_NAME; ?>', '<?php echo $DEPARTMENT_GW_NAME; ?>', '<?php echo $DELETE_YN; ?>')
function setDepartmentGw(DEPARTMENT_GW_SEQ, GW_NAME, DEPARTMENT_GW_NAME, DEPARTMENT_GW_ENAME, DEPARTMENT_GW_CNAME, DELETE_YN,DEPARTMENT_GW_MANAGER) {

	document.getElementById("DEPARTMENT_GW_SEQ").value = DEPARTMENT_GW_SEQ;
	document.getElementById("gw_name").value = GW_NAME;
	document.getElementById("DEPARTMENT_GW_NAME").value = DEPARTMENT_GW_NAME;
	document.getElementById("DEPARTMENT_GW_ENAME").value = DEPARTMENT_GW_ENAME;
	document.getElementById("DEPARTMENT_GW_CNAME").value = DEPARTMENT_GW_CNAME;
	document.getElementById("DELETE_YN").value = DELETE_YN;
	document.getElementById("DEPARTMENT_GW_MANAGER").value = DEPARTMENT_GW_MANAGER;
	
}

function setIPMGMT(IP_MGMT_SEQ, IP_ADDR,ETC_MEMO, ALLOW_ID) {

	document.getElementById("IP_MGMT_SEQ").value = IP_MGMT_SEQ;
	document.getElementById("IP_ADDR").value = IP_ADDR;
	document.getElementById("ETC_MEMO").value = ETC_MEMO;

	if(document.getElementById("ALLOW_ID") != null){
		document.getElementById("ALLOW_ID").value = ALLOW_ID;
	}
	
	
}

function setAPMGMT(AP_MGMT_SEQ, AP_SSID, ETC_MEMO) {

	document.getElementById("AP_MGMT_SEQ").value = AP_MGMT_SEQ;
	document.getElementById("AP_SSID").value = AP_SSID;
	document.getElementById("ETC_MEMO").value = ETC_MEMO;
	
	
}

function setFileMonitoring(FILE_MONITORING_SEQ, FILE_EXT, FILE_DESCRIPTION, USE_YN) {

	document.getElementById("FILE_MONITORING_SEQ").value = FILE_MONITORING_SEQ;
	document.getElementById("FILE_EXT").value = FILE_EXT;
	document.getElementById("FILE_DESCRIPTION").value = FILE_DESCRIPTION;
	document.getElementById("USE_YN").value = USE_YN;
	
}

//파일 필터링
function setFileid(sign_id_seq, file_id, str_name, use_yn) {

	document.getElementById("sign_id_seq").value = sign_id_seq;
	document.getElementById("file_id").value = file_id;
	document.getElementById("str_name").value = str_name;
	document.getElementById("use_flag").value = use_yn;

	
}

function setAllowedUsb(ALLOW_USB_SEQ, GUBUN, DISPLAY_NAME, DEVICE_INSTANCE_PATH) {

	document.getElementById("ALLOW_USB_SEQ").value = ALLOW_USB_SEQ;
	document.getElementById("GUBUN").value = GUBUN;
	document.getElementById("DISPLAY_NAME").value = DISPLAY_NAME;
	document.getElementById("DEVICE_INSTANCE_PATH").value = DEVICE_INSTANCE_PATH;
	
}

//보호파일특별정책
function setFileSpecialCare(specialcare_seq, file_id, str_name, use_yn, size_check_yn, size_mega, ext_name) {

	
	
	document.getElementById("specialcare_seq").value = specialcare_seq;

	document.getElementById("file_id").value = file_id;
	document.getElementById("str_name").value = str_name;
	document.getElementById("use_yn").value = use_yn;
	document.getElementById("SIZE_CHECK_YN").value = size_check_yn;
	document.getElementById("ext_name").value = ext_name;
	document.getElementById("SIZE_MEGA").value = size_mega;

	
}

function clearFilter() {

	document.getElementById("filter_seq").value = "";
	document.getElementById("color").value = "BLACK";
	document.getElementById("condition").value = "FILE";
	document.getElementById("value").value = "";
	document.getElementById("use_flag").value = "1";
	document.getElementById("file_size").value = "0";

	
}

function clearVaccine() {

	document.getElementById("VAC_SEQ").value = "";

	document.getElementById("VAC_NAME").value = "";
	document.getElementById("VERSION").value = "";
	document.getElementById("PROCESS_NAME").value = "";
	document.getElementById("MEMO").value = "";
	document.getElementById("IMPORTANCE").value = "";
	document.getElementById("TILE").value = "";

	document.getElementById("LINK").value = "";
	document.getElementById("MEMO_KR").value = "";
	document.getElementById("MEMO_EN").value = "";
	document.getElementById("MEMO_CN").value = "";

	document.getElementById("S_USE_YN").value = "N";

	
}

function clearAddEmail() {

	
	document.getElementById("MANAGER_NAME1").value = "";
	document.getElementById("MANAGER_EMAIL1").value = "";
	document.getElementById("USE_YN1").value = "N";

	document.getElementById("MANAGER_NAME2").value = "";
	document.getElementById("MANAGER_EMAIL2").value = "";
	document.getElementById("USE_YN2").value = "N";

	document.getElementById("MANAGER_NAME3").value = "";
	document.getElementById("MANAGER_EMAIL3").value = "";
	document.getElementById("USE_YN3").value = "N";
}

function clearFileid() {
	
	document.getElementById("sign_id_seq").value = "";
	document.getElementById("file_id").value = "";
	document.getElementById("str_name").value = "";
	document.getElementById("use_flag").value = "Y";

	
}
function clearAllowedUsb() {
	
	document.getElementById("ALLOW_USB_SEQ").value = "";
	document.getElementById("GUBUN").value = "";
	document.getElementById("DISPLAY_NAME").value = "";
	document.getElementById("DEVICE_INSTANCE_PATH").value = "";
	
}
function clearFileSepcialCare() {
	
	document.getElementById("specialcare_seq").value = "";
	document.getElementById("ext_name").value = "";
	document.getElementById("file_id").value = "";
	document.getElementById("str_name").value = "";
	document.getElementById("use_yn").value = "Y";
	document.getElementById("SIZE_CHECK_YN").value = "Y";
	document.getElementById("SIZE_MEGA").value = "10000";

}

function clearFileMap() {
	
	document.getElementById("map_seq").value = "";
	document.getElementById("file_id").value = "";
	document.getElementById("ext_name").value = "";
	document.getElementById("str_name").value = "";
	document.getElementById("search_flag").value = "1";
	document.getElementById("fake_check").value = "1";

	
}
function clearKillProcess() {
	document.getElementById("kill_process_seq").value = "";
	document.getElementById("process_name_org").value = "";
	document.getElementById("process_name").value = "";
	document.getElementById("process_detail").value = "";
	document.getElementById("use_flag").value = "Y";
}

function clearDepartmentGw() {
	
	
	document.getElementById("DEPARTMENT_GW_SEQ").value = "";
	document.getElementById("gw_name").value = "";
	document.getElementById("DEPARTMENT_GW_NAME").value = "";
	document.getElementById("DEPARTMENT_GW_ENAME").value = "";
	document.getElementById("DEPARTMENT_GW_CNAME").value = "";
	document.getElementById("DEPARTMENT_GW_MANAGER").value = "";
	document.getElementById("DELETE_YN").value = "Y";

	
}

function clearIPMgmt() {
	
	document.getElementById("IP_MGMT_SEQ").value = "";
	document.getElementById("IP_ADDR").value = "";
	document.getElementById("ETC_MEMO").value = "";

	if(document.getElementById("ALLOW_ID") != null){
		document.getElementById("ALLOW_ID").value = "";
	}
}

function clearAPMgmt() {
	
	document.getElementById("AP_MGMT_SEQ").value = "";
	document.getElementById("AP_SSID").value = "";
	document.getElementById("ETC_MEMO").value = "";
}

function clearFileMonitoring() {
	
	document.getElementById("FILE_EXT").value = "";
	document.getElementById("FILE_DESCRIPTION").value = "";
	document.getElementById("USE_YN").value = "Y";

	
}

function changeDepartment(depart, flag) {
	if(flag == "kor") {
		document.getElementById("manager_dept").value = document.frmUser.p_department_gw.value;
	} else if(flag == "eng") {
		document.getElementById("manager_dept").value = document.frmUser.p_department_egw.value;
	} else if(flag =="cn"){
		document.getElementById("manager_dept").value = document.frmUser.p_department_cgw.value;
	}
}

function changeDeptLang(lang){

	$("#p_department_gw").hide();
	$("#p_department_egw").hide();
	$("#p_department_cgw").hide();

	if(lang=="") lang = lang_code;

	if(lang=="KR"){
		$("#p_department_gw").show();
	}else if(lang=="EN"){
		$("#p_department_egw").show();
	}else if(lang=="CN"){
		$("#p_department_cgw").show();
	}else{
		$("#p_department_egw").show();
	}
}

function winOpen(url, flag){
	

	if(flag != "") {
		//여기서 기다리는 이미지 보여 주기
		//alert(flag);
		$('#viewLoading').css('position', 'absolute');
		$('#viewLoading').css('left', $('#'+flag).offset().left);
		$('#viewLoading').css('top', $('#'+flag).offset().top);
		$('#viewLoading').css('width', $('#'+flag).css('width'));
		$('#viewLoading').css('height', $('#'+flag).css('height'));
		$('#viewLoading').fadeIn(500);
	}

	alert(url);
	document.location = url;
	if(flag != "") {
		$('#viewLoading').fadeOut(500);
	}
	
}

function winOpen1(url, flag){
	//alert(url);
	document.location = url;
}


function saveExceptionConfig() {

	//$('#viewLoading').css('position', 'absolute');
	//$('#viewLoading').fadeIn(500);
	
	var u_promise, u_memo, m_promise;
	
	
	u_promise =document.getElementById("USER_SECU_PROMISE").value ;
	u_memo =document.getElementById("USER_SECU_MEMO").value ;
	m_promise =document.getElementById("MANAGER_SECU_PROMISE").value ;
	
	
	$.post(
				'./process_except_check.php',
				{	'div':"config",
					'user_promise':u_promise, 
					'user_memo':u_memo, 
					'manager_promise':m_promise
				 },
				function(data) {

					if(data == "OK") {
						//alert("처리되었습니다");
						alert(qq103[lang_code]);
					}
					//$('#viewLoading').fadeOut(500);
				},
				'text'
			);

}

function saveAdreeConfig() {

	//$('#viewLoading').css('position', 'absolute');
	//$('#viewLoading').fadeIn(500);
	
	var u_promise, u_memo, m_promise;
	
	
	u_promise =document.getElementById("USER_SECU_PROMISE").value ;
	u_memo =document.getElementById("USER_SECU_MEMO").value ;
	m_promise =document.getElementById("MANAGER_SECU_PROMISE").value ;
	
	
	$.post(
				'./process_agree_config.php',
				{	'div':"config",
					'user_promise':u_promise, 
					'user_memo':u_memo, 
					'manager_promise':m_promise
				 },
				function(data) {

					if(data == "OK") {
						//alert("처리되었습니다");
						alert(qq103[lang_code]);
					}
					//$('#viewLoading').fadeOut(500);
				},
				'text'
			);

}



function getDeleteCode() {

	
	var user_key =  document.getElementById("user_key").value;
	var memo =  document.getElementById("memo").value;
	var dev_type = document.getElementById("dev_type").value;
	var rel_days = $("#rel_days").val();

	
	if(dev_type == "") dev_type = 'UNINSTALL';
	
	if( memo == "") {
		alert( qq183[lang_code] );
		//alert("삭제 사유를 입력 해 주세요.");
		return false;
	} else {
			
			$.post(
				SITE_NAME+'/process_releasekey.php',
				{	'dev_type':dev_type,
					'user_key':user_key, 
					'memo':'['+dev_type+']'+memo,
					'rel_days' : rel_days
				 },
				function(data) {

					if(data != "") {
						document.getElementById("gen_code").innerHTML = data;
					}
					//$('#viewLoading').fadeOut(500);
				},
				'text'
			);
	}

}


function getReleaseCode( user_key, in_date, inout_seq) {

	var proc_name =  document.getElementById("process_list").value;

	var memo =  document.getElementById("rel_memo").value;
	var dev_type = document.getElementById("dev_type").value.trim();
	var rel_days = document.getElementById("rel_days").value;
	var sms_yn = document.getElementById("SMS_YN").value;
	var phone_yn = document.getElementById("PHONE_YN").value;
	var unit = $("#unit").val();
	var ver = $("#ver").val();


	
	if(dev_type == "" && proc_name == "") {
		alert( qq184[lang_code] );
		//alert("해제할 장치나 프로그램을 선택 해 주세요.");
		return false;
	}

	if (dev_type != "" && rel_days ==""){
		alert( qq185[lang_code]+"(days)" );
		//alert("해제 기간을 입력 해 주세요.");
		return false;
	}

	if(dev_type != "" && unit=="h"){
		if(rel_days > 24){
			//alert("24시간을 초과할 수 없습니다.");
			alert(qq239[lang_code]);
			return false;
		}
	}

	if( document.getElementById("rel_memo").value == "") {
		alert( qq186[lang_code] );
		//alert("제한 해제 사유를 입력 해 주세요.");
		return false;
	}else{
			
			
			$.post(
				SITE_NAME+'/process_release.php',
				{	'dev_type':dev_type,
					'user_key':user_key, 
					'in_date':in_date,
					'inout_seq':inout_seq,
					'memo':memo,
					'rel_days':rel_days,
					'process_name':proc_name,
					'unit' : unit,
					'ver' : ver
				 },
				function(data) {

					if(data != "") {

						var key_code , rel_seq, str;
						var values = data.split('|');
						str = "";
						key_code = values[0];
						rel_seq = values[1];
						
						//alert(rel_seq);
						if(sms_yn == "Y" && phone_yn == "Y") {
							str = '&nbsp;&nbsp;<img src="'+SITE_NAME+'/images/' + lang_img + 'send_sms.gif" onclick=\'sendSms("' + rel_seq + '")\' style="cursor:pointer;" align="center" valign="middle" />';
						}
						document.getElementById("rel_code").innerHTML = key_code + str;

					}
					//$('#viewLoading').fadeOut(500);
				},
				'text'
			);
	}

}

function getReleaseCode2( type , user_key, in_date, inout_seq) {

	var proc_name =  document.getElementById("process_list").value;
	var dev_type = document.getElementById("dev_type").value.trim();
	var rel_days = document.getElementById("rel_days").value;
	var sms_yn = document.getElementById("SMS_YN").value;
	var phone_yn = document.getElementById("PHONE_YN").value;
	var memo = "";
	
	if(type=='device'){
		
		if( document.getElementById("rel_memo_dev").value == "") {
			alert( qq186[lang_code] );
			//alert("제한 해제 사유를 입력 해 주세요.");
			$("#rel_memo_dev").focus();
			return false;
		}

		if(dev_type == "") {
			alert( qq210[lang_code] );
			//alert("해제할 장치를 입력해 주세요.");
			$("#dev_type").focus();
			return false;
		}

		if (rel_days ==""){
			alert( qq185[lang_code]+"(days)" );
			//alert("해제 기간을 입력 해 주세요.");
			$("#rel_days").focus();
			return false;
		}

		memo =  document.getElementById("rel_memo_dev").value;
	
	}else if(type=='program'){

		if( document.getElementById("rel_memo_proc").value == "") {
			alert( qq186[lang_code] );
			//alert("제한 해제 사유를 입력 해 주세요.");
			$("#rel_memo_proc").focus();
			return false;
		}

		if(proc_name == "") {
			alert(qq211[lang_code] );
			//alert("해제할 프로그램을 선택 해 주세요.");
			$("#process_list").focus();
			return false;
		}

		memo =  document.getElementById("rel_memo_proc").value;
	
	}
	
	$.post(
		'./process_release.php',
		{	'dev_type':dev_type,
			'user_key':user_key, 
			'in_date':in_date,
			'inout_seq':inout_seq,
			'memo':memo,
			'rel_days':rel_days,
			'process_name':proc_name
		 },
		function(data) {

			if(data != "") {

				var key_code , rel_seq, str;
				var values = data.split('|');
				str = "";
				key_code = values[0];
				rel_seq = values[1];
				
				//alert(rel_seq);
				if(sms_yn == "Y" && phone_yn == "Y") {
					str = '&nbsp;&nbsp;<img src="./images/' + lang_img + 'send_sms.gif" onclick=\'sendSms("' + rel_seq + '")\' style="cursor:pointer;" align="center" valign="middle" />';
				}
				if(type=='device'){
					document.getElementById("rel_code_dev").innerHTML = key_code + str;
				}else{
					document.getElementById("rel_code_proc").innerHTML = key_code + str;
				}

			}
			//$('#viewLoading').fadeOut(500);
		},
		'text'
	);

}

function sendSms(rel_seq) {
	
	var url;
	
	url= SITE_NAME+"/send_sms.php?rel_seq="+ rel_seq ;
	
	window.open(url, "sendSMS", "height=600px, width=920px scrollbars=yes, resizable=yes");
	
	//여기서 문자 전송 창을 띄운다.

}

function sendSmsAll(code_val, dev_type) {
	
	var url;

	url= SITE_NAME+"/send_sms.php?code_val=" + code_val + "&dev_type=" + dev_type ;
		
	window.open(url, "sendSMS", "height=600px, width=920px scrollbars=yes, resizable=yes");

}

function sendSmsETC(phone, user_name) {
	
	var url;

	url= SITE_NAME+"/send_sms.php?phone=" + phone + "&user_name=" + user_name ;
		
	window.open(url, "sendSMS", "height=600px, width=920px scrollbars=yes, resizable=yes");

}

function showTakeoutDate(inout_seq) {
	
	var url;

	url= "takeout_date.php?inout_seq=" + inout_seq ;
		
	window.open(url, "takeoutDate", "height=600px, width=920px scrollbars=yes, resizable=yes");

}


function addrSend(frm) {

	if(frm.upche_file.value == "") {
			alert('Have no excel file. First, select address excel file..');
			return false;
	} else {
			frm.submit();
	}

}

function uploadInoutReport(inout_rp_seq) {
		
		if(inout_rp_seq > 0) {
			if(!confirm('Are you sure delete file?')) {
				return false;
			}
		}

		var formData = new FormData(); 
		formData.append("inout_seq", $("input[name=inout_seq]").val()); 
		formData.append("inout_rp_seq", inout_rp_seq); 
		//formData.append("test3", $("textarea[name=test3]").text()); 
		formData.append("report_file", $("input[name=report_file]")[0].files[0]); 
		$.ajax({ 
			url: SITE_NAME+'/inout_report_upload.php', 
			data: formData, 
				processData: false, 
				contentType: false, 
				type: 'POST', 
				success: function(data){ 
						if(data.indexOf("SUCCESS") > -1) {
							alert(data);
							location.reload(true);
						}else{
							alert(data);
						}
						
				} 
			}); 

}

function changeReleaseType(type) {
		
	if(type == "device") {
			document.getElementById("process_list").style.display = "none";
			document.getElementById("pnlDev").style.display = "";
			$("#process_list option:eq(0)").prop("selected", true);
			//document.getElementById("rel_days").readOnly = false;
			//document.getElementById("rel_days").style.backgroundColor = "#ffffff";
	}else{
			document.getElementById("process_list").style.display = "";
			document.getElementById("pnlDev").style.display = "none";
			$("#dev_type option:eq(0)").prop("selected", true);
			//document.getElementById("rel_days").readOnly = true;
			//document.getElementById("rel_days").style.backgroundColor = "#dddddd";
	}

	document.getElementById("rel_code").innerHTML = "";
}

function execCheckoutRequest(inout_seq) {

	if( inout_seq == "") {
		alert( "Your have invaild user information." );
		return false;
	}else{
			
			$.post(
				'./process_checkout_request.php',
				{	'inout_seq':inout_seq
				 },
				function(data) {
					alert(data);
					//$('#viewLoading').fadeOut(500);
				},
				'text'
			);
	}

}


function userAllDataDelete(user_key, email, gubun) {

	if( user_key == "" ||  email == "" ||  gubun == "") {
		alert( "Your have invaild user information." );
		return false;
	}else{
			
			if(confirm("This action will be deleteing  seleted user's all data. \r\n Are you sure??")) {
				$.post(
					'./process_user_data_delete.php',
					{	'user_key':user_key
						, 'email':email
						, 'gubun':gubun
					 },
					function(data) {
						if(data=="SUCCESS") {
							alert("SUCCESS, User data is deleted.");
							location.reload(true);
						}else{
							alert("FAILED, User data is not deleted.");
						}
						
					},
					'text'
				);
			}
	}

}

function adminEraseConfigSet(){

	var grade = $("#erase_admin_grade").val();

	if(grade=="S"){

		$("#admin_manage_center div[name='check']").hide();
		$("#admin_menu_access div[name='check']").hide();

		$("#admin_manage_center").append("<div name='all'>"+qq189[lang_code]+"</div>");
		$("#admin_menu_access").append("<div name='all'>"+qq189[lang_code]+"</div>");

	}else{

		$("#admin_manage_center div[name='check']").show();
		$("#admin_menu_access div[name='check']").show();
		
		$("#admin_menu_access div[name='check'] input[name='erase_menu_access[]']").each(function(idx){
			
			var access_grade = $(this).attr("access_grade");

			if(grade==""){

				$(this).removeAttr("checked");

			}else{

				if(access_grade.indexOf(grade) == -1){
					$(this).removeAttr("checked");
				}else{
					$(this).attr("checked","");
				}
			}

		});

		$("#admin_manage_center div[name='all']").remove();
		$("#admin_menu_access div[name='all']").remove();

	}
}
function loginDuplCheck(){
	$.post(
			SITE_NAME+'/dupl_login_check.php',
			function(data) {
				if(data.status){
					if(data.result =="DUPL"){
						alert(data.msg);
						top.location.href = "/";
					}
				}
			},
			'json'
		);
}
-->