<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<% request.setCharacterEncoding("UTF-8"); %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>회원 가입 완료</title>
	
</head>
<body>
	**회원 가입이 완료 되었습니다!** <br>
	<hr>
	<%
		String id = request.getParameter("id");
		String pw = request.getParameter("pw");
	 	String name = request.getParameter("name");
	%>
	
	<%= name %>님의 아이디는 <%= id%>이고 비밀번호는 <%= pw%> 입니다.
	
	
	
	
	
</body>
</html>