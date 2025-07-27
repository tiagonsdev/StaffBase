package com.example.Staffbase.Repository;

import com.example.Staffbase.Entity.user;
import org.springframework.data.jpa.repository.JpaRepository;

public interface userRepository extends JpaRepository<user, Long> {
}
