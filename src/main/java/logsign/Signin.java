package logsign;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class Signin extends HttpServlet {
	public Signin() {
		
	}
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
		response.setContentType("text/html; charset=UTF-8");
		PrintWriter out = response.getWriter();
		String fullname = request.getParameter("fullname");
		String email = request.getParameter("email");
		String phonenumber = request.getParameter("phonenumber");
		String dayofbirth = request.getParameter("dayofbirth");
		String username = request.getParameter("username_sign");
		String password = request.getParameter("password_sign");
		String s = "<h1>Thông tin đăng ký tài khoản</h1>";
		s += "<br>Họ và tên: " + fullname;
		s += "<br>Email: " + email;
		s += "<br>Số điện thoại: " + phonenumber;
		s += "<br>Ngày sinh: " + dayofbirth;
		s += "<br>Tên đăng nhập: " + username;
		s += "<br>Mật khẩu: " + password;
		s += "<br><a href=\"index.html\">Quay về trang chính</a>";
		out.println(s);
	}
}
