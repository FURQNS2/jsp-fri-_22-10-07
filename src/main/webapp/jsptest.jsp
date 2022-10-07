
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.util.Arrays" %>


<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<%!
		int a = 100;
		String b = "Korea"; 
		
	%>
	
	<%= b %><br>
	
	<% 
		int arr[] = {10, 20, 30};
		out.println(Arrays.toString(arr));
	%>
	<br>여기서부터 다른 페이지를 불러 온 것입니다.<br>
	<%@ include file="memberJoin.jsp" %>
	

</body>
</html>