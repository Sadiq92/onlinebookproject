package dev.aqeel.onlinebookstore;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import dev.aqeel.onlinebookstore.entity.Book;

@SpringBootApplication
public class OnlineBookStoreApplication {

	public static void main(String[] args) {
		
		//This is spring boot main method
		SpringApplication.run(OnlineBookStoreApplication.class, args);
	}

}
