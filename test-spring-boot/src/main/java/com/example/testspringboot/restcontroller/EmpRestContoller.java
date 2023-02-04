package com.example.testspringboot.restcontroller;

import com.example.testspringboot.entity.Employee;
import com.example.testspringboot.repository.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class EmpRestContoller {
    @Autowired
    EmployeeRepo repo;

    @RequestMapping("/allemp")
    public List<Employee> allemoloyee(){
       return repo.findAll();
    }

    @PostMapping("/saveemp")
    public void saveemp(@RequestBody Employee e){
        repo.save(e);

    }
    @DeleteMapping("/delete/{eid}")
    public void deleteemp(@PathVariable("eid") int eid){
        repo.deleteById(eid);
    }
    @GetMapping("findemp/{eid}")
    public Optional<Employee> empfindbyId(@PathVariable int eid){
     return repo.findById(eid);
    }

    @PutMapping("/updateemp")
    public void updateemp(@RequestBody Employee e){
        repo.save(e);

    }

}
