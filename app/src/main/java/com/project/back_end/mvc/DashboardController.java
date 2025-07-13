package com.project.back_end.mvc;

import com.project.back_end.service.TokenValidationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import java.util.Map;

@Controller
public class DashboardController {

    // 2. Autowire the Shared Service
    @Autowired
    private TokenValidationService tokenValidationService;

    // 3. Define the adminDashboard Method
    @GetMapping("/adminDashboard/{token}")
    public String adminDashboard(@PathVariable String token) {
        Map<String, Object> result = tokenValidationService.validateToken(token, "admin");

        if (result.isEmpty()) {
            return "admin/adminDashboard"; // valid → forward to Thymeleaf view
        } else {
            return "redirect:/"; // invalid → redirect to login/home
        }
    }

    // 4. Define the doctorDashboard Method
    @GetMapping("/doctorDashboard/{token}")
    public String doctorDashboard(@PathVariable String token) {
        Map<String, Object> result = tokenValidationService.validateToken(token, "doctor");

        if (result.isEmpty()) {
            return "doctor/doctorDashboard"; // valid → forward to Thymeleaf view
        } else {
            return "redirect:/"; // invalid → redirect to login/home
        }
    }
}
