/**
 * 회원가입체크 javascript
 */
 
 function infoCheck() {
	if(document.joinForm.id.value.lenght == 0) {
		alert("아이디는 필수 입력사항입니다!");
		document.joinForm.id.focus();
		return;       /** 돌아오는 값  */
	} 
	
	if(document.joinForm.id.value.lenght < 4 || document.joinForm.id.value.lenght > 15) {
		alert("아이디는 4자리 이상이어야 합니다!");
		document.joinForm.id.focus();
		return;
	}
	
	
	/** 첫 글자는 무조건 대문자로 입력하도록 유효성 검사 설정 */
	/*
	for(i=0; i<document.joinForm.id.value.length; i++){
		var ch = document.joinForm.id.value.charAt(i);	
		if (ch < 'A' || ch > 'Z') {
		alert("아이디는 대문자로만 입력하셔야 합니다.");
		document.joinForm.id.focus();
		return;
		}
	} */
	
	var notString = /^[a-z|A-Z|ㄱ-ㅎ|ㅏ-ㅣ|가-힝]/; /* 모든 문자 */
	if(!notString.test(document.joinForm.id.value)){
		alert("아이디는 숫자로 시작할 수 없습니다.");
		document.joinForm.id.focus();
		return;
	}
			
	 if(document.joinForm.pw.value.lenght == 0) {
		alert("비밀번호는 필수 입력사항입니다!");
		document.joinForm.pw.focus();
		return;       /* 돌아오는 값  */
	}
	
	/*비밀번호 값이 숫자인지 유효성 검사 */
	
	if(isNaN(document.joinForm.pw.value)) {
		alert("비밀번호는 숫자만 입력가능합니다.");
		document.joinForm.pw.focus();
		return;
	}
	
	 if(document.joinForm.pw.value.lenght < 4) {
		alert("비밀번호는 4이상이어야 합니다!");
		document.joinForm.pw.focus();
		return;
				
	} 
	if(document.joinForm.pw.value != document.joinForm.pw_check.value) {
		alert("비밀번호가 다릅니다!");
		document.joinForm.pw_check.focus();
		return;
		
	} 
	if(document.joinForm.name.value.lenght == 0) {
		alert("이름은 필수 입력사항입니다!");
		document.joinForm.name.focus();
		return;
		
	} 
	if(document.joinForm.email.value.lenght == 0) {
		alert("이메일 필수 입력사항입니다!");
		document.joinForm.email.focus();
		return;
	}
	
	document.joinForm.submit();

}