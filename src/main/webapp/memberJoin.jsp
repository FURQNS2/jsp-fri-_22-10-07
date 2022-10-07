<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>회원가입</title>
<script type="text/javascript" src="js/members.js"></script>
</head>
<body>
	<h3>회원가입</h3>
	<hr>
	<form action="joinok.jsp" name="joinForm">
		아이디 : <input type="text" name="id" size="20"> <br><br>
		비번 : <input type="password" name="pw" size="20"> <br><br>
		비번확인: <input type="password" name="pw_check" size="20"> <br><br>
		이름 : <input type="text" name="name" size="20"> <br><br>
		이메일 : <input type="text" name="email" size="20"> <br><br>
		<input type="button" value="회원가입" onclick="infoCheck()"> &nbsp;&nbsp;&nbsp;
		<input type="reset" value="다시입력">
	</form>
</body>
</html>