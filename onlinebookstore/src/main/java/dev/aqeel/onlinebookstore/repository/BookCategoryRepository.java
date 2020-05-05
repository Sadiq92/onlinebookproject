package dev.aqeel.onlinebookstore.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import dev.aqeel.onlinebookstore.entity.BookCategory;

//@Repository


public interface BookCategoryRepository extends JpaRepository<BookCategory, Long> {

}
