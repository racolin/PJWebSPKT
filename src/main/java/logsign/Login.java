package logsign;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class Login extends HttpServlet {
	public Login() {
		
	}
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
		response.setContentType("text/html; charset=UTF-8");
		PrintWriter out = response.getWriter();
		String username = request.getParameter("username_log");
		String password = request.getParameter("password_log");
		String s = "<h1>Đăng nhập không thành công</h1>";
		if (username.trim().equals("admin") && password.trim().equals("123")) {
			s = "<h1>Đăng nhập thành công</h1>";
		}
		s += "<br><a href=\"index.html\">Quay về trang chính</a>";
		out.println(s);
	}
}
